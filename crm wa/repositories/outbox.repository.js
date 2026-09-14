'use strict';

const db = require('../config/database');
const { OUTBOUND_STATUS, RETRY_DELAYS_MS, MAX_ATTEMPTS } = require('../config/whatsapp');

async function findByRequestId(requestId) {
  if (!requestId) return null;
  return await db.getOne('SELECT * FROM wa_outbound_events WHERE request_id = ?', [requestId]);
}

async function findByIdempotencyKey(idempotencyKey) {
  if (!idempotencyKey) return null;
  return await db.getOne('SELECT * FROM wa_outbound_events WHERE idempotency_key = ?', [idempotencyKey]);
}

async function createOutboundEvent({
  requestId,
  conversationId,
  messageId,
  idempotencyKey,
  logicalRoute = 'GENERAL',
  physicalDestination,
  routingMode = 'TEST',
  status = OUTBOUND_STATUS.QUEUED,
}) {
  const id = `out_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
  const now = new Date().toISOString().slice(0, 19).replace('T', ' ');

  await db.query(
    `INSERT INTO wa_outbound_events (
      id, request_id, conversation_id, message_id, idempotency_key,
      logical_route, physical_destination, routing_mode, status,
      attempt_count, next_attempt_at, created_at, updated_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 0, ?, ?, ?)`,
    [
      id, requestId, conversationId, messageId, idempotencyKey,
      logicalRoute, physicalDestination, routingMode, status,
      now, now, now
    ]
  );

  return {
    id,
    requestId,
    conversationId,
    messageId,
    idempotencyKey,
    logicalRoute,
    physicalDestination,
    routingMode,
    status,
    attemptCount: 0,
    createdAt: now,
  };
}

/**
 * Concurrency-safe event fetcher:
 * Selects eligible QUEUED or RETRY_WAIT events where next_attempt_at <= now
 * Atomically marks them as SENDING to prevent double-dispatching by concurrent workers.
 */
async function claimNextOutboundEvent() {
  const now = new Date().toISOString().slice(0, 19).replace('T', ' ');

  if (db.isMySQL()) {
    const pool = db.getPool();
    const conn = await pool.getConnection();
    try {
      await conn.beginTransaction();
      const [rows] = await conn.query(
        `SELECT * FROM wa_outbound_events
         WHERE status IN ('QUEUED', 'RETRY_WAIT')
           AND (next_attempt_at IS NULL OR next_attempt_at <= ?)
         ORDER BY created_at ASC
         LIMIT 1
         FOR UPDATE`,
        [now]
      );

      if (!rows || rows.length === 0) {
        await conn.commit();
        return null;
      }

      const event = rows[0];
      await conn.query(
        `UPDATE wa_outbound_events SET status = 'SENDING', updated_at = ? WHERE id = ?`,
        [now, event.id]
      );
      await conn.commit();
      event.status = 'SENDING';
      return event;
    } catch (err) {
      await conn.rollback();
      throw err;
    } finally {
      conn.release();
    }
  } else {
    // SQLite atomic reservation
    const sqlite = db.getSqlite();
    const findAndClaim = sqlite.transaction(() => {
      const event = sqlite.prepare(
        `SELECT * FROM wa_outbound_events
         WHERE status IN ('QUEUED', 'RETRY_WAIT')
           AND (next_attempt_at IS NULL OR next_attempt_at <= ?)
         ORDER BY created_at ASC
         LIMIT 1`
      ).get(now);

      if (!event) return null;

      sqlite.prepare(
        `UPDATE wa_outbound_events SET status = 'SENDING', updated_at = ? WHERE id = ?`
      ).run(now, event.id);

      event.status = 'SENDING';
      return event;
    });

    return findAndClaim();
  }
}

async function updateEventSuccess(id, gatewayMessageId) {
  const now = new Date().toISOString().slice(0, 19).replace('T', ' ');
  await db.query(
    `UPDATE wa_outbound_events
     SET status = ?, gateway_message_id = ?, sent_at = ?, updated_at = ?
     WHERE id = ?`,
    [OUTBOUND_STATUS.SENT, gatewayMessageId, now, now, id]
  );
}

async function updateEventFailure(id, attemptNumber, errorMessage, isPermanent = false) {
  const now = new Date();
  const nowStr = now.toISOString().slice(0, 19).replace('T', ' ');

  let newStatus;
  let nextAttemptStr = null;

  if (isPermanent || attemptNumber >= MAX_ATTEMPTS) {
    newStatus = OUTBOUND_STATUS.FAILED_REQUIRES_ATTENTION;
  } else {
    newStatus = OUTBOUND_STATUS.RETRY_WAIT;
    const delayMs = RETRY_DELAYS_MS[attemptNumber] || (15 * 60 * 1000);
    const nextAttempt = new Date(now.getTime() + delayMs);
    nextAttemptStr = nextAttempt.toISOString().slice(0, 19).replace('T', ' ');
  }

  await db.query(
    `UPDATE wa_outbound_events
     SET status = ?, attempt_count = ?, last_error = ?, next_attempt_at = ?, updated_at = ?
     WHERE id = ?`,
    [newStatus, attemptNumber, String(errorMessage).slice(0, 500), nextAttemptStr, nowStr, id]
  );

  // Record attempt log
  await db.query(
    `INSERT INTO wa_outbound_attempts (outbound_event_id, attempt_number, error_message, created_at)
     VALUES (?, ?, ?, ?)`,
    [id, attemptNumber, String(errorMessage).slice(0, 500), nowStr]
  );

  return { status: newStatus, nextAttemptAt: nextAttemptStr };
}

async function mapGatewayMessage({ providerMessageId, conversationId, outboundEventId, shortCode }) {
  const now = new Date().toISOString().slice(0, 19).replace('T', ' ');
  try {
    await db.query(
      `INSERT INTO wa_gateway_message_map (provider_message_id, conversation_id, outbound_event_id, short_code, created_at)
       VALUES (?, ?, ?, ?, ?)`,
      [providerMessageId, conversationId, outboundEventId || null, shortCode, now]
    );
  } catch (err) {
    console.warn('[MessageMap] Error mapping provider message ID:', err.message);
  }
}

async function findConversationByProviderMessageId(providerMessageId) {
  if (!providerMessageId) return null;
  return await db.getOne(
    `SELECT * FROM wa_gateway_message_map WHERE provider_message_id = ?`,
    [providerMessageId]
  );
}

module.exports = {
  findByRequestId,
  findByIdempotencyKey,
  createOutboundEvent,
  claimNextOutboundEvent,
  updateEventSuccess,
  updateEventFailure,
  mapGatewayMessage,
  findConversationByProviderMessageId,
};

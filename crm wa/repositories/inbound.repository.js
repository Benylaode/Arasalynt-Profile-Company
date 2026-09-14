'use strict';

const db = require('../config/database');

async function recordInboundEvent({
  providerMessageId,
  eventType,
  fromJid,
  body = null,
  quotedMessageId = null,
  shortCode = null,
  conversationId = null,
  processingStatus = 'RECEIVED'
}) {
  const id = `in_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
  const now = new Date().toISOString().slice(0, 19).replace('T', ' ');

  try {
    await db.query(
      `INSERT INTO wa_inbound_events (
        id, provider_message_id, event_type, from_jid, body,
        quoted_message_id, short_code, conversation_id, processing_status, created_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [id, providerMessageId, eventType, fromJid, body, quotedMessageId, shortCode, conversationId, processingStatus, now]
    );
    return { id, isDuplicate: false };
  } catch (err) {
    if (err.message && (err.message.includes('UNIQUE') || err.message.includes('Duplicate'))) {
      return { id: null, isDuplicate: true };
    }
    throw err;
  }
}

async function markInboundProcessed(id, conversationId) {
  const now = new Date().toISOString().slice(0, 19).replace('T', ' ');
  await db.query(
    `UPDATE wa_inbound_events
     SET processing_status = 'PROCESSED', conversation_id = ?, processed_at = ?
     WHERE id = ?`,
    [conversationId, now, id]
  );
}

module.exports = {
  recordInboundEvent,
  markInboundProcessed,
};

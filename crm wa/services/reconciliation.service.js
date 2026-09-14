'use strict';

const db = require('../config/database');
const { triggerImmediateDispatch } = require('./outbox.service');

let cronTimer = null;

/**
 * Reconcile stuck events:
 * If an event was marked 'SENDING' but the server crashed or restarted,
 * after 2 minutes reset it to 'RETRY_WAIT' so it gets dispatched again.
 */
async function reconcileStuckEvents() {
  const twoMinutesAgo = new Date(Date.now() - 2 * 60 * 1000).toISOString().slice(0, 19).replace('T', ' ');
  const now = new Date().toISOString().slice(0, 19).replace('T', ' ');

  try {
    const result = await db.query(
      `UPDATE wa_outbound_events
       SET status = 'RETRY_WAIT', next_attempt_at = ?, updated_at = ?
       WHERE status = 'SENDING' AND updated_at < ?`,
      [now, now, twoMinutesAgo]
    );

    const count = result.affectedRows || result.changes || 0;
    if (count > 0) {
      console.log(`[Reconciliation] Berhasil merecover ${count} event yang sempat tertahan di state SENDING.`);
    }
  } catch (err) {
    console.warn('[Reconciliation] Error reconciling stuck events:', err.message);
  }
}

/**
 * Recovery Cron safety net: Runs every 30 seconds
 */
function startRecoveryCron(intervalMs = 30000) {
  if (cronTimer) clearInterval(cronTimer);

  cronTimer = setInterval(async () => {
    try {
      await reconcileStuckEvents();
      await triggerImmediateDispatch();
    } catch (err) {
      console.warn('[RecoveryCron] Error running recovery cycle:', err.message);
    }
  }, intervalMs);

  console.log(`[RecoveryCron] Recovery Cron aktif (interval: ${intervalMs / 1000}s).`);
}

function stopRecoveryCron() {
  if (cronTimer) {
    clearInterval(cronTimer);
    cronTimer = null;
  }
}

module.exports = {
  reconcileStuckEvents,
  startRecoveryCron,
  stopRecoveryCron,
};

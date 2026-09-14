'use strict';

const db = require('../config/database');

async function createMessage({ conversationId, direction, senderType, content, providerMessageId = null, deliveryStatus = 'CREATED' }) {
  const id = `msg_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
  const now = new Date().toISOString().slice(0, 19).replace('T', ' ');

  await db.query(
    `INSERT INTO wa_messages (id, conversation_id, direction, sender_type, content, provider_message_id, delivery_status, created_at, updated_at)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [id, conversationId, direction, senderType, content, providerMessageId, deliveryStatus, now, now]
  );

  return { id, conversationId, direction, senderType, content, providerMessageId, deliveryStatus, createdAt: now };
}

async function getMessagesByConversation(conversationId) {
  return await db.query(
    `SELECT * FROM wa_messages WHERE conversation_id = ? ORDER BY created_at ASC`,
    [conversationId]
  );
}

async function updateDeliveryStatus(id, deliveryStatus) {
  const now = new Date().toISOString().slice(0, 19).replace('T', ' ');
  await db.query(
    `UPDATE wa_messages SET delivery_status = ?, updated_at = ? WHERE id = ?`,
    [deliveryStatus, now, id]
  );
}

module.exports = {
  createMessage,
  getMessagesByConversation,
  updateDeliveryStatus,
};

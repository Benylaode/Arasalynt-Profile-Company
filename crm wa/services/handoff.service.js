'use strict';

const conversationRepo = require('../repositories/conversation.repository');
const messageRepo = require('../repositories/message.repository');
const outboxRepo = require('../repositories/outbox.repository');
const { resolveDestination } = require('./routing.service');
const { triggerImmediateDispatch } = require('./outbox.service');

/**
 * Handle human handoff request using Transactional Outbox pattern.
 * Saves conversation, message, and outbox event in database BEFORE
 * attempting any WhatsApp network delivery.
 */
async function processHandoffRequest({
  requestId,
  sessionId,
  message,
  name,
}) {
  if (!message || !message.trim()) {
    throw new Error('Pesan (message) wajib diisi.');
  }

  // Stable Request ID: If client provided one, use it; otherwise generate
  const reqId = requestId || `handoff_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
  const idempotencyKey = `waout_${reqId}`;

  // Layer 1 Idempotency Check:
  const existingOutbound = await outboxRepo.findByRequestId(reqId);
  if (existingOutbound) {
    const existingConv = await conversationRepo.findById(existingOutbound.conversation_id);
    return {
      accepted: true,
      requestId: reqId,
      conversationCode: existingConv ? existingConv.short_code : null,
      status: existingOutbound.status,
      isDuplicate: true,
    };
  }

  // Find existing conversation for this session or create a new one
  let conversation = sessionId ? await conversationRepo.findBySessionId(sessionId) : null;
  if (!conversation) {
    conversation = await conversationRepo.createConversation({
      sessionId,
      guestName: name || 'Tamu Website',
      initialRoute: 'GENERAL',
      priority: 'NORMAL',
    });
  }

  // 1. Store customer message
  const customerMsg = await messageRepo.createMessage({
    conversationId: conversation.id,
    direction: 'INBOUND',
    senderType: 'USER',
    content: message,
    deliveryStatus: 'QUEUED',
  });

  // 2. Resolve destination (testing converges to 082252856710)
  const destInfo = resolveDestination(conversation.logical_route || 'GENERAL');

  // 3. Store Transactional Outbox event
  const outboundEvent = await outboxRepo.createOutboundEvent({
    requestId: reqId,
    conversationId: conversation.id,
    messageId: customerMsg.id,
    idempotencyKey: idempotencyKey,
    logicalRoute: conversation.logical_route || 'GENERAL',
    physicalDestination: destInfo.physicalDestination,
    routingMode: destInfo.routingMode,
  });

  // 4. Trigger Immediate Dispatcher asynchronously (non-blocking)
  setImmediate(() => {
    triggerImmediateDispatch().catch((err) => {
      console.warn('[Handoff] Immediate dispatch warning:', err.message);
    });
  });

  // 5. Return 202 Accepted immediately
  return {
    accepted: true,
    requestId: reqId,
    conversationCode: conversation.short_code || conversation.shortCode,
    status: 'QUEUED',
    isDuplicate: false,
  };
}

module.exports = {
  processHandoffRequest,
};

'use strict';

const outboxRepo = require('../repositories/outbox.repository');
const conversationRepo = require('../repositories/conversation.repository');
const messageRepo = require('../repositories/message.repository');
const { triageMessage } = require('./triage.service');
const { formatNotificationText, resolveDestination } = require('./routing.service');
const circuitBreaker = require('./circuit-breaker.service');

let isDispatching = false;
let gatewaySenderFn = null;

function registerGatewaySender(fn) {
  gatewaySenderFn = fn;
}

/**
 * Immediate Dispatcher:
 * Pulls next pending event using atomic claim and dispatches to WhatsApp.
 */
async function triggerImmediateDispatch() {
  if (isDispatching) return;
  isDispatching = true;

  try {
    let event = await outboxRepo.claimNextOutboundEvent();
    while (event) {
      await processSingleOutboundEvent(event);
      event = await outboxRepo.claimNextOutboundEvent();
    }
  } catch (err) {
    console.error('[OutboxDispatcher] Error processing queue:', err.message);
  } finally {
    isDispatching = false;
  }
}

async function processSingleOutboundEvent(event) {
  const conversation = await conversationRepo.findById(event.conversation_id);
  const message = await messageRepo.getMessagesByConversation(event.conversation_id);
  const userMessage = message.find((m) => m.id === event.message_id) || message[0];

  // 1. AI Triage (Safe, non-blocking with fallback to GENERAL)
  let triageResult = { intent: 'GENERAL', priority: 'NORMAL', summary: '' };
  try {
    triageResult = await triageMessage(userMessage ? userMessage.content : '');
  } catch {
    // Fallback guaranteed
  }

  // Update conversation route and priority
  await conversationRepo.updateConversationRoute(event.conversation_id, {
    logicalRoute: triageResult.intent,
    priority: triageResult.priority,
    aiSummary: triageResult.summary,
  });

  // 2. Resolve destination
  const destInfo = resolveDestination(triageResult.intent);

  // 3. Format structured WhatsApp notification
  const notificationText = formatNotificationText({
    logicalRoute: triageResult.intent,
    priority: triageResult.priority,
    guestName: conversation ? conversation.guest_name : 'Tamu Website',
    messageContent: userMessage ? userMessage.content : '',
    aiSummary: triageResult.summary,
    shortCode: conversation ? conversation.short_code : '',
  });

  // 4. Circuit Breaker check
  if (!circuitBreaker.isAvailable()) {
    console.warn('[Outbox] Circuit Breaker OPEN. Menunda pengiriman event ID:', event.id);
    await outboxRepo.updateEventFailure(event.id, event.attempt_count + 1, 'Circuit Breaker OPEN');
    return;
  }

  // 5. Send through WhatsApp Gateway
  if (!gatewaySenderFn) {
    console.warn('[Outbox] Gateway sender function belum terdaftar.');
    await outboxRepo.updateEventFailure(event.id, event.attempt_count + 1, 'Gateway sender uninitialized');
    return;
  }

  try {
    const result = await gatewaySenderFn({
      to: destInfo.physicalDestination,
      text: notificationText,
      idempotencyKey: event.idempotency_key,
    });

    if (result && result.success) {
      circuitBreaker.recordSuccess();
      await outboxRepo.updateEventSuccess(event.id, result.messageId || 'sent_ack');

      // Map gateway message ID for quoted reply routing
      if (result.messageId && conversation) {
        await outboxRepo.mapGatewayMessage({
          providerMessageId: result.messageId,
          conversationId: conversation.id,
          outboundEventId: event.id,
          shortCode: conversation.short_code,
        });
      }

      console.log(`[Outbox] Sukses kirim WhatsApp ke ${destInfo.physicalDestination} (Sesi: #${conversation ? conversation.short_code : '-'}, MsgId: ${result.messageId})`);
    } else {
      throw new Error(result?.error || 'Gateway returned failure');
    }
  } catch (err) {
    circuitBreaker.recordFailure(err);
    console.error(`[Outbox] Gagal kirim WhatsApp event ${event.id}:`, err.message);
    await outboxRepo.updateEventFailure(event.id, event.attempt_count + 1, err.message);
  }
}

module.exports = {
  triggerImmediateDispatch,
  registerGatewaySender,
  processSingleOutboundEvent,
};

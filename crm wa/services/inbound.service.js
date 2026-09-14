'use strict';

const outboxRepo = require('../repositories/outbox.repository');
const conversationRepo = require('../repositories/conversation.repository');
const messageRepo = require('../repositories/message.repository');
const inboundRepo = require('../repositories/inbound.repository');
const { extractShortCode } = require('./shortcode.service');

/**
 * Clean session tag from text:
 * "[#A7K2Q9] Halo selamat siang" -> "Halo selamat siang"
 * "#A7K2Q9 Halo selamat siang" -> "Halo selamat siang"
 */
function cleanCsReplyText(text) {
  if (!text) return '';
  return String(text)
    .replace(/^\[#[2-9A-HJ-NP-Z]{6}\]\s*/i, '')
    .replace(/^#[2-9A-HJ-NP-Z]{6}\s*/i, '')
    .replace(/^\[#guest_[a-zA-Z0-9_-]+\]\s*/i, '')
    .replace(/^#guest_[a-zA-Z0-9_-]+\s*/i, '')
    .trim();
}

/**
 * Resolve conversation and store inbound reply from CS.
 */
async function processInboundWhatsAppMessage({
  providerMessageId,
  fromJid,
  body,
  quotedMessageId = null,
}) {
  // 1. Semantic Deduplication
  const rec = await inboundRepo.recordInboundEvent({
    providerMessageId,
    eventType: 'message',
    fromJid,
    body,
    quotedMessageId,
  });

  if (rec.isDuplicate) {
    console.log(`[Inbound] Pesan duplikat diabaikan: ${providerMessageId}`);
    return { status: 'ignored', reason: 'duplicate' };
  }

  let conversation = null;
  let resolutionMethod = null;

  // 2. Priority 1: Quoted Message ID mapping
  if (quotedMessageId) {
    const mapping = await outboxRepo.findConversationByProviderMessageId(quotedMessageId);
    if (mapping && mapping.conversation_id) {
      conversation = await conversationRepo.findById(mapping.conversation_id);
      if (conversation) resolutionMethod = 'quoted_message';
    }
  }

  // 3. Priority 2: Short Conversation Code e.g. [#A7K2Q9]
  if (!conversation && body) {
    const shortCode = extractShortCode(body);
    if (shortCode) {
      conversation = await conversationRepo.findByShortCode(shortCode);
      if (conversation) resolutionMethod = 'short_code';
    }
  }

  // 4. Priority 3: Legacy format #guest_...
  if (!conversation && body) {
    const legacyMatch = String(body).match(/\[#(guest_[a-zA-Z0-9_-]+)\]|(?:^|\s)#(guest_[a-zA-Z0-9_-]+)/i);
    if (legacyMatch) {
      const sessionId = legacyMatch[1] || legacyMatch[2];
      conversation = await conversationRepo.findBySessionId(sessionId);
      if (conversation) resolutionMethod = 'legacy_session';
    }
  }

  // If message doesn't match any conversation, ignore safely to protect customer privacy
  if (!conversation) {
    console.log(`[Inbound] Non-session WhatsApp message diabaikan (bukan balasan CS aktif): "${String(body).slice(0, 50)}"`);
    return { status: 'ignored', reason: 'non_session_msg' };
  }

  // 5. Clean reply text
  const cleanText = cleanCsReplyText(body) || body;

  // 6. Store Human CS reply message
  const csMessage = await messageRepo.createMessage({
    conversationId: conversation.id,
    direction: 'OUTBOUND', // Outbound to visitor
    senderType: 'HUMAN_CS',
    content: cleanText,
    providerMessageId,
    deliveryStatus: 'DELIVERED',
  });

  await conversationRepo.updateStatus(conversation.id, 'HUMAN_ACTIVE');
  await inboundRepo.markInboundProcessed(rec.id, conversation.id);

  console.log(`[Inbound] Balasan CS berhasil dipetakan ke Conversation #${conversation.short_code} (Metode: ${resolutionMethod}): "${cleanText.slice(0, 50)}"`);

  return {
    status: 'ok',
    conversationId: conversation.id,
    shortCode: conversation.short_code,
    sessionId: conversation.session_id,
    cleanText,
    messageId: csMessage.id,
  };
}

module.exports = {
  processInboundWhatsAppMessage,
  cleanCsReplyText,
};

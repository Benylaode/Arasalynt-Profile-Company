import 'server-only';

import { createHash, createHmac, randomBytes } from 'node:crypto';

const WEBHOOK_PATH = '/api/v1/integrations/webhooks/events';

export type MarkaMessageSenderType = 'PHONE' | 'EMAIL' | 'EXTERNAL';
export type MarkaMessageSyncStatus = 'DELIVERED' | 'FAILED' | 'NOT_CONFIGURED';
export type MarkaMessageChannel = 'webchat' | 'whatsapp';

export type MarkaMessageInput = {
  channel: MarkaMessageChannel;
  messageId: string;
  threadId: string;
  senderName: string;
  senderValue: string;
  senderType: MarkaMessageSenderType;
  text: string;
  occurredAt?: string;
};

/** Sends customer-originated text from Arsalynk's server to Marka CRM. */
export async function sendMarkaMessageReceived(input: MarkaMessageInput): Promise<MarkaMessageSyncStatus> {
  const webhookUrl = process.env.MARKA_CRM_WEBHOOK_URL?.trim();
  const integrationId = process.env.MARKA_CRM_INTEGRATION_ID?.trim();
  const keyId = process.env.MARKA_CRM_KEY_ID?.trim();
  const signingSecret = process.env.MARKA_CRM_SIGNING_SECRET?.trim();

  if (!webhookUrl && !integrationId && !keyId && !signingSecret) return 'NOT_CONFIGURED';
  if (!webhookUrl || !integrationId || !keyId || !signingSecret) {
    console.error('[Marka CRM] Message webhook credentials are incomplete.');
    return 'FAILED';
  }
  if (!input.text.trim() || input.text.length > 100_000 || !input.messageId.trim() || !input.threadId.trim()) {
    console.warn('[Marka CRM] Invalid message event was skipped.');
    return 'FAILED';
  }

  let target: URL;
  try {
    target = new URL(webhookUrl);
  } catch {
    console.error('[Marka CRM] MARKA_CRM_WEBHOOK_URL is not a valid URL.');
    return 'FAILED';
  }
  const localDevelopment = process.env.NODE_ENV !== 'production' &&
    ['localhost', '127.0.0.1'].includes(target.hostname);
  if (target.pathname !== WEBHOOK_PATH || target.search || target.hash ||
      (target.protocol !== 'https:' && !localDevelopment)) {
    console.error('[Marka CRM] Webhook URL must use the exact Marka endpoint and HTTPS in production.');
    return 'FAILED';
  }

  const parsedOccurredAt = input.occurredAt ? new Date(input.occurredAt) : new Date();
  const occurredAt = Number.isNaN(parsedOccurredAt.getTime()) ? new Date() : parsedOccurredAt;
  const eventId = `arsalynk-${input.channel}-${createHash('sha256').update(input.messageId).digest('hex').slice(0, 40)}`;
  const body = JSON.stringify({
    event_id: eventId,
    event_type: 'message.received',
    schema_version: 1,
    occurred_at: occurredAt.toISOString(),
    data: {
      thread_id: input.threadId,
      message_id: input.messageId,
      sender: {
        display_name: input.senderName.slice(0, 200),
        value: input.senderValue,
        type: input.senderType,
      },
      message: { type: 'TEXT', text: input.text },
      origin_domain: process.env.PUBLIC_ORIGIN_DOMAIN || 'arsalynk.com',
    },
  });
  const rawBody = Buffer.from(body, 'utf8');

  // Keep event ID and body stable on retries; sign each attempt with a fresh nonce.
  for (let attempt = 1; attempt <= 2; attempt += 1) {
    const requestTimestamp = String(Math.floor(Date.now() / 1000));
    const nonce = randomBytes(16).toString('hex');
    const prefix = `v1\nPOST\n${WEBHOOK_PATH}\n${requestTimestamp}\n${nonce}\n`;
    const signature = createHmac('sha256', signingSecret)
      .update(Buffer.from(prefix, 'utf8'))
      .update(rawBody)
      .digest('hex');

    try {
      const response = await fetch(target, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Integration-Id': integrationId,
          'X-Integration-Key-Id': keyId,
          'X-Integration-Timestamp': requestTimestamp,
          'X-Integration-Nonce': nonce,
          'X-Integration-Signature': signature,
        },
        body,
        cache: 'no-store',
        signal: AbortSignal.timeout(4_000),
      });
      if (response.ok) return 'DELIVERED';
      if (![408, 429].includes(response.status) && response.status < 500) {
        console.error(`[Marka CRM] Message event ${eventId} rejected with HTTP ${response.status}.`);
        return 'FAILED';
      }
      console.warn(`[Marka CRM] Message event ${eventId}, attempt ${attempt}: HTTP ${response.status}.`);
    } catch (error) {
      const reason = error instanceof Error ? error.name : 'UNKNOWN_ERROR';
      console.warn(`[Marka CRM] Message event ${eventId}, attempt ${attempt}: ${reason}.`);
    }
    if (attempt < 2) await new Promise((resolve) => setTimeout(resolve, 300));
  }

  return 'FAILED';
}

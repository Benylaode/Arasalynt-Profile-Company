import 'server-only';

import { createHmac, randomBytes, randomUUID } from 'node:crypto';

const WEBHOOK_PATH = '/api/v1/integrations/webhooks/events';

export type MarkaInquirySyncStatus = 'DELIVERED' | 'FAILED' | 'NOT_CONFIGURED';

type InquiryInput = {
  name: string;
  company: string;
  email: string;
  phone: string;
  inquiry: string;
  message: string;
};

/** Server-side adapter between the existing contact form and Marka CRM. */
export async function sendMarkaInquiry(input: InquiryInput): Promise<MarkaInquirySyncStatus> {
  const webhookUrl = process.env.MARKA_CRM_WEBHOOK_URL?.trim();
  const integrationId = process.env.MARKA_CRM_INTEGRATION_ID?.trim();
  const keyId = process.env.MARKA_CRM_KEY_ID?.trim();
  const signingSecret = process.env.MARKA_CRM_SIGNING_SECRET?.trim();

  if (!webhookUrl && !integrationId && !keyId && !signingSecret) return 'NOT_CONFIGURED';
  if (!webhookUrl || !integrationId || !keyId || !signingSecret) {
    console.error('[Marka CRM] Webhook credentials are incomplete.');
    return 'FAILED';
  }

  let target: URL;
  try {
    target = new URL(webhookUrl);
  } catch {
    console.error('[Marka CRM] MARKA_CRM_WEBHOOK_URL is not a valid URL.');
    return 'FAILED';
  }
  const isLocalDevelopment = process.env.NODE_ENV !== 'production' &&
    ['localhost', '127.0.0.1'].includes(target.hostname);
  if (target.pathname !== WEBHOOK_PATH || target.search || target.hash ||
      (target.protocol !== 'https:' && !isLocalDevelopment)) {
    console.error('[Marka CRM] Webhook URL must use the exact Marka endpoint and HTTPS in production.');
    return 'FAILED';
  }

  // Keep the same event body and ID across retries so Marka can deduplicate safely.
  const timestamp = Math.floor(Date.now() / 1000);
  const eventId = `arsalynk-${randomUUID()}`;
  const body = JSON.stringify({
    event_id: eventId,
    event_type: 'inquiry.submitted',
    schema_version: 1,
    timestamp,
    occurred_at: new Date(timestamp * 1000).toISOString(),
    data: {
      customer: { name: input.name, company: input.company, email: input.email, phone: input.phone },
      requirements: {
        subject: input.inquiry,
        description: `${input.message}\n\nPerusahaan: ${input.company}`,
      },
    },
  });
  const rawBody = Buffer.from(body, 'utf8');

  for (let attempt = 1; attempt <= 3; attempt += 1) {
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
        signal: AbortSignal.timeout(8_000),
      });

      if (response.ok) return 'DELIVERED';
      if (![408, 429].includes(response.status) && response.status < 500) {
        console.error(`[Marka CRM] Event ${eventId} rejected with HTTP ${response.status}.`);
        return 'FAILED';
      }
      console.warn(`[Marka CRM] Event ${eventId}, attempt ${attempt}: HTTP ${response.status}.`);
    } catch (error) {
      const errorName = error instanceof Error ? error.name : 'UNKNOWN_ERROR';
      console.warn(`[Marka CRM] Event ${eventId}, attempt ${attempt}: ${errorName}.`);
    }

    if (attempt < 3) await new Promise((resolve) => setTimeout(resolve, 400 * (2 ** (attempt - 1))));
  }

  return 'FAILED';
}

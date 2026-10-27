import { createHmac, randomBytes, timingSafeEqual } from 'node:crypto';
import { crmRepo } from '@/lib/repositories/crm';

export interface MarkaConfig {
  webhookUrl: string;
  integrationId: string;
  keyId: string;
  signingSecret: string;
  publicOriginDomain?: string;
  outboundSecret?: string;
}

export function getMarkaConfig(): MarkaConfig {
  // Parsing domain secara fleksibel dari PUBLIC_ORIGIN_DOMAIN atau NEXT_PUBLIC_SITE_URL
  const rawDomain =
    process.env.PUBLIC_ORIGIN_DOMAIN ||
    process.env.NEXT_PUBLIC_SITE_URL ||
    '';

  const cleanDomain = rawDomain
    .trim()
    .replace(/^https?:\/\//, '')
    .replace(/\/.*$/, '')
    .replace(/^["']|["']$/g, '');

  return {
    webhookUrl: (process.env.MARKA_CRM_WEBHOOK_URL || '')
      .trim()
      .replace(/^["']|["']$/g, ''),
    integrationId: (process.env.MARKA_CRM_INTEGRATION_ID || '')
      .trim()
      .replace(/^["']|["']$/g, ''),
    keyId: (process.env.MARKA_CRM_KEY_ID || '')
      .trim()
      .replace(/^["']|["']$/g, ''),
    signingSecret: (process.env.MARKA_CRM_SIGNING_SECRET || '')
      .trim()
      .replace(/^["']|["']$/g, ''),
    publicOriginDomain: cleanDomain || undefined,
    outboundSecret: (process.env.MARKA_OUTBOUND_SIGNING_SECRET || '')
      .trim()
      .replace(/^["']|["']$/g, ''),
  };
}

/**
 * Helper: Mengambil base URL utama dari Marka CRM berbasis environment variable
 */
export function getMarkaBaseUrl(customConfig?: Partial<MarkaConfig>): string {
  const config = { ...getMarkaConfig(), ...customConfig };
  if (!config.webhookUrl) return '';
  try {
    const urlObj = new URL(config.webhookUrl);
    return urlObj.origin;
  } catch {
    return '';
  }
}

export interface MarkaSendResult {
  success: boolean;
  status: number;
  event_id: string;
  duplicate?: boolean;
  data?: unknown;
  error?: string | unknown;
  attempts: number;
  latencyMs: number;
  requestHeaders?: Record<string, string>;
  requestPayload?: unknown;
}

export async function sendMarkaEvent(
  eventId: string,
  eventType: string,
  data: Record<string, unknown>,
  customConfig?: Partial<MarkaConfig>,
  options?: { omitOriginDomain?: boolean }
): Promise<MarkaSendResult> {
  const config = { ...getMarkaConfig(), ...customConfig };
  const startTime = Date.now();

  if (!config.webhookUrl) {
    return {
      success: false,
      status: 500,
      event_id: eventId,
      error: 'MARKA_CRM_WEBHOOK_URL belum dikonfigurasi pada environment variable.',
      attempts: 0,
      latencyMs: Date.now() - startTime,
    };
  }

  let path = '/api/v1/integrations/webhooks/events';
  try {
    const urlObj = new URL(config.webhookUrl);
    path = urlObj.pathname || path;
  } catch {
    // Standard path fallback jika parsing URL gagal
  }

  // Sisipkan origin_domain HANYA JIKA tersedia dan belum ditentukan di data
  const finalData: Record<string, unknown> = { ...data };
  if (options?.omitOriginDomain) {
    delete finalData.origin_domain;
  } else if (config.publicOriginDomain && !finalData.origin_domain) {
    finalData.origin_domain = config.publicOriginDomain;
  }

  const bodyObj = {
    event_id: eventId,
    event_type: eventType,
    schema_version: 1,
    occurred_at: new Date().toISOString(),
    data: finalData,
  };

  const body = JSON.stringify(bodyObj);

  let lastStatus = 0;
  let lastError: unknown = null;
  let responseData: unknown = null;
  let recordedHeaders: Record<string, string> = {};

  for (let attempt = 1; attempt <= 3; attempt++) {
    const timestamp = String(Math.floor(Date.now() / 1000));
    const nonce = randomBytes(16).toString('hex');
    const prefix = `v1\nPOST\n${path}\n${timestamp}\n${nonce}\n`;

    const signature = createHmac('sha256', config.signingSecret)
      .update(Buffer.from(prefix, 'utf8'))
      .update(Buffer.from(body, 'utf8'))
      .digest('hex');

    recordedHeaders = {
      'Content-Type': 'application/json',
      'X-Integration-Id': config.integrationId,
      'X-Integration-Key-Id': config.keyId,
      'X-Integration-Timestamp': timestamp,
      'X-Integration-Nonce': nonce,
      'X-Integration-Signature': signature,
    };

    try {
      const response = await fetch(config.webhookUrl, {
        method: 'POST',
        headers: recordedHeaders,
        body,
        cache: 'no-store',
        signal: AbortSignal.timeout(8000),
      });

      lastStatus = response.status;
      const responseText = await response.text();

      try {
        responseData = JSON.parse(responseText);
      } catch {
        responseData = responseText;
      }

      if (response.status === 200 || response.status === 202) {
        const latencyMs = Date.now() - startTime;
        const result: MarkaSendResult = {
          success: true,
          status: response.status,
          event_id: eventId,
          data: responseData,
          attempts: attempt,
          latencyMs,
          requestHeaders: recordedHeaders,
          requestPayload: bodyObj,
        };

        try {
          crmRepo.logEvent({
            eventId,
            eventType,
            direction: 'INBOUND_DISPATCHED',
            statusCode: response.status,
            success: 1,
            payloadJson: JSON.stringify(bodyObj),
            responseJson: JSON.stringify(responseData),
          });
        } catch (logErr) {
          console.warn('[CRM Logger] Failed to write event log:', logErr);
        }

        return result;
      }

      if (
        response.status < 500 &&
        response.status !== 408 &&
        response.status !== 429
      ) {
        lastError = responseData;
        break;
      }

      lastError = responseData;
      if (attempt === 3) break;
    } catch (err: unknown) {
      lastError = err instanceof Error ? err.message : String(err);
      if (attempt === 3) break;
    }

    await new Promise((resolve) =>
      setTimeout(resolve, 300 * Math.pow(2, attempt - 1))
    );
  }

  const latencyMs = Date.now() - startTime;
  const failureResult: MarkaSendResult = {
    success: false,
    status: lastStatus || 500,
    event_id: eventId,
    error: lastError,
    attempts: 3,
    latencyMs,
    requestHeaders: recordedHeaders,
    requestPayload: bodyObj,
  };

  try {
    crmRepo.logEvent({
      eventId,
      eventType,
      direction: 'INBOUND_DISPATCHED',
      statusCode: lastStatus || 500,
      success: 0,
      payloadJson: JSON.stringify(bodyObj),
      responseJson: JSON.stringify(lastError),
    });
  } catch (logErr) {
    console.warn('[CRM Logger] Failed to write failure log:', logErr);
  }

  return failureResult;
}

export function verifyMarkaOutboundSignature(
  rawBody: string,
  signatureHeader: string,
  timestamp: string,
  secretOverride?: string
): boolean {
  const secret = secretOverride || getMarkaConfig().outboundSecret;
  if (!secret) return false;

  const prefix = `v1\nPOST\n${timestamp}\n`;
  const expectedSignature =
    'sha256=' +
    createHmac('sha256', secret)
      .update(Buffer.from(prefix + rawBody, 'utf8'))
      .digest('hex');

  try {
    const a = Buffer.from(signatureHeader);
    const b = Buffer.from(expectedSignature);
    if (a.length !== b.length) return false;
    return timingSafeEqual(a, b);
  } catch {
    return false;
  }
}

export async function fetchMarkaPortalData(
  type: 'quotations' | 'tickets',
  id: string,
  token: string
) {
  const baseUrl = getMarkaBaseUrl();

  if (!baseUrl) {
    return {
      status: 500,
      ok: false,
      data: { error: 'MARKA_CRM_WEBHOOK_URL belum dikonfigurasi' },
    };
  }

  const endpoint = `${baseUrl}/api/v1/portal/${type}/${id}`;

  const res = await fetch(endpoint, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    signal: AbortSignal.timeout(8000),
  });

  const text = await res.text();
  let json: unknown = null;
  try {
    json = JSON.parse(text);
  } catch {
    json = text;
  }

  return {
    status: res.status,
    ok: res.ok,
    data: json,
  };
}

export type MarkaInquirySyncStatus = 'DELIVERED' | 'FAILED' | 'NOT_CONFIGURED';

export async function sendMarkaInquiry(input: {
  name: string;
  company?: string;
  email?: string;
  phone?: string;
  inquiry?: string;
  message?: string;
}): Promise<MarkaInquirySyncStatus> {
  const eventId = `inq-${Date.now()}-${randomBytes(4).toString('hex')}`;

  const cleanName = String(input.name || 'Calon Klien').trim().slice(0, 200);
  const rawEmail = String(input.email || '').trim().toLowerCase();
  const rawPhone = String(input.phone || '').trim();
  const phoneDigits = rawPhone.replace(/\D/g, '');

  const domain = getMarkaConfig().publicOriginDomain || 'lead.internal';

  const effectiveEmail =
    rawEmail && rawEmail.includes('@')
      ? rawEmail.slice(0, 320)
      : phoneDigits
      ? `${phoneDigits}@phone.${domain}`
      : `leads@${domain}`;

  const cleanPhone = rawPhone ? rawPhone.slice(0, 40) : undefined;
  const cleanCompany = input.company ? String(input.company).trim().slice(0, 200) : undefined;
  const cleanSubject = String(input.inquiry || 'Inquiry Layanan').trim().slice(0, 300);
  const cleanDesc = String(
    input.message
      ? `${input.message}${cleanCompany ? `\n\nPerusahaan: ${cleanCompany}` : ''}`
      : `Inquiry dari formulir website.${cleanCompany ? ` Perusahaan: ${cleanCompany}` : ''}`
  ).slice(0, 20000);

  const result = await sendMarkaEvent(eventId, 'inquiry.submitted', {
    customer: {
      name: cleanName,
      email: effectiveEmail,
      ...(cleanPhone ? { phone: cleanPhone } : {}),
      ...(cleanCompany ? { company: cleanCompany } : {}),
    },
    requirements: {
      subject: cleanSubject,
      description: cleanDesc,
    },
  });

  return result.success ? 'DELIVERED' : 'FAILED';
}

/**
 * Mengecek status eksekusi event pada Marka CRM / Event Bus
 */
export async function getMarkaEventStatus(eventId: string) {
  const config = getMarkaConfig();
  const baseUrl = process.env.MARKA_CRM_API_URL || getMarkaBaseUrl();
  const apiKey = process.env.MARKA_CRM_API_KEY || '';

  if (!baseUrl) {
    return {
      success: false,
      status: 500,
      data: null,
      error: 'Base URL Marka CRM (MARKA_CRM_WEBHOOK_URL / MARKA_CRM_API_URL) belum dikonfigurasi pada .env',
    };
  }

  const endpoint = `${baseUrl.replace(/\/$/, '')}/api/v1/events/status/${encodeURIComponent(eventId)}`;

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    'X-Integration-Id': config.integrationId,
    'X-Integration-Key-Id': config.keyId,
  };

  if (apiKey) {
    headers['Authorization'] = `Bearer ${apiKey}`;
  }

  try {
    const response = await fetch(endpoint, {
      method: 'GET',
      headers,
      cache: 'no-store',
      signal: AbortSignal.timeout(8000),
    });

    const data = await response.json().catch(() => ({}));

    return {
      success: response.ok,
      status: response.status,
      data,
      error: response.ok ? null : (data.message || data.error || 'Failed to fetch event status'),
    };
  } catch (error: unknown) {
    return {
      success: false,
      status: 500,
      data: null,
      error: error instanceof Error ? error.message : 'Network error checking event status',
    };
  }
}
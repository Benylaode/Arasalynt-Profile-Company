/**
 * WhatsApp Reliability Architecture Configuration (Next.js Layer)
 * 
 * SENDER:              085904403535 (6285904403535)
 * TESTING DESTINATION: 087862766846 (6287862766846)
 */

export const WA_CONFIG = {
  get baseUrl(): string {
    let url = (process.env.WAHA_BASE_URL || process.env.WHATSAPP_BACKEND_URL || 'https://green-wallaby-885391.hostingersite.com').trim();
    url = url.replace(/^=+/, '').trim();
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      url = `https://${url}`;
    }
    return url.replace(/\/+$/, '');
  },

  get secret(): string {
    return (process.env.GATEWAY_SECRET || process.env.WAHA_API_KEY || 'arsalynt_wa_secret_prod_2026_secure').trim();
  },

  get senderPhone(): string {
    return '6285904403535';
  },

  get testDestinationPhone(): string {
    return '6287862766846';
  },

  get timeoutMs(): number {
    const ms = parseInt(process.env.WAHA_TIMEOUT_MS || '', 10);
    return !isNaN(ms) && ms > 0 ? ms : 15000;
  },
};

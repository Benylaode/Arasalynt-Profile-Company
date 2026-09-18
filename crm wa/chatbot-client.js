const crypto = require('crypto');

/**
 * Optional Chatbot Client for WhatsApp Auto Reply.
 *
 * This module is intentionally isolated from the existing Baileys/Webhook flow.
 * It only knows how to:
 *  - build the enterprise signed context expected by Chatbot_Arsalynk,
 *  - call POST /api/v1/chat/completions,
 *  - parse the SSE response into one WhatsApp-ready text response.
 */

function parseCsv(value, fallback = []) {
  if (!value) return fallback;
  return String(value)
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);
}

function canonicalJson(obj) {
  if (obj === null || typeof obj !== 'object') {
    return JSON.stringify(obj);
  }

  if (Array.isArray(obj)) {
    return '[' + obj.map((item) => canonicalJson(item)).join(',') + ']';
  }

  const sortedKeys = Object.keys(obj).sort();
  const pairs = sortedKeys.map(
    (key) => JSON.stringify(key) + ':' + canonicalJson(obj[key]),
  );

  return '{' + pairs.join(',') + '}';
}

function getConfig() {
  return {
    apiUrl: String(process.env.CHATBOT_API_URL || '').trim(),
    tenantApiKey: String(process.env.CHATBOT_TENANT_API_KEY || '').trim(),
    externalTenantId: String(process.env.CHATBOT_TENANT_EXTERNAL_ID || '').trim(),
    inboundContextKey: String(process.env.CHATBOT_INBOUND_CONTEXT_KEY || '').trim(),
    roleCodes: parseCsv(process.env.CHATBOT_ROLE_CODES, ['CUSTOMER']),
    enabledModules: parseCsv(process.env.CHATBOT_ENABLED_MODULES, ['GENERAL']),
    locale: String(process.env.CHATBOT_LOCALE || 'id-ID').trim() || 'id-ID',
    timeoutMs: Math.max(1000, Number(process.env.CHATBOT_TIMEOUT_MS) || 70000),
  };
}

function getMissingConfig() {
  const config = getConfig();
  const missing = [];

  if (!config.apiUrl) missing.push('CHATBOT_API_URL');
  if (!config.tenantApiKey) missing.push('CHATBOT_TENANT_API_KEY');
  if (!config.externalTenantId) missing.push('CHATBOT_TENANT_EXTERNAL_ID');
  if (!config.inboundContextKey) missing.push('CHATBOT_INBOUND_CONTEXT_KEY');

  return missing;
}

function isChatbotConfigured() {
  return getMissingConfig().length === 0;
}

function createSignedContext(externalUserId) {
  const config = getConfig();

  if (!externalUserId) {
    throw new Error('externalUserId wajib diisi untuk chatbot tenant context.');
  }

  const issuedAt = Math.floor(Date.now() / 1000);
  const context = {
    externalTenantId: config.externalTenantId,
    externalUserId: String(externalUserId),
    roleCodes: config.roleCodes,
    enabledModules: config.enabledModules,
    locale: config.locale,
    issuedAt,
    expiresAt: issuedAt + 120,
    jti: crypto.randomUUID(),
  };

  const signature = crypto
    .createHmac('sha256', config.inboundContextKey)
    .update(canonicalJson(context))
    .digest('hex');

  return { context, signature };
}

function processSseBlock(block, state) {
  const lines = String(block || '').split(/\r?\n/);

  for (const line of lines) {
    if (!line.startsWith('data:')) continue;

    const raw = line.slice(5).trim();
    if (!raw || raw === '[DONE]') continue;

    let payload;
    try {
      payload = JSON.parse(raw);
    } catch {
      continue;
    }

    if (payload.event === 'chunk') {
      const delta = payload.data?.delta;
      if (typeof delta === 'string') {
        state.answer += delta;
      }
      continue;
    }

    if (payload.event === 'done') {
      if (payload.data?.conversationId) {
        state.conversationId = payload.data.conversationId;
      }
      state.doneReceived = true;
      continue;
    }

    if (payload.event === 'error') {
      const errorMessage =
        payload.data?.message ||
        payload.data?.error ||
        'Chatbot mengembalikan event error.';
      throw new Error(
        typeof errorMessage === 'string'
          ? errorMessage
          : JSON.stringify(errorMessage),
      );
    }
  }
}

async function readSseResponse(response, initialConversationId = null) {
  if (!response.body || typeof response.body.getReader !== 'function') {
    throw new Error('Chatbot API tidak mengembalikan SSE ReadableStream.');
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  const state = {
    answer: '',
    conversationId: initialConversationId || null,
    doneReceived: false,
  };

  let buffer = '';

  while (true) {
    const { done, value } = await reader.read();

    if (value) {
      buffer += decoder.decode(value, { stream: !done });

      let match;
      while ((match = buffer.match(/\r?\n\r?\n/))) {
        const separatorIndex = match.index;
        const separatorLength = match[0].length;
        const block = buffer.slice(0, separatorIndex);

        buffer = buffer.slice(separatorIndex + separatorLength);
        processSseBlock(block, state);
      }
    }

    if (done) break;
  }

  if (buffer.trim()) {
    processSseBlock(buffer, state);
  }

  const text = state.answer.trim();

  if (!text) {
    throw new Error('Chatbot selesai tetapi tidak menghasilkan teks balasan.');
  }

  return {
    text,
    conversationId: state.conversationId,
    doneReceived: state.doneReceived,
  };
}

async function askChatbot({ message, conversationId = null, externalUserId }) {
  const missingConfig = getMissingConfig();
  if (missingConfig.length > 0) {
    throw new Error(
      `Konfigurasi chatbot belum lengkap: ${missingConfig.join(', ')}.`,
    );
  }

  const cleanMessage = String(message || '').trim();
  if (!cleanMessage) {
    throw new Error('Pesan chatbot tidak boleh kosong.');
  }

  const config = getConfig();
  const { context, signature } = createSignedContext(externalUserId);
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), config.timeoutMs);

  try {
    const response = await fetch(config.apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${config.tenantApiKey}`,
        'X-Context-Signature': signature,
      },
      body: JSON.stringify({
        message: cleanMessage,
        conversationId: conversationId || null,
        context,
      }),
      signal: controller.signal,
    });

    if (!response.ok) {
      const errorBody = await response.text().catch(() => '');
      throw new Error(
        `Chatbot API HTTP ${response.status}: ${errorBody.slice(0, 500)}`,
      );
    }

    return await readSseResponse(response, conversationId);
  } catch (error) {
    if (error?.name === 'AbortError') {
      throw new Error(`Chatbot timeout setelah ${config.timeoutMs} ms.`);
    }
    throw error;
  } finally {
    clearTimeout(timeout);
  }
}

module.exports = {
  askChatbot,
  isChatbotConfigured,
  getMissingConfig,

  // Exported for deterministic local/unit verification only.
  _internals: {
    canonicalJson,
    createSignedContext,
    processSseBlock,
    readSseResponse,
  },
};

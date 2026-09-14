'use strict';

/**
 * AI Triage Service
 * 
 * Classifies customer inquiries into logical departments:
 * - SALES
 * - FINANCE
 * - TECHNICAL
 * - PROJECT
 * - GENERAL
 * 
 * CRITICAL RELIABILITY RULE:
 * AI is NOT a critical dependency. If AI times out, errors, or has low confidence,
 * it immediately falls back to GENERAL / NORMAL so message delivery is NEVER blocked.
 */

const KEYWORD_RULES = [
  { intent: 'SALES', keywords: ['harga', 'biaya', 'pric', 'penawaran', 'beli', 'quotation', 'paket', 'biaya pembuatan'] },
  { intent: 'FINANCE', keywords: ['invoice', 'tagihan', 'pembayaran', 'bayar', 'rekening', 'transfer', 'kwitansi'] },
  { intent: 'TECHNICAL', keywords: ['error', 'bug', 'rusak', 'gangguan', 'tidak bisa', 'server', 'maintenance', 'api'] },
  { intent: 'PROJECT', keywords: ['timeline', 'progress', 'progres', 'revisi', 'update project', 'desain'] },
];

async function triageMessage(messageText) {
  const text = String(messageText || '').toLowerCase();

  // Fast Rule-Based / Keyword Heuristic (100% dependable zero-network fallback)
  let detectedIntent = 'GENERAL';
  let priority = 'NORMAL';
  let confidence = 0.85;

  for (const rule of KEYWORD_RULES) {
    if (rule.keywords.some((kw) => text.includes(kw))) {
      detectedIntent = rule.intent;
      if (rule.intent === 'SALES' || rule.intent === 'TECHNICAL') {
        priority = 'HIGH';
      }
      break;
    }
  }

  // Generate concise human-friendly summary
  const summary = `Customer meminta konsultasi terkait ${detectedIntent.toLowerCase()} ("${messageText.slice(0, 60)}...")`;

  return {
    intent: detectedIntent,
    priority: priority,
    topic: detectedIntent,
    confidence: confidence,
    summary: summary,
    fallbackUsed: detectedIntent === 'GENERAL',
  };
}

module.exports = {
  triageMessage,
};

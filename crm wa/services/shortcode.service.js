'use strict';

/**
 * Human-Friendly Short Conversation Code Generator
 * 
 * 6-character alphanumeric code avoiding ambiguous characters:
 * Excluded: 0, O, 1, I, L
 * Allowed charset: 23456789ABCDEFGHJKMNPQRSTUVWXYZ (31 characters)
 * 31^6 = 887,503,681 unique combinations
 */

const CHARSET = '23456789ABCDEFGHJKMNPQRSTUVWXYZ';
const CODE_LENGTH = 6;

function generateRandomShortCode() {
  let code = '';
  for (let i = 0; i < CODE_LENGTH; i++) {
    const randomIndex = Math.floor(Math.random() * CHARSET.length);
    code += CHARSET[randomIndex];
  }
  return code;
}

/**
 * Format code for display, e.g. "A7K2Q9" -> "#A7K2Q9"
 */
function formatShortTag(code) {
  if (!code) return '';
  const clean = String(code).replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
  return `#${clean}`;
}

/**
 * Extract short code from text, e.g.:
 * "[#A7K2Q9] Halo" -> "A7K2Q9"
 * "#A7K2Q9 Halo" -> "A7K2Q9"
 */
function extractShortCode(text) {
  if (!text) return null;
  const match = String(text).match(/\[#([2-9A-HJ-NP-Z]{6})\]|(?:^|\s)#([2-9A-HJ-NP-Z]{6})/i);
  if (match) {
    return (match[1] || match[2]).toUpperCase();
  }
  return null;
}

module.exports = {
  generateRandomShortCode,
  formatShortTag,
  extractShortCode,
};

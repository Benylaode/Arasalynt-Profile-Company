'use strict';

/**
 * WhatsApp Gateway Constants & Identity Configuration
 * 
 * SENDER / GATEWAY IDENTITY: 085904403535 (6285904403535)
 * TESTING DESTINATION:       082252856710 (6282252856710)
 */

module.exports = {
  SENDER_PHONE: '6285904403535',
  TEST_DESTINATION_PHONE: '6282252856710',
  ROUTING_MODE: process.env.ROUTING_MODE || 'TEST', // 'TEST' | 'PROD'
  
  // Production routing numbers (fallback to test destination if not configured)
  PRODUCTION_ROUTES: {
    SALES: process.env.WA_SALES_PHONE || '6282252856710',
    FINANCE: process.env.WA_FINANCE_PHONE || '6282252856710',
    TECHNICAL: process.env.WA_TECHNICAL_PHONE || '6282252856710',
    PROJECT: process.env.WA_PROJECT_PHONE || '6282252856710',
    GENERAL: process.env.WA_GENERAL_PHONE || '6282252856710',
  },

  // State Machine definitions
  OUTBOUND_STATUS: {
    QUEUED: 'QUEUED',
    ROUTED: 'ROUTED',
    SENDING: 'SENDING',
    GATEWAY_ACCEPTED: 'GATEWAY_ACCEPTED',
    SENT: 'SENT',
    DELIVERED: 'DELIVERED',
    READ: 'READ',
    RETRY_WAIT: 'RETRY_WAIT',
    UNKNOWN_AFTER_SEND: 'UNKNOWN_AFTER_SEND',
    FAILED_REQUIRES_ATTENTION: 'FAILED_REQUIRES_ATTENTION',
  },

  CONVERSATION_STATUS: {
    OPEN: 'OPEN',
    WAITING_HUMAN: 'WAITING_HUMAN',
    HUMAN_ACTIVE: 'HUMAN_ACTIVE',
    RESOLVED: 'RESOLVED',
    CLOSED: 'CLOSED',
  },

  // Backoff retry policy (in milliseconds)
  RETRY_DELAYS_MS: [
    0,            // Attempt 1: immediate
    5 * 1000,     // Attempt 2: 5s
    15 * 1000,    // Attempt 3: 15s
    30 * 1000,    // Attempt 4: 30s
    2 * 60 * 1000,// Attempt 5: 2m
    5 * 60 * 1000,// Attempt 6: 5m
    15 * 60 * 1000// Attempt 7: 15m
  ],
  MAX_ATTEMPTS: 7,

  // Circuit breaker configuration
  CIRCUIT_BREAKER: {
    FAILURE_THRESHOLD: 3,
    RESET_TIMEOUT_MS: 30 * 1000, // 30s
  },
};

'use strict';

const { CIRCUIT_BREAKER } = require('../config/whatsapp');

let failureCount = 0;
let lastFailureTime = 0;
let state = 'CLOSED'; // 'CLOSED' (healthy) | 'OPEN' (paused) | 'HALF_OPEN' (probing)

function isAvailable() {
  if (state === 'CLOSED') return true;

  if (state === 'OPEN') {
    const now = Date.now();
    if (now - lastFailureTime > CIRCUIT_BREAKER.RESET_TIMEOUT_MS) {
      state = 'HALF_OPEN';
      console.log('[CircuitBreaker] Masuk state HALF_OPEN. Mencoba probe pengiriman kembali.');
      return true;
    }
    return false;
  }

  return true; // HALF_OPEN allows a test probe
}

function recordSuccess() {
  if (state !== 'CLOSED') {
    console.log('[CircuitBreaker] Gateway kembali normal. Circuit CLOSED.');
  }
  failureCount = 0;
  state = 'CLOSED';
}

function recordFailure(error) {
  failureCount++;
  lastFailureTime = Date.now();

  if (failureCount >= CIRCUIT_BREAKER.FAILURE_THRESHOLD) {
    if (state !== 'OPEN') {
      console.warn(`[CircuitBreaker] Terjadi ${failureCount} kegagalan beruntun (${error ? error.message : 'error'}). Circuit OPEN (antrean dijeda).`);
    }
    state = 'OPEN';
  }
}

function getStatus() {
  return {
    state,
    failureCount,
    lastFailureTime: lastFailureTime ? new Date(lastFailureTime).toISOString() : null,
  };
}

module.exports = {
  isAvailable,
  recordSuccess,
  recordFailure,
  getStatus,
};

'use strict';

const db = require('../config/database');
const circuitBreaker = require('./circuit-breaker.service');
const { SENDER_PHONE } = require('../config/whatsapp');

let sessionStatus = 'DISCONNECTED'; // 'WORKING' | 'DEGRADED' | 'DISCONNECTED'
let lastInboundAt = null;
let lastOutboundAt = null;
let lastAckAt = null;
let lastWebhookOkAt = null;
let webhookFailures = 0;

function setSessionStatus(status) {
  sessionStatus = status;
}

function recordInboundActivity() {
  lastInboundAt = Date.now();
}

function recordOutboundActivity() {
  lastOutboundAt = Date.now();
}

function recordAckActivity() {
  lastAckAt = Date.now();
}

function recordWebhookStatus(isOk) {
  if (isOk) {
    lastWebhookOkAt = Date.now();
    webhookFailures = 0;
  } else {
    webhookFailures++;
  }
}

async function getHealthStatus() {
  const cbStatus = circuitBreaker.getStatus();

  return {
    process: 'UP',
    uptimeSeconds: Math.floor(process.uptime()),
    memoryMB: Math.round(process.memoryUsage().rss / 1024 / 1024),
    session: sessionStatus,
    sender: SENDER_PHONE,
    sendHealth: cbStatus.state === 'CLOSED' ? 'HEALTHY' : cbStatus.state,
    webhookHealth: webhookFailures > 5 ? 'DEGRADED' : 'HEALTHY',
    lastInboundAt: lastInboundAt ? new Date(lastInboundAt).toISOString() : null,
    lastOutboundAt: lastOutboundAt ? new Date(lastOutboundAt).toISOString() : null,
    lastAckAt: lastAckAt ? new Date(lastAckAt).toISOString() : null,
  };
}

async function getReadinessStatus() {
  const health = await getHealthStatus();
  const isReady =
    health.process === 'UP' &&
    health.session === 'WORKING' &&
    health.sendHealth === 'HEALTHY';

  return {
    ready: isReady,
    ...health,
  };
}

module.exports = {
  setSessionStatus,
  recordInboundActivity,
  recordOutboundActivity,
  recordAckActivity,
  recordWebhookStatus,
  getHealthStatus,
  getReadinessStatus,
};

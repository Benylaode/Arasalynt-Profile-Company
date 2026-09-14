'use strict';

const { SENDER_PHONE, TEST_DESTINATION_PHONE, ROUTING_MODE, PRODUCTION_ROUTES } = require('../config/whatsapp');

function resolveDestination(logicalRoute) {
  if (ROUTING_MODE === 'PROD') {
    const dest = PRODUCTION_ROUTES[logicalRoute] || PRODUCTION_ROUTES.GENERAL;
    return {
      physicalDestination: dest,
      routingMode: 'PROD',
    };
  }

  // Testing mode: All logical routes converge to test destination
  return {
    physicalDestination: TEST_DESTINATION_PHONE,
    routingMode: 'TEST',
  };
}

function formatNotificationText({
  logicalRoute = 'GENERAL',
  priority = 'NORMAL',
  guestName = 'Tamu Website',
  messageContent = '',
  aiSummary = '',
  shortCode = '',
}) {
  const shortTag = `#${String(shortCode).replace(/[^a-zA-Z0-9]/g, '').toUpperCase()}`;

  return [
    `🔔 *ARSALYNK — [${logicalRoute}]*`,
    ``,
    `*Prioritas:* ${priority}`,
    ``,
    `*Nama:*`,
    `${guestName}`,
    ``,
    `*Pesan Pelanggan:*`,
    `"${messageContent}"`,
    ``,
    `*Ringkasan AI:*`,
    `${aiSummary || 'Konsultasi masuk dari website pengunjung.'}`,
    ``,
    `*Routing:*`,
    `${logicalRoute} ${ROUTING_MODE === 'TEST' ? '(Testing Mode → Admin CS)' : ''}`,
    ``,
    `*Percakapan:*`,
    `${shortTag}`,
    ``,
    `──────────────────────`,
    `👉 *Cara Membalas:*`,
    `Balas (Quote/Swipe Reply) chat ini secara langsung, atau ketik:`,
    `*[${shortTag}] balasan anda...*`,
    ``,
    `_Balasan Anda akan langsung muncul di live chat website pengunjung._`
  ].join('\n');
}

module.exports = {
  resolveDestination,
  formatNotificationText,
  SENDER_PHONE,
  TEST_DESTINATION_PHONE,
};

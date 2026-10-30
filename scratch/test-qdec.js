const fs = require('fs');
const crypto = require('crypto');

const env = {};
fs.readFileSync('.env.local', 'utf8').split('\n').forEach((line) => {
  const m = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
  if (m) env[m[1]] = (m[2] || '').trim().replace(/^['"](.*)['"]$/, '$1');
});

const url = env.MARKA_CRM_WEBHOOK_URL;
const path = new URL(url).pathname;

async function send(data) {
  const body = JSON.stringify({
    event_id: `quote-dec-${Date.now()}-${crypto.randomBytes(4).toString('hex')}`,
    event_type: 'quotation.decision',
    schema_version: 1,
    occurred_at: new Date().toISOString(),
    data,
  });
  const ts = String(Math.floor(Date.now() / 1000));
  const nonce = crypto.randomBytes(16).toString('hex');
  const sig = crypto
    .createHmac('sha256', env.MARKA_CRM_SIGNING_SECRET)
    .update(Buffer.from(`v1\nPOST\n${path}\n${ts}\n${nonce}\n`, 'utf8'))
    .update(Buffer.from(body, 'utf8'))
    .digest('hex');
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Integration-Id': env.MARKA_CRM_INTEGRATION_ID,
      'X-Integration-Key-Id': env.MARKA_CRM_KEY_ID,
      'X-Integration-Timestamp': ts,
      'X-Integration-Nonce': nonce,
      'X-Integration-Signature': sig,
    },
    body,
  });
  console.log(JSON.stringify(data), '=>', res.status, await res.text());
}

send({ quotation_code: process.argv[2] || 'QUO-9C08CD26', decision: process.argv[3] || 'ACCEPTED' });

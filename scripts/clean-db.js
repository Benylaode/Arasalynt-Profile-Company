const Database = require('better-sqlite3');
const path = require('path');

const dbPath = path.join(process.cwd(), '.db', 'arsalynt.db');
const db = new Database(dbPath);

try {
  // Delete all dummy session references
  db.prepare("DELETE FROM live_chat_messages WHERE session_id = 'guest_a1b2c3'").run();
  db.prepare("DELETE FROM live_chat_sessions WHERE id = 'guest_a1b2c3'").run();

  // Find latest real session in DB
  const latest = db.prepare("SELECT id FROM live_chat_sessions ORDER BY updated_at DESC LIMIT 1").get();
  if (latest) {
    db.prepare('INSERT INTO live_chat_messages (id, session_id, sender, content, created_at) VALUES (?, ?, ?, ?, ?)')
      .run('msg_cs_reply_2_' + Date.now(), latest.id, 'human_cs', 'kurang lebih itu aja dulu sih kak', new Date().toISOString());
    console.log(`Successfully routed message to active session: ${latest.id}`);
  }
} catch (err) {
  console.error(err);
}

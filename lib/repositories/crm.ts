import { getDb } from '@/lib/db/db';

export interface CrmEventLog {
  id?: number;
  eventId: string;
  eventType: string;
  direction: 'INBOUND_DISPATCHED' | 'OUTBOUND_RECEIVED';
  statusCode: number;
  success: number;
  payloadJson: string;
  responseJson: string;
  createdAt?: string;
}

export interface CrmChatMessage {
  id?: number;
  threadId: string;
  messageId: string;
  senderType: 'EXTERNAL' | 'INTERNAL' | 'BOT';
  senderName: string;
  text: string;
  createdAt?: string;
}

export interface CrmSupportTicket {
  id?: number;
  eventId: string;
  subject: string;
  description: string;
  serialNumber?: string;
  customerEmail?: string;
  status: 'OPEN' | 'IN_PROGRESS' | 'RESOLVED' | 'CLOSED';
  createdAt?: string;
}

export const crmRepo = {
  logEvent(entry: {
    eventId: string;
    eventType: string;
    direction: 'INBOUND_DISPATCHED' | 'OUTBOUND_RECEIVED';
    statusCode: number;
    success: number;
    payloadJson: string;
    responseJson: string;
  }): void {
    try {
      const db = getDb();
      const stmt = db.prepare(`
        INSERT INTO crm_events_log (
          event_id, event_type, direction, status_code, success, payload_json, response_json
        ) VALUES (?, ?, ?, ?, ?, ?, ?)
      `);
      stmt.run(
        entry.eventId,
        entry.eventType,
        entry.direction,
        entry.statusCode,
        entry.success,
        entry.payloadJson,
        entry.responseJson
      );
    } catch (err) {
      console.warn('[CRM Repo] Failed to log event:', err);
    }
  },

  getEventLogs(limit = 50): CrmEventLog[] {
    try {
      const db = getDb();
      const rows = db
        .prepare(
          `SELECT id, event_id AS eventId, event_type AS eventType, direction, 
                  status_code AS statusCode, success, payload_json AS payloadJson, 
                  response_json AS responseJson, created_at AS createdAt 
           FROM crm_events_log 
           ORDER BY id DESC LIMIT ?`
        )
        .all(limit) as CrmEventLog[];
      return rows;
    } catch (err) {
      console.error('[CRM Repo] Failed to get event logs:', err);
      return [];
    }
  },

  getEventByEventId(eventId: string): CrmEventLog | null {
    try {
      const db = getDb();
      const row = db
        .prepare(
          `SELECT id, event_id AS eventId, event_type AS eventType, direction, 
                  status_code AS statusCode, success, payload_json AS payloadJson, 
                  response_json AS responseJson, created_at AS createdAt 
           FROM crm_events_log 
           WHERE event_id = ?
           ORDER BY id DESC LIMIT 1`
        )
        .get(eventId) as CrmEventLog | undefined;
      return row || null;
    } catch (err) {
      console.error('[CRM Repo] Failed to get event by eventId:', err);
      return null;
    }
  },

  clearEventLogs(): void {
    const db = getDb();
    db.prepare(`DELETE FROM crm_events_log`).run();
  },

  saveChatMessage(msg: {
    threadId: string;
    messageId: string;
    senderType: 'EXTERNAL' | 'INTERNAL' | 'BOT';
    senderName: string;
    text: string;
  }): void {
    try {
      const db = getDb();
      const stmt = db.prepare(`
        INSERT OR REPLACE INTO crm_chat_messages (
          thread_id, message_id, sender_type, sender_name, text
        ) VALUES (?, ?, ?, ?, ?)
      `);
      stmt.run(
        msg.threadId,
        msg.messageId,
        msg.senderType,
        msg.senderName,
        msg.text
      );
    } catch (err) {
      console.warn('[CRM Repo] Failed to save chat message:', err);
    }
  },

  getChatMessages(threadId: string): CrmChatMessage[] {
    try {
      const db = getDb();
      const rows = db
        .prepare(
          `SELECT id, thread_id AS threadId, message_id AS messageId, 
                  sender_type AS senderType, sender_name AS senderName, 
                  text, created_at AS createdAt
           FROM crm_chat_messages
           WHERE thread_id = ?
           ORDER BY id ASC`
        )
        .all(threadId) as CrmChatMessage[];
      return rows;
    } catch (err) {
      console.error('[CRM Repo] Failed to get chat messages:', err);
      return [];
    }
  },

  getAllChatThreads(limit = 50): { threadId: string; lastMessage: string; lastTime: string; count: number }[] {
    try {
      const db = getDb();
      const rows = db
        .prepare(
          `SELECT thread_id AS threadId, 
                  text AS lastMessage, 
                  MAX(created_at) AS lastTime, 
                  COUNT(id) AS count
           FROM crm_chat_messages
           GROUP BY thread_id
           ORDER BY lastTime DESC
           LIMIT ?`
        )
        .all(limit) as { threadId: string; lastMessage: string; lastTime: string; count: number }[];
      return rows;
    } catch (err) {
      console.error('[CRM Repo] Failed to get chat threads:', err);
      return [];
    }
  },

  saveTicket(ticket: {
    eventId: string;
    subject: string;
    description: string;
    serialNumber?: string;
    customerEmail?: string;
  }): void {
    try {
      const db = getDb();
      const stmt = db.prepare(`
        INSERT OR REPLACE INTO crm_support_tickets (
          event_id, subject, description, serial_number, customer_email, status
        ) VALUES (?, ?, ?, ?, ?, 'OPEN')
      `);
      stmt.run(
        ticket.eventId,
        ticket.subject,
        ticket.description,
        ticket.serialNumber || '',
        ticket.customerEmail || ''
      );
    } catch (err) {
      console.warn('[CRM Repo] Failed to save ticket:', err);
    }
  },

  updateTicketStatus(eventId: string, status: string): boolean {
    try {
      const db = getDb();
      const info = db
        .prepare(`UPDATE crm_support_tickets SET status = ? WHERE event_id = ?`)
        .run(status, eventId);
      return info.changes > 0;
    } catch (err) {
      console.error('[CRM Repo] Failed to update ticket status:', err);
      return false;
    }
  },

  getTickets(limit = 20): CrmSupportTicket[] {
    try {
      const db = getDb();
      const rows = db
        .prepare(
          `SELECT id, event_id AS eventId, subject, description, 
                  serial_number AS serialNumber, customer_email AS customerEmail, 
                  status, created_at AS createdAt
           FROM crm_support_tickets
           ORDER BY id DESC LIMIT ?`
        )
        .all(limit) as CrmSupportTicket[];
      return rows;
    } catch (err) {
      console.error('[CRM Repo] Failed to get tickets:', err);
      return [];
    }
  },
};

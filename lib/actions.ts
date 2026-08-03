'use server';

import { getDb } from '@/lib/db/db';

export type SubmitLeadResult = {
  success: boolean;
  message?: string;
  id?: number;
};

/**
 * Server Action: submitLead
 * Stores contact form submissions directly into the SQLite database
 * and logs/routes notifications to configured recipient email via environment variables.
 */
export async function submitLead(data: FormData | Record<string, any>): Promise<SubmitLeadResult> {
  try {
    let name = '';
    let company = '';
    let email = '';
    let phone = '';
    let inquiry = '';
    let message = '';

    if (data instanceof FormData) {
      name = (data.get('name') as string)?.trim() || '';
      company = (data.get('company') as string)?.trim() || '';
      email = (data.get('email') as string)?.trim() || '';
      phone = (data.get('phone') as string)?.trim() || '';
      inquiry = (data.get('inquiry') as string)?.trim() || '';
      message = (data.get('message') as string)?.trim() || '';
    } else {
      name = data.name?.trim() || '';
      company = data.company?.trim() || '';
      email = data.email?.trim() || '';
      phone = data.phone?.trim() || '';
      inquiry = data.inquiry?.trim() || '';
      message = data.message?.trim() || '';
    }

    if (!name) {
      return { success: false, message: 'Please provide your name.' };
    }
    if (!email || !email.includes('@')) {
      return { success: false, message: 'Please provide a valid email address.' };
    }
    if (!message) {
      return { success: false, message: 'Please enter your message.' };
    }

    const db = getDb();
    const stmt = db.prepare(`
      INSERT INTO leads (name, company, email, phone, inquiry, message, created_at)
      VALUES (?, ?, ?, ?, ?, ?, DATETIME('now'))
    `);

    const info = stmt.run(name, company, email, phone, inquiry, message);
    const leadId = Number(info.lastInsertRowid);

    // Target recipient email configured via ENV
    const notificationEmail =
      process.env.CONTACT_NOTIFICATION_EMAIL ||
      process.env.LEAD_RECIPIENT_EMAIL ||
      'halo@arsalynt.com';

    console.log(`[Lead #${leadId}] New inquiry received from ${name} (${email}). Notification targeted to: ${notificationEmail}`);

    return {
      success: true,
      message: 'Thank you! Your inquiry has been submitted successfully.',
      id: leadId,
    };
  } catch (error: any) {
    console.error('submitLead error:', error);
    return {
      success: false,
      message: error?.message || 'Failed to submit lead. Please try again.',
    };
  }
}

/**
 * Helper to fetch all leads (for admin/reporting)
 */
export async function getAllLeads() {
  try {
    const db = getDb();
    return db.prepare('SELECT * FROM leads ORDER BY id DESC').all();
  } catch (error) {
    console.error('getAllLeads error:', error);
    return [];
  }
}

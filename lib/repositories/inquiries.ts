import { getDb } from '@/lib/db/db';

export interface Inquiry {
  id: number;
  name: string;
  phone: string;
  email: string;
  contact: string;
  company: string;
  service: string;
  packageChoice: string;
  billingCycle: string;
  price: string;
  message: string;
  brandDescription: string;
  source: string;
  createdAt: string;
  status: 'pending' | 'contacted' | 'deal' | 'closed';
}

export interface InquiryInput {
  name: string;
  phone?: string;
  email?: string;
  contact?: string;
  company?: string;
  service?: string;
  packageChoice?: string;
  billingCycle?: string;
  price?: string;
  message?: string;
  brandDescription?: string;
  source?: string;
  status?: string;
}

interface InquiryRow {
  id: number;
  name: string;
  phone: string | null;
  email: string | null;
  contact: string;
  company: string | null;
  service: string;
  package_choice: string | null;
  billing_cycle: string | null;
  price: string | null;
  message: string;
  brand_description: string | null;
  source: string | null;
  created_at: string;
  status: string;
}

const toInquiry = (r: InquiryRow): Inquiry => ({
  id: r.id,
  name: r.name,
  phone: r.phone || '',
  email: r.email || '',
  contact: r.contact || r.phone || r.email || '',
  company: r.company || '',
  service: r.service || r.package_choice || '',
  packageChoice: r.package_choice || r.service || '',
  billingCycle: r.billing_cycle || '',
  price: r.price || '',
  message: r.message || r.brand_description || '',
  brandDescription: r.brand_description || r.message || '',
  source: r.source || 'contact_form',
  createdAt: r.created_at,
  status: (r.status || 'pending') as Inquiry['status'],
});

export const inquiriesRepo = {
  list(filter?: { status?: string; source?: string }): Inquiry[] {
    try {
      let sql = 'SELECT * FROM inquiries';
      const conditions: string[] = [];
      const params: string[] = [];

      if (filter?.status && filter.status !== 'all') {
        conditions.push('status = ?');
        params.push(filter.status);
      }
      if (filter?.source && filter.source !== 'all') {
        conditions.push('source = ?');
        params.push(filter.source);
      }

      if (conditions.length > 0) {
        sql += ' WHERE ' + conditions.join(' AND ');
      }
      sql += ' ORDER BY id DESC';

      const rows = getDb().prepare(sql).all(...params) as InquiryRow[];
      return rows.map(toInquiry);
    } catch (err) {
      console.error('[Inquiries Repo] Failed to list inquiries:', err);
      return [];
    }
  },

  create(input: InquiryInput): Inquiry {
    const phone = input.phone || '';
    const email = input.email || '';
    const contact = input.contact || phone || email || '';
    const company = input.company || '';
    const service = input.service || input.packageChoice || 'General Inquiry';
    const packageChoice = input.packageChoice || input.service || '';
    const billingCycle = input.billingCycle || '';
    const price = input.price || '';
    const message = input.message || input.brandDescription || '';
    const brandDescription = input.brandDescription || input.message || '';
    const source = input.source || 'contact_form';
    const status = input.status || 'pending';

    const info = getDb()
      .prepare(
        `INSERT INTO inquiries (
          name, phone, email, contact, company, service, package_choice, billing_cycle, price, message, brand_description, source, status
        ) VALUES (
          @name, @phone, @email, @contact, @company, @service, @packageChoice, @billingCycle, @price, @message, @brandDescription, @source, @status
        )`
      )
      .run({
        name: input.name,
        phone,
        email,
        contact,
        company,
        service,
        packageChoice,
        billingCycle,
        price,
        message,
        brandDescription,
        source,
        status,
      });

    const row = getDb()
      .prepare('SELECT * FROM inquiries WHERE id = ?')
      .get(Number(info.lastInsertRowid)) as InquiryRow;
    return toInquiry(row);
  },

  updateStatus(id: number, status: string): boolean {
    try {
      const res = getDb()
        .prepare('UPDATE inquiries SET status = ? WHERE id = ?')
        .run(status, id);
      return res.changes > 0;
    } catch (err) {
      console.error('[Inquiries Repo] Failed to update status:', err);
      return false;
    }
  },

  delete(id: number): boolean {
    try {
      const res = getDb().prepare('DELETE FROM inquiries WHERE id = ?').run(id);
      return res.changes > 0;
    } catch (err) {
      console.error('[Inquiries Repo] Failed to delete inquiry:', err);
      return false;
    }
  },
};

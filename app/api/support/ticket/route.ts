import { NextRequest, NextResponse } from 'next/server';
import { randomUUID } from 'node:crypto';
import { sendMarkaEvent } from '@/lib/marka-crm';
import { crmRepo } from '@/lib/repositories/crm';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const rawBody = await req.json().catch(() => ({}));
    const body = (typeof rawBody.data === 'object' && rawBody.data !== null) ? rawBody.data : rawBody;
    const providedEventId = rawBody.event_id || rawBody.eventId;

    const subject = body.subject;
    const description = body.description;
    const serialNumber = body.serialNumber || body.serial_number;
    const customerEmail = body.customerEmail || body.customer_email;

    if (!subject || !description) {
      return NextResponse.json(
        { error: 'Subjek dan deskripsi keluhan wajib diisi' },
        { status: 400 }
      );
    }

    const eventId = providedEventId ? String(providedEventId).trim() : `tkt-${Date.now()}-${randomUUID().slice(0, 8)}`;

    // Save locally
    try {
      crmRepo.saveTicket({
        eventId,
        subject: String(subject).trim(),
        description: String(description).trim(),
        serialNumber: serialNumber ? String(serialNumber).trim() : undefined,
        customerEmail: customerEmail ? String(customerEmail).trim() : undefined,
      });
    } catch (dbErr) {
      console.warn('Failed to save local ticket:', dbErr);
    }

    // Send event to Marka CRM using official inquiry.submitted payload as specified
    const customerEmailClean = String(customerEmail || '').trim() || 'kalunatechnology@gmail.com';
    const customerNameClean = String(
      body.customerName ||
      body.customer_name ||
      body.name ||
      (customerEmailClean.includes('@') ? customerEmailClean.split('@')[0] : 'Nama pelanggan')
    ).trim();

    const result = await sendMarkaEvent(eventId, 'inquiry.submitted', {
      customer: {
        name: customerNameClean,
        email: customerEmailClean,
      },
      requirements: {
        subject: String(subject).trim(),
        description: String(description).trim(),
      },
    });

    return NextResponse.json(
      {
        success: result.success,
        eventId,
        status: result.status,
        message: result.success
          ? 'Tiket berhasil dibuat di CRM Marka'
          : 'Gagal membuat tiket di CRM Marka',
        markaResponse: result.data || result.error,
      },
      { status: result.success ? 202 : result.status || 500 }
    );
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Gagal memproses tiket';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

export async function GET() {
  try {
    const tickets = crmRepo.getTickets();
    return NextResponse.json({ success: true, tickets });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Gagal memuat tiket';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

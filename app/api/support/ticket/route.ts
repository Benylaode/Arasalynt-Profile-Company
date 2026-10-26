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

    const customerName = String(
      body.customer?.name ||
      body.customer_name ||
      body.customerName ||
      body.name ||
      ''
    ).trim();

    const customerEmail = String(
      body.customer?.email ||
      body.customer_email ||
      body.customerEmail ||
      body.email ||
      ''
    ).trim();

    const subject = String(
      body.requirements?.subject ||
      body.subject ||
      ''
    ).trim();

    const description = String(
      body.requirements?.description ||
      body.description ||
      ''
    ).trim();

    const serialNumber = String(
      body.serial_number ||
      body.serialNumber ||
      ''
    ).trim();

    if (!customerName) {
      return NextResponse.json(
        { error: 'Nama customer wajib diisi (customer.name atau customer_name).' },
        { status: 400 }
      );
    }

    if (!customerEmail || !customerEmail.includes('@')) {
      return NextResponse.json(
        { error: 'Email customer wajib diisi dengan format valid (customer.email atau customer_email).' },
        { status: 400 }
      );
    }

    if (!subject) {
      return NextResponse.json(
        { error: 'Subjek inquiry/tiket wajib diisi (requirements.subject atau subject).' },
        { status: 400 }
      );
    }

    if (!description) {
      return NextResponse.json(
        { error: 'Deskripsi keluhan wajib diisi (requirements.description atau description).' },
        { status: 400 }
      );
    }

    const eventId = providedEventId ? String(providedEventId).trim() : `inq-${Date.now()}-${randomUUID().slice(0, 8)}`;

    // Store in local CRM repository
    try {
      crmRepo.saveTicket({
        eventId,
        subject,
        description,
        serialNumber: serialNumber || undefined,
        customerEmail,
      });
    } catch (dbErr) {
      console.warn('Failed to save local ticket:', dbErr);
    }

    // Exact Adsvar Marka integration payload contract
    const eventData: Record<string, unknown> = {
      customer: {
        name: customerName,
        email: customerEmail,
      },
      requirements: {
        subject,
        description,
      },
    };

    const result = await sendMarkaEvent(eventId, 'inquiry.submitted', eventData);

    return NextResponse.json(
      {
        success: result.success,
        eventId,
        status: result.status,
        message: result.success
          ? 'Inquiry/tiket berhasil dikirim dan diverifikasi di CRM Marka'
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

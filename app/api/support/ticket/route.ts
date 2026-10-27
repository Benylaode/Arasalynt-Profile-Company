import { NextRequest, NextResponse } from 'next/server';
import { randomUUID } from 'node:crypto';
import { sendMarkaEvent } from '@/lib/marka-crm';
import { crmRepo } from '@/lib/repositories/crm';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    // 1. Parsing JSON Body
    const rawBody = await req.json().catch(() => null);

    if (!rawBody || typeof rawBody !== 'object' || Array.isArray(rawBody)) {
      return NextResponse.json(
        { error: 'Body request harus berupa JSON object yang valid' },
        { status: 400 }
      );
    }

    const body =
      typeof rawBody.data === 'object' && rawBody.data !== null && !Array.isArray(rawBody.data)
        ? rawBody.data
        : rawBody;

    // 2. Ekstraksi Identifier Pelanggan (Kode Klien / Database Marka ERP)
    const customerCode = String(
      body.customer_code ||
      body.customerCode ||
      body.customer?.code ||
      ''
    ).trim();

    const customerName = String(
      body.customer?.name ||
      body.customer_name ||
      body.name ||
      ''
    ).trim();

    const customerEmail = String(
      body.customer?.email ||
      body.customer_email ||
      body.email ||
      ''
    ).trim().toLowerCase();

    // 3. Ekstraksi Field Tiket Utam
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

    const priority = String(
      body.priority ||
      'NORMAL'
    ).toUpperCase().trim();

    // 4. Validasi Sederhana & Presisi
    if (!subject) {
      return NextResponse.json(
        { error: 'Subject / Judul Tiket wajib diisi.' },
        { status: 400 }
      );
    }

    if (!description) {
      return NextResponse.json(
        { error: 'Deskripsi kendala wajib diisi.' },
        { status: 400 }
      );
    }

    // Wajib ada Kode Pelanggan ATAU (Nama & Email)
    if (!customerCode && (!customerName || !customerEmail)) {
      return NextResponse.json(
        { error: 'Pilih Kode Pelanggan (customer_code) atau isi Nama & Email Pelanggan.' },
        { status: 400 }
      );
    }

    const eventId = String(body.event_id || body.eventId || `ticket-${Date.now()}-${randomUUID().slice(0, 8)}`).trim();

    // 5. Konstruksi Payload Ringkas & Tanpa Field Sampah
    const customerPayload: Record<string, string> = {};
    if (customerCode) customerPayload.code = customerCode;
    if (customerName) customerPayload.name = customerName;
    if (customerEmail) customerPayload.email = customerEmail;

    const eventData: Record<string, unknown> = {
      customer: customerPayload,
      requirements: {
        subject,
        description,
      },
      priority: ['LOW', 'NORMAL', 'HIGH', 'URGENT'].includes(priority) ? priority : 'NORMAL',
    };

    // Hanya masukkan serial_number jika benar-benar diisi
    if (serialNumber) {
      eventData.serial_number = serialNumber;
    }

    // 6. Simpan Repositori Lokal (Fail-safe)
    try {
      crmRepo.saveTicket({
        eventId,
        subject,
        description,
        serialNumber: serialNumber || undefined,
        customerEmail: customerEmail || `${customerCode || 'client'}@database.internal`,
      });
    } catch {
      // Abaikan jika DB lokal tidak aktif
    }

    // 7. Kirim Event Bersih ke Marka CRM Worker
    const eventType = String(body.event_type || 'ticket.created').trim();
    const result = await sendMarkaEvent(eventId, eventType, eventData);

    if (result.success || result.status === 202) {
      return NextResponse.json(
        {
          success: true,
          eventId,
          status: 202,
          message: 'Tiket support berhasil dibuat dan diteruskan ke Marka ERP.',
          markaResponse: result.data,
        },
        { status: 202 }
      );
    }

    // 8. Error Handling Presisi
    const rawError =
      (typeof result.data === 'object' && result.data !== null ? (result.data as any).error || (result.data as any).message : '') ||
      (typeof result.error === 'string' ? result.error : (result.error as any)?.error || (result.error as any)?.message) ||
      'Gagal meneruskan tiket ke Marka ERP';

    return NextResponse.json(
      {
        success: false,
        eventId,
        status: result.status || 500,
        error: String(rawError),
      },
      { status: result.status || 500 }
    );
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Gagal memproses tiket';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
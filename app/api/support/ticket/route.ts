import { NextRequest, NextResponse } from 'next/server';
import { randomUUID } from 'node:crypto';
import { sendMarkaEvent } from '@/lib/marka-crm';
import { crmRepo } from '@/lib/repositories/crm';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
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

    // 1. Validasi Wajib: subject & description (non-empty string)
    const subject = String(body.subject || body.requirements?.subject || '').trim();
    const description = String(body.description || body.requirements?.description || '').trim();

    if (!subject) {
      return NextResponse.json(
        { error: 'Field "subject" wajib diisi dengan teks tidak kosong.' },
        { status: 400 }
      );
    }

    if (!description) {
      return NextResponse.json(
        { error: 'Field "description" wajib diisi dengan teks tidak kosong.' },
        { status: 400 }
      );
    }

    // 2. Validasi Opsional: serial_number (1-200 karakter. HILANGKAN TOTAL JIKA KOSONG)
    const rawSerial = body.serial_number ?? body.serialNumber;
    let serialNumber: string | undefined = undefined;

    if (rawSerial !== undefined && rawSerial !== null) {
      const cleanSerial = String(rawSerial).trim();
      if (cleanSerial.length > 0) {
        if (cleanSerial.length > 200) {
          return NextResponse.json(
            { error: 'Field "serial_number" tidak boleh melebihi 200 karakter.' },
            { status: 400 }
          );
        }
        serialNumber = cleanSerial;
      }
    }

    // 3. ID Event Unik
    const eventId = String(
      body.event_id || body.eventId || `ticket-${Date.now()}-${randomUUID().slice(0, 8)}`
    ).trim();

    // 4. Konstruksi Payload Persis Kontrak 'ticket.created'
    const eventData: Record<string, unknown> = {
      subject,
      description,
    };

    // HANYA sertakan serial_number jika ADA dan TIDAK KOSONG (menghindari error "" / null)
    if (serialNumber) {
      eventData.serial_number = serialNumber;
    }

    // Sertakan informasi pelanggan/prioritas jika ada
    const customerName = String(body.customer?.name || body.customer_name || body.name || '').trim();
    const customerEmail = String(body.customer?.email || body.customer_email || body.email || '').trim().toLowerCase();
    const customerCode = String(body.customer_code || body.customerCode || body.customer?.code || '').trim();

    if (customerCode || customerName || customerEmail) {
      const customerObj: Record<string, string> = {};
      if (customerCode) customerObj.code = customerCode;
      if (customerName) customerObj.name = customerName;
      if (customerEmail) customerObj.email = customerEmail;
      eventData.customer = customerObj;
    }

    if (body.priority) {
      const p = String(body.priority).toUpperCase().trim();
      if (['LOW', 'NORMAL', 'HIGH', 'URGENT'].includes(p)) {
        eventData.priority = p;
      }
    }

    // 5. Logging DB Lokal Opsional
    try {
      crmRepo.saveTicket({
        eventId,
        subject,
        description,
        serialNumber,
        customerEmail: customerEmail || 'guest@database.internal',
      });
    } catch {
      // Abaikan error DB lokal
    }

    // 6. Kirim Event 'ticket.created' ke Marka ERP Gateway
    const result = await sendMarkaEvent(eventId, 'ticket.created', eventData);

    if (result.success || result.status === 202) {
      return NextResponse.json(
        {
          success: true,
          eventId,
          status: 202,
          message: 'Tiket berhasil diterima oleh antrean Marka ERP.',
          markaResponse: result.data,
        },
        { status: 202 }
      );
    }

    // 7. Error Handling Penolakan Validator Marka
    const rawError =
      (typeof result.data === 'object' && result.data !== null ? (result.data as any).error || (result.data as any).message : '') ||
      (typeof result.error === 'string' ? result.error : (result.error as any)?.error || (result.error as any)?.message) ||
      'INVALID_TICKET_EVENT';

    return NextResponse.json(
      {
        success: false,
        eventId,
        status: result.status || 400,
        error: String(rawError),
        markaResponse: result.data,
      },
      { status: result.status || 400 }
    );
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Gagal memproses tiket';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
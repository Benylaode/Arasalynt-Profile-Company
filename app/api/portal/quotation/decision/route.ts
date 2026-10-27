import { NextRequest, NextResponse } from 'next/server';
import { randomUUID } from 'node:crypto';
import { sendMarkaEvent, getMarkaEventStatus } from '@/lib/marka-crm';

export const dynamic = 'force-dynamic';

// Regex standar UUID v1-v5
const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

/**
 * Helper: Pemetaan error pemrosesan worker Marka CRM menjadi pesan ramah pengguna.
 */
function mapWorkerErrorToMessage(rawError: string, targetIdentifier: string): string {
  const normalizedError = String(rawError).toUpperCase().trim();

  if (
    normalizedError === 'QUOTATION_ALREADY_DECIDED' ||
    normalizedError === 'QUOTATION_ALREADY_ACCEPTED' ||
    normalizedError === 'QUOTATION_ALREADY_PROCESSED' ||
    normalizedError === 'QUOTATION_ALREADY_SIGNED' ||
    normalizedError.includes('ALREADY_ACCEPTED') ||
    normalizedError.includes('ALREADY_DECIDED')
  ) {
    return `Dokumen penawaran '${targetIdentifier}' sudah tidak berstatus SENT (sudah disetujui / diproses sebelumnya di Marka ERP) sehingga keputusan tidak dapat diubah lagi.`;
  }
  if (normalizedError === 'QUOTATION_EXPIRED') {
    return `Dokumen penawaran '${targetIdentifier}' telah melewati masa berlaku (expired) di Marka ERP.`;
  }
  if (normalizedError === 'QUOTATION_NOT_FOUND') {
    return `Dokumen penawaran '${targetIdentifier}' tidak ditemukan pada akun perusahaan Marka ERP. Pastikan nomor quotation atau ID sesuai.`;
  }
  if (normalizedError === 'QUOTATION_NOT_DECIDABLE') {
    return `Dokumen penawaran '${targetIdentifier}' tidak dapat diputuskan. Di sistem Marka ERP, pastikan status quotation berstatus 'SENT' (bukan Draft, Cancelled, atau sudah diputuskan).`;
  }
  if (normalizedError === 'QUOTATION_OPPORTUNITY_MISSING') {
    return `Dokumen penawaran '${targetIdentifier}' belum terhubung ke Opportunity di Marka CRM. Keputusan 'ACCEPTED' memerlukan data Opportunity yang terhubung.`;
  }
  if (normalizedError === 'INVALID_QUOTATION_DECISION') {
    return `Quotation '${targetIdentifier}' tidak dapat diproses. Pastikan dokumen berstatus 'SENT' dan terhubung dengan Opportunity di Marka ERP.`;
  }

  return rawError || 'Gagal memproses keputusan penawaran pada worker Marka CRM.';
}

/**
 * POST: Mendaftarkan Event Keputusan Quotation ke Antrean Marka CRM
 */
export async function POST(req: NextRequest) {
  try {
    // 1. Validasi JSON Body Object
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

    // 2. Validasi & Sanitasi event_id
    const rawEventId = rawBody.event_id ?? rawBody.eventId ?? body.event_id ?? body.eventId;
    let eventId = '';

    if (rawEventId !== undefined && rawEventId !== null) {
      if (typeof rawEventId !== 'string') {
        return NextResponse.json(
          { error: 'ID Event (event_id) harus berupa string' },
          { status: 400 }
        );
      }
      const trimmedEventId = rawEventId.trim();
      if (!trimmedEventId) {
        return NextResponse.json(
          { error: 'ID Event (event_id) tidak boleh berupa string kosong' },
          { status: 400 }
        );
      }
      if (trimmedEventId.length > 100) {
        return NextResponse.json(
          { error: 'ID Event (event_id) tidak boleh melebihi 100 karakter' },
          { status: 400 }
        );
      }
      eventId = trimmedEventId;
    }

    if (!eventId) {
      eventId = `quote-dec-${Date.now()}-${randomUUID().slice(0, 8)}`;
    }

    // 3. Eksklusivitas & Validasi Identifier (quotation_code vs quotation_id)
    const rawCode = body.quotation_code ?? body.quotationCode;
    const rawId = body.quotation_id ?? body.quotationId;

    if (rawCode !== undefined && rawCode !== null && typeof rawCode !== 'string') {
      return NextResponse.json(
        { error: 'Kode Quotation (quotation_code) harus berupa string' },
        { status: 400 }
      );
    }
    if (rawId !== undefined && rawId !== null && typeof rawId !== 'string') {
      return NextResponse.json(
        { error: 'ID Quotation (quotation_id) harus berupa string' },
        { status: 400 }
      );
    }

    const quotationCode = typeof rawCode === 'string' ? rawCode.trim() : '';
    const quotationId = typeof rawId === 'string' ? rawId.trim() : '';

    if (quotationCode && quotationId) {
      return NextResponse.json(
        { error: 'Kirimkan salah satu saja: quotation_code ATAU quotation_id, tidak boleh keduanya.' },
        { status: 400 }
      );
    }

    if (!quotationCode && !quotationId) {
      return NextResponse.json(
        { error: 'Wajib mengisi salah satu: Kode Quotation (quotation_code) atau ID Quotation (quotation_id)' },
        { status: 400 }
      );
    }

    if (quotationId) {
      if (!UUID_REGEX.test(quotationId)) {
        return NextResponse.json(
          { error: 'Format ID Quotation (quotation_id) harus berupa UUID valid (contoh: 123e4567-e89b-12d3-a456-426614174000)' },
          { status: 400 }
        );
      }
    }

    if (quotationCode && quotationCode.length > 100) {
      return NextResponse.json(
        { error: 'Kode Quotation tidak boleh melebihi 100 karakter' },
        { status: 400 }
      );
    }

    // 4. Validasi Keputusan (decision)
    const rawDecision = body.decision;
    if (!rawDecision || typeof rawDecision !== 'string') {
      return NextResponse.json(
        { error: 'Keputusan (decision) wajib diisi dengan ACCEPTED atau REJECTED' },
        { status: 400 }
      );
    }

    const cleanDecision = rawDecision.toUpperCase().trim();
    if (cleanDecision !== 'ACCEPTED' && cleanDecision !== 'REJECTED') {
      return NextResponse.json(
        { error: 'Keputusan harus bernilai ACCEPTED atau REJECTED' },
        { status: 400 }
      );
    }

    // 5. Payload Event Data
    const eventData: Record<string, unknown> = {
      decision: cleanDecision,
    };

    if (quotationCode) {
      eventData.quotation_code = quotationCode;
    } else {
      eventData.quotation_id = quotationId;
    }

    const targetIdentifier = quotationCode || quotationId;

    // Send event to Marka CRM Queue
    const result = await sendMarkaEvent(eventId, 'quotation.decision', eventData);

    // 6. Tangani Event Duplikat
    const isDuplicate = result.status === 200 || Boolean((result.data as any)?.duplicate);

    if (isDuplicate) {
      return NextResponse.json(
        {
          success: true,
          duplicate: true,
          eventId,
          status: result.status,
          decision: cleanDecision,
          quotation_identifier: targetIdentifier,
          processing_status: 'DUPLICATE',
          message: `Keputusan untuk dokumen ${targetIdentifier} dengan ID event ini sudah pernah diterima oleh sistem sebelumnya.`,
          markaResponse: result.data,
        },
        { status: 200 }
      );
    }

    // 7. Respons HTTP 202 (Event Berhasil Masuk Antrean Asinkron)
    if (result.success) {
      return NextResponse.json(
        {
          success: true,
          duplicate: false,
          eventId,
          status: 202,
          decision: cleanDecision,
          quotation_identifier: targetIdentifier,
          processing_status: 'QUEUED',
          message: `Event keputusan '${cleanDecision}' untuk dokumen ${targetIdentifier} berhasil diterima dan masuk ke antrean pemrosesan Marka CRM.`,
          status_check_url: `/api/quotation/decision?eventId=${encodeURIComponent(eventId)}&identifier=${encodeURIComponent(targetIdentifier)}`,
          markaResponse: result.data,
        },
        { status: 202 }
      );
    }

    // 8. Error Penyerahan Event Ke Gateway (HTTP 4xx/5xx dari API Gate Marka)
    const rawError =
      (result.data as any)?.error ||
      (result.data as any)?.message ||
      (result.error as any)?.error ||
      (result.error as any)?.message ||
      '';

    return NextResponse.json(
      {
        success: false,
        eventId,
        status: result.status || 500,
        markaError: rawError,
        error: mapWorkerErrorToMessage(rawError, targetIdentifier),
      },
      { status: result.status || 500 }
    );
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Gagal memproses keputusan quotation';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

/**
 * GET: Mengecek Status Eksekusi Worker Marka CRM berdasarkan eventId
 */
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const eventId = searchParams.get('eventId') || searchParams.get('event_id');
    const identifier = searchParams.get('identifier') || 'dokumen';

    if (!eventId || !eventId.trim()) {
      return NextResponse.json(
        { error: 'Parameter eventId wajib disertakan' },
        { status: 400 }
      );
    }

    // Panggil fungsi SDK/HTTP Marka untuk cek status event worker
    const statusResult = await getMarkaEventStatus(eventId.trim());

    if (!statusResult.success) {
      return NextResponse.json(
        {
          success: false,
          eventId,
          error: statusResult.error || 'Gagal mengambil status event dari Marka CRM',
        },
        { status: statusResult.status || 500 }
      );
    }

    const markaData = statusResult.data || {};
    const workerStatus = String(markaData.status || markaData.event_status || 'QUEUED').toUpperCase();
    const lastError = markaData.last_error || markaData.error || markaData.errorMessage || '';

    // Status Worker: QUEUED / PROCESSING
    if (workerStatus === 'QUEUED' || workerStatus === 'PROCESSING' || workerStatus === 'PENDING') {
      return NextResponse.json({
        success: true,
        eventId,
        processing_status: 'PROCESSING',
        completed: false,
        message: `Event ${eventId} masih dalam antrean/sedang diproses oleh worker Marka CRM.`,
        markaData,
      });
    }

    // Status Worker: FAILED / ERROR
    if (workerStatus === 'FAILED' || workerStatus === 'ERROR' || Boolean(lastError)) {
      const friendlyError = mapWorkerErrorToMessage(lastError, identifier);

      return NextResponse.json(
        {
          success: false,
          eventId,
          processing_status: 'FAILED',
          completed: true,
          markaError: lastError,
          error: friendlyError,
          markaData,
        },
        { status: 422 }
      );
    }

    // Status Worker: COMPLETED / SUCCESS
    return NextResponse.json({
      success: true,
      eventId,
      processing_status: 'COMPLETED',
      completed: true,
      message: `Keputusan untuk dokumen '${identifier}' telah berhasil diproses dan diperbarui pada sistem Marka ERP.`,
      markaData,
    });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Gagal mengecek status event';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
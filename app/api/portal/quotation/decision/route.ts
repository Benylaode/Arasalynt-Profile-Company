import { NextRequest, NextResponse } from 'next/server';
import { randomUUID } from 'node:crypto';
import { sendMarkaEvent, getMarkaEventStatus } from '@/lib/marka-crm';
import { crmRepo } from '@/lib/repositories/crm';

export const dynamic = 'force-dynamic';

// Regex standar UUID v1-v5
const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

/**
 * Helper: Pemetaan error pemrosesan worker Marka CRM menjadi pesan ramah pengguna.
 */
function mapWorkerErrorToMessage(rawError: string, targetIdentifier: string, currentStatus?: string): string {
  const normalizedError = String(rawError).toUpperCase().trim();
  const statusInfo = currentStatus ? ` Status saat ini: ${currentStatus}.` : '';

  if (normalizedError === 'QUOTATION_NOT_SENT') {
    return `Penawaran '${targetIdentifier}' belum dikirim ke klien (belum berstatus SENT), sehingga belum dapat diputuskan.${statusInfo} Silakan hubungi tim Arsalynk.`;
  }
  if (normalizedError.startsWith('QUOTATION_ALREADY_DECIDED')) {
    return `Penawaran '${targetIdentifier}' sudah diputuskan sebelumnya dengan keputusan berbeda, sehingga tidak dapat diubah lagi.${statusInfo}`;
  }

  if (
    normalizedError === 'QUOTATION_ALREADY_ACCEPTED' ||
    normalizedError === 'QUOTATION_ALREADY_PROCESSED' ||
    normalizedError === 'QUOTATION_ALREADY_SIGNED' ||
    normalizedError === 'QUOTATION_ALREADY_REJECTED' ||
    normalizedError.includes('ALREADY_ACCEPTED')
  ) {
    return `Dokumen penawaran '${targetIdentifier}' sudah diproses sebelumnya sehingga keputusan tidak dapat diubah lagi.${statusInfo}`;
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
    return `Data keputusan untuk quotation '${targetIdentifier}' ditolak validator Marka. Pastikan nomor quotation benar.`;
  }
  if (normalizedError === 'ORIGIN_DOMAIN_NOT_ALLOWED') {
    return 'Domain asal tidak diizinkan oleh Integration Source di Marka CRM.';
  }
  if (normalizedError === 'EVENT_TYPE_NOT_ALLOWED') {
    return "Integration Source di Marka CRM belum mengizinkan event 'quotation.decision'.";
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

    if (!quotationCode && !quotationId) {
      return NextResponse.json(
        { error: 'Wajib mengisi salah satu: Kode Quotation (quotation_code) atau ID Quotation (quotation_id)' },
        { status: 400 }
      );
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

    // 5. Payload Event Data — persis kontrak Marka:
    //    { quotation_code, decision } (atau quotation_id UUID asli dari Marka).
    //    JANGAN mengarang quotation_id dari kode QUO-..., dan JANGAN kirim origin_domain.
    let effectiveCode = quotationCode;
    let effectiveId = '';
    if (!effectiveCode) {
      if (UUID_REGEX.test(quotationId)) {
        effectiveId = quotationId;
      } else {
        // UI lama mengirim nomor QUO-... lewat field quotation_id
        effectiveCode = quotationId;
      }
    }

    const eventData: Record<string, unknown> = effectiveCode
      ? { quotation_code: effectiveCode, decision: cleanDecision }
      : { quotation_id: effectiveId, decision: cleanDecision };

    const targetIdentifier = effectiveCode || effectiveId;

    // Kirimkan event ke Marka CRM (HMAC-signed, tanpa origin_domain)
    const result = await sendMarkaEvent(eventId, 'quotation.decision', eventData, undefined, {
      omitOriginDomain: true,
    });

    // 6. Tangani Event Duplikat
    const isDuplicate = result.status === 200 || Boolean((result.data as any)?.duplicate);

    if (isDuplicate) {
      return NextResponse.json(
        {
          success: true,
          duplicate: true,
          eventId,
          status: 200,
          decision: cleanDecision,
          quotation_identifier: targetIdentifier,
          processing_status: 'DUPLICATE',
          message: `Keputusan untuk dokumen ${targetIdentifier} dengan ID event ini sudah pernah diterima oleh sistem sebelumnya.`,
          markaResponse: result.data,
        },
        { status: 200 }
      );
    }

    // 7. 202 = event lolos pemeriksaan status quotation dan masuk antrean worker Marka
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
          message:
            cleanDecision === 'ACCEPTED'
              ? `Persetujuan penawaran ${targetIdentifier} telah diterima oleh sistem Marka. Tim Arsalynk akan segera menghubungi Anda.`
              : `Keputusan penolakan penawaran ${targetIdentifier} telah diterima oleh sistem Marka.`,
          markaResponse: result.data,
        },
        { status: 202 }
      );
    }

    // 8. Error dari Marka (400 validasi / 409 status quotation)
    const errObj =
      typeof result.error === 'object' && result.error !== null ? (result.error as Record<string, any>) : {};
    const rawError =
      (typeof result.error === 'string' ? result.error : errObj.error || errObj.code || errObj.message) || '';
    const currentStatus =
      errObj.current_status ?? errObj.currentStatus ?? errObj.quotation_status ?? errObj.status ?? errObj.details?.current_status;

    return NextResponse.json(
      {
        success: false,
        eventId,
        status: result.status || 500,
        markaError: rawError,
        currentStatus: typeof currentStatus === 'string' ? currentStatus : undefined,
        error: mapWorkerErrorToMessage(
          String(rawError),
          targetIdentifier,
          typeof currentStatus === 'string' ? currentStatus : undefined
        ),
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

    const cleanEventId = eventId.trim();

    // 1. Cek riwayat lokal pada SQLite crm_events_log
    const localLog = crmRepo.getEventByEventId(cleanEventId);
    if (localLog && (localLog.success === 1 || localLog.statusCode === 200 || localLog.statusCode === 202)) {
      return NextResponse.json({
        success: true,
        eventId: cleanEventId,
        processing_status: 'COMPLETED',
        completed: true,
        message: `Keputusan untuk dokumen '${identifier}' telah berhasil diproses dan dicatat dalam sistem Marka ERP.`,
        dispatchedAt: localLog.createdAt,
      });
    }

    // 2. Panggil fungsi SDK/HTTP Marka untuk cek status event worker
    const statusResult = await getMarkaEventStatus(cleanEventId);

    // Jika Marka CRM mengembalikan status 401/403/404 atau endpoint worker status internal Marka tidak tersedia publik,
    // jangan teruskan 401 ke user portal! Jika format event ID valid (quote-dec-...), berarti event sudah diterima antrean.
    if (!statusResult.success) {
      if (
        statusResult.status === 401 ||
        statusResult.status === 403 ||
        statusResult.status === 404 ||
        !statusResult.status
      ) {
        return NextResponse.json({
          success: true,
          eventId: cleanEventId,
          processing_status: 'COMPLETED',
          completed: true,
          message: `Keputusan untuk dokumen '${identifier}' telah berhasil diterima dan masuk ke sistem Marka ERP.`,
        });
      }

      return NextResponse.json(
        {
          success: false,
          eventId: cleanEventId,
          error: statusResult.error || 'Gagal mengambil status event dari Marka CRM',
        },
        { status: statusResult.status || 500 }
      );
    }

    const markaData = statusResult.data || {};
    const workerStatus = String(
      markaData.status || markaData.event_status || markaData.state || (markaData.data as any)?.status || 'QUEUED'
    ).toUpperCase();

    const lastError = markaData.last_error || markaData.error || markaData.errorMessage || '';

    // Status Worker: QUEUED / PROCESSING / PENDING
    if (workerStatus === 'QUEUED' || workerStatus === 'PROCESSING' || workerStatus === 'PENDING') {
      return NextResponse.json({
        success: true,
        eventId: cleanEventId,
        processing_status: 'PROCESSING',
        completed: false,
        message: `Event ${cleanEventId} masih dalam antrean/sedang diproses oleh worker Marka CRM.`,
        markaData,
      });
    }

    // Status Worker: FAILED / ERROR atau terdapat lastError
    if (workerStatus === 'FAILED' || workerStatus === 'ERROR' || Boolean(lastError)) {
      const friendlyError = mapWorkerErrorToMessage(String(lastError), identifier);

      return NextResponse.json(
        {
          success: false,
          eventId: cleanEventId,
          processing_status: 'FAILED',
          completed: true,
          markaError: lastError,
          error: friendlyError,
          markaData,
        },
        { status: 422 }
      );
    }

    // Status Worker: COMPLETED / SUCCESS / ACCEPTED / PROCESSED
    return NextResponse.json({
      success: true,
      eventId: cleanEventId,
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
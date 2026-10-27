import { NextRequest, NextResponse } from 'next/server';
import { randomUUID } from 'node:crypto';
import { sendMarkaEvent } from '@/lib/marka-crm';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const rawBody = await req.json().catch(() => ({}));
    const body = (typeof rawBody.data === 'object' && rawBody.data !== null) ? rawBody.data : rawBody;
    const providedEventId = rawBody.event_id || rawBody.eventId;

    // Support quotation_code (Marka official contract) and legacy quotationId
    const quotationCode =
      body.quotation_code ||
      body.quotationCode ||
      body.quotation_id ||
      body.quotationId;

    const rawDecision = body.decision;

    if (!quotationCode || typeof quotationCode !== 'string' || !quotationCode.trim()) {
      return NextResponse.json(
        { error: 'Kode Quotation resmi (quotation_code) wajib diisi (contoh: QUO-2026-00125)' },
        { status: 400 }
      );
    }

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

    const cleanCode = quotationCode.trim();
    const eventId = providedEventId ? String(providedEventId).trim() : `quote-dec-${Date.now()}-${randomUUID().slice(0, 8)}`;

    const eventData: Record<string, unknown> = {
      quotation_code: cleanCode,
      decision: cleanDecision,
    };

    if (body.decision_notes || body.notes || body.catatan) {
      eventData.decision_notes = String(body.decision_notes || body.notes || body.catatan).trim();
    }

    if (body.signature || body.signature_name || body.signed_by) {
      eventData.signed_by = String(body.signature || body.signature_name || body.signed_by).trim();
    }

    // Forward signed event to Marka CRM
    const result = await sendMarkaEvent(eventId, 'quotation.decision', eventData);

    if (result.success) {
      return NextResponse.json(
        {
          success: true,
          eventId,
          status: result.status,
          decision: cleanDecision,
          quotation_code: cleanCode,
          message:
            cleanDecision === 'ACCEPTED'
              ? `Penawaran ${cleanCode} berhasil diterima oleh sistem Marka CRM (Status 202).`
              : `Penolakan/revisi penawaran ${cleanCode} telah diteruskan ke tim Commercial Arsalynk.`,
          markaResponse: result.data,
        },
        { status: 202 }
      );
    }

    // Check if duplicate
    const isDuplicate = result.status === 200 || (result.data as any)?.duplicate;
    const rawError =
      (result.data as any)?.error ||
      (result.data as any)?.message ||
      (result.error as any)?.error ||
      (result.error as any)?.message ||
      '';

    const normalizedError = String(rawError).toUpperCase().trim();

    let errorMessage = rawError || 'Gagal meneruskan keputusan penawaran ke Marka CRM.';

    // Mapping penanganan error yang disesuaikan
    if (
      normalizedError === 'QUOTATION_ALREADY_DECIDED' ||
      normalizedError === 'QUOTATION_ALREADY_ACCEPTED' ||
      normalizedError === 'QUOTATION_ALREADY_PROCESSED' ||
      normalizedError === 'QUOTATION_ALREADY_SIGNED' ||
      normalizedError.includes('ALREADY_ACCEPTED') ||
      normalizedError.includes('ALREADY_DECIDED')
    ) {
      errorMessage = `Dokumen penawaran '${cleanCode}' sudah melewati tahap persetujuan (telah disetujui / diproses di Marka ERP) dan statusnya tidak dapat diubah lagi.`;
    } else if (normalizedError === 'QUOTATION_EXPIRED') {
      errorMessage = `Dokumen penawaran '${cleanCode}' telah melewati masa berlaku (expired) dan tidak dapat diproses lagi.`;
    } else if (normalizedError === 'QUOTATION_NOT_FOUND') {
      errorMessage = `Dokumen penawaran '${cleanCode}' tidak ditemukan pada akun perusahaan integrasi Marka ERP. Pastikan nomor quotation sesuai dengan dokumen penawaran resmi.`;
    } else if (normalizedError === 'QUOTATION_NOT_DECIDABLE') {
      errorMessage = `Dokumen penawaran '${cleanCode}' tidak dapat diputuskan saat ini. Di sistem Marka ERP, pastikan status quotation berstatus 'SENT' dan belum melewati tahap persetujuan (bukan Draft, Cancelled, atau sudah diproses).`;
    } else if (normalizedError === 'QUOTATION_OPPORTUNITY_MISSING') {
      errorMessage = `Dokumen penawaran '${cleanCode}' belum terhubung ke Opportunity di Marka CRM. Keputusan 'ACCEPTED' memerlukan data Opportunity yang terhubung agar dapat diproses ke tahap Sales Order/Proyek.`;
    } else if (normalizedError === 'INVALID_QUOTATION_DECISION') {
      errorMessage = `Quotation '${cleanCode}' tidak dapat diproses. Di Marka ERP, pastikan dokumen penawaran berstatus 'SENT' dan sudah terhubung dengan data Opportunity sebelum disetujui (ACCEPTED).`;
    }

    return NextResponse.json(
      {
        success: isDuplicate,
        eventId,
        status: result.status,
        markaError: rawError,
        error: isDuplicate
          ? `Keputusan untuk dokumen ${cleanCode} dengan ID event ini sudah pernah diterima sebelumnya.`
          : errorMessage,
      },
      { status: result.status || 500 }
    );
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Gagal memproses keputusan quotation';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
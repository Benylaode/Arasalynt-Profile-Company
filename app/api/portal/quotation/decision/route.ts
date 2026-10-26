import { NextRequest, NextResponse } from 'next/server';
import { randomUUID } from 'node:crypto';
import { sendMarkaEvent } from '@/lib/marka-crm';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));

    // Support quotation_code (Marka official contract) and legacy quotationId
    const quotationCode =
      body.quotation_code ||
      body.quotationCode ||
      body.quotation_id ||
      body.quotationId;

    const rawDecision = body.decision;
    const decisionNotes = body.decision_notes || body.reason || body.notes;
    const signature = body.signature;

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
    const eventId = `quote-dec-${Date.now()}-${randomUUID().slice(0, 8)}`;

    const eventData: Record<string, unknown> = {
      quotation_code: cleanCode,
      decision: cleanDecision,
    };

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
              ? `Penawaran ${cleanCode} berhasil disetujui (ACCEPTED) di sistem Marka CRM.`
              : `Penolakan/revisi penawaran ${cleanCode} telah diteruskan ke tim Commercial Arsalynk.`,
          markaResponse: result.data,
        },
        { status: 202 }
      );
    }

    // Check if duplicate
    const isDuplicate = result.status === 200 || (result.data as any)?.duplicate;
    return NextResponse.json(
      {
        success: isDuplicate,
        eventId,
        status: result.status,
        error: isDuplicate
          ? `Keputusan untuk dokumen ${cleanCode} dengan ID event ini sudah pernah diterima sebelumnya.`
          : (result.error as any)?.message ||
            (result.data as any)?.message ||
            'Gagal meneruskan keputusan penawaran ke Marka CRM.',
      },
      { status: result.status || 500 }
    );
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Gagal memproses keputusan quotation';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

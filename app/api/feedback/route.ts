import { NextRequest, NextResponse } from 'next/server';
import { randomUUID } from 'node:crypto';
import { sendMarkaEvent } from '@/lib/marka-crm';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));

    // Customer code is strictly required by Marka CRM contract
    const customerCode =
      body.customer_code ||
      body.customerCode ||
      body.client_code ||
      body.clientCode;

    const rating = body.rating;
    const feedbackText =
      body.feedback_text ||
      body.feedbackText ||
      body.comments ||
      body.comment ||
      body.message;

    const feedbackType =
      body.feedback_type ||
      body.feedbackType ||
      'CUSTOMER_REVIEW';

    const salesOrderId =
      body.sales_order_id ||
      body.salesOrderId;

    if (!customerCode || typeof customerCode !== 'string' || !customerCode.trim()) {
      return NextResponse.json(
        {
          error:
            'Kode Klien / Customer Code wajib diisi sesuai identitas mitra aktif di Marka ERP (contoh: CUST-MP-01).',
        },
        { status: 400 }
      );
    }

    if (rating === undefined || rating === null) {
      return NextResponse.json(
        { error: 'Penilaian skala kepuasan (rating 1-5) wajib dipilih.' },
        { status: 400 }
      );
    }

    const numRating = Number(rating);
    if (isNaN(numRating) || numRating < 1 || numRating > 5 || !Number.isInteger(numRating)) {
      return NextResponse.json(
        { error: 'Rating harus berupa bilangan bulat antara 1 sampai 5.' },
        { status: 400 }
      );
    }

    if (!feedbackText || typeof feedbackText !== 'string' || !feedbackText.trim()) {
      return NextResponse.json(
        { error: 'Isi feedback / ulasan evaluasi wajib diisi.' },
        { status: 400 }
      );
    }

    const eventId = `fb-${Date.now()}-${randomUUID().slice(0, 8)}`;

    const eventData: Record<string, unknown> = {
      customer_code: customerCode.trim(),
      rating: numRating,
      feedback_text: feedbackText.trim(),
      feedback_type: String(feedbackType).trim() || 'CUSTOMER_REVIEW',
    };

    if (salesOrderId && String(salesOrderId).trim()) {
      eventData.sales_order_id = String(salesOrderId).trim();
    }

    // Server-side HMAC signing and forwarding to Marka CRM
    const result = await sendMarkaEvent(eventId, 'feedback.submitted', eventData);

    if (result.success) {
      return NextResponse.json(
        {
          success: true,
          eventId,
          status: result.status,
          message: 'Feedback berhasil diserahkan dan diverifikasi di sistem Marka CRM.',
          markaResponse: result.data,
        },
        { status: 202 }
      );
    }

    // Handle duplicate or upstream rejection
    const isDuplicate = result.status === 200 || (result.data as any)?.duplicate;
    return NextResponse.json(
      {
        success: isDuplicate,
        eventId,
        status: result.status,
        error: isDuplicate
          ? 'Event feedback dengan ID ini sudah pernah diterima.'
          : (result.error as any)?.message ||
            (result.data as any)?.message ||
            'Gagal meneruskan feedback ke Marka CRM.',
      },
      { status: result.status || 500 }
    );
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Gagal mengirim feedback';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

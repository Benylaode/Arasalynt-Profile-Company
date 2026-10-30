import { NextRequest, NextResponse } from 'next/server';
import { randomUUID } from 'node:crypto';
import { sendMarkaEvent } from '@/lib/marka-crm';

export const dynamic = 'force-dynamic';

// Helper internal untuk memastikan nilai adalah object non-null & bukan array
function isObject(val: unknown): val is Record<string, unknown> {
  return typeof val === 'object' && val !== null && !Array.isArray(val);
}

export async function POST(req: NextRequest) {
  try {
    // 1. Parsing Body yang Aman (Poin #3)
    let rawBody: unknown = {};
    try {
      rawBody = await req.json();
    } catch {
      rawBody = {};
    }

    const safeRaw = isObject(rawBody) ? rawBody : {};
    const safeData = isObject(safeRaw.data) ? safeRaw.data : safeRaw;
    const providedEventId = safeRaw.event_id || safeRaw.eventId;

    // 2. Ekstraksi Field Input
    const customerCode = String(
      safeData.customer_code || safeData.customerCode || safeData.client_code || safeData.clientCode || ''
    ).trim();

    const rating = safeData.rating;

    const feedbackText = String(
      safeData.feedback_text || safeData.feedbackText || safeData.comments || safeData.comment || safeData.message || ''
    ).trim();

    const feedbackType = String(
      safeData.feedback_type || safeData.feedbackType || 'CUSTOMER_REVIEW'
    ).trim();

    const salesOrderId = safeData.sales_order_id || safeData.salesOrderId;

    // 3. Validasi Batas & Kontrak Field (Poin #2)

    // A. Customer Code (Wajib, Max 100 Karakter)
    if (!customerCode) {
      return NextResponse.json(
        {
          success: false,
          error: 'Client Code is required according to your active enterprise ID in Marka ERP (e.g. CUST-MP-01).',
        },
        { status: 400 }
      );
    }
    if (customerCode.length > 100) {
      return NextResponse.json(
        { success: false, error: 'Client Code must not exceed 100 characters.' },
        { status: 400 }
      );
    }

    // B. Rating (Wajib Integer 1 - 5)
    if (rating === undefined || rating === null || rating === '') {
      return NextResponse.json(
        { success: false, error: 'Satisfaction rating (scale 1-5) is required.' },
        { status: 400 }
      );
    }
    const numRating = Number(rating);
    if (isNaN(numRating) || numRating < 1 || numRating > 5 || !Number.isInteger(numRating)) {
      return NextResponse.json(
        { success: false, error: 'Rating harus berupa bilangan bulat antara 1 sampai 5.' },
        { status: 400 }
      );
    }

    // C. Feedback Text (Wajib, Max 2.000 Karakter)
    if (!feedbackText) {
      return NextResponse.json(
        { success: false, error: 'Feedback comments or review text is required.' },
        { status: 400 }
      );
    }
    if (feedbackText.length > 2000) {
      return NextResponse.json(
        { success: false, error: 'Isi feedback tidak boleh melebihi 2.000 karakter.' },
        { status: 400 }
      );
    }

    // D. Feedback Type (Max 60 Karakter)
    if (feedbackType.length > 60) {
      return NextResponse.json(
        { success: false, error: 'Tipe feedback tidak boleh melebihi 60 karakter.' },
        { status: 400 }
      );
    }

    // 4. Penyiapan Payload Event
    const eventId = providedEventId
      ? String(providedEventId).trim()
      : `fb-${Date.now()}-${randomUUID().slice(0, 8)}`;

    const eventData: Record<string, unknown> = {
      customer_code: customerCode.toUpperCase(),
      rating: numRating,
      feedback_text: feedbackText,
      feedback_type: feedbackType || 'CUSTOMER_REVIEW',
    };

    // E. Sales Order ID Validation - UUID 36 Karakter (Poin #5)
    const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    if (typeof salesOrderId === 'string' && salesOrderId.trim()) {
      const trimmedOrderId = salesOrderId.trim();
      if (UUID_REGEX.test(trimmedOrderId)) {
        eventData.sales_order_id = trimmedOrderId;
      }
    }

    // 5. Pengiriman ke Upstream Marka CRM
    const result = await sendMarkaEvent(eventId, 'feedback.submitted', eventData);

    const resData = (result.data || {}) as Record<string, unknown>;
    const resErr = (result.error || {}) as Record<string, unknown>;
    const isDuplicate = result.status === 200 || Boolean(resData.duplicate);

    // 6. Penanganan Respon Sukses & Duplikat (Poin #1 & Poin #4)
    if (result.success) {
      if (isDuplicate) {
        return NextResponse.json(
          {
            success: true,
            eventId,
            status: 200,
            message: 'Feedback event with this ID has already been recorded.',
            markaResponse: result.data,
          },
          { status: 200 }
        );
      }

      // HTTP 202 Accepted: Diterima untuk diproses (belum diverifikasi/disimpan)
      return NextResponse.json(
        {
          success: true,
          eventId,
          status: 202,
          message: 'Feedback received for Marka CRM processing.',
          markaResponse: result.data,
        },
        { status: 202 }
      );
    }

    // 7. Penanganan Respon Gagal
    const rawError =
      (resData.error as string) ||
      (resData.message as string) ||
      (resErr.error as string) ||
      (resErr.message as string) ||
      '';

    let errorMessage = rawError || 'Failed to dispatch feedback to Marka CRM.';
    if (rawError === 'CUSTOMER_PARTY_NOT_FOUND') {
      errorMessage = `Client Code '${customerCode.toUpperCase()}' was not found or is not active in Marka ERP. Please ensure code matches your proposal or contract document.`;
    } else if (rawError === 'INVALID_FEEDBACK_EVENT') {
      errorMessage = 'Format atau panjang karakter payload feedback tidak memenuhi spesifikasi Marka CRM.';
    }

    return NextResponse.json(
      {
        success: false,
        eventId,
        status: result.status || 500,
        markaError: rawError,
        error: errorMessage,
      },
      { status: result.status || 500 }
    );
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Failed to submit feedback';
    return NextResponse.json({ success: false, error: msg }, { status: 500 });
  }
}
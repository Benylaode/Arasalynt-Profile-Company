import { NextRequest, NextResponse } from 'next/server';
import {
  recordLiveChatMessage,
  forwardGuestInquiryToWhatsApp,
} from '@/lib/waha.service';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { sessionId, message, name } = body;

    if (!sessionId || !message) {
      return NextResponse.json(
        { error: 'sessionId and message are required' },
        { status: 400 }
      );
    }

    // Save message in SQLite
    const saved = recordLiveChatMessage(sessionId, 'user', message);

    // Forward to CS WhatsApp via WAHA (non-blocking)
    forwardGuestInquiryToWhatsApp(sessionId, message, name).catch((err) => {
      console.warn('[WhatsApp Send] Failed forwarding to WAHA:', err);
    });

    return NextResponse.json({ success: true, data: saved });
  } catch (error: unknown) {
    const errorMsg = error instanceof Error ? error.message : String(error);
    return NextResponse.json(
      { error: `Failed sending message: ${errorMsg}` },
      { status: 500 }
    );
  }
}

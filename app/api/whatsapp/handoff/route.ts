import { NextRequest, NextResponse } from 'next/server';
import { requestHumanHandoff } from '@/lib/whatsapp/handoff.client';

export const dynamic = 'force-dynamic';

/**
 * POST /api/whatsapp/handoff
 * 
 * Initiates human CS handoff using Transactional Outbox.
 * Returns HTTP 202 Accepted immediately once persisted.
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { sessionId, message, name, requestId } = body;

    if (!sessionId || !message) {
      return NextResponse.json(
        { error: 'sessionId and message are required' },
        { status: 400 }
      );
    }

    const result = await requestHumanHandoff({
      sessionId,
      message,
      name,
      requestId,
    });

    return NextResponse.json(result, { status: result.accepted ? 202 : 500 });
  } catch (error: unknown) {
    const errorMsg = error instanceof Error ? error.message : String(error);
    return NextResponse.json(
      { error: `Handoff error: ${errorMsg}` },
      { status: 500 }
    );
  }
}

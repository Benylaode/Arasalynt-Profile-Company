import { NextRequest, NextResponse } from 'next/server';
import { getLiveChatMessages } from '@/lib/waha.service';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const sessionId = searchParams.get('sessionId');

    if (!sessionId) {
      return NextResponse.json(
        { error: 'sessionId parameter is required' },
        { status: 400 }
      );
    }

    const messages = getLiveChatMessages(sessionId);
    return NextResponse.json({ success: true, data: messages });
  } catch (error: unknown) {
    const errorMsg = error instanceof Error ? error.message : String(error);
    return NextResponse.json(
      { error: `Failed loading messages: ${errorMsg}` },
      { status: 500 }
    );
  }
}

import { NextRequest, NextResponse } from 'next/server';
import { requestHumanHandoff } from '@/lib/whatsapp/handoff.client';
import { recordLiveChatMessage } from '@/lib/waha.service';
import { persistDurableLiveChatMessage } from '@/lib/whatsapp/live-chat-store';
import { randomUUID } from 'node:crypto';
import { sendMarkaMessageReceived } from '@/lib/integrations/marka-crm-message';

export const dynamic = 'force-dynamic';

/**
 * POST /api/whatsapp/handoff
 *
 * Provider-aware compatibility layer used by MarBot.
 * - BAYPASS=true  -> crm wa / Baileys
 * - BAYPASS=false -> Meta WhatsApp Cloud API direct text
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { sessionId, message, name, requestId } = body;
    const messageId = String(body?.messageId || randomUUID()).trim();
    const occurredAt = String(body?.occurredAt || new Date().toISOString()).trim();

    if (
      !sessionId ||
      !/^guest_[a-zA-Z0-9_-]+$/.test(String(sessionId)) ||
      !String(message || '').trim()
    ) {
      return NextResponse.json(
        { error: 'valid sessionId and message are required' },
        { status: 400 }
      );
    }

    const result = await requestHumanHandoff({
      sessionId,
      message,
      name,
      requestId,
    });

    if (result.accepted) {
      const markaStatus = await sendMarkaMessageReceived({
        channel: 'webchat',
        messageId,
        occurredAt,
        threadId: 'webchat:' + sessionId,
        senderName: String(name || 'Pengunjung website Arsalynk').slice(0, 200),
        senderType: 'EXTERNAL',
        senderValue: 'website:' + sessionId,
        text: String(message).trim(),
      });
      if (markaStatus !== 'DELIVERED' && markaStatus !== 'NOT_CONFIGURED') {
        console.error('[Handoff] Marka did not acknowledge web chat message ' + messageId + '.');
      }

      try {
        await persistDurableLiveChatMessage({
          sessionId: String(sessionId),
          sender: 'user',
          content: String(message),
        });
      } catch (durableError) {
        console.error(
          '[Handoff] Durable history write failed; using local emergency fallback:',
          durableError,
        );
        try {
          recordLiveChatMessage(sessionId, 'user', String(message));
        } catch (localError) {
          console.error('[Handoff] Local history fallback also failed:', localError);
        }
      }

      console.info(
        `[Handoff] accepted provider=${result.provider || '-'} requestId=${result.requestId} session=${sessionId}`
      );

      return NextResponse.json(result, { status: 202 });
    }

    console.error(
      `[Handoff] upstream failure provider=${result.provider || '-'} requestId=${result.requestId} status=${result.status} error=${result.error || 'unknown'}`
    );

    return NextResponse.json(
      {
        ...result,
        upstreamFailure: true,
      },
      { status: 502 }
    );
  } catch (error: unknown) {
    const errorMsg = error instanceof Error ? error.message : String(error);
    console.error('[Handoff] route exception:', errorMsg);
    return NextResponse.json(
      { error: `Handoff error: ${errorMsg}` },
      { status: 500 }
    );
  }
}

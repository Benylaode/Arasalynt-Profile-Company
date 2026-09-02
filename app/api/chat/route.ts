import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

const CHATBOT_API_URL =
  process.env.NEXT_PUBLIC_CHATBOT_API_URL?.replace(/\/$/, '') || 'https://chatbot-arsalynk.vercel.app';
const CALLER_TOKEN =
  process.env.NEXT_PUBLIC_CHATBOT_CALLER_TOKEN || 'cb_live_0080c942f880b04ad7f3fba231432c1de43aefb24b201bd7';
const CALLER_ID =
  process.env.NEXT_PUBLIC_CHATBOT_CALLER_ID || 'cmtij4gk90003uo1l6ydj6pbf';

function parseSSEToText(sseRaw: string) {
  let reply = '';
  let conversationId = '';
  let sources: string[] = [];

  const lines = sseRaw.split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith(':') || trimmed === 'data: [DONE]') continue;

    if (trimmed.startsWith('data:')) {
      const jsonStr = trimmed.replace(/^data:\s*/, '');
      try {
        const parsed = JSON.parse(jsonStr);
        if (parsed.event === 'chunk' && parsed.data?.delta) {
          reply += parsed.data.delta;
        } else if (parsed.event === 'done') {
          if (parsed.data?.conversationId) conversationId = parsed.data.conversationId;
          if (parsed.data?.sources) sources = parsed.data.sources;
        } else if (parsed.reply) {
          reply = parsed.reply;
        }
      } catch {
        if (!jsonStr.startsWith('{')) {
          reply += jsonStr;
        }
      }
    }
  }

  return { reply: reply.trim(), conversationId, sources };
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { message, conversationId, callerId } = body;

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Field message wajib diisi.' },
        { status: 400 }
      );
    }

    const payload = {
      message,
      conversationId: conversationId || undefined,
      callerId: callerId || CALLER_ID,
    };

    const targetUrl = `${CHATBOT_API_URL}/api/v1/chat/completions`;

    const upstreamResponse = await fetch(targetUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${CALLER_TOKEN}`,
        'X-External-User-Id': callerId || CALLER_ID,
      },
      body: JSON.stringify(payload),
    });

    if (!upstreamResponse.ok) {
      let errMsg = `Upstream error ${upstreamResponse.status}`;
      try {
        const errJson = await upstreamResponse.json();
        if (errJson) {
          errMsg = errJson.message || errJson.error?.message || errJson.error || errMsg;
        }
      } catch {
        // fallback
      }
      return NextResponse.json({ error: errMsg }, { status: upstreamResponse.status });
    }

    const rawText = await upstreamResponse.text();
    const parsed = parseSSEToText(rawText);

    if (parsed.reply) {
      return NextResponse.json(parsed);
    }

    // JSON fallback
    try {
      const json = JSON.parse(rawText);
      return NextResponse.json(json);
    } catch {
      return NextResponse.json({
        reply: rawText || 'Terima kasih atas pertanyaannya.',
        conversationId: parsed.conversationId || conversationId,
        sources: [],
      });
    }
  } catch (error: unknown) {
    const errMsg = error instanceof Error ? error.message : String(error);
    console.error('[API Route /api/chat] Error:', error);
    return NextResponse.json(
      { error: `Internal Server Error: ${errMsg}` },
      { status: 500 }
    );
  }
}

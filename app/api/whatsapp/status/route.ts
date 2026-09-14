import { NextResponse } from 'next/server';
import { WA_CONFIG } from '@/lib/whatsapp/config';

export const dynamic = 'force-dynamic';

/**
 * GET /api/whatsapp/status
 * 
 * Proxies /ready from Hostinger WhatsApp Backend.
 */
export async function GET() {
  try {
    const res = await fetch(`${WA_CONFIG.baseUrl}/ready`, {
      headers: {
        'x-gateway-secret': WA_CONFIG.secret,
      },
      next: { revalidate: 0 },
    });

    const data = await res.json().catch(() => null);
    return NextResponse.json(data || { status: 'unknown' }, { status: res.status });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ ready: false, error: msg }, { status: 503 });
  }
}

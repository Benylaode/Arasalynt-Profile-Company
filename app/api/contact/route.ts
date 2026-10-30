import { NextRequest, NextResponse } from 'next/server';
import { randomUUID } from 'node:crypto';
import { sendMarkaEvent } from '@/lib/marka-crm';
import { inquiriesRepo } from '@/lib/repositories/inquiries';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name,
      email,
      phone,
      subject,
      company,
      message,
      targetBudget,
      brandDescription,
      packageChoice,
      service,
      inquiry,
    } = body || {};

    const effectiveName = String(name || '').trim();
    const effectiveEmail = String(email || '').trim().toLowerCase();
    const effectiveSubject = String(subject || inquiry || service || packageChoice || 'General Contact').trim();
    const effectiveMessage = String(message || brandDescription || body.description || '').trim();
    const effectivePhone = String(phone || body.contact || '').trim();

    if (!effectiveName || !effectiveEmail || !effectiveSubject) {
      return NextResponse.json(
        { error: 'Name, email, and subject/service are required' },
        { status: 400 }
      );
    }

    const eventId =
      req.headers.get('idempotency-key') ||
      `inq-${Date.now()}-${randomUUID().slice(0, 8)}`;

    // Save to local inquiries SQLite repository
    let localInquiry = null;
    try {
      localInquiry = inquiriesRepo.create({
        name: effectiveName,
        phone: effectivePhone,
        email: effectiveEmail,
        company: company ? String(company).trim() : '',
        contact: effectivePhone || effectiveEmail,
        service: effectiveSubject,
        packageChoice: packageChoice ? String(packageChoice).trim() : effectiveSubject,
        billingCycle: body.billingCycle ? String(body.billingCycle).trim() : '-',
        price: targetBudget ? `Rp ${Number(targetBudget).toLocaleString('id-ID')}` : (body.price ? String(body.price).trim() : '-'),
        message: effectiveMessage,
        brandDescription: effectiveMessage,
        source: body.source ? String(body.source).trim() : 'contact_form',
      });
    } catch (dbErr) {
      console.warn('Failed to save local inquiry in /api/contact:', dbErr);
    }

    // Send event to Marka CRM with normalized customer fields
    const phoneDigits = effectivePhone.replace(/\D/g, '');
    const crmEmail = effectiveEmail && effectiveEmail.includes('@')
      ? effectiveEmail.slice(0, 320)
      : (phoneDigits ? `${phoneDigits}@phone.arsalynk.com` : 'leads@arsalynk.com');

    const result = await sendMarkaEvent(eventId, 'inquiry.submitted', {
      customer: {
        name: effectiveName.slice(0, 200),
        email: crmEmail,
        ...(effectivePhone ? { phone: effectivePhone.slice(0, 40) } : {}),
        ...(company ? { company: String(company).trim().slice(0, 200) } : {}),
      },
      requirements: {
        subject: effectiveSubject.slice(0, 300),
        description: effectiveMessage.slice(0, 20000),
        ...(targetBudget ? { target_budget: Number(targetBudget) } : {}),
      },
    });

    return NextResponse.json(
      {
        success: result.success,
        eventId: result.event_id,
        inquiryId: localInquiry?.id,
        status: result.status,
        markaResponse: result.data || result.error,
      },
      { status: result.success ? 202 : result.status || 500 }
    );
  } catch (error: unknown) {
    const errMsg = error instanceof Error ? error.message : 'Failed to process contact form';
    console.error('Gagal mengirim inquiry ke Marka:', errMsg);
    return NextResponse.json(
      { error: errMsg },
      { status: 500 }
    );
  }
}

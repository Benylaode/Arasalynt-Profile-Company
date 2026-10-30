import { NextRequest, NextResponse } from 'next/server';
import { inquiriesRepo } from '@/lib/repositories/inquiries';
import { sendMarkaEvent } from '@/lib/marka-crm';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const rawBody = await request.json().catch(() => ({}));
    const body = (typeof rawBody.data === 'object' && rawBody.data !== null) ? rawBody.data : rawBody;
    const providedEventId = rawBody.event_id || rawBody.eventId;

    const rawCustomer = typeof body.customer === 'object' && body.customer !== null ? body.customer : {};
    const rawRequirements = typeof body.requirements === 'object' && body.requirements !== null ? body.requirements : {};

    const extractedEmail = String(
      body.email ||
      body.customerEmail ||
      body.customer_email ||
      rawCustomer.email ||
      ''
    ).trim();

    const extractedPhone = String(
      body.phone ||
      body.customerPhone ||
      body.customer_phone ||
      rawCustomer.phone ||
      ''
    ).trim();

    const extractedName = String(
      body.name ||
      body.customerName ||
      body.customer_name ||
      rawCustomer.name ||
      (extractedEmail ? extractedEmail.split('@')[0] : '') ||
      'Calon Klien'
    ).trim();

    const effectiveContact = (body.contact || extractedPhone || extractedEmail || '').trim();
    const effectiveCompany = String(body.company || rawCustomer.company || '').trim();
    const effectiveService = String(
      rawRequirements.subject ||
      body.service ||
      body.packageChoice ||
      body.inquiry ||
      body.subject ||
      'General Inquiry'
    ).trim();
    const effectivePackage = String(
      body.packageChoice ||
      body.service ||
      body.inquiry ||
      body.subject ||
      ''
    ).trim();
    const effectiveMessage = String(
      rawRequirements.description ||
      body.message ||
      body.brandDescription ||
      body.description ||
      ''
    ).trim();
    const effectivePrice = body.price || (body.targetBudget ? `Rp ${Number(body.targetBudget).toLocaleString('id-ID')}` : '');

    if (!effectiveContact) {
      return NextResponse.json(
        { success: false, error: 'Email atau Nomor WhatsApp wajib diisi' },
        { status: 400 }
      );
    }

    const inquiry = inquiriesRepo.create({
      name: extractedName,
      phone: extractedPhone,
      email: extractedEmail,
      contact: effectiveContact,
      company: effectiveCompany,
      service: effectiveService,
      packageChoice: effectivePackage,
      billingCycle: String(body.billingCycle || '').trim(),
      price: String(effectivePrice || '').trim(),
      message: effectiveMessage,
      brandDescription: effectiveMessage,
      source: String(body.source || 'contact_form').trim(),
    });

    // Synchronize to external Marka CRM
    let markaResult = null;
    try {
      const eventId = providedEventId ? String(providedEventId).trim() : `inq-${inquiry.id}-${Date.now()}`;
      const phoneDigits = (inquiry.phone || inquiry.contact || '').replace(/\D/g, '');
      const crmEmail = inquiry.email && inquiry.email.includes('@')
        ? inquiry.email.trim().toLowerCase().slice(0, 320)
        : (phoneDigits ? `${phoneDigits}@phone.arsalynk.com` : 'leads@arsalynk.com');

      const targetBudgetNum = body.target_budget !== undefined
        ? Number(body.target_budget)
        : (body.targetBudget ? Number(body.targetBudget) : undefined);

      markaResult = await sendMarkaEvent(eventId, 'inquiry.submitted', {
        customer: {
          name: inquiry.name.slice(0, 200),
          email: crmEmail,
          ...(inquiry.phone ? { phone: inquiry.phone.slice(0, 40) } : {}),
          ...(inquiry.company ? { company: inquiry.company.slice(0, 200) } : {}),
        },
        requirements: {
          subject: String(rawRequirements.subject || inquiry.packageChoice || inquiry.service || 'Inquiry Baru').slice(0, 300),
          description: String(rawRequirements.description || inquiry.message || inquiry.brandDescription || 'Inquiry dari website Arsalynk').slice(0, 20000),
          ...(targetBudgetNum !== undefined && !isNaN(targetBudgetNum) ? { target_budget: targetBudgetNum } : {}),
        },
      });
    } catch (crmErr) {
      console.warn('[CRM Sync Warning] Could not sync inquiry to Marka CRM:', crmErr);
    }

    return NextResponse.json({
      success: true,
      data: inquiry,
      markaSync: markaResult ? { success: markaResult.success, status: markaResult.status } : null,
    });
  } catch (error) {
    console.error('Failed to record inquiry:', error);
    return NextResponse.json(
      { success: false, error: 'Gagal menyimpan data ke sistem CRM' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status') || undefined;
    const source = searchParams.get('source') || undefined;

    const inquiries = inquiriesRepo.list({ status, source });
    return NextResponse.json({ success: true, data: inquiries });
  } catch (error) {
    console.error('Failed to fetch inquiries:', error);
    return NextResponse.json(
      { success: false, error: 'Gagal memuat data konsultasi CRM' },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, status } = body;

    if (!id || !status) {
      return NextResponse.json(
        { success: false, error: 'ID dan status wajib disertakan' },
        { status: 400 }
      );
    }

    const success = inquiriesRepo.updateStatus(Number(id), status);
    if (!success) {
      return NextResponse.json(
        { success: false, error: 'Data inquiry tidak ditemukan' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, message: 'Status CRM diperbarui' });
  } catch (error) {
    console.error('Failed to update inquiry status:', error);
    return NextResponse.json(
      { success: false, error: 'Gagal memperbarui status inquiry' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { success: false, error: 'ID inquiry wajib disertakan' },
        { status: 400 }
      );
    }

    const success = inquiriesRepo.delete(Number(id));
    return NextResponse.json({ success, message: 'Data inquiry CRM dihapus' });
  } catch (error) {
    console.error('Failed to delete inquiry:', error);
    return NextResponse.json(
      { success: false, error: 'Gagal menghapus data inquiry' },
      { status: 500 }
    );
  }
}

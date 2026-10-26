import { NextRequest, NextResponse } from 'next/server';
import { inquiriesRepo } from '@/lib/repositories/inquiries';
import { sendMarkaEvent } from '@/lib/marka-crm';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      phone,
      email,
      contact,
      company,
      service,
      packageChoice,
      billingCycle,
      price,
      message,
      brandDescription,
      source,
      inquiry: inquiryField,
      subject,
      description,
      targetBudget,
    } = body;

    const effectiveName = String(name || '').trim();
    const effectivePhone = String(phone || '').trim();
    const effectiveEmail = String(email || '').trim();
    const effectiveContact = (contact || phone || email || '').trim();
    const effectiveService = String(service || packageChoice || inquiryField || subject || 'General Inquiry').trim();
    const effectivePackage = String(packageChoice || service || inquiryField || subject || '').trim();
    const effectiveMessage = String(message || brandDescription || description || '').trim();
    const effectivePrice = price || (targetBudget ? `Rp ${Number(targetBudget).toLocaleString('id-ID')}` : '');

    if (!effectiveName) {
      return NextResponse.json(
        { success: false, error: 'Nama wajib diisi' },
        { status: 400 }
      );
    }

    if (!effectiveContact) {
      return NextResponse.json(
        { success: false, error: 'Nomor WhatsApp atau Email wajib diisi' },
        { status: 400 }
      );
    }

    const inquiry = inquiriesRepo.create({
      name: effectiveName,
      phone: effectivePhone,
      email: effectiveEmail,
      contact: effectiveContact,
      company: String(company || '').trim(),
      service: effectiveService,
      packageChoice: effectivePackage,
      billingCycle: String(billingCycle || '').trim(),
      price: String(effectivePrice || '').trim(),
      message: effectiveMessage,
      brandDescription: effectiveMessage,
      source: String(source || 'contact_form').trim(),
    });

    // Synchronize to external Marka CRM
    let markaResult = null;
    try {
      const eventId = `inq-${inquiry.id}-${Date.now()}`;
      const phoneDigits = (inquiry.phone || inquiry.contact || '').replace(/\D/g, '');
      const crmEmail = inquiry.email && inquiry.email.includes('@')
        ? inquiry.email.trim().toLowerCase().slice(0, 320)
        : (phoneDigits ? `${phoneDigits}@phone.arsalynk.com` : 'leads@arsalynk.com');

      markaResult = await sendMarkaEvent(eventId, 'inquiry.submitted', {
        customer: {
          name: inquiry.name.slice(0, 200),
          email: crmEmail,
          ...(inquiry.phone ? { phone: inquiry.phone.slice(0, 40) } : {}),
          ...(inquiry.company ? { company: inquiry.company.slice(0, 200) } : {}),
        },
        requirements: {
          subject: `[${inquiry.source}] ${inquiry.packageChoice || inquiry.service || 'Inquiry Baru'}`.slice(0, 300),
          description: (inquiry.message || inquiry.brandDescription || 'Inquiry dari website Arsalynk').slice(0, 20000),
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

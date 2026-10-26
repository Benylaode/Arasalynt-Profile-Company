'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function ClientPortalClient() {
  const searchParams = useSearchParams();
  const initialType = searchParams.get('type') === 'ticket' ? 'ticket' : 'quotation';
  const initialCode = searchParams.get('code') || searchParams.get('id') || '';

  const [activeTab, setActiveTab] = useState<'quotation' | 'ticket'>(initialType);

  // Quotation State
  const [quotationCode, setQuotationCode] = useState(initialCode);
  const [signatureName, setSignatureName] = useState('');
  const [decisionNotes, setDecisionNotes] = useState('');
  const [isSubmittingQuote, setIsSubmittingQuote] = useState(false);
  const [quoteFeedback, setQuoteFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  // Ticket Creation State (ticket.created)
  const [ticketSubject, setTicketSubject] = useState('');
  const [ticketDescription, setTicketDescription] = useState('');
  const [serialNumber, setSerialNumber] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [isSubmittingTicket, setIsSubmittingTicket] = useState(false);
  const [ticketFeedback, setTicketFeedback] = useState<{ type: 'success' | 'error'; message: string; eventId?: string } | null>(null);

  const handleQuotationDecision = async (decision: 'ACCEPTED' | 'REJECTED') => {
    if (!quotationCode.trim()) {
      setQuoteFeedback({
        type: 'error',
        message: 'Kode Quotation resmi (contoh: QUO-2026-00125) wajib diisi.',
      });
      return;
    }

    if (!signatureName.trim()) {
      setQuoteFeedback({
        type: 'error',
        message: 'Nama lengkap penandatangan yang berwenang wajib diisi untuk konfirmasi.',
      });
      return;
    }

    setIsSubmittingQuote(true);
    setQuoteFeedback(null);

    try {
      const res = await fetch('/api/portal/quotation/decision', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          quotation_code: quotationCode.trim(),
          decision,
          decision_notes: decisionNotes.trim() || undefined,
          signature: signatureName.trim(),
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Gagal mengirimkan keputusan penawaran ke Marka CRM.');
      }

      setQuoteFeedback({
        type: 'success',
        message: data.message || `Keputusan ${decision} berhasil dikirim dan dicatat di Marka CRM.`,
      });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Terjadi kendala koneksi ke Marka CRM.';
      setQuoteFeedback({ type: 'error', message: msg });
    } finally {
      setIsSubmittingQuote(false);
    }
  };

  const handleTicketSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!ticketSubject.trim() || !ticketDescription.trim()) {
      setTicketFeedback({
        type: 'error',
        message: 'Subjek dan deskripsi kendala teknis wajib diisi.',
      });
      return;
    }

    setIsSubmittingTicket(true);
    setTicketFeedback(null);

    try {
      const res = await fetch('/api/support/ticket', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subject: ticketSubject.trim(),
          description: ticketDescription.trim(),
          serialNumber: serialNumber.trim() || undefined,
          customerEmail: customerEmail.trim() || undefined,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || data.message || 'Gagal membuat tiket di Marka CRM.');
      }

      setTicketFeedback({
        type: 'success',
        message: 'Tiket dukungan teknis berhasil dibuat dan diteruskan ke Helpdesk Marka CRM.',
        eventId: data.eventId,
      });

      // Reset form on success
      setTicketSubject('');
      setTicketDescription('');
      setSerialNumber('');
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Terjadi kendala saat menghubungi server support.';
      setTicketFeedback({ type: 'error', message: msg });
    } finally {
      setIsSubmittingTicket(false);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Segmented Tab Switcher */}
      <div className="flex rounded-full border border-[#D9D9D9] bg-[#EFEFEF] p-1.5 shadow-inner">
        <button
          type="button"
          onClick={() => {
            setActiveTab('quotation');
            setQuoteFeedback(null);
          }}
          className={`flex-1 rounded-full py-2.5 sm:py-3 text-[12px] sm:text-[13px] font-body font-bold uppercase tracking-[0.04em] transition ${
            activeTab === 'quotation'
              ? 'bg-[#1A3E9E] text-white shadow-md'
              : 'text-[#505050] hover:text-[#101010]'
          }`}
        >
          Persetujuan Quotation
        </button>
        <button
          type="button"
          onClick={() => {
            setActiveTab('ticket');
            setTicketFeedback(null);
          }}
          className={`flex-1 rounded-full py-2.5 sm:py-3 text-[12px] sm:text-[13px] font-body font-bold uppercase tracking-[0.04em] transition ${
            activeTab === 'ticket'
              ? 'bg-[#1A3E9E] text-white shadow-md'
              : 'text-[#505050] hover:text-[#101010]'
          }`}
        >
          Buat Tiket Support
        </button>
      </div>

      {/* TAB 1: QUOTATION DECISION (quotation.decision) */}
      {activeTab === 'quotation' && (
        <div className="rounded-[20px] border border-[#D9D9D9] bg-white p-6 sm:p-8 shadow-sm">
          <div className="mb-6 flex flex-col gap-1">
            <div className="flex items-center gap-2 font-body text-[11px] font-extrabold uppercase tracking-[0.06em] text-[#1A3E9E]">
              <span className="h-1.5 w-1.5 bg-[#1A3E9E]" />
              <span>DOKUMEN KONTRAK &amp; PENAWARAN</span>
            </div>
            <h3 className="font-heading text-[20px] font-medium text-[#101010]">
              Persetujuan Dokumen Quotation Resmi
            </h3>
            <p className="font-body text-[13px] text-[#717171]">
              Kirimkan keputusan penerimaan (<span className="font-semibold text-emerald-700">ACCEPTED</span>) atau penolakan/revisi (<span className="font-semibold text-rose-700">REJECTED</span>) langsung ke Marka ERP secara aman melalui event bertanda tangan server.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col gap-1.5">
              <label className="font-body text-[13px] font-medium text-[#292929]">
                <span className="font-bold text-[#FF5050] mr-1">*</span>
                Kode Quotation (Sesuai Email / Dokumen Penawaran)
              </label>
              <input
                type="text"
                required
                value={quotationCode}
                onChange={(e) => setQuotationCode(e.target.value.toUpperCase())}
                placeholder="Contoh: QUO-2026-00125"
                className="h-[46px] w-full rounded-[8px] border border-[#C8C8C8] bg-white px-4 font-body text-[14px] text-[#101010] outline-none transition placeholder:text-[#B0B0B0] focus:border-[#1A3E9E] focus:ring-2 focus:ring-[#1A3E9E]/10 md:h-[48px]"
              />
              <span className="font-body text-[11px] text-[#717171]">
                Gunakan kode dokumen yang dikirimkan kepada Anda (bukan UUID internal). Dokumen harus sudah berstatus terkirim (SENT) di Marka CRM.
              </span>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-body text-[13px] font-medium text-[#292929]">
                <span className="font-bold text-[#FF5050] mr-1">*</span>
                Nama Lengkap Penandatangan Sah
              </label>
              <input
                type="text"
                required
                value={signatureName}
                onChange={(e) => setSignatureName(e.target.value)}
                placeholder="Contoh: Budi Santoso (Direktur Operasional)"
                className="h-[46px] w-full rounded-[8px] border border-[#C8C8C8] bg-white px-4 font-body text-[14px] text-[#101010] outline-none transition placeholder:text-[#B0B0B0] focus:border-[#1A3E9E] focus:ring-2 focus:ring-[#1A3E9E]/10 md:h-[48px]"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-body text-[13px] font-medium text-[#292929]">
                Catatan / Persyaratan Khusus (Opsional)
              </label>
              <textarea
                rows={3}
                value={decisionNotes}
                onChange={(e) => setDecisionNotes(e.target.value)}
                placeholder="Tuliskan catatan lingkup pengerjaan, estimasi tanggal mulai, atau alasan revisi..."
                className="w-full resize-none rounded-[8px] border border-[#C8C8C8] bg-white p-3.5 font-body text-[14px] text-[#101010] outline-none transition placeholder:text-[#B0B0B0] focus:border-[#1A3E9E] focus:ring-2 focus:ring-[#1A3E9E]/10"
              />
            </div>

            {quoteFeedback && (
              <div
                className={`rounded-[10px] p-4 font-body text-[13px] ${
                  quoteFeedback.type === 'success'
                    ? 'border border-emerald-300 bg-emerald-50 text-emerald-900'
                    : 'border border-red-300 bg-red-50 text-red-900'
                }`}
              >
                {quoteFeedback.type === 'success' ? '✓ ' : '✕ '}
                {quoteFeedback.message}
              </div>
            )}

            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                type="button"
                disabled={isSubmittingQuote}
                onClick={() => handleQuotationDecision('ACCEPTED')}
                className="inline-flex h-[48px] items-center justify-center gap-2 rounded-full bg-[#1A3E9E] px-8 font-body text-[13px] font-bold uppercase tracking-[0.04em] text-white transition hover:bg-[#14347F] disabled:cursor-wait disabled:opacity-50 md:h-[50px]"
              >
                <span>{isSubmittingQuote ? 'MEMPROSES...' : '✓ SETUJUI PENAWARAN (ACCEPT)'}</span>
              </button>

              <button
                type="button"
                disabled={isSubmittingQuote}
                onClick={() => handleQuotationDecision('REJECTED')}
                className="inline-flex h-[48px] items-center justify-center gap-2 rounded-full border border-[#C8C8C8] bg-white px-8 font-body text-[13px] font-bold uppercase tracking-[0.04em] text-[#505050] transition hover:bg-gray-100 hover:text-[#101010] disabled:cursor-wait disabled:opacity-50 md:h-[50px]"
              >
                <span>✕ MINTA REVISI / TOLAK</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: SUPPORT TICKET CREATION (ticket.created) */}
      {activeTab === 'ticket' && (
        <div className="rounded-[20px] border border-[#D9D9D9] bg-white p-6 sm:p-8 shadow-sm">
          <div className="mb-6 flex flex-col gap-1">
            <div className="flex items-center gap-2 font-body text-[11px] font-extrabold uppercase tracking-[0.06em] text-[#1A3E9E]">
              <span className="h-1.5 w-1.5 bg-[#1A3E9E]" />
              <span>HELPDESK MARKA CRM</span>
            </div>
            <h3 className="font-heading text-[20px] font-medium text-[#101010]">
              Buat Tiket Dukungan Teknis Baru
            </h3>
            <p className="font-body text-[13px] text-[#717171]">
              Laporkan kendala operasional atau permintaan bantuan teknis. Tiket akan langsung dimasukkan ke antrean Helpdesk Marka ERP.
            </p>
          </div>

          <form onSubmit={handleTicketSubmit} className="space-y-4">
            <div className="flex flex-col gap-1.5">
              <label className="font-body text-[13px] font-medium text-[#292929]">
                <span className="font-bold text-[#FF5050] mr-1">*</span>
                Subjek Tiket / Judul Kendala
              </label>
              <input
                type="text"
                required
                value={ticketSubject}
                onChange={(e) => setTicketSubject(e.target.value)}
                placeholder="Contoh: Kendala sinkronisasi data POS ke modul persediaan"
                className="h-[46px] w-full rounded-[8px] border border-[#C8C8C8] bg-white px-4 font-body text-[14px] text-[#101010] outline-none transition placeholder:text-[#B0B0B0] focus:border-[#1A3E9E] focus:ring-2 focus:ring-[#1A3E9E]/10 md:h-[48px]"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label className="font-body text-[13px] font-medium text-[#292929]">
                  Nomor Seri Produk / Perangkat (Opsional)
                </label>
                <input
                  type="text"
                  value={serialNumber}
                  onChange={(e) => setSerialNumber(e.target.value)}
                  placeholder="Kosongkan jika bukan kendala hardware"
                  className="h-[46px] w-full rounded-[8px] border border-[#C8C8C8] bg-white px-4 font-body text-[14px] text-[#101010] outline-none transition placeholder:text-[#B0B0B0] focus:border-[#1A3E9E] focus:ring-2 focus:ring-[#1A3E9E]/10 md:h-[48px]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-body text-[13px] font-medium text-[#292929]">
                  Email Kontak Anda (Untuk Notifikasi Update)
                </label>
                <input
                  type="email"
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  placeholder="admin@perusahaan.co.id"
                  className="h-[46px] w-full rounded-[8px] border border-[#C8C8C8] bg-white px-4 font-body text-[14px] text-[#101010] outline-none transition placeholder:text-[#B0B0B0] focus:border-[#1A3E9E] focus:ring-2 focus:ring-[#1A3E9E]/10 md:h-[48px]"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-body text-[13px] font-medium text-[#292929]">
                <span className="font-bold text-[#FF5050] mr-1">*</span>
                Deskripsi Kendala &amp; Langkah Reproduksi
              </label>
              <textarea
                required
                rows={4}
                value={ticketDescription}
                onChange={(e) => setTicketDescription(e.target.value)}
                placeholder="Jelaskan detail pesan error, waktu kejadian, dan modul yang terdampak..."
                className="w-full resize-none rounded-[8px] border border-[#C8C8C8] bg-white p-3.5 font-body text-[14px] text-[#101010] outline-none transition placeholder:text-[#B0B0B0] focus:border-[#1A3E9E] focus:ring-2 focus:ring-[#1A3E9E]/10"
              />
            </div>

            {ticketFeedback && (
              <div
                className={`rounded-[10px] p-4 font-body text-[13px] ${
                  ticketFeedback.type === 'success'
                    ? 'border border-emerald-300 bg-emerald-50 text-emerald-900'
                    : 'border border-red-300 bg-red-50 text-red-900'
                }`}
              >
                {ticketFeedback.type === 'success' ? '✓ ' : '✕ '}
                {ticketFeedback.message}
                {ticketFeedback.eventId && (
                  <span className="block mt-1 font-mono text-[11px] text-emerald-700">
                    ID Transaksi Event: {ticketFeedback.eventId}
                  </span>
                )}
              </div>
            )}

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmittingTicket}
                className="inline-flex h-[48px] items-center justify-center gap-2 rounded-full bg-[#1A3E9E] px-8 font-body text-[13px] font-bold uppercase tracking-[0.04em] text-white transition hover:bg-[#14347F] disabled:cursor-wait disabled:opacity-60 md:h-[50px]"
              >
                <span>{isSubmittingTicket ? 'MENGIRIM TIKET...' : 'BUAT TIKET SUPPORT'}</span>
                <svg width="6" height="10" viewBox="0 0 8 14" fill="none" aria-hidden="true">
                  <path
                    d="M1 1L7 7L1 13"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </form>

          {/* Transparent Notice regarding Ticket Status Access */}
          <div className="mt-6 rounded-[12px] bg-[#F7F7F7] p-4 border border-[#EAEAEA]">
            <div className="flex items-center gap-2 font-body text-[11px] font-bold uppercase tracking-wider text-[#1A3E9E]">
              <span>ℹ ALUR PENANGANAN &amp; PEMBARUAN TIKET</span>
            </div>
            <p className="mt-1 font-body text-[12px] leading-[1.6] text-[#717171]">
              Tiket yang dikirimkan akan langsung dialokasikan ke engineer teknis Arsalynk di Marka CRM. Pembaruan progres pengerjaan, hasil investigasi, dan solusi akan dikirimkan langsung secara berkala ke email resmi perusahaan Anda.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

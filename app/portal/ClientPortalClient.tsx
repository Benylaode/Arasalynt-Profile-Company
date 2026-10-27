'use client';

import React, { useState } from 'react';
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
  const [quoteFeedback, setQuoteFeedback] = useState<{
    type: 'success' | 'error' | 'info';
    message: string;
  } | null>(null);

  // Ticket Creation State
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [ticketSubject, setTicketSubject] = useState('');
  const [ticketDescription, setTicketDescription] = useState('');
  const [serialNumber, setSerialNumber] = useState('');
  const [isSubmittingTicket, setIsSubmittingTicket] = useState(false);
  const [ticketFeedback, setTicketFeedback] = useState<{
    type: 'success' | 'error';
    message: string;
    eventId?: string;
  } | null>(null);

  const handleQuotationDecision = async (decision: 'ACCEPTED' | 'REJECTED') => {
    const cleanCode = quotationCode.trim();

    if (!cleanCode) {
      setQuoteFeedback({
        type: 'error',
        message: 'Nomor dokumen penawaran (contoh: QUO-2026-00125) wajib diisi.',
      });
      return;
    }

    if (!signatureName.trim()) {
      setQuoteFeedback({
        type: 'error',
        message: 'Nama lengkap perwakilan yang berwenang wajib diisi untuk konfirmasi.',
      });
      return;
    }

    setIsSubmittingQuote(true);
    setQuoteFeedback({
      type: 'info',
      message: 'Mendaftarkan keputusan ke antrean Marka CRM...',
    });

    try {
      // 1. Submit Keputusan ke Route Handler
      const res = await fetch('/api/quotation/decision', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          quotation_code: cleanCode,
          decision,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Gagal mengirimkan konfirmasi penawaran.');
      }

      // 2. Tangani status duplikat
      if (data.processing_status === 'DUPLICATE') {
        setQuoteFeedback({
          type: 'info',
          message: data.message || `Keputusan untuk dokumen ${cleanCode} sudah pernah diterima sebelumnya.`,
        });
        setIsSubmittingQuote(false);
        return;
      }

      // 3. Jika status 202 (QUEUED), jalankan polling status worker
      if (data.status === 202 && data.status_check_url) {
        setQuoteFeedback({
          type: 'info',
          message: 'Keputusan diterima. Menunggu pemrosesan oleh worker Marka ERP...',
        });

        const checkUrl = data.status_check_url;
        let attempts = 0;
        const maxAttempts = 15; // Maksimal polling ~22 detik

        const pollStatus = async (): Promise<void> => {
          attempts++;
          try {
            const statusRes = await fetch(checkUrl);
            const statusData = await statusRes.json();

            if (statusData.completed) {
              if (statusData.success && statusData.processing_status === 'COMPLETED') {
                setQuoteFeedback({
                  type: 'success',
                  message:
                    statusData.message ||
                    (decision === 'ACCEPTED'
                      ? `Persetujuan penawaran ${cleanCode} telah berhasil diproses oleh sistem Marka ERP. Tim Arsalynk akan segera menghubungi Anda.`
                      : `Catatan penyesuaian penawaran ${cleanCode} telah berhasil diproses oleh sistem Marka ERP.`),
                });
              } else {
                setQuoteFeedback({
                  type: 'error',
                  message: statusData.error || 'Pemrosesan keputusan gagal pada worker Marka ERP.',
                });
              }
              setIsSubmittingQuote(false);
              return;
            }

            if (attempts >= maxAttempts) {
              setQuoteFeedback({
                type: 'info',
                message: `Event keputusan telah diterima (ID: ${data.eventId}), namun pemrosesan membutuhkan waktu lebih lama. Hasil akhir akan diperbarui otomatis di sistem.`,
              });
              setIsSubmittingQuote(false);
              return;
            }

            // Lanjutkan polling berikutnya setelah 1.5 detik
            setTimeout(pollStatus, 1500);
          } catch {
            setQuoteFeedback({
              type: 'error',
              message: 'Terjadi kendala jaringan saat memantau status pemrosesan.',
            });
            setIsSubmittingQuote(false);
          }
        };

        setTimeout(pollStatus, 1000);
      } else {
        setQuoteFeedback({
          type: 'success',
          message: data.message || `Keputusan penawaran ${cleanCode} berhasil dikirimkan.`,
        });
        setIsSubmittingQuote(false);
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Terjadi kendala saat mengirim konfirmasi.';
      setQuoteFeedback({ type: 'error', message: msg });
      setIsSubmittingQuote(false);
    }
  };

  const handleTicketSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim() || !customerEmail.trim() || !ticketSubject.trim() || !ticketDescription.trim()) {
      setTicketFeedback({
        type: 'error',
        message: 'Nama, email, topik, dan rincian permohonan wajib diisi.',
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
          customer: {
            name: customerName.trim(),
            email: customerEmail.trim(),
          },
          requirements: {
            subject: ticketSubject.trim(),
            description: ticketDescription.trim(),
          },
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || data.message || 'Gagal mengirimkan permohonan bantuan.');
      }

      setTicketFeedback({
        type: 'success',
        message: 'Permohonan bantuan teknis Anda telah berhasil dikirimkan kepada tim Arsalynk.',
        eventId: data.eventId,
      });

      // Reset form on success
      setCustomerName('');
      setCustomerEmail('');
      setTicketSubject('');
      setTicketDescription('');
      setSerialNumber('');
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Terjadi kendala saat mengirim permohonan.';
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
          Konfirmasi Penawaran
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
          Bantuan Dukungan Teknis
        </button>
      </div>

      {/* TAB 1: QUOTATION DECISION */}
      {activeTab === 'quotation' && (
        <div className="rounded-[20px] border border-[#D9D9D9] bg-white p-6 sm:p-8 shadow-sm">
          <div className="mb-6 flex flex-col gap-1">
            <div className="flex items-center gap-2 font-body text-[11px] font-extrabold uppercase tracking-[0.06em] text-[#1A3E9E]">
              <span className="h-1.5 w-1.5 bg-[#1A3E9E]" />
              <span>DOKUMEN KERJA SAMA</span>
            </div>
            <h3 className="font-heading text-[20px] font-medium text-[#101010]">
              Konfirmasi Dokumen Penawaran Resmi
            </h3>
            <p className="font-body text-[13px] text-[#717171]">
              Kirimkan persetujuan atau catatan penyesuaian untuk penawaran kerja sama yang telah dikirimkan oleh tim Arsalynk kepada perusahaan Anda.
            </p>
            <div className="mt-2 rounded-[8px] border border-blue-100 bg-blue-50/60 p-2.5 font-body text-[12px] text-[#1A3E9E]">
              ℹ️ <strong>Integrasi Marka ERP:</strong> Dokumen penawaran harus berada dalam status <strong>SENT</strong> dan terhubung ke <strong>Opportunity</strong> aktif di sistem Marka ERP agar persetujuan (ACCEPTED) dapat diproses.
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col gap-1.5">
              <label className="font-body text-[13px] font-medium text-[#292929]">
                <span className="font-bold text-[#FF5050] mr-1">*</span>
                Nomor Surat Penawaran
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
                Masukkan nomor penawaran seperti yang tertera pada surat penawaran atau email dari tim Arsalynk.
              </span>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-body text-[13px] font-medium text-[#292929]">
                <span className="font-bold text-[#FF5050] mr-1">*</span>
                Nama Lengkap Perwakilan Perusahaan
              </label>
              <input
                type="text"
                required
                value={signatureName}
                onChange={(e) => setSignatureName(e.target.value)}
                placeholder="Contoh: Budi Santoso (Direktur / Manager)"
                className="h-[46px] w-full rounded-[8px] border border-[#C8C8C8] bg-white px-4 font-body text-[14px] text-[#101010] outline-none transition placeholder:text-[#B0B0B0] focus:border-[#1A3E9E] focus:ring-2 focus:ring-[#1A3E9E]/10 md:h-[48px]"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-body text-[13px] font-medium text-[#292929]">
                Catatan atau Pesan Tambahan (Opsional)
              </label>
              <textarea
                rows={3}
                value={decisionNotes}
                onChange={(e) => setDecisionNotes(e.target.value)}
                placeholder="Tuliskan catatan terkait ruang lingkup, jadwal pengerjaan, atau poin yang ingin didiskusikan..."
                className="w-full resize-none rounded-[8px] border border-[#C8C8C8] bg-white p-3.5 font-body text-[14px] text-[#101010] outline-none transition placeholder:text-[#B0B0B0] focus:border-[#1A3E9E] focus:ring-2 focus:ring-[#1A3E9E]/10"
              />
            </div>

            {quoteFeedback && (
              <div
                className={`rounded-[10px] p-4 font-body text-[13px] ${
                  quoteFeedback.type === 'success'
                    ? 'border border-emerald-300 bg-emerald-50 text-emerald-900'
                    : quoteFeedback.type === 'info'
                    ? 'border border-blue-300 bg-blue-50 text-blue-900'
                    : 'border border-red-300 bg-red-50 text-red-900'
                }`}
              >
                {quoteFeedback.type === 'success' && '✓ '}
                {quoteFeedback.type === 'info' && 'ℹ️ '}
                {quoteFeedback.type === 'error' && '✕ '}
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
                <span>{isSubmittingQuote ? 'MEMPROSES...' : '✓ SETUJUI PENAWARAN'}</span>
              </button>

              <button
                type="button"
                disabled={isSubmittingQuote}
                onClick={() => handleQuotationDecision('REJECTED')}
                className="inline-flex h-[48px] items-center justify-center gap-2 rounded-full border border-[#C8C8C8] bg-white px-8 font-body text-[13px] font-bold uppercase tracking-[0.04em] text-[#505050] transition hover:bg-gray-100 hover:text-[#101010] disabled:cursor-wait disabled:opacity-50 md:h-[50px]"
              >
                <span>✕ AJUKAN PENYESUAIAN</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: SUPPORT TICKET */}
      {activeTab === 'ticket' && (
        <div className="rounded-[20px] border border-[#D9D9D9] bg-white p-6 sm:p-8 shadow-sm">
          <div className="mb-6 flex flex-col gap-1">
            <div className="flex items-center gap-2 font-body text-[11px] font-extrabold uppercase tracking-[0.06em] text-[#1A3E9E]">
              <span className="h-1.5 w-1.5 bg-[#1A3E9E]" />
              <span>LAYANAN DUKUNGAN KLIEN</span>
            </div>
            <h3 className="font-heading text-[20px] font-medium text-[#101010]">
              Permohonan Bantuan Teknis
            </h3>
            <p className="font-body text-[13px] text-[#717171]">
              Sampaikan kendala operasional atau kebutuhan bantuan teknis proyek Anda agar tim spesialis kami dapat segera membantu.
            </p>
          </div>

          <form onSubmit={handleTicketSubmit} className="space-y-4">
            <div className="flex flex-col gap-1.5">
              <label className="font-body text-[13px] font-medium text-[#292929]">
                <span className="font-bold text-[#FF5050] mr-1">*</span>
                Perihal / Topik Bantuan
              </label>
              <input
                type="text"
                required
                value={ticketSubject}
                onChange={(e) => setTicketSubject(e.target.value)}
                placeholder="Contoh: Bantuan sinkronisasi data transaksi atau akun pengguna"
                className="h-[46px] w-full rounded-[8px] border border-[#C8C8C8] bg-white px-4 font-body text-[14px] text-[#101010] outline-none transition placeholder:text-[#B0B0B0] focus:border-[#1A3E9E] focus:ring-2 focus:ring-[#1A3E9E]/10 md:h-[48px]"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label className="font-body text-[13px] font-medium text-[#292929]">
                  <span className="font-bold text-[#FF5050] mr-1">*</span>
                  Nama Lengkap Anda
                </label>
                <input
                  type="text"
                  required
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Contoh: Budi Santoso"
                  className="h-[46px] w-full rounded-[8px] border border-[#C8C8C8] bg-white px-4 font-body text-[14px] text-[#101010] outline-none transition placeholder:text-[#B0B0B0] focus:border-[#1A3E9E] focus:ring-2 focus:ring-[#1A3E9E]/10 md:h-[48px]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-body text-[13px] font-medium text-[#292929]">
                  <span className="font-bold text-[#FF5050] mr-1">*</span>
                  Email Kontak Anda
                </label>
                <input
                  type="email"
                  required
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  placeholder="nama@perusahaan.co.id"
                  className="h-[46px] w-full rounded-[8px] border border-[#C8C8C8] bg-white px-4 font-body text-[14px] text-[#101010] outline-none transition placeholder:text-[#B0B0B0] focus:border-[#1A3E9E] focus:ring-2 focus:ring-[#1A3E9E]/10 md:h-[48px]"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-body text-[13px] font-medium text-[#292929]">
                <span className="font-bold text-[#FF5050] mr-1">*</span>
                Rincian Kendala atau Kebutuhan
              </label>
              <textarea
                required
                rows={4}
                value={ticketDescription}
                onChange={(e) => setTicketDescription(e.target.value)}
                placeholder="Ceritakan kendala yang Anda hadapi secara singkat dan jelas..."
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
                  <span className="block mt-1 font-body text-[12px] text-emerald-700">
                    Nomor Referensi: {ticketFeedback.eventId}
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
                <span>{isSubmittingTicket ? 'MENGIRIMKAN...' : 'KIRIM PERMOHONAN BANTUAN'}</span>
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

          {/* User-friendly info box */}
          <div className="mt-6 rounded-[12px] bg-[#F7F7F7] p-4 border border-[#EAEAEA]">
            <div className="flex items-center gap-2 font-body text-[11px] font-bold uppercase tracking-wider text-[#1A3E9E]">
              <span>ℹ INFORMASI PENANGANAN</span>
            </div>
            <p className="mt-1 font-body text-[12px] leading-[1.6] text-[#717171]">
              Permohonan Anda akan langsung ditindaklanjuti oleh tim teknis kami. Perkembangan dan solusi penanganan akan dikabarkan secara berkala ke kontak resmi perusahaan Anda.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
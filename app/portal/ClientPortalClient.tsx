'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { WHATSAPP_LINK, WHATSAPP_PHONE_DISPLAY } from '@/lib/constants';

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.62 10.79a15.44 15.44 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.5 11.5 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.5 11.5 0 0 0 .57 3.57 1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z" />
    </svg>
  );
}

function RequiredLabel({ children }: { children: React.ReactNode }) {
  return (
    <label className="flex items-start gap-1 font-body text-[14px] font-normal leading-[1.5] tracking-[0.02em] text-[#292929] sm:text-[15px]">
      <span className="font-bold text-[#FF5050]">*</span>
      <span>{children}</span>
    </label>
  );
}

export default function ClientPortalClient() {
  const searchParams = useSearchParams();
  const initialType = searchParams.get('type') === 'quotations' ? 'quotations' : 'tickets';
  const initialId = searchParams.get('id') || '';
  const initialToken = searchParams.get('token') || '';

  const [activeTab, setActiveTab] = useState<'tickets' | 'quotations'>(initialType);
  const [docId, setDocId] = useState(initialId);
  const [token, setToken] = useState(initialToken);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [resultData, setResultData] = useState<any>(null);

  // Decision states
  const [signatureName, setSignatureName] = useState('');
  const [decisionNotes, setDecisionNotes] = useState('');
  const [isSubmittingDecision, setIsSubmittingDecision] = useState(false);
  const [decisionFeedback, setDecisionFeedback] = useState('');

  useEffect(() => {
    if (initialId && initialToken) {
      executeFetch(initialType, initialId, initialToken);
    }
  }, [initialId, initialToken, initialType]);

  const executeFetch = async (type: 'tickets' | 'quotations', idVal: string, tokenVal: string) => {
    setIsLoading(true);
    setError('');
    setResultData(null);
    setDecisionFeedback('');

    try {
      const res = await fetch(
        `/api/portal/data?type=${type}&id=${encodeURIComponent(idVal.trim())}&token=${encodeURIComponent(tokenVal.trim())}`
      );
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Data tidak ditemukan atau token akses tidak valid.');
      }
      setResultData(data.data || data);
    } catch (err: unknown) {
      const errObj = err as Error;
      setError(errObj.message || 'Gagal memverifikasi dokumen ke sistem Marka CRM.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!docId.trim() || !token.trim()) {
      setError('Mohon isi Nomor Dokumen dan Token Akses Anda.');
      return;
    }
    executeFetch(activeTab, docId, token);
  };

  const handleDecision = async (decision: 'accepted' | 'rejected') => {
    if (!signatureName.trim()) {
      setDecisionFeedback('Nama lengkap penandatangan wajib diisi.');
      return;
    }

    setIsSubmittingDecision(true);
    setDecisionFeedback('');

    try {
      const res = await fetch('/api/portal/quotation/decision', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          quotation_id: docId.trim(),
          token: token.trim(),
          decision,
          decision_notes: decisionNotes.trim(),
          signature: signatureName.trim(),
        }),
      });

      const resData = await res.json();
      if (!res.ok || !resData.success) {
        throw new Error(resData.error || 'Gagal memproses keputusan penawaran.');
      }

      setDecisionFeedback(
        decision === 'accepted'
          ? '🎉 Terima kasih! Dokumen penawaran berhasil disetujui (Accepted) di sistem Marka CRM.'
          : 'Catatan penolakan penawaran telah diteruskan ke tim Commercial Arsalynk.'
      );

      executeFetch('quotations', docId, token);
    } catch (err: unknown) {
      const errObj = err as Error;
      setDecisionFeedback(errObj.message || 'Terjadi kesalahan.');
    } finally {
      setIsSubmittingDecision(false);
    }
  };

  return (
    <div className="mx-auto flex w-full max-w-[1408px] items-start justify-between gap-[clamp(36px,4vw,72px)] max-[1024px]:flex-col">
      {/* ================================================================
          LEFT INFO COLUMN — Matches Contact Us Layout
      ================================================================= */}
      <div className="flex w-[40%] shrink-0 flex-col gap-[clamp(20px,2vw,32px)] max-[1024px]:w-full">
        <div>
          <div className="flex items-center gap-2 font-body text-[12px] font-extrabold uppercase leading-[1.3] tracking-[0.08em] text-[#1A3E9E] md:text-[13px] mb-3">
            <span className="h-1.5 w-1.5 shrink-0 bg-[#1A3E9E]" />
            <span>MARKA ERP CLIENT PORTAL</span>
          </div>
          <h2 className="font-heading text-[clamp(30px,2.6vw,44px)] font-medium leading-[1.12] tracking-[-0.03em] text-[#101010]">
            Transparansi Proyek &amp; Dokumen Klien
          </h2>
          <p className="mt-3 font-body text-[14px] leading-[1.65] text-[#555] md:text-[15px]">
            Portal terenkripsi untuk memeriksa status penanganan tiket teknis, membaca rincian dokumen penawaran (*quotation*), serta melakukan persetujuan resmi dari Marka ERP.
          </p>
        </div>

        <div className="flex flex-col gap-4 rounded-[16px] md:gap-5">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 font-body text-[12px] font-extrabold uppercase leading-[1.3] tracking-[0.06em] text-[#1A3E9E] md:text-[13px]">
              <span className="h-1.5 w-1.5 shrink-0 bg-[#1A3E9E]" />
              <span>BANTUAN &amp; SUPPORT</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <a
                href={WHATSAPP_LINK}
                className="flex items-center gap-2.5 font-body text-[14px] leading-[1.5] tracking-[0.02em] text-[#717171] transition hover:text-[#101010] md:text-[15px]"
              >
                <span className="shrink-0 text-[#1A3E9E]"><PhoneIcon /></span>
                <span>{WHATSAPP_PHONE_DISPLAY}</span>
              </a>
              <a
                href="mailto:corporate.arsalynk@gmail.com"
                className="flex items-center gap-2.5 font-body text-[14px] leading-[1.5] tracking-[0.02em] text-[#717171] transition hover:text-[#101010] md:text-[15px]"
              >
                <span className="shrink-0 text-[#1A3E9E]"><MailIcon /></span>
                <span>corporate.arsalynk@gmail.com</span>
              </a>
            </div>
          </div>

          <div className="h-px w-full bg-[#D9D9D9]" />

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 font-body text-[12px] font-extrabold uppercase leading-[1.3] tracking-[0.06em] text-[#1A3E9E] md:text-[13px]">
              <span className="h-1.5 w-1.5 shrink-0 bg-[#1A3E9E]" />
              <span>CARA MENGAKSES TOKEN</span>
            </div>
            <p className="font-body text-[13px] leading-[1.6] text-[#717171]">
              Token akses tercantum secara otomatis pada email konfirmasi penawaran atau email konfirmasi tiket support yang dikirimkan oleh sistem Marka CRM.
            </p>
          </div>
        </div>
      </div>

      {/* ================================================================
          RIGHT INTERACTION COLUMN — Portal Query & Results Card
      ================================================================= */}
      <div className="flex w-[56%] shrink-0 flex-col gap-6 max-[1024px]:w-full">
        {/* TAB TOGGLE */}
        <div className="flex rounded-[12px] border border-[#D9D9D9] bg-white p-1.5 shadow-xs">
          <button
            type="button"
            onClick={() => {
              setActiveTab('tickets');
              setResultData(null);
              setError('');
            }}
            className={`flex-1 rounded-[8px] py-3 text-[13px] font-body font-bold uppercase tracking-[0.04em] transition ${
              activeTab === 'tickets'
                ? 'bg-[#1A3E9E] text-white shadow-sm'
                : 'text-[#717171] hover:text-[#101010]'
            }`}
          >
            🎫 Status Tiket Support
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveTab('quotations');
              setResultData(null);
              setError('');
            }}
            className={`flex-1 rounded-[8px] py-3 text-[13px] font-body font-bold uppercase tracking-[0.04em] transition ${
              activeTab === 'quotations'
                ? 'bg-[#1A3E9E] text-white shadow-sm'
                : 'text-[#717171] hover:text-[#101010]'
            }`}
          >
            📑 Persetujuan Penawaran
          </button>
        </div>

        {/* SEARCH FORM */}
        <div className="rounded-[16px] border border-[#D9D9D9] bg-white p-6 sm:p-8 shadow-sm">
          <form onSubmit={handleSearchSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <RequiredLabel>
                  {activeTab === 'tickets' ? 'Nomor / ID Tiket' : 'Nomor Quotation'}
                </RequiredLabel>
                <input
                  type="text"
                  required
                  value={docId}
                  onChange={(e) => setDocId(e.target.value)}
                  placeholder={activeTab === 'tickets' ? 'Contoh: TKT-10829' : 'Contoh: QUO-2026-001'}
                  className="h-[46px] w-full rounded-[8px] border border-[#C8C8C8] bg-transparent px-4 font-body text-[14px] text-[#101010] outline-none transition placeholder:text-[#C8C8C8] focus:border-[#1A3E9E] focus:ring-2 focus:ring-[#1A3E9E]/10 md:h-[48px]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <RequiredLabel>Token Akses Dokumen</RequiredLabel>
                <input
                  type="text"
                  required
                  value={token}
                  onChange={(e) => setToken(e.target.value)}
                  placeholder="Token rahasia dari email"
                  className="h-[46px] w-full rounded-[8px] border border-[#C8C8C8] bg-transparent px-4 font-body text-[14px] text-[#101010] outline-none transition placeholder:text-[#C8C8C8] focus:border-[#1A3E9E] focus:ring-2 focus:ring-[#1A3E9E]/10 md:h-[48px]"
                />
              </div>
            </div>

            {error && (
              <div className="rounded-[8px] border border-[#FF5050]/30 bg-[#FF5050]/10 p-3 font-body text-[13px] text-[#FF5050]">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="mt-2 inline-flex h-[48px] w-full sm:w-auto self-start items-center justify-center gap-2 rounded-full bg-[#1A3E9E] px-8 font-body text-[13px] font-bold tracking-[0.04em] text-white transition hover:bg-[#14347F] disabled:opacity-50"
            >
              <span>{isLoading ? 'MEMERIKSA DATA...' : 'PERIKSA STATUS DOKUMEN'}</span>
              <svg width="6" height="10" viewBox="0 0 8 14" fill="none" aria-hidden="true">
                <path d="M1 1L7 7L1 13" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </form>
        </div>

        {/* RESULTS CARD */}
        {resultData && (
          <div className="rounded-[16px] border border-[#D9D9D9] bg-white p-6 sm:p-8 shadow-sm animate-in fade-in duration-300">
            <div className="flex flex-wrap items-center justify-between border-b border-[#EAEAEA] pb-4 gap-3">
              <div>
                <span className="font-body text-[11px] font-bold uppercase tracking-[0.08em] text-[#717171]">
                  {activeTab === 'tickets' ? 'TIKET TERDAFTAR MARKA ERP' : 'DOKUMEN PENAWARAN RESMI'}
                </span>
                <h3 className="font-heading text-[22px] font-medium text-[#101010] mt-0.5">
                  {resultData.code || resultData.ticket_number || resultData.id || docId}
                </h3>
              </div>

              <span className="rounded-full bg-[#EEF2FF] text-[#1A3E9E] border border-[#1A3E9E] px-4 py-1.5 font-body text-[12px] font-bold uppercase">
                {resultData.status || 'Aktif'}
              </span>
            </div>

            <div className="mt-5 flex flex-col gap-3 font-body text-[14px] text-[#424242]">
              {resultData.title && (
                <div>
                  <span className="text-[#888]">Judul: </span>
                  <span className="font-semibold text-[#101010]">{resultData.title}</span>
                </div>
              )}
              {resultData.subject && (
                <div>
                  <span className="text-[#888]">Subjek: </span>
                  <span className="font-semibold text-[#101010]">{resultData.subject}</span>
                </div>
              )}
              {resultData.category && (
                <div>
                  <span className="text-[#888]">Kategori: </span>
                  <span className="text-[#101010]">{resultData.category}</span>
                </div>
              )}
              {resultData.total_amount && (
                <div className="mt-2 rounded-[12px] bg-[#EEF2FF]/60 p-4 border border-[#1A3E9E]/20">
                  <span className="text-[12px] font-bold uppercase tracking-wider text-[#1A3E9E]">Total Investasi / Nilai Penawaran</span>
                  <div className="font-heading text-[26px] font-medium text-[#1A3E9E] mt-1">
                    Rp {Number(resultData.total_amount).toLocaleString('id-ID')}
                  </div>
                </div>
              )}
              {resultData.valid_until && (
                <div>
                  <span className="text-[#888]">Masa Berlaku: </span>
                  <span className="text-[#101010]">{resultData.valid_until}</span>
                </div>
              )}
              {resultData.description && (
                <div className="mt-3 rounded-[8px] bg-[#F7F7F7] p-4 text-[13px] leading-relaxed text-[#555] border border-[#EAEAEA]">
                  <div className="font-bold text-[#101010] mb-1">Rincian &amp; Ruang Lingkup:</div>
                  {resultData.description}
                </div>
              )}
            </div>

            {/* QUOTATION APPROVAL SECTION */}
            {activeTab === 'quotations' && resultData.status?.toLowerCase() === 'sent' && (
              <div className="mt-6 border-t border-[#EAEAEA] pt-6">
                <h4 className="font-heading text-[18px] font-medium text-[#101010] mb-1">
                  Persetujuan Penawaran Klien
                </h4>
                <p className="font-body text-[13px] text-[#717171] mb-4">
                  Dengan menyetujui, dokumen ini akan ditandatangani secara digital dan diteruskan ke tim Commercial Arsalynk.
                </p>

                <div className="flex flex-col gap-3.5 max-w-lg">
                  <div className="flex flex-col gap-1.5">
                    <RequiredLabel>Nama Lengkap Penandatangan</RequiredLabel>
                    <input
                      type="text"
                      required
                      value={signatureName}
                      onChange={(e) => setSignatureName(e.target.value)}
                      placeholder="Contoh: Budi Santoso (Direktur)"
                      className="h-[46px] w-full rounded-[8px] border border-[#C8C8C8] bg-transparent px-4 font-body text-[14px] text-[#101010] outline-none transition placeholder:text-[#C8C8C8] focus:border-[#1A3E9E]"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-body text-[14px] text-[#292929]">Catatan Tambahan (Opsional)</label>
                    <textarea
                      rows={2}
                      value={decisionNotes}
                      onChange={(e) => setDecisionNotes(e.target.value)}
                      placeholder="Catatan penagihan atau jadwal kick-off..."
                      className="w-full rounded-[8px] border border-[#C8C8C8] bg-transparent p-3 font-body text-[14px] text-[#101010] outline-none transition placeholder:text-[#C8C8C8] focus:border-[#1A3E9E]"
                    />
                  </div>

                  <div className="mt-2 flex flex-wrap gap-3">
                    <button
                      type="button"
                      disabled={isSubmittingDecision}
                      onClick={() => handleDecision('accepted')}
                      className="inline-flex h-[46px] flex-1 items-center justify-center gap-2 rounded-full bg-[#1A3E9E] px-6 font-body text-[13px] font-bold tracking-[0.04em] text-white transition hover:bg-[#14347F] disabled:opacity-50"
                    >
                      SETUJUI PENAWARAN (ACCEPT)
                    </button>
                    <button
                      type="button"
                      disabled={isSubmittingDecision}
                      onClick={() => handleDecision('rejected')}
                      className="inline-flex h-[46px] items-center justify-center rounded-full border border-[#FF5050] px-6 font-body text-[13px] font-bold tracking-[0.04em] text-[#FF5050] transition hover:bg-[#FF5050]/10 disabled:opacity-50"
                    >
                      TOLAK
                    </button>
                  </div>

                  {decisionFeedback && (
                    <div className="mt-2 rounded-[8px] bg-[#EEF2FF] p-3 text-[13px] font-body text-[#1A3E9E] border border-[#1A3E9E]/20">
                      {decisionFeedback}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

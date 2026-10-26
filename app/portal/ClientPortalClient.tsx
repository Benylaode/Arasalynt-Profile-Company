'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

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

  // Quotation decision states
  const [signatureName, setSignatureName] = useState('');
  const [decisionNotes, setDecisionNotes] = useState('');
  const [isSubmittingDecision, setIsSubmittingDecision] = useState(false);
  const [decisionFeedback, setDecisionFeedback] = useState('');

  // Auto fetch if URL params exist
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
      setError(errObj.message || 'Gagal mengambil data dari Marka CRM.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!docId.trim() || !token.trim()) {
      setError('Mohon masukkan ID Dokumen dan Token Akses.');
      return;
    }
    executeFetch(activeTab, docId, token);
  };

  const handleDecision = async (decision: 'accepted' | 'rejected') => {
    if (!signatureName.trim()) {
      setDecisionFeedback('Nama penandatangan sah wajib diisi untuk konfirmasi.');
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
          ? 'Persetujuan Anda telah berhasil dicatat dan diverifikasi di sistem Marka CRM.'
          : 'Catatan penolakan penawaran telah kami teruskan ke tim Commercial Arsalynk.'
      );

      executeFetch('quotations', docId, token);
    } catch (err: unknown) {
      const errObj = err as Error;
      setDecisionFeedback(errObj.message || 'Terjadi kendala teknis saat memproses keputusan.');
    } finally {
      setIsSubmittingDecision(false);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Segmented Tab Switcher */}
      <div className="flex rounded-full border border-[#D9D9D9] bg-[#EFEFEF] p-1.5 shadow-inner">
        <button
          type="button"
          onClick={() => {
            setActiveTab('tickets');
            setResultData(null);
            setError('');
          }}
          className={`flex-1 rounded-full py-2.5 sm:py-3 text-[12px] sm:text-[13px] font-body font-bold uppercase tracking-[0.04em] transition ${
            activeTab === 'tickets'
              ? 'bg-[#1A3E9E] text-white shadow-md'
              : 'text-[#505050] hover:text-[#101010]'
          }`}
        >
          Status Tiket Support
        </button>
        <button
          type="button"
          onClick={() => {
            setActiveTab('quotations');
            setResultData(null);
            setError('');
          }}
          className={`flex-1 rounded-full py-2.5 sm:py-3 text-[12px] sm:text-[13px] font-body font-bold uppercase tracking-[0.04em] transition ${
            activeTab === 'quotations'
              ? 'bg-[#1A3E9E] text-white shadow-md'
              : 'text-[#505050] hover:text-[#101010]'
          }`}
        >
          Persetujuan Quotation
        </button>
      </div>

      {/* Query Card */}
      <div className="rounded-[20px] border border-[#D9D9D9] bg-white p-6 sm:p-8 shadow-sm">
        <div className="mb-6 flex flex-col gap-1">
          <div className="flex items-center gap-2 font-body text-[11px] font-extrabold uppercase tracking-[0.06em] text-[#1A3E9E]">
            <span className="h-1.5 w-1.5 bg-[#1A3E9E]" />
            <span>{activeTab === 'tickets' ? 'VERIFIKASI TIKET' : 'VERIFIKASI PENAWARAN'}</span>
          </div>
          <h3 className="font-heading text-[20px] font-medium text-[#101010]">
            {activeTab === 'tickets'
              ? 'Pencarian Status Tiket Teknis'
              : 'Verifikasi & Keputusan Dokumen Quotation'}
          </h3>
          <p className="font-body text-[13px] text-[#717171]">
            Masukkan ID dokumen beserta token otentikasi resmi yang tertera pada email atau konfirmasi pesan kami.
          </p>
        </div>

        <form onSubmit={handleSearchSubmit} className="flex flex-col gap-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label className="font-body text-[13px] font-medium text-[#292929]">
                <span className="font-bold text-[#FF5050] mr-1">*</span>
                {activeTab === 'tickets' ? 'Nomor / ID Tiket' : 'Nomor Quotation'}
              </label>
              <input
                type="text"
                required
                value={docId}
                onChange={(e) => setDocId(e.target.value)}
                placeholder={activeTab === 'tickets' ? 'Contoh: TKT-10829' : 'Contoh: QUO-2026-001'}
                className="h-[46px] w-full rounded-[8px] border border-[#C8C8C8] bg-white px-4 font-body text-[14px] text-[#101010] outline-none transition placeholder:text-[#B0B0B0] focus:border-[#1A3E9E] focus:ring-2 focus:ring-[#1A3E9E]/10 md:h-[48px]"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-body text-[13px] font-medium text-[#292929]">
                <span className="font-bold text-[#FF5050] mr-1">*</span>
                Token Akses Klien
              </label>
              <input
                type="text"
                required
                value={token}
                onChange={(e) => setToken(e.target.value)}
                placeholder="Token rahasia (contoh: demo)"
                className="h-[46px] w-full rounded-[8px] border border-[#C8C8C8] bg-white px-4 font-body text-[14px] text-[#101010] outline-none transition placeholder:text-[#B0B0B0] focus:border-[#1A3E9E] focus:ring-2 focus:ring-[#1A3E9E]/10 md:h-[48px]"
              />
            </div>
          </div>

          {error && (
            <div className="rounded-[8px] border border-red-200 bg-red-50 p-3.5 font-body text-[13px] text-red-700">
              {error}
            </div>
          )}

          <div className="pt-2">
            <button
              type="submit"
              disabled={isLoading}
              className="inline-flex h-[48px] items-center justify-center gap-2 rounded-full bg-[#1A3E9E] px-8 font-body text-[13px] font-bold uppercase tracking-[0.04em] text-white transition hover:bg-[#14347F] disabled:cursor-wait disabled:opacity-60 md:h-[50px]"
            >
              <span>{isLoading ? 'MEMERIKSA MARKA ERP...' : 'PERIKSA STATUS DOKUMEN'}</span>
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
      </div>

      {/* Results Section */}
      {resultData && (
        <div className="rounded-[20px] border border-[#D9D9D9] bg-white p-6 sm:p-8 shadow-sm">
          <div className="flex flex-wrap items-center justify-between border-b border-[#EAEAEA] pb-4 gap-3">
            <div>
              <span className="font-body text-[11px] font-extrabold uppercase tracking-[0.06em] text-[#717171]">
                {activeTab === 'tickets' ? 'DATA TIKET TERVERIFIKASI' : 'DOKUMEN QUOTATION TERVERIFIKASI'}
              </span>
              <h4 className="font-heading text-[22px] font-semibold text-[#101010] mt-0.5">
                {resultData.ticket_number || resultData.quotation_number || resultData.code || docId}
              </h4>
            </div>

            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#1A3E9E]/10 px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.04em] text-[#1A3E9E]">
              <span className="h-2 w-2 rounded-full bg-[#1A3E9E]" />
              <span>{resultData.status || 'Active'}</span>
            </div>
          </div>

          {/* Ticket Details */}
          {activeTab === 'tickets' && (
            <div className="mt-5 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-[10px] bg-[#F7F7F7] p-3.5 border border-[#EBEBEB]">
                  <span className="font-body text-[11px] uppercase tracking-wider text-[#717171] block">
                    Subjek / Judul Kendala
                  </span>
                  <p className="font-body text-[14px] font-semibold text-[#101010] mt-0.5">
                    {resultData.subject || resultData.title || '-'}
                  </p>
                </div>

                <div className="rounded-[10px] bg-[#F7F7F7] p-3.5 border border-[#EBEBEB]">
                  <span className="font-body text-[11px] uppercase tracking-wider text-[#717171] block">
                    Tingkat Prioritas
                  </span>
                  <p className="font-body text-[14px] font-semibold text-[#101010] mt-0.5 capitalize">
                    {resultData.priority || 'Normal'}
                  </p>
                </div>
              </div>

              {resultData.description && (
                <div className="rounded-[10px] bg-[#F7F7F7] p-4 border border-[#EBEBEB]">
                  <span className="font-body text-[11px] uppercase tracking-wider text-[#717171] block mb-1">
                    Deskripsi Masalah
                  </span>
                  <p className="font-body text-[13px] leading-[1.6] text-[#333333] whitespace-pre-line">
                    {resultData.description}
                  </p>
                </div>
              )}

              {resultData.resolution && (
                <div className="rounded-[10px] bg-emerald-50 p-4 border border-emerald-200">
                  <span className="font-body text-[11px] uppercase tracking-wider text-emerald-800 font-bold block mb-1">
                    Catatan Solusi &amp; Penanganan
                  </span>
                  <p className="font-body text-[13px] leading-[1.6] text-emerald-950 whitespace-pre-line">
                    {resultData.resolution}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Quotation Details */}
          {activeTab === 'quotations' && (
            <div className="mt-5 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div className="rounded-[10px] bg-[#F7F7F7] p-3.5 border border-[#EBEBEB]">
                  <span className="font-body text-[11px] uppercase tracking-wider text-[#717171] block">
                    Perusahaan Klien
                  </span>
                  <p className="font-body text-[14px] font-semibold text-[#101010] mt-0.5">
                    {resultData.customer_name || resultData.client_name || '-'}
                  </p>
                </div>

                <div className="rounded-[10px] bg-[#F7F7F7] p-3.5 border border-[#EBEBEB]">
                  <span className="font-body text-[11px] uppercase tracking-wider text-[#717171] block">
                    Total Nilai Penawaran
                  </span>
                  <p className="font-body text-[15px] font-bold text-[#1A3E9E] mt-0.5">
                    {typeof resultData.total_amount === 'number'
                      ? `Rp ${resultData.total_amount.toLocaleString('id-ID')}`
                      : resultData.total_amount || '-'}
                  </p>
                </div>

                <div className="rounded-[10px] bg-[#F7F7F7] p-3.5 border border-[#EBEBEB]">
                  <span className="font-body text-[11px] uppercase tracking-wider text-[#717171] block">
                    Masa Berlaku
                  </span>
                  <p className="font-body text-[14px] font-semibold text-[#101010] mt-0.5">
                    {resultData.valid_until || resultData.expired_at || '-'}
                  </p>
                </div>
              </div>

              {/* Items Table if available */}
              {Array.isArray(resultData.items) && resultData.items.length > 0 && (
                <div className="overflow-hidden rounded-[10px] border border-[#EBEBEB]">
                  <table className="w-full text-left font-body text-[13px]">
                    <thead className="bg-[#F7F7F7] text-[11px] font-bold uppercase tracking-wider text-[#717171]">
                      <tr>
                        <th className="py-2.5 px-4">Deskripsi Layanan / Item</th>
                        <th className="py-2.5 px-4 text-center">Qty</th>
                        <th className="py-2.5 px-4 text-right">Subtotal</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#EBEBEB]">
                      {resultData.items.map((item: any, idx: number) => (
                        <tr key={idx} className="hover:bg-gray-50/50">
                          <td className="py-2.5 px-4 font-medium text-[#101010]">{item.name || item.description}</td>
                          <td className="py-2.5 px-4 text-center text-[#717171]">{item.qty || item.quantity || 1}</td>
                          <td className="py-2.5 px-4 text-right font-medium text-[#101010]">
                            {typeof item.subtotal === 'number'
                              ? `Rp ${item.subtotal.toLocaleString('id-ID')}`
                              : item.subtotal || '-'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Decision Action Box */}
              <div className="rounded-[16px] border border-[#D9D9D9] bg-[#FBFBFB] p-5">
                <div className="mb-3">
                  <h5 className="font-heading text-[16px] font-semibold text-[#101010]">
                    Persetujuan Dokumen Penawaran Resmi
                  </h5>
                  <p className="font-body text-[12px] text-[#717171]">
                    Silakan cantumkan nama penandatangan yang berwenang untuk menyetujui atau memberikan catatan revisi pada penawaran ini.
                  </p>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="font-body text-[12px] font-medium text-[#292929] block mb-1">
                      Nama Lengkap Penandatangan Sah *
                    </label>
                    <input
                      type="text"
                      value={signatureName}
                      onChange={(e) => setSignatureName(e.target.value)}
                      placeholder="Contoh: Budi Santoso (Direktur Operasional)"
                      className="h-[44px] w-full rounded-[8px] border border-[#C8C8C8] bg-white px-3.5 font-body text-[13px] text-[#101010] outline-none transition focus:border-[#1A3E9E] focus:ring-1 focus:ring-[#1A3E9E]"
                    />
                  </div>

                  <div>
                    <label className="font-body text-[12px] font-medium text-[#292929] block mb-1">
                      Catatan / Pesan Khusus (Opsional)
                    </label>
                    <textarea
                      rows={2}
                      value={decisionNotes}
                      onChange={(e) => setDecisionNotes(e.target.value)}
                      placeholder="Masukkan catatan spesifikasi, jadwal mulai, atau pertanyaan..."
                      className="w-full resize-none rounded-[8px] border border-[#C8C8C8] bg-white p-3 font-body text-[13px] text-[#101010] outline-none transition focus:border-[#1A3E9E] focus:ring-1 focus:ring-[#1A3E9E]"
                    />
                  </div>

                  {decisionFeedback && (
                    <div className="rounded-[8px] border border-blue-200 bg-blue-50 p-3 font-body text-[13px] text-blue-900">
                      {decisionFeedback}
                    </div>
                  )}

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      type="button"
                      disabled={isSubmittingDecision}
                      onClick={() => handleDecision('accepted')}
                      className="inline-flex h-[44px] items-center justify-center gap-2 rounded-full bg-[#1A3E9E] px-6 font-body text-[12px] font-bold uppercase tracking-[0.04em] text-white transition hover:bg-[#14347F] disabled:opacity-50"
                    >
                      ✓ SETUJUI PENAWARAN (ACCEPT)
                    </button>
                    <button
                      type="button"
                      disabled={isSubmittingDecision}
                      onClick={() => handleDecision('rejected')}
                      className="inline-flex h-[44px] items-center justify-center gap-2 rounded-full border border-[#C8C8C8] bg-white px-6 font-body text-[12px] font-bold uppercase tracking-[0.04em] text-[#717171] transition hover:bg-gray-100 hover:text-[#101010] disabled:opacity-50"
                    >
                      ✕ MINTA REVISI / TOLAK
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

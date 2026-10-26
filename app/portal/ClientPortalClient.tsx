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
      setError('Mohon lengkapi ID Dokumen dan Token Akses.');
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
          ? '🎉 Terima kasih! Penawaran berhasil disetujui (Accepted) di sistem Marka CRM.'
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
    <div className="space-y-6">
      {/* Tab Switcher */}
      <div className="flex rounded-xl border border-white/10 bg-[#12141D] p-1.5">
        <button
          type="button"
          onClick={() => {
            setActiveTab('tickets');
            setResultData(null);
            setError('');
          }}
          className={`flex-1 rounded-lg py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider transition ${activeTab === 'tickets'
              ? 'bg-[#1A3E9E] text-white shadow-lg shadow-[#1A3E9E]/30'
              : 'text-white/60 hover:text-white'
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
          className={`flex-1 rounded-lg py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider transition ${activeTab === 'quotations'
              ? 'bg-[#1A3E9E] text-white shadow-lg shadow-[#1A3E9E]/30'
              : 'text-white/60 hover:text-white'
            }`}
        >
          📑 Persetujuan Quotation / Penawaran
        </button>
      </div>

      {/* Query Form */}
      <div className="rounded-2xl border border-white/10 bg-[#12141D]/90 p-6 backdrop-blur-md">
        <h2 className="text-base font-semibold text-white mb-4">
          {activeTab === 'tickets' ? 'Pencarian Tiket Support' : 'Verifikasi Akses Dokumen Penawaran'}
        </h2>

        <form onSubmit={handleSearchSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-medium text-white/70 mb-1.5">
                {activeTab === 'tickets' ? 'Nomor / ID Tiket' : 'Nomor Quotation'}
              </label>
              <input
                type="text"
                required
                value={docId}
                onChange={(e) => setDocId(e.target.value)}
                placeholder={activeTab === 'tickets' ? 'Contoh: TKT-10829' : 'Contoh: QUO-2026-001'}
                className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/30 focus:border-[#E6FF2A] focus:outline-none focus:ring-1 focus:ring-[#E6FF2A]"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-white/70 mb-1.5">
                Token Akses Klien
              </label>
              <input
                type="text"
                required
                value={token}
                onChange={(e) => setToken(e.target.value)}
                placeholder="Token rahasia dari email / pesan resmi"
                className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/30 focus:border-[#E6FF2A] focus:outline-none focus:ring-1 focus:ring-[#E6FF2A]"
              />
            </div>
          </div>

          {error && (
            <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-xs text-red-300">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#E6FF2A] px-6 py-2.5 font-body text-xs font-bold uppercase tracking-wider text-[#101010] transition hover:bg-white disabled:opacity-50"
          >
            {isLoading ? 'Memeriksa ke Marka ERP...' : 'Periksa Status Dokumen'}
          </button>
        </form>
      </div>

      {/* Results View */}
      {resultData && (
        <div className="rounded-2xl border border-white/15 bg-[#141724] p-6 shadow-xl animate-in fade-in duration-200">
          <div className="flex flex-wrap items-center justify-between border-b border-white/10 pb-4 gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-white/50">
                {activeTab === 'tickets' ? 'TIKET RESMI MARKA' : 'DOKUMEN PENAWARAN'}
              </span>
              <div className="font-heading text-xl font-semibold text-white mt-0.5">
                {resultData.code || resultData.ticket_number || resultData.id || docId}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-[#1A3E9E] px-4 py-1.5 font-mono text-xs font-semibold uppercase text-white">
                Status: {resultData.status || 'Aktif'}
              </span>
            </div>
          </div>

          <div className="mt-5 space-y-3 text-sm text-white/80">
            {resultData.title && (
              <div>
                <span className="text-white/50">Judul: </span>
                <span className="font-medium text-white">{resultData.title}</span>
              </div>
            )}
            {resultData.subject && (
              <div>
                <span className="text-white/50">Subjek: </span>
                <span className="font-medium text-white">{resultData.subject}</span>
              </div>
            )}
            {resultData.category && (
              <div>
                <span className="text-white/50">Kategori: </span>
                <span>{resultData.category}</span>
              </div>
            )}
            {resultData.total_amount && (
              <div>
                <span className="text-white/50">Total Nilai Penawaran: </span>
                <span className="font-heading text-lg font-bold text-[#E6FF2A]">
                  Rp {Number(resultData.total_amount).toLocaleString('id-ID')}
                </span>
              </div>
            )}
            {resultData.valid_until && (
              <div>
                <span className="text-white/50">Berlaku Sampai: </span>
                <span>{resultData.valid_until}</span>
              </div>
            )}
            {resultData.description && (
              <div className="mt-4 rounded-xl border border-white/10 bg-black/40 p-4 text-xs leading-relaxed text-white/70">
                <div className="font-semibold text-white/90 mb-1">Deskripsi &amp; Alur Pekerjaan:</div>
                {resultData.description}
              </div>
            )}
          </div>

          {/* Quotation Sign Action */}
          {activeTab === 'quotations' && resultData.status?.toLowerCase() === 'sent' && (
            <div className="mt-6 border-t border-white/10 pt-6">
              <h3 className="font-heading text-base font-semibold text-white mb-2">
                Persetujuan Penawaran Klien
              </h3>
              <p className="text-xs text-white/60 mb-4">
                Dengan menyetujui dokumen ini, Anda menyatakan persetujuan atas ruang lingkup pekerjaan dan ketentuan komersial yang tercantum.
              </p>

              <div className="space-y-4 max-w-xl">
                <div>
                  <label className="block text-xs font-medium text-white/70 mb-1">
                    Nama Lengkap Penandatangan *
                  </label>
                  <input
                    type="text"
                    required
                    value={signatureName}
                    onChange={(e) => setSignatureName(e.target.value)}
                    placeholder="Contoh: Budi Santoso (Direktur Operasional)"
                    className="w-full rounded-lg border border-white/15 bg-white/5 px-3.5 py-2 text-sm text-white placeholder-white/30 focus:border-[#E6FF2A] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/70 mb-1">
                    Catatan Tambahan (Opsional)
                  </label>
                  <textarea
                    rows={2}
                    value={decisionNotes}
                    onChange={(e) => setDecisionNotes(e.target.value)}
                    placeholder="Catatan termin atau instruksi penagihan..."
                    className="w-full rounded-lg border border-white/15 bg-white/5 px-3.5 py-2 text-sm text-white placeholder-white/30 focus:border-[#E6FF2A] focus:outline-none"
                  />
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    disabled={isSubmittingDecision}
                    onClick={() => handleDecision('accepted')}
                    className="flex-1 rounded-lg bg-emerald-600 py-2.5 px-4 font-body text-xs font-bold uppercase tracking-wider text-white transition hover:bg-emerald-500 disabled:opacity-50"
                  >
                    Setujui Penawaran (Accept)
                  </button>
                  <button
                    type="button"
                    disabled={isSubmittingDecision}
                    onClick={() => handleDecision('rejected')}
                    className="rounded-lg border border-red-500/50 bg-red-500/10 px-5 py-2.5 font-body text-xs font-semibold text-red-300 transition hover:bg-red-500/20 disabled:opacity-50"
                  >
                    Tolak
                  </button>
                </div>

                {decisionFeedback && (
                  <div className="mt-3 rounded-lg border border-[#E6FF2A]/30 bg-[#E6FF2A]/10 p-3 text-xs text-[#E6FF2A]">
                    {decisionFeedback}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

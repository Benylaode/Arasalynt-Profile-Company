'use client';

import React, { useState, useEffect } from 'react';

interface CrmPublicPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultType?: 'tickets' | 'quotations';
}

export default function CrmPublicPortalModal({
  isOpen,
  onClose,
  defaultType = 'tickets',
}: CrmPublicPortalModalProps) {
  const [activeTab, setActiveTab] = useState<'tickets' | 'quotations'>(defaultType);
  const [docId, setDocId] = useState('');
  const [token, setToken] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [resultData, setResultData] = useState<any>(null);

  // Decision state for quotations
  const [decisionNotes, setDecisionNotes] = useState('');
  const [signatureName, setSignatureName] = useState('');
  const [isSubmittingDecision, setIsSubmittingDecision] = useState(false);
  const [decisionFeedback, setDecisionFeedback] = useState('');

  useEffect(() => {
    setActiveTab(defaultType);
  }, [defaultType, isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleFetch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!docId.trim() || !token.trim()) {
      setError('Mohon isi Nomor Dokumen / ID dan Token Akses.');
      return;
    }

    setIsLoading(true);
    setError('');
    setResultData(null);
    setDecisionFeedback('');

    try {
      const res = await fetch(
        `/api/portal/data?type=${activeTab}&id=${encodeURIComponent(docId.trim())}&token=${encodeURIComponent(token.trim())}`
      );
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Data tidak ditemukan atau token tidak valid.');
      }
      setResultData(data.data || data);
    } catch (err: unknown) {
      const errObj = err as Error;
      setError(errObj.message || 'Gagal mengambil data dari sistem Marka CRM.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDecision = async (decision: 'accepted' | 'rejected') => {
    if (!signatureName.trim()) {
      setDecisionFeedback('Mohon isi nama lengkap penandatangan.');
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
          ? '🎉 Terima kasih! Penawaran telah berhasil disetujui (Accepted).'
          : 'Catatan penolakan penawaran telah diteruskan ke tim Commercial Arsalynk.'
      );

      // Re-fetch updated data
      const refreshRes = await fetch(
        `/api/portal/data?type=quotations&id=${encodeURIComponent(docId.trim())}&token=${encodeURIComponent(token.trim())}`
      );
      if (refreshRes.ok) {
        const refreshData = await refreshRes.json();
        setResultData(refreshData.data || refreshData);
      }
    } catch (err: unknown) {
      const errObj = err as Error;
      setDecisionFeedback(errObj.message || 'Terjadi kesalahan saat memproses keputusan.');
    } finally {
      setIsSubmittingDecision(false);
    }
  };

  const handleReset = () => {
    setDocId('');
    setToken('');
    setResultData(null);
    setError('');
    setDecisionFeedback('');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="portal-modal-title"
      className="fixed inset-0 z-[120] flex items-center justify-center overflow-y-auto bg-black/60 p-4 backdrop-blur-sm sm:p-6"
    >
      <div
        className="relative w-full max-w-[620px] rounded-2xl border border-white/10 bg-[#0E1015] p-6 text-white shadow-2xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Tutup Portal Modal"
          className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white/70 transition-colors hover:bg-white/15 hover:text-white"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Header */}
        <div className="mb-6 pr-8">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#E6FF2A]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#E6FF2A]">
              Arsalynk Client Portal
            </span>
          </div>
          <h2 id="portal-modal-title" className="mt-1 font-heading text-xl font-semibold text-white sm:text-2xl">
            Lacak Status Tiket &amp; Penawaran CRM
          </h2>
          <p className="mt-1 text-xs text-white/60 sm:text-sm">
            Masukkan ID dokumen dan token akses Anda untuk memeriksa status secara langsung dari Marka ERP.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="mb-6 flex rounded-lg bg-white/5 p-1 border border-white/10">
          <button
            type="button"
            onClick={() => {
              setActiveTab('tickets');
              handleReset();
            }}
            className={`flex-1 rounded-md py-2 text-xs font-semibold uppercase tracking-wider transition-all sm:text-sm ${
              activeTab === 'tickets'
                ? 'bg-[#1A3E9E] text-white shadow'
                : 'text-white/60 hover:text-white'
            }`}
          >
            🎫 Support Ticket
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveTab('quotations');
              handleReset();
            }}
            className={`flex-1 rounded-md py-2 text-xs font-semibold uppercase tracking-wider transition-all sm:text-sm ${
              activeTab === 'quotations'
                ? 'bg-[#1A3E9E] text-white shadow'
                : 'text-white/60 hover:text-white'
            }`}
          >
            📑 Quotation / Proposal
          </button>
        </div>

        {/* Query Form */}
        <form onSubmit={handleFetch} className="space-y-4">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-medium text-white/70 mb-1">
                {activeTab === 'tickets' ? 'Nomor / ID Tiket' : 'Nomor / ID Penawaran'}
              </label>
              <input
                type="text"
                required
                value={docId}
                onChange={(e) => setDocId(e.target.value)}
                placeholder={activeTab === 'tickets' ? 'Contoh: TKT-10293' : 'Contoh: QUO-2026-001'}
                className="w-full rounded-lg border border-white/15 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:border-[#E6FF2A] focus:outline-none focus:ring-1 focus:ring-[#E6FF2A]"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-white/70 mb-1">
                Token Akses Klien
              </label>
              <input
                type="text"
                required
                value={token}
                onChange={(e) => setToken(e.target.value)}
                placeholder="Token rahasia dari email/CS"
                className="w-full rounded-lg border border-white/15 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:border-[#E6FF2A] focus:outline-none focus:ring-1 focus:ring-[#E6FF2A]"
              />
            </div>
          </div>

          {error && (
            <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-xs text-red-300">
              {error}
            </div>
          )}

          <div className="flex gap-2">
            <button
              type="submit"
              disabled={isLoading}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#E6FF2A] py-2.5 px-4 font-body text-xs font-bold uppercase tracking-wider text-[#101010] transition hover:bg-[#FBFCDC] disabled:opacity-50"
            >
              {isLoading ? 'Memeriksa ke Marka CRM...' : 'Periksa Status Sekarang'}
            </button>
            {resultData && (
              <button
                type="button"
                onClick={handleReset}
                className="rounded-lg border border-white/15 px-3 py-2.5 text-xs text-white/70 hover:bg-white/10"
              >
                Reset
              </button>
            )}
          </div>
        </form>

        {/* Results Panel */}
        {resultData && (
          <div className="mt-6 rounded-xl border border-white/15 bg-white/5 p-4 text-xs sm:text-sm">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div>
                <span className="font-mono text-white/50 text-[11px]">DOKUMEN DITEMUKAN</span>
                <div className="font-semibold text-white text-sm sm:text-base">
                  {resultData.code || resultData.ticket_number || resultData.id || docId}
                </div>
              </div>
              <span className="rounded-full bg-[#1A3E9E] px-3 py-1 font-mono text-xs font-semibold text-white uppercase">
                {resultData.status || 'Aktif'}
              </span>
            </div>

            <div className="mt-3 space-y-2 text-white/80">
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
                  <span className="text-white/50">Total Nilai: </span>
                  <span className="font-semibold text-[#E6FF2A]">
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
                <div className="mt-2 rounded-lg bg-black/30 p-2.5 text-white/70">
                  {resultData.description}
                </div>
              )}
            </div>

            {/* Quotation Decision Section if pending */}
            {activeTab === 'quotations' && resultData.status?.toLowerCase() === 'sent' && (
              <div className="mt-4 border-t border-white/10 pt-4">
                <h4 className="font-semibold text-white mb-2">Keputusan Penawaran</h4>
                <div className="space-y-3">
                  <input
                    type="text"
                    value={signatureName}
                    onChange={(e) => setSignatureName(e.target.value)}
                    placeholder="Nama Lengkap Penandatangan *"
                    className="w-full rounded-md border border-white/15 bg-white/5 px-3 py-2 text-xs text-white placeholder-white/30"
                  />
                  <textarea
                    rows={2}
                    value={decisionNotes}
                    onChange={(e) => setDecisionNotes(e.target.value)}
                    placeholder="Catatan tambahan (opsional)"
                    className="w-full rounded-md border border-white/15 bg-white/5 px-3 py-2 text-xs text-white placeholder-white/30"
                  />
                  <div className="flex gap-2">
                    <button
                      type="button"
                      disabled={isSubmittingDecision}
                      onClick={() => handleDecision('accepted')}
                      className="flex-1 rounded-md bg-emerald-600 py-2 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-emerald-500 disabled:opacity-50"
                    >
                      Setujui Penawaran (Accept)
                    </button>
                    <button
                      type="button"
                      disabled={isSubmittingDecision}
                      onClick={() => handleDecision('rejected')}
                      className="rounded-md border border-red-500/50 bg-red-500/10 px-4 py-2 text-xs font-semibold text-red-300 transition hover:bg-red-500/20 disabled:opacity-50"
                    >
                      Tolak
                    </button>
                  </div>
                </div>
              </div>
            )}

            {decisionFeedback && (
              <div className="mt-3 rounded-lg border border-[#E6FF2A]/30 bg-[#E6FF2A]/10 p-2.5 text-xs text-[#E6FF2A]">
                {decisionFeedback}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

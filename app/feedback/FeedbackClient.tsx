'use client';

import React, { useState } from 'react';
import Link from 'next/link';

function StarburstCheckBadge() {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto mb-4"
      aria-hidden="true"
    >
      <path
        d="M50 4L57.5 12.5L68.6 10.1L72.7 20.7L83.9 22.6L83.8 34L93.4 40.2L89.1 50L93.4 59.8L83.8 66L83.9 77.4L72.7 79.3L68.6 89.9L57.5 87.5L50 96L42.5 87.5L31.4 89.9L27.3 79.3L16.1 77.4L16.2 66L6.6 59.8L10.9 50L6.6 40.2L16.2 34L16.1 22.6L27.3 20.7L31.4 10.1L42.5 12.5L50 4Z"
        fill="#1A3E9E"
      />
      <path
        d="M34 50.5L44 60.5L66 38.5"
        stroke="white"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RequiredLabel({ children }: { children: React.ReactNode }) {
  return (
    <label className="flex items-start gap-1 font-body text-[13px] font-medium leading-[1.5] text-[#292929] sm:text-[14px]">
      <span className="font-bold text-[#FF5050]">*</span>
      <span>{children}</span>
    </label>
  );
}

export default function FeedbackClient() {
  // Hanya menyimpan state field yang benar-benar dibutuhkan
  const [customerCode, setCustomerCode] = useState('');
  const [rating, setRating] = useState<number>(5);
  const [feedbackText, setFeedbackText] = useState('');
  const [feedbackType, setFeedbackType] = useState('CUSTOMER_REVIEW');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    if (!customerCode.trim()) {
      setErrorMessage('Kode Klien wajib diisi agar evaluasi terhubung dengan proyek perusahaan Anda.');
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customer_code: customerCode.trim(),
          rating,
          feedback_text: feedbackText.trim(),
          feedback_type: feedbackType || 'CUSTOMER_REVIEW',
        }),
      });

      const json = await res.json();
      if (!res.ok || !json.success) {
        throw new Error(json.error || 'Gagal mengirimkan feedback.');
      }

      setIsSuccess(true);
    } catch (err: unknown) {
      const errObj = err as Error;
      setErrorMessage(errObj.message || 'Terjadi kendala saat mengirimkan ulasan.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="rounded-[20px] border border-[#D9D9D9] bg-white p-8 sm:p-12 text-center shadow-sm">
        <StarburstCheckBadge />
        <h3 className="font-heading text-[26px] font-semibold text-[#101010]">
          Terima Kasih Atas Ulasan Anda!
        </h3>
        <p className="mx-auto mt-3 max-w-[480px] font-body text-[14px] leading-[1.6] text-[#717171]">
          Penilaian Anda untuk klien <strong className="text-[#1A3E9E]">{customerCode}</strong> telah berhasil kami terima. Kami sangat mengapresiasi waktu dan masukan berharga Anda untuk kemajuan layanan Arsalynk.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => {
              setIsSuccess(false);
              setFeedbackText('');
            }}
            className="inline-flex h-[48px] items-center justify-center rounded-full border border-[#C8C8C8] bg-white px-6 font-body text-[13px] font-bold uppercase tracking-[0.04em] text-[#505050] transition hover:bg-gray-100 hover:text-[#101010]"
          >
            KIRIM ULASAN LAIN
          </button>
          <Link
            href="/"
            className="inline-flex h-[48px] items-center justify-center rounded-full bg-[#1A3E9E] px-8 font-body text-[13px] font-bold uppercase tracking-[0.04em] text-white transition hover:bg-[#14347F]"
          >
            KEMBALI KE BERANDA
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-[20px] border border-[#D9D9D9] bg-white p-6 sm:p-8 shadow-sm">
      <div className="mb-6 flex flex-col gap-1">
        <div className="flex items-center gap-2 font-body text-[11px] font-extrabold uppercase tracking-[0.06em] text-[#1A3E9E]">
          <span className="h-1.5 w-1.5 bg-[#1A3E9E]" />
          <span>EVALUASI KEPUASAN KLIEN</span>
        </div>
        <h3 className="font-heading text-[20px] font-medium text-[#101010]">
          Formulir Penilaian &amp; Ulasan Layanan
        </h3>
        <p className="font-body text-[13px] text-[#717171]">
          Masukan Anda akan dipelajari langsung oleh manajemen Arsalynk guna memastikan kualitas solusi dan pendampingan tim kami selalu optimal.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4.5">
        {/* 1. Customer Code (Wajib) */}
        <div className="flex flex-col gap-1.5">
          <RequiredLabel>Kode Klien / ID Perusahaan</RequiredLabel>
          <input
            type="text"
            required
            value={customerCode}
            onChange={(e) => setCustomerCode(e.target.value.toUpperCase())}
            placeholder="Contoh: CUST-MP-01 atau sesuai invoice/kontrak Anda"
            className="h-[46px] w-full rounded-[8px] border border-[#C8C8C8] bg-white px-4 font-body text-[14px] text-[#101010] outline-none transition placeholder:text-[#B0B0B0] focus:border-[#1A3E9E] focus:ring-2 focus:ring-[#1A3E9E]/10 md:h-[48px]"
          />
          <span className="font-body text-[11px] text-[#717171]">
            * Kode identitas yang tertera pada dokumen penawaran, invoice, atau kontrak kerja sama Anda bersama Arsalynk.
          </span>
        </div>

        {/* 2. Star Rating (Wajib) */}
        <div className="flex flex-col gap-2 rounded-[12px] bg-[#F7F7F7] p-4 border border-[#EAEAEA]">
          <RequiredLabel>Tingkat Kepuasan Layanan</RequiredLabel>
          <div className="flex items-center gap-2 pt-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                aria-label={`Bintang ${star}`}
                className={`flex h-11 w-11 items-center justify-center rounded-[10px] text-[20px] transition duration-200 ${
                  rating >= star
                    ? 'bg-[#1A3E9E] text-[#E6FF2A] shadow-md scale-105'
                    : 'bg-white text-[#B0B0B0] border border-[#D9D9D9] hover:border-[#1A3E9E]'
                }`}
              >
                ★
              </button>
            ))}
          </div>
          <span className="font-body text-[12px] font-semibold text-[#1A3E9E]">
            {rating === 5 && 'Sangat Puas (5/5) — Melebihi Ekspektasi'}
            {rating === 4 && 'Puas (4/5) — Standar Profesional Terpenuhi'}
            {rating === 3 && 'Cukup (3/5) — Cukup Baik, Ada Ruang Peningkatan'}
            {rating === 2 && 'Kurang Puas (2/5) — Perlu Peningkatan Layanan'}
            {rating === 1 && 'Sangat Tidak Puas (1/5) — Membutuhkan Tindak Lanjut'}
          </span>
        </div>

        {/* 3. Bidang Layanan (Wajib/Pilihan) */}
        <div className="flex flex-col gap-1.5">
          <label className="font-body text-[13px] font-medium text-[#292929]">
            Bidang Layanan
          </label>
          <div className="relative">
            <select
              value={feedbackType}
              onChange={(e) => setFeedbackType(e.target.value)}
              className="h-[46px] w-full appearance-none rounded-[8px] border border-[#C8C8C8] bg-white px-4 font-body text-[14px] text-[#101010] outline-none transition focus:border-[#1A3E9E] focus:ring-2 focus:ring-[#1A3E9E]/10 md:h-[48px]"
            >
              <option value="CUSTOMER_REVIEW">Ulasan Kerja Sama Proyek</option>
              <option value="SERVICE_EVALUATION">Kinerja Solusi Sistem &amp; Software</option>
              <option value="PROJECT_FEEDBACK">Komunikasi &amp; Manajemen Proyek</option>
              <option value="SUPPORT_FEEDBACK">Kualitas Dukungan Teknis</option>
            </select>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#717171]"
            >
              <path
                d="m7 10 5 5 5-5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* 4. Feedback Text / Pesan (Wajib) */}
        <div className="flex flex-col gap-1.5">
          <RequiredLabel>Pesan, Masukan, atau Saran</RequiredLabel>
          <textarea
            required
            rows={4}
            value={feedbackText}
            onChange={(e) => setFeedbackText(e.target.value)}
            placeholder="Bagikan pengalaman Anda selama bekerja sama dengan tim Arsalynk..."
            className="w-full resize-none rounded-[8px] border border-[#C8C8C8] bg-white p-3.5 font-body text-[14px] text-[#101010] outline-none transition placeholder:text-[#B0B0B0] focus:border-[#1A3E9E] focus:ring-2 focus:ring-[#1A3E9E]/10"
          />
        </div>

        {errorMessage && (
          <div className="rounded-[8px] border border-red-200 bg-red-50 p-3 font-body text-[13px] text-red-700">
            {errorMessage}
          </div>
        )}

        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex h-[48px] w-full sm:w-[220px] items-center justify-center gap-2 rounded-full bg-[#1A3E9E] px-8 font-body text-[13px] font-bold uppercase tracking-[0.04em] text-white transition hover:bg-[#14347F] disabled:cursor-wait disabled:opacity-60 md:h-[50px]"
          >
            <span>{isSubmitting ? 'MENGIRIMKAN...' : 'KIRIM EVALUASI'}</span>
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
  );
}
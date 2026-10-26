'use client';

import React, { useState } from 'react';
import Link from 'next/link';
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

function StarburstCheckBadge() {
  return (
    <svg
      width="96"
      height="96"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto mb-5"
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

export default function FeedbackClient() {
  const [rating, setRating] = useState<number>(5);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [category, setCategory] = useState('Layanan Sistem ERP');
  const [comments, setComments] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const res = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          rating,
          name: name.trim(),
          email: email.trim(),
          company: company.trim(),
          category,
          comments: comments.trim(),
          npsScore: rating * 2,
        }),
      });

      const json = await res.json();
      if (!res.ok || !json.success) {
        throw new Error(json.error || 'Gagal mengirim evaluasi.');
      }

      setIsSuccess(true);
    } catch (err: unknown) {
      const errObj = err as Error;
      setErrorMessage(errObj.message || 'Terjadi kesalahan saat memproses data.');
    } finally {
      setIsSubmitting(false);
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
            <span>QUALITY ASSURANCE &amp; SLA</span>
          </div>
          <h2 className="font-heading text-[clamp(30px,2.6vw,44px)] font-medium leading-[1.12] tracking-[-0.03em] text-[#101010]">
            Pengalaman Anda Membentuk Standar Kami
          </h2>
          <p className="mt-3 font-body text-[14px] leading-[1.65] text-[#555] md:text-[15px]">
            Setiap ulasan dan penilaian Anda ditinjau langsung oleh manajemen teknis dan disinkronisasi ke metrik kepuasan klien di sistem Marka CRM kami.
          </p>
        </div>

        <div className="flex flex-col gap-4 rounded-[16px] md:gap-5">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 font-body text-[12px] font-extrabold uppercase leading-[1.3] tracking-[0.06em] text-[#1A3E9E] md:text-[13px]">
              <span className="h-1.5 w-1.5 shrink-0 bg-[#1A3E9E]" />
              <span>TIM COMMERCIAL</span>
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
              <span>KOMITMEN KUALITAS</span>
            </div>
            <p className="font-body text-[13px] leading-[1.6] text-[#717171]">
              Arsalynk berkomitmen memberikan respon tindak lanjut dalam waktu 1x24 jam untuk setiap masukan yang memerlukan eskalasi teknis.
            </p>
          </div>
        </div>
      </div>

      {/* ================================================================
          RIGHT INTERACTION COLUMN — Feedback Form Card
      ================================================================= */}
      <div className="flex w-[56%] shrink-0 flex-col gap-6 max-[1024px]:w-full">
        <div className="rounded-[16px] border border-[#D9D9D9] bg-white p-6 sm:p-8 shadow-sm">
          {isSuccess ? (
            <div className="flex flex-col items-center text-center py-6">
              <StarburstCheckBadge />
              <h3 className="font-heading text-[clamp(24px,2.2vw,36px)] font-medium text-[#101010]">
                Terima Kasih Atas Ulasan Anda!
              </h3>
              <p className="mt-3 max-w-[480px] font-body text-[14px] leading-[1.65] text-[#555]">
                Feedback dan penilaian Anda telah berhasil dicatat dan disinkronkan ke sistem Marka CRM. Kami sangat menghargai kerja sama Anda.
              </p>
              <div className="mt-8 flex gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setIsSuccess(false);
                    setComments('');
                  }}
                  className="inline-flex h-[48px] items-center justify-center rounded-full bg-[#1A3E9E] px-8 font-body text-[13px] font-bold tracking-[0.04em] text-white transition hover:bg-[#14347F]"
                >
                  KIRIM ULASAN LAIN
                </button>
                <Link
                  href="/"
                  className="inline-flex h-[48px] items-center justify-center rounded-full border border-[#D9D9D9] px-8 font-body text-[13px] font-bold tracking-[0.04em] text-[#101010] transition hover:bg-black/5"
                >
                  KEMBALI KE HOME
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4.5">
              {/* RATING SELECTOR */}
              <div className="flex flex-col gap-2">
                <RequiredLabel>Tingkat Kepuasan Layanan</RequiredLabel>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      aria-label={`Beri rating ${star} bintang`}
                      className={`flex h-12 w-12 items-center justify-center rounded-[10px] text-xl transition ${
                        rating >= star
                          ? 'bg-[#1A3E9E] text-[#E6FF2A] shadow-sm scale-105'
                          : 'bg-[#F2F2F2] text-[#AAA] hover:bg-[#E8E8E8]'
                      }`}
                    >
                      ★
                    </button>
                  ))}
                  <span className="ml-2 font-body text-[13px] font-bold text-[#1A3E9E]">
                    {rating === 5 && 'Sangat Memuaskan (5/5)'}
                    {rating === 4 && 'Memuaskan (4/5)'}
                    {rating === 3 && 'Cukup Baik (3/5)'}
                    {rating === 2 && 'Perlu Peningkatan (2/5)'}
                    {rating === 1 && 'Kurang Memuaskan (1/5)'}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <RequiredLabel>Nama Lengkap PIC</RequiredLabel>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Budi Santoso"
                    className="h-[46px] w-full rounded-[8px] border border-[#C8C8C8] bg-transparent px-4 font-body text-[14px] text-[#101010] outline-none transition placeholder:text-[#C8C8C8] focus:border-[#1A3E9E] focus:ring-2 focus:ring-[#1A3E9E]/10 md:h-[48px]"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <RequiredLabel>Perusahaan / Instansi</RequiredLabel>
                  <input
                    type="text"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="PT Sinergi Bisnis"
                    className="h-[46px] w-full rounded-[8px] border border-[#C8C8C8] bg-transparent px-4 font-body text-[14px] text-[#101010] outline-none transition placeholder:text-[#C8C8C8] focus:border-[#1A3E9E] focus:ring-2 focus:ring-[#1A3E9E]/10 md:h-[48px]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <RequiredLabel>Email Bisnis</RequiredLabel>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="pic@perusahaan.com"
                    className="h-[46px] w-full rounded-[8px] border border-[#C8C8C8] bg-transparent px-4 font-body text-[14px] text-[#101010] outline-none transition placeholder:text-[#C8C8C8] focus:border-[#1A3E9E] focus:ring-2 focus:ring-[#1A3E9E]/10 md:h-[48px]"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <RequiredLabel>Kategori Evaluasi</RequiredLabel>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="h-[46px] w-full rounded-[8px] border border-[#C8C8C8] bg-transparent px-4 font-body text-[14px] text-[#101010] outline-none transition focus:border-[#1A3E9E] focus:ring-2 focus:ring-[#1A3E9E]/10 md:h-[48px]"
                  >
                    <option value="Layanan Sistem ERP">Layanan Sistem ERP (Marka)</option>
                    <option value="Dukungan Teknis & Support">Dukungan Teknis &amp; SLA</option>
                    <option value="Kecepatan Respon & Komunikasi">Kecepatan Respon Tim</option>
                    <option value="Kualitas Software & Deliverables">Kualitas Software &amp; Fitur</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <RequiredLabel>Ulasan &amp; Masukan Klien</RequiredLabel>
                <textarea
                  rows={4}
                  required
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  placeholder="Ceritakan pengalaman Anda bekerja sama dengan tim teknologi Arsalynk..."
                  className="w-full rounded-[8px] border border-[#C8C8C8] bg-transparent p-4 font-body text-[14px] text-[#101010] outline-none transition placeholder:text-[#C8C8C8] focus:border-[#1A3E9E] focus:ring-2 focus:ring-[#1A3E9E]/10"
                />
              </div>

              {errorMessage && (
                <div className="rounded-[8px] border border-[#FF5050]/30 bg-[#FF5050]/10 p-3 font-body text-[13px] text-[#FF5050]">
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 inline-flex h-[50px] w-full sm:w-auto self-start items-center justify-center gap-2 rounded-full bg-[#1A3E9E] px-8 font-body text-[13px] font-bold tracking-[0.04em] text-white transition hover:bg-[#14347F] disabled:opacity-50"
              >
                <span>{isSubmitting ? 'MENGIRIM FEEDBACK...' : 'KIRIM FEEDBACK LAYANAN'}</span>
                <svg width="6" height="10" viewBox="0 0 8 14" fill="none" aria-hidden="true">
                  <path d="M1 1L7 7L1 13" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

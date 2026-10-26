'use client';

import React, { useState } from 'react';

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
        throw new Error(json.error || 'Gagal mengirim feedback.');
      }

      setIsSuccess(true);
    } catch (err: unknown) {
      const errObj = err as Error;
      setErrorMessage(errObj.message || 'Terjadi kesalahan saat menyimpan feedback.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="rounded-2xl border border-white/10 bg-[#12141D] p-8 text-center shadow-xl">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-2xl text-emerald-400">
          ✓
        </div>
        <h2 className="font-heading text-xl font-semibold text-white">
          Terima Kasih Atas Masukan Anda!
        </h2>
        <p className="mt-2 text-sm text-white/70">
          Feedback dan rating Anda telah tercatat serta diteruskan ke sistem evaluasi mutu Marka CRM. Tim Arsalynk sangat mengapresiasi waktu dan ulasan Anda.
        </p>
        <button
          type="button"
          onClick={() => {
            setIsSuccess(false);
            setComments('');
          }}
          className="mt-6 inline-flex rounded-lg bg-white/10 px-5 py-2.5 text-xs font-semibold text-white hover:bg-white/20"
        >
          Kirim Ulasan Lain
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-[#12141D]/90 p-6 sm:p-8 backdrop-blur-md shadow-xl">
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Rating Stars */}
        <div>
          <label className="block text-xs font-medium text-white/70 mb-2">
            Tingkat Kepuasan Layanan *
          </label>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                className={`flex h-11 w-11 items-center justify-center rounded-xl text-lg transition ${rating >= star
                    ? 'bg-[#E6FF2A] text-[#101010] shadow-md shadow-[#E6FF2A]/20 scale-105'
                    : 'bg-white/5 text-white/40 hover:bg-white/10'
                  }`}
              >
                ★
              </button>
            ))}
          </div>
          <span className="mt-1.5 block text-xs font-mono text-[#E6FF2A]">
            {rating === 5 && 'Sangat Memuaskan (5/5)'}
            {rating === 4 && 'Memuaskan (4/5)'}
            {rating === 3 && 'Cukup (3/5)'}
            {rating === 2 && 'Kurang Memuaskan (2/5)'}
            {rating === 1 && 'Sangat Kurang (1/5)'}
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-xs font-medium text-white/70 mb-1">
              Nama Lengkap *
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nama PIC"
              className="w-full rounded-lg border border-white/15 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:border-[#E6FF2A] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-white/70 mb-1">
              Perusahaan / Instansi *
            </label>
            <input
              type="text"
              required
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="PT Contoh Bisnis"
              className="w-full rounded-lg border border-white/15 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:border-[#E6FF2A] focus:outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-xs font-medium text-white/70 mb-1">
              Email Bisnis *
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="pic@perusahaan.com"
              className="w-full rounded-lg border border-white/15 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:border-[#E6FF2A] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-white/70 mb-1">
              Kategori Evaluasi *
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full rounded-lg border border-white/15 bg-[#171A26] px-3.5 py-2.5 text-sm text-white focus:border-[#E6FF2A] focus:outline-none"
            >
              <option value="Layanan Sistem ERP">Layanan Sistem ERP</option>
              <option value="Dukungan Teknis & Support">Dukungan Teknis &amp; Support</option>
              <option value="Komunikasi & Kecepatan Respon">Komunikasi &amp; Kecepatan Respon</option>
              <option value="Kualitas Software & Deliverables">Kualitas Software &amp; Deliverables</option>
              <option value="Lainnya">Lainnya</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-white/70 mb-1">
            Ulasan &amp; Masukan Klien *
          </label>
          <textarea
            rows={4}
            required
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            placeholder="Ceritakan pengalaman Anda bekerja sama dengan tim teknologi Arsalynk..."
            className="w-full rounded-lg border border-white/15 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:border-[#E6FF2A] focus:outline-none"
          />
        </div>

        {errorMessage && (
          <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-xs text-red-300">
            {errorMessage}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-lg bg-[#E6FF2A] py-3 px-6 font-body text-xs font-bold uppercase tracking-wider text-[#101010] transition hover:bg-white disabled:opacity-50"
        >
          {isSubmitting ? 'Mengirim ke Marka CRM...' : 'Kirim Ulasan & Feedback'}
        </button>
      </form>
    </div>
  );
}

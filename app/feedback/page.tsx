import type { Metadata } from 'next';
import Link from 'next/link';
import FeedbackClient from './FeedbackClient';
import { SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Feedback & Rating Layanan — ${SITE_NAME}`,
  description:
    'Sampaikan masukan, penilaian kualitas layanan IT, dan evaluasi kepuasan proyek Anda kepada tim Arsalynk & Marka ERP.',
  alternates: { canonical: '/feedback' },
};

export default function FeedbackPage() {
  return (
    <main className="min-h-screen bg-[#0A0C10] text-[#F7F7F7] pt-[130px] pb-24 px-4 sm:px-6 lg:px-8">
      {/* Background Glow */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[20%] left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-[#1A3E9E]/20 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-2xl">
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-widest text-[#E6FF2A]">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span>Customer Feedback</span>
          </div>
          <h1 className="mt-3 font-heading text-3xl font-medium sm:text-4xl text-white">
            Feedback &amp; Rating Layanan
          </h1>
          <p className="mt-2 text-sm text-white/70">
            Penilaian Anda membantu kami terus menyempurnakan implementasi sistem teknologi enterprise dan standar layanan tim Arsalynk.
          </p>
        </div>

        <FeedbackClient />
      </div>
    </main>
  );
}

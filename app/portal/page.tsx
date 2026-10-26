import type { Metadata } from 'next';
import Link from 'next/link';
import ClientPortalClient from './ClientPortalClient';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Client Portal & Pelacakan Dokumen — ${SITE_NAME}`,
  description:
    'Portal klien resmi Arsalynk. Lacak status tiket support teknis dan verifikasi persetujuan dokumen penawaran (quotation) secara real-time terintegrasi dengan Marka ERP.',
  alternates: { canonical: '/portal' },
  robots: { index: false, follow: true },
};

import { Suspense } from 'react';

export default function ClientPortalPage() {
  return (
    <main className="min-h-screen bg-[#0A0C10] text-[#F7F7F7] pt-[130px] pb-24 px-4 sm:px-6 lg:px-8">
      {/* Background Glow */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[20%] left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-[#1A3E9E]/20 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[500px] rounded-full bg-[#E6FF2A]/5 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-4xl">
        {/* Breadcrumb & Header */}
        <div className="mb-8 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-mono uppercase tracking-widest text-[#E6FF2A]">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span>Client Portal</span>
          </div>
          <h1 className="mt-3 font-heading text-3xl font-medium sm:text-4xl text-white">
            Client Portal &amp; Dokumen Marka CRM
          </h1>
          <p className="mt-2 text-sm text-white/70 max-w-2xl">
            Akses resmi untuk klien Arsalynk guna memantau perkembangan tiket pengerjaan teknis, memeriksa rincian penawaran (quotation), serta melakukan persetujuan kontrak secara digital.
          </p>
        </div>

        {/* Client Interactive Portal Component wrapped in Suspense */}
        <Suspense fallback={<div className="p-8 text-center text-sm text-white/60">Memuat Client Portal...</div>}>
          <ClientPortalClient />
        </Suspense>
      </div>
    </main>
  );
}

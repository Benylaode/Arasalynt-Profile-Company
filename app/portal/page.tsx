import type { Metadata } from 'next';
import Link from 'next/link';
import { Suspense } from 'react';
import ClientPortalClient from './ClientPortalClient';
import BeyondExpectations from '@/components/sections/BeyondExpectations/BeyondExpectations';
import {
  SITE_NAME,
  WHATSAPP_PHONE_DISPLAY,
  WHATSAPP_LINK,
} from '@/lib/constants';

export const metadata: Metadata = {
  title: `Client Portal & Support Tiket — ${SITE_NAME}`,
  description:
    'Portal klien resmi Arsalynk. Pengajuan tiket support teknis dan verifikasi persetujuan dokumen penawaran (quotation) terintegrasi langsung dengan Marka ERP.',
  alternates: { canonical: '/portal' },
  robots: { index: false, follow: false, nocache: true },
};

function DownIcon() {
  return (
    <svg
      width="32"
      height="22"
      viewBox="0 0 32 22"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="m4 5 12 12L28 5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M6.62 10.79a15.44 15.44 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.5 11.5 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.5 11.5 0 0 0 .57 3.57 1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
    </svg>
  );
}

function MailIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z" />
    </svg>
  );
}

export default function ClientPortalPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F7F7F7]">
      <main>
        {/* ================================================================
            HERO — Standard Height Matching Corporate Pages
        ================================================================= */}
        <section className="relative isolate flex h-[clamp(560px,41.666vw,800px)] items-center justify-center overflow-hidden rounded-b-[clamp(24px,2.188vw,42px)] bg-[#05070A]">
          <div className="absolute inset-0 -z-30">
            <img
              src="/images/our-business/kaluna-technology/hero.webp"
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div className="pointer-events-none absolute inset-0 -z-20 bg-black/20" />

          <div
            className="pointer-events-none absolute -inset-x-[17.4%] bottom-[-55.63%] top-[31%] -z-20 bg-cover bg-center opacity-100 mix-blend-plus-lighter"
            style={{
              backgroundImage:
                'url(/images/our-business/kaluna-technology/hero-network-overlay.webp)',
            }}
            aria-hidden="true"
          />

          <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[87.25%] bg-gradient-to-b from-transparent from-[9.62%] to-[#101010]" />
          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#1A3E9E] to-transparent to-[71.94%] mix-blend-multiply" />

          <div
            className="pointer-events-none absolute -right-[14%] -top-[14%] -z-10 hidden h-[125%] w-[64%] opacity-[0.06] xl:block"
            style={{
              background:
                'linear-gradient(180deg, rgba(234,234,234,0) 0%, #EAEAEA 29.81%, rgba(234,234,234,0) 100%)',
              clipPath:
                'polygon(50% 0%, 60% 14%, 75% 18%, 68% 34%, 100% 50%, 70% 64%, 78% 83%, 59% 86%, 50% 100%, 40% 86%, 22% 83%, 30% 64%, 0 50%, 31% 34%, 24% 18%, 40% 14%)',
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 mx-auto flex w-full max-w-[900px] items-center justify-center px-6">
            <div className="flex flex-col items-center gap-3 text-center sm:gap-4">
              <div className="flex items-center justify-center gap-2 font-body text-[11px] font-bold uppercase leading-[1.3] tracking-[0.06em] text-[#E6FF2A] sm:text-[13px]">
                <Link href="/" className="transition-opacity hover:opacity-70">
                  HOME
                </Link>
                <span>/</span>
                <span>CLIENT PORTAL</span>
              </div>

              <h1 className="font-heading text-[clamp(44px,4.5vw,84px)] font-medium leading-[1.05] tracking-[-0.02em] text-[#F7F7F7]">
                Portal Klien
              </h1>
              <p className="max-w-[580px] font-body text-[14px] leading-[1.6] text-white/75 sm:text-[16px]">
                Akses resmi untuk mengonfirmasi dokumen penawaran kerja sama dan mengajukan tiket bantuan teknis proyek Anda secara terintegrasi.
              </p>
            </div>
          </div>

          <a
            href="#portal-content"
            aria-label="Scroll to Portal Content"
            className="absolute bottom-[clamp(34px,3.698vw,71px)] left-1/2 z-20 flex h-[clamp(56px,4.167vw,80px)] w-[clamp(56px,4.167vw,80px)] -translate-x-1/2 items-center justify-center rounded-full border border-white/20 text-white shadow-[0_12px_30px_rgba(0,0,0,0.2)] backdrop-blur-[4px] transition duration-300 hover:-translate-y-1 hover:bg-white/20"
            style={{
              background:
                'linear-gradient(230.45deg, rgba(247,247,247,0.21) -7.74%, rgba(247,247,247,0.105) 81.5%)',
            }}
          >
            <DownIcon />
          </a>
        </section>

        {/* ================================================================
            PORTAL INTERFACE SECTION — 2-Column Responsive Layout
        ================================================================= */}
        <section
          id="portal-content"
          className="w-full scroll-mt-8 bg-[#F7F7F7] px-[clamp(24px,13.333vw,256px)] py-[clamp(48px,4.5vw,76px)]"
        >
          <div className="mx-auto flex w-full max-w-[1408px] items-start justify-between gap-[clamp(36px,4vw,72px)] max-[1024px]:flex-col">
            {/* LEFT COLUMN: Context & Support Info */}
            <div className="flex w-[38%] shrink-0 flex-col gap-[clamp(20px,2vw,32px)] max-[1024px]:w-full">
              <h2 className="font-heading text-[clamp(28px,2.4vw,42px)] font-medium leading-[1.15] tracking-[-0.03em] text-[#101010]">
                Transparansi &amp;
                <br />
                Kemudahan
                <br />
                Kolaborasi
              </h2>

              <p className="font-body text-[14px] leading-[1.65] text-[#717171] md:text-[15px]">
                Kami memastikan setiap persetujuan penawaran dan tiket permohonan bantuan teknis diproses secara real-time. Tim operasional Arsalynk siap mendampingi seluruh kebutuhan Anda.
              </p>

              <div className="flex flex-col gap-4 rounded-[16px] md:gap-5">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 font-body text-[12px] font-extrabold uppercase leading-[1.3] tracking-[0.06em] text-[#1A3E9E] md:text-[13px]">
                    <span className="h-1.5 w-1.5 shrink-0 bg-[#1A3E9E]" />
                    <span>BANTUAN &amp; INFORMASI</span>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <a
                      href={WHATSAPP_LINK}
                      className="flex items-center gap-2.5 font-body text-[14px] leading-[1.5] tracking-[0.02em] text-[#717171] transition hover:text-[#101010] md:text-[15px]"
                    >
                      <span className="shrink-0 text-[#1A3E9E]">
                        <PhoneIcon />
                      </span>
                      <span>{WHATSAPP_PHONE_DISPLAY}</span>
                    </a>

                    <a
                      href="mailto:corporate.arsalynk@gmail.com"
                      className="flex items-center gap-2.5 font-body text-[14px] leading-[1.5] tracking-[0.02em] text-[#717171] transition hover:text-[#101010] md:text-[15px]"
                    >
                      <span className="shrink-0 text-[#1A3E9E]">
                        <MailIcon />
                      </span>
                      <span>corporate.arsalynk@gmail.com</span>
                    </a>
                  </div>
                </div>

                <div className="h-px w-full bg-[#D9D9D9]" />

                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 font-body text-[12px] font-extrabold uppercase leading-[1.3] tracking-[0.06em] text-[#1A3E9E] md:text-[13px]">
                    <span className="h-1.5 w-1.5 shrink-0 bg-[#1A3E9E]" />
                    <span>INTEGRASI MARKA ERP</span>
                  </div>

                  <p className="font-body text-[13px] leading-[1.5] tracking-[0.01em] text-[#717171]">
                    Seluruh permohonan tiket support dan konfirmasi penawaran akan langsung tercatat dan ditindaklanjuti oleh sistem Marka ERP resmi.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Interactive Client Portal Client Component */}
            <div className="w-[58%] shrink-0 max-[1024px]:w-full">
              <Suspense
                fallback={
                  <div className="flex h-64 items-center justify-center rounded-[20px] border border-[#D9D9D9] bg-white font-body text-sm text-[#717171] shadow-sm">
                    <div className="flex items-center gap-2">
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#1A3E9E] border-t-transparent" />
                      <span>Memuat data Client Portal &amp; Modul Support Tiket...</span>
                    </div>
                  </div>
                }
              >
                <ClientPortalClient />
              </Suspense>
            </div>
          </div>
        </section>

        {/* ================================================================
            BOTTOM CTA — Beyond Expectations Section
        ================================================================= */}
        <BeyondExpectations />
      </main>
    </div>
  );
}
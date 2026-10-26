import type { Metadata } from 'next';
import Link from 'next/link';
import FeedbackClient from './FeedbackClient';
import BeyondExpectations from '@/components/sections/BeyondExpectations/BeyondExpectations';
import { SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Feedback & Rating Layanan — ${SITE_NAME}`,
  description:
    'Sampaikan masukan, penilaian kualitas layanan IT, dan evaluasi kepuasan proyek Anda kepada tim Arsalynk & Marka ERP.',
  alternates: { canonical: '/feedback' },
};

function DownIcon() {
  return (
    <svg width="32" height="22" viewBox="0 0 32 22" fill="none" aria-hidden="true">
      <path d="m4 5 12 12L28 5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function FeedbackPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F7F7F7] text-[#101010]">
      <main>
        {/* ================================================================
            HERO — Standard Height Matching About Us & Contact Us
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
              backgroundImage: 'url(/images/our-business/kaluna-technology/hero-network-overlay.webp)',
            }}
            aria-hidden="true"
          />

          <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[87.25%] bg-gradient-to-b from-transparent from-[9.62%] to-[#101010]" />
          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#1A3E9E] to-transparent to-[71.94%] mix-blend-multiply" />

          {/* Starburst Watermark Polygon */}
          <div
            className="pointer-events-none absolute -right-[14%] -top-[14%] -z-10 hidden h-[125%] w-[64%] opacity-[0.06] xl:block"
            style={{
              background: 'linear-gradient(180deg, rgba(234,234,234,0) 0%, #EAEAEA 29.81%, rgba(234,234,234,0) 100%)',
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
                <span>CUSTOMER FEEDBACK</span>
              </div>

              <h1 className="font-heading text-[clamp(52px,5vw,96px)] font-medium leading-none tracking-[-0.02em] text-[#F7F7F7]">
                Customer Feedback
              </h1>

              <p className="max-w-[650px] font-body text-[clamp(14px,1.042vw,20px)] font-light leading-[1.6] tracking-[0.02em] text-white/90">
                Masukan dan evaluasi kepuasan Anda membantu kami menjaga kualitas implementasi sistem enterprise Arsalynk.
              </p>
            </div>
          </div>

          <a
            href="#feedback-section"
            aria-label="Scroll to Feedback Section"
            className="absolute bottom-[clamp(34px,3.698vw,71px)] left-1/2 z-20 flex h-[clamp(56px,4.167vw,80px)] w-[clamp(56px,4.167vw,80px)] -translate-x-1/2 items-center justify-center rounded-full border border-white/20 text-white shadow-[0_12px_30px_rgba(0,0,0,0.2)] backdrop-blur-[4px] transition duration-300 hover:-translate-y-1 hover:bg-white/20"
            style={{
              background: 'linear-gradient(230.45deg, rgba(247,247,247,0.21) -7.74%, rgba(247,247,247,0.105) 81.5%)',
            }}
          >
            <DownIcon />
          </a>
        </section>

        {/* ================================================================
            MAIN FEEDBACK SECTION
        ================================================================= */}
        <section id="feedback-section" className="px-[6vw] py-[clamp(80px,7vw,130px)] max-[1199px]:px-[4vw]">
          <FeedbackClient />
        </section>

        {/* BOTTOM CTA */}
        <BeyondExpectations />
      </main>
    </div>
  );
}

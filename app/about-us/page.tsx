'use client';

import SectionPageJsonLd from '@/components/seo/SectionPageJsonLd';
import Link from 'next/link';
import BeyondExpectations from '@/components/sections/BeyondExpectations/BeyondExpectations';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const HUB_SECTIONS_EN = [
  {
    slug: 'corporate-profile',
    href: '/about-us/corporate-profile',
    title: 'Corporate Profile',
    eyebrow: '01 · FOUNDATION & VISION',
    image: '/images/about-us/cards/corporate-profile-card.webp',
    summary:
      'Discover Arsalynk’s vision, mission, corporate principles, and institutional commitment to engineering scalable, secure, and sustainable enterprise technology solutions.',
    ctaText: 'Explore Corporate Profile',
  },
  {
    slug: 'company-leadership',
    href: '/about-us/company-leadership',
    title: 'Company Leadership',
    eyebrow: '02 · VISIONARY GOVERNANCE',
    image: '/images/about-us/company-leadership-hero.webp',
    summary:
      'Executive leadership blending industry expertise, commercial insight, and modern governance standards to guide enterprise digital transformation.',
    ctaText: 'Explore Leadership',
  },
  {
    slug: 'ecosystem-philosophy',
    href: '/about-us/ecosystem-philosophy',
    title: 'Ecosystem Philosophy',
    eyebrow: '03 · COLLABORATIVE FRAMEWORK',
    image: '/images/about-us/ecosystem-philosophy-hero.webp',
    summary:
      'A philosophy where specialized business units operate autonomously yet remain synchronized through a shared intelligence network—fostering synergy without fragmentation.',
    ctaText: 'Explore Ecosystem Philosophy',
  },
  {
    slug: 'our-solution',
    href: '/our-solution',
    title: 'Our Solution',
    eyebrow: '04 · ENTERPRISE SOLUTIONS',
    image: '/images/about-us/company-leadership/leadership-intro-office.webp',
    summary:
      'An integrated suite of custom enterprise solutions: from ERP operational architecture and AI deep learning to connected IoT ecosystems and scalable web development.',
    ctaText: 'Explore Our Solution',
  },
] as const;

const HUB_SECTIONS_ID = [
  {
    slug: 'corporate-profile',
    href: '/about-us/corporate-profile',
    title: 'Profil Korporat',
    eyebrow: '01 · FONDASI & VISI',
    image: '/images/about-us/cards/corporate-profile-card.webp',
    summary:
      'Temukan visi, misi, prinsip korporat, dan komitmen institusional Arsalynk dalam merekayasa solusi teknologi perusahaan yang terukur, aman, dan berkelanjutan.',
    ctaText: 'Jelajahi Profil Korporat',
  },
  {
    slug: 'company-leadership',
    href: '/about-us/company-leadership',
    title: 'Kepemimpinan Perusahaan',
    eyebrow: '02 · TATA KELOLA VISIONER',
    image: '/images/about-us/company-leadership-hero.webp',
    summary:
      'Kepemimpinan eksekutif yang memadukan keahlian industri, wawasan komersial, dan standar tata kelola modern untuk memandu transformasi digital perusahaan.',
    ctaText: 'Jelajahi Kepemimpinan',
  },
  {
    slug: 'ecosystem-philosophy',
    href: '/about-us/ecosystem-philosophy',
    title: 'Filosofi Ekosistem',
    eyebrow: '03 · KERANGKA KOLABORATIF',
    image: '/images/about-us/ecosystem-philosophy-hero.webp',
    summary:
      'Filosofi di mana unit bisnis spesialis beroperasi secara otonom namun tetap tersinkronisasi melalui jaringan inteligensi bersama—menciptakan sinergi tanpa fragmentasi.',
    ctaText: 'Jelajahi Filosofi Ekosistem',
  },
  {
    slug: 'our-solution',
    href: '/our-solution',
    title: 'Solusi Kami',
    eyebrow: '04 · SOLUSI PERUSAHAAN',
    image: '/images/about-us/company-leadership/leadership-intro-office.webp',
    summary:
      'Rangkaian solusi perusahaan kustom yang terintegrasi: mulai dari arsitektur operasional ERP dan deep learning AI hingga ekosistem IoT terhubung serta pengembangan web yang terukur.',
    ctaText: 'Jelajahi Solusi Kami',
  },
] as const;

function IconArrowRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12H19M14 7L19 12L14 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg width="28" height="20" viewBox="0 0 32 22" fill="none" aria-hidden="true">
      <path d="M3 4L16 17L29 4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function AboutUsPage() {
  const { locale } = useLanguage();
  const isId = locale === 'id';
  const hubSections = isId ? HUB_SECTIONS_ID : HUB_SECTIONS_EN;

  return (
    <main className="relative w-full overflow-x-hidden bg-[#F7F7F7] text-[#101010]">
      <SectionPageJsonLd section="about-us" />
      {/* ── HERO SECTION ── */}
      <section
        id="hero"
        aria-label={isId ? 'Hero Tentang Arsalynk' : 'About Arsalynk Hero'}
        className="relative isolate flex h-[clamp(560px,41.666vw,800px)] w-full items-center justify-center overflow-hidden rounded-b-[clamp(24px,2.188vw,42px)] bg-[#020714]"
      >
        <img
          src="/images/about-us/hero-infinity-new.webp"
          alt=""
          aria-hidden="true"
          draggable={false}
          className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover object-center max-[640px]:object-[52%_center]"
        />

        <img
          src="/images/about-us/network-overlay.webp"
          alt=""
          aria-hidden="true"
          draggable={false}
          className="pointer-events-none absolute bottom-[-44%] left-1/2 h-[125%] w-[250%] max-w-none -translate-x-1/2 select-none object-contain opacity-70 max-[640px]:bottom-[-16%] max-[640px]:h-[82%] max-[640px]:w-[220%]"
          style={{ mixBlendMode: 'plus-lighter' }}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(16,16,16,0.52) 0%, rgba(16,16,16,0.62) 48%, rgba(16,16,16,0.86) 100%)' }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(26,62,158,0.28) 0%, #1A3E9E00 62%)',
            mixBlendMode: 'color',
          }}
        />

        <div className="relative z-10 mx-auto flex w-full max-w-[900px] flex-col items-center px-6 text-center">
          <nav aria-label="Breadcrumb" className="font-body text-[11px] font-bold uppercase tracking-[0.08em] text-[#E6FF2A]">
            <Link href="/" className="transition hover:opacity-75">{isId ? 'Beranda' : 'Home'}</Link>
            <span className="mx-2 font-normal text-white/50">&gt;</span>
            <span className="text-white/80">{isId ? 'Tentang Kami' : 'About Us'}</span>
          </nav>

          <h1 className="mt-5 font-heading text-[clamp(52px,5vw,96px)] font-medium leading-none tracking-[-0.02em] text-[#F7F7F7]">
            {isId ? 'Tentang Arsalynk' : 'About Arsalynk'}
          </h1>

          <p className="mt-6 max-w-[650px] font-body text-[clamp(14px,1.042vw,20px)] font-light leading-[1.6] tracking-[0.02em] text-white/95">
            {isId
              ? 'Menghubungkan kapabilitas lintas strategi, teknologi, dan eksekusi untuk menyelesaikan tantangan bisnis yang kompleks serta menghadirkan nilai jangka panjang.'
              : 'Connecting capabilities across strategy, technology, and execution to solve complex business challenges and deliver lasting value.'}
          </p>
        </div>

        <a
          href="#explore-pillars"
          aria-label={isId ? 'Gulir ke narasi' : 'Scroll to narrative'}
          className="absolute bottom-[clamp(34px,3.698vw,71px)] left-1/2 z-20 flex h-[clamp(56px,4.167vw,80px)] w-[clamp(56px,4.167vw,80px)] -translate-x-1/2 items-center justify-center rounded-full border border-white/20 text-white shadow-[0_12px_30px_rgba(0,0,0,0.2)] backdrop-blur-[4px] transition duration-300 hover:-translate-y-1 hover:bg-white/20"
          style={{ background: 'linear-gradient(230.45deg, rgba(247,247,247,0.21) -7.74%, rgba(247,247,247,0.105) 81.5%)' }}
        >
          <ChevronDown />
        </a>
      </section>

      {/* ── SECTION: WHO WE ARE (EXECUTIVE OVERVIEW HUB) ── */}
      <section id="who-we-are" className="sr-only">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-12">
          <div className="flex max-w-[840px] flex-col gap-4">
            <div className="flex items-center gap-2.5 font-body text-[13px] font-bold uppercase tracking-[0.08em] text-[#1A3E9E]">
              <span className="h-2 w-2 bg-[#1A3E9E]" />
              <span>{isId ? 'SIAPA KAMI' : 'WHO WE ARE'}</span>
            </div>
            <h2 className="font-heading text-[clamp(36px,3.75vw,68px)] font-medium leading-[1.08] text-[#101010]">
              {isId ? 'Ekosistem Terintegrasi untuk Transformasi Nyata' : 'An Integrated Ecosystem for Tangible Transformation'}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="flex flex-col gap-6 lg:col-span-7">
              <p className="font-body text-[clamp(16px,1.15vw,21px)] font-normal leading-[1.7] text-[#292929]">
                {isId ? (
                  <>
                    Arsalynk didirikan atas satu kesadaran mendasar: tantangan terbesar yang dihadapi perusahaan modern bukanlah kurangnya ambisi, melainkan <strong>fragmentasi kapabilitas</strong>. Ketika platform ERP terisolasi, perangkat keras IoT beroperasi tanpa telemetri terpusat, dan keputusan strategis tidak didukung analitik data yang akurat, pertumbuhan perusahaan niscaya akan terhambat.
                  </>
                ) : (
                  <>
                    Arsalynk was founded on a fundamental realization: the greatest challenge modern enterprises face is not a lack of ambition, but <strong>capability fragmentation</strong>. When ERP platforms remain isolated, IoT hardware operates without central telemetry, and strategic decisions lack accurate data analytics, enterprise growth inevitably stalls.
                  </>
                )}
              </p>
              <p className="font-body text-[clamp(15px,1vw,18px)] leading-[1.7] text-[#555]">
                {isId
                  ? 'Sebagai ekosistem teknologi perusahaan terintegrasi dan software house di Indonesia, Arsalynk menyatukan strategi, rekayasa perangkat lunak, otomatisasi alur kerja, riset mendalam, dan komunikasi bisnis strategis ke dalam satu kesatuan yang terkoordinasi. Kami memandu para pemimpin industri melewati evolusi digital dengan arsitektur yang tangguh, terukur, dan siap menghadapi masa depan.'
                  : 'As an integrated enterprise technology ecosystem and software house in Indonesia, Arsalynk unifies strategy, software engineering, workflow automation, in-depth research, and strategic business communication into one coordinated whole. We guide industry leaders through digital evolution with robust, scalable, and future-ready architectures.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION: THE 4 PILLARS HUB ── */}
      <section id="explore-pillars" className="scroll-mt-24 border-t border-black/5 bg-white px-[6vw] py-[clamp(90px,8vw,140px)] text-[#101010] max-[1199px]:px-[4vw]">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-14">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2.5 font-body text-[13px] font-bold uppercase tracking-[0.08em] text-[#1A3E9E]">
              <span className="h-2 w-2 bg-[#1A3E9E]" />
              <span>{isId ? 'JELAJAHI ARSALYNK' : 'EXPLORE ARSALYNK'}</span>
            </div>
            <h2 className="max-w-[900px] font-heading text-[clamp(36px,3.75vw,68px)] font-medium leading-[1.08] text-[#101010]">
              {isId ? 'Jelajahi Fondasi & Ekosistem Kami' : 'Explore Our Foundations & Ecosystem'}
            </h2>
            <p className="max-w-[700px] font-body text-[clamp(15px,1vw,18px)] leading-[1.65] text-[#555]">
              {isId
                ? 'Temukan arsitektur struktural di balik Arsalynk melalui empat pilar utama yang mendefinisikan visi korporat, kepemimpinan eksekutif, filosofi operasional, dan solusi perusahaan kami.'
                : 'Discover the structural architecture behind Arsalynk through four core pillars that define our corporate vision, executive leadership, operating philosophy, and enterprise solutions.'}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {hubSections.map((section) => (
              <article
                key={section.slug}
                className="group relative flex flex-col justify-between overflow-hidden rounded-[26px] border border-black/10 bg-[#FAFAFA] p-7 transition duration-500 hover:-translate-y-1 hover:border-[#1A3E9E]/40 hover:bg-white hover:shadow-[0_20px_45px_rgba(26,62,158,0.12)] sm:p-8 shadow-[0_8px_30px_rgba(26,62,158,0.04)]"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[18px] bg-black">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 rounded-full bg-[#E6FF2A] px-3 py-1 font-body text-[11px] font-bold uppercase tracking-[0.08em] text-[#101010] shadow-sm">
                    {section.eyebrow}
                  </span>
                </div>

                <div className="mt-8 flex flex-col gap-3">
                  <h3 className="font-heading text-[clamp(26px,2vw,36px)] font-medium leading-[1.18] text-[#101010] transition group-hover:text-[#1A3E9E]">
                    {section.title}
                  </h3>
                  <p className="font-body text-[15px] leading-[1.7] text-[#555]">
                    {section.summary}
                  </p>
                </div>

                <div className="mt-8 pt-2">
                  <Link
                    href={section.href}
                    className="inline-flex items-center gap-2.5 font-body text-[14px] font-bold tracking-[0.02em] text-[#1A3E9E] no-underline transition hover:translate-x-1 hover:text-[#101010]"
                  >
                    <span>{section.ctaText}</span>
                    <IconArrowRight />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <BeyondExpectations />
    </main>
  );
}

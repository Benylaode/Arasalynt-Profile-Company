import SectionPageJsonLd from '@/components/seo/SectionPageJsonLd';
import Link from 'next/link';
import BeyondExpectations from '@/components/sections/BeyondExpectations/BeyondExpectations';

const HUB_SECTIONS = [
  {
    slug: 'corporate-profile',
    href: '/about-us/corporate-profile',
    title: 'Corporate Profile',
    eyebrow: '01 · FOUNDATION & VISION',
    image: '/images/about-us/cards/corporate-profile-card.webp',
    summary:
      'Mengenal visi, misi, prinsip korporasi, serta komitmen institusional Arsalynk dalam merekayasa solusi teknologi enterprise yang terukur, aman, dan berkelanjutan.',
    ctaText: 'Explore Corporate Profile',
  },
  {
    slug: 'company-leadership',
    href: '/about-us/company-leadership',
    title: 'Company Leadership',
    eyebrow: '02 · VISIONARY GOVERNANCE',
    image: '/images/about-us/company-leadership-hero.webp',
    summary:
      'Kepemimpinan eksekutif yang memadukan keahlian industri, ketajaman komersial, dan standar tata kelola modern untuk memandu arah transformasi digital mitra bisnis.',
    ctaText: 'Explore Leadership',
  },
  {
    slug: 'ecosystem-philosophy',
    href: '/about-us/ecosystem-philosophy',
    title: 'Ecosystem Philosophy',
    eyebrow: '03 · COLLABORATIVE FRAMEWORK',
    image: '/images/about-us/ecosystem-philosophy-hero.webp',
    summary:
      'Filosofi di mana unit spesialis beroperasi secara otonom namun terkoneksi melalui jaringan shared intelligence—menciptakan sinergi tanpa fragmentasi.',
    ctaText: 'Explore Ecosystem Philosophy',
  },
  {
    slug: 'our-business',
    href: '/our-business',
    title: 'Our Business Ecosystem',
    eyebrow: '04 · SPECIALIZED BUSINESS UNITS',
    image: '/images/about-us/company-leadership/leadership-intro-office.webp',
    summary:
      'Portofolio unit bisnis terintegrasi dalam ekosistem Arsalynk: dari rekayasa ERP Kaluna Technology, analitik data Artic Analytica, hingga produksi media dan komunikasi strategis.',
    ctaText: 'Explore Our Business',
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
  return (
    <main className="relative w-full overflow-x-hidden bg-[#F7F7F7] text-[#101010]">
      <SectionPageJsonLd section="about-us" />
      {/* ── HERO SECTION ── */}
      <section
        id="hero"
        aria-label="About Arsalynk Hero"
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
            <Link href="/" className="transition hover:opacity-75">Home</Link>
            <span className="mx-2 font-normal text-white/50">&gt;</span>
            <span className="text-white/80">About Us</span>
          </nav>

          <h1 className="mt-5 font-heading text-[clamp(52px,5vw,96px)] font-medium leading-none tracking-[-0.02em] text-[#F7F7F7]">
            About Arsalynk
          </h1>

          <p className="mt-6 max-w-[650px] font-body text-[clamp(14px,1.042vw,20px)] font-light leading-[1.6] tracking-[0.02em] text-white/95">
            Connecting capabilities across strategy, technology, and execution to solve complex business challenges and deliver lasting value.
          </p>
        </div>

        <a
          href="#who-we-are"
          aria-label="Scroll to narrative"
          className="absolute bottom-[clamp(34px,3.698vw,71px)] left-1/2 z-20 flex h-[clamp(56px,4.167vw,80px)] w-[clamp(56px,4.167vw,80px)] -translate-x-1/2 items-center justify-center rounded-full border border-white/20 text-white shadow-[0_12px_30px_rgba(0,0,0,0.2)] backdrop-blur-[4px] transition duration-300 hover:-translate-y-1 hover:bg-white/20"
          style={{ background: 'linear-gradient(230.45deg, rgba(247,247,247,0.21) -7.74%, rgba(247,247,247,0.105) 81.5%)' }}
        >
          <ChevronDown />
        </a>
      </section>

      {/* ── SECTION: WHO WE ARE (EXECUTIVE OVERVIEW HUB) ── */}
      <section id="who-we-are" className="scroll-mt-24 px-[6vw] py-[clamp(80px,7vw,130px)] max-[1199px]:px-[4vw]">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-12">
          <div className="flex max-w-[840px] flex-col gap-4">
            <div className="flex items-center gap-2.5 font-body text-[13px] font-bold uppercase tracking-[0.08em] text-[#1A3E9E]">
              <span className="h-2 w-2 bg-[#1A3E9E]" />
              <span>WHO WE ARE</span>
            </div>
            <h2 className="font-heading text-[clamp(36px,3.75vw,68px)] font-medium leading-[1.08] text-[#101010]">
              Ekosistem Terintegrasi untuk Transformasi Nyata
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="flex flex-col gap-6 lg:col-span-7">
              <p className="font-body text-[clamp(16px,1.15vw,21px)] font-normal leading-[1.7] text-[#292929]">
                Arsalynk lahir dari pemahaman mendasar bahwa tantangan terbesar perusahaan modern bukanlah ketiadaan ambisi, melainkan <strong>fragmentasi kapabilitas</strong>. Ketika sistem ERP terisolasi, hardware IoT berjalan tanpa telemetri pusat, dan keputusan strategi tidak ditopang analitik data yang akurat, potensi pertumbuhan enterprise akan tersendat.
              </p>
              <p className="font-body text-[clamp(15px,1vw,18px)] leading-[1.7] text-[#555]">
                Sebagai ekosistem bisnis dan software house di Indonesia, Arsalynk menyatukan strategi, rekayasa perangkat lunak, otomatisasi alur kerja, riset mendalam, serta komunikasi bisnis dalam satu kesatuan terkoordinasi. Kami membantu para pemimpin industri menavigasi disrupsi teknologi dengan arsitektur yang kokoh, terukur, dan berorientasi jangka panjang.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 lg:col-span-5 sm:gap-6">
              <div className="flex flex-col justify-between rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
                <span className="font-heading text-[clamp(36px,3.2vw,54px)] font-medium text-[#1A3E9E]">4+</span>
                <div>
                  <h3 className="font-heading text-[18px] font-medium text-[#101010]">Pilar Strategis</h3>
                  <p className="mt-1 font-body text-[13px] leading-relaxed text-[#666]">Fondasi terpadu: Profil, Kepemimpinan, Filosofi &amp; Bisnis.</p>
                </div>
              </div>
              <div className="flex flex-col justify-between rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
                <span className="font-heading text-[clamp(36px,3.2vw,54px)] font-medium text-[#1A3E9E]">100%</span>
                <div>
                  <h3 className="font-heading text-[18px] font-medium text-[#101010]">Arsitektur Terkoneksi</h3>
                  <p className="mt-1 font-body text-[13px] leading-relaxed text-[#666]">Menghubungkan alur operasional tanpa silo data internal.</p>
                </div>
              </div>
              <div className="flex flex-col justify-between rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
                <span className="font-heading text-[clamp(36px,3.2vw,54px)] font-medium text-[#1A3E9E]">8+</span>
                <div>
                  <h3 className="font-heading text-[18px] font-medium text-[#101010]">Solusi Enterprise</h3>
                  <p className="mt-1 font-body text-[13px] leading-relaxed text-[#666]">ERP, IoT, POS, HRMS, Supply Chain &amp; Keuangan.</p>
                </div>
              </div>
              <div className="flex flex-col justify-between rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
                <span className="font-heading text-[clamp(36px,3.2vw,54px)] font-medium text-[#1A3E9E]">1</span>
                <div>
                  <h3 className="font-heading text-[18px] font-medium text-[#101010]">Ekosistem Terpadu</h3>
                  <p className="mt-1 font-body text-[13px] leading-relaxed text-[#666]">Satu visi bersama untuk efisiensi bisnis Indonesia.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION: THE 4 PILLARS HUB ── */}
      <section className="bg-[#101010] px-[6vw] py-[clamp(90px,8vw,140px)] text-white max-[1199px]:px-[4vw]">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-14">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2.5 font-body text-[13px] font-bold uppercase tracking-[0.08em] text-[#E6FF2A]">
              <span className="h-2 w-2 bg-[#E6FF2A]" />
              <span>EXPLORE ARSALYNK</span>
            </div>
            <h2 className="max-w-[900px] font-heading text-[clamp(36px,3.75vw,68px)] font-medium leading-[1.08] text-[#F7F7F7]">
              Jelajahi Fondasi &amp; Ekosistem Kami
            </h2>
            <p className="max-w-[700px] font-body text-[clamp(15px,1vw,18px)] leading-[1.65] text-white/75">
              Pelajari struktur di balik Arsalynk melalui empat pilar yang mendefinisikan visi korporasi, kepemimpinan, filosofi, dan portofolio unit bisnis kami.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {HUB_SECTIONS.map((section) => (
              <article
                key={section.slug}
                className="group relative flex flex-col justify-between overflow-hidden rounded-[24px] border border-white/15 bg-white/[0.04] p-8 transition duration-500 hover:-translate-y-1 hover:border-[#E6FF2A]/50 hover:bg-white/[0.08]"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[16px] bg-black">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <span className="absolute bottom-4 left-4 font-body text-[11px] font-bold uppercase tracking-[0.08em] text-[#E6FF2A]">
                    {section.eyebrow}
                  </span>
                </div>

                <div className="mt-8 flex flex-col gap-4">
                  <h3 className="font-heading text-[clamp(28px,2.2vw,40px)] font-medium leading-[1.15] text-[#F7F7F7] transition group-hover:text-[#E6FF2A]">
                    {section.title}
                  </h3>
                  <p className="font-body text-[15px] leading-[1.7] text-white/80">
                    {section.summary}
                  </p>
                </div>

                <div className="mt-8 pt-4">
                  <Link
                    href={section.href}
                    className="inline-flex items-center gap-3 font-body text-[14px] font-bold tracking-[0.02em] text-[#E6FF2A] no-underline transition hover:translate-x-1 hover:text-white"
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

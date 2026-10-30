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
          href="#explore-pillars"
          aria-label="Scroll to narrative"
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
              <span>WHO WE ARE</span>
            </div>
            <h2 className="font-heading text-[clamp(36px,3.75vw,68px)] font-medium leading-[1.08] text-[#101010]">
              An Integrated Ecosystem for Tangible Transformation
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="flex flex-col gap-6 lg:col-span-7">
              <p className="font-body text-[clamp(16px,1.15vw,21px)] font-normal leading-[1.7] text-[#292929]">
                Arsalynk was founded on a fundamental realization: the greatest challenge modern enterprises face is not a lack of ambition, but <strong>capability fragmentation</strong>. When ERP platforms remain isolated, IoT hardware operates without central telemetry, and strategic decisions lack accurate data analytics, enterprise growth inevitably stalls.
              </p>
              <p className="font-body text-[clamp(15px,1vw,18px)] leading-[1.7] text-[#555]">
                As an integrated enterprise technology ecosystem and software house in Indonesia, Arsalynk unifies strategy, software engineering, workflow automation, in-depth research, and strategic business communication into one coordinated whole. We guide industry leaders through digital evolution with robust, scalable, and future-ready architectures.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 lg:col-span-5 sm:gap-6">
              <div className="flex flex-col justify-between rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
                <span className="font-heading text-[clamp(36px,3.2vw,54px)] font-medium text-[#1A3E9E]">4+</span>
                <div>
                  <h3 className="font-heading text-[18px] font-medium text-[#101010]">Strategic Pillars</h3>
                  <p className="mt-1 font-body text-[13px] leading-relaxed text-[#666]">Unified foundations: Profile, Leadership, Philosophy &amp; Solution.</p>
                </div>
              </div>
              <div className="flex flex-col justify-between rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
                <span className="font-heading text-[clamp(36px,3.2vw,54px)] font-medium text-[#1A3E9E]">100%</span>
                <div>
                  <h3 className="font-heading text-[18px] font-medium text-[#101010]">Connected Architecture</h3>
                  <p className="mt-1 font-body text-[13px] leading-relaxed text-[#666]">Bridging operational workflows without internal data silos.</p>
                </div>
              </div>
              <div className="flex flex-col justify-between rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
                <span className="font-heading text-[clamp(36px,3.2vw,54px)] font-medium text-[#1A3E9E]">8+</span>
                <div>
                  <h3 className="font-heading text-[18px] font-medium text-[#101010]">Enterprise Solutions</h3>
                  <p className="mt-1 font-body text-[13px] leading-relaxed text-[#666]">ERP, IoT, POS, HRMS, Supply Chain &amp; Financials.</p>
                </div>
              </div>
              <div className="flex flex-col justify-between rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
                <span className="font-heading text-[clamp(36px,3.2vw,54px)] font-medium text-[#1A3E9E]">1</span>
                <div>
                  <h3 className="font-heading text-[18px] font-medium text-[#101010]">Unified Ecosystem</h3>
                  <p className="mt-1 font-body text-[13px] leading-relaxed text-[#666]">A shared vision accelerating enterprise efficiency.</p>
                </div>
              </div>
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
              <span>EXPLORE ARSALYNK</span>
            </div>
            <h2 className="max-w-[900px] font-heading text-[clamp(36px,3.75vw,68px)] font-medium leading-[1.08] text-[#101010]">
              Explore Our Foundations &amp; Ecosystem
            </h2>
            <p className="max-w-[700px] font-body text-[clamp(15px,1vw,18px)] leading-[1.65] text-[#555]">
              Discover the structural architecture behind Arsalynk through four core pillars that define our corporate vision, executive leadership, operating philosophy, and enterprise solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {HUB_SECTIONS.map((section) => (
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

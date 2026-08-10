'use client';

import Link from 'next/link';
import BeyondExpectations from '@/components/sections/BeyondExpectations/BeyondExpectations';
import CorporateProfilePage from './corporate-profile/page';
import CompanyLeadershipPage from './company-leadership/page';

const ABOUT_CARDS = [
  {
    href: '#our-foundation',
    id: 'our-foundation',
    title: <>Our<br />Foundation</>,
    alt: 'Our Foundation',
    image: '/images/about-us/cards/corporate-profile-card.webp',
    imageClassName: 'inset-0 h-full w-full object-center',
    shade: 'bg-black/20',
    gradientClassName: 'inset-0 bg-gradient-to-t from-black to-transparent',
  },
  {
    href: '#vision-mission',
    id: 'vision-mission',
    title: <>Our Vision<br />&amp; Mission</>,
    alt: 'Our Vision and Mission',
    image: '/images/about-us/corporate-profile-hero.webp',
    imageClassName: 'inset-0 h-full w-full object-center',
    shade: 'bg-black/10',
    gradientClassName: 'left-0 right-0 bottom-0 h-[58%] bg-gradient-to-t from-black via-black/55 to-transparent',
  },
  {
    href: '#leadership-foundation',
    id: 'leadership-foundation',
    title: <>Leadership<br />Foundation</>,
    alt: 'Leadership Foundation',
    image: '/images/about-us/company-leadership-hero.webp',
    imageClassName: 'inset-0 h-full w-full object-center',
    shade: 'bg-black/10',
    gradientClassName: 'left-0 right-0 bottom-0 h-[58%] bg-gradient-to-t from-black via-black/55 to-transparent',
  },
  {
    href: '#leadership-principles',
    id: 'leadership-principles',
    title: <>Leadership<br />Principles</>,
    alt: 'Leadership Principles',
    image: '/images/about-us/company-leadership/leadership-intro-office.webp',
    imageClassName: 'inset-0 h-full w-full object-center',
    shade: 'bg-black/10',
    gradientClassName: 'left-0 right-0 bottom-0 h-[58%] bg-gradient-to-t from-black via-black/55 to-transparent',
  },
  {
    href: '#our-capabilities',
    id: 'our-capabilities',
    title: <>Our<br />Capabilities</>,
    alt: 'Our Capabilities',
    image: '/images/about-us/ecosystem-philosophy-hero.webp',
    imageClassName: 'inset-0 h-full w-full object-center',
    shade: 'bg-black/10',
    gradientClassName: 'left-0 right-0 bottom-0 h-[58%] bg-gradient-to-t from-black via-black/55 to-transparent',
  },
] as const;

const ChevronDown = () => (
  <svg width="32" height="22" viewBox="0 0 32 22" fill="none" aria-hidden="true">
    <path d="M3 4L16 17L29 4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none" aria-hidden="true">
    <path fill="currentColor" d="M24.02 4C13.02 4 4.08 12.85 4.08 23.74c0 3.47.92 6.85 2.67 9.83L4 44l10.72-2.79a20.1 20.1 0 0 0 9.29 2.31h.01C35.02 43.52 44 34.67 44 23.77 44 12.87 35.02 4 24.02 4Zm0 36.18h-.01a16.7 16.7 0 0 1-8.51-2.32l-.61-.36-6.36 1.66 1.7-6.16-.4-.63a16.24 16.24 0 0 1-2.55-8.63c0-9.05 7.51-16.4 16.75-16.4 4.47 0 8.67 1.72 11.83 4.84a16.16 16.16 0 0 1 4.9 11.58c-.01 9.06-7.52 16.42-16.74 16.42Zm9.18-12.29c-.5-.25-2.97-1.45-3.43-1.61-.46-.17-.79-.25-1.13.25-.33.49-1.29 1.61-1.58 1.94-.29.33-.58.37-1.08.12-.5-.25-2.1-.76-4-2.43a15 15 0 0 1-2.77-3.41c-.29-.5-.03-.76.22-1.01.23-.22.5-.58.75-.87.25-.29.33-.5.5-.83.17-.33.08-.62-.04-.87-.13-.25-1.13-2.68-1.54-3.67-.41-.98-.82-.85-1.13-.87h-.96c-.33 0-.87.12-1.33.62-.46.5-1.75 1.69-1.75 4.12 0 2.43 1.79 4.79 2.04 5.12.25.33 3.52 5.32 8.53 7.46 1.19.51 2.12.82 2.85 1.05 1.2.38 2.29.33 3.15.2.96-.14 2.97-1.2 3.39-2.35.42-1.16.42-2.15.29-2.36-.12-.2-.46-.32-.96-.57Z" />
  </svg>
);

export default function AboutUsPage() {
  const handleScrollDown = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    const targets = Array.from(document.querySelectorAll('#beyond-expectations'));
    const visibleTarget = targets.find((el) => {
      const rect = el.getBoundingClientRect();
      return rect.height > 0 && window.getComputedStyle(el).display !== 'none';
    });
    if (visibleTarget) {
      const top = visibleTarget.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <main className="relative w-full overflow-x-hidden bg-[#F7F7F7]">
      {/*
        Desktop geometry follows the supplied 1920px design.
        The global navbar remains outside this file; at desktop it occupies 90px,
        therefore the visible hero below it is 710px high (90 + 710 = 800px).
      */}
      <section
        id="hero"
        aria-label="About Arsalynk Hero"
        className="relative isolate flex h-[clamp(560px,41.666vw,800px)] w-full items-center justify-center overflow-hidden rounded-b-[clamp(24px,2.188vw,42px)] bg-[#020714]"
      >
        {/* Primary infinity artwork: Figma rect 2707 × 975 at y = -39.
            Relative to the already-rendered 90px navbar, its top becomes -129px. */}
        <img
          src="/images/about-us/hero-infinity-new.webp"
          alt=""
          aria-hidden="true"
          draggable={false}
          className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover object-center max-[640px]:object-[52%_center]"
        />

        {/* Transparent network dome from the supplied SVG */}
        <img
          src="/images/about-us/network-overlay.webp"
          alt=""
          aria-hidden="true"
          draggable={false}
          className="pointer-events-none absolute bottom-[-44%] left-1/2 h-[125%] w-[250%] max-w-none -translate-x-1/2 select-none object-contain opacity-70 max-[640px]:bottom-[-16%] max-[640px]:h-[82%] max-[640px]:w-[220%]"
          style={{ mixBlendMode: 'plus-lighter' }}
        />

        {/* Exact hero overlays from the reference */}
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

        {/* Hero copy: y = 287px in the 800px master frame, or 197px below navbar */}
        <div className="relative z-10 mx-auto flex w-full max-w-[900px] flex-col items-center px-6 text-center">
          <div className="font-body text-[9px] font-bold leading-[130%] tracking-[0.06em] text-[#E6FF2A] max-[768px]:hidden">
            HOME&nbsp;&nbsp;&gt;&nbsp;&nbsp;ABOUT US
          </div>

          <h1 className="font-heading mt-5 text-[clamp(52px,5vw,96px)] font-medium leading-none tracking-[-0.02em] text-[#F7F7F7] max-[768px]:max-w-[300px]">
            <span className="max-[768px]:block">About</span>{' '}Arsalynk
          </h1>

          <p className="mt-6 max-w-[650px] font-body text-[clamp(14px,1.042vw,20px)] font-light leading-[1.6] tracking-[0.02em] text-white/95">
            Connecting capabilities across strategy, technology, and execution to solve complex business challenges and deliver lasting value.
          </p>
        </div>

        <a
          href="#beyond-expectations"
          onClick={(e) => {
            e.preventDefault();
            handleScrollDown();
          }}
          aria-label="Scroll to CTA"
          className="absolute bottom-[clamp(34px,3.698vw,71px)] left-1/2 z-20 flex h-[clamp(56px,4.167vw,80px)] w-[clamp(56px,4.167vw,80px)] -translate-x-1/2 items-center justify-center rounded-full border border-white/20 text-white shadow-[0_12px_30px_rgba(0,0,0,0.2)] backdrop-blur-[4px] transition duration-300 hover:-translate-y-1 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6FF2A]"
          style={{ background: 'linear-gradient(230.45deg, rgba(247,247,247,0.21) -7.74%, rgba(247,247,247,0.105) 81.5%)' }}
        >
          <ChevronDown />
        </a>
      </section>

      {/* Exact desktop section: 720px high, 110px padding, 30px gap, cards 546 × 500 */}
      <section
        id="about-grid"
        aria-label="About Us Sections"
        className="hidden"
      >
        <div className="grid w-full max-w-[1700px] grid-cols-3 justify-center gap-[30px] max-[1024px]:grid-cols-2 max-[1024px]:gap-6 max-[700px]:grid-cols-1">
          {ABOUT_CARDS.map((card) => (
            <Link
              key={card.href}
              id={card.id}
              href={card.href}
              aria-label={card.alt}
              className="group relative h-[500px] min-w-0 overflow-hidden rounded-3xl bg-[#8C8C8C] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#1A3E9E]/40 max-[1440px]:h-[440px] max-[1024px]:h-[460px] max-[700px]:mx-auto max-[700px]:aspect-[1.095] max-[700px]:h-auto max-[700px]:w-full max-[700px]:max-w-[546px] max-[480px]:rounded-[16px]"
            >
              <img
                src={card.image}
                alt=""
                aria-hidden="true"
                draggable={false}
                className={`pointer-events-none absolute max-w-none select-none object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035] ${card.imageClassName}`}
              />

              <div aria-hidden="true" className={`pointer-events-none absolute inset-0 ${card.shade}`} />
              <div aria-hidden="true" className={`pointer-events-none absolute ${card.gradientClassName}`} />

              <h2 className="font-heading absolute bottom-[30px] left-[35.5px] z-10 w-[460px] text-[56px] font-semibold leading-[110%] tracking-[-0.01em] text-[#F7F7F7] transition-[bottom,transform] duration-500 group-hover:bottom-[118px] max-[1440px]:bottom-8 max-[1440px]:left-8 max-[1440px]:right-8 max-[1440px]:w-auto max-[1440px]:text-[46px] max-[1440px]:group-hover:bottom-[112px] max-[1024px]:text-[42px] max-[700px]:bottom-[76px] max-[700px]:group-hover:bottom-[76px] max-[480px]:left-5 max-[480px]:right-5 max-[480px]:w-auto max-[480px]:text-[30px]">
                {card.title}
              </h2>

              <span className="absolute bottom-[40px] left-[35.5px] z-10 flex h-[58px] w-[214px] translate-y-4 items-center justify-center rounded-full bg-[#E6FF2A] font-body text-[16px] font-semibold text-[#101010] opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100 max-[1440px]:bottom-8 max-[1440px]:left-8 max-[1440px]:h-[52px] max-[1440px]:w-[200px] max-[1440px]:text-[14px] max-[700px]:bottom-4 max-[700px]:left-5 max-[700px]:right-5 max-[700px]:h-11 max-[700px]:w-auto max-[700px]:translate-y-0 max-[700px]:text-[12px] max-[700px]:opacity-100">
                LEARN MORE <span aria-hidden="true" className="ml-4 text-base">›</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/*
        Single-page composition. Each source keeps its original markup,
        responsive styling, slider, hover states, and animation timing.
      */}
      <div id="about-content" className="about-sections scroll-mt-[90px]">
        <div className="about-source about-source-corporate-primary">
          <CorporateProfilePage />
        </div>

        <div className="about-source about-source-leadership">
          <CompanyLeadershipPage />
        </div>
      </div>

      <style jsx global>{`
        .about-sections {
          display: flex;
          flex-direction: column;
        }

        .about-source,
        .about-source > main {
          display: contents;
        }

        .about-source > main > section,
        .about-source > main > div,
        .about-source > main > a {
          display: none;
        }

        .about-source-corporate-primary > main > section:nth-of-type(2) {
          display: flex;
          order: 1;
        }

        .about-source-corporate-primary > main > section:nth-of-type(3) {
          display: block;
          order: 2;
        }

        .about-source-leadership > main > section:nth-of-type(2) {
          display: block;
          order: 3;
        }

        .about-source-leadership > main > section:nth-of-type(4) {
          display: block;
          order: 4;
        }

        .about-source-corporate-primary > main > section:nth-of-type(4) {
          display: block;
          order: 5;
        }

        .about-source-corporate-primary > main,
        .about-source-leadership > main {
          min-height: 0;
        }
      `}</style>

      {/* CTA Section */}
      <BeyondExpectations />
    </main>
  );
}

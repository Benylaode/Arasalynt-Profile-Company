'use client';

import Link from 'next/link';

const ABOUT_CARDS = [
  {
    href: '/about-us/corporate-profile',
    title: <>Corporate<br />Profile</>,
    alt: 'Corporate Profile',
    image: '/images/shared/corporate-profile-card.webp',
    imageClassName: 'h-[564px] w-[564px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
    shade: 'bg-black/20',
    gradientClassName: 'inset-0 bg-gradient-to-t from-black to-transparent',
  },
  {
    href: '/about-us/company-leadership',
    title: <>Company<br />Leadership</>,
    alt: 'Company Leadership',
    image: '/images/shared/leadership-portrait.webp',
    imageClassName: 'h-[659px] w-[659px] left-[-56.5px] top-[-111.5px]',
    shade: 'bg-black/30',
    gradientClassName: 'left-0 right-0 bottom-0 h-[301px] bg-gradient-to-t from-black to-transparent',
  },
  {
    href: '/about-us/ecosystem-philosophy',
    title: <>Ecosystem<br />Philosophy</>,
    alt: 'Ecosystem Philosophy',
    image: '/images/shared/ecosystem-philosophy-card.webp',
    imageClassName: 'h-[670px] w-[670px] left-[-58px] top-[-108px]',
    shade: 'bg-black/20',
    gradientClassName: 'left-0 right-0 bottom-0 h-[301px] bg-gradient-to-t from-black to-transparent',
  },
] as const;

const ChevronDown = () => (
  <svg viewBox="0 0 32 21" className="h-[21px] w-8" fill="none" aria-hidden="true">
    <path d="M2 2.25 16 17.5 30 2.25" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none" aria-hidden="true">
    <path fill="currentColor" d="M24.02 4C13.02 4 4.08 12.85 4.08 23.74c0 3.47.92 6.85 2.67 9.83L4 44l10.72-2.79a20.1 20.1 0 0 0 9.29 2.31h.01C35.02 43.52 44 34.67 44 23.77 44 12.87 35.02 4 24.02 4Zm0 36.18h-.01a16.7 16.7 0 0 1-8.51-2.32l-.61-.36-6.36 1.66 1.7-6.16-.4-.63a16.24 16.24 0 0 1-2.55-8.63c0-9.05 7.51-16.4 16.75-16.4 4.47 0 8.67 1.72 11.83 4.84a16.16 16.16 0 0 1 4.9 11.58c-.01 9.06-7.52 16.42-16.74 16.42Zm9.18-12.29c-.5-.25-2.97-1.45-3.43-1.61-.46-.17-.79-.25-1.13.25-.33.49-1.29 1.61-1.58 1.94-.29.33-.58.37-1.08.12-.5-.25-2.1-.76-4-2.43a15 15 0 0 1-2.77-3.41c-.29-.5-.03-.76.22-1.01.23-.22.5-.58.75-.87.25-.29.33-.5.5-.83.17-.33.08-.62-.04-.87-.13-.25-1.13-2.68-1.54-3.67-.41-.98-.82-.85-1.13-.87h-.96c-.33 0-.87.12-1.33.62-.46.5-1.75 1.69-1.75 4.12 0 2.43 1.79 4.79 2.04 5.12.25.33 3.52 5.32 8.53 7.46 1.19.51 2.12.82 2.85 1.05 1.2.38 2.29.33 3.15.2.96-.14 2.97-1.2 3.39-2.35.42-1.16.42-2.15.29-2.36-.12-.2-.46-.32-.96-.57Z" />
  </svg>
);

export default function AboutUsPage() {
  const handleScrollDown = () => {
    document.getElementById('about-grid')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <main className="relative w-full overflow-hidden bg-[#F7F7F7]">
      {/*
        Desktop geometry follows the supplied 1920px design.
        The global navbar remains outside this file; at desktop it occupies 90px,
        therefore the visible hero below it is 710px high (90 + 710 = 800px).
      */}
      <section
        id="hero"
        aria-label="About Arsalynk Hero"
        className="relative h-[710px] w-full overflow-hidden rounded-b-[42px] bg-[#020714] max-[1024px]:h-[620px] max-[768px]:h-[560px] max-[768px]:rounded-b-[28px]"
      >
        {/* Primary infinity artwork: Figma rect 2707 × 975 at y = -39.
            Relative to the already-rendered 90px navbar, its top becomes -129px. */}
        <img
          src="/image/about-us/hero-infinity.webp"
          alt=""
          aria-hidden="true"
          draggable={false}
          className="pointer-events-none absolute left-1/2 top-[-129px] h-[975px] w-[2707px] max-w-none -translate-x-1/2 select-none object-cover max-[1024px]:top-[-54px] max-[1024px]:h-[760px] max-[1024px]:w-[2110px] max-[768px]:left-[58%] max-[768px]:top-[-10px] max-[768px]:h-[620px] max-[768px]:w-[1700px]"
        />

        {/* Transparent network dome from the supplied SVG */}
        <img
          src="/images/shared/network-overlay.webp"
          alt=""
          aria-hidden="true"
          draggable={false}
          className="pointer-events-none absolute left-1/2 top-[158px] h-[997px] w-[2588px] max-w-none -translate-x-1/2 select-none object-contain max-[1024px]:top-[170px] max-[1024px]:h-[780px] max-[1024px]:w-[2020px] max-[768px]:top-[235px] max-[768px]:h-[570px] max-[768px]:w-[1480px]"
          style={{ mixBlendMode: 'plus-lighter' }}
        />

        {/* Exact hero overlays from the reference */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 top-[12px]"
          style={{ background: 'linear-gradient(180deg, rgba(16,16,16,0) 9.62%, #101010 100%)' }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-[-90px] h-[800px] max-[1024px]:h-[710px] max-[768px]:top-[-72px] max-[768px]:h-[632px]"
          style={{
            background: 'linear-gradient(180deg, #1A3E9E 0%, rgba(26,62,158,0) 71.94%)',
            mixBlendMode: 'plus-darker',
          }}
        />

        {/* Hero copy: y = 287px in the 800px master frame, or 197px below navbar */}
        <div className="absolute left-1/2 top-[197px] z-10 flex w-[766px] -translate-x-1/2 flex-col items-center gap-6 text-center max-[1024px]:top-[170px] max-[1024px]:w-[720px] max-[768px]:top-[124px] max-[768px]:w-full max-[768px]:gap-[18px] max-[768px]:px-6">
          <div className="font-body text-[9px] font-bold leading-[130%] tracking-[0.06em] text-[#E6FF2A] max-[768px]:text-[8px]">
            HOME&nbsp;&nbsp;&gt;&nbsp;&nbsp;ABOUT US
          </div>

          <h1 className="font-heading text-[96px] font-medium leading-none tracking-[-0.02em] text-[#F7F7F7] max-[1280px]:text-[82px] max-[1024px]:text-[72px] max-[768px]:text-[48px] max-[480px]:text-[42px]">
            About Arsalynk
          </h1>

          <p className="font-body w-full text-[20px] font-normal leading-[160%] tracking-[0.02em] text-white max-[1024px]:max-w-[660px] max-[768px]:max-w-[540px] max-[768px]:text-[16px] max-[768px]:leading-[155%]">
            Connecting capabilities across strategy, technology, and execution to solve complex business challenges and deliver lasting value.
          </p>
        </div>

        <button
          type="button"
          onClick={handleScrollDown}
          aria-label="Scroll to About Us links"
          className="absolute bottom-[71px] left-1/2 z-20 flex h-20 w-20 -translate-x-1/2 items-center justify-center rounded-full border border-[rgba(175,175,175,0.25)] text-white backdrop-blur-[4px] transition-transform duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6FF2A] max-[768px]:bottom-10 max-[768px]:h-16 max-[768px]:w-16"
          style={{ background: 'linear-gradient(230.45deg, rgba(247,247,247,0.21) -7.74%, rgba(247,247,247,0.105) 81.5%)' }}
        >
          <ChevronDown />
        </button>
      </section>

      {/* Exact desktop section: 720px high, 110px padding, 30px gap, cards 546 × 500 */}
      <section
        id="about-grid"
        aria-label="About Us Sections"
        className="relative flex h-[720px] scroll-mt-[90px] items-center justify-center bg-[#F7F7F7] px-[110px] py-[110px] max-[1440px]:h-auto max-[1440px]:px-16 max-[1024px]:px-10 max-[1024px]:py-20 max-[768px]:px-6 max-[768px]:py-16 max-[480px]:px-4"
      >
        <div className="grid w-full max-w-[1700px] grid-cols-3 justify-center gap-[30px] max-[1024px]:grid-cols-2 max-[1024px]:gap-6 max-[700px]:grid-cols-1 min-[1800px]:grid-cols-[repeat(3,546px)]">
          {ABOUT_CARDS.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              aria-label={card.alt}
              className="group relative h-[500px] min-w-0 overflow-hidden rounded-3xl bg-[#8C8C8C] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#1A3E9E]/40 max-[1440px]:h-[440px] max-[1024px]:h-[460px] max-[700px]:mx-auto max-[700px]:h-[500px] max-[700px]:w-full max-[700px]:max-w-[546px] max-[480px]:h-[410px]"
            >
              <img
                src={card.image}
                alt=""
                aria-hidden="true"
                draggable={false}
                className={`pointer-events-none absolute max-w-none select-none object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025] ${card.imageClassName}`}
              />

              <div aria-hidden="true" className={`pointer-events-none absolute inset-0 ${card.shade}`} />
              <div aria-hidden="true" className={`pointer-events-none absolute ${card.gradientClassName}`} />

              <h2 className="font-heading absolute bottom-[30px] left-[35.5px] z-10 w-[460px] text-[56px] font-semibold leading-[110%] tracking-[-0.01em] text-[#F7F7F7] transition-transform duration-500 group-hover:-translate-y-1 max-[1440px]:bottom-8 max-[1440px]:left-8 max-[1440px]:right-8 max-[1440px]:w-auto max-[1440px]:text-[46px] max-[1024px]:text-[42px] max-[480px]:bottom-6 max-[480px]:left-6 max-[480px]:right-6 max-[480px]:w-auto max-[480px]:text-[38px]">
                {card.title}
              </h2>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

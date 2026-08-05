'use client';

import Link from 'next/link';

const ABOUT_CARDS = [
  {
    href: '/about-us/corporate-profile',
    title: <>Corporate<br />Profile</>,
    alt: 'Corporate Profile',
    image: '/images/shared/corporate-profile-card.webp',
    imageClassName: 'inset-0 h-full w-full object-center',
    shade: 'bg-black/20',
    gradientClassName: 'inset-0 bg-gradient-to-t from-black to-transparent',
  },
  {
    href: '/about-us/company-leadership',
    title: <>Company<br />Leadership</>,
    alt: 'Company Leadership',
    image: '/images/about-us/company-leadership-hero.png',
    imageClassName: 'inset-0 h-full w-full object-center',
    shade: 'bg-black/10',
    gradientClassName: 'left-0 right-0 bottom-0 h-[58%] bg-gradient-to-t from-black via-black/55 to-transparent',
  },
  {
    href: '/about-us/ecosystem-philosophy',
    title: <>Ecosystem<br />Philosophy</>,
    alt: 'Ecosystem Philosophy',
    image: '/images/about-us/ecosystem-philosophy-hero.png',
    imageClassName: 'inset-0 h-full w-full object-center',
    shade: 'bg-black/10',
    gradientClassName: 'left-0 right-0 bottom-0 h-[58%] bg-gradient-to-t from-black via-black/55 to-transparent',
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
        className="relative h-[clamp(520px,41.667vw,800px)] w-full overflow-hidden rounded-b-[42px] bg-[#020714] max-[640px]:rounded-b-[24px]"
      >
        {/* Primary infinity artwork: Figma rect 2707 × 975 at y = -39.
            Relative to the already-rendered 90px navbar, its top becomes -129px. */}
        <img
          src="/images/about-us/hero-infinity-new.jpg"
          alt=""
          aria-hidden="true"
          draggable={false}
          className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover object-center max-[640px]:object-[52%_center]"
        />

        {/* Transparent network dome from the supplied SVG */}
        <img
          src="/images/shared/network-overlay.webp"
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
        <div className="absolute left-1/2 top-[197px] z-10 flex w-[766px] -translate-x-1/2 flex-col items-center gap-6 text-center max-[1024px]:top-[170px] max-[1024px]:w-[720px] max-[768px]:top-[112px] max-[768px]:w-full max-[768px]:gap-[14px] max-[768px]:px-5">
          <div className="font-body text-[9px] font-bold leading-[130%] tracking-[0.06em] text-[#E6FF2A] max-[768px]:hidden">
            HOME&nbsp;&nbsp;&gt;&nbsp;&nbsp;ABOUT US
          </div>

          <h1 className="font-heading text-[96px] font-medium leading-none tracking-[-0.02em] text-[#F7F7F7] max-[1280px]:text-[82px] max-[1024px]:text-[72px] max-[768px]:max-w-[250px] max-[768px]:text-[42px] max-[768px]:leading-[0.96] max-[480px]:text-[38px]">
            <span className="max-[768px]:block">About</span>{' '}Arsalynk
          </h1>

          <p className="font-body w-full text-[20px] font-normal leading-[160%] tracking-[0.02em] text-white max-[1024px]:max-w-[660px] max-[768px]:max-w-[350px] max-[768px]:text-[12px] max-[768px]:leading-[145%]">
            Connecting capabilities across strategy, technology, and execution to solve complex business challenges and deliver lasting value.
          </p>
        </div>

        <button
          type="button"
          onClick={handleScrollDown}
          aria-label="Scroll to About Us links"
          className="absolute bottom-[71px] left-1/2 z-20 flex h-20 w-20 -translate-x-1/2 items-center justify-center rounded-full border border-[rgba(175,175,175,0.25)] text-white backdrop-blur-[4px] transition-transform duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6FF2A] max-[768px]:bottom-8 max-[768px]:h-14 max-[768px]:w-14"
          style={{ background: 'linear-gradient(230.45deg, rgba(247,247,247,0.21) -7.74%, rgba(247,247,247,0.105) 81.5%)' }}
        >
          <ChevronDown />
        </button>
      </section>

      {/* Exact desktop section: 720px high, 110px padding, 30px gap, cards 546 × 500 */}
      <section
        id="about-grid"
        aria-label="About Us Sections"
        className="relative flex h-[720px] scroll-mt-[90px] items-center justify-center bg-[#F7F7F7] px-[6vw] py-[110px] max-[1440px]:h-auto max-[1199px]:px-[4vw] max-[1024px]:py-20 max-[768px]:py-14"
      >
        <div className="grid w-full max-w-[1700px] grid-cols-3 justify-center gap-[30px] max-[1024px]:grid-cols-2 max-[1024px]:gap-6 max-[700px]:grid-cols-1 min-[1800px]:grid-cols-[repeat(3,546px)]">
          {ABOUT_CARDS.map((card) => (
            <Link
              key={card.href}
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
    </main>
  );
}

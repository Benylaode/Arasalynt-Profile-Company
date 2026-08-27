'use client';

import BeyondExpectations from '@/components/sections/BeyondExpectations/BeyondExpectations';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const ASSET_BASE = '/images/company-leadership';

const IconChevronDown = () => (
  <svg width="32" height="22" viewBox="0 0 32 22" fill="none" aria-hidden="true">
    <path d="M3 4L16 17L29 4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconChevron = ({ direction = 'right' }: { direction?: 'left' | 'right' }) => (
  <svg
    width="8"
    height="14"
    viewBox="0 0 8 14"
    fill="none"
    aria-hidden="true"
    className={direction === 'left' ? 'rotate-180' : ''}
  >
    <path
      d="M1.5 1.5L6.5 7L1.5 12.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PrincipleIcon = ({ type }: { type: 'technical' | 'roi' | 'expertise' | 'leadership' }) => {
  if (type === 'technical') {
    return (
      <svg viewBox="0 0 32 32" fill="none" className="h-6 w-6" aria-hidden="true">
        <circle cx="16" cy="16" r="11.5" stroke="currentColor" strokeWidth="1.7" />
        <path d="m10.5 16 3.6 3.6 7.7-8" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === 'roi') {
    return (
      <svg viewBox="0 0 32 32" fill="none" className="h-6 w-6" aria-hidden="true">
        <path d="M11.1 16V7.6h9.8V2.7l9.1 9.1-9.1 9.1V16h-9.8Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M20.9 24.4V16h-9.8v-4.9L2 20.2l9.1 9.1v-4.9h9.8Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === 'expertise') {
    return (
      <svg viewBox="0 0 32 32" fill="none" className="h-6 w-6" aria-hidden="true">
        <path d="m16 3 11 6.4v13.2L16 29 5 22.6V9.4L16 3Z" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="16" cy="16" r="3.1" stroke="currentColor" strokeWidth="1.6" />
        <path d="m16 12.9-4.8-2.8M16 12.9l4.8-2.8M12.9 17.8l-4.7 2.7M19.1 17.8l4.7 2.7M16 19.1v5.5" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 32 32" fill="none" className="h-6 w-6" aria-hidden="true">
      <circle cx="16" cy="10.1" r="4.4" stroke="currentColor" strokeWidth="1.7" />
      <path d="M7.5 27.5v-2.2c0-4.7 3.8-8.4 8.5-8.4s8.5 3.7 8.5 8.4v2.2h-17Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  );
};

const PRINCIPLES = [
  {
    title: 'Technical\nExcellence',
    desc: 'Every architectural decision is grounded in deep systems engineering expertise, strict security protocols, and measurable operational performance.',
    icon: 'technical' as const,
  },
  {
    title: 'ROI-First\nExecution',
    desc: 'We focus on high-impact technology deployment—delivering clear efficiency gains, rapid implementation velocity, and tangible cost optimization for our enterprise partners.',
    icon: 'roi' as const,
  },
  {
    title: 'Cross-Disciplinary\nIT Expertise',
    desc: 'Bringing together specialists across ERP architecture, IoT hardware integration, data engineering, and system security to solve complex technical challenges.',
    icon: 'expertise' as const,
  },
  {
    title: 'Continuity-Driven\nLeadership',
    desc: 'Resilient teams and technical fail-safes keep every critical system and operation running without a single point of failure.',
    icon: 'leadership' as const,
  },
];

const TRUST_SLIDES = [
  {
    text: 'We earn lasting partnerships through proven system reliability, clear communication, and precise execution across every project lifecycle.',
    image: `${ASSET_BASE}/building-trust-reference-01.webp`
  },
  {
    text: 'We merge deep technical knowledge across enterprise systems, data architecture, and IoT engineering into single-source, fully integrated solutions.',
    image: `${ASSET_BASE}/building-trust-reference-02.webp`
  },
  {
    text: 'Our delivery and management frameworks scale sustainably, ensuring high-availability operations without bottlenecks or single points of failure.',
    image: '/images/about-us/company-leadership/building-trust.webp'
  },
  {
    text: 'Our teams are designed to operate sustainably without creating a single point of leadership or operational failure.',
    image: `${ASSET_BASE}/building-trust-2.webp`
  },
];

const WideContainer = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`w-full ${className}`}>
    {children}
  </div>
);

const NarrowContainer = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`mx-auto w-full max-w-[1408px] ${className}`}>
    {children}
  </div>
);

export default function CompanyLeadershipPage() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % TRUST_SLIDES.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, []);

  const handleScrollDown = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    const target = document.getElementById('beyond-expectations');
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const changeSlide = (direction: 'prev' | 'next') => {
    setActiveSlide((current) => {
      if (direction === 'prev') return (current - 1 + TRUST_SLIDES.length) % TRUST_SLIDES.length;
      return (current + 1) % TRUST_SLIDES.length;
    });
  };

  return (
    <main className="company-leadership-page relative w-full overflow-hidden bg-[#F7F7F7] text-[#101010]">
      {/* HERO */}
      <section
        id="hero"
        aria-label="Company Leadership Hero"
        className="relative isolate h-[clamp(520px,41.667vw,800px)] w-full overflow-hidden rounded-b-[42px] bg-[#101010] max-[640px]:rounded-b-[24px]"
      >
        <img
          src="/images/about-us/company-leadership-hero.webp"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-top"
        />

        <img
          src="/images/about-us/network-overlay.webp"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[-44%] left-1/2 h-[125%] w-[250%] max-w-none -translate-x-1/2 select-none object-contain opacity-70 max-[640px]:bottom-[-16%] max-[640px]:h-[82%] max-[640px]:w-[220%]"
          style={{ mixBlendMode: 'plus-lighter' }}
        />

        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background: 'linear-gradient(180deg, rgba(26,62,158,0.28) 0%, #1A3E9E00 62%)',
            mixBlendMode: 'color',
          }}
        />
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{ background: 'linear-gradient(180deg, #1A3E9E00 0%, rgba(16,16,16,0.34) 42%, rgba(16,16,16,0.8) 100%)' }}
        />

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center">
          <div className="flex flex-col items-center gap-6 max-[768px]:gap-4">
           <div className="font-body text-[10px] font-normal uppercase leading-[1.3] tracking-[0.06em] text-[#E6FF2A] max-[768px]:text-[7px]">
              Home&nbsp;&nbsp;&gt;&nbsp;&nbsp;About Us&nbsp;&nbsp;&gt;&nbsp;&nbsp;Company Leadership
            </div>
            <h1 className="font-heading text-[clamp(56px,5vw,96px)] font-medium leading-none tracking-[-0.02em] text-[#F7F7F7]">
              Company Leadership
            </h1>
          </div>
        </div>

        <a
          href="#beyond-expectations"
          onClick={(e) => {
            e.preventDefault();
            handleScrollDown();
          }}
          aria-label="Scroll to CTA"
          className="absolute bottom-[clamp(34px,4.5vw,71px)] left-1/2 z-20 flex h-[clamp(56px,4.167vw,80px)] w-[clamp(56px,4.167vw,80px)] -translate-x-1/2 items-center justify-center rounded-full border border-[rgba(175,175,175,.25)] text-white backdrop-blur-[4px] transition-transform duration-300 hover:scale-105"
          style={{ background: 'linear-gradient(230.45deg, rgba(247,247,247,.21) -7.74%, rgba(247,247,247,.105) 81.5%)' }}
        >
          <IconChevronDown />
        </a>
      </section>

      {/* LEADERSHIP FOUNDATION */}
      <section
        id="leadership-foundation"
        className="w-full scroll-mt-24 bg-[#F7F7F7] px-[clamp(24px,13.333vw,256px)] py-[clamp(80px,6.563vw,110px)]"
      >
        <NarrowContainer className="flex items-center justify-between gap-[clamp(32px,2.5vw,48px)] max-[1024px]:flex-col">
          <div className="flex w-[38.7%] shrink-0 flex-col justify-center max-[1024px]:w-full">
            <div className="flex flex-col gap-[clamp(24px,2.188vw,42px)]">
              <div className="flex items-center gap-[10px] font-body text-[14px] font-extrabold uppercase leading-[1.3] tracking-[0.06em] text-[#1A3E9E] max-[768px]:text-[12px]">
                <span className="h-2 w-2 shrink-0 bg-[#1A3E9E]" />
                Leadership Foundation
              </div>

              <h2 className="font-heading text-[clamp(40px,3.333vw,64px)] font-medium leading-[1.2] tracking-[-0.02em] text-[#101010]">
                Driven by Technical Mastery
                <br />
                &amp; Strategic Execution
              </h2>

              <p className="font-body text-[clamp(15px,1.042vw,20px)] font-normal leading-[1.6] tracking-[0.02em] text-[#292929]">
                At Arsalynk, leadership is anchored in deep industry expertise and rigorous engineering discipline. Guided by seasoned systems architects and enterprise technology leaders, we ensure every deployment&mdash;from core ERP integration to complex IoT infrastructure&mdash;is built on performance, security, and scalability.
              </p>
            </div>
          </div>
{/* 
          <div className="relative w-[54.3%] shrink-0 overflow-hidden rounded-[24px] bg-[#252A2F] max-[1024px]:w-full aspect-[764/670]">
            <img
              src="/images/about-us/company-leadership/leadership-intro-office.webp"
              alt="Arsalynk leadership office"
              className="absolute inset-[-10px] h-[calc(100%+20px)] w-[calc(100%+20px)] object-cover blur-[6.6px]"
            />
            <div className="absolute inset-0 bg-[#101010]/15" />
            <img
              src={`${ASSET_BASE}/leader.webp`}
              alt="Arsalynk Group leadership"
              className="absolute bottom-0 left-1/2 h-[94.18%] w-auto max-w-none -translate-x-1/2 object-contain object-bottom"
            />
            <div className="absolute inset-x-0 bottom-0 h-[54%] bg-gradient-to-b from-transparent to-black/70 opacity-70" />
            <div className="absolute inset-x-0 bottom-0 h-[91px] bg-gradient-to-b from-transparent to-black/70" />
          </div> */}
          <div className="relative w-[54.3%] overflow-hidden rounded-[24px]">
            <img
              src="/images/about-us/company-leadership/leadership.svg"
              alt="Arsalynk illustration"
              className="h-full w-full object-contain"
            />
          </div>
        </NarrowContainer>
      </section>

      {/* BUILDING TRUST */}
      <section className="relative isolate min-h-[clamp(600px,46.875vw,900px)] w-full overflow-hidden bg-[#101010] flex items-end pb-[clamp(72px,5.729vw,110px)]">
        {TRUST_SLIDES.map((slide, index) => (
          <img
            key={`bg-${index}`}
            src={slide.image}
            alt=""
            className={`absolute inset-0 h-full w-full object-cover object-top grayscale transition-opacity duration-700 ${
              activeSlide === index ? 'opacity-100 z-0' : 'opacity-0 -z-10'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="absolute inset-x-0 bottom-0 h-[394px] bg-gradient-to-b from-transparent to-black z-0" />

        <WideContainer className="relative z-10 w-full px-[clamp(48px,13.542vw,260px)] max-[1024px]:px-10 max-[768px]:px-6">
          <div className="w-full max-w-[60%] max-[1280px]:max-w-[75%] max-[1024px]:max-w-full">
            <div className="mb-[clamp(20px,1.667vw,32px)] flex items-center gap-[10px] font-body text-[12px] font-extrabold uppercase leading-[1.3] tracking-[0.06em] text-[#E6FF2A] max-[768px]:text-[10px]">
              <span className="h-1.5 w-1.5 shrink-0 bg-[#E6FF2A]" />
              Building Trust
            </div>

            <div className="relative flex">
              {TRUST_SLIDES.map((slide, index) => (
                <h2
                  key={`text-${index}`}
                  aria-hidden={activeSlide !== index}
                  className={`font-heading text-[clamp(30px,2.188vw,42px)] font-medium leading-[1.1] tracking-[-0.01em] text-[#F7F7F7] transition-all duration-500 max-[1280px]:text-[38px] max-[1024px]:text-[32px] max-[768px]:text-[26px] max-[480px]:text-[23px] ${
                    activeSlide === index
                      ? 'relative translate-y-0 opacity-100 z-10'
                      : 'absolute top-0 left-0 pointer-events-none translate-y-3 opacity-0 -z-10'
                  }`}
                >
                  {slide.text}
                </h2>
              ))}
            </div>
          </div>

          <div className="mt-[clamp(20px,2vw,40px)] flex h-[36px] w-full items-end justify-between max-[768px]:mt-4">
            <div className="flex h-[10px] items-center gap-2" aria-label={`Slide ${activeSlide + 1} of ${TRUST_SLIDES.length}`}>
              {TRUST_SLIDES.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Go to slide ${index + 1}`}
                  onClick={() => setActiveSlide(index)}
                  className={`relative h-[10px] overflow-hidden rounded-[1px] transition-[width,background-color] duration-500 ${
                    activeSlide === index ? 'w-[54px] bg-[#BDC22E]' : 'w-[10px] bg-[#717171]'
                  }`}
                >
                  {activeSlide === index && <span className="absolute inset-y-0 left-0 w-full origin-left bg-[#E6FF2A] trust-progress" />}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => changeSlide('prev')}
                aria-label="Previous slide"
                className="flex h-[36px] w-[36px] items-center justify-center rounded-[10px] border border-[#D9D9D9] text-[#D9D9D9] transition-colors hover:border-[#E6FF2A] hover:text-[#E6FF2A] max-[768px]:h-8 max-[768px]:w-8"
              >
                <IconChevron direction="left" />
              </button>
              <button
                type="button"
                onClick={() => changeSlide('next')}
                aria-label="Next slide"
                className="flex h-[36px] w-[36px] items-center justify-center rounded-[10px] border border-[#D9D9D9] text-[#D9D9D9] transition-colors hover:border-[#E6FF2A] hover:text-[#E6FF2A] max-[768px]:h-8 max-[768px]:w-8"
              >
                <IconChevron />
              </button>
            </div>
          </div>
        </WideContainer>
      </section>

      {/* LEADERSHIP PRINCIPLES */}
      <section id="leadership-principles" className="relative isolate w-full scroll-mt-24 overflow-hidden bg-[#F7F7F7] px-[6vw] py-[clamp(100px,8.125vw,156px)] max-[1199px]:px-[4vw]">
        {/* Layer 1: Lowest Layer - Vector Graphic */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[clamp(-8px,calc(5.729vw-32px),78px)] right-[clamp(-8px,calc(5.729vw-32px),78px)] top-[-50px] z-0 opacity-100 max-[1024px]:top-0"
        >
          <img
            src={`${ASSET_BASE}/Vector.svg`}
            alt=""
            aria-hidden="true"
            className="h-auto w-full max-w-none"
          />
        </div>

        {/* Layer 2: Gradient Fades (above Vector, below content) */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-[438px] bg-gradient-to-b from-[#F7F7F7] to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[438px] bg-gradient-to-t from-[#F7F7F7] via-[#F7F7F7]/60 to-transparent" />

        {/* Layer 3: Foreground Content */}
        <WideContainer className="relative z-20">
          <div className="mb-[clamp(32px,2.5vw,48px)] flex flex-col items-center gap-[clamp(20px,1.667vw,32px)] text-center">
            <div className="flex items-center justify-center gap-[10px] font-body text-[14px] font-extrabold uppercase leading-[1.3] tracking-[0.06em] text-[#1A3E9E] max-[768px]:text-[12px]">
              <span className="h-2 w-2 shrink-0 bg-[#1A3E9E]" />
              Our Leadership Principles
            </div>
            <h2 className="font-heading text-[clamp(48px,4.375vw,84px)] font-medium leading-none tracking-[-0.03em] text-[#101010]">
              The Standards That
              <br />
              Guide Every Decision
            </h2>
          </div>

          <div className="grid grid-cols-4 gap-[clamp(20px,1.563vw,30px)] max-[1280px]:grid-cols-2 max-[768px]:grid-cols-1">
            {PRINCIPLES.map((item) => (
              <article
                key={item.title}
                className="group relative flex min-h-[clamp(220px,15vw,290px)] min-w-0 flex-col items-start gap-2.5 overflow-hidden rounded-[16px] border border-transparent px-4 pb-4 pt-4 backdrop-blur-[8px] transition-all duration-300 hover:border-[#99A6E7]/60 hover:bg-[linear-gradient(135deg,rgba(26,62,158,0.15)_0%,rgba(133,166,255,0.25)_100%)] hover:shadow-[0_8px_40px_rgba(26,62,158,0.18)]"
                style={{
                  background: 'linear-gradient(79deg, rgba(26,62,158,.0375) 13.31%, rgba(133,166,255,.075) 132.94%)',
                }}
              >
                <div className="relative z-10 flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-lg border border-[#99A6E7] bg-[rgba(153,166,231,.35)] text-[#101010] transition-colors duration-300 group-hover:border-[#99A6E7] group-hover:bg-[rgba(26,62,158,0.35)]">
                  <PrincipleIcon type={item.icon} />
                </div>
                <h3 className="relative z-10 whitespace-pre-line font-heading text-[clamp(23px,2.188vw,41px)] font-medium leading-[1.1] tracking-[-0.01em] text-[#424242]">
                  {item.title}
                </h3>
                <p className="relative z-10 font-body text-[clamp(10px,0.75vw,11.5px)] font-normal leading-[1.5] text-[#424242]">
                  {item.desc}
                </p>
              </article>
            ))}
          </div>
        </WideContainer>
      </section>

      {/* OTHER INFORMATION */}
      <section className="w-full bg-[rgba(153,166,231,.10)] px-[6vw] py-[clamp(80px,6.563vw,126px)] max-[1199px]:px-[4vw]">
        <WideContainer>
          <h2 className="mb-[clamp(32px,2.5vw,48px)] text-center font-heading text-[clamp(48px,4.375vw,84px)] font-medium leading-none tracking-[-0.03em] text-[#101010]">
            Explore Other Information
          </h2>

          <div className="grid grid-cols-2 gap-[clamp(20px,1.563vw,30px)] max-[768px]:grid-cols-1">
            <Link
              href="/about-us/corporate-profile"
              className="group relative overflow-hidden rounded-[24px] border border-transparent bg-[#8C8C8C] no-underline aspect-[835/500] transition-all duration-500 hover:border-white/80 hover:shadow-[0_18px_45px_rgba(0,0,0,0.18)] focus-visible:border-white focus-visible:outline-none"
            >
              <img
                src="/images/about-us/cards/corporate-profile-card.webp"
                alt="Corporate Profile"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
              />
              <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/30 group-focus-visible:bg-black/30" />
              <div className="absolute inset-x-0 bottom-0 h-[72%] bg-gradient-to-b from-transparent to-black" />
              <div className="absolute inset-x-[clamp(24px,2.5vw,48px)] bottom-[clamp(24px,2vw,38px)] z-10 flex flex-col items-start gap-[18px]">
                <h3 className="font-heading text-[clamp(28px,2.917vw,56px)] font-semibold leading-[1.1] tracking-[-0.01em] text-[#F7F7F7]">Corporate Profile</h3>
                <span className="flex max-h-0 items-center gap-3 overflow-hidden rounded-full bg-[#E6FF2A] px-0 py-0 font-body text-[clamp(13px,0.938vw,18px)] font-semibold text-[#101010] opacity-0 transition-all duration-500 group-hover:max-h-16 group-hover:px-7 group-hover:py-3 group-hover:opacity-100 group-focus-visible:max-h-16 group-focus-visible:px-7 group-focus-visible:py-3 group-focus-visible:opacity-100">LEARN MORE <span aria-hidden="true">›</span></span>
              </div>
            </Link>

            <Link
              href="/about-us/ecosystem-philosophy"
              className="group relative overflow-hidden rounded-[24px] border border-transparent bg-[#8C8C8C] no-underline aspect-[835/500] transition-all duration-500 hover:border-white/80 hover:shadow-[0_18px_45px_rgba(0,0,0,0.18)] focus-visible:border-white focus-visible:outline-none"
            >
              <img
                src="/images/about-us/cards/ecosystem-philosophy-card.webp"
                alt="Ecosystem Philosophy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
              />
              <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/30 group-focus-visible:bg-black/30" />
              <div className="absolute inset-x-0 bottom-0 h-[72%] bg-gradient-to-b from-transparent to-black" />
              <div className="absolute inset-x-[clamp(24px,2.5vw,48px)] bottom-[clamp(24px,2vw,38px)] z-10 flex flex-col items-start gap-[18px]">
                <h3 className="font-heading text-[clamp(28px,2.917vw,56px)] font-semibold leading-[1.1] tracking-[-0.01em] text-[#F7F7F7]">Ecosystem Philosophy</h3>
                <span className="flex max-h-0 items-center gap-3 overflow-hidden rounded-full bg-[#E6FF2A] px-0 py-0 font-body text-[clamp(13px,0.938vw,18px)] font-semibold text-[#101010] opacity-0 transition-all duration-500 group-hover:max-h-16 group-hover:px-7 group-hover:py-3 group-hover:opacity-100 group-focus-visible:max-h-16 group-focus-visible:px-7 group-focus-visible:py-3 group-focus-visible:opacity-100">LEARN MORE <span aria-hidden="true">›</span></span>
              </div>
            </Link>
          </div>
        </WideContainer>
      </section>

      {/* Existing CTA component — unchanged */}
      <BeyondExpectations />

      <style jsx global>{`
        .company-leadership-page,
        .company-leadership-page * {
          box-sizing: border-box;
        }

        @keyframes leadershipTrustProgress {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }

        .company-leadership-page .trust-progress {
          animation: leadershipTrustProgress 6.5s linear forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .company-leadership-page *,
          .company-leadership-page *::before,
          .company-leadership-page *::after {
            scroll-behavior: auto !important;
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </main>
  );
}

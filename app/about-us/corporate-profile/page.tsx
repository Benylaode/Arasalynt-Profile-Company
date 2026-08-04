'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import BeyondExpectations from '@/components/sections/BeyondExpectations/BeyondExpectations';

const IconChevronDown = ({ size = 32 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 21" fill="none" aria-hidden="true">
    <path d="M2 2.25 16 17.5 30 2.25" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconSliderArrow = ({ direction }: { direction: 'left' | 'right' }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    className={direction === 'left' ? 'rotate-180' : ''}
  >
    <path d="M8 4.5 15.5 12 8 19.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const FOUNDATION_SLIDES = [
  {
    src: '/images/corporate-profile/team-discussion.webp',
    alt: 'Arsalynk team discussing a project',
    position: 'center 47%',
  },
  {
    src: '/images/corporate-profile/team-collaboration.webp',
    alt: 'Arsalynk team collaborating around a laptop',
    position: 'center 56%',
  },
  {
    src: '/images/corporate-profile/team-event.webp',
    alt: 'Arsalynk team at a company event',
    position: 'center 52%',
  },
];

const SERVICES = [
  {
    title: ['Enterprise Data', '& Intelligence'],
    image: '/images/corporate-profile/service-data.webp',
    alt: 'Enterprise data and intelligence illustration',
  },
  {
    title: ['Customer', 'Acquisition'],
    image: '/images/corporate-profile/service-data.webp',
    alt: 'Customer acquisition illustration',
  },
  {
    title: ['Mission-Critical', 'Broadcast'],
    image: '/images/corporate-profile/service-broadcast.webp',
    alt: 'Mission-critical broadcast illustration',
  },
  {
    title: ['Integrated', 'Execution'],
    image: '/images/corporate-profile/service-execution.webp',
    alt: 'Integrated execution illustration',
  },
];

const OTHER_INFORMATION = [
  {
    href: '/about-us/company-leadership',
    title: 'Company Leadership',
    image: '/images/shared/leadership-portrait.webp',
    imagePosition: 'center 53%',
  },
  {
    href: '/about-us/ecosystem-philosophy',
    title: 'Ecosystem Philosophy',
    image: '/images/shared/ecosystem-philosophy-card.webp',
    imagePosition: 'center center',
  },
];

const WideContainer = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`mx-auto w-full max-w-[1700px] ${className}`}>
    {children}
  </div>
);

const NarrowContainer = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`mx-auto w-full max-w-[1408px] ${className}`}>
    {children}
  </div>
);

function SectionLabel({ children, theme = 'blue' }: { children: React.ReactNode; theme?: 'blue' | 'lime' }) {
  const color = theme === 'lime' ? 'text-[#E6FF2A]' : 'text-[#1A3E9E]';
  const dot = theme === 'lime' ? 'bg-[#E6FF2A]' : 'bg-[#1A3E9E]';

  return (
    <div className={`flex items-center justify-center gap-[10px] font-body text-[13px] font-semibold leading-[1.3] tracking-[0.06em] ${color} max-[1024px]:text-[11px] max-[640px]:text-[9px]`}>
      <span className={`h-2 w-2 shrink-0 ${dot}`} aria-hidden="true" />
      <span>{children}</span>
    </div>
  );
}

export default function CorporateProfilePage() {
  const [activeSlide, setActiveSlide] = useState(1);
  const [isSliderPaused, setIsSliderPaused] = useState(false);

  useEffect(() => {
    if (isSliderPaused) return;

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % FOUNDATION_SLIDES.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, [isSliderPaused]);

  const changeSlide = (direction: -1 | 1) => {
    setActiveSlide((current) => (current + direction + FOUNDATION_SLIDES.length) % FOUNDATION_SLIDES.length);
  };

  const getSlideOffset = (index: number) => {
    let offset = index - activeSlide;
    const half = Math.floor(FOUNDATION_SLIDES.length / 2);
    if (offset > half) offset -= FOUNDATION_SLIDES.length;
    if (offset < -half) offset += FOUNDATION_SLIDES.length;
    return offset;
  };

  const handleScrollDown = () => {
    document.getElementById('corporate-foundation')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <main className="relative w-full overflow-x-hidden bg-[#F7F7F7] text-[#101010]">
      {/* HERO */}
      <section
        id="hero"
        aria-label="Corporate Profile Hero"
        className="relative h-[clamp(520px,41.667vw,800px)] w-full overflow-hidden rounded-b-[42px] bg-[#050914] max-[640px]:rounded-b-[24px]"
      >
        <img
          src="/images/corporate-profile/hero-globe.webp"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-auto w-[127.76vw] max-w-none -translate-x-1/2 -translate-y-[71.4%] select-none max-[768px]:h-full max-[768px]:w-auto max-[768px]:min-w-full max-[768px]:-translate-y-1/2 max-[768px]:object-cover max-[768px]:object-[center_60%]"
        />

        <div className="pointer-events-none absolute inset-0 bg-black/20" aria-hidden="true" />
        <div
          className="pointer-events-none absolute inset-0 opacity-90"
          aria-hidden="true"
          style={{ background: 'linear-gradient(180deg, #1A3E9E 0%, rgba(26,62,158,0) 71.94%)', mixBlendMode: 'color' }}
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[698px]"
          aria-hidden="true"
          style={{ background: 'linear-gradient(180deg, rgba(16,16,16,0) 9.62%, #101010 100%)' }}
        />
        <div
          className="pointer-events-none absolute -right-[8vw] -top-[14%] h-[1120px] w-[64vw] opacity-[0.06]"
          aria-hidden="true"
          style={{
            background: 'linear-gradient(180deg, rgba(234,234,234,0) 0%, #EAEAEA 29.81%, rgba(234,234,234,0) 100%)',
            clipPath: 'polygon(22% 0, 100% 0, 78% 100%, 0 100%)',
          }}
        />

        <div className="absolute left-1/2 top-1/2 z-10 flex w-full max-w-[90vw] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-6 text-center">
          <p className="font-body text-[6px] font-bold leading-[1.3] tracking-[0.06em] text-[#E6FF2A] max-[768px]:text-[5px]">
            HOME&nbsp;&nbsp;&gt;&nbsp;&nbsp;ABOUT US&nbsp;&nbsp;&gt;&nbsp;&nbsp;CORPORATE PROFILE
          </p>
          <h1 className="font-heading text-[clamp(56px,5vw,96px)] font-medium leading-none tracking-[-0.02em] text-[#F7F7F7]">
            Corporate Profile
          </h1>
        </div>

        <button
          type="button"
          onClick={handleScrollDown}
          aria-label="Scroll to corporate profile content"
          className="absolute left-1/2 bottom-[clamp(34px,4.5vw,71px)] z-20 flex h-[clamp(56px,4.167vw,80px)] w-[clamp(56px,4.167vw,80px)] -translate-x-1/2 items-center justify-center rounded-full border border-white/20 text-white backdrop-blur-[4px] transition-transform duration-300 hover:scale-105"
          style={{ background: 'linear-gradient(230.45deg, rgba(247,247,247,.21) -7.74%, rgba(247,247,247,.105) 81.5%)' }}
        >
          <IconChevronDown size={32} />
        </button>
      </section>

      {/* OUR FOUNDATION */}
      <section id="corporate-foundation" className="relative flex w-full scroll-mt-20 flex-col items-center bg-[#F7F7F7] pt-[clamp(72px,5.729vw,110px)] pb-[clamp(72px,5.729vw,110px)]">
        <div className="flex w-full max-w-[896px] px-6 flex-col items-center gap-[clamp(20px,1.667vw,32px)] text-center">
          <SectionLabel>OUR FOUNDATION</SectionLabel>
          <h2 className="font-heading text-[clamp(48px,4.375vw,84px)] font-medium leading-none tracking-[-0.03em] text-[#101010]">
            The Backbone<br />of Modern Enterprise
          </h2>
          <p className="font-body w-full text-[clamp(15px,1.042vw,20px)] font-normal leading-[1.6] tracking-[0.02em] text-[#292929]">
            Arsalynk Group was founded on a singular realization: modern enterprises<br className="max-[768px]:hidden" /> do not fail due to a lack of ambition; they stall due to fragmentation.
          </p>
        </div>

        <div
          className="relative mt-[clamp(32px,2.5vw,48px)] h-[clamp(500px,39.583vw,760px)] w-full overflow-hidden"
          onMouseEnter={() => setIsSliderPaused(true)}
          onMouseLeave={() => setIsSliderPaused(false)}
        >
          {FOUNDATION_SLIDES.map((slide, index) => {
            const offset = getSlideOffset(index);
            const isActive = offset === 0;

            return (
              <article
                key={slide.src}
                data-offset={offset}
                className={`cp-slide absolute left-1/2 top-0 h-full overflow-hidden rounded-[32px] transition-[transform,filter,opacity] duration-700 ease-[cubic-bezier(.22,1,.36,1)] max-[640px]:rounded-[18px] ${
                  isActive ? 'z-20 opacity-100' : 'z-10 opacity-60'
                }`}
                aria-hidden={!isActive}
              >
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="h-full w-full object-cover"
                  style={{ objectPosition: slide.position }}
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-b from-transparent to-black/70" aria-hidden="true" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[6px] bg-white/40" aria-hidden="true">
                  {isActive && (
                    <span
                      key={`${activeSlide}-${isSliderPaused}`}
                      className="cp-progress block h-full origin-left bg-[#E6FF2A]"
                      style={{ animationPlayState: isSliderPaused ? 'paused' : 'running' }}
                    />
                  )}
                </div>
              </article>
            );
          })}

          <div className="pointer-events-none absolute inset-y-0 left-0 z-30 w-[250px] max-[768px]:w-[70px]" style={{ background: 'linear-gradient(90deg, #101010 0%, rgba(16,16,16,0) 100%)' }} />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-30 w-[250px] max-[768px]:w-[70px]" style={{ background: 'linear-gradient(270deg, #101010 0%, rgba(16,16,16,0) 100%)' }} />

          <button
            type="button"
            onClick={() => changeSlide(-1)}
            aria-label="Previous corporate photo"
            className="absolute left-[5.75vw] top-1/2 z-40 flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-[6px] border border-[#4C4C4C] text-[#D9D9D9] transition-colors hover:border-white hover:text-white max-[768px]:left-5 max-[768px]:h-12 max-[768px]:w-12"
          >
            <IconSliderArrow direction="left" />
          </button>
          <button
            type="button"
            onClick={() => changeSlide(1)}
            aria-label="Next corporate photo"
            className="absolute right-[5.75vw] top-1/2 z-40 flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-[6px] border border-[#4C4C4C] text-[#D9D9D9] transition-colors hover:border-white hover:text-white max-[768px]:right-5 max-[768px]:h-12 max-[768px]:w-12"
          >
            <IconSliderArrow direction="right" />
          </button>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="relative w-full overflow-hidden bg-[linear-gradient(180deg,#101010_0%,#1A3E9E_95.29%)] px-[clamp(24px,13.333vw,256px)] py-[clamp(100px,8.54vw,164px)] text-white">
        <img
          src="/images/shared/network-overlay.webp"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[-31px] left-1/2 w-[103.02vw] max-w-none -translate-x-1/2 opacity-[0.30] mix-blend-screen"
        />
        <div className="pointer-events-none absolute inset-x-[-51px] top-0 h-[440px] bg-gradient-to-b from-[#101010] via-[#101010]/80 to-transparent" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-x-[-51px] bottom-[-73px] h-[512px] bg-gradient-to-t from-[#172D69] via-[#172D69]/75 to-transparent" aria-hidden="true" />

        <NarrowContainer className="relative z-10 flex flex-col items-center gap-[clamp(64px,5.2vw,100px)]">
          <div className="flex w-full flex-col items-center gap-[clamp(20px,1.667vw,32px)] text-center">
            <SectionLabel theme="lime">OUR VISION</SectionLabel>
            <h2 className="font-heading text-[clamp(40px,3.333vw,64px)] font-medium leading-[1.2] tracking-[-0.02em] text-[#F7F7F7]">
              We envision a future where enterprises thrive<br className="max-[1024px]:hidden" /> through one unified ecosystem built for growth,<br className="max-[1024px]:hidden" /> resilience, and execution
            </h2>
          </div>

          <div className="flex w-full flex-col items-center gap-[clamp(20px,1.667vw,32px)] text-center">
            <SectionLabel theme="lime">MISSION</SectionLabel>
            <p className="font-body text-[clamp(18px,1.458vw,28px)] font-normal leading-[1.6] tracking-[-0.02em] text-[#F7F7F7]">
              Our mission is to make corporate execution flawless,<br className="max-[768px]:hidden" /> predictable, and remarkably capital-efficient.
            </p>
          </div>
        </NarrowContainer>
      </section>

      {/* OUR CAPABILITIES */}
      <section className="relative w-full overflow-hidden bg-[#F7F7F7] px-[clamp(24px,5.729vw,110px)] py-[clamp(100px,8.125vw,156px)]">
        <img
          src="/images/shared/network-overlay.webp"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[-22%] w-[104%] max-w-none -translate-x-1/2 opacity-[0.09] mix-blend-multiply"
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[438px] bg-gradient-to-b from-[#F7F7F7] to-transparent" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[438px] bg-gradient-to-t from-[#F7F7F7]/90 to-transparent" aria-hidden="true" />

        <WideContainer className="relative z-10 flex flex-col gap-12">
          <div className="flex flex-col items-center gap-[clamp(20px,1.667vw,32px)] text-center">
            <SectionLabel>OUR CAPABILITIES</SectionLabel>
            <h2 className="font-heading text-[clamp(48px,4.375vw,84px)] font-medium leading-none tracking-[-0.03em] text-[#101010]">
              Make Sustainable<br />Business Excellence
            </h2>
          </div>

          <div className="grid grid-cols-4 gap-[clamp(20px,1.563vw,30px)] max-[1024px]:grid-cols-2 max-[640px]:grid-cols-1">
{SERVICES.map((service, index) => (
  <article
    key={`${service.title.join('-')}-${index}`}
    className="relative isolate flex flex-col gap-5 overflow-hidden rounded-[12px] border border-[#D9D9D9] bg-[rgba(153,166,231,0.10)] p-4 backdrop-blur-[12.5px]"
    style={{ WebkitBackdropFilter: 'blur(12.5px)' }}
  >
    {/* Image */}
    <div className="relative w-full aspect-[4/3] overflow-hidden rounded-[10px] bg-[#E8EBFF]">
      <img
        src={service.image}
        alt={service.alt}
        className="h-full w-full object-cover"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-black/[0.05]"
        aria-hidden="true"
      />
    </div>

    {/* Title */}
    <h3 className="font-heading text-[clamp(24px,2.188vw,42px)] font-medium leading-[1.1] tracking-[-0.01em] text-[#1A3E9E]">
      {service.title[0]}
      <br />
      {service.title[1]}
    </h3>
  </article>
))}
          </div>
        </WideContainer>
      </section>

      {/* EXPLORE OTHER INFORMATION */}
      <section className="w-full bg-[rgba(153,166,231,0.10)] px-[clamp(24px,5.729vw,110px)] py-[clamp(80px,6.563vw,126px)]">
        <WideContainer className="flex flex-col gap-[clamp(32px,2.5vw,48px)]">
          <h2 className="text-center font-heading text-[clamp(48px,4.375vw,84px)] font-medium leading-none tracking-[-0.03em] text-[#101010]">
            Explore Other Information
          </h2>

          <div className="grid grid-cols-2 gap-[clamp(20px,1.563vw,30px)] max-[768px]:grid-cols-1">
            {OTHER_INFORMATION.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative isolate overflow-hidden rounded-[24px] bg-[#8C8C8C] no-underline aspect-[835/500]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                  style={{ objectPosition: item.imagePosition }}
                />
                <div className="absolute inset-0 bg-black/20" aria-hidden="true" />
                <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-black via-black/70 to-transparent" aria-hidden="true" />
                <h3 className="absolute bottom-[34px] left-[clamp(24px,2.5vw,48px)] z-10 font-heading text-[clamp(28px,2.917vw,56px)] font-semibold leading-[1.1] tracking-[-0.01em] text-[#F7F7F7]">
                  {item.title}
                </h3>
              </Link>
            ))}
          </div>
        </WideContainer>
      </section>

      {/* Komponen ini tidak diubah */}
      <BeyondExpectations />

      <style jsx global>{`
        .cp-slide {
          width: min(1413px, 73.59375vw);
        }

        .cp-slide[data-offset='0'] {
          transform: translate3d(-50%, 0, 0);
        }

        .cp-slide[data-offset='-1'] {
          transform: translate3d(calc(-50% - min(1413px, 73.59375vw) - 16px), 0, 0);
        }

        .cp-slide[data-offset='1'] {
          transform: translate3d(calc(-50% + min(1413px, 73.59375vw) + 16px), 0, 0);
        }

        .cp-progress {
          animation: corporateProfileProgress 6s linear forwards;
        }

        @keyframes corporateProfileProgress {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }

        @media (max-width: 767px) {
          .cp-slide {
            width: 84vw;
          }

          .cp-slide[data-offset='-1'] {
            transform: translate3d(calc(-50% - 84vw - 12px), 0, 0);
          }

          .cp-slide[data-offset='1'] {
            transform: translate3d(calc(-50% + 84vw + 12px), 0, 0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .cp-slide,
          .cp-progress {
            transition: none !important;
            animation: none !important;
          }
        }
      `}</style>
    </main>
  );
}

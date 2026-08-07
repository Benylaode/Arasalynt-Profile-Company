'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { HERO_SLIDES } from '@/lib/constants';

const SLIDE_DURATION = 6000;
const CONTENT_FADE_DURATION = 280;

const SLIDE_EYEBROWS = [
  'THE ARSALYNK ECOSYSTEM',
  '01 — DISCOVER',
  '02 — ARCHITECT',
  '03 — CONNECT',
] as const;

type ArrowDirection = 'left' | 'right';

function ArrowIcon({ direction }: { direction: ArrowDirection }) {
  return (
    <svg
      width="10"
      height="17"
      viewBox="0 0 12 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {direction === 'left' ? (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 10L10.065 20L11.915 18.166L3.694 10L11.915 1.837L10.065 0L0 10Z"
          fill="currentColor"
        />
      ) : (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.92 10L1.85 0L0 1.834L8.22 10L0 18.163L1.85 20L11.92 10Z"
          fill="currentColor"
        />
      )}
    </svg>
  );
}

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isContentVisible, setIsContentVisible] = useState(true);

  const transitionTimerRef = useRef<number | null>(null);
  const transitionLockRef = useRef(false);

  const totalSlides = HERO_SLIDES.length;

  const goToSlide = useCallback(
    (requestedIndex: number) => {
      if (totalSlides <= 1 || transitionLockRef.current) return;

      const nextIndex = (requestedIndex + totalSlides) % totalSlides;
      if (nextIndex === currentSlide) return;

      transitionLockRef.current = true;
      setIsContentVisible(false);
      setProgress(0);

      transitionTimerRef.current = window.setTimeout(() => {
        setCurrentSlide(nextIndex);

        window.requestAnimationFrame(() => {
          setIsContentVisible(true);
          transitionLockRef.current = false;
        });
      }, CONTENT_FADE_DURATION);
    },
    [currentSlide, totalSlides]
  );

  const nextSlide = useCallback(() => {
    goToSlide(currentSlide + 1);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(currentSlide - 1);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    if (totalSlides <= 1) return undefined;

    const tickDuration = 50;
    const progressStep = 100 / (SLIDE_DURATION / tickDuration);

    const progressInterval = window.setInterval(() => {
      setProgress((previousProgress) =>
        Math.min(previousProgress + progressStep, 100)
      );
    }, tickDuration);

    const slideTimeout = window.setTimeout(() => {
      goToSlide(currentSlide + 1);
    }, SLIDE_DURATION);

    return () => {
      window.clearInterval(progressInterval);
      window.clearTimeout(slideTimeout);
    };
  }, [currentSlide, goToSlide, totalSlides]);

  useEffect(() => {
    return () => {
      if (transitionTimerRef.current !== null) {
        window.clearTimeout(transitionTimerRef.current);
      }
    };
  }, []);

  if (totalSlides === 0) return null;

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative h-[clamp(650px,calc(100svh-80px),820px)] min-h-[650px] w-full overflow-hidden bg-[#101010] max-[1199px]:mt-[80px] max-[768px]:h-[821px] max-[768px]:min-h-[821px]"
    >
      {/*
       * ONE BACKGROUND PER SLIDE.
       * All images are mounted so the browser can preload them, but only the
       * active slide is visible. Do not put one shared hero image here.
       */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        {HERO_SLIDES.map((item, index) => (
          <picture
            key={`hero-background-${item.id ?? index}`}
            className={`absolute inset-0 block transition-opacity duration-[900ms] ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {item.mobileBackgroundImage && (
              <source
                media="(max-width: 767px)"
                srcSet={item.mobileBackgroundImage}
              />
            )}

            <img
              src={item.backgroundImage}
              alt=""
              className="h-full w-full object-cover"
              style={{
                objectPosition: item.backgroundPosition ?? 'center center',
              }}
              draggable={false}
            />
          </picture>
        ))}
      </div>

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[1] bg-black/40" />

      {/* Shared overlays taken from the SVG geometry. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[32%] z-[1] h-[68%] opacity-[0.82]"
        style={{
          background:
            'linear-gradient(180deg, rgba(16,16,16,0) 0%, rgba(16,16,16,.34) 45%, #101010 100%)',
        }}
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_center,transparent_24%,rgba(5,9,20,.18)_72%,rgba(5,9,20,.48)_100%)]" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[77.216%] z-[2] h-[23.918%]"
        style={{
          background:
            'linear-gradient(180deg, rgba(16,16,16,0) 0%, #101010 100%)',
        }}
      />

      {/* Text and CTA belonging to the active slide. */}
      <div className="absolute inset-x-0 top-[54%] z-[5] -translate-y-1/2 px-[6vw] max-[1199px]:px-[4vw] max-[480px]:top-[49%] max-[480px]:px-[20px]">
        <div
          className={`mx-auto flex w-full flex-col items-center text-center transition-[opacity,transform] duration-[280ms] ease-out max-[480px]:max-w-[353px] max-[480px]:gap-[32px] ${
            isContentVisible
              ? 'translate-y-0 opacity-100'
              : '-translate-y-3 opacity-0'
          }`}
        >
          <div className="flex w-full flex-col items-center max-[480px]:gap-[12px]">
            <p className="mb-5 flex items-center gap-2.5 font-body text-[11px] font-bold uppercase tracking-[0.1em] text-[#E6FF2A] max-[480px]:mb-2 max-[480px]:text-[10px]"><span className="h-[7px] w-[7px] bg-[#E6FF2A]" />{SLIDE_EYEBROWS[currentSlide] ?? 'ARSALYNK'}</p>
            <h1 className="m-0 max-w-[1060px] whitespace-pre-line font-heading text-[clamp(54px,4.25vw,68px)] font-medium leading-[0.98] tracking-[-0.035em] text-[#F7F7F7] max-[768px]:max-w-[578px] max-[768px]:text-[clamp(34px,6.48vw,46px)] max-[480px]:w-full max-[480px]:text-[37px] max-[480px]:leading-[1.02] max-[480px]:tracking-[-0.025em]">
              {slide.headline}
            </h1>

            <p className="mx-auto pt-[24px] max-w-[820px] whitespace-pre-line font-body font-normal text-[clamp(14px,0.938vw,18px)] leading-[1.65] tracking-[0.01em] text-white/75 max-[480px]:w-full max-[480px]:pt-1 max-[480px]:text-[13px] max-[480px]:leading-[1.55] max-[480px]:tracking-normal max-[480px]:text-[#F7F7F7]">
              {slide.body}
            </p>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3 max-[768px]:mt-7 max-[480px]:mt-0 max-[480px]:w-full max-[480px]:flex-col max-[480px]:gap-[8px]">
            <Link
              href={slide.primaryCta.href}
              className="group inline-flex h-12 min-w-[180px] items-center justify-center gap-4 rounded-full bg-[#E6FF2A] px-6 font-body text-[13px] font-medium tracking-[0.035em] uppercase text-[#101010] no-underline transition-[background-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-[#FBFCDC] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E6FF2A] max-[768px]:h-11 max-[768px]:text-[12px] max-[480px]:h-[55px] max-[480px]:w-full max-[480px]:px-[32px] max-[480px]:text-[16px] max-[480px]:leading-[1.3] max-[480px]:tracking-normal"
            >
              {slide.primaryCta.label}
              <span aria-hidden="true" className="text-lg transition-transform duration-300 group-hover:translate-x-1">›</span>
            </Link>

            <Link
              href={slide.secondaryCta.href}
              className="group inline-flex h-12 min-w-[180px] items-center justify-center gap-4 rounded-full border border-[#E6FF2A] bg-transparent px-6 font-body text-[13px] font-medium tracking-[0.035em] uppercase text-[#F7F7F7] no-underline transition-[background-color,color,transform] duration-300 hover:-translate-y-0.5 hover:bg-[#E6FF2A] hover:text-[#101010] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E6FF2A] max-[768px]:h-11 max-[768px]:text-[12px] max-[480px]:h-[55px] max-[480px]:w-full max-[480px]:px-[32px] max-[480px]:text-[16px] max-[480px]:leading-[1.3] max-[480px]:tracking-normal"
            >
              {slide.secondaryCta.label}
              <span aria-hidden="true" className="text-lg transition-transform duration-300 group-hover:translate-x-1">›</span>
            </Link>
          </div>
        </div>
      </div>

      {totalSlides > 1 && (
        <div className="pointer-events-none absolute inset-x-[6%] top-1/2 z-[6] hidden -translate-y-1/2 items-center justify-between md:flex max-[767px]:inset-x-auto max-[767px]:bottom-[100px] max-[767px]:right-[4%] max-[767px]:top-auto max-[767px]:flex max-[767px]:translate-y-0 max-[767px]:gap-[8px]">
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous slide"
            className="pointer-events-auto inline-flex h-[48px] w-[48px] items-center justify-center rounded-[8px] border border-white/30 bg-black/15 text-[#F7F7F7] transition-[border-color,background-color] duration-200 hover:border-white/70 hover:bg-white/[0.10] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E6FF2A] max-[767px]:h-[42px] max-[767px]:w-[42px]"
          >
            <ArrowIcon direction="left" />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next slide"
            className="pointer-events-auto inline-flex h-[48px] w-[48px] items-center justify-center rounded-[8px] border border-white/30 bg-black/15 text-[#F7F7F7] transition-[border-color,background-color] duration-200 hover:border-white/70 hover:bg-white/[0.10] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E6FF2A] max-[767px]:h-[42px] max-[767px]:w-[42px]"
          >
            <ArrowIcon direction="right" />
          </button>
        </div>
      )}

      {totalSlides > 1 && (
        <div
          className="absolute bottom-[52px] left-[6%] z-[6] flex h-[8px] items-center gap-2 max-[768px]:bottom-[100px] max-[768px]:left-[4%]"
          role="tablist"
          aria-label="Hero slides"
        >
          {HERO_SLIDES.map((item, index) => {
            const isActive = index === currentSlide;

            return (
              <button
                key={`hero-indicator-${item.id ?? index}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => goToSlide(index)}
                className={`relative h-[5px] overflow-hidden rounded-full border-0 p-0 transition-[width,background-color] duration-300 ${
                  isActive
                    ? 'w-[48px] bg-white/25'
                    : 'w-[8px] bg-white/45 hover:bg-white/70'
                }`}
              >
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-y-0 left-0 rounded-full bg-[#E6FF2A] transition-[width] duration-100 ease-linear"
                    style={{ width: `${progress}%` }}
                  />
                )}
              </button>
            );
          })}
        </div>
      )}
    </section>
  );
}

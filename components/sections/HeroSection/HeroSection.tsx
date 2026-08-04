'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { HERO_SLIDES } from '@/lib/constants';

const SLIDE_DURATION = 6000;
const CONTENT_FADE_DURATION = 280;

type ArrowDirection = 'left' | 'right';

function ArrowIcon({ direction }: { direction: ArrowDirection }) {
  return (
    <svg
      width="8"
      height="14"
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
      className="relative h-[710px] min-h-[520px] w-full overflow-hidden bg-[#101010] max-[1024px]:h-[630px] max-[768px]:h-[570px] max-[768px]:min-h-[480px]"
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

      {/* Shared overlays taken from the SVG geometry. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[37.732%] z-[1] h-[63.402%] opacity-[0.65]"
        style={{
          background:
            'linear-gradient(180deg, rgba(16,16,16,0) 9.61538%, #101010 100%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[37.732%] z-[1] h-[63.402%] opacity-[0.65]"
        style={{
          background:
            'linear-gradient(180deg, rgba(16,16,16,0) 9.61538%, #101010 100%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[77.216%] z-[2] h-[23.918%]"
        style={{
          background:
            'linear-gradient(180deg, rgba(16,16,16,0) 0%, #101010 100%)',
        }}
      />

      {/* Text and CTA belonging to the active slide - 60% from top (40% from bottom) */}
      <div className="absolute inset-x-0 top-[60%] -translate-y-1/2 z-[5] px-6 max-[480px]:px-4">
        <div
          className={`mx-auto flex w-full flex-col items-center text-center transition-all duration-[280ms] ease-out ${
            isContentVisible
              ? 'translate-y-0 opacity-100'
              : '-translate-y-3 opacity-0'
          }`}
        >
          <h1 className="type-t3 m-0 max-w-[1150px] whitespace-pre-line text-[#F7F7F7] max-[768px]:max-w-[680px] max-[768px]:text-[clamp(34px,8.5vw,52px)]">
            {slide.headline}
          </h1>

          <p className="mx-auto max-w-[880px] font-normal text-[clamp(15px,1.042vw,20px)] leading-[1.6] tracking-[0.02em] text-[#D9D9D9]">
            {slide.body}
          </p>

          <div className="mt-8 flex items-center justify-center gap-3 max-[768px]:mt-6 max-[600px]:w-full max-[600px]:flex-col max-[600px]:gap-3">
            <a
              href={slide.primaryCta.href}
              className="inline-flex h-11 w-[160px] items-center justify-center rounded-full bg-[#E6FF2A] px-4 font-body text-[14px] font-extrabold tracking-[0.04em] uppercase text-[#101010] no-underline transition-transform duration-200 hover:scale-[1.025] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E6FF2A] max-[768px]:h-10 max-[768px]:text-[13px] max-[600px]:w-full max-[600px]:max-w-[300px]"
            >
              {slide.primaryCta.label}
            </a>

            <a
              href={slide.secondaryCta.href}
              className="inline-flex h-11 w-[175px] items-center justify-center rounded-full border border-[#E6FF2A] bg-transparent px-4 font-body text-[14px] font-extrabold tracking-[0.04em] uppercase text-[#F7F7F7] no-underline transition-colors duration-200 hover:bg-[#E6FF2A]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E6FF2A] max-[768px]:h-10 max-[768px]:text-[13px] max-[600px]:w-full max-[600px]:max-w-[300px]"
            >
              {slide.secondaryCta.label}
            </a>
          </div>
        </div>
      </div>

      {totalSlides > 1 && (
        <div className="pointer-events-none absolute inset-x-[5.755%] top-1/2 z-[6] hidden -translate-y-1/2 items-center justify-between md:flex">
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous slide"
            className="pointer-events-auto inline-flex h-[36px] w-[36px] items-center justify-center rounded-[5px] border border-[#4C4C4C] bg-transparent text-[#D9D9D9] transition-colors duration-200 hover:border-[#D9D9D9] hover:bg-white/[0.08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E6FF2A]"
          >
            <ArrowIcon direction="left" />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next slide"
            className="pointer-events-auto inline-flex h-[36px] w-[36px] items-center justify-center rounded-[5px] border border-[#4C4C4C] bg-transparent text-[#D9D9D9] transition-colors duration-200 hover:border-[#D9D9D9] hover:bg-white/[0.08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E6FF2A]"
          >
            <ArrowIcon direction="right" />
          </button>
        </div>
      )}

      {totalSlides > 1 && (
        <div
          className="absolute bottom-[60px] left-[5.729%] z-[6] flex h-[10px] items-center gap-2 max-[768px]:bottom-8 max-[768px]:left-1/2 max-[768px]:-translate-x-1/2"
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
                className={`relative h-[10px] overflow-hidden rounded-[1px] border-0 p-0 transition-[width,background-color] duration-300 ${
                  isActive
                    ? 'w-[54px] bg-[#717171]/45'
                    : 'w-[10px] bg-[#717171] hover:bg-[#929292]'
                }`}
              >
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-y-0 left-0 rounded-[1px] bg-[#BDC22E] transition-[width] duration-100 ease-linear"
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

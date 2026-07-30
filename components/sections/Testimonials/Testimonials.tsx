'use client';

import { useEffect, useState } from 'react';
import { TESTIMONIALS_DUMMY_DATA } from '@/lib/db/dummy';

const SLIDE_DURATION = 6000;

/* Quote icon mengikuti bentuk SVG referensi */
const QuoteIcon = () => (
  <svg viewBox="0 0 45 35" fill="none" aria-hidden="true" className="block h-full w-full">
    <path
      d="M45 18.695V35H27.173V24.317C27.173 13.916 29.473 7.731 34.073 0H42.556C39.681 6.747 37.812 11.807 37.812 18.695H45ZM17.827 18.695V35H0V24.317C0 13.916 2.444 7.731 6.901 0H15.383C12.508 6.747 10.783 11.807 10.783 18.695H17.827Z"
      fill="#3248B4"
    />
  </svg>
);

const ChevronLeft = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-[18px] w-[18px]">
    <path d="m15 18-6-6 6-6" />
  </svg>
);

const ChevronRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-[18px] w-[18px]">
    <path d="m9 18 6-6-6-6" />
  </svg>
);

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = TESTIMONIALS_DUMMY_DATA;
  const totalSlides = testimonials.length;
  const active = testimonials[activeIndex];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % totalSlides);
  };

  const previousSlide = () => {
    setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Autoplay otomatis tanpa hambatan ref lock
  useEffect(() => {
    if (isPaused || totalSlides <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalSlides);
    }, SLIDE_DURATION);

    return () => clearInterval(interval);
  }, [isPaused, totalSlides]);

  return (
    <section
      id="testimonials"
      aria-label="Client testimonials"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative w-full overflow-hidden bg-[#F7F7F7]"
    >
      <style>{`
        @keyframes testiProgressFill {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
      `}</style>

      {/* DESKTOP: Kanvas 1920 × 842 */}
      <div className="relative mx-auto hidden aspect-[1920/842] w-full max-w-[1920px] overflow-hidden bg-[#F7F7F7] min-[1025px]:block">
        {/* Background logo - Ukuran dikurangi ~15% */}
        <img
          src="/images/componen/testi_bg.svg"
          alt=""
          aria-hidden="true"
          draggable={false}
          className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[105%] w-auto max-w-none -translate-x-1/2 -translate-y-1/2 select-none opacity-100"
        />

        {/* Content Slide */}
        <div className="absolute inset-0 z-10 transition-opacity duration-500 ease-in-out">
          {/* Quote icon: x 254, y 132 */}
          <div className="absolute left-[13.2291667%] top-[15.6769596%] h-[4.1567696%] w-[2.34375%]">
            <QuoteIcon />
          </div>

          {/* Author Info */}
          <div className="absolute left-[13.2291667%] top-[34.6793349%]">
            <div className="flex items-center gap-[18px]">
              <span aria-hidden="true" className="h-[8px] w-[8px] shrink-0 bg-[#1A3E9E]" />
              <h3 className="m-0 font-body text-[28px] font-bold leading-[1.2] tracking-[-0.025em] text-[#1A3E9E]">
                {active.name}
              </h3>
            </div>

            <p className="mt-[6px] font-body text-[20px] font-normal leading-[1.25] tracking-[-0.025em] text-[#101010]">
              {active.role}
            </p>
          </div>

          {/* Avatar */}
          <div className="absolute left-[81.5625%] top-[31.8289786%] aspect-square w-[5.2083333%] overflow-hidden rounded-[12px] bg-[#D9D9D9]">
            <img
              key={active.avatar}
              src={active.avatar}
              alt={active.name}
              draggable={false}
              className="h-full w-full object-cover grayscale scale-x-[-1]"
              style={{ objectPosition: '50% 60%' }}
            />
          </div>

          {/* Main Quote */}
          <blockquote className="absolute left-[13.28125%] right-[13.2291667%] top-[50.8313539%] m-0 font-body text-[clamp(28px,2.083333vw,36px)] font-medium leading-[1.2] tracking-[-0.035em] text-[#101010]">
            {active.text}
          </blockquote>
        </div>

        {/* Navigation Buttons — Ukuran dikurangi 10% (48px) */}
        <div className="absolute left-[13.2291667%] top-[75.5344418%] z-20 flex gap-[8px]">
          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous testimonial"
            className="flex h-[48px] w-[48px] items-center justify-center rounded-[10px] border border-[#D9D9D9] bg-transparent text-[#999999] transition-colors duration-200 hover:border-[#1A3E9E] hover:bg-[#1A3E9E]/[0.04] hover:text-[#1A3E9E] focus-visible:border-[#1A3E9E] focus-visible:text-[#1A3E9E] focus-visible:outline-none"
          >
            <ChevronLeft />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next testimonial"
            className="flex h-[48px] w-[48px] items-center justify-center rounded-[10px] border border-[#D9D9D9] bg-transparent text-[#999999] transition-colors duration-200 hover:border-[#1A3E9E] hover:bg-[#1A3E9E]/[0.04] hover:text-[#1A3E9E] focus-visible:border-[#1A3E9E] focus-visible:text-[#1A3E9E] focus-visible:outline-none"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Indicators dengan Progress Bar Animasi Bergerak di Kanan Bawah */}
        <div
          role="tablist"
          aria-label="Testimonial slides"
          className="absolute right-[13.2291667%] top-[80.760095%] z-20 flex h-[8px] items-center gap-[8px]"
        >
          {testimonials.map((t, index) => {
            const selected = index === activeIndex;

            return (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-label={`Show testimonial ${index + 1}`}
                onClick={() => setActiveIndex(index)}
                className={`relative h-[8px] shrink-0 overflow-hidden rounded-[2px] border-0 p-0 transition-all duration-300 ${
                  selected ? 'w-[48px] bg-[#D9D9D9]' : 'w-[8px] bg-[#D9D9D9] hover:bg-[#BFC3CF]'
                }`}
              >
                {selected && (
                  <span
                    key={`${activeIndex}-${isPaused}`}
                    className="absolute inset-0 bg-[#99A6E7]"
                    style={{
                      transformOrigin: 'left center',
                      animationName: 'testiProgressFill',
                      animationDuration: `${SLIDE_DURATION}ms`,
                      animationTimingFunction: 'linear',
                      animationFillMode: 'forwards',
                      animationPlayState: isPaused ? 'paused' : 'running',
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* MOBILE & TABLET */}
      <div className="relative mx-auto min-h-[700px] w-full overflow-hidden px-[clamp(1rem,5.6vw,6.75rem)] pb-[112px] pt-[72px] min-[1025px]:hidden max-[640px]:min-h-[720px] max-[640px]:px-[16px] max-[640px]:pt-[52px]">
        {/* Background logo mobile */}
        <img
          src="/images/componen/testi_bg.svg"
          alt=""
          aria-hidden="true"
          draggable={false}
          className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[90%] w-auto max-w-none -translate-x-1/2 -translate-y-1/2 select-none opacity-100"
        />

        <div className="relative z-10 mx-auto max-w-[760px] transition-opacity duration-500 ease-in-out">
          <div className="h-[35px] w-[45px]">
            <QuoteIcon />
          </div>

          <div className="mt-[72px] flex items-center justify-between gap-[24px] max-[640px]:mt-[54px] max-[640px]:items-start">
            <div>
              <div className="flex items-center gap-[12px]">
                <span aria-hidden="true" className="h-[7px] w-[7px] shrink-0 bg-[#1A3E9E]" />
                <h3 className="font-body text-[22px] font-bold leading-[1.2] tracking-[-0.025em] text-[#1A3E9E] max-[640px]:text-[17px]">
                  {active.name}
                </h3>
              </div>

              <p className="mt-[6px] font-body text-[16px] font-normal leading-[1.4] tracking-[-0.02em] text-[#101010] max-[640px]:max-w-[210px] max-[640px]:text-[13px]">
                {active.role}
              </p>
            </div>

            <div className="h-[88px] w-[88px] shrink-0 overflow-hidden rounded-[12px] bg-[#D9D9D9] max-[640px]:h-[72px] max-[640px]:w-[72px]">
              <img
                key={active.avatar}
                src={active.avatar}
                alt={active.name}
                draggable={false}
                className="h-full w-full object-cover grayscale scale-x-[-1]"
                style={{ objectPosition: '50% 60%' }}
              />
            </div>
          </div>

          <blockquote className="mt-[56px] font-body text-[clamp(22px,5vw,36px)] font-medium leading-[1.2] tracking-[-0.035em] text-[#101010] max-[640px]:mt-[44px]">
            {active.text}
          </blockquote>
        </div>

        {/* Mobile navigation buttons */}
        <div className="absolute bottom-[34px] left-[clamp(1rem,5.6vw,6.75rem)] z-20 flex gap-[8px] max-[640px]:bottom-[26px] max-[640px]:left-[16px]">
          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous testimonial"
            className="flex h-[48px] w-[48px] items-center justify-center rounded-[10px] border border-[#D9D9D9] bg-transparent text-[#999999] transition-colors hover:border-[#1A3E9E] hover:text-[#1A3E9E]"
          >
            <ChevronLeft />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next testimonial"
            className="flex h-[48px] w-[48px] items-center justify-center rounded-[10px] border border-[#D9D9D9] bg-transparent text-[#999999] transition-colors hover:border-[#1A3E9E] hover:text-[#1A3E9E]"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Mobile progress indicators di kanan bawah */}
        <div className="absolute bottom-[56px] right-[clamp(1rem,5.6vw,6.75rem)] z-20 flex h-[8px] items-center gap-[8px] max-[640px]:bottom-[48px] max-[640px]:right-[16px]">
          {testimonials.map((t, index) => {
            const selected = index === activeIndex;

            return (
              <button
                key={t.id}
                type="button"
                aria-label={`Show testimonial ${index + 1}`}
                onClick={() => setActiveIndex(index)}
                className={`relative h-[8px] shrink-0 overflow-hidden rounded-[2px] border-0 p-0 transition-all duration-300 ${
                  selected ? 'w-[48px] bg-[#D9D9D9]' : 'w-[8px] bg-[#D9D9D9]'
                }`}
              >
                {selected && (
                  <span
                    key={`${activeIndex}-${isPaused}`}
                    className="absolute inset-0 bg-[#99A6E7]"
                    style={{
                      transformOrigin: 'left center',
                      animationName: 'testiProgressFill',
                      animationDuration: `${SLIDE_DURATION}ms`,
                      animationTimingFunction: 'linear',
                      animationFillMode: 'forwards',
                      animationPlayState: isPaused ? 'paused' : 'running',
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

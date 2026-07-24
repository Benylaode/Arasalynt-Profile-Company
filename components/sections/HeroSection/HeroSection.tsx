'use client';

import { useState, useEffect, useCallback } from 'react';
import Button from '@/components/ui/Button/Button';
import SliderArrow from '@/components/ui/SliderArrow/SliderArrow';
import { HERO_SLIDES } from '@/lib/constants';

const SLIDE_DURATION = 6000; // 6 seconds per slide

/**
 * HeroSection — Full-viewport hero slider/carousel.
 *
 * Features:
 * - Auto-advancing slides with progress bar
 * - Manual navigation (arrows + dots)
 * - Gradient overlays on background
 * - Centered content with headline, body, and CTA buttons
 */
export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const totalSlides = HERO_SLIDES.length;

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);

      setTimeout(() => {
        setCurrentSlide(index);
        setProgress(0);
        setTimeout(() => setIsTransitioning(false), 100);
      }, 300);
    },
    [isTransitioning]
  );

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % totalSlides);
  }, [currentSlide, totalSlides, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + totalSlides) % totalSlides);
  }, [currentSlide, totalSlides, goToSlide]);

  // Auto-advance and progress interval setup
  useEffect(() => {
    const step = 100 / (SLIDE_DURATION / 50); // Update every 50ms
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + step;
      });
    }, 50);

    const slideTimeout = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
      setProgress(0);
    }, SLIDE_DURATION);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(slideTimeout);
    };
  }, [currentSlide, totalSlides]);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section className="relative w-full h-screen min-h-[700px] max-h-[970px] bg-[#0B0F19] overflow-hidden max-[1024px]:max-h-[850px] max-[768px]:max-h-none max-[768px]:min-h-[600px] max-[768px]:h-[100svh]" id="hero" aria-label="Hero">
      {/* Background — high-tech earth globe image */}
      <div className="absolute inset-0 z-[1]" aria-hidden="true">
        <img
          src="/images/earth_globe.png"
          alt="Earth Globe"
          className="w-full h-full object-cover"
          style={{
            opacity: 0.55,
            mixBlendMode: "screen",
            transform: "scale(1.05)",
            animation: "pulse-glow 8s ease-in-out infinite",
          }}
        />
      </div>

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-[2]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          backgroundPosition: "center",
        }}
      />

      {/* Gradient overlays */}
      <div className="absolute left-0 right-0 -bottom-[1px] z-[2] h-[615px] max-[768px]:h-[400px] bg-gradient-to-b from-transparent via-[#0B0F19]/60 to-[#0B0F19]" aria-hidden="true" />
      <div className="absolute left-0 right-0 -bottom-[1px] z-[2] h-[232px] max-[768px]:h-[150px] bg-gradient-to-b from-transparent to-[#0B0F19]" aria-hidden="true" />

      {/* Content */}
      <div
        className={`absolute z-[5] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-8 max-[768px]:gap-6 w-full max-w-[960px] px-[110px] max-[1280px]:px-[64px] max-[1024px]:px-[40px] max-[768px]:px-[24px] max-[480px]:px-[16px] text-center mt-[30px] max-[1024px]:mt-[10px] max-[768px]:mt-0 transition-all duration-600 ease-in-out ${
          !isTransitioning ? 'opacity-100 translate-y-[-50%]' : 'opacity-0 translate-y-[-45%]'
        }`}
      >
        {/* Floating Category Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
          <span className="w-2 h-2 rounded-full bg-[#E6FF2A] animate-pulse" />
          <span className="font-heading font-extrabold text-[11px] tracking-[0.2em] uppercase text-white/90">
            Arsalynt Enterprise Platform
          </span>
        </div>

        <h1 className="font-heading font-bold text-[84px] max-[1280px]:text-[64px] max-[1024px]:text-[48px] max-[768px]:text-[36px] max-[480px]:text-[28px] leading-[1.05] tracking-tight text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
          {slide.headline}
        </h1>

        <p className="font-body font-normal text-[20px] max-[1280px]:text-[18px] max-[1024px]:text-[16px] max-[480px]:text-[14px] leading-relaxed tracking-wide text-[#94A3B8] max-w-[780px]">
          {slide.body}
        </p>

        <div className="flex flex-row max-[768px]:flex-col items-center gap-4 max-[768px]:w-full [&_a]:max-[768px]:w-full [&_button]:max-[768px]:w-full mt-2">
          <Button variant="primary" href={slide.primaryCta.href}>
            {slide.primaryCta.label}
          </Button>
          <Button variant="secondary" href={slide.secondaryCta.href}>
            {slide.secondaryCta.label}
          </Button>
        </div>
      </div>

      {/* Slider Arrow Navigation */}
      <div className="absolute z-[6] top-1/2 -translate-y-1/2 left-[110px] right-[110px] max-[1280px]:left-[64px] max-[1280px]:right-[64px] max-[1024px]:left-[40px] max-[1024px]:right-[40px] hidden md:flex justify-between pointer-events-none [&_button]:pointer-events-auto" aria-hidden="true">
        <SliderArrow direction="left" onClick={prevSlide} />
        <SliderArrow direction="right" onClick={nextSlide} />
      </div>

      {/* Slide Counter */}
      <div className="absolute z-[6] bottom-[70px] max-[768px]:bottom-[40px] left-[110px] max-[1280px]:left-[64px] max-[1024px]:left-[40px] max-[768px]:left-1/2 max-[768px]:-translate-x-1/2 flex items-center gap-2.5" role="tablist" aria-label="Slide indicators">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`h-[6px] rounded-full border-none cursor-pointer transition-all duration-300 ${
              i === currentSlide ? 'w-[48px] bg-white/20 relative overflow-hidden' : 'w-[10px] bg-white/30 hover:bg-white/60'
            }`}
            onClick={() => goToSlide(i)}
            role="tab"
            aria-selected={i === currentSlide}
            aria-label={`Go to slide ${i + 1}`}
          >
            {i === currentSlide && (
              <span
                className="absolute top-0 left-0 h-full bg-[#E6FF2A] rounded-full transition-[width] duration-100 linear shadow-[0_0_12px_#E6FF2A]"
                style={{ width: `${progress}%` }}
              />
            )}
          </button>
        ))}
      </div>
    </section>
  );
}

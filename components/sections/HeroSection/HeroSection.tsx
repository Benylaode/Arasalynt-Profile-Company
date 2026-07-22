'use client';

import { useState, useEffect, useCallback } from 'react';
import styles from './HeroSection.module.css';
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
    <section className={styles.hero} id="hero" aria-label="Hero">
      {/* Background — high-tech earth globe image */}
      <div className={styles.backgroundImage} aria-hidden="true">
        <img
          src="/images/earth_globe.png"
          alt="Earth Globe"
          style={{
            opacity: 0.6,
            mixBlendMode: "screen",
            transform: "scale(1.05)",
            animation: "pulse-glow 8s ease-in-out infinite",
          }}
        />
      </div>

      {/* Grid Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.015) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          backgroundPosition: "center",
          pointerEvents: "none",
          zIndex: 2,
        }}
      />

      {/* Gradient overlays */}
      <div className={`${styles.gradientOverlay} ${styles.gradientMain}`} aria-hidden="true" />
      <div className={`${styles.gradientOverlay} ${styles.gradientBottom}`} aria-hidden="true" />

      {/* Content */}
      <div
        className={`${styles.content} ${styles.slideContent} ${
          !isTransitioning ? styles.active : ''
        }`}
      >
        <h1 className={styles.headline}>{slide.headline}</h1>
        <p className={styles.body}>{slide.body}</p>
        <div className={styles.buttons}>
          <Button variant="primary" href={slide.primaryCta.href}>
            {slide.primaryCta.label}
          </Button>
          <Button variant="secondary" href={slide.secondaryCta.href}>
            {slide.secondaryCta.label}
          </Button>
        </div>
      </div>

      {/* Slider Arrow Navigation */}
      <div className={styles.sliderNav} aria-hidden="true">
        <SliderArrow direction="left" onClick={prevSlide} />
        <SliderArrow direction="right" onClick={nextSlide} />
      </div>

      {/* Slide Counter */}
      <div className={styles.counter} role="tablist" aria-label="Slide indicators">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`${i === currentSlide ? styles.counterActive : styles.counterDot} ${
              i === currentSlide ? styles.active : ''
            }`}
            onClick={() => goToSlide(i)}
            role="tab"
            aria-selected={i === currentSlide}
            aria-label={`Go to slide ${i + 1}`}
          >
            {i === currentSlide && (
              <span
                className={styles.counterProgress}
                style={{ width: `${progress}%` }}
              />
            )}
          </button>
        ))}
      </div>
    </section>
  );
}

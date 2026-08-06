'use client';

import { useCallback, useEffect, useRef, useState, type CSSProperties } from 'react';
import Link from 'next/link';

const IconChevronLeft = ({ size = 26 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconChevronRight = ({ size = 26 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CAROUSEL_LOOP = 30;
const CAROUSEL_DURATION = 6000;
const CAROUSEL_TICK = 50;

export type BusinessWorkItem = {
  name: string;
  tag: string;
  img: string;
  slug?: string;
  href?: string;
};

export default function BusinessWorksCarousel({
  works,
  title,
}: {
  works: BusinessWorkItem[];
  title: string;
}) {
  const extended = Array.from({ length: CAROUSEL_LOOP }, () => works).flat();
  const startIndex = Math.floor((CAROUSEL_LOOP * Math.max(works.length, 1)) / 2);

  const [activeIndex, setActiveIndex] = useState(startIndex);
  const [isMoving, setIsMoving] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [dragStart, setDragStart] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(0);
  const lastTimeRef = useRef<number | null>(null);

  const resetProgress = useCallback(() => {
    progressRef.current = 0;
    lastTimeRef.current = null;
    setProgress(0);
  }, []);

  const next = useCallback(() => {
    setIsMoving(true);
    resetProgress();
    setActiveIndex((i) => i + 1);
  }, [resetProgress]);

  const prev = useCallback(() => {
    setIsMoving(true);
    resetProgress();
    setActiveIndex((i) => i - 1);
  }, [resetProgress]);

  useEffect(() => {
    if (works.length <= 1 || isPaused) {
      lastTimeRef.current = null;
      return;
    }
    lastTimeRef.current = performance.now();
    const id = window.setInterval(() => {
      const now = performance.now();
      if (document.hidden) {
        lastTimeRef.current = now;
        return;
      }
      const elapsed = now - (lastTimeRef.current ?? now);
      lastTimeRef.current = now;
      const nextProgress = progressRef.current + (elapsed / CAROUSEL_DURATION) * 100;
      if (nextProgress >= 100) {
        progressRef.current = 0;
        lastTimeRef.current = now;
        setProgress(0);
        setIsMoving(true);
        setActiveIndex((i) => i + 1);
        return;
      }
      progressRef.current = nextProgress;
      setProgress(nextProgress);
    }, CAROUSEL_TICK);
    return () => window.clearInterval(id);
  }, [isPaused, works.length]);

  const handleDragEnd = (clientX: number) => {
    if (dragStart === null) return;
    const diff = dragStart - clientX;
    if (diff > 50) next();
    else if (diff < -50) prev();
    setDragStart(null);
  };

  if (!works.length) return null;

  return (
    <section className="relative w-full overflow-hidden bg-[#F7F7F7] py-[64px] md:py-[80px] xl:py-[96px]">
      {/* Title Header — Original Business Center-Aligned Style */}
      <div className="mx-auto mb-[42px] flex max-w-[1000px] flex-col items-center gap-4 px-6 text-center">
        <div className="flex items-center justify-center gap-2 font-body text-[10px] font-extrabold uppercase tracking-[0.06em] text-[#1A3E9E]">
          <span className="h-1.5 w-1.5 shrink-0 bg-[#1A3E9E]" />
          <span>FEATURED WORK</span>
        </div>

        <h2 className="font-heading text-[clamp(46px,4.375vw,84px)] font-medium leading-none tracking-[-0.03em] text-[#101010]">
          {title}
        </h2>
      </div>

      {/* Carousel Viewport */}
      <div
        className="relative h-[clamp(500px,39.583vw,760px)] w-full cursor-grab select-none overflow-hidden active:cursor-grabbing"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={(e) => {
          setIsPaused(false);
          if (dragStart !== null) handleDragEnd(e.clientX);
        }}
        onMouseDown={(e) => setDragStart(e.clientX)}
        onMouseUp={(e) => handleDragEnd(e.clientX)}
        onTouchStart={(e) => setDragStart(e.touches[0].clientX)}
        onTouchEnd={(e) => handleDragEnd(e.changedTouches[0].clientX)}
      >
        {/* Track */}
        <div
          className="absolute left-0 top-0 flex h-full gap-[16px]"
          onTransitionEnd={(e) => {
            if (e.target === e.currentTarget) setIsMoving(false);
          }}
          style={{
            '--slide-width': 'clamp(760px, 73.594vw, 1413px)',
            transform: `translate3d(calc(50vw - (var(--slide-width) / 2) - ${activeIndex} * (var(--slide-width) + 16px)), 0, 0)`,
            transition: 'transform 900ms cubic-bezier(0.22, 1, 0.36, 1)',
            willChange: isMoving ? 'transform' : 'auto',
          } as CSSProperties}
        >
          {extended.map((work, index) => {
            const isActive = index === activeIndex;
            const href = work.href ?? (work.slug ? `/our-works/${work.slug}` : '/our-works');
            const categoryParts = (work.tag || '')
              .split(/[•·]/)
              .map((p) => p.trim())
              .filter(Boolean);

            return (
              <article
                key={`${work.name}-${index}`}
                onClick={() => {
                  if (!isActive) {
                    setIsMoving(true);
                    resetProgress();
                    setActiveIndex(index);
                  }
                }}
                className={`group relative h-full w-[var(--slide-width)] shrink-0 overflow-hidden rounded-[32px] bg-black ${
                  isActive ? 'z-10' : 'z-0'
                }`}
              >
                <Link href={href} className="block h-full w-full no-underline">
                  {work.img && (
                    <img
                      src={work.img}
                      alt={work.name}
                      loading="lazy"
                      draggable={false}
                      className="pointer-events-none absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025]"
                    />
                  )}
                  {/* overlays */}
                  <div
                    aria-hidden="true"
                    className={`pointer-events-none absolute inset-0 z-[1] bg-black transition-opacity duration-500 ${
                      isActive ? 'opacity-[0.46]' : 'opacity-[0.64] group-hover:opacity-[0.52]'
                    }`}
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[68%] bg-gradient-to-b from-transparent via-black/55 to-black"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-[38%] bg-gradient-to-t from-black via-black/50 to-transparent"
                  />
                  {/* info */}
                  <div className="pointer-events-none absolute bottom-[clamp(32px,3.021vw,58px)] left-[clamp(32px,3.385vw,65px)] right-[clamp(32px,3.385vw,65px)] z-[5]">
                    <h3 className="max-w-[1236px] font-heading text-[clamp(38px,3.333vw,64px)] font-medium leading-[1.2] tracking-[-0.02em] text-[#F7F7F7]">
                      {work.name}
                    </h3>
                    <div className="mt-[clamp(7px,0.365vw,10px)] flex flex-wrap items-center gap-x-[clamp(8px,0.625vw,12px)] gap-y-[5px] font-body font-medium uppercase leading-[1.3] tracking-[0.06em] text-[#E6FF2A] text-[clamp(11.8px,0.854vw,16.4px)]">
                      {categoryParts.map((part, pIdx) => (
                        <span key={`${part}-${pIdx}`} className="contents">
                          {pIdx > 0 && (
                            <span aria-hidden="true" className="h-[3px] w-[3px] shrink-0 bg-[#F7F7F7]" />
                          )}
                          <span>{part}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* progress bar */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[4px] overflow-hidden bg-white/35 xl:h-[6px]"
                  >
                    {isActive && works.length > 1 && (
                      <span
                        className="absolute inset-y-0 left-0 w-full origin-left bg-[#E6FF2A] transition-transform duration-[75ms] ease-linear"
                        style={{ transform: `scaleX(${Math.min(progress / 100, 1)})` }}
                      />
                    )}
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
        {/* side shaders */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-20 w-[clamp(120px,13.021vw,250px)] bg-gradient-to-r from-black via-black/80 to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-20 w-[clamp(120px,13.021vw,250px)] bg-gradient-to-l from-black via-black/80 to-transparent"
        />
        {/* prev button */}
        {works.length > 1 && (
          <div
            className="absolute top-1/2 z-30 -translate-y-1/2"
            style={{ left: 'max(5.755vw, calc((100vw - 1699px) / 2))' }}
          >
            <button
              type="button"
              aria-label="Previous slide"
              onMouseDown={(e) => e.stopPropagation()}
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="flex h-[clamp(54.5px,3.633vw,70px)] w-[clamp(54.5px,3.633vw,70px)] items-center justify-center rounded-[6px] border border-[#4C4C4C] bg-black/30 text-[#D9D9D9] transition-[border-color,background-color,color] duration-300 hover:border-[#D9D9D9] hover:bg-black/70 hover:text-white"
            >
              <IconChevronLeft size={26} />
            </button>
          </div>
        )}
        {/* next button */}
        {works.length > 1 && (
          <div
            className="absolute top-1/2 z-30 -translate-y-1/2"
            style={{ right: 'max(5.755vw, calc((100vw - 1699px) / 2))' }}
          >
            <button
              type="button"
              aria-label="Next slide"
              onMouseDown={(e) => e.stopPropagation()}
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="flex h-[clamp(54.5px,3.633vw,70px)] w-[clamp(54.5px,3.633vw,70px)] items-center justify-center rounded-[6px] border border-[#4C4C4C] bg-black/30 text-[#D9D9D9] transition-[border-color,background-color,color] duration-300 hover:border-[#D9D9D9] hover:bg-black/70 hover:text-white"
            >
              <IconChevronRight size={26} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

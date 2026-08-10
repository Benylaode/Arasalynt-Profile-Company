'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import BeyondExpectations from '@/components/sections/BeyondExpectations/BeyondExpectations';
import { LEADERSHIP_THOUGHTS_DUMMY_DATA } from '@/lib/db/dummy';

/* ==========================================================================
   ASSET PATHS
   Extract the provided asset package into:
   public/images/leadership-thoughts/
   ========================================================================== */

const ASSETS = {
  hero: '/images/leadership-thoughts/hero-leadership-thoughts-v2.webp',
} as const;
const PAGE_SIZE = 9;

/* ── Pure SVG icons ─────────────────────────────────────────────────────── */

function IconChevronDown() {
  return (
    <svg width="32" height="22" viewBox="0 0 32 22" fill="none" aria-hidden="true">
      <path d="M3 4L16 17L29 4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconArrowLeft({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M19 12H5m6-6-6 6 6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconArrowRight({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 12h14m-6-6 6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconSearch({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="11"
        cy="11"
        r="6.5"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="m16 16 4 4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ── Custom FilterDropdown ───────────────────────────────────────────────── */

type FilterDropdownOption = { label: string; value: string };

function FilterDropdown({
  value,
  onChange,
  options,
  ariaLabel,
}: {
  value: string;
  onChange: (val: string) => void;
  options: FilterDropdownOption[];
  ariaLabel: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const selected = options.find((opt) => opt.value === value) ?? options[0];

  useEffect(() => {
    if (!open) return;
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);

  return (
    <div ref={ref} className="relative h-[42px] shrink-0" aria-label={ariaLabel}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={`flex h-full items-center gap-2 rounded-full border px-4 font-body text-[13px] font-medium tracking-[0.02em] transition-colors ${
          open
            ? 'border-[#1A3E9E] bg-[rgba(153,166,231,0.15)] text-[#1A3E9E]'
            : 'border-[#D9D9D9] bg-transparent text-[#717171] hover:border-[#1A3E9E] hover:text-[#1A3E9E]'
        }`}
      >
        <span>{selected.label}</span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className={`shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        >
          <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-[calc(100%+6px)] z-50 min-w-[140px] rounded-[16px] bg-white px-2 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
          {options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => { onChange(opt.value); setOpen(false); }}
              className={`w-full rounded-full px-4 py-2.5 text-left font-body text-[13px] font-medium tracking-[0.02em] transition-colors hover:bg-[#F5F5F5] ${
                opt.value === value ? 'text-[#101010]' : 'text-[#717171]'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ── Data normalization ─────────────────────────────────────────────────── */

const LEADERSHIP_THOUGHTS = LEADERSHIP_THOUGHTS_DUMMY_DATA.map(
  (item) => ({
    id: item.id,
    slug: item.slug,
    title: item.title,
    category: item.category || 'LEADERSHIP THOUGHTS',
    author: item.author || 'CEO Arsalynk',
    readTime: item.readTime,
    date: item.date,
    description: item.description,
    image: item.coverImage,
    featuredImage: item.coverImage,
  }),
);

const FEATURED_ARTICLES = LEADERSHIP_THOUGHTS.slice(0, 3);

/* ── Page ───────────────────────────────────────────────────────────────── */

export default function LeadershipThoughtsPage() {
  const CAROUSEL_DURATION = 6000;
  const CAROUSEL_TICK = 50;

  const [activeSlide, setActiveSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const progressRef = useRef(0);
  const lastTimeRef = useRef<number | null>(null);

  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');

  const resetProgress = useCallback(() => {
    progressRef.current = 0;
    lastTimeRef.current = null;
    setProgress(0);
  }, []);

  const handleNext = useCallback(() => {
    resetProgress();
    setActiveSlide((current) => (current === FEATURED_ARTICLES.length - 1 ? 0 : current + 1));
  }, [resetProgress]);

  const handlePrevious = useCallback(() => {
    resetProgress();
    setActiveSlide((current) => (current === 0 ? FEATURED_ARTICLES.length - 1 : current - 1));
  }, [resetProgress]);

  useEffect(() => {
    if (FEATURED_ARTICLES.length <= 1 || isPaused) {
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
        setActiveSlide((current) => (current === FEATURED_ARTICLES.length - 1 ? 0 : current + 1));
        return;
      }
      progressRef.current = nextProgress;
      setProgress(nextProgress);
    }, CAROUSEL_TICK);
    return () => window.clearInterval(id);
  }, [isPaused]);

  const filteredArticles = useMemo(() => {
    const keyword = searchTerm.trim().toLowerCase();

    const result = LEADERSHIP_THOUGHTS.filter((article) => {
      if (!keyword) return true;

      return [
        article.title,
        article.category,
        article.author,
        article.description,
      ]
        .join(' ')
        .toLowerCase()
        .includes(keyword);
    });

    if (sortOrder === 'oldest') return [...result].reverse();
    return result;
  }, [searchTerm, sortOrder]);

  const visibleArticles = filteredArticles.slice(0, visibleCount);
  const hasMore = visibleCount < filteredArticles.length;
  const featured = FEATURED_ARTICLES[activeSlide] ?? LEADERSHIP_THOUGHTS[0];

  const handleScrollDown = () => {
    document
      .getElementById('beyond-expectations')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Already defined above via useCallback

  return (
    <main className="w-full overflow-x-hidden bg-[#F7F7F7] text-[#101010]">
      {/* ==================================================================
          HERO
          ================================================================== */}
      <section
        id="leadership-thoughts-hero"
        aria-label="Leadership Thoughts Hero"
        className="relative isolate flex h-[clamp(560px,41.666vw,800px)] w-full items-center justify-center overflow-hidden rounded-b-[clamp(24px,2.188vw,42px)] bg-[#101010]"
      >
        <img
          src={ASSETS.hero}
          alt="Leadership thoughts hero background"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="relative z-10 mx-auto flex w-full max-w-[900px] flex-col items-center px-6 text-center">
          <div className="font-body text-[10.5px] font-normal uppercase leading-[1.3] tracking-[0.06em] text-[#E6FF2A] max-[768px]:text-[7px]">
              Home&nbsp;&nbsp;&gt;&nbsp;&nbsp;Insight &amp; Programs&nbsp;&nbsp;&gt;&nbsp;&nbsp;Leadership Thoughts
            </div>

          <h1 className="font-heading mt-5 text-[clamp(52px,5vw,96px)] font-medium leading-none tracking-[-0.02em] text-[#F7F7F7]">
            Leadership Thoughts
          </h1>

          <p className="mt-6 max-w-[650px] font-body text-[clamp(14px,1.042vw,20px)] font-light leading-[1.6] tracking-[0.02em] text-white/95">
            Perspectives, principles, and strategic insights from the Arsalynk leadership team —
            shaping the way we think about business, technology, and human potential.
          </p>
        </div>

        <a
          href="#beyond-expectations"
          onClick={(e) => {
            e.preventDefault();
            const targets = Array.from(document.querySelectorAll('#beyond-expectations'));
            const visibleTarget = targets.find((el) => {
              const rect = el.getBoundingClientRect();
              return rect.height > 0 && window.getComputedStyle(el).display !== 'none';
            });
            if (visibleTarget) {
              const top = visibleTarget.getBoundingClientRect().top + window.scrollY;
              window.scrollTo({ top, behavior: 'smooth' });
            }
          }}
          aria-label="Scroll to CTA"
          className="absolute bottom-[clamp(34px,3.698vw,71px)] left-1/2 z-20 flex h-[clamp(56px,4.167vw,80px)] w-[clamp(56px,4.167vw,80px)] -translate-x-1/2 items-center justify-center rounded-full border border-white/20 text-white shadow-[0_12px_30px_rgba(0,0,0,0.2)] backdrop-blur-[4px] transition duration-300 hover:-translate-y-1 hover:bg-white/20"
          style={{ background: 'linear-gradient(230.45deg, rgba(247,247,247,0.21) -7.74%, rgba(247,247,247,0.105) 81.5%)' }}
        >
          <IconChevronDown />
        </a>
      </section>

      {/* ==================================================================
          FEATURED THOUGHT
          ================================================================== */}
      <section
        id="featured-thoughts"
        aria-label="Featured Thoughts"
        className="bg-[#F7F7F7] px-[6vw] py-16 max-[1199px]:px-[4vw] max-[768px]:py-10"
      >
        <div className="mx-auto w-full max-w-[1600px]">
          <article
            className="group relative aspect-[17/8] w-full overflow-hidden rounded-[28px] bg-black max-[900px]:aspect-[4/3] max-[640px]:aspect-[4/5] max-[480px]:rounded-[22px]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <img
              key={`${featured?.id}-${activeSlide}`}
              src={featured?.featuredImage}
              alt={featured?.title ?? 'Featured leadership thought'}
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
            />

            <div className="absolute inset-0 bg-black/35" />

            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-[54%]"
              style={{
                background:
                  'linear-gradient(180deg, rgba(0,0,0,0) 0%, #000000 100%)',
              }}
            />

            <div className="absolute bottom-[118px] left-[74px] right-[284px] z-10 flex flex-col items-start max-[1200px]:bottom-[105px] max-[1200px]:left-[54px] max-[1200px]:right-[216px] max-[768px]:bottom-[112px] max-[768px]:left-7 max-[768px]:right-7">
              <div className="mb-2.5 flex items-center gap-2.5 font-body text-[16px] font-extrabold uppercase leading-[1.3] tracking-[0.06em] text-[#E6FF2A] max-[1200px]:text-[14px] max-[768px]:text-[11px]">
                <span className="h-2 w-2 shrink-0 bg-[#E6FF2A]" />
                <span>Featured Thoughts</span>
              </div>

              <h2 className="max-w-[1180px] font-heading text-[clamp(32px,3vw,58px)] font-medium leading-[1.2] tracking-[-0.02em] text-[#F7F7F7] transition-colors duration-300 group-hover:text-[#E6FF2A]">
                <Link
                  href={`/insight-programs/leadership-thoughts/${featured?.slug}`}
                  className="transition-opacity hover:opacity-80"
                >
                  {featured?.title}
                </Link>
              </h2>

              <div className="mt-5 flex min-h-[54px] items-center rounded-full border border-[#717171] px-7 font-body text-[16px] leading-[1.5] tracking-[0.02em] text-white max-[1200px]:min-h-[48px] max-[1200px]:px-6 max-[1200px]:text-[14px] max-[768px]:mt-4 max-[768px]:min-h-[42px] max-[768px]:px-5 max-[768px]:text-[12px]">
                by {featured?.author}
              </div>
            </div>

            <div className="absolute bottom-[54px] left-[74px] z-20 flex h-2.5 items-center gap-2 max-[1200px]:bottom-10 max-[1200px]:left-[54px] max-[768px]:bottom-7 max-[768px]:left-7">
              {FEATURED_ARTICLES.map((article, index) => {
                const isActive = index === activeSlide;
                return (
                  <button
                    key={article.id}
                    type="button"
                    onClick={() => { resetProgress(); setActiveSlide(index); }}
                    aria-label={`Show featured thought ${index + 1}`}
                    aria-current={isActive ? 'true' : undefined}
                    className={`relative h-2.5 overflow-hidden rounded-[2px] transition-all duration-300 ${
                      isActive ? 'w-[54px] bg-[#A8B31E]' : 'w-2.5 bg-[#717171]'
                    }`}
                  >
                    {isActive && (
                      <span
                        className="absolute inset-y-0 left-0 w-full origin-left bg-[#E6FF2A] transition-transform duration-[75ms] ease-linear"
                        style={{ transform: `scaleX(${Math.min(progress / 100, 1)})` }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="absolute bottom-[54px] right-[74px] z-20 flex gap-2 max-[1200px]:bottom-10 max-[1200px]:right-[54px] max-[768px]:bottom-7 max-[768px]:right-7">
              <button
                type="button"
                onClick={handlePrevious}
                aria-label="Previous featured thought"
                className="flex h-[58px] w-[58px] items-center justify-center rounded-[11px] border border-[#D9D9D9] text-[#D9D9D9] transition-colors duration-200 hover:bg-white hover:text-black max-[768px]:h-12 max-[768px]:w-12 max-[768px]:rounded-lg"
              >
                <IconArrowLeft size={24} />
              </button>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next featured thought"
                className="flex h-[58px] w-[58px] items-center justify-center rounded-[11px] border border-[#D9D9D9] text-[#D9D9D9] transition-colors duration-200 hover:bg-white hover:text-black max-[768px]:h-12 max-[768px]:w-12 max-[768px]:rounded-lg"
              >
                <IconArrowRight size={24} />
              </button>
            </div>
          </article>
        </div>
      </section>

      {/* ==================================================================
          EXPLORE OUR THOUGHTS
          ================================================================== */}
      <section
        id="explore-thoughts"
        aria-label="Explore Our Thoughts"
        className="bg-[rgba(153,166,231,0.10)] px-[6vw] py-[110px] max-[1199px]:px-[4vw] max-[1024px]:py-20 max-[768px]:py-16"
      >
        <div className="mx-auto flex w-full max-w-[1700px] flex-col gap-16 max-[768px]:gap-10">
          <header className="flex w-full items-end justify-between gap-8 max-[1050px]:flex-col max-[1050px]:items-start">
            <h2 className="font-heading text-[clamp(46px,3.75vw,72px)] font-medium leading-[1.1] tracking-[-0.02em] text-[#101010]">
              Explore Our Thoughts
            </h2>

            <div className="flex items-center justify-end gap-2 max-[700px]:w-full max-[700px]:flex-col max-[700px]:items-stretch">
              {/* Search input */}
              <div className="relative h-[42px] w-[260px] shrink-0 max-[700px]:w-full">
                <input
                  type="search"
                  value={searchTerm}
                  onChange={(event) => {
                    setSearchTerm(event.target.value);
                    setVisibleCount(PAGE_SIZE);
                  }}
                  placeholder="Search Thoughts..."
                  aria-label="Search thoughts"
                  className="h-full w-full cursor-pointer appearance-none rounded-full border border-[#D9D9D9] bg-transparent pl-5 pr-10 font-body text-[13px] font-medium tracking-[0.02em] text-[#101010] outline-none placeholder:text-[#717171] hover:border-[#1A3E9E] hover:text-[#1A3E9E] focus:border-[#1A3E9E]"
                />
                <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[#717171]">
                  <IconSearch size={16} />
                </span>
              </div>

              {/* Sort dropdown */}
              <FilterDropdown
                value={sortOrder}
                onChange={(val) => { setSortOrder(val as 'newest' | 'oldest'); setVisibleCount(PAGE_SIZE); }}
                options={[
                  { label: 'Newest', value: 'newest' },
                  { label: 'Oldest', value: 'oldest' },
                ]}
                ariaLabel="Sort thoughts"
              />
            </div>
          </header>

          {visibleArticles.length > 0 ? (
            <div className="grid grid-cols-3 gap-x-[30px] gap-y-[60px] max-[1024px]:grid-cols-2 max-[680px]:grid-cols-1">
              {visibleArticles.map((article) => (
                <article key={article.id} className="min-w-0">
                  <Link
                    href={`/insight-programs/leadership-thoughts/${article.slug}`}
                    className="group block"
                  >
                    <div className="relative flex aspect-[546/400] w-full overflow-hidden rounded-3xl max-[480px]:rounded-[18px]">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>

                    <div className="mt-6 flex flex-col gap-4">
                      <div className="flex min-w-0 items-center justify-between gap-4 font-body text-[14px] font-bold uppercase leading-[1.3] tracking-[0.06em] text-[#1A3E9E] max-[1200px]:text-[12px] max-[480px]:text-[10px]">
                        <div className="flex min-w-0 items-center gap-2.5">
                          <span className="h-2 w-2 shrink-0 bg-[#1A3E9E]" />
                          <span className="truncate">
                            {article.category || 'LEADERSHIP THOUGHTS'}
                          </span>
                        </div>
                        <span className="shrink-0">{article.date}</span>
                      </div>

                      <h3
                        className="font-heading text-[clamp(27px,2.1875vw,42px)] font-medium leading-[1.1] tracking-[-0.01em] text-[#101010] transition-colors group-hover:text-[#1A3E9E]"
                        style={{
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}
                      >
                        {article.title}
                      </h3>

                      <p
                        className="font-body text-[16px] font-normal leading-[1.6] text-[#292929] max-[1200px]:text-[14px]"
                        style={{
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}
                      >
                        {article.description}
                      </p>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="flex min-h-[320px] items-center justify-center rounded-3xl border border-dashed border-[#B9BED9] px-6 text-center">
              <p className="font-body text-lg text-[#717171]">
                No leadership thoughts match your search.
              </p>
            </div>
          )}

          {hasMore && (
            <div className="flex justify-center pt-1">
              <button
                type="button"
                onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
                className="flex h-14 min-w-[180px] items-center justify-center rounded-full border border-[#152571] px-8 font-body text-[20px] font-semibold leading-[1.2] tracking-[0.02em] text-[#101010] transition-colors duration-200 hover:bg-[#152571] hover:text-white max-[768px]:text-[16px]"
              >
                LOAD MORE
              </button>
            </div>
          )}
        </div>
      </section>
      <BeyondExpectations />
    </main>
  );
}

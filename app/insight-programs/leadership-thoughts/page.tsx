'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { LEADERSHIP_THOUGHTS_DUMMY_DATA } from '@/lib/db/dummy';

/* ==========================================================================
   ASSET PATHS
   Extract the provided asset package into:
   public/images/leadership-thoughts/
   ========================================================================== */

const ASSETS = {
  hero: '/images/leadership-thoughts/hero-handshake.webp',
  heroNetwork: '/images/shared/network-overlay.webp',
} as const;
const PAGE_SIZE = 9;

/* ── Pure SVG icons ─────────────────────────────────────────────────────── */

function IconChevronDown({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="m5 9 7 7 7-7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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
  const [activeSlide, setActiveSlide] = useState(0);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');

  useEffect(() => {
    if (FEATURED_ARTICLES.length <= 1) return;

    const timer = window.setInterval(() => {
      setActiveSlide((current) =>
        current === FEATURED_ARTICLES.length - 1 ? 0 : current + 1,
      );
    }, 7000);

    return () => window.clearInterval(timer);
  }, []);

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
      .getElementById('featured-thoughts')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handlePrevious = () => {
    setActiveSlide((current) =>
      current === 0 ? FEATURED_ARTICLES.length - 1 : current - 1,
    );
  };

  const handleNext = () => {
    setActiveSlide((current) =>
      current === FEATURED_ARTICLES.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <main className="w-full overflow-hidden bg-[#F7F7F7] text-[#101010]">
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
          className="absolute inset-0 h-full w-full object-cover object-center brightness-[0.52] saturate-[0.9]"
        />
        <img
          src={ASSETS.heroNetwork}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center opacity-40 mix-blend-plus-lighter"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(26,62,158,0.82)_0%,rgba(26,62,158,0.14)_54%,rgba(16,16,16,0.16)_64%,#101010_100%)] mix-blend-multiply"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(25,69,180,0.08)_0%,rgba(5,10,22,0.05)_38%,rgba(0,0,0,0.38)_100%)]"
        />

        <div className="relative z-10 mx-auto flex w-full max-w-[900px] flex-col items-center px-6 text-center">
          <div className="mb-5 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 font-body text-[10px] font-bold uppercase leading-[1.3] tracking-[0.08em] text-[#E6FF2A] sm:text-xs lg:text-sm">
            <span>Home</span>
            <span aria-hidden="true">›</span>
            <span>Insight &amp; Programs</span>
            <span aria-hidden="true">›</span>
            <span>Leadership Thoughts</span>
          </div>

          <h1 className="font-heading text-[clamp(52px,5vw,96px)] font-medium leading-none tracking-[-0.02em] text-[#F7F7F7]">
            Leadership Thoughts
          </h1>

          <p className="mt-6 max-w-[806px] font-body text-[clamp(14px,1.042vw,20px)] font-normal leading-[1.6] tracking-[0.02em] text-white/95">
            Perspectives, principles, and strategic insights from the Arsalynk leadership team —
            shaping the way we think about business, technology, and human potential.
          </p>

          {/* Program Switcher Tabs */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <Link
              href="/insight-programs/Case-Studies"
              className="px-6 py-2.5 rounded-full font-heading text-xs font-bold uppercase tracking-wider bg-white/10 text-white hover:bg-white/20 border border-white/20 transition-all no-underline"
            >
              Case Studies
            </Link>
            <Link
              href="/insight-programs/leadership-thoughts"
              className="px-6 py-2.5 rounded-full font-heading text-xs font-bold uppercase tracking-wider bg-[#E6FF2A] text-[#101010] shadow-md no-underline"
            >
              Leadership Thoughts
            </Link>
          </div>
        </div>

        <button
          type="button"
          onClick={handleScrollDown}
          aria-label="Scroll to featured thoughts"
          className="absolute bottom-[clamp(34px,3.698vw,71px)] left-1/2 z-20 flex h-[clamp(56px,4.167vw,80px)] w-[clamp(56px,4.167vw,80px)] -translate-x-1/2 items-center justify-center rounded-full border border-white/20 bg-white/[0.14] text-white shadow-[0_12px_30px_rgba(0,0,0,0.2)] backdrop-blur-[4px] transition duration-300 hover:-translate-y-1 hover:bg-white/20"
        >
          <IconChevronDown size={32} />
        </button>
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
          <article className="group relative aspect-[17/8] w-full overflow-hidden rounded-[28px] bg-black max-[900px]:aspect-[4/3] max-[640px]:aspect-[4/5] max-[480px]:rounded-[22px]">
            <img
              key={`${featured?.id}-${activeSlide}`}
              src={featured?.featuredImage}
              alt={featured?.title ?? 'Featured leadership thought'}
              className="absolute inset-0 h-full w-full object-contain object-center grayscale contrast-[1.14] brightness-[0.72] transition-[filter,transform] duration-500 group-hover:scale-[1.012] group-hover:brightness-[0.62]"
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
              {FEATURED_ARTICLES.map((article, index) => (
                <button
                  key={article.id}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Show featured thought ${index + 1}`}
                  aria-current={index === activeSlide ? 'true' : undefined}
                  className={`h-2.5 rounded-[1px] transition-all duration-300 ${
                    index === activeSlide
                      ? 'w-[54px] bg-[#BDC22E]'
                      : 'w-2.5 bg-[#717171]'
                  }`}
                />
              ))}
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
              <label className="flex h-[59px] w-[350px] items-center justify-between gap-3 rounded-full border border-[#D9D9D9] px-6 text-[#717171] max-[700px]:w-full">
                <span className="sr-only">Search thoughts</span>
                <input
                  type="search"
                  value={searchTerm}
                  onChange={(event) => {
                    setSearchTerm(event.target.value);
                    setVisibleCount(PAGE_SIZE);
                  }}
                  placeholder="Search Thoughts..."
                  className="min-w-0 flex-1 bg-transparent font-body text-[18px] leading-[1.5] tracking-[0.02em] text-[#101010] outline-none placeholder:text-[#717171] max-[768px]:text-[15px]"
                />
                <IconSearch size={24} />
              </label>

              <label className="relative flex h-[59px] w-[147px] items-center justify-center rounded-full border border-[#D9D9D9] px-6 text-[#717171] max-[700px]:w-full">
                <span className="sr-only">Sort thoughts</span>
                <select
                  value={sortOrder}
                  onChange={(event) => {
                    setSortOrder(event.target.value as 'newest' | 'oldest');
                    setVisibleCount(PAGE_SIZE);
                  }}
                  className="absolute inset-0 h-full w-full cursor-pointer appearance-none rounded-full bg-transparent pl-6 pr-12 font-body text-[18px] leading-[1.5] tracking-[0.02em] text-[#717171] outline-none max-[768px]:text-[15px]"
                >
                  <option value="newest">Newest</option>
                  <option value="oldest">Oldest</option>
                </select>
                <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2">
                  <IconChevronDown size={20} />
                </span>
              </label>
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
                    <div className="relative flex aspect-[546/400] w-full items-center justify-center overflow-hidden rounded-3xl bg-[#101010] max-[480px]:rounded-[18px]">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="absolute inset-0 h-full w-full object-contain object-center grayscale contrast-[1.14] brightness-[0.78] transition-[filter,transform] duration-500 group-hover:scale-[1.012] group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-90"
                      />
                      <div className="absolute inset-0 bg-black/15 transition-colors duration-300 group-hover:bg-black/5" />
                      <span className="absolute bottom-5 left-5 inline-flex translate-y-2 items-center rounded-full bg-[#1A3E9E] px-5 py-3 font-body text-[12px] font-semibold uppercase tracking-[0.03em] text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:bg-[#132B7A] group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 sm:bottom-6 sm:left-6 sm:text-[14px]">
                        Read article
                      </span>
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
    </main>
  );
}

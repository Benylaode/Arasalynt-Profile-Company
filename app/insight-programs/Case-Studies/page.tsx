'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { CASE_STUDIES_DUMMY_DATA } from '@/lib/db/dummy';

/* ========================================================================== 
   CASE STUDIES PAGE (/insight-programs/Case-Studies)
   ========================================================================== */

type SortOption = 'newest' | 'oldest' | 'title';

type CaseStudy = {
  id: number | string;
  slug: string;
  title: string;
  category: string;
  dateLabel: string;
  dateValue: string;
  description: string;
  image: string;
  imageAlt: string;
};

type FeaturedStudy = {
  id: number | string;
  slug: string;
  eyebrow: string;
  title: string;
  image: string;
  imageAlt: string;
};

const IconChevronDown = ({ size = 24 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M5 9L12 16L19 9"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconChevronLeft = ({ size = 24 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M14.5 5L7.5 12L14.5 19"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconChevronRight = ({ size = 24 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M9.5 5L16.5 12L9.5 19"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconSearch = ({ size = 24 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <circle
      cx="10.8"
      cy="10.8"
      r="6.8"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <path
      d="M16 16L21 21"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

const FEATURED_STUDIES: FeaturedStudy[] = CASE_STUDIES_DUMMY_DATA.slice(0, 3).map((item) => ({
  id: item.id,
  slug: item.slug,
  eyebrow: 'FEATURED STORIES',
  title: item.title,
  image: item.coverImage,
  imageAlt: item.coverImageAlt,
}));

const PRIMARY_CASES: CaseStudy[] = CASE_STUDIES_DUMMY_DATA.map((item) => ({
  id: item.id,
  slug: item.slug,
  title: item.title,
  category: item.category,
  dateLabel: item.dateLabel,
  dateValue: item.dateValue,
  description: item.description,
  image: item.coverImage,
  imageAlt: item.coverImageAlt,
}));

const CASE_STUDIES: CaseStudy[] = PRIMARY_CASES;

export default function CaseStudiesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('newest');
  const [visibleCount, setVisibleCount] = useState(9);
  const [activeFeatured, setActiveFeatured] = useState(0);

  const featuredStudy = FEATURED_STUDIES[activeFeatured];

  const filteredCases = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    const result = CASE_STUDIES.filter((item) => {
      if (!normalizedQuery) return true;

      return (
        item.title.toLowerCase().includes(normalizedQuery) ||
        item.category.toLowerCase().includes(normalizedQuery) ||
        item.description.toLowerCase().includes(normalizedQuery)
      );
    });

    return [...result].sort((a, b) => {
      if (sortBy === 'title') return a.title.localeCompare(b.title);

      const firstDate = new Date(a.dateValue).getTime();
      const secondDate = new Date(b.dateValue).getTime();

      return sortBy === 'oldest'
        ? firstDate - secondDate
        : secondDate - firstDate;
    });
  }, [searchQuery, sortBy]);

  const visibleCases = filteredCases.slice(0, visibleCount);
  const hasMore = visibleCount < filteredCases.length;

  const scrollToCaseStudies = () => {
    document
      .getElementById('explore-case-studies')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const showPreviousFeatured = () => {
    setActiveFeatured((current) =>
      current === 0 ? FEATURED_STUDIES.length - 1 : current - 1,
    );
  };

  const showNextFeatured = () => {
    setActiveFeatured((current) =>
      current === FEATURED_STUDIES.length - 1 ? 0 : current + 1,
    );
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setVisibleCount(9);
  };

  const handleSortChange = (value: SortOption) => {
    setSortBy(value);
    setVisibleCount(9);
  };

  return (
    <main className="relative w-full overflow-x-hidden bg-[#F7F7F7] text-[#101010]">
      {/* HERO */}
      <section
        id="case-studies-hero"
        aria-label="Case Studies Hero"
        className="relative isolate flex h-[clamp(560px,41.666vw,800px)] w-full items-center justify-center overflow-hidden rounded-b-[clamp(24px,2.188vw,42px)] bg-[#101010]"
      >
        <img
          src="/images/insight-programs/case-studies/hero-case-studies.webp"
          alt="Digital document management and connected technology network"
          className="absolute inset-0 h-full w-full object-cover object-center brightness-[0.52] saturate-[0.9]"
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
            <span>Case Studies</span>
          </div>

          <h1 className="font-heading text-[clamp(52px,5vw,96px)] font-medium leading-none tracking-[-0.02em] text-[#F7F7F7]">
            Case Studies
          </h1>

          <p className="mt-6 max-w-[806px] font-body text-[clamp(14px,1.042vw,20px)] font-normal leading-[1.6] tracking-[0.02em] text-white/95">
            Explore in-depth breakdowns of our projects, from business
            challenges and solution strategies to implementation &amp;
            measurable results delivered for our clients.
          </p>

          {/* Program Switcher Tabs */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <Link
              href="/insight-programs/Case-Studies"
              className="px-6 py-2.5 rounded-full font-heading text-xs font-bold uppercase tracking-wider bg-[#E6FF2A] text-[#101010] shadow-md no-underline"
            >
              Case Studies
            </Link>
            <Link
              href="/insight-programs/leadership-thoughts"
              className="px-6 py-2.5 rounded-full font-heading text-xs font-bold uppercase tracking-wider bg-white/10 text-white hover:bg-white/20 border border-white/20 transition-all no-underline"
            >
              Leadership Thoughts
            </Link>
          </div>
        </div>

        <button
          type="button"
          onClick={scrollToCaseStudies}
          aria-label="Scroll to featured case study"
          className="absolute bottom-[clamp(34px,3.698vw,71px)] left-1/2 z-20 flex h-[clamp(56px,4.167vw,80px)] w-[clamp(56px,4.167vw,80px)] -translate-x-1/2 items-center justify-center rounded-full border border-white/20 bg-white/[0.14] text-white shadow-[0_12px_30px_rgba(0,0,0,0.2)] backdrop-blur-[4px] transition duration-300 hover:-translate-y-1 hover:bg-white/20"
        >
          <IconChevronDown size={32} />
        </button>
      </section>

      {/* FEATURED */}
      <section
        aria-label="Featured Case Study"
        className="relative bg-[#F7F7F7] px-[clamp(16px,5.729vw,110px)] py-[clamp(32px,3.333vw,64px)]"
      >
        <div className="mx-auto w-full max-w-[1700px]">
          <article className="group relative isolate aspect-[17/8] min-h-[430px] w-full overflow-hidden rounded-[clamp(20px,1.667vw,32px)] bg-black sm:min-h-[500px] lg:min-h-0">
            <img
              key={featuredStudy.id}
              src={featuredStudy.image}
              alt={featuredStudy.imageAlt}
              className="absolute inset-0 h-full w-full object-contain object-center grayscale contrast-[1.14] brightness-[0.72] transition-[filter] duration-500 group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-90"
            />

            <div
              aria-hidden="true"
              className="absolute inset-0 bg-black/20"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-[58%] bg-gradient-to-b from-transparent via-black/45 to-black"
            />

            <div className="absolute bottom-[clamp(100px,5.729vw,110px)] left-[clamp(24px,4.323vw,83px)] right-[clamp(24px,12vw,230px)] z-10">
              <div className="mb-3 flex items-center gap-2.5 font-body text-[clamp(11px,0.938vw,18px)] font-extrabold uppercase leading-[1.3] tracking-[0.06em] text-[#E6FF2A]">
                <span className="h-2 w-2 shrink-0 bg-[#E6FF2A]" />
                <span>{featuredStudy.eyebrow}</span>
              </div>

              <h2 className="max-w-[1299px] font-heading text-[clamp(32px,3.333vw,64px)] font-medium leading-[1.2] tracking-[-0.02em] text-[#F7F7F7]">
                <Link href={`/insight-programs/Case-Studies/${featuredStudy.slug}`} className="hover:underline text-white">
                  {featuredStudy.title}
                </Link>
              </h2>
            </div>

            <div className="absolute bottom-[clamp(28px,3.125vw,60px)] left-[clamp(24px,4.323vw,83px)] z-20 flex h-2.5 items-center gap-2">
              {FEATURED_STUDIES.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveFeatured(index)}
                  aria-label={`Show featured story ${index + 1}`}
                  aria-current={activeFeatured === index ? 'true' : undefined}
                  className={
                    activeFeatured === index
                      ? 'h-2.5 w-[54px] rounded-[1px] bg-[#E6FF2A] transition-all duration-300'
                      : 'h-2.5 w-2.5 rounded-[1px] bg-[#717171] transition-all duration-300 hover:bg-white/70'
                  }
                />
              ))}
            </div>

            <div className="absolute bottom-[clamp(24px,3.125vw,60px)] right-[clamp(24px,4.323vw,83px)] z-20 flex items-center gap-2">
              <button
                type="button"
                onClick={showPreviousFeatured}
                aria-label="Previous featured story"
                className="flex h-[clamp(48px,3.333vw,64px)] w-[clamp(48px,3.333vw,64px)] items-center justify-center rounded-[12px] border border-[#D9D9D9] text-[#D9D9D9] transition duration-300 hover:border-white hover:bg-white/10 hover:text-white"
              >
                <IconChevronLeft size={24} />
              </button>

              <button
                type="button"
                onClick={showNextFeatured}
                aria-label="Next featured story"
                className="flex h-[clamp(48px,3.333vw,64px)] w-[clamp(48px,3.333vw,64px)] items-center justify-center rounded-[12px] border border-[#D9D9D9] text-[#D9D9D9] transition duration-300 hover:border-white hover:bg-white/10 hover:text-white"
              >
                <IconChevronRight size={24} />
              </button>
            </div>
          </article>
        </div>
      </section>

      {/* CASE STUDIES LIST */}
      <section
        id="explore-case-studies"
        aria-label="Explore Case Studies"
        className="scroll-mt-24 bg-[rgba(153,166,231,0.10)] px-[clamp(16px,5.729vw,110px)] py-[clamp(72px,5.729vw,110px)]"
      >
        <div className="mx-auto w-full max-w-[1700px]">
          <div className="mb-[clamp(44px,3.333vw,64px)] flex flex-col gap-8 xl:flex-row xl:items-end xl:justify-between">
            <h2 className="font-heading text-[clamp(42px,3.75vw,72px)] font-medium leading-[1.1] tracking-[-0.02em] text-[#101010]">
              Explore Case Studies
            </h2>

            <div className="flex w-full flex-col gap-2 sm:flex-row xl:w-auto xl:justify-end">
              <label className="relative block h-[59px] w-full sm:w-[350px]">
                <span className="sr-only">Search case studies</span>
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(event) => handleSearchChange(event.target.value)}
                  placeholder="Search Case..."
                  className="h-full w-full rounded-full border border-[#D9D9D9] bg-transparent pl-6 pr-14 font-body text-base font-normal tracking-[0.02em] text-[#292929] outline-none transition placeholder:text-[#717171] focus:border-[#1A3E9E] focus:ring-4 focus:ring-[#1A3E9E]/10 lg:text-lg"
                />
                <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[#717171]">
                  <IconSearch size={24} />
                </span>
              </label>

              <label className="relative block h-[59px] w-full sm:w-[147px]">
                <span className="sr-only">Sort case studies</span>
                <select
                  value={sortBy}
                  onChange={(event) =>
                    handleSortChange(event.target.value as SortOption)
                  }
                  className="h-full w-full appearance-none rounded-full border border-[#D9D9D9] bg-transparent px-6 pr-12 font-body text-base font-normal tracking-[0.02em] text-[#717171] outline-none transition focus:border-[#1A3E9E] focus:ring-4 focus:ring-[#1A3E9E]/10 lg:text-lg"
                >
                  <option value="newest">Newest</option>
                  <option value="oldest">Oldest</option>
                  <option value="title">A–Z</option>
                </select>
                <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#717171]">
                  <IconChevronDown size={22} />
                </span>
              </label>
            </div>
          </div>

          {visibleCases.length > 0 ? (
            <div className="grid grid-cols-1 gap-x-[30px] gap-y-[60px] md:grid-cols-2 xl:grid-cols-3">
              {visibleCases.map((item) => (
                <Link
                  key={item.id}
                  href={`/insight-programs/Case-Studies/${item.slug}`}
                  className="group flex min-w-0 flex-col gap-6 no-underline"
                >
                  <div className="relative flex aspect-[546/400] w-full items-center justify-center overflow-hidden rounded-[clamp(16px,1.25vw,24px)] bg-[#101010]">
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-contain object-center grayscale contrast-[1.14] brightness-[0.78] transition-[filter,transform] duration-500 ease-out group-hover:scale-[1.012] group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-90"
                    />
                    <div className="absolute inset-0 bg-black/15 transition-colors duration-300 group-hover:bg-black/5" />
                    <span className="absolute bottom-5 left-5 inline-flex translate-y-2 items-center rounded-full bg-[#1A3E9E] px-5 py-3 font-body text-[12px] font-bold uppercase tracking-[0.03em] text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:bg-[#132B7A] group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 sm:bottom-6 sm:left-6 sm:text-[14px]">
                      Read case study
                    </span>
                  </div>

                  <div className="flex flex-col gap-4">
                    <div className="flex min-h-[18px] items-center justify-between gap-4 font-body text-[10px] font-bold uppercase leading-[1.3] tracking-[0.06em] text-[#1A3E9E] sm:text-xs 2xl:text-sm">
                      <div className="flex min-w-0 items-center gap-2.5">
                        <span className="h-2 w-2 shrink-0 bg-[#1A3E9E]" />
                        <span className="truncate">{item.category}</span>
                      </div>
                      <time
                        dateTime={item.dateValue}
                        className="shrink-0 text-right"
                      >
                        {item.dateLabel}
                      </time>
                    </div>

                    <h3 className="font-heading text-[clamp(28px,2.188vw,42px)] font-medium leading-[1.1] tracking-[-0.01em] text-[#101010] xl:min-h-[92px] group-hover:text-[#1A3E9E] transition-colors">
                      {item.title}
                    </h3>

                    <p
                      className="font-body text-[clamp(14px,0.833vw,16px)] font-normal leading-[1.6] text-[#292929]"
                      style={{
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 2,
                        overflow: 'hidden',
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="flex min-h-[300px] items-center justify-center rounded-[24px] border border-dashed border-[#AFAFAF] px-6 text-center">
              <p className="font-body text-lg text-[#717171]">
                No case studies match your search.
              </p>
            </div>
          )}

          {visibleCases.length > 0 && (
            <div className="mt-[clamp(56px,4.167vw,80px)] flex justify-center">
              <button
                type="button"
                onClick={() => {
                  if (hasMore) setVisibleCount((current) => current + 9);
                }}
                disabled={!hasMore}
                className="flex h-14 min-w-[180px] items-center justify-center rounded-full border border-[#152571] px-8 font-body text-[clamp(14px,1.042vw,20px)] font-semibold leading-[1.2] tracking-[0.02em] text-[#101010] transition duration-300 enabled:hover:-translate-y-0.5 enabled:hover:bg-[#152571] enabled:hover:text-white disabled:cursor-default disabled:opacity-100"
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

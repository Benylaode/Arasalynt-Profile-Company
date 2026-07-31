'use client';

import { useEffect, useMemo, useState, type ReactNode } from 'react';
import Link from 'next/link';
import BeyondExpectations from '@/components/sections/BeyondExpectations/BeyondExpectations';

type SortOrder = 'newest' | 'oldest';

type Project = {
  id: number | string;
  title: string;
  slug?: string;
  image?: string;
  corporation: string;
  industry: string;
  service: string;
  year: number;
  featured?: boolean;
};

type AppliedFilters = {
  corporation: string;
  industry: string;
  sortOrder: SortOrder;
};

/*
  Ganti array ini dengan hasil JSON dari dummy route Anda.
  Layout memakai field: id, title, slug, image, corporation,
  industry, service, year, dan featured.
*/
const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Sinau Print ERP & Marketplace Platform',
    slug: 'sinau-print-erp',
    image: '/images/projects/sinau-print-erp/1.webp',
    corporation: 'Sinau Print',
    industry: 'Web Platform',
    service: 'ERP & Marketplace',
    year: 2026,
    featured: true,
  },
  {
    id: 2,
    title: 'Artic Complex Web Architecture & Portal',
    slug: 'artic-complex-web',
    image: '/images/projects/artic-complex-web/1.webp',
    corporation: 'Artic Analytica',
    industry: 'Web Platform',
    service: 'Complex Web Systems',
    year: 2026,
    featured: true,
  },
  {
    id: 3,
    title: 'MyBoss Connected IoT Hardware & Control System',
    slug: 'myboss-iot-system',
    image: '/images/projects/myboss-iot-system/1.webp',
    corporation: 'MyBoss',
    industry: 'IT Infrastructure',
    service: 'IoT Integration',
    year: 2026,
    featured: true,
  },
  {
    id: 4,
    title: 'Altatic Data Analytics & Intelligence Dashboard',
    slug: 'altatic-analytic',
    image: '/images/projects/altatic-analytic/1.webp',
    corporation: 'Altatic',
    industry: 'Data & Analytics',
    service: 'Analytics Platform',
    year: 2025,
    featured: false,
  },
  {
    id: 5,
    title: 'Web Media Corporate Profile & Digital Presence',
    slug: 'web-media-profile',
    image: '/images/projects/web-media-profile/1.webp',
    corporation: 'Web Media',
    industry: 'Media & Creative',
    service: 'Media Profile',
    year: 2025,
    featured: false,
  },
];

const CORPORATION_OPTIONS = [
  'Sinau Print',
  'Artic Analytica',
  'MyBoss',
  'Altatic',
  'Web Media',
];

const INDUSTRY_OPTIONS = [
  'Web Platform',
  'Data & Analytics',
  'IT Infrastructure',
  'Media & Creative',
];

const IconChevronDown = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconArrow = ({ direction = 'right', size = 22 }: { direction?: 'left' | 'right'; size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    className={direction === 'left' ? 'rotate-180' : ''}
  >
    <path d="M5 12H19M14 7L19 12L14 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconScrollDown = () => (
  <svg width="32" height="22" viewBox="0 0 32 22" fill="none" aria-hidden="true">
    <path d="M3 4L16 17L29 4" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function WorkImage({ image, title }: { image?: string; title: string }) {
  if (!image) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-[#181818]">
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.35)_1px,transparent_1px)] [background-size:70px_70px]" />
      </div>
    );
  }

  return (
    <img
      src={image}
      alt={title}
      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
    />
  );
}

function WorkMeta({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <div className={`flex flex-wrap items-center font-body font-extrabold uppercase tracking-[0.06em] text-[#A2A627] ${featured ? 'gap-3' : 'gap-[10px] md:gap-3'}`}>
      <span className={featured ? 'text-[clamp(10px,0.94vw,18px)] leading-[1.3]' : 'text-[clamp(9px,0.84vw,16px)] leading-[1.3]'}>
        {project.service}
      </span>
      <span className="h-[3px] w-[3px] shrink-0 bg-[#F7F7F7]" />
      <span className={featured ? 'text-[clamp(10px,0.94vw,18px)] leading-[1.3]' : 'text-[clamp(9px,0.84vw,16px)] leading-[1.3]'}>
        {project.industry}
      </span>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={project.slug ? `/our-works/${project.slug}` : '#'}
      className="group relative isolate aspect-[835/570] w-full overflow-hidden rounded-[20px] bg-[#101010] no-underline"
    >
      <WorkImage image={project.image} title={project.title} />
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-x-0 bottom-0 h-[52.3%] bg-gradient-to-b from-transparent to-black" />
      <div className="absolute inset-x-0 bottom-0 h-[52.3%] bg-gradient-to-b from-transparent to-black/70" />

      <div className="absolute bottom-[clamp(20px,2.08vw,40px)] left-[clamp(20px,2.03vw,39px)] right-[clamp(20px,2.03vw,39px)] z-10 flex items-end justify-between gap-4">
        <div className="min-w-0 flex-1">
          <h3 className="max-w-[702px] font-heading text-[clamp(20px,2.19vw,42px)] font-medium leading-[1.1] tracking-[-0.01em] text-[#F7F7F7]">
            {project.title}
          </h3>
          <div className="mt-[clamp(8px,0.84vw,16px)]">
            <WorkMeta project={project} />
          </div>
        </div>

        <span className="flex h-[clamp(38px,2.82vw,54px)] w-[clamp(38px,2.82vw,54px)] shrink-0 items-center justify-center rounded-[6px] border border-[#4C4C4C] text-[#D9D9D9] transition-all duration-300 group-hover:border-[#E6FF2A] group-hover:bg-[#E6FF2A] group-hover:text-[#101010]">
          <IconArrow size={20} />
        </span>
      </div>
    </Link>
  );
}

function FilterSelect({
  value,
  onChange,
  children,
  width = 'w-auto',
  active = false,
  ariaLabel,
}: {
  value: string;
  onChange: (val: string) => void;
  children: ReactNode;
  width?: string;
  active?: boolean;
  ariaLabel: string;
}) {
  return (
    <div className={`relative h-[42px] shrink-0 md:h-[44px] ${width}`}>
      <select
        value={value}
        aria-label={ariaLabel}
        onChange={(event) => onChange(event.target.value)}
        className={`h-full w-full cursor-pointer appearance-none rounded-full border px-4 pr-9 font-body text-[12px] font-medium tracking-[0.02em] outline-none transition-colors md:px-5 md:pr-10 md:text-[13px] ${
          active
            ? 'border-[#1A3E9E] bg-[rgba(153,166,231,0.22)] font-semibold text-[#1A3E9E]'
            : 'border-[#D9D9D9] bg-transparent text-[#717171] hover:border-[#1A3E9E] hover:text-[#1A3E9E]'
        }`}
      >
        {children}
      </select>
      <span className={`pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 md:right-4 ${active ? 'text-[#1A3E9E]' : 'text-[#717171]'}`}>
        <IconChevronDown size={16} />
      </span>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="flex min-h-[440px] w-full flex-col items-center justify-center gap-5 rounded-[20px] bg-[rgba(153,166,231,0.1)] px-5 py-12 text-center md:min-h-[520px] md:gap-6 md:rounded-[24px] xl:min-h-[604px] xl:px-9 xl:pb-[72px] xl:pt-[42px]">
      <img
        src="/images/our-works/no-results-illustration.png"
        alt="No results illustration"
        className="h-[190px] w-[190px] object-contain md:h-[250px] md:w-[250px] xl:h-[319px] xl:w-[319px]"
      />

      <div className="flex max-w-[828px] flex-col items-center gap-3 md:gap-4">
        <h3 className="font-heading text-[clamp(34px,3.34vw,64px)] font-medium leading-[1.2] tracking-[-0.02em] text-[#1A3E9E]">
          No Results Found
        </h3>
        <p className="font-body text-[14px] leading-[1.5] tracking-[0.02em] text-[#3F3F3F] md:text-[16px] xl:text-[18px]">
          It looks like there are no projects under the current filter selection.
          <br className="hidden md:block" />
          <strong className="font-semibold">Try another category or clear the filters to see all our work.</strong>
        </p>
      </div>
    </div>
  );
}

export default function OurWorksPage() {
  const [featuredIndex, setFeaturedIndex] = useState(1);
  const [isFeaturedPaused, setIsFeaturedPaused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);
  const [otherPage, setOtherPage] = useState(0);

  const [corporation, setCorporation] = useState('all');
  const [industry, setIndustry] = useState('all');
  const [sortOrder, setSortOrder] = useState<SortOrder>('newest');
  const [appliedFilters, setAppliedFilters] = useState<AppliedFilters | null>(null);

  const featuredProjects = useMemo(() => {
    const featured = PROJECTS.filter((project) => project.featured);
    return featured.length ? featured : PROJECTS.slice(0, 3);
  }, []);

  const hasSearched = appliedFilters !== null;

  const filteredProjects = useMemo(() => {
    const filters = appliedFilters ?? {
      corporation: 'all',
      industry: 'all',
      sortOrder: 'newest' as SortOrder,
    };

    return PROJECTS.filter((project) => {
      const matchesCorporation = filters.corporation === 'all' || project.corporation === filters.corporation;
      const matchesIndustry = filters.industry === 'all' || project.industry === filters.industry;
      return matchesCorporation && matchesIndustry;
    }).sort((a, b) => (filters.sortOrder === 'oldest' ? a.year - b.year : b.year - a.year));
  }, [appliedFilters]);

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const noResults = hasSearched && filteredProjects.length === 0;

  const otherProjects = useMemo(
    () => [PROJECTS[0], PROJECTS[2], PROJECTS[1], PROJECTS[3], PROJECTS[4], PROJECTS[5]].filter(
      (project): project is Project => Boolean(project),
    ),
    [],
  );
  const otherPageCount = Math.max(1, Math.ceil(otherProjects.length / 2));
  const visibleOtherProjects = useMemo(() => {
    const start = otherPage * 2;
    return otherProjects.slice(start, start + 2);
  }, [otherPage, otherProjects]);

  const featuredTriplet = useMemo(() => {
    if (!featuredProjects.length) return [];
    const current = featuredIndex % featuredProjects.length;
    const previous = (current - 1 + featuredProjects.length) % featuredProjects.length;
    const next = (current + 1) % featuredProjects.length;
    return [featuredProjects[previous], featuredProjects[current], featuredProjects[next]];
  }, [featuredIndex, featuredProjects]);

  useEffect(() => {
    if (hasSearched || isFeaturedPaused || featuredProjects.length <= 1) return;

    const interval = window.setInterval(() => {
      setFeaturedIndex((current) => (current + 1) % featuredProjects.length);
    }, 6000);

    return () => window.clearInterval(interval);
  }, [featuredProjects.length, hasSearched, isFeaturedPaused]);

  const updateCorporation = (value: string) => {
    setCorporation(value);
    if (hasSearched) {
      setAppliedFilters((current) => current ? { ...current, corporation: value } : current);
      setVisibleCount(6);
    }
  };

  const updateIndustry = (value: string) => {
    setIndustry(value);
    if (hasSearched) {
      setAppliedFilters((current) => current ? { ...current, industry: value } : current);
      setVisibleCount(6);
    }
  };

  const updateSortOrder = (value: string) => {
    const nextValue = value as SortOrder;
    setSortOrder(nextValue);
    if (hasSearched) {
      setAppliedFilters((current) => current ? { ...current, sortOrder: nextValue } : current);
      setVisibleCount(6);
    }
  };

  const handleSearch = () => {
    setAppliedFilters({ corporation, industry, sortOrder });
    setVisibleCount(6);
    setOtherPage(0);

    window.requestAnimationFrame(() => {
      document.getElementById('explore-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  const handleReset = () => {
    setCorporation('all');
    setIndustry('all');
    setSortOrder('newest');
    setAppliedFilters(null);
    setVisibleCount(6);
    setOtherPage(0);

    window.requestAnimationFrame(() => {
      document.getElementById('featured-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  const previousFeatured = () => {
    setFeaturedIndex((current) => (current - 1 + featuredProjects.length) % featuredProjects.length);
  };

  const nextFeatured = () => {
    setFeaturedIndex((current) => (current + 1) % featuredProjects.length);
  };

  const handleScrollDown = () => {
    document.getElementById(hasSearched ? 'explore-section' : 'featured-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <main className="relative w-full overflow-x-hidden bg-[#F7F7F7]">
      {/* HERO — navbar Anda tetap berada di luar komponen ini */}
      <section
        id="hero"
        aria-label="Our Works Hero"
        className="relative isolate h-[560px] w-full overflow-hidden rounded-b-[24px] bg-[#101010] md:h-[680px] md:rounded-b-[34px] xl:h-[800px] xl:rounded-b-[42px]"
      >
        <img
          src="/images/our-works/our-works-hero-bg.png"
          alt=""
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 z-0 h-auto min-h-[166%] w-[104%] min-w-[1100px] max-w-none object-cover"
          style={{ transform: 'translate(-50%, calc(-50% + clamp(90px, 9.74vw, 187px)))' }}
        />

        <img
          src="/images/specialized/specialized-network.webp"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[-90px] left-1/2 z-[1] w-[134.8vw] min-w-[1450px] max-w-none -translate-x-1/2 scale-y-[-1] md:bottom-[-140px] xl:bottom-[-204px]"
          style={{ mixBlendMode: 'plus-lighter' }}
        />

        <div
          className="pointer-events-none absolute inset-0 z-[2]"
          style={{
            background: 'linear-gradient(180deg, #1A3E9E 0%, rgba(26,62,158,0) 71.94%)',
            mixBlendMode: 'multiply',
          }}
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-[87.25%] bg-[linear-gradient(180deg,rgba(16,16,16,0)_9.62%,#101010_100%)]" />

        <svg
          viewBox="0 0 1235 1120"
          fill="none"
          aria-hidden="true"
          className="pointer-events-none absolute right-[-17%] top-[-14%] z-[4] h-[140%] w-auto opacity-[0.06]"
        >
          <path d="M617.5 0L1235 560L617.5 1120L0 560L617.5 0Z" fill="url(#hero-symbol-gradient)" />
          <defs>
            <linearGradient id="hero-symbol-gradient" x1="617.5" y1="0" x2="617.5" y2="1120" gradientUnits="userSpaceOnUse">
              <stop stopColor="#EAEAEA" stopOpacity="0" />
              <stop offset="0.3" stopColor="#EAEAEA" />
              <stop offset="1" stopColor="#EAEAEA" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        <div className="absolute left-1/2 top-1/2 z-10 flex w-full max-w-[766px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-4 px-5 text-center md:gap-6">
          <div className="flex items-center gap-2 font-body text-[10px] font-bold uppercase leading-[1.3] tracking-[0.06em] text-[#E6FF2A] md:text-[12px] xl:text-[14px]">
            <span>Home</span>
            <span>&gt;</span>
            <span>Our Works</span>
          </div>
          <h1 className="font-heading text-[clamp(48px,5vw,96px)] font-medium leading-none tracking-[-0.02em] text-[#F7F7F7]">
            Our Works
          </h1>
        </div>

        <button
          type="button"
          onClick={handleScrollDown}
          aria-label="Scroll to works"
          className="absolute bottom-[46px] left-1/2 z-20 flex h-[58px] w-[58px] -translate-x-1/2 items-center justify-center rounded-full border border-[rgba(175,175,175,0.25)] bg-[linear-gradient(230.45deg,rgba(247,247,247,0.21)_-7.74%,rgba(247,247,247,0.105)_81.5%)] text-white backdrop-blur-[4px] transition-transform hover:scale-105 md:bottom-[60px] md:h-[70px] md:w-[70px] xl:bottom-[71px] xl:h-[80px] xl:w-[80px]"
        >
          <IconScrollDown />
        </button>
      </section>

      {/* FEATURED: hilang setelah tombol Search ditekan */}
      {!hasSearched && (
        <section
          id="featured-section"
          aria-label="Featured Works"
          className="relative flex w-full scroll-mt-20 flex-col items-center bg-[#F7F7F7] py-[64px] md:py-[80px] xl:py-[96px]"
        >
          <div className="flex w-full flex-col items-center gap-4 text-center md:gap-6">
            <div className="flex items-center justify-center gap-2">
              <span className="h-2 w-2 bg-[#1A3E9E]" />
              <span className="font-body text-[11px] font-extrabold uppercase leading-[1.6] tracking-[0.02em] text-[#1A3E9E] md:text-[12px] xl:text-[14px]">
                Featured Works
              </span>
            </div>
            <h2 className="w-full font-heading text-[clamp(42px,4.38vw,84px)] font-medium leading-none tracking-[-0.03em] text-[#101010]">
              Amplify Your Business
              <br />
              in One Ecosystem
            </h2>
          </div>

          <div
            className="relative mt-[44px] h-[clamp(260px,39.59vw,760px)] w-full overflow-hidden md:mt-[54px] xl:mt-[64px]"
            onMouseEnter={() => setIsFeaturedPaused(true)}
            onMouseLeave={() => setIsFeaturedPaused(false)}
          >
            <div className="absolute left-1/2 top-0 flex h-full w-max -translate-x-1/2 gap-4">
              {featuredTriplet.map((project, slot) => {
                const active = slot === 1;
                return (
                  <Link
                    key={`${featuredIndex}-${slot}-${project.id}`}
                    href={project.slug ? `/our-works/${project.slug}` : '#'}
                    tabIndex={active ? 0 : -1}
                    aria-hidden={!active}
                    className={`relative isolate h-full w-[clamp(420px,73.6vw,1413px)] shrink-0 overflow-hidden rounded-[16px] bg-[#101010] no-underline transition-opacity duration-700 md:rounded-[24px] xl:rounded-[32px] ${active ? 'z-10 opacity-100' : 'pointer-events-none opacity-[0.38]'}`}
                  >
                    <WorkImage image={project.image} title={project.title} />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute inset-x-0 bottom-0 h-[43%] bg-gradient-to-b from-transparent to-black/90" />

                    <div className="absolute bottom-[clamp(24px,3.02vw,58px)] left-[clamp(24px,3.39vw,65px)] right-[clamp(24px,3.39vw,65px)] z-10">
                      <h3 className="max-w-[1236px] font-heading text-[clamp(28px,3.34vw,64px)] font-medium leading-[1.2] tracking-[-0.02em] text-[#F7F7F7]">
                        {project.title}
                      </h3>
                      <div className="mt-[clamp(8px,0.63vw,12px)]">
                        <WorkMeta project={project} featured />
                      </div>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 z-20 h-[4px] bg-white/40 xl:h-[6px]">
                      {active && (
                        <div
                          key={`featured-progress-${featuredIndex}`}
                          className="h-full bg-[#E6FF2A]"
                          style={{
                            animation: 'featuredProgress 6s linear forwards',
                            animationPlayState: isFeaturedPaused ? 'paused' : 'running',
                          }}
                        />
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>

            <div className="pointer-events-none absolute inset-y-0 left-0 z-20 hidden w-[13.03vw] max-w-[250px] bg-gradient-to-r from-[#101010] to-transparent md:block" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-20 hidden w-[13.03vw] max-w-[250px] bg-gradient-to-l from-[#101010] to-transparent md:block" />

            <button
              type="button"
              onClick={previousFeatured}
              aria-label="Previous featured work"
              className="absolute left-4 top-1/2 z-30 flex h-[46px] w-[46px] -translate-y-1/2 items-center justify-center rounded-[5px] border border-[#4C4C4C] bg-[#101010]/40 text-[#D9D9D9] transition-all hover:border-[#D9D9D9] hover:bg-[#101010]/80 md:left-[5.73vw] md:h-[54px] md:w-[54px] xl:left-[110px] xl:h-[64px] xl:w-[64px]"
            >
              <IconArrow direction="left" />
            </button>
            <button
              type="button"
              onClick={nextFeatured}
              aria-label="Next featured work"
              className="absolute right-4 top-1/2 z-30 flex h-[46px] w-[46px] -translate-y-1/2 items-center justify-center rounded-[5px] border border-[#4C4C4C] bg-[#101010]/40 text-[#D9D9D9] transition-all hover:border-[#D9D9D9] hover:bg-[#101010]/80 md:right-[5.73vw] md:h-[54px] md:w-[54px] xl:right-[110px] xl:h-[64px] xl:w-[64px]"
            >
              <IconArrow />
            </button>
          </div>
        </section>
      )}

      {/* EXPLORE / SEARCH RESULTS */}
      <section
        id="explore-section"
        aria-label="Explore Arsalynk Best Works"
        className="relative w-full scroll-mt-20 bg-[rgba(153,166,231,0.1)] px-[clamp(1rem,5.6vw,6.75rem)] pb-[72px] pt-[72px] md:pb-[90px] md:pt-[80px] xl:pb-[110px] xl:pt-[96px]"
      >
        <div className="mx-auto w-full max-w-[1920px]">
          <div className={`flex flex-col items-start justify-between gap-6 xl:flex-row xl:items-end xl:gap-8 ${hasSearched ? 'xl:min-h-[190px]' : 'xl:min-h-[140px]'}`}>
            <div className="max-w-[804px]">
              <h2 className="font-heading text-[clamp(36px,3.75vw,64px)] font-medium leading-[1.1] tracking-[-0.02em] text-[#101010]">
                Explore Arsalynk
                <br />
                Best Works
              </h2>
              {hasSearched && (
                <p className="mt-3 font-body text-[14px] leading-[1.5] tracking-[0.02em] text-[#4C4C4C] md:mt-4 md:text-[16px]">
                  Search Results
                </p>
              )}
            </div>

            <div className="flex w-full flex-wrap items-center gap-2 xl:w-auto xl:flex-nowrap xl:justify-end">
              <FilterSelect
                value={corporation}
                onChange={updateCorporation}
                width="w-[calc(50%_-_4px)] sm:w-[155px]"
                active={true}
                ariaLabel="Select Type"
              >
                <option value="all">All Corporation</option>
                {CORPORATION_OPTIONS.map((item) => <option key={item} value={item}>{item}</option>)}
              </FilterSelect>

              <FilterSelect
                value={sortOrder}
                onChange={updateSortOrder}
                width="w-[calc(50%_-_4px)] sm:w-[120px]"
                active={sortOrder !== 'newest'}
                ariaLabel="Sort works"
              >
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
              </FilterSelect>

              <FilterSelect
                value={industry}
                onChange={updateIndustry}
                width="w-[calc(50%_-_4px)] sm:w-[135px]"
                active={industry !== 'all'}
                ariaLabel="Select Industry"
              >
                <option value="all">Industry</option>
                {INDUSTRY_OPTIONS.map((item) => <option key={item} value={item}>{item}</option>)}
              </FilterSelect>

              <button
                type="button"
                onClick={hasSearched ? handleReset : handleSearch}
                className={`flex h-[38px] items-center justify-center rounded-full px-5 font-body text-[13px] font-medium tracking-[0.02em] text-white transition-colors sm:w-auto md:h-[40px] md:px-6 md:text-[14px] ${
                  hasSearched
                    ? 'min-w-[110px] bg-[#1A3E9E] hover:bg-[#152571]'
                    : 'min-w-[95px] bg-[#1A3E9E] hover:bg-[#152571]'
                }`}
              >
                {hasSearched ? 'Reset Filter' : 'Search'}
              </button>
            </div>
          </div>

          <div className="pt-[42px]">
            {noResults ? (
              <EmptyState />
            ) : (
              <>
                <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[24px] xl:gap-[30px]">
                  {visibleProjects.map((project) => <ProjectCard key={project.id} project={project} />)}
                </div>

                {visibleCount < filteredProjects.length && (
                  <div className="flex justify-center pt-[42px] xl:pt-[54px]">
                    <button
                      type="button"
                      onClick={() => setVisibleCount((current) => Math.min(current + 6, filteredProjects.length))}
                      className="flex h-[50px] min-w-[156px] items-center justify-center rounded-full border border-[#152571] bg-transparent px-7 font-body text-[14px] font-semibold tracking-[0.02em] text-[#101010] transition-colors hover:bg-[#152571] hover:text-white md:h-[56px] md:min-w-[180px] md:px-8 md:text-[20px]"
                    >
                      Load More
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </section>

      {/* OTHER WORKS hanya muncul ketika hasil filter kosong */}
      {noResults && (
        <section className="w-full bg-[rgba(153,166,231,0.1)] px-4 pb-[80px] pt-[64px] md:px-10 md:pb-[96px] md:pt-[80px] xl:px-[110px] xl:pb-[110px] xl:pt-[96px]">
          <div className="mx-auto w-full max-w-[1700px]">
            <div className="flex items-end justify-between gap-8">
              <h2 className="font-heading text-[clamp(42px,4.38vw,84px)] font-medium leading-none tracking-[-0.03em] text-[#101010]">
                Other Works
              </h2>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setOtherPage((current) => (current - 1 + otherPageCount) % otherPageCount)}
                  aria-label="Previous other works"
                  className="flex h-[48px] w-[48px] items-center justify-center rounded-[10px] border border-[#D9D9D9] text-[#717171] transition-colors hover:border-[#1A3E9E] hover:text-[#1A3E9E] md:h-[56px] md:w-[56px] xl:h-[64px] xl:w-[64px] xl:rounded-[12px]"
                >
                  <IconArrow direction="left" />
                </button>
                <button
                  type="button"
                  onClick={() => setOtherPage((current) => (current + 1) % otherPageCount)}
                  aria-label="Next other works"
                  className="flex h-[48px] w-[48px] items-center justify-center rounded-[10px] border border-[#D9D9D9] text-[#717171] transition-colors hover:border-[#1A3E9E] hover:text-[#1A3E9E] md:h-[56px] md:w-[56px] xl:h-[64px] xl:w-[64px] xl:rounded-[12px]"
                >
                  <IconArrow />
                </button>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[24px] xl:gap-[30px]">
              {visibleOtherProjects.map((project) => <ProjectCard key={`other-${project.id}`} project={project} />)}
            </div>

            <div className="mt-8 flex items-center gap-2">
              {Array.from({ length: otherPageCount }).map((_, index) => (
                <button
                  type="button"
                  key={index}
                  onClick={() => setOtherPage(index)}
                  aria-label={`Go to other works page ${index + 1}`}
                  className={`h-[10px] rounded-[1px] transition-all ${index === otherPage ? 'w-[54px] bg-[#1A3E9E]' : 'w-[10px] bg-[#D9D9D9]'}`}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA — BeyondExpectations */}
      <BeyondExpectations />

      <style jsx global>{`
        @keyframes featuredProgress {
          from { width: 0%; }
          to { width: 100%; }
        }

        select::-ms-expand { display: none; }
      `}</style>
    </main>
  );
}
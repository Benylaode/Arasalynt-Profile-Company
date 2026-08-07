'use client';

import { useCallback, useEffect, useMemo, useRef, useState, type CSSProperties, type ReactNode } from 'react';
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
  {
    id: 6,
    title: 'Kajian Kelayakan Pengembangan Gedung Industri Kreatif (GIK) sebagai Destinasi Wisata Belanja Oleh-Oleh Khas Kota Semarang',
    slug: 'kajian-kelayakan-gik',
    image: '/images/projects/kajian-kelayakan-gik/1.webp',
    corporation: 'Artic Analytica',
    industry: 'Data & Research',
    service: 'Feasibility Study',
    year: 2026,
    featured: false,
  },
  {
    id: 7,
    title: 'Penyusunan Buku Panduan Perubahan Perilaku Pendampingan Keluarga Dalam Upaya Percepatan Penurunan Risiko Stunting di Tingkat Kelurahan',
    slug: 'panduan-perubahan-perilaku-stunting',
    image: '/images/projects/panduan-perubahan-perilaku-stunting/1.webp',
    corporation: 'Artic Analytica',
    industry: 'Data & Research',
    service: 'Social Research',
    year: 2026,
    featured: false,
  },
  {
    id: 8,
    title: 'Desain Pelatihan Wasit Kota Semarang',
    slug: 'desain-pelatihan-wasit-semarang',
    image: '/images/projects/desain-pelatihan-wasit-semarang/1.webp',
    corporation: 'The Drafroom',
    industry: 'Media & Creative',
    service: 'Training Design',
    year: 2026,
    featured: false,
  },
  {
    id: 9,
    title: 'Produksi Konten Video Portret Padel Arena',
    slug: 'video-portret-padel-arena',
    image: '/images/projects/video-portret-padel-arena/1.webp',
    corporation: 'LoxLive',
    industry: 'Media & Creative',
    service: 'Video Production',
    year: 2026,
    featured: false,
  },
];

const CORPORATION_OPTIONS = [
  'Sinau Print',
  'Artic Analytica',
  'MyBoss',
  'Altatic',
  'Web Media',
  'The Drafroom',
  'LoxLive',
];

const INDUSTRY_OPTIONS = [
  'Web Platform',
  'Data & Analytics',
  'Data & Research',
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

const IconChevronLeft = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconChevronRight = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ── Homepage-style Featured Carousel ───────────────────────────────────── */

const CAROUSEL_LOOP = 30;
const CAROUSEL_DURATION = 6000;
const CAROUSEL_TICK = 50;

type CarouselProject = { id: number | string; title: string; slug?: string; image?: string; service: string; industry: string; };

function FeaturedCarousel({ projects }: { projects: CarouselProject[] }) {
  const extended = Array.from({ length: CAROUSEL_LOOP }, () => projects).flat();
  const startIndex = Math.floor((CAROUSEL_LOOP * Math.max(projects.length, 1)) / 2);

  const [activeIndex, setActiveIndex] = useState(startIndex);
  const [isMoving, setIsMoving] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [dragStart, setDragStart] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(0);
  const lastTimeRef = useRef<number | null>(null);

  const resetProgress = useCallback(() => { progressRef.current = 0; lastTimeRef.current = null; setProgress(0); }, []);

  const next = useCallback(() => { setIsMoving(true); resetProgress(); setActiveIndex((i) => i + 1); }, [resetProgress]);
  const prev = useCallback(() => { setIsMoving(true); resetProgress(); setActiveIndex((i) => i - 1); }, [resetProgress]);

  useEffect(() => {
    if (projects.length <= 1 || isPaused) { lastTimeRef.current = null; return; }
    lastTimeRef.current = performance.now();
    const id = window.setInterval(() => {
      const now = performance.now();
      if (document.hidden) { lastTimeRef.current = now; return; }
      const elapsed = now - (lastTimeRef.current ?? now);
      lastTimeRef.current = now;
      const next = progressRef.current + (elapsed / CAROUSEL_DURATION) * 100;
      if (next >= 100) {
        progressRef.current = 0; lastTimeRef.current = now;
        setProgress(0); setIsMoving(true);
        setActiveIndex((i) => i + 1);
        return;
      }
      progressRef.current = next; setProgress(next);
    }, CAROUSEL_TICK);
    return () => window.clearInterval(id);
  }, [isPaused, projects.length]);

  const handleDragEnd = (clientX: number) => {
    if (dragStart === null) return;
    const diff = dragStart - clientX;
    if (diff > 50) next();
    else if (diff < -50) prev();
    setDragStart(null);
  };

  if (!projects.length) return null;

  return (
    <div
      className="relative h-[clamp(500px,39.583vw,760px)] w-full cursor-grab select-none overflow-hidden active:cursor-grabbing"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={(e) => { setIsPaused(false); if (dragStart !== null) handleDragEnd(e.clientX); }}
      onMouseDown={(e) => setDragStart(e.clientX)}
      onMouseUp={(e) => handleDragEnd(e.clientX)}
      onTouchStart={(e) => setDragStart(e.touches[0].clientX)}
      onTouchEnd={(e) => handleDragEnd(e.changedTouches[0].clientX)}
    >
      {/* Track */}
      <div
        className="absolute left-0 top-0 flex h-full gap-[16px]"
        onTransitionEnd={(e) => { if (e.target === e.currentTarget) setIsMoving(false); }}
        style={{
          '--slide-width': 'clamp(760px, 73.594vw, 1413px)',
          transform: `translate3d(calc(50vw - (var(--slide-width) / 2) - ${activeIndex} * (var(--slide-width) + 16px)), 0, 0)`,
          transition: 'transform 900ms cubic-bezier(0.22, 1, 0.36, 1)',
          willChange: isMoving ? 'transform' : 'auto',
        } as CSSProperties}
      >
        {extended.map((project, index) => {
          const isActive = index === activeIndex;
          return (
            <article
              key={`${project.id}-${index}`}
              onClick={() => { if (!isActive) { setIsMoving(true); resetProgress(); setActiveIndex(index); } }}
              className={`group relative h-full w-[var(--slide-width)] shrink-0 overflow-hidden rounded-[32px] bg-black ${isActive ? 'z-10' : 'z-0'}`}
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  draggable={false}
                  className="pointer-events-none absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025]"
                />
              )}
              {/* overlays */}
              <div aria-hidden="true" className={`pointer-events-none absolute inset-0 z-[1] bg-black transition-opacity duration-500 ${isActive ? 'opacity-[0.46]' : 'opacity-[0.64] group-hover:opacity-[0.52]'}`} />
              <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[68%] bg-gradient-to-b from-transparent via-black/55 to-black" />
              <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-[38%] bg-gradient-to-t from-black via-black/50 to-transparent" />
              {/* info */}
              <div className="pointer-events-none absolute bottom-[clamp(32px,3.021vw,58px)] left-[clamp(32px,3.385vw,65px)] right-[clamp(32px,3.385vw,65px)] z-[5]">
                <h3 className="max-w-[1236px] font-heading text-[clamp(38px,3.333vw,64px)] font-medium leading-[1.2] tracking-[-0.02em] text-[#F7F7F7]">
                  {project.title}
                </h3>
                <div className="mt-[clamp(7px,0.365vw,10px)] flex flex-wrap items-center gap-x-[clamp(8px,0.625vw,12px)] gap-y-[5px] font-body font-medium uppercase leading-[1.3] tracking-[0.06em] text-[#E6FF2A] text-[clamp(11.8px,0.854vw,16.4px)]">
                  <span>{project.service}</span>
                  <span aria-hidden="true" className="h-[3px] w-[3px] shrink-0 bg-[#F7F7F7]" />
                  <span>{project.industry}</span>
                </div>
              </div>
              {/* progress bar */}
              <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[4px] overflow-hidden bg-white/35 xl:h-[6px]">
                {isActive && projects.length > 1 && (
                  <span
                    className="absolute inset-y-0 left-0 w-full origin-left bg-[#E6FF2A] transition-transform duration-[75ms] ease-linear"
                    style={{ transform: `scaleX(${Math.min(progress / 100, 1)})` }}
                  />
                )}
              </div>
            </article>
          );
        })}
      </div>
      {/* side shaders */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 z-20 w-[clamp(120px,13.021vw,250px)] bg-gradient-to-r from-black via-black/80 to-transparent" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 z-20 w-[clamp(120px,13.021vw,250px)] bg-gradient-to-l from-black via-black/80 to-transparent" />
      {/* prev button */}
      <div className="absolute top-1/2 z-30 -translate-y-1/2" style={{ left: 'max(5.755vw, calc((100vw - 1699px) / 2))' }}>
        <button
          type="button"
          aria-label="Previous slide"
          onMouseDown={(e) => e.stopPropagation()}
          onClick={(e) => { e.stopPropagation(); prev(); }}
          className="flex h-[clamp(54.5px,3.633vw,70px)] w-[clamp(54.5px,3.633vw,70px)] items-center justify-center rounded-[6px] border border-[#4C4C4C] bg-black/30 text-[#D9D9D9] transition-[border-color,background-color,color] duration-300 hover:border-[#D9D9D9] hover:bg-black/70 hover:text-white"
        ><IconChevronLeft size={26} /></button>
      </div>
      {/* next button */}
      <div className="absolute top-1/2 z-30 -translate-y-1/2" style={{ right: 'max(5.755vw, calc((100vw - 1699px) / 2))' }}>
        <button
          type="button"
          aria-label="Next slide"
          onMouseDown={(e) => e.stopPropagation()}
          onClick={(e) => { e.stopPropagation(); next(); }}
          className="flex h-[clamp(54.5px,3.633vw,70px)] w-[clamp(54.5px,3.633vw,70px)] items-center justify-center rounded-[6px] border border-[#4C4C4C] bg-black/30 text-[#D9D9D9] transition-[border-color,background-color,color] duration-300 hover:border-[#D9D9D9] hover:bg-black/70 hover:text-white"
        ><IconChevronRight size={26} /></button>
      </div>
    </div>
  );
}

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
    <div className={`flex flex-wrap items-center font-body font-medium uppercase tracking-[0.06em] text-[#E6FF2A] ${featured ? 'gap-3' : 'gap-[10px] md:gap-3'}`}>
      <span className={featured ? 'text-[clamp(9.1px,0.855vw,16.4px)] leading-[1.3]' : 'text-[clamp(8.2px,0.76vw,14.5px)] leading-[1.3]'}>
        {project.service}
      </span>
      <span className="h-[3px] w-[3px] shrink-0 bg-[#F7F7F7]" />
      <span className={featured ? 'text-[clamp(9.1px,0.855vw,16.4px)] leading-[1.3]' : 'text-[clamp(8.2px,0.76vw,14.5px)] leading-[1.3]'}>
        {project.industry}
      </span>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const titleSize = project.title.length > 110
    ? 'text-[clamp(16px,1.25vw,24px)] leading-[1.2]'
    : project.title.length > 70
      ? 'text-[clamp(18px,1.6vw,30px)] leading-[1.15]'
      : 'text-[clamp(20px,2.19vw,42px)] leading-[1.1]';

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
          <h3 className={`max-w-[702px] font-heading font-medium tracking-[-0.01em] text-[#F7F7F7] ${titleSize}`}>
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

function FilterDropdown({
  value,
  onChange,
  options,
  ariaLabel,
  width,
}: {
  value: string;
  onChange: (val: string) => void;
  options: { label: string; value: string }[];
  ariaLabel: string;
  width?: string;
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
    <div ref={ref} className={`relative h-[42px] shrink-0 md:h-[44px] ${width ?? ''}`} aria-label={ariaLabel}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={`flex h-full w-full items-center justify-between gap-2 rounded-full border px-4 font-body text-[12px] font-medium tracking-[0.02em] transition-colors md:px-5 md:text-[13px] ${
          open
            ? 'border-[#1A3E9E] bg-[rgba(153,166,231,0.22)] font-semibold text-[#1A3E9E]'
            : 'border-[#D9D9D9] bg-transparent text-[#717171] hover:border-[#1A3E9E] hover:text-[#1A3E9E]'
        }`}
      >
        <span className="truncate">{selected.label}</span>
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
        <div className="absolute left-0 top-[calc(100%+6px)] z-50 min-w-full w-max max-w-[260px] rounded-[16px] bg-white px-2 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
          {options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => { onChange(opt.value); setOpen(false); }}
              className={`w-full rounded-full px-4 py-2.5 text-left font-body text-[13px] font-medium tracking-[0.02em] transition-colors hover:bg-[#F5F5F5] ${
                opt.value === value ? 'font-semibold text-[#101010]' : 'text-[#717171]'
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

function EmptyState() {
  return (
    <div className="flex min-h-[440px] w-full flex-col items-center justify-center gap-5 rounded-[20px] bg-[rgba(153,166,231,0.1)] px-5 py-12 text-center md:min-h-[520px] md:gap-6 md:rounded-[24px] xl:min-h-[604px] xl:px-9 xl:pb-[72px] xl:pt-[42px]">
      <img
        src="/images/our-works/no-results-illustration.webp"
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

  const handleScrollDown = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    const target = document.getElementById('beyond-expectations');
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <main className="relative w-full overflow-x-hidden bg-[#F7F7F7]">
      {/* HERO — navbar Anda tetap berada di luar komponen ini */}
      <section
        id="hero"
        aria-label="Our Works Hero"
        className="relative isolate flex h-[clamp(560px,41.666vw,800px)] w-full items-center justify-center overflow-hidden rounded-b-[clamp(24px,2.188vw,42px)] bg-[#101010]"
      >
        <img
          src="/images/our-works/our-works-hero-bg.webp"
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

        <div className="relative z-10 mx-auto flex w-full max-w-[900px] flex-col items-center gap-4 px-6 text-center md:gap-6">
          <div className="flex items-center gap-2 font-body text-[10px] font-bold uppercase leading-[1.3] tracking-[0.06em] text-[#E6FF2A] md:text-[12px] xl:text-[14px]">
            <span>Home</span>
            <span>&gt;</span>
            <span>Our Works</span>
          </div>
          <h1 className="font-heading text-[clamp(48px,5vw,96px)] font-medium leading-none tracking-[-0.02em] text-[#F7F7F7]">
            Our Works
          </h1>
        </div>

        <a
          href="#beyond-expectations"
          onClick={handleScrollDown}
          aria-label="Scroll to CTA"
          className="absolute bottom-[clamp(34px,3.698vw,71px)] left-1/2 z-20 flex h-[clamp(56px,4.167vw,80px)] w-[clamp(56px,4.167vw,80px)] -translate-x-1/2 items-center justify-center rounded-full border border-white/20 bg-white/[0.14] text-white shadow-[0_12px_30px_rgba(0,0,0,0.2)] backdrop-blur-[4px] transition duration-300 hover:-translate-y-1 hover:bg-white/20"
        >
          <IconScrollDown />
        </a>
      </section>

      {/* FEATURED: hilang setelah tombol Search ditekan */}
      {!hasSearched && (
        <section
          id="featured-section"
          aria-label="Featured Works"
          className="relative w-full scroll-mt-20 bg-[#F7F7F7] pb-0 pt-[64px] md:pt-[80px] xl:pt-[96px]"
        >
          {/* Heading — Restored to reference design */}
          <div className="mx-auto mb-8 flex w-full max-w-[1699px] flex-col items-center justify-center gap-3 px-[6vw] text-center md:mb-12 max-[1199px]:px-[4vw]">
            <div className="flex items-center gap-[8px]">
              <span className="h-[7.5px] w-[7.5px] shrink-0 bg-[#1A3E9E]" aria-hidden="true" />
              <span className="font-body text-[8px] font-extrabold uppercase leading-[1.6] tracking-[0.04em] text-[#1A3E9E] md:text-[10px] xl:text-[11px]">
                FEATURED WORKS
              </span>
            </div>
            <h2 className="font-heading text-[clamp(36px,4.5vw,72px)] font-medium leading-[1.08] tracking-[-0.02em] text-[#101010]">
              Amplify Your Business
              <br />
              in One Ecosystem
            </h2>
          </div>

          {/* Homepage-style carousel */}
          <FeaturedCarousel projects={featuredProjects.map((p) => ({ id: p.id, title: p.title, slug: p.slug, image: p.image, service: p.service, industry: p.industry }))} />
        </section>
      )}

      {/* EXPLORE / SEARCH RESULTS */}
      <section
        id="explore-section"
        aria-label="Explore Arsalynk Best Works"
        className="relative w-full scroll-mt-20 bg-[rgba(153,166,231,0.1)] px-[6vw] pb-[72px] pt-[72px] max-[1199px]:px-[4vw] md:pb-[90px] md:pt-[80px] xl:pb-[110px] xl:pt-[96px]"
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
              <FilterDropdown
                value={corporation}
                onChange={updateCorporation}
                options={[
                  { label: 'All Corporation', value: 'all' },
                  ...CORPORATION_OPTIONS.map((item) => ({ label: item, value: item })),
                ]}
                width="w-[calc(50%_-_4px)] sm:w-[165px]"
                ariaLabel="Select Type"
              />

              <FilterDropdown
                value={sortOrder}
                onChange={updateSortOrder}
                options={[
                  { label: 'Newest', value: 'newest' },
                  { label: 'Oldest', value: 'oldest' },
                ]}
                width="w-[calc(50%_-_4px)] sm:w-[120px]"
                ariaLabel="Sort works"
              />

              <FilterDropdown
                value={industry}
                onChange={updateIndustry}
                options={[
                  { label: 'Industry', value: 'all' },
                  ...INDUSTRY_OPTIONS.map((item) => ({ label: item, value: item })),
                ]}
                width="w-[calc(50%_-_4px)] sm:w-[145px]"
                ariaLabel="Select Industry"
              />

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
        <section className="w-full bg-[rgba(153,166,231,0.1)] px-[4vw] pb-[80px] pt-[64px] md:pb-[96px] md:pt-[80px] xl:px-[6vw] xl:pb-[110px] xl:pt-[96px]">
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

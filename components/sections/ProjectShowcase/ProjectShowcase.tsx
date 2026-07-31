'use client';

import { useState } from 'react';

const IconChevronLeft = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const IconChevronRight = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M9 18l6-6-6-6" />
  </svg>
);

const CATEGORIES = ["TECHNOLOGY", "SURVEY & DATA", "MEDIA"];

const MOCK_PROJECTS = [
  {
    id: 1,
    client: "SINAU PRINT",
    title: "Sinau Print ERP & Marketplace Platform",
    category: "WEB PLATFORM • ERP SYSTEM",
    tabCategory: "TECHNOLOGY",
    image: "/images/projects/sinau-print-erp/1.webp",
  },
  {
    id: 2,
    client: "ARTIC ANALYTICA",
    title: "Artic Complex Web Architecture & Portal",
    category: "COMPLEX WEB • DATA PLATFORM",
    tabCategory: "TECHNOLOGY",
    image: "/images/projects/artic-complex-web/1.webp",
  },
  {
    id: 3,
    client: "MYBOSS",
    title: "MyBoss Connected IoT Hardware & Control System",
    category: "IOT SYSTEM • IT INFRASTRUCTURE",
    tabCategory: "TECHNOLOGY",
    image: "/images/projects/myboss-iot-system/1.webp",
  },
  {
    id: 4,
    client: "ALTATIC",
    title: "Altatic Data Analytics & Intelligence Dashboard",
    category: "SURVEY & DATA • ANALYTICS PLATFORM",
    tabCategory: "SURVEY & DATA",
    image: "/images/projects/altatic-analytic/1.webp",
  },
  {
    id: 5,
    client: "WEB MEDIA",
    title: "Web Media Corporate Profile & Digital Presence",
    category: "MEDIA • CORPORATE PROFILE",
    tabCategory: "MEDIA",
    image: "/images/projects/web-media-profile/1.webp",
  },
];

export default function ProjectShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>('TECHNOLOGY');

  const filteredProjects = MOCK_PROJECTS.filter(p => p.tabCategory === activeCategory);

  return (
    <section className="relative bg-[#F7F7F7] py-[100px] overflow-x-hidden" id="portfolio" aria-label="We Build It All">
      <div className="w-full max-w-[1920px] mx-auto px-[clamp(1rem,5.6vw,6.75rem)] mb-[48px]">
        <div className="flex flex-col min-[1024px]:flex-row min-[1024px]:items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-[9px] mb-4">
              <span className="w-[7px] h-[7px] bg-[#1A3E9E] inline-block" />
              <span className="font-heading text-[9px] md:text-[10px] font-semibold text-[#1A3E9E] uppercase tracking-[0.06em]">
                FEATURED WORKS
              </span>
            </div>
            <h2 className="font-heading font-medium text-[clamp(36px,5.2vw,68px)] leading-[1.05] tracking-[-0.03em] text-[#101010] max-w-[800px]">
              We Build It All
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex h-[38px] md:h-[40px] items-center justify-center gap-1.5 rounded-full border px-4 md:px-5 font-body text-[12px] md:text-[13px] font-medium transition-colors ${
                  activeCategory === cat
                    ? 'border-[#1A3E9E] bg-[rgba(153,166,231,0.22)] font-semibold text-[#1A3E9E]'
                    : 'border-[#D9D9D9] bg-transparent text-[#717171] hover:border-[#1A3E9E] hover:text-[#1A3E9E]'
                }`}
              >
                {activeCategory === cat && (
                  <span className="h-1.5 w-1.5 rounded-full bg-[#1A3E9E]" />
                )}
                <span>{cat}</span>
              </button>
            ))}

            <a
              href="/our-works"
              className="inline-flex h-[38px] md:h-[40px] items-center justify-center gap-2 px-5 rounded-full border border-[#1A3E9E] bg-[#1A3E9E] text-white font-body text-[11px] md:text-[12px] font-extrabold uppercase tracking-[0.05em] hover:bg-[#152571] transition-all"
            >
              SEE ALL WORKS
            </a>
          </div>
        </div>
      </div>

      <ProjectCarouselTrack key={activeCategory} projects={filteredProjects} />
    </section>
  );
}

function ProjectCarouselTrack({ projects }: { projects: typeof MOCK_PROJECTS }) {
  const LOOP_COUNT = 30;
  const extendedProjects = Array(LOOP_COUNT).fill(projects).flat();
  const startIndex = Math.floor((LOOP_COUNT * projects.length) / 2);
  const [activeIndex, setActiveIndex] = useState(startIndex);

  const nextSlide = () => setActiveIndex(prev => prev + 1);
  const prevSlide = () => setActiveIndex(prev => prev - 1);

  const [dragStart, setDragStart] = useState<number | null>(null);
  const handleDragStart = (clientX: number) => setDragStart(clientX);
  const handleDragEnd = (clientX: number) => {
    if (dragStart === null) return;
    const diff = dragStart - clientX;
    if (diff > 50) nextSlide();
    if (diff < -50) prevSlide();
    setDragStart(null);
  };

  return (
    <div 
      className="relative w-full h-[760px] max-[1440px]:h-[600px] max-[1024px]:h-[500px] max-[768px]:h-[400px]"
      onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
      onTouchEnd={(e) => handleDragEnd(e.changedTouches[0].clientX)}
      onMouseDown={(e) => handleDragStart(e.clientX)}
      onMouseUp={(e) => handleDragEnd(e.clientX)}
      onMouseLeave={(e) => {
        if (dragStart !== null) handleDragEnd(e.clientX);
      }}
    >
      <div 
        className="absolute left-0 top-0 h-full flex gap-[16px]"
        style={{
           '--slide-width': 'clamp(300px, 85vw, 1413px)',
           transform: `translate3d(calc(50vw - (var(--slide-width) / 2) - ${activeIndex} * (var(--slide-width) + 16px)), 0, 0)`,
           transition: 'transform 900ms cubic-bezier(0.22, 1, 0.36, 1)'
        } as React.CSSProperties}
      >
        {extendedProjects.map((project, idx) => (
           <div 
             key={`${project.id}-${idx}`}
             className={`relative shrink-0 w-[var(--slide-width)] h-full rounded-[32px] overflow-hidden group cursor-pointer transition-opacity duration-700 select-none ${idx !== activeIndex ? 'opacity-70 hover:opacity-100' : 'opacity-100'}`}
             onClick={() => setActiveIndex(idx)}
           >
             <img
               src={project.image}
               alt={project.title}
               className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] origin-center pointer-events-none"
             />
             <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-transparent pointer-events-none" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 pointer-events-none" />
             <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-black/90 to-transparent opacity-70 pointer-events-none" />

             <div className="absolute left-[80px] bottom-[80px] max-[1024px]:left-[40px] max-[1024px]:bottom-[40px] max-[768px]:left-[24px] max-[768px]:bottom-[24px] right-[80px] pointer-events-none">
               <h3 className="font-heading font-medium text-[clamp(28px,4vw,56px)] leading-[1.1] tracking-[-0.02em] text-white mb-[12px] drop-shadow-lg">
                 {project.title}
               </h3>
               <p className="font-body text-[13px] font-bold tracking-[0.1em] text-[#A2A627] uppercase drop-shadow-md">
                 {project.category}
               </p>
             </div>

             <div className="absolute right-[80px] bottom-[80px] max-[1024px]:right-[40px] max-[1024px]:bottom-[40px] max-[768px]:right-[24px] max-[768px]:bottom-[24px] pointer-events-auto">
               <a href={`/works/${project.id}`} className="flex w-[48px] h-[48px] items-center justify-center rounded-[8px] border border-white/20 bg-black/40 text-white backdrop-blur-sm transition-all duration-300 hover:bg-black/80 hover:scale-105">
                 <IconChevronRight size={20} />
               </a>
             </div>
           </div>
        ))}
      </div>

      <div className="absolute left-[clamp(24px,4vw,64px)] top-1/2 -translate-y-1/2 z-20">
        <button
          onClick={prevSlide}
          className="flex h-[46px] w-[46px] md:h-[54px] md:w-[54px] xl:h-[64px] xl:w-[64px] items-center justify-center rounded-[5px] border border-[#4C4C4C] bg-[#101010]/40 text-[#D9D9D9] transition-all duration-300 hover:border-[#D9D9D9] hover:bg-[#101010]/80"
          aria-label="Previous Slide"
        >
          <IconChevronLeft size={24} />
        </button>
      </div>
      <div className="absolute right-[clamp(24px,4vw,64px)] top-1/2 -translate-y-1/2 z-20">
        <button
          onClick={nextSlide}
          className="flex h-[46px] w-[46px] md:h-[54px] md:w-[54px] xl:h-[64px] xl:w-[64px] items-center justify-center rounded-[5px] border border-[#4C4C4C] bg-[#101010]/40 text-[#D9D9D9] transition-all duration-300 hover:border-[#D9D9D9] hover:bg-[#101010]/80"
          aria-label="Next Slide"
        >
          <IconChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
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
    client: "PADEL 2026",
    title: "Live Streaming Event for Sirkuit Nasional Padel 2026",
    category: "LIVE EVENT • EVENT DOCUMENTATION",
    tabCategory: "MEDIA",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 2,
    client: "X-1 TIRE",
    title: "Company Profile Revamp for X-1 Tire",
    category: "WEBSITE DESIGN • COMPANY PROFILE",
    tabCategory: "TECHNOLOGY",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 3,
    client: "SINAU PRINT",
    title: "Sinau Print Marketplace Website",
    category: "BRANDING • SURVEY AND ANALYTICS",
    tabCategory: "SURVEY & DATA",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function ProjectShowcase() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredProjects = activeCategory
    ? MOCK_PROJECTS.filter(p => p.tabCategory === activeCategory)
    : MOCK_PROJECTS;

  return (
    <section className="relative bg-[#F7F7F7] py-[100px] overflow-x-hidden" id="portfolio" aria-label="We Build It All">
      <div className="w-full max-w-[1920px] mx-auto px-[clamp(1rem,5.6vw,6.75rem)] mb-[48px]">
        <div className="flex flex-col min-[1024px]:flex-row min-[1024px]:items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-[10px] mb-4">
              <span className="w-[8px] h-[8px] bg-[#0055FE] inline-block" />
              <span className="font-heading font-extrabold text-[12px] tracking-[0.2em] text-[#0055FE] uppercase">
                FEATURED WORKS
              </span>
            </div>
            <h2 className="font-heading font-medium text-[clamp(40px,5.2vw,72px)] leading-[1.05] tracking-[-0.03em] text-[#101010] max-w-[800px]">
              We Build It All
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex p-[4px] bg-white rounded-full border border-[#E5E5E5] shadow-sm">
              <button
                onClick={() => setActiveCategory(null)}
                className={`px-[24px] py-[8px] rounded-full text-[13px] font-medium transition-all duration-300 ${
                  activeCategory === null
                    ? 'bg-transparent text-[#101010] border border-[#B0B0B0]'
                    : 'text-[#666666] hover:text-[#101010]'
                }`}
              >
                ALL
              </button>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-[24px] py-[8px] rounded-full text-[13px] font-medium transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-transparent text-[#101010] border border-[#B0B0B0]'
                      : 'text-[#666666] hover:text-[#101010]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <a
              href="/our-works"
              className="inline-flex items-center gap-2 px-[24px] py-[14px] rounded-full border border-[#E5E5E5] bg-white text-[#101010] font-heading font-bold text-[13px] tracking-[0.05em] uppercase hover:bg-slate-50 transition-all duration-300"
            >
              SEE ALL WORKS
            </a>
          </div>
        </div>
      </div>

      <ProjectCarouselTrack key={activeCategory || 'all'} projects={filteredProjects} />
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
          className="w-[56px] h-[56px] flex items-center justify-center rounded-[12px] border border-white/20 text-white transition-all duration-300"
          aria-label="Previous Slide"
          style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.0))', backdropFilter: 'blur(12px)' }}
        >
          <IconChevronLeft size={24} />
        </button>
      </div>
      <div className="absolute right-[clamp(24px,4vw,64px)] top-1/2 -translate-y-1/2 z-20">
        <button
          onClick={nextSlide}
          className="w-[56px] h-[56px] flex items-center justify-center rounded-[12px] border border-[#202020]/20 text-white transition-all duration-300"
          aria-label="Next Slide"
          style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.0))', backdropFilter: 'blur(12px)' }}
        >
          <IconChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
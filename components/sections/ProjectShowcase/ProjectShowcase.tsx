'use client';

import { useState, useRef } from 'react';

/* ── Pure SVG Icons ── */
const IconArrowRight = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const IconChevronLeft = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const IconChevronRight = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M9 18l6-6-6-6" />
  </svg>
);

/* ── Hardcoded Premium Project Data ── */
const MOCK_PROJECTS = [
  {
    id: 1,
    client: "SINAR PRINT",
    title: "Sinar Print Marketplace Website",
    category: "Web App",
    desc: "A custom B2B marketplace platform for industrial printing needs with real-time order management.",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    client: "K-SUBHUB",
    title: "Company Profile for K-Subhub",
    category: "Web App",
    desc: "Premium corporate presentation site highlighting automated subscription services and integrations.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    client: "NAVICOM",
    title: "Smart Home Management System",
    category: "IT Infrastructure",
    desc: "Integrated dashboard regulating connected smart appliances and security sensors across thousands of units.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    client: "KORLANTAS POLRI",
    title: "E-Drives for Korlantas Polri",
    category: "IT Infrastructure",
    desc: "Backend and IoT integration system for national vehicle registration and licensing digital platform.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop",
  },
];

const CATEGORIES = ["All", "Web App", "Mobile App", "IT Infrastructure"];

export default function ProjectShowcase() {
  const [activeCategory, setActiveCategory] = useState("All");
  const scrollRef = useRef<HTMLDivElement>(null);

  const filteredProjects = activeCategory === "All"
    ? MOCK_PROJECTS
    : MOCK_PROJECTS.filter(p => p.category === activeCategory);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-[#fafafa] py-[120px] max-[1024px]:py-[96px] max-[768px]:py-[72px] overflow-hidden" id="portfolio" aria-label="We Build It All">
      <div className="w-full max-w-[1700px] mx-auto px-[110px] max-[1280px]:px-[64px] max-[1024px]:px-[40px] max-[768px]:px-[24px] max-[480px]:px-[16px]">
        
        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-[48px]">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-[6px] h-[6px] rounded-full bg-blue-600" />
              <span className="font-heading text-[10px] font-extrabold tracking-[0.25em] text-blue-600 uppercase">
                PORTFOLIO
              </span>
            </div>
            <h2 className="font-heading font-bold text-[48px] max-[1280px]:text-[40px] max-[1024px]:text-[36px] max-[768px]:text-[28px] max-[480px]:text-[24px] leading-tight text-[#101010]">
              We Build It All
            </h2>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex gap-2 flex-wrap">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-[18px] py-2 rounded-full font-body text-[11px] font-bold border transition-all duration-250 cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-blue-600 text-white border-blue-600 shadow-[0_4px_16px_rgba(37,99,235,0.2)]'
                      : 'bg-white text-[#717171] border-[#E5E5E5] hover:border-[#D9D9D9] hover:text-[#101010]'
                  }`}
                  type="button"
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Slider arrows next to tabs */}
            <div className="hidden md:flex gap-2">
              <button 
                onClick={() => scrollCarousel('left')} 
                className="w-9 h-9 rounded-full border border-[#E5E5E5] bg-white text-[#4C4C4C] flex items-center justify-center cursor-pointer transition-all duration-250 hover:bg-slate-100 hover:border-[#D9D9D9] hover:text-[#101010]" 
                aria-label="Previous"
              >
                <IconChevronLeft size={16} />
              </button>
              <button 
                onClick={() => scrollCarousel('right')} 
                className="w-9 h-9 rounded-full border border-[#E5E5E5] bg-white text-[#4C4C4C] flex items-center justify-center cursor-pointer transition-all duration-250 hover:bg-slate-100 hover:border-[#D9D9D9] hover:text-[#101010]" 
                aria-label="Next"
              >
                <IconChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Tracks */}
        <div className="relative w-full">
          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" ref={scrollRef}>
            {filteredProjects.map((project) => (
              <a
                key={project.id}
                href={`/works/${project.id}`}
                className="group relative shrink-0 w-[290px] min-[480px]:w-[360px] md:w-[420px] aspect-[4/3] rounded-[24px] overflow-hidden snap-start shadow-[0_4px_20px_rgba(0,0,0,0.05)] flex flex-col justify-between no-underline"
              >
                {/* Image Backdrop */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover brightness-[0.65] transition-transform duration-400 ease-in-out group-hover:scale-[1.05]"
                />
                
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent z-[1]" />

                {/* Card Info Content */}
                <div className="relative z-[2] h-full p-6 flex flex-col justify-between">
                  <div>
                    <span className="inline-block font-body text-[9px] font-extrabold uppercase tracking-[0.1em] text-[#E6FF2A] bg-[#050b18]/70 border border-white/10 px-3 py-1.5 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <div>
                    <p className="font-heading text-[11px] font-bold text-slate-300 tracking-[0.05em] mb-1.5 uppercase">
                      {project.client}
                    </p>
                    <h3 className="font-heading font-bold text-[18px] leading-snug text-white mb-3 transition-colors duration-150 group-hover:text-[#E6FF2A]">
                      {project.title}
                    </h3>
                    <div className="inline-flex items-center gap-1 font-body text-[11px] font-bold text-slate-200 opacity-80 transition-opacity duration-150 group-hover:opacity-100">
                      Explore <IconArrowRight size={12} />
                    </div>
                  </div>
                </div>
              </a>
            ))}

            {/* See All Card at the end */}
            <a href="/works" className="group shrink-0 w-[180px] aspect-[4/3] border-2 border-dashed border-[#C8C8C8] bg-white rounded-[24px] flex flex-col items-center justify-center gap-4 no-underline snap-start transition-all duration-250 hover:-translate-y-[2px] hover:border-blue-600">
              <div className="w-[44px] h-[44px] rounded-full bg-blue-600 text-white flex items-center justify-center shadow-[0_4px_12px_rgba(37,99,235,0.2)]">
                <IconArrowRight size={18} />
              </div>
              <span className="font-heading text-[13px] font-bold text-[#4C4C4C] text-center leading-tight">See All<br />Projects</span>
            </a>
          </div>
        </div>

        {/* Bottom Description */}
        <div className="mt-[40px] border-t border-[#E5E5E5] pt-[24px]">
          <p className="font-body text-sm leading-relaxed text-[#4C4C4C] max-w-[680px]">
            From enterprise web portals to high-performance analytics systems, we build solutions 
            that deliver exceptional user experiences and robust, scalable backend operations.
          </p>
        </div>

      </div>
    </section>
  );
}

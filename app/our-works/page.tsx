'use client';

import { useState } from 'react';
import Link from 'next/link';

/* ── Pure SVG Icons ── */
const IconChevronDown = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const IconChevronRight = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M9 5l7 7-7 7" />
  </svg>
);

const IconArrowRight = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const PROJECTS = [
  {
    id: 1,
    title: "Company Profile Revamp for X-1 Tire",
    tag: "X-1 TIRE / COMPANY PROFILE",
    category: "Web App",
    slug: "#",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Sinau Print Marketplace Website",
    tag: "SINAU PRINT / MARKETPLACE WEB",
    category: "Web App",
    slug: "sinau-print-semarang",
    image: "https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Live Streaming Event for Sirkuit Nasional Padel 2026",
    tag: "PADEL NASIONAL / LIVE STREAMING",
    category: "IoT System",
    slug: "#",
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Company Profile Revamp for X-1 Tire",
    tag: "X-1 TIRE / COMPANY PROFILE",
    category: "Web App",
    slug: "#",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Sinau Print Marketplace Website",
    tag: "SINAU PRINT / MARKETPLACE WEB",
    category: "Web App",
    slug: "sinau-print-semarang",
    image: "https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Live Streaming Event for Sirkuit Nasional Padel 2026",
    tag: "PADEL NASIONAL / LIVE STREAMING",
    category: "IoT System",
    slug: "#",
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=600&auto=format&fit=crop"
  }
];

export default function OurWorksPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const handleScrollDown = () => {
    const el = document.getElementById("featured-section");
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const filteredProjects = PROJECTS.filter(p => activeCategory === 'All' || p.category === activeCategory);

  return (
    <div className="w-full relative bg-[#fafafa] min-h-screen">
      
      {/* HERO HEADER SECTION */}
      <section className="relative w-full h-[60vh] min-h-[480px] max-[768px]:h-[50vh] bg-[#020617] overflow-hidden flex items-center justify-center" id="hero" aria-label="Our Works Hero">
        <div className="absolute inset-0 z-[1]" aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop"
            alt="Digital Connected Networks"
            className="w-full h-full object-cover opacity-45 brightness-60 contrast-110"
          />
        </div>

        <div 
          className="absolute inset-0 z-[2] pointer-events-none" 
          aria-hidden="true"
          style={{
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.015) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-[140px] bg-gradient-to-t from-[#fafafa] to-transparent z-[3] pointer-events-none" aria-hidden="true" />

        <div className="relative z-[5] text-center max-w-[720px] px-6 mt-10">
          <span className="inline-block font-heading text-[10px] font-extrabold tracking-[0.25em] text-lime-yellow uppercase mb-4">
            HOME &gt; OUR WORKS
          </span>
          <h1 className="font-heading font-bold text-[56px] max-[1024px]:text-[44px] max-[768px]:text-[36px] leading-tight tracking-tight text-white mb-5">
            Our Works
          </h1>
          <p className="font-body text-lg leading-relaxed text-[#A0A0A0] max-w-[600px] mx-auto">
            Mendokumentasikan inovasi solusi digital, integrasi sistem, dan transformasi teknologi 
            yang telah kami deliver kepada para klien.
          </p>

          <button 
            onClick={handleScrollDown} 
            className="absolute bottom-[30px] left-1/2 -translate-x-1/2 w-[44px] h-[44px] rounded-full bg-white/8 border border-white/15 text-white flex items-center justify-center cursor-pointer z-[5] transition-colors duration-150 hover:bg-white/15 animate-bounce-slow" 
            aria-label="Scroll down"
          >
            <IconChevronDown />
          </button>
        </div>
      </section>

      {/* FEATURED CAROUSEL SECTION */}
      <section id="featured-section" className="bg-[#fafafa] pt-[80px] pb-10 relative z-[4]" aria-label="Featured Works Carousel">
        <div className="w-full max-w-[1700px] mx-auto px-[110px] max-[1280px]:px-[64px] max-[1024px]:px-[40px] max-[768px]:px-[24px] max-[480px]:px-[16px]">
          <div className="text-center mb-[48px]">
            <span className="font-heading text-[10px] font-extrabold text-blue-600 tracking-[0.1em] inline-block mb-3">
              PORTFOLIO HIGHLIGHTS
            </span>
            <h2 className="font-heading font-bold text-[40px] max-[1024px]:text-[32px] max-[768px]:text-[28px] leading-tight text-slate-900 tracking-tight">
              Amplify Your Business<br />in One Ecosystem
            </h2>
          </div>

          {/* Slider track row */}
          <div className="flex items-center justify-center gap-6 relative w-full">
            {/* Left Card partially visible */}
            <div className="hidden md:block relative w-[20%] aspect-[16/10] rounded-[24px] overflow-hidden opacity-35 filter blur-[2px] grayscale-[0.5] cursor-pointer" aria-hidden="true">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop"
                alt="Website Mockup Left"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
            </div>

            {/* Center main Card */}
            <Link href="/our-works/sinau-print-semarang" className="relative w-full md:w-[60%] aspect-[16/10] rounded-[24px] overflow-hidden shadow-[0_15px_45px_rgba(0,0,0,0.08)] z-[2] no-underline">
              <img
                src="https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=800&auto=format&fit=crop"
                alt="Sinau Print Marketplace Website"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent z-[1]" />
              <div className="relative z-[2] p-10 h-full flex flex-col justify-end">
                <h3 className="font-heading font-bold text-[28px] max-[768px]:text-[20px] text-white mb-2 tracking-tight">Sinau Print Marketplace Website</h3>
                <span className="font-heading text-[10px] font-extrabold text-lime-yellow tracking-[0.05em]">WEB SYSTEM / E-COMMERCE</span>
              </div>
            </Link>

            {/* Right Card partially visible */}
            <div className="hidden md:block relative w-[20%] aspect-[16/10] rounded-[24px] overflow-hidden opacity-35 filter blur-[2px] grayscale-[0.5] cursor-pointer" aria-hidden="true">
              <img
                src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=600&auto=format&fit=crop"
                alt="Website Mockup Right"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
            </div>

            {/* Navigation arrows overlay */}
            <button className="absolute top-1/2 -translate-y-1/2 left-[17%] max-[1024px]:left-[8%] max-[768px]:left-[4%] w-12 h-12 rounded-full bg-white/90 border border-black/6 text-slate-900 font-mono text-lg font-bold cursor-pointer flex items-center justify-center shadow-md z-10 transition-all duration-150 hover:bg-white hover:scale-105" aria-label="Previous slide">&lt;</button>
            <button className="absolute top-1/2 -translate-y-1/2 right-[17%] max-[1024px]:right-[8%] max-[768px]:right-[4%] w-12 h-12 rounded-full bg-white/90 border border-black/6 text-slate-900 font-mono text-lg font-bold cursor-pointer flex items-center justify-center shadow-md z-10 transition-all duration-150 hover:bg-white hover:scale-105" aria-label="Next slide">&gt;</button>
          </div>

        </div>
      </section>

      {/* EXPLORE BEST WORKS GRID SECTION */}
      <section className="bg-[#fafafa] pt-[60px] pb-[100px] relative z-[4]" aria-label="Explore Best Works">
        <div className="w-full max-w-[1700px] mx-auto px-[110px] max-[1280px]:px-[64px] max-[1024px]:px-[40px] max-[768px]:px-[24px] max-[480px]:px-[16px]">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-5">
            <h2 className="font-heading text-[32px] max-[768px]:text-[24px] font-bold leading-snug text-slate-900 tracking-tight">Explore Arsalynk<br />Best Works</h2>
            
            {/* Filter Tabs */}
            <div className="flex gap-2 bg-slate-100 p-[6px] rounded-full border border-black/4 max-[768px]:w-full max-[768px]:overflow-x-auto">
              {['All', 'Web App', 'Mobile App', 'IoT System'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`font-heading font-extrabold text-[11px] tracking-[0.02em] px-5 py-[10px] rounded-full border-none cursor-pointer transition-all duration-150 whitespace-nowrap ${
                    activeCategory === cat ? 'bg-blue-600 text-white shadow-[0_4px_12px_rgba(37,99,235,0.15)]' : 'bg-transparent text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* 2-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((p) => (
              <Link 
                key={p.id} 
                href={p.slug !== "#" ? `/our-works/${p.slug}` : "#"} 
                className="group relative aspect-[16/10] rounded-[20px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-end no-underline cursor-pointer transition-transform duration-400 hover:-translate-y-1"
              >
                <img src={p.image} alt={p.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-400 group-hover:scale-[1.04]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent z-[1]" />
                
                <div className="relative z-[2] p-7 md:p-[28px_36px] max-[768px]:p-5 flex justify-between items-center w-full">
                  <div className="max-w-[80%]">
                    <h3 className="font-heading font-bold text-[20px] max-[768px]:text-[16px] text-white leading-snug mb-1.5 tracking-tight">{p.title}</h3>
                    <span className="font-heading text-[9px] font-extrabold text-lime-yellow tracking-[0.05em]">{p.tag}</span>
                  </div>
                  
                  <div className="w-[36px] h-[36px] rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center transition-all duration-150 group-hover:bg-lime-yellow group-hover:border-lime-yellow group-hover:text-[#050b18] group-hover:scale-105">
                    <IconChevronRight size={12} />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Load More Button */}
          <div className="flex justify-center mt-14">
            <button className="bg-transparent border border-black/8 text-slate-900 font-heading font-extrabold text-[10px] tracking-[0.1em] px-7 py-[14px] rounded-full cursor-pointer shadow-sm transition-all duration-150 hover:bg-slate-100 hover:border-black/15">
              LOAD MORE
            </button>
          </div>

        </div>
      </section>

      {/* BOTTOM CTA BANNER SECTION */}
      <section className="bg-[#050b18] py-[100px] relative overflow-hidden z-[4] text-center" aria-label="See What Artic Analytica Can Do">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.15)_0%,transparent_60%)] pointer-events-none z-[1]" aria-hidden="true" />
        
        <div className="w-full max-w-[1700px] mx-auto px-[110px] max-[1280px]:px-[64px] max-[1024px]:px-[40px] max-[768px]:px-[24px] max-[480px]:px-[16px] relative z-[2]">
          <div className="max-w-[650px] mx-auto flex flex-col items-center">
            <h2 className="font-heading font-bold text-[44px] max-[768px]:text-[32px] leading-snug text-white mb-4 tracking-tight">
              See What Artic Analytica Can Do
            </h2>
            <p className="font-body text-base text-slate-400 mb-[36px]">
              Optimalkan sistem informasi dan analisis data korporasi Anda untuk pertumbuhan maksimal.
            </p>
            <div className="flex items-center justify-center gap-4">
              <a href="#contact" className="bg-lime-yellow text-[#050b18] !text-[#050b18] font-body font-extrabold text-[11px] tracking-[0.05em] uppercase px-7 py-[14px] rounded-full inline-flex items-center gap-2 shadow-[0_4px_16px_rgba(230,255,42,0.15)] transition-all duration-150 hover:scale-[1.02] hover:shadow-[0_6px_20px_rgba(230,255,42,0.25)]">
                GET STARTED <IconArrowRight size={12} />
              </a>
              <a href="/our-business" className="bg-transparent border border-white/15 text-white font-body font-extrabold text-[11px] tracking-[0.05em] uppercase px-7 py-[14px] rounded-full transition-all duration-150 hover:bg-white/5 hover:border-white/30">
                OTHER BUSINESS
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

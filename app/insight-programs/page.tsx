'use client';

import { useState } from 'react';
import GrowthMetrics from '@/components/sections/GrowthMetrics/GrowthMetrics';

/* ── Pure SVG Icons ── */
const IconChevronDown = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const IconChevronRight = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M9 5l7 7-7 7" />
  </svg>
);

const IconSearch = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <circle cx="11" cy="11" r="8" />
    <path d="M21 21l-4.35-4.35" />
  </svg>
);

const CASE_STUDIES = [
  {
    id: 1,
    title: "How We Built an Election Data Tracking System",
    category: "WEB DEVELOPMENT",
    brand: "Adsvar",
    desc: "A highly resilient cloud database and tracking system built to handle millions of real-time data inputs securely during national polls.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Modernizing Operations with Enterprise IoT",
    category: "IOT INTEGRATION",
    brand: "Kaluna Technology",
    desc: "Deploying automated telemetry sensors and hardware controllers across high-scale manufacturing factories for real-time asset monitoring.",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "How We Broadcasted PBSI Sirnas Jawa Tengah",
    category: "LIVE BROADCAST",
    brand: "LoxLive",
    desc: "Providing zero-latency live production, multiple angle camera setups, and cloud mixing software for Indonesian national badminton matches.",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Modernizing Operations with Enterprise IoT",
    category: "IOT INTEGRATION",
    brand: "Kaluna Technology",
    desc: "Deploying automated telemetry sensors and hardware controllers across high-scale manufacturing factories for real-time asset monitoring.",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "How We Built an Election Data Tracking System",
    category: "WEB DEVELOPMENT",
    brand: "Adsvar",
    desc: "A highly resilient cloud database and tracking system built to handle millions of real-time data inputs securely during national polls.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "How We Broadcasted PBSI Sirnas Jawa Tengah",
    category: "LIVE BROADCAST",
    brand: "LoxLive",
    desc: "Providing zero-latency live production, multiple angle camera setups, and cloud mixing software for Indonesian national badminton matches.",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 7,
    title: "How We Built an Election Data Tracking System",
    category: "WEB DEVELOPMENT",
    brand: "Adsvar",
    desc: "A highly resilient cloud database and tracking system built to handle millions of real-time data inputs securely during national polls.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 8,
    title: "Modernizing Operations with Enterprise IoT",
    category: "IOT INTEGRATION",
    brand: "Kaluna Technology",
    desc: "Deploying automated telemetry sensors and hardware controllers across high-scale manufacturing factories for real-time asset monitoring.",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 9,
    title: "How We Broadcasted PBSI Sirnas Jawa Tengah",
    category: "LIVE BROADCAST",
    brand: "LoxLive",
    desc: "Providing zero-latency live production, multiple angle camera setups, and cloud mixing software for Indonesian national badminton matches.",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=600&auto=format&fit=crop"
  }
];

export default function InsightProgramsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');

  const handleScrollDown = () => {
    const el = document.getElementById("explore-cases");
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const filteredCases = CASE_STUDIES.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.brand.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilter === 'All' || item.category === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="w-full relative bg-[#fafafa] min-h-screen">
      
      {/* HERO HEADER SECTION */}
      <section className="relative w-full h-[60vh] min-h-[480px] max-[768px]:h-[50vh] bg-[#020617] overflow-hidden flex items-center justify-center" id="hero" aria-label="Insight & Programs Hero">
        <div className="absolute inset-0 z-[1]" aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop"
            alt="Professional Live Recording Gimbal"
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
            OUR SUCCESS STORIES
          </span>
          <h1 className="font-heading font-bold text-[56px] max-[1024px]:text-[44px] max-[768px]:text-[36px] leading-tight tracking-tight text-white mb-5">
            Case Studies
          </h1>
          <p className="font-body text-lg leading-relaxed text-[#A0A0A0] max-w-[600px] mx-auto">
            Eksplorasi proyek-proyek inovatif yang kami kerjakan untuk mendampingi transformasi digital para mitra industri.
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

      {/* FEATURED CASE STUDY CARD (LARGE BOX) */}
      <section className="bg-[#fafafa] pt-10 pb-5 relative z-[4]" aria-label="Featured Case Study">
        <div className="w-full max-w-[1700px] mx-auto px-[110px] max-[1280px]:px-[64px] max-[1024px]:px-[40px] max-[768px]:px-[24px] max-[480px]:px-[16px]">
          <div className="relative w-full aspect-[2.4/1] min-h-[380px] max-[1024px]:aspect-[1.8/1] max-[768px]:aspect-[1.4/1] rounded-[24px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.04)] flex flex-col justify-end">
            <img
              src="https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=1200&auto=format&fit=crop"
              alt="National Badminton Stadium Court Match"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-[1]" />

            <div className="relative z-[2] p-12 max-[768px]:p-6 flex flex-col justify-end">
              <span className="font-heading text-[11px] font-extrabold text-lime-yellow tracking-[0.1em] mb-3">LOXLIVE / LIVE BROADCAST</span>
              <h2 className="font-heading font-bold text-[32px] max-[768px]:text-[24px] leading-snug text-white max-w-[780px] tracking-tight">
                Delivering a Seamless National Badminton Championship Experience
              </h2>
              
              <div className="flex justify-between items-center mt-8 w-full">
                <div className="flex gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-yellow shadow-[0_0_8px_#E6FF2A]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-white opacity-30" />
                  <span className="w-1.5 h-1.5 rounded-full bg-white opacity-30" />
                </div>
                <div className="flex gap-3">
                  <button className="w-9 h-9 rounded-full border border-white/15 bg-white/5 text-white font-mono text-sm font-bold cursor-pointer flex items-center justify-center hover:bg-white/12 hover:border-white/30" aria-label="Previous featured study">&lt;</button>
                  <button className="w-9 h-9 rounded-full border border-white/15 bg-white/5 text-white font-mono text-sm font-bold cursor-pointer flex items-center justify-center hover:bg-white/12 hover:border-white/30" aria-label="Next featured study">&gt;</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPLORE GRID SECTION */}
      <section id="explore-cases" className="bg-[#fafafa] pt-[60px] pb-[100px] relative z-[4]" aria-label="Explore Case Studies Grid">
        <div className="w-full max-w-[1700px] mx-auto px-[110px] max-[1280px]:px-[64px] max-[1024px]:px-[40px] max-[768px]:px-[24px] max-[480px]:px-[16px]">
          
          <div className="flex justify-between items-center mb-10 flex-wrap gap-5 max-[768px]:flex-col max-[768px]:items-start">
            <h2 className="font-heading text-[32px] font-bold tracking-tight text-slate-900">Explore Case Studies</h2>
            
            <div className="flex items-center gap-4 max-[768px]:w-full max-[768px]:flex-col max-[768px]:items-stretch">
              <div className="relative w-[240px] max-[768px]:w-full">
                <input
                  type="text"
                  placeholder="Search Case..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-[46px] bg-white border border-black/6 rounded-[12px] pl-10 pr-4 font-body text-[13px] text-slate-700 focus:outline-none focus:border-blue-600 focus:ring-3 focus:ring-blue-600/10"
                />
                <span className="absolute left-[14px] top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                  <IconSearch size={14} />
                </span>
              </div>

              <div className="relative w-[180px] max-[768px]:w-full">
                <select
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  className="w-full h-[46px] bg-white border border-black/6 rounded-[12px] pl-4 pr-9 font-body text-[13px] text-slate-700 cursor-pointer appearance-none focus:outline-none focus:border-blue-600 focus:ring-3 focus:ring-blue-600/10"
                >
                  <option value="All">Filter by Category</option>
                  <option value="WEB DEVELOPMENT">Web Development</option>
                  <option value="IOT INTEGRATION">IoT Integration</option>
                  <option value="LIVE BROADCAST">Live Broadcast</option>
                </select>
                <span className="absolute right-[14px] top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                  <IconChevronDown size={12} />
                </span>
              </div>
            </div>
          </div>

          {/* 3-Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCases.map((item) => (
              <div key={item.id} className="group bg-white rounded-[20px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col transition-transform duration-400 hover:-translate-y-1">
                <div className="w-full aspect-[16/10] overflow-hidden relative">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-[1.04]" />
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-heading text-[10px] font-extrabold text-blue-600 uppercase tracking-[0.05em]">{item.brand}</span>
                    <span className="font-heading text-[9px] font-extrabold text-slate-400 tracking-[0.05em]">{item.category}</span>
                  </div>
                  <h3 className="font-heading font-bold text-[18px] leading-snug text-slate-900 mb-2.5 tracking-tight">{item.title}</h3>
                  <p className="font-body text-[13px] leading-relaxed text-slate-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {filteredCases.length > 0 && (
            <div className="flex justify-center mt-14">
              <button className="bg-transparent border border-black/8 text-slate-900 font-heading font-extrabold text-[10px] tracking-[0.1em] px-7 py-[14px] rounded-full cursor-pointer inline-flex items-center gap-2 shadow-sm transition-all duration-150 hover:bg-slate-100 hover:border-black/15 hover:-translate-y-0.5">
                LOAD MORE <IconChevronRight size={12} />
              </button>
            </div>
          )}

        </div>
      </section>

      {/* Operations Metrics & Advisory Sections */}
      <GrowthMetrics />

    </div>
  );
}

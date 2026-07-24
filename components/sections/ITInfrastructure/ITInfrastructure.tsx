'use client';

import { useState, useEffect } from 'react';
import SectionLabel from '@/components/ui/SectionLabel/SectionLabel';

const SERVICES_DATA = [
  {
    id: 0,
    number: "01",
    label: "ONE ECOSYSTEM, THREE PILLARS",
    title: <>Information<br />Technology<br />Infrastructure</>,
    desc: "We build resilient technology infrastructure that connects your business systems into a unified, intelligent ecosystem — enabling seamless operations, scalability, and long-term growth.",
    tags: ['NETWORK & SECURITY', 'CLOUD', 'MANAGED SERVICES', 'More...']
  },
  {
    id: 1,
    number: "02",
    label: "DATA & ANALYTICS SYSTEMS",
    title: <>Data Survey<br />and<br />Analytics</>,
    desc: "Turning fragmented information into strategic enterprise dashboards, empowering teams with predictive data modeling and deep-dive analytical insights.",
    tags: ['DATA MODELING', 'SURVEY', 'ANALYTICS', 'More...']
  },
  {
    id: 2,
    number: "03",
    label: "ONE ECOSYSTEM, THREE PILLARS",
    title: <>Digital Media<br />and<br />Impact</>,
    desc: "Delivering your brand message through high-impact media placements and content strategies designed to maximize modern marketplace engagement.",
    tags: ['BRANDING', 'ADS/PROMOTION', 'CAMPAIGN MAKING', 'More...']
  }
];

export default function ITInfrastructure() {
  const [activeTab, setActiveTab] = useState(0);

  // Auto-rotate tab every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % SERVICES_DATA.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const current = SERVICES_DATA[activeTab];

  return (
    <section className="relative bg-white py-[120px] max-[1024px]:py-[96px] max-[768px]:py-[72px] overflow-hidden" id="services" aria-label="Services Platform">
      {/* Background halo effect */}
      <div 
        className="hidden md:block absolute w-[1074px] h-[1074px] -right-[200px] -top-[100px] pointer-events-none z-0" 
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(85, 131, 255, 0.07) 0%, transparent 70%)'
        }}
      />

      <div className="w-full max-w-[1700px] mx-auto px-[110px] max-[1280px]:px-[64px] max-[1024px]:px-[40px] max-[768px]:px-[24px] max-[480px]:px-[16px] grid grid-cols-2 max-[1024px]:grid-cols-1 gap-[64px] max-[1024px]:gap-12 items-center">
        {/* ── LEFT SIDE: CONTENT ── */}
        <div className="flex flex-col gap-6 relative z-[2]">
          <SectionLabel text={current.label} />

          {/* Interactive Tab Indicators */}
          <div className="flex items-center gap-3 my-1">
            {SERVICES_DATA.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(idx)}
                className={`px-4 py-1.5 rounded-full font-heading text-[12px] font-bold transition-all duration-300 cursor-pointer ${
                  activeTab === idx
                    ? 'bg-blue-600 text-white shadow-[0_4px_16px_rgba(37,99,235,0.3)]'
                    : 'bg-slate-100 text-slate-600 border border-slate-200 hover:bg-slate-200 hover:text-slate-900'
                }`}
                type="button"
              >
                Pillar {item.number}
              </button>
            ))}
          </div>

          {/* Animated Text Content */}
          <div className="relative min-h-[260px] max-[768px]:min-h-[220px]">
            {SERVICES_DATA.map((item) => (
              <div
                key={item.id}
                className={`absolute inset-0 flex flex-col gap-5 transition-all duration-700 ease-in-out ${
                  activeTab === item.id ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8 pointer-events-none'
                }`}
              >
                <h2 className="font-heading font-bold text-[48px] max-[1280px]:text-[40px] max-[1024px]:text-[36px] max-[768px]:text-[28px] max-[480px]:text-[24px] leading-tight tracking-tight text-slate-900">
                  {item.title}
                </h2>
                <p className="font-body text-[16px] leading-relaxed text-slate-600 max-w-[540px]">
                  {item.desc}
                </p>
                <div className="flex flex-wrap items-center gap-2 text-[12px] font-bold text-slate-500 uppercase tracking-[0.1em]">
                  {item.tags.map((tag, idx) => (
                    <span key={idx} className="flex items-center gap-2">
                      {tag}
                      {idx < item.tags.length - 1 && <span className="text-slate-300">|</span>}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex mt-6 max-[768px]:flex-col">
            <a 
              href="#portfolio" 
              className="inline-flex items-center gap-3 bg-blue-600 text-white py-3.5 px-8 rounded-full no-underline font-body font-bold text-[13px] shadow-[0_8px_24px_rgba(37,99,235,0.25)] transition-all duration-200 ease-in-out hover:scale-[1.03] hover:bg-blue-700 hover:shadow-[0_10px_30px_rgba(37,99,235,0.35)]"
            >
              LEARN MORE →
            </a>
          </div>
        </div>

        {/* ── RIGHT SIDE: VISUAL ISOMETRIC ── */}
        <div className="relative flex items-center justify-center min-h-[500px] max-[1024px]:min-h-[400px] max-[768px]:min-h-[300px] max-[1024px]:-order-1">
          {/* Background Giant Numbers */}
          <div className="absolute inset-0 flex items-center justify-center z-0">
            {SERVICES_DATA.map((item) => (
              <span
                key={item.id}
                className={`font-heading font-bold text-[250px] max-[1024px]:text-[140px] max-[768px]:text-[100px] leading-none text-transparent pointer-events-none select-none z-0 transition-opacity duration-500 ease-in-out ${
                  activeTab === item.id ? 'opacity-30' : 'opacity-0'
                }`}
                style={{
                  WebkitTextStroke: '2px #E5E5E5'
                }}
              >
                {item.number}
              </span>
            ))}
          </div>

          {/* Background Wireframe Globe Network */}
          <div className="absolute -inset-[50px] z-[1] opacity-60 pointer-events-none">
            <svg viewBox="0 0 400 400" className="w-full h-full">
              <circle cx="200" cy="200" r="180" fill="none" stroke="rgba(37,99,235,0.05)" strokeWidth="1" />
              <circle cx="200" cy="200" r="140" fill="none" stroke="rgba(37,99,235,0.1)" strokeWidth="1" strokeDasharray="4 4" />
              <ellipse cx="200" cy="200" rx="180" ry="80" fill="none" stroke="rgba(37,99,235,0.08)" strokeWidth="1" transform="rotate(30 200 200)" />
              <ellipse cx="200" cy="200" rx="180" ry="80" fill="none" stroke="rgba(37,99,235,0.08)" strokeWidth="1" transform="rotate(-30 200 200)" />
              <ellipse cx="200" cy="200" rx="80" ry="180" fill="none" stroke="rgba(37,99,235,0.08)" strokeWidth="1" transform="rotate(30 200 200)" />
              <circle cx="350" cy="100" r="3" fill="#94a3b8" />
              <circle cx="280" cy="50" r="2" fill="#94a3b8" />
              <circle cx="380" cy="250" r="4" fill="#cbd5e1" />
              <circle cx="100" cy="80" r="2" fill="#cbd5e1" />
            </svg>
          </div>

          <div className="w-full max-w-[440px] h-auto flex items-center justify-center relative z-[2]">
            <svg viewBox="0 0 400 400" className="w-full h-auto" fill="none">
              <defs>
                <clipPath id="isoClipLeft">
                  <polygon points="40,0 80,20 40,40 0,20" />
                </clipPath>
                <clipPath id="isoClipRight">
                  <polygon points="50,0 100,25 50,50 0,25" />
                </clipPath>
                <clipPath id="isoClipSmall">
                  <polygon points="30,0 60,15 30,30 0,15" />
                </clipPath>
                <filter id="glowFilter" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feComponentTransfer in="blur" result="boost">
                    <feFuncA type="linear" slope="1.5"/>
                  </feComponentTransfer>
                  <feMerge>
                    <feMergeNode in="boost" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* BACK-LEFT PILLAR (Tab 2: Digital Media) */}
              <g transform="translate(140, 70)" className="transition-all duration-700 ease-in-out cursor-pointer" onClick={() => setActiveTab(2)}>
                {activeTab !== 2 && (
                  <g transform="translate(0, -30)" className="animate-float-lid">
                    <polygon points="80,0 160,40 80,80 0,40" fill="#9CA3AF" />
                  </g>
                )}
                
                <polygon points="80,0 160,40 80,80 0,40" fill={activeTab === 2 ? "#3B82F6" : "#E5E7EB"} className="transition-colors duration-500" />
                {activeTab === 2 && (
                  <ellipse cx="80" cy="40" rx="35" ry="17.5" fill="#60A5FA" opacity="0.8" filter="url(#glowFilter)" pointerEvents="none" />
                )}
                <polygon points="0,40 80,80 80,240 0,200" fill={activeTab === 2 ? "#2563EB" : "#D1D5DB"} className="transition-colors duration-500" />
                <polygon points="160,40 80,80 80,240 160,200" fill={activeTab === 2 ? "#1D4ED8" : "#9CA3AF"} className="transition-colors duration-500" />
                
                {activeTab === 2 && (
                  <g className="opacity-100 translate-y-0 animate-svg-pulse">
                    <g transform="translate(-10, -70) skewY(-20) scale(0.9)">
                      <rect x="0" y="0" width="90" height="65" rx="8" fill="rgba(37, 99, 235, 0.15)" stroke="#60A5FA" strokeWidth="1.5" />
                      <circle cx="45" cy="30" r="12" fill="rgba(37, 99, 235, 0.3)" stroke="#60A5FA" strokeWidth="1.5" />
                      <polygon points="42,24 52,30 42,36" fill="#fff" />
                      <line x1="15" y1="50" x2="75" y2="50" stroke="#60A5FA" strokeWidth="2" />
                      <circle cx="75" cy="50" r="3" fill="#fff" />
                      <line x1="15" y1="12" x2="35" y2="12" stroke="#60A5FA" strokeWidth="1.5" />
                    </g>
                    <g transform="translate(80, -40) skewY(-20) scale(0.9)">
                      <rect x="0" y="0" width="90" height="65" rx="8" fill="rgba(37, 99, 235, 0.15)" stroke="#60A5FA" strokeWidth="1.5" />
                      <rect x="25" y="22" width="40" height="26" rx="4" fill="none" stroke="#60A5FA" strokeWidth="2" />
                      <path d="M 35 22 L 40 16 L 50 16 L 55 22 Z" fill="none" stroke="#60A5FA" strokeWidth="2" />
                      <circle cx="45" cy="35" r="8" fill="none" stroke="#fff" strokeWidth="1.5" />
                      <circle cx="12" cy="12" r="2" fill="#60A5FA" />
                      <circle cx="78" cy="12" r="2" fill="#60A5FA" />
                    </g>
                  </g>
                )}
              </g>

              {/* FRONT-CENTER PILLAR (Tab 0: IT Infrastructure) */}
              <g transform="translate(10, 200)" className="transition-all duration-700 ease-in-out cursor-pointer" onClick={() => setActiveTab(0)}>
                {activeTab !== 0 && (
                  <g transform="translate(0, -30)" className="animate-float-lid">
                    <polygon points="70,0 140,35 70,70 0,35" fill="#9CA3AF" />
                  </g>
                )}
                
                <polygon points="70,0 140,35 70,70 0,35" fill={activeTab === 0 ? "#3B82F6" : "#E5E7EB"} className="transition-colors duration-500" />
                {activeTab === 0 && (
                  <ellipse cx="70" cy="35" rx="30" ry="15" fill="#60A5FA" opacity="0.8" filter="url(#glowFilter)" pointerEvents="none" />
                )}
                <polygon points="0,35 70,70 70,250 0,215" fill={activeTab === 0 ? "#2563EB" : "#D1D5DB"} className="transition-colors duration-500" />
                <polygon points="140,35 70,70 70,250 140,215" fill={activeTab === 0 ? "#1D4ED8" : "#9CA3AF"} className="transition-colors duration-500" />
                
                {activeTab === 0 && (
                  <g className="opacity-100 translate-y-0 animate-svg-pulse">
                    <g transform="translate(10, -80) skewY(-20) scale(0.9)">
                      <rect x="0" y="0" width="90" height="65" rx="8" fill="rgba(37, 99, 235, 0.15)" stroke="#60A5FA" strokeWidth="1.5" />
                      <rect x="15" y="12" width="60" height="10" rx="2" fill="rgba(96, 165, 250, 0.2)" stroke="#60A5FA" strokeWidth="1" />
                      <circle cx="25" cy="17" r="2" fill="#3B82F6" />
                      <circle cx="33" cy="17" r="2" fill="#10B981" />
                      <rect x="15" y="27" width="60" height="10" rx="2" fill="rgba(96, 165, 250, 0.2)" stroke="#60A5FA" strokeWidth="1" />
                      <circle cx="25" cy="32" r="2" fill="#3B82F6" />
                      <circle cx="33" cy="32" r="2" fill="#10B981" />
                      <rect x="15" y="42" width="60" height="10" rx="2" fill="rgba(96, 165, 250, 0.2)" stroke="#60A5FA" strokeWidth="1" />
                      <circle cx="25" cy="47" r="2" fill="#3B82F6" />
                      <circle cx="33" cy="47" r="2" fill="#10B981" />
                    </g>
                    <g transform="translate(85, -30) skewY(-20) scale(0.9)">
                      <rect x="0" y="0" width="90" height="65" rx="8" fill="rgba(37, 99, 235, 0.15)" stroke="#60A5FA" strokeWidth="1.5" />
                      <path d="M 45 42 A 10 10 0 0 1 35 32 A 8 8 0 0 1 45 24 A 12 12 0 0 1 62 28 A 8 8 0 0 1 58 42 Z" fill="none" stroke="#60A5FA" strokeWidth="2" />
                      <line x1="20" y1="50" x2="70" y2="50" stroke="#60A5FA" strokeWidth="1.5" strokeDasharray="3 3" />
                    </g>
                  </g>
                )}
              </g>

              {/* RIGHT PILLAR (Tab 1: Data & Survey) */}
              <g transform="translate(220, 240)" className="transition-all duration-700 ease-in-out cursor-pointer" onClick={() => setActiveTab(1)}>
                {activeTab !== 1 && (
                  <g transform="translate(0, -30)" className="animate-float-lid">
                    <polygon points="60,0 120,30 60,60 0,30" fill="#9CA3AF" />
                  </g>
                )}
                
                <polygon points="60,0 120,30 60,60 0,30" fill={activeTab === 1 ? "#3B82F6" : "#E5E7EB"} className="transition-colors duration-500" />
                {activeTab === 1 && (
                  <ellipse cx="60" cy="30" rx="25" ry="12.5" fill="#60A5FA" opacity="0.8" filter="url(#glowFilter)" pointerEvents="none" />
                )}
                <polygon points="0,30 60,60 60,160 0,130" fill={activeTab === 1 ? "#2563EB" : "#D1D5DB"} className="transition-colors duration-500" />
                <polygon points="120,30 60,60 60,160 120,130" fill={activeTab === 1 ? "#1D4ED8" : "#9CA3AF"} className="transition-colors duration-500" />
                
                {activeTab === 1 && (
                  <g className="opacity-100 translate-y-0 animate-svg-pulse">
                    <g transform="translate(10, -40) skewY(-20) scale(0.9)">
                      <rect x="0" y="0" width="90" height="65" rx="8" fill="rgba(37, 99, 235, 0.15)" stroke="#60A5FA" strokeWidth="1.5" />
                      <path d="M 15 45 L 35 25 L 50 35 L 75 15" fill="none" stroke="#60A5FA" strokeWidth="2.5" strokeLinecap="round" />
                      <circle cx="35" cy="25" r="3" fill="#fff" />
                      <circle cx="50" cy="35" r="3" fill="#fff" />
                      <circle cx="75" cy="15" r="3" fill="#fff" />
                      <line x1="15" y1="50" x2="75" y2="50" stroke="rgba(96, 165, 250, 0.5)" strokeWidth="1.5" />
                    </g>
                  </g>
                )}
              </g>

            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

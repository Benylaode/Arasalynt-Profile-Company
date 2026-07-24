'use client';

import BeyondExpectations from '@/components/sections/BeyondExpectations/BeyondExpectations';
import Link from 'next/link';

const IconChevronDown = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const PILLARS = [
  {
    label: "TECHNOLOGY",
    title: "WE BUILD BETTER\nIT SYSTEM",
    desc: "Developing architecture and technology\n& IT infrastructure"
  },
  {
    label: "DATA & ANALYTICS",
    title: "WE UNLOCK INSIGHTFUL\nMEASURABLE DATA",
    desc: "Turning metric into actionable insight\nbusiness and data"
  },
  {
    label: "CREATIVE",
    title: "WE DELIVER EXCELLENT\nCREATIVE EXECUTION",
    desc: "Creating visual communication with\nmeasurable impact"
  }
];

export default function EcosystemPhilosophyPage() {
  const handleScrollDown = () => {
    const el = document.getElementById("content");
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full relative bg-[#fafafa] min-h-screen">
      
      {/* HERO HEADER SECTION */}
      <section className="relative w-full h-[60vh] min-h-[480px] max-[768px]:h-[50vh] bg-[#020617] overflow-hidden flex items-center justify-center" id="hero" aria-label="Ecosystem Philosophy Hero">
        <div className="absolute inset-0 z-[1]" aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=1600&auto=format&fit=crop"
            alt="Digital Globe"
            className="w-full h-full object-cover opacity-45 brightness-70 contrast-110"
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
            HOME &gt; ABOUT US &gt; ECOSYSTEM PHILOSOPHY
          </span>
          <h1 className="font-heading font-bold text-[56px] max-[1024px]:text-[44px] max-[768px]:text-[36px] leading-tight tracking-tight text-white mb-5">
            Ecosystem Philosophy
          </h1>
          <button 
            onClick={handleScrollDown} 
            className="absolute bottom-[30px] left-1/2 -translate-x-1/2 w-[44px] h-[44px] rounded-full bg-white/8 border border-white/15 text-white flex items-center justify-center cursor-pointer z-[5] transition-colors duration-150 hover:bg-white/15 animate-bounce-slow" 
            aria-label="Scroll down"
          >
            <IconChevronDown />
          </button>
        </div>
      </section>

      <div id="content">
        {/* SPECIALIZED INDUSTRY */}
        <section className="py-[120px] max-[1024px]:py-[96px] max-[768px]:py-[60px] bg-[#fafafa]">
          <div className="w-full max-w-[1700px] mx-auto px-[110px] max-[1280px]:px-[64px] max-[1024px]:px-[40px] max-[768px]:px-[24px] max-[480px]:px-[16px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-[1100px] mx-auto">
              <div className="flex flex-col gap-4">
                <span className="font-heading text-[11px] font-extrabold tracking-[0.2em] text-blue-600 uppercase block">
                  &lt; LEADERSHIP FOUNDATION &gt;
                </span>
                <h2 className="font-heading font-bold text-[48px] max-[1280px]:text-[40px] max-[1024px]:text-[36px] max-[768px]:text-[28px] max-[480px]:text-[24px] leading-snug tracking-tight text-dark">
                  Specialized<br />Industry,<br />Unified Integration
                </h2>
                <p className="font-body text-lg leading-relaxed text-[#717171]">
                  We recognized that every specialized industry has its own unique complexities. 
                  Our philosophy is to deliver highly specialized solutions within a unified framework, 
                  allowing businesses to scale with ease and confidence.
                </p>
              </div>

              <div className="rounded-[24px] overflow-hidden aspect-[4/3] shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop" 
                  alt="Glowing Icon Hand" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CROSS-BRAND ECOSYSTEM */}
        <section className="relative py-[120px] max-[1024px]:py-[96px] max-[768px]:py-[72px] bg-[#050b18] overflow-hidden">
          <div 
            className="absolute inset-0 z-0 pointer-events-none" 
            aria-hidden="true"
            style={{
              backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.015) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
              backgroundPosition: 'center'
            }}
          />
          
          <div className="w-full max-w-[1700px] mx-auto px-[110px] max-[1280px]:px-[64px] max-[1024px]:px-[40px] max-[768px]:px-[24px] max-[480px]:px-[16px] relative z-[2]">
            <div className="text-center max-w-[900px] mx-auto mb-16">
              <span className="font-heading text-[11px] font-extrabold tracking-[0.2em] text-lime-yellow uppercase block mb-4">
                &lt; CROSS-BRAND ECOSYSTEM &gt;
              </span>
              <h2 className="font-heading font-medium text-[32px] max-[1280px]:text-[28px] max-[768px]:text-[22px] leading-snug text-white">
                This is not a collection of individual vendors — it is a synchronized corporate ecosystem designed to strengthen operations, optimize assets, and help businesses execute with confidence.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1100px] mx-auto">
              {PILLARS.map((pillar, i) => (
                <div key={i} className="rounded-[24px] bg-white/4 border border-white/8 p-8 flex flex-col gap-4">
                  <span className="font-heading text-[10px] font-bold tracking-[0.2em] text-lime-yellow uppercase">
                    {pillar.label}
                  </span>
                  <h3 className="font-heading font-bold text-[20px] leading-snug text-white flex gap-2">
                    <span className="text-lime-yellow">•</span>
                    <span>
                      {pillar.title.split('\n').map((line, idx) => (
                        <span key={idx}>{line}<br/></span>
                      ))}
                    </span>
                  </h3>
                  <p className="font-body text-sm leading-relaxed text-[#A0A0A0]">
                    {pillar.desc.split('\n').map((line, idx) => (
                      <span key={idx}>{line}<br/></span>
                    ))}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EXPLORE OTHER INFORMATION */}
        <section className="py-[96px] max-[768px]:py-[60px] bg-[#fafafa]">
          <div className="w-full max-w-[1700px] mx-auto px-[110px] max-[1280px]:px-[64px] max-[1024px]:px-[40px] max-[768px]:px-[24px] max-[480px]:px-[16px]">
            <h2 className="font-heading font-bold text-[28px] max-[768px]:text-[22px] text-dark text-center mb-10">
              Explore Other Information
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
              <Link href="/about-us/company-leadership" className="group relative aspect-[16/9] rounded-[24px] overflow-hidden shadow-md flex items-end p-8 no-underline transition-transform duration-400 hover:-translate-y-1">
                <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop" alt="Company Leadership" className="absolute inset-0 w-full h-full object-cover transition-transform duration-400 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-[1]" />
                <h3 className="relative z-[2] font-heading font-bold text-[24px] text-white">Company Leadership</h3>
              </Link>
              
              <Link href="/about-us/corporate-profile" className="group relative aspect-[16/9] rounded-[24px] overflow-hidden shadow-md flex items-end p-8 no-underline transition-transform duration-400 hover:-translate-y-1">
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop" alt="Corporate Profile" className="absolute inset-0 w-full h-full object-cover transition-transform duration-400 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-[1]" />
                <h3 className="relative z-[2] font-heading font-bold text-[24px] text-white">Corporate Profile</h3>
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* BEYOND EXPECTATIONS */}
      <BeyondExpectations />
    </div>
  );
}

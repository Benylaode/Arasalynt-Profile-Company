'use client';

import BeyondExpectations from '@/components/sections/BeyondExpectations/BeyondExpectations';
import Link from 'next/link';

const IconChevronDown = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const PRINCIPLES = [
  {
    title: "Technical\nExcellence",
    desc: "We pursue superiority in every code, architecture, and system we deliver.",
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    )
  },
  {
    title: "ROI-First\nExecution",
    desc: "Every deployment is designed to generate measurable business value and capital efficiency.",
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        <path d="M12 8v4l3 3"/>
      </svg>
    )
  },
  {
    title: "Cross-Disciplinary\nExpertise",
    desc: "Silos are eliminated. We integrate expertise from multiple fields for complete solutions.",
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <polyline points="10 9 9 9 8 9"></polyline>
      </svg>
    )
  },
  {
    title: "Redundant\nLeadership",
    desc: "Building self-sustaining systems where teams lead and operate without single points of failure.",
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    )
  }
];

export default function CompanyLeadershipPage() {
  const handleScrollDown = () => {
    const el = document.getElementById("content");
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full relative bg-[#fafafa] min-h-screen">
      
      {/* HERO HEADER SECTION */}
      <section className="relative w-full h-[60vh] min-h-[480px] max-[768px]:h-[50vh] bg-[#020617] overflow-hidden flex items-center justify-center" id="hero" aria-label="Company Leadership Hero">
        <div className="absolute inset-0 z-[1]" aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1600&auto=format&fit=crop"
            alt="Executive Abstract"
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
            HOME &gt; ABOUT US &gt; COMPANY LEADERSHIP
          </span>
          <h1 className="font-heading font-bold text-[56px] max-[1024px]:text-[44px] max-[768px]:text-[36px] leading-tight tracking-tight text-white mb-5">
            Company Leadership
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
        {/* LEADERSHIP FOUNDATION */}
        <section className="py-[120px] max-[1024px]:py-[96px] max-[768px]:py-[60px] bg-[#fafafa]">
          <div className="w-full max-w-[1700px] mx-auto px-[110px] max-[1280px]:px-[64px] max-[1024px]:px-[40px] max-[768px]:px-[24px] max-[480px]:px-[16px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-[1100px] mx-auto">
              <div className="flex flex-col gap-4">
                <span className="font-heading text-[11px] font-extrabold tracking-[0.2em] text-blue-600 uppercase block">
                  &lt; LEADERSHIP FOUNDATION &gt;
                </span>
                <h2 className="font-heading font-bold text-[48px] max-[1280px]:text-[40px] max-[1024px]:text-[36px] max-[768px]:text-[28px] max-[480px]:text-[24px] leading-snug tracking-tight text-dark">
                  Leading with<br />Expertise and<br />Purpose
                </h2>
                <p className="font-body text-lg leading-relaxed text-[#717171]">
                  Executive officers driving the Arsalynk strategy towards an integrated future. 
                  We believe that strong leadership requires a delicate balance of deep technical mastery, 
                  relentless execution, and a clear vision for sustainable business scalability.
                </p>
              </div>

              <div className="rounded-[24px] overflow-hidden aspect-[4/3] shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop" 
                  alt="Executive Leader" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* MEETING POINTS SLIDER */}
        <section className="relative py-[120px] max-[1024px]:py-[96px] max-[768px]:py-[72px] bg-[#050b18] overflow-hidden text-center">
          <div className="absolute inset-0 z-0" aria-hidden="true">
            <img 
              src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1600&auto=format&fit=crop" 
              alt="Live Event Crowd" 
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#050b18]/80 via-transparent to-[#050b18]/80 z-[1]" />

          <div className="w-full max-w-[1700px] mx-auto px-[110px] max-[1280px]:px-[64px] max-[1024px]:px-[40px] max-[768px]:px-[24px] max-[480px]:px-[16px] relative z-[2]">
            <div className="max-w-[840px] mx-auto flex flex-col items-center">
              <span className="font-heading text-[11px] font-extrabold tracking-[0.2em] text-lime-yellow uppercase block mb-4">
                &lt; MEETING POINTS &gt;
              </span>
              <h2 className="font-heading font-medium text-[32px] max-[1280px]:text-[28px] max-[768px]:text-[22px] leading-snug text-white mb-10">
                By combining technical precision with a commitment to client success, 
                Arsalynk Group delivers reliable, predictable, and results-driven execution.
              </h2>

              <div className="flex items-center gap-4">
                <button className="w-9 h-9 rounded-full bg-white/10 text-white border border-white/20 flex items-center justify-center cursor-pointer hover:bg-white/20">&lt;</button>
                <span className="font-heading text-xs font-bold text-slate-400">1 / 3</span>
                <button className="w-9 h-9 rounded-full bg-white/10 text-white border border-white/20 flex items-center justify-center cursor-pointer hover:bg-white/20">&gt;</button>
              </div>
            </div>
          </div>
        </section>

        {/* LEADERSHIP PRINCIPLES */}
        <section className="py-[120px] max-[1024px]:py-[96px] max-[768px]:py-[60px] bg-white">
          <div className="w-full max-w-[1700px] mx-auto px-[110px] max-[1280px]:px-[64px] max-[1024px]:px-[40px] max-[768px]:px-[24px] max-[480px]:px-[16px]">
            <div className="text-center max-w-[800px] mx-auto mb-[64px]">
              <span className="font-heading text-[11px] font-extrabold tracking-[0.2em] text-blue-600 uppercase block mb-3">
                &lt; LEADERSHIP PRINCIPLES &gt;
              </span>
              <h2 className="font-heading font-bold text-[48px] max-[1280px]:text-[40px] max-[1024px]:text-[36px] max-[768px]:text-[28px] max-[480px]:text-[24px] leading-snug tracking-tight text-dark">
                The Standards That<br />Guide Every Decision
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1200px] mx-auto">
              {PRINCIPLES.map((item, i) => (
                <div key={i} className="rounded-[20px] bg-[#fafafa] border border-[#E5E5E5] p-6 flex flex-col gap-3 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-1">
                    {item.icon}
                  </div>
                  <h3 className="font-heading font-bold text-[18px] leading-snug text-dark">
                    {item.title.split('\n').map((line, idx) => (
                      <span key={idx}>{line}<br/></span>
                    ))}
                  </h3>
                  <p className="font-body text-xs leading-relaxed text-[#717171]">{item.desc}</p>
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
              <Link href="/about-us/corporate-profile" className="group relative aspect-[16/9] rounded-[24px] overflow-hidden shadow-md flex items-end p-8 no-underline transition-transform duration-400 hover:-translate-y-1">
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop" alt="Corporate Profile" className="absolute inset-0 w-full h-full object-cover transition-transform duration-400 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-[1]" />
                <h3 className="relative z-[2] font-heading font-bold text-[24px] text-white">Corporate Profile</h3>
              </Link>
              
              <Link href="/about-us/ecosystem-philosophy" className="group relative aspect-[16/9] rounded-[24px] overflow-hidden shadow-md flex items-end p-8 no-underline transition-transform duration-400 hover:-translate-y-1">
                <img src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=800&auto=format&fit=crop" alt="Ecosystem Philosophy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-400 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-[1]" />
                <h3 className="relative z-[2] font-heading font-bold text-[24px] text-white">Ecosystem Philosophy</h3>
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

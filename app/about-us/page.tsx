'use client';

import Link from 'next/link';

/* ── Pure SVG Chevron Down Icon ── */
const IconChevronDown = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M6 9l6 6 6-6" />
  </svg>
);

export default function AboutUsPage() {
  const handleScrollDown = () => {
    const el = document.getElementById("about-grid");
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full relative bg-[#fafafa] min-h-screen">
      
      {/* HERO HEADER SECTION */}
      <section className="relative w-full h-[60vh] min-h-[480px] max-[768px]:h-[50vh] bg-[#020617] overflow-hidden flex items-center justify-center" id="hero" aria-label="About Arsalynk Hero">
        {/* Glow/orbital loop ribbon backdrop image */}
        <div className="absolute inset-0 z-[1]" aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop"
            alt="Abstract Neon Ribbon Loop"
            className="w-full h-full object-cover opacity-45 brightness-70 contrast-110"
          />
        </div>

        {/* Blueprint connection overlay */}
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

        {/* Content */}
        <div className="relative z-[5] text-center max-w-[720px] px-6 mt-10">
          <span className="inline-block font-heading text-[10px] font-extrabold tracking-[0.25em] text-lime-yellow uppercase mb-4">
            HOME &gt; ABOUT US
          </span>
          <h1 className="font-heading font-bold text-[56px] max-[1024px]:text-[44px] max-[768px]:text-[36px] leading-tight tracking-tight text-white mb-5">
            About Arsalynk
          </h1>
          <p className="font-body text-lg leading-relaxed text-[#A0A0A0] max-w-[600px] mx-auto">
            Connecting capabilities across strategy, technology, and execution to solve 
            complex business challenges and deliver lasting value.
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

      {/* 3-COLUMN ABOUT US GRID SECTION */}
      <section id="about-grid" className="bg-[#fafafa] pt-[60px] pb-[120px] max-[768px]:pt-[30px] max-[768px]:pb-[80px] relative z-[4]" aria-label="About Us Sections Grid">
        <div className="w-full max-w-[1700px] mx-auto px-[110px] max-[1280px]:px-[64px] max-[1024px]:px-[40px] max-[768px]:px-[24px] max-[480px]:px-[16px]">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 min-[960px]:grid-cols-3 gap-8">
            {/* Card 1: Corporate Profile */}
            <Link href="/about-us/corporate-profile" className="group relative aspect-square rounded-[24px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.02)] flex flex-col justify-end cursor-pointer transition-transform duration-400 hover:-translate-y-[6px]">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop"
                alt="Corporate Profile Office Silhouette"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-400 group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent z-[1]" />
              <div className="relative z-[2] p-9 max-[768px]:p-6">
                <h2 className="font-heading font-bold text-[28px] max-[768px]:text-[22px] text-white leading-snug tracking-tight">Corporate<br />Profile</h2>
              </div>
            </Link>

            {/* Card 2: Company Leadership */}
            <Link href="/about-us/company-leadership" className="group relative aspect-square rounded-[24px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.02)] flex flex-col justify-end cursor-pointer transition-transform duration-400 hover:-translate-y-[6px]">
              <img
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600&auto=format&fit=crop"
                alt="Company Leadership Executive Abstract"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-400 group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent z-[1]" />
              <div className="relative z-[2] p-9 max-[768px]:p-6">
                <h2 className="font-heading font-bold text-[28px] max-[768px]:text-[22px] text-white leading-snug tracking-tight">Company<br />Leadership</h2>
              </div>
            </Link>

            {/* Card 3: Ecosystem Philosophy */}
            <Link href="/about-us/ecosystem-philosophy" className="group relative aspect-square rounded-[24px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.02)] flex flex-col justify-end cursor-pointer transition-transform duration-400 hover:-translate-y-[6px]">
              <img
                src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=600&auto=format&fit=crop"
                alt="Ecosystem Philosophy Digital Globe"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-400 group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent z-[1]" />
              <div className="relative z-[2] p-9 max-[768px]:p-6">
                <h2 className="font-heading font-bold text-[28px] max-[768px]:text-[22px] text-white leading-snug tracking-tight">Ecosystem<br />Philosophy</h2>
              </div>
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}

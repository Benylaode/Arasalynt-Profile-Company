'use client';

import SectionLabel from '@/components/ui/SectionLabel/SectionLabel';

/* ── Inline Arrow Right Icon ── */
const IconArrowRight = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export default function GrowthMetrics() {
  return (
    <section className="relative bg-[#0B0F19] py-[120px] max-[1024px]:py-[96px] max-[768px]:py-[72px] overflow-hidden border-b border-white/5" id="growth" aria-label="Growth and Insights">
      {/* Background radial glow */}
      <div 
        className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none z-[1]" 
        aria-hidden="true" 
        style={{
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.15) 0%, transparent 70%)'
        }}
      />

      <div className="w-full max-w-[1700px] mx-auto px-[110px] max-[1280px]:px-[64px] max-[1024px]:px-[40px] max-[768px]:px-[24px] max-[480px]:px-[16px] relative z-[2]">
        
        {/* Main Grid: Left content, Right actions */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-[64px] items-start mb-[64px]">
          
          {/* Left Column: Heading */}
          <div className="flex flex-col gap-5">
            <SectionLabel text="INSIGHT AND PROGRAMS" variant="light" />
            <h2 className="font-heading font-bold text-[48px] max-[1280px]:text-[40px] max-[1024px]:text-[36px] max-[768px]:text-[28px] max-[480px]:text-[24px] leading-tight tracking-tight text-white">
              Insights That Drive
              <br />
              Measurable Growth
            </h2>
            <p className="font-body font-normal text-[18px] max-[1280px]:text-[16px] leading-relaxed text-[#94A3B8] max-w-[520px]">
              Discover how integrated technology, intelligence, and media transform business challenges into measurable enterprise outcomes through proven workflows, strategic leadership, and real-world execution.
            </p>
          </div>

          {/* Right Column: Actions */}
          <div className="flex flex-col gap-5">
            {/* Action Card 1 — How We Lead Differently */}
            <div className="group flex items-center max-[768px]:flex-col max-[768px]:items-start justify-between p-[24px] rounded-[20px] bg-white/4 border border-white/10 backdrop-blur-md max-[768px]:gap-4">
              <div className="flex flex-col gap-[6px] pr-5">
                <h3 className="font-heading font-bold text-[22px] text-white">
                  How We Lead Differently
                </h3>
                <p className="font-body text-[13px] text-[#94A3B8] leading-snug">
                  Discover the leadership philosophy behind resilient enterprise execution.
                </p>
              </div>
              <div className="shrink-0">
                <a href="/leadership-thoughts" className="inline-flex items-center gap-2 px-5 py-[11px] bg-[#E6FF2A] text-[#101010] font-body font-extrabold text-[11px] tracking-[0.1em] uppercase rounded-full no-underline transition-all duration-200 hover:bg-[#d8f21d] hover:scale-[1.03]">
                  LEADERSHIP THOUGHTS <span>›</span>
                </a>
              </div>
            </div>

            {/* Action Card 2 — Read Our Proven Work */}
            <div className="group flex items-center max-[768px]:flex-col max-[768px]:items-start justify-between p-[24px] rounded-[20px] bg-white/4 border border-white/10 backdrop-blur-md max-[768px]:gap-4">
              <div className="flex flex-col gap-[6px] pr-5">
                <h3 className="font-heading font-bold text-[22px] text-white">
                  Read Our Proven Work
                </h3>
                <p className="font-body text-[13px] text-[#94A3B8] leading-snug">
                  Explore proven outcomes across the Arsalynk ecosystem.
                </p>
              </div>
              <div className="shrink-0">
                <a href="/insight-programs" className="inline-flex items-center gap-2 px-5 py-[11px] bg-[#E6FF2A] text-[#101010] font-body font-extrabold text-[11px] tracking-[0.1em] uppercase rounded-full no-underline transition-all duration-200 hover:bg-[#d8f21d] hover:scale-[1.03]">
                  CASE STUDIES <span>›</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Row: Stats Counters — sesuai Figma */}
        <div className="grid grid-cols-2 md:grid-cols-4 pt-[56px] border-t border-white/10">
          {[
            { value: "50+", label: "Enterprise Projects" },
            { value: "10+", label: "Industry Sectors" },
            { value: "7+",  label: "Specialized Company" },
            { value: "25+", label: "Digital Solutions Delivered" },
          ].map((stat, index) => (
            <div key={index} className={`text-center py-8 px-6 ${index < 3 ? 'border-r border-white/10' : ''}`}>
              <div className="font-heading font-black text-[56px] max-[768px]:text-[40px] leading-none text-[#E6FF2A] mb-2">
                ·{stat.value}
              </div>
              <div className="font-body text-[13px] text-white/70">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

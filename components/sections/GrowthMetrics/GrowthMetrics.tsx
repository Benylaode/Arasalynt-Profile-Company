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
            <SectionLabel text="METRICS & PERFORMANCE" variant="light" />
            <h2 className="font-heading font-bold text-[48px] max-[1280px]:text-[40px] max-[1024px]:text-[36px] max-[768px]:text-[28px] max-[480px]:text-[24px] leading-tight tracking-tight text-white">
              Insights That Drive
              <br />
              <span className="text-[#E6FF2A]">Measurable Enterprise Growth</span>
            </h2>
            <p className="font-body font-normal text-[18px] max-[1280px]:text-[16px] leading-relaxed text-[#94A3B8] max-w-[520px]">
              We transform business performance through integrated dashboards and strategic intelligence. 
              Monitor your key metrics and unlock scalability with custom data integrations.
            </p>
          </div>

          {/* Right Column: Actions */}
          <div className="flex flex-col gap-5">
            {/* Action Card 1 */}
            <a href="#contact" className="group flex items-center max-[768px]:flex-col max-[768px]:items-start justify-between p-[24px] rounded-[20px] no-underline bg-white/4 border border-white/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#E6FF2A]/40 max-[768px]:gap-4">
              <div className="flex flex-col gap-[6px] pr-5">
                <h3 className="font-heading font-bold text-[16px] text-white transition-colors duration-250 group-hover:text-[#E6FF2A]">
                  IT Consulting &amp; Advisory
                </h3>
                <p className="font-body text-[13px] text-[#94A3B8] leading-snug">
                  Formulate custom technology roadmaps with our expert enterprise team.
                </p>
              </div>
              <div className="w-[40px] h-[40px] rounded-full bg-white/10 flex items-center justify-center text-white shrink-0 transition-all duration-200 group-hover:bg-[#E6FF2A] group-hover:text-[#0B0F19] max-[768px]:self-end">
                <IconArrowRight size={16} />
              </div>
            </a>

            {/* Action Card 2 */}
            <a href="#portfolio" className="group flex items-center max-[768px]:flex-col max-[768px]:items-start justify-between p-[24px] rounded-[20px] no-underline bg-white/4 border border-white/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#E6FF2A]/40 max-[768px]:gap-4">
              <div className="flex flex-col gap-[6px] pr-5">
                <h3 className="font-heading font-bold text-[16px] text-white transition-colors duration-250 group-hover:text-[#E6FF2A]">
                  Read Our Case Studies
                </h3>
                <p className="font-body text-[13px] text-[#94A3B8] leading-snug">
                  Explore real-world client system deployment projects.
                </p>
              </div>
              <div className="inline-flex items-center gap-[6px] px-5 py-[10px] bg-[#E6FF2A] text-[#0B0F19] font-body font-bold text-[11px] rounded-full shrink-0 transition-transform duration-200 group-hover:scale-105 max-[768px]:self-end">
                Read More <IconArrowRight size={12} />
              </div>
            </a>
          </div>

        </div>

        {/* Bottom Row: Stats Counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-[56px] border-t border-white/10">
          {[
            { value: "50+", label: "Clients Served" },
            { value: "10+", label: "Years Experience" },
            { value: "7+", label: "Countries Reached" },
            { value: "25+", label: "Active Subscriptions" },
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="font-heading font-black text-[56px] max-[768px]:text-[40px] leading-none text-[#E6FF2A] mb-2 drop-shadow-[0_0_15px_rgba(230,255,42,0.2)]">
                {stat.value}
              </div>
              <div className="font-heading text-[11px] font-extrabold tracking-[0.15em] text-[#94A3B8] uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

'use client';

/* ── Pure SVG Isometric Components ── */
const Iso3DCube = () => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
    <polygon points="100,30 160,65 100,100 40,65" fill="#2563eb" fillOpacity="0.85" />
    <polygon points="40,65 100,100 100,160 40,125" fill="#1d4ed8" />
    <polygon points="160,65 100,100 100,160 160,125" fill="#1e3a8a" />
    <g transform="translate(85,15)">
      <rect x="0" y="0" width="30" height="30" rx="4" fill="#050b18" stroke="#E6FF2A" strokeWidth="1.5" />
      <rect x="4" y="4" width="22" height="22" rx="2" fill="#1d4ed8" fillOpacity="0.5" />
      <rect x="8" y="8" width="14" height="14" rx="2" fill="#E6FF2A" />
    </g>
    <ellipse cx="100" cy="155" rx="55" ry="15" fill="#2563eb" fillOpacity="0.15" />
  </svg>
);

const IsoBarChart = () => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
    <polygon points="30,130 60,115 60,145 30,160" fill="#E6FF2A" fillOpacity="0.8" />
    <polygon points="60,115 80,125 80,155 60,145" fill="#a3d900" />
    <polygon points="30,130 60,115 80,125 50,140" fill="#e2f122" />
    <polygon points="75,110 105,95 105,145 75,160" fill="#E6FF2A" fillOpacity="0.85" />
    <polygon points="105,95 125,105 125,155 105,145" fill="#a3d900" />
    <polygon points="75,110 105,95 125,105 95,120" fill="#e2f122" />
    <polygon points="120,80 150,65 150,145 120,160" fill="#E6FF2A" />
    <polygon points="150,65 170,75 170,155 150,145" fill="#a3d900" />
    <polygon points="120,80 150,65 170,75 140,90" fill="#e2f122" />
    <polyline points="35,145 70,120 110,110 145,80" stroke="#E6FF2A" strokeWidth="2" fill="none" strokeDasharray="4 2" />
    <ellipse cx="100" cy="150" rx="60" ry="12" fill="#E6FF2A" fillOpacity="0.08" />
  </svg>
);

const IsoFolder = () => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
    <polygon points="25,120 100,85 175,120 100,155" fill="#1d4ed8" fillOpacity="0.7" />
    <polygon points="25,70 25,120 100,155 100,105" fill="#2563eb" />
    <polygon points="175,70 175,120 100,155 100,105" fill="#1e3a8a" />
    <polygon points="25,70 100,35 175,70 100,105" fill="#3b82f6" />
    <g transform="translate(70, 20) rotate(-8, 30, 40)">
      <rect x="0" y="0" width="55" height="75" rx="4" fill="white" fillOpacity="0.95" />
      <rect x="8" y="12" width="39" height="3" rx="1" fill="#94a3b8" />
      <rect x="8" y="22" width="31" height="3" rx="1" fill="#94a3b8" />
      <rect x="8" y="32" width="35" height="3" rx="1" fill="#94a3b8" />
    </g>
    <ellipse cx="100" cy="148" rx="60" ry="12" fill="#2563eb" fillOpacity="0.1" />
  </svg>
);

export default function SpecializedByNature() {
  return (
    <section className="relative bg-white py-[120px] max-[1024px]:py-[96px] max-[768px]:py-[72px]" id="services" aria-label="Specialized By Nature, Unified By Design">
      <div className="w-full max-w-[1700px] mx-auto px-[110px] max-[1280px]:px-[64px] max-[1024px]:px-[40px] max-[768px]:px-[24px] max-[480px]:px-[16px]">
        
        {/* Section Heading */}
        <div className="text-center mb-[64px]">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-[6px] h-[6px] rounded-full bg-blue-600" />
            <span className="font-heading text-[10px] font-extrabold tracking-[0.25em] text-blue-600 uppercase">
              WHAT WE DO
            </span>
          </div>
          <h2 className="font-heading font-bold text-[48px] max-[1280px]:text-[40px] max-[1024px]:text-[36px] max-[768px]:text-[28px] max-[480px]:text-[24px] leading-snug tracking-tight text-[#101010]">
            Specialized By Nature,
            <br />
            Unified By Design
          </h2>
        </div>

        {/* Bento Cards List */}
        <div className="flex flex-col gap-8 max-w-[960px] mx-auto">
          
          {/* Card 1: Flexible Resilient Infrastructure */}
          <div className="group grid grid-cols-1 md:grid-cols-[5fr_7fr] rounded-[24px] overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.08)] transition-transform duration-400 ease-in-out hover:-translate-y-[6px]">
            <div className="flex items-center justify-center p-[40px] relative overflow-hidden min-h-[240px] bg-gradient-to-br from-[rgba(85,131,255,0.12)] to-[rgba(26,62,158,0.05)] bg-[#eff6ff]">
              <div className="w-[160px] h-[160px] flex items-center justify-center animate-float-y">
                <Iso3DCube />
              </div>
            </div>
            <div className="flex flex-col justify-center p-[40px_48px] bg-gradient-to-br from-[#0e1f5e] to-[#050b18]">
              <h3 className="font-heading font-bold text-[28px] max-[1280px]:text-[24px] max-[1024px]:text-[22px] max-[768px]:text-[20px] leading-snug tracking-tight text-white mb-3">
                Flexible Resilient
                <br />
                Technology Infrastructure
              </h3>
              <p className="font-body text-sm leading-relaxed text-[#94a3b8] mb-6 max-w-[480px]">
                Constructing robust network cores and hybrid databases designed to support and accelerate your critical enterprise software processes at scale.
              </p>
              <a href="#bridge" className="group/link inline-flex items-center gap-[6px] text-[13px] font-bold text-[#E6FF2A] no-underline w-max hover:underline">
                Learn More <span className="transition-transform duration-150 group-hover/link:translate-x-[3px]">→</span>
              </a>
            </div>
          </div>

          {/* Card 2: Strategic Intelligence */}
          <div className="group grid grid-cols-1 md:grid-cols-[7fr_5fr] rounded-[24px] overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.08)] transition-transform duration-400 ease-in-out hover:-translate-y-[6px]">
            <div className="flex flex-col justify-center p-[40px_48px] bg-[#f8fafc]">
              <h3 className="font-heading font-bold text-[28px] max-[1280px]:text-[24px] max-[1024px]:text-[22px] max-[768px]:text-[20px] leading-snug tracking-tight text-[#101010] mb-3">
                Driven by Strategic
                <br />
                Intelligence
              </h3>
              <p className="font-body text-sm leading-relaxed text-[#717171] mb-6 max-w-[480px]">
                We integrate data metrics tools and reporting flows that deliver visual intelligence directly to operators, improving daily execution and strategic decision making.
              </p>
              <a href="#growth" className="group/link inline-flex items-center gap-[6px] text-[13px] font-bold text-blue-600 no-underline w-max hover:underline">
                Learn More <span className="transition-transform duration-150 group-hover/link:translate-x-[3px]">→</span>
              </a>
            </div>
            <div className="flex items-center justify-center p-[40px] relative overflow-hidden min-h-[240px] bg-gradient-to-br from-[rgba(230,255,42,0.08)] to-[rgba(189,194,46,0.03)] bg-[#fefce8]">
              <div className="w-[160px] h-[160px] flex items-center justify-center animate-float-y">
                <IsoBarChart />
              </div>
            </div>
          </div>

          {/* Card 3: Long Lasting Impact */}
          <div className="group grid grid-cols-1 md:grid-cols-[5fr_7fr] rounded-[24px] overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.08)] transition-transform duration-400 ease-in-out hover:-translate-y-[6px]">
            <div className="flex items-center justify-center p-[40px] relative overflow-hidden min-h-[240px] bg-gradient-to-br from-[rgba(85,131,255,0.12)] to-[rgba(26,62,158,0.05)] bg-[#eff6ff]">
              <div className="w-[160px] h-[160px] flex items-center justify-center animate-float-y">
                <IsoFolder />
              </div>
            </div>
            <div className="flex flex-col justify-center p-[40px_48px] bg-gradient-to-br from-[#0e1f5e] to-[#050b18]">
              <h3 className="font-heading font-bold text-[28px] max-[1280px]:text-[24px] max-[1024px]:text-[22px] max-[768px]:text-[20px] leading-snug tracking-tight text-white mb-3">
                Designed for Long
                <br />
                Lasting Impact
              </h3>
              <p className="font-body text-sm leading-relaxed text-[#94a3b8] mb-6 max-w-[480px]">
                We build with maintainable architectures, clean modules, and detailed audit logs that guarantee your enterprise systems will operate without interruption for years.
              </p>
              <a href="#portfolio" className="group/link inline-flex items-center gap-[6px] text-[13px] font-bold text-[#E6FF2A] no-underline w-max hover:underline">
                Learn More <span className="transition-transform duration-150 group-hover/link:translate-x-[3px]">→</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

'use client';

const PILLARS_DATA = [
  {
    id: 0,
    number: "01",
    category: "TECHNOLOGY",
    action: "WE BUILD",
    description: "Building resilient enterprise infrastructure",
  },
  {
    id: 1,
    number: "02",
    category: "DATA & SURVEY",
    action: "WE UNDERSTAND",
    description: "Turning data into strategic decisions",
  },
  {
    id: 2,
    number: "03",
    category: "MEDIA",
    action: "WE AMPLIFY",
    description: "Delivering ideas with measurable impact",
  },
];

export default function BridgePossibility() {
  return (
    <section
      id="about-us"
      className="relative isolate w-full min-h-[900px] overflow-hidden text-white bg-bridge-radial py-[100px] max-[1024px]:py-[80px]"
      aria-labelledby="bridge-possibility-heading"
    >
      {/* Background radial glow */}
      <div 
        className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full pointer-events-none filter blur-[60px] opacity-60 z-0"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0, 110, 255, 0.45) 0%, rgba(0, 90, 255, 0.15) 40%, transparent 75%)'
        }}
      />

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-[110px] max-[1280px]:px-[64px] max-[1024px]:px-[40px] max-[768px]:px-[24px] max-[480px]:px-[16px] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Interactive Globe Visual & Glass Cards */}
        <div className="relative w-full max-w-[720px] aspect-[720/640] mx-auto flex items-center justify-center">
          {/* Globe Image */}
          <img
            src="/images/componen/globe.svg"
            alt="Global Network"
            className="absolute z-[1] w-[65%] h-auto object-contain pointer-events-none opacity-90 select-none animate-float-y"
            style={{
              filter: 'drop-shadow(0 0 30px rgba(62, 136, 255, 0.4))'
            }}
          />

          {/* Animated Arrow GIF */}
          <img
            src="/images/gif/Arrow%20GIF.gif"
            alt="Connecting Arrow"
            className="absolute z-[2] w-[85%] h-auto object-contain pointer-events-none select-none opacity-80"
          />

          {/* Floating Glass Pillar Cards Layout */}
          <div className="relative z-[5] w-full h-full flex flex-col justify-between p-4 max-[640px]:gap-4">
            
            {/* Pillar 01 Card - Top Left */}
            <div className="relative self-start w-[270px] max-[640px]:w-full p-5 rounded-[16px] border border-white/30 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md shadow-[0_16px_40px_rgba(0,0,0,0.3)] transition-transform duration-300 hover:scale-105">
              <div className="absolute -top-10 left-4 font-heading font-black text-[72px] leading-none text-transparent text-stroke-lime pointer-events-none opacity-90">
                01
              </div>
              <span className="block text-white/80 font-body text-[11px] font-bold uppercase tracking-wider">
                {PILLARS_DATA[0].category}
              </span>
              <div className="flex items-center gap-2 mt-2 text-[#E6FF2A] font-body text-[14px] font-extrabold uppercase">
                <span className="w-2 h-2 bg-[#E6FF2A] rounded-xs" />
                <span>{PILLARS_DATA[0].action}</span>
              </div>
              <p className="mt-2 text-white/90 font-body text-[13px] leading-relaxed">
                {PILLARS_DATA[0].description}
              </p>
            </div>

            {/* Pillar 02 Card - Center Right */}
            <div className="relative self-end w-[270px] max-[640px]:w-full p-5 rounded-[16px] border border-white/30 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md shadow-[0_16px_40px_rgba(0,0,0,0.3)] transition-transform duration-300 hover:scale-105">
              <div className="absolute -top-10 left-4 font-heading font-black text-[72px] leading-none text-transparent text-stroke-lime pointer-events-none opacity-90">
                02
              </div>
              <span className="block text-white/80 font-body text-[11px] font-bold uppercase tracking-wider">
                {PILLARS_DATA[1].category}
              </span>
              <div className="flex items-center gap-2 mt-2 text-[#E6FF2A] font-body text-[14px] font-extrabold uppercase">
                <span className="w-2 h-2 bg-[#E6FF2A] rounded-xs" />
                <span>{PILLARS_DATA[1].action}</span>
              </div>
              <p className="mt-2 text-white/90 font-body text-[13px] leading-relaxed">
                {PILLARS_DATA[1].description}
              </p>
            </div>

            {/* Pillar 03 Card - Bottom Left */}
            <div className="relative self-start w-[270px] max-[640px]:w-full p-5 rounded-[16px] border border-white/30 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md shadow-[0_16px_40px_rgba(0,0,0,0.3)] transition-transform duration-300 hover:scale-105">
              <div className="absolute -top-10 left-4 font-heading font-black text-[72px] leading-none text-transparent text-stroke-lime pointer-events-none opacity-90">
                03
              </div>
              <span className="block text-white/80 font-body text-[11px] font-bold uppercase tracking-wider">
                {PILLARS_DATA[2].category}
              </span>
              <div className="flex items-center gap-2 mt-2 text-[#E6FF2A] font-body text-[14px] font-extrabold uppercase">
                <span className="w-2 h-2 bg-[#E6FF2A] rounded-xs" />
                <span>{PILLARS_DATA[2].action}</span>
              </div>
              <p className="mt-2 text-white/90 font-body text-[13px] leading-relaxed">
                {PILLARS_DATA[2].description}
              </p>
            </div>

          </div>
        </div>

        {/* Right Side: Headline & Narrative Content */}
        <div className="flex flex-col gap-6 max-w-[620px]">
          <div className="flex items-center gap-2.5 text-[#E6FF2A] font-body text-[13px] font-bold uppercase tracking-wider">
            <span className="w-2 h-2 bg-[#E6FF2A]" />
            <span>ABOUT US</span>
          </div>

          <h2
            id="bridge-possibility-heading"
            className="font-heading text-[64px] max-[1280px]:text-[52px] max-[1024px]:text-[42px] max-[640px]:text-[32px] font-normal leading-[1.02] tracking-tight text-white"
          >
            Bridge Every
            <br />
            Possibility
          </h2>

          <p className="font-body text-[18px] max-[1280px]:text-[16px] font-normal leading-relaxed text-white/85">
            Arsalynt was built on a singular belief: the greatest challenge
            facing modern organizations isn&apos;t ambition — it&apos;s
            fragmentation. As complexity grows, disconnected capabilities
            weaken execution and limit long-term value.
          </p>

          <div className="pt-4">
            <a 
              href="#about-us" 
              className="inline-flex items-center justify-center px-8 py-4 bg-[#E6FF2A] text-[#101010] font-body text-[14px] font-extrabold uppercase tracking-wider rounded-full no-underline transition-all duration-200 hover:bg-[#d8f21d] hover:shadow-[0_8px_25px_rgba(230,255,42,0.3)] hover:-translate-y-0.5"
            >
              LEARN ABOUT US
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
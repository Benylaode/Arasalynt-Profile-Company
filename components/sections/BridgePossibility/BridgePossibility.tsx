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
      style={{
        /* Safari WebKit Isolation: Force hardware compositing context to prevent tile invalidation on scroll */
        WebkitTransform: 'translate3d(0,0,0)',
      }}
      aria-labelledby="bridge-possibility-heading"
    >
      {/* Background radial glow - Safari Optimized: Native Radial Gradient replacing heavy GPU filter:blur */}
      <div 
        className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full pointer-events-none opacity-70 z-0"
        style={{
          /* Multi-stop native radial gradient: eliminates Safari GPU framebuffer tile allocation failure caused by filter: blur(60px) */
          background: 'radial-gradient(ellipse at center, rgba(0, 110, 255, 0.45) 0%, rgba(0, 90, 255, 0.20) 40%, rgba(0, 70, 220, 0.08) 60%, transparent 75%)',
          WebkitTransform: 'translate3d(-50%, -50%, 0)',
        }}
      />

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-[110px] max-[1280px]:px-[64px] max-[1024px]:px-[40px] max-[768px]:px-[24px] max-[480px]:px-[16px] grid grid-cols-1 lg:grid-cols-[55%_45%] gap-8 lg:gap-12 items-center">
        
        {/* Left Side (55%): Interactive Globe Visual & Floating Glass Cards */}
        <div className="relative w-full max-w-[755px] aspect-[755/640] mx-auto flex items-center justify-center">
          
          {/* Globe Image */}
          <img
            src="/images/componen/globe.svg"
            alt="Global Network"
            className="absolute z-[1] w-[68%] h-auto object-contain pointer-events-none opacity-90 select-none animate-float-y"
            style={{
              filter: 'drop-shadow(0 0 30px rgba(62, 136, 255, 0.4))',
              WebkitFilter: 'drop-shadow(0 0 30px rgba(62, 136, 255, 0.4))',
            }}
          />

          {/* Animated Arrow GIF */}
          <img
            src="/images/gif/Arrow%20GIF.gif"
            alt="Connecting Arrow"
            className="absolute z-[2] w-[89%] h-auto object-contain pointer-events-none select-none opacity-80"
          />

          {/* Floating Glass Pillar Cards Layout */}
          <div className="relative z-[5] w-full h-full flex flex-col justify-between p-4 max-[640px]:gap-10">
            
            {/* Pillar 01 Card Container - Top Left */}
            <div className="relative self-start w-[242px] max-[640px]:w-full mt-6">
              {/* Anchored Slender Outline 01 Number */}
              <div 
                className="absolute -top-24 left-12 max-[640px]:left-6 font-heading font-semibold text-[180px] max-[1280px]:text-[145px] max-[640px]:text-[105px] leading-none text-transparent opacity-85 pointer-events-none z-[1] select-none"
                style={{ WebkitTextStroke: '1px #E6FF2A' }}
              >
                01
              </div>

              {/* SVG Preserved Glass Card Surface (328x164px Scaled 0.74 -> 242x121px) */}
              <div className="relative h-[121px] w-[242px]">
                <div 
                  className="relative z-[2] h-[164px] w-[328px] origin-top-left overflow-hidden rounded-[16px] border border-[rgba(198,198,198,0.45)] bg-[rgba(255,255,255,0.15)] px-[24px] py-[24px] backdrop-blur-[12.5px]"
                  style={{
                    transform: 'scale(0.74) translateZ(0)',
                    transformOrigin: 'top left',
                    WebkitBackdropFilter: 'blur(12.5px)',
                    WebkitMaskImage: '-webkit-radial-gradient(white, black)',
                    WebkitTransform: 'scale(0.74) translateZ(0)',
                  }}
                >
                  <span className="block font-body text-[14px] font-medium uppercase leading-[17px] tracking-normal text-[#F7F7F7]">
                    {PILLARS_DATA[0].category}
                  </span>

                  <div className="mt-[12px] flex items-start gap-[12px] font-body text-[20px] font-semibold uppercase leading-[24px] tracking-[0.4px] text-[#E6FF2A]">
                    <span
                      className="mt-[6px] h-[8px] w-[8px] shrink-0 bg-[#E6FF2A]"
                      aria-hidden="true"
                    />
                    <span>{PILLARS_DATA[0].action}</span>
                  </div>

                  <p className="mt-[12px] max-w-[280px] font-body text-[18px] font-normal leading-[27px] tracking-normal text-white">
                    {PILLARS_DATA[0].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 02 Card Container - Center Right */}
            <div className="relative self-end w-[242px] max-[640px]:w-full">
              {/* Anchored Slender Outline 02 Number */}
              <div 
                className="absolute -top-24 left-6 max-[640px]:left-4 font-heading font-semibold text-[180px] max-[1280px]:text-[145px] max-[640px]:text-[105px] leading-none text-transparent opacity-85 pointer-events-none z-[1] select-none"
                style={{ WebkitTextStroke: '1px #E6FF2A' }}
              >
                02
              </div>

              {/* SVG Preserved Glass Card Surface (328x164px Scaled 0.74 -> 242x121px) */}
              <div className="relative h-[121px] w-[242px]">
                <div 
                  className="relative z-[2] h-[164px] w-[328px] origin-top-left overflow-hidden rounded-[16px] border border-[rgba(198,198,198,0.45)] bg-[rgba(255,255,255,0.15)] px-[24px] py-[24px] backdrop-blur-[12.5px]"
                  style={{
                    transform: 'scale(0.74) translateZ(0)',
                    transformOrigin: 'top left',
                    WebkitBackdropFilter: 'blur(12.5px)',
                    WebkitMaskImage: '-webkit-radial-gradient(white, black)',
                    WebkitTransform: 'scale(0.74) translateZ(0)',
                  }}
                >
                  <span className="block font-body text-[14px] font-medium uppercase leading-[17px] tracking-normal text-[#F7F7F7]">
                    {PILLARS_DATA[1].category}
                  </span>

                  <div className="mt-[12px] flex items-start gap-[12px] font-body text-[20px] font-semibold uppercase leading-[24px] tracking-[0.4px] text-[#E6FF2A]">
                    <span
                      className="mt-[6px] h-[8px] w-[8px] shrink-0 bg-[#E6FF2A]"
                      aria-hidden="true"
                    />
                    <span>{PILLARS_DATA[1].action}</span>
                  </div>

                  <p className="mt-[12px] max-w-[280px] font-body text-[18px] font-normal leading-[27px] tracking-normal text-white">
                    {PILLARS_DATA[1].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 03 Card Container - Bottom Left */}
            <div className="relative self-start w-[242px] max-[640px]:w-full mb-6">
              {/* Anchored Slender Outline 03 Number */}
              <div 
                className="absolute -top-22 left-3 font-heading font-semibold text-[180px] max-[1280px]:text-[145px] max-[640px]:text-[105px] leading-none text-transparent opacity-85 pointer-events-none z-[1] select-none"
                style={{ WebkitTextStroke: '1px #E6FF2A' }}
              >
                03
              </div>

              {/* SVG Preserved Glass Card Surface (328x164px Scaled 0.74 -> 242x121px) */}
              <div className="relative h-[121px] w-[242px]">
                <div 
                  className="relative z-[2] h-[164px] w-[328px] origin-top-left overflow-hidden rounded-[16px] border border-[rgba(198,198,198,0.45)] bg-[rgba(255,255,255,0.15)] px-[24px] py-[24px] backdrop-blur-[12.5px]"
                  style={{
                    transform: 'scale(0.74) translateZ(0)',
                    transformOrigin: 'top left',
                    WebkitBackdropFilter: 'blur(12.5px)',
                    WebkitMaskImage: '-webkit-radial-gradient(white, black)',
                    WebkitTransform: 'scale(0.74) translateZ(0)',
                  }}
                >
                  <span className="block font-body text-[14px] font-medium uppercase leading-[17px] tracking-normal text-[#F7F7F7]">
                    {PILLARS_DATA[2].category}
                  </span>

                  <div className="mt-[12px] flex items-start gap-[12px] font-body text-[20px] font-semibold uppercase leading-[24px] tracking-[0.4px] text-[#E6FF2A]">
                    <span
                      className="mt-[6px] h-[8px] w-[8px] shrink-0 bg-[#E6FF2A]"
                      aria-hidden="true"
                    />
                    <span>{PILLARS_DATA[2].action}</span>
                  </div>

                  <p className="mt-[12px] max-w-[280px] font-body text-[18px] font-normal leading-[27px] tracking-normal text-white">
                    {PILLARS_DATA[2].description}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Right Side (45%): Headline & Narrative Content */}
        <div className="flex flex-col gap-6 max-w-[620px]">
          <div className="flex items-center gap-2.5 text-[#E6FF2A] font-body text-[13px] font-bold uppercase tracking-wider">
            <span className="w-2 h-2 bg-[#E6FF2A] shrink-0" />
            <span>ABOUT US</span>
          </div>

          <h2
            id="bridge-possibility-heading"
            className="font-heading text-[64px] max-[1280px]:text-[52px] max-[1024px]:text-[42px] max-[640px]:text-[32px] font-semibold leading-[1.02] tracking-tight text-white"
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
              className="inline-flex items-center justify-center px-8 py-4 bg-[#E6FF2A] text-[#101010] font-body text-[14px] font-extrabold uppercase tracking-wider rounded-full no-underline transition-all duration-200 hover:bg-[#d8f21d] hover:shadow-[0_8px_25px_rgba(230,255,42,0.35)] hover:-translate-y-0.5"
            >
              LEARN ABOUT US
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
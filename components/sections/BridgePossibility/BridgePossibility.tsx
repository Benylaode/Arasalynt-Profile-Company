'use client';

import styles from './BridgePossibility.module.css';

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
      className="safari-paint-section relative isolate w-full min-h-[900px] overflow-hidden text-white bg-bridge-radial pt-[100px] pb-[70px] max-[1024px]:py-[80px]"
      aria-labelledby="bridge-possibility-heading"
    >
      {/* Background radial glow - Ellipse 1 from Figma design */}
      <div 
        className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] rounded-full pointer-events-none opacity-[0.48] z-0"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(32, 132, 233, 0.85) 0%, rgba(32, 132, 233, 0.30) 40%, rgba(32, 132, 233, 0.08) 65%, transparent 79%)',
        }}
      />
      {/* Background radial glow - Ellipse 2 from Figma design */}
      <div 
        className="absolute top-[35%] left-[55%] -translate-x-1/2 -translate-y-1/2 w-[525px] h-[338px] rounded-full pointer-events-none opacity-[0.31] z-0"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(77, 151, 255, 0.7) 0%, rgba(77, 151, 255, 0.2) 40%, transparent 79%)',
          mixBlendMode: 'plus-lighter' as React.CSSProperties['mixBlendMode'],
        }}
      />

      <div className="relative z-10 mx-auto grid w-[88%] max-w-[1980px] grid-cols-1 items-center gap-8 px-0 max-[1199px]:w-[92%] lg:grid-cols-[55%_45%] lg:gap-12">
        
        {/* Left Side (55%): Interactive Globe Visual & Floating Glass Cards */}
        <div className={`${styles.visual} relative isolate w-full max-w-[755px] aspect-[755/640] mx-auto flex items-center justify-center`}>
          {/* Bercak biru #1A3E9E khusus di belakang globe.
              Dibuat sebagai layer terpisah agar terlihat keluar dari tepi globe. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0 overflow-visible"
          >
            <span
              className="absolute left-[17%] top-[20%] h-[24%] w-[30%] rounded-[46%_54%_62%_38%] bg-[#1A3E9E] opacity-95 blur-[34px]"
              style={{
                boxShadow: '0 0 90px 26px rgba(26,62,158,0.72)',
                transform: 'rotate(-18deg)',
              }}
            />
            <span
              className="absolute right-[12%] top-[21%] h-[27%] w-[29%] rounded-[58%_42%_36%_64%] bg-[#1A3E9E] opacity-90 blur-[38px]"
              style={{
                boxShadow: '0 0 96px 30px rgba(26,62,158,0.68)',
                transform: 'rotate(22deg)',
              }}
            />
            <span
              className="absolute bottom-[13%] left-[18%] h-[25%] w-[28%] rounded-[62%_38%_55%_45%] bg-[#1A3E9E] opacity-85 blur-[36px]"
              style={{
                boxShadow: '0 0 88px 24px rgba(26,62,158,0.64)',
                transform: 'rotate(14deg)',
              }}
            />
            <span
              className="absolute bottom-[16%] right-[13%] h-[23%] w-[27%] rounded-[38%_62%_48%_52%] bg-[#1A3E9E] opacity-90 blur-[35px]"
              style={{
                boxShadow: '0 0 90px 26px rgba(26,62,158,0.67)',
                transform: 'rotate(-16deg)',
              }}
            />
            <span
              className="absolute left-1/2 top-1/2 h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-80 blur-[42px]"
              style={{
                background:
                  'radial-gradient(circle, rgba(26,62,158,0.72) 0%, rgba(26,62,158,0.36) 46%, transparent 72%)',
              }}
            />
          </div>
{/* Globe + Inline Logo Symbol */}
<div
  className="
    pointer-events-none
    absolute
    left-1/2
    top-1/2
    z-[1]
    aspect-square
    w-[59.84%]
    -translate-x-1/2
    -translate-y-1/2
    select-none
    animate-float-y safari-motion-layer
  "
>
  {/* Globe */}
  <img
    src="/images/componen/globe.svg"
    alt="Global Network"
    className="
      absolute
      inset-0
      z-[1]
      h-full
      w-full
      object-contain
      opacity-50
    "
    style={{
      filter: 'drop-shadow(0 0 30px rgba(62,136,255,0.25))',
      WebkitFilter:
        'drop-shadow(0 0 30px rgba(62,136,255,0.25))',
    }}
  />

  {/* Inline SVG, bukan file eksternal */}
  <svg
    viewBox="0 0 978 978"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    preserveAspectRatio="xMidYMid meet"
    className="
      absolute
      left-1/2
      top-1/2
      z-[2]
      h-auto
      w-[120%]
      max-w-none
      -translate-x-1/2
      -translate-y-1/2
      overflow-visible
    "
  >
    <path
      opacity="0.18"
      filter="url(#bridge-symbol-thicken)"
      d="M421.443 27.8185C458.413 -9.27277 518.91 -9.27291 556.216 27.8185L666.791 138.755C689.974 162.337 705.136 191.491 711.096 223.249C711.417 224.899 711.714 226.556 711.984 228.218C683.659 229.898 656.009 237.292 631.057 250.4V246.703C629.371 228.554 621.278 211.077 608.127 197.969L497.19 87.7306C492.132 82.6892 484.04 82.6892 478.982 87.7306L368.044 197.969C366.301 199.706 364.655 201.504 363.106 203.356C351.716 217.571 345.486 235.155 345.486 253.739C345.486 275.32 354.224 295.214 369.012 310.388L458.076 399.744L457.461 400.358L462.459 405.339L487.745 430.322L513.86 404.124L607.966 309.372C616.032 301.617 624.099 294.872 633.173 288.803C659.724 271.269 690.982 261.827 723.246 261.827C732.657 261.827 741.732 262.502 750.806 264.188C783.743 269.583 813.992 285.431 838.191 309.372L936.564 408.368L949.701 421.464C967.573 439.277 977.689 463.476 977.689 488.683V489.019C977.689 514.562 967.573 538.425 949.701 556.237L838.764 666.813C814.486 691.348 783.464 706.808 750.081 712.186C750.075 712.084 750.068 711.983 750.062 711.882C749.861 711.915 749.661 711.951 749.46 711.984C747.78 683.659 740.387 656.009 727.28 631.057H730.976C749.125 629.371 766.603 621.278 779.71 608.127L889.948 497.19C894.99 492.132 894.99 484.039 889.948 478.982L808.119 396.634L780.766 369.369C749.407 338.449 698.827 338.449 667.131 369.369L577.438 458.771L576.722 458.062L572.34 462.459L546.421 488.692L572.047 514.235L666.799 608.341L666.462 607.668C674.218 615.734 680.962 623.801 687.032 632.875C698.55 650.317 706.575 669.79 710.727 690.245C713.012 701.168 714.179 712.388 714.179 723.777C714.179 733.218 713.507 742.322 711.826 751.426C706.113 784.471 690.652 814.819 666.789 838.76L556.214 949.697C538.401 967.568 514.202 977.685 488.995 977.685H488.659C463.117 977.685 439.254 967.569 421.441 949.697L354.471 882.508L309.709 837.893C285.431 813.694 269.583 783.109 264.188 749.5C292.849 747.82 319.825 740.425 345.115 727.318V728.52C345.35 728.4 345.585 728.28 345.82 728.159V731.869C347.836 750.078 356.239 767.275 369.01 780.425L398.824 810.428L478.982 890.323C484.04 895.365 492.132 895.365 497.19 890.323L608.127 780.085C618.885 769.478 625.952 756.497 629.328 742.758C635.504 716.568 628.498 687.823 608.309 667.127L595.894 654.671L513.375 572.715L487.994 547.416L463.445 572.047L457.763 577.767L458.079 578.083L412.378 623.462L369.337 666.799L370.01 666.462C361.944 674.217 353.877 680.962 344.803 687.031C330.028 696.788 313.796 704.037 296.744 708.55C282.765 712.305 268.189 714.201 253.402 714.201C243.96 714.201 234.856 713.529 225.752 712.185C193.044 706.471 162.359 691.01 138.418 666.812L27.8186 556.236C-9.27288 519.266 -9.27286 458.77 27.8186 421.463L116.702 332.868L139.786 309.709C163.985 285.431 194.57 269.583 228.179 264.188C229.859 292.849 237.254 319.825 250.362 345.114H248.798C248.983 345.469 249.169 345.824 249.356 346.178H245.984C227.438 348.194 210.578 356.261 197.09 369.368L123.623 442.594L87.3557 478.982C82.3143 484.04 82.3143 492.132 87.3557 497.19L197.594 608.127C228.515 639.486 279.601 639.486 310.858 608.127L404.964 513.375L429.323 488.937L404.124 463.819L309.372 369.713C301.617 361.647 294.872 353.58 288.803 344.506C271.269 317.955 261.827 286.698 261.827 254.433C261.827 245.022 262.502 235.948 264.188 226.873C269.583 193.936 285.431 163.687 309.372 139.488L374.54 74.7297L421.443 27.8185Z"
      fill="url(#bridge-symbol-gradient)"
    />

    <defs>
      {/* Menebalkan simbol sekitar 1.6x tanpa memperbesar keseluruhan simbol */}
      <filter
        id="bridge-symbol-thicken"
        x="-20%"
        y="-20%"
        width="140%"
        height="140%"
        colorInterpolationFilters="sRGB"
      >
        <feMorphology
          in="SourceGraphic"
          operator="dilate"
          radius="18"
        />
      </filter>

      <radialGradient
        id="bridge-symbol-gradient"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(488.845 488.843) rotate(-180) scale(462.457 464.025)"
      >
        <stop stopColor="#B4B4B4" />
        <stop
          offset="1"
          stopColor="#B4B4B4"
          stopOpacity="0"
        />
      </radialGradient>
    </defs>
  </svg>
</div>




          {/* Animated Arrow GIF */}
          <img
            src="/images/gif/Arrow%20GIF.gif"
            alt="Connecting Arrow"
            className="absolute z-[2] w-[89%] h-auto object-contain pointer-events-none select-none opacity-80"
          />

          {/* Floating Glass Pillar Cards Layout */}
          <div className={`${styles.cards} relative z-[5] mx-auto flex h-full w-full max-h-[520px] max-w-[600px] flex-col justify-between px-4 py-4 max-[500px]:gap-10`}>
            
            {/* Pillar 01 Card Container - Top Left */}
            <div className={`${styles.card} ${styles.cardOne} relative self-start w-[242px] max-[640px]:w-full mt-6`}>
              {/* Anchored Slender Outline 01 Number */}
              <div 
                className={`${styles.number} absolute -top-25 left-17 max-[640px]:left-6 font-heading font-semibold text-[180px] max-[1280px]:text-[145px] max-[640px]:text-[105px] leading-none text-transparent opacity-85 pointer-events-none z-[1] select-none`}
                style={{ WebkitTextStroke: '1px #E6FF2A' }}
              >
                01
              </div>

              {/* SVG Preserved Glass Card Surface (328x164px Scaled 0.74 -> 242x121px) */}
              <div className={`${styles.cardViewport} relative h-[121px] w-[242px] overflow-hidden rounded-[12px]`}>
                <div 
                  className={`${styles.cardSurface} safari-motion-layer relative z-[2] h-[164px] w-[328px] origin-top-left border border-[rgba(198,198,198,0.45)] bg-[rgba(255,255,255,0.15)] px-[24px] py-[24px] backdrop-blur-[12.5px]`}
                  style={{
                    transform: 'scale(0.74)',
                    transformOrigin: 'top left',
                    WebkitBackdropFilter: 'blur(12.5px)',
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
            <div className={`${styles.card} ${styles.cardTwo} relative self-end w-[242px] translate-y-[30px] max-[640px]:w-full max-[640px]:translate-y-0`}>
              {/* Anchored Slender Outline 02 Number */}
              <div 
                className={`${styles.number} absolute -top-32 left-10 max-[640px]:left-4 font-heading font-semibold text-[180px] max-[1280px]:text-[145px] max-[640px]:text-[105px] leading-none text-transparent opacity-85 pointer-events-none z-[1] select-none`}
                style={{ WebkitTextStroke: '1px #E6FF2A' }}
              >
                02
              </div>

              {/* SVG Preserved Glass Card Surface (328x164px Scaled 0.74 -> 242x121px) */}
              <div className={`${styles.cardViewport} relative h-[121px] w-[242px] overflow-hidden rounded-[12px]`}>
                <div 
                  className={`${styles.cardSurface} safari-motion-layer relative z-[2] h-[164px] w-[328px] origin-top-left border border-[rgba(198,198,198,0.45)] bg-[rgba(255,255,255,0.15)] px-[24px] py-[24px] backdrop-blur-[12.5px]`}
                  style={{
                    transform: 'scale(0.74)',
                    transformOrigin: 'top left',
                    WebkitBackdropFilter: 'blur(12.5px)',
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
            <div className={`${styles.card} ${styles.cardThree} relative self-start w-[242px] max-[640px]:w-full mb-6`}>
              {/* Anchored Slender Outline 03 Number */}
              <div 
                className={`${styles.number} absolute -top-29 left-0 font-heading font-semibold text-[180px] max-[1280px]:text-[145px] max-[640px]:text-[105px] leading-none text-transparent opacity-85 pointer-events-none z-[1] select-none`}
                style={{ WebkitTextStroke: '1px #E6FF2A' }}
              >
                03
              </div>

              {/* SVG Preserved Glass Card Surface (328x164px Scaled 0.74 -> 242x121px) */}
              <div className={`${styles.cardViewport} relative h-[121px] w-[242px] overflow-hidden rounded-[12px]`}>
                <div 
                  className={`${styles.cardSurface} safari-motion-layer relative z-[2] h-[164px] w-[328px] origin-top-left border border-[rgba(198,198,198,0.45)] bg-[rgba(255,255,255,0.15)] px-[24px] py-[24px] backdrop-blur-[12.5px]`}
                  style={{
                    transform: 'scale(0.74)',
                    transformOrigin: 'top left',
                    WebkitBackdropFilter: 'blur(12.5px)',
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
        <div className="flex w-full max-w-[470px] flex-col gap-4">
          <div className="flex items-center gap-2.5 text-[#E6FF2A] font-body text-[13px] font-bold uppercase tracking-wider">
            <span className="w-2 h-2 bg-[#E6FF2A] shrink-0" />
            <span className="font-normal text-[10px]">ABOUT US</span>
          </div>

          <h2
            id="bridge-possibility-heading"
            className="font-heading text-[72px] max-[1280px]:text-[68px] max-[1024px]:text-[64px] max-[640px]:text-[60px] font-normal leading-[1.02] tracking-tight text-white"
          >
            Bridge Every
            <br />
            Possibility
          </h2>

          <p className="w-full font-body text-[14px] font-normal leading-relaxed text-white/85 max-w-[400px] max-[100px]:text-[11px]">
            Arsalynk was built on a singular belief: the greatest challenge
            facing modern organizations isn&apos;t ambition — it&apos;s
            fragmentation. As complexity grows, disconnected capabilities
            weaken execution and limit long-term value.
          </p>

          <div className="pt-4">
            <a 
              href="#about-us" 
              className="inline-flex items-center justify-center px-8 py-4 bg-[#E6FF2A] text-[#101010] font-body text-[14px] font-extrabold uppercase tracking-wider rounded-full no-underline transition-[background-color,transform,box-shadow] duration-200 hover:bg-[#d8f21d] hover:shadow-[0_8px_25px_rgba(230,255,42,0.35)] hover:-translate-y-0.5"
            >
              LEARN ABOUT US
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

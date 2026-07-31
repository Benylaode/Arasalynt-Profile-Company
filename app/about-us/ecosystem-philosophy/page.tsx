'use client';

import BeyondExpectations from '@/components/sections/BeyondExpectations/BeyondExpectations';
import Link from 'next/link';

const ASSET = '/images/ecosystem-philosophy';

const IconChevronDown = () => (
  <svg
    width="32"
    height="21"
    viewBox="0 0 32 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M2 2.25L16 17.25L30 2.25"
      stroke="currentColor"
      strokeWidth="3.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PILLARS = [
  {
    label: 'TECHNOLOGY',
    title: ['WE BUILD BETTER', 'IT SYSTEM'],
    description: 'Building resilient end-to-end technology & IoT infrastructure',
  },
  {
    label: 'DATA & SURVEY',
    title: ['WE UNLOCK INSIGHTFUL', 'MEASURABLE DATA'],
    description: 'Turning insightful data into strategic business decisions',
  },
  {
    label: 'MEDIA',
    title: ['WE DELIVER EXCELLENT', 'CREATIVE EXECUTION'],
    description: 'Delivering creative ideas and content, with measurable impact',
  },
];

const WideContainer = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`mx-auto w-full max-w-[1700px] ${className}`}>
    {children}
  </div>
);

const NarrowContainer = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`mx-auto w-full max-w-[1408px] ${className}`}>
    {children}
  </div>
);

export default function EcosystemPhilosophyPage() {
  const handleScrollDown = () => {
    document.getElementById('ecosystem-intro')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <main className="ecosystem-philosophy-page relative w-full overflow-hidden bg-[#F7F7F7] text-[#101010]">
      {/* HERO */}
      <section
        id="ecosystem-hero"
        aria-label="Ecosystem Philosophy Hero"
        className="relative h-[clamp(520px,41.667vw,800px)] w-full overflow-hidden rounded-b-[42px] bg-[#020714] max-[640px]:rounded-b-[24px]"
      >
        <img
          src={`${ASSET}/hero-globe.png`}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[-218px] h-[1827px] w-[2025px] max-w-none -translate-x-1/2 object-fill max-[1024px]:top-[-70px] max-[1024px]:h-[980px] max-[1024px]:w-[1080px] max-[640px]:top-[-10px] max-[640px]:h-[700px] max-[640px]:w-[770px]"
        />

        <div className="pointer-events-none absolute inset-0 bg-black/20" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-0 bg-black/20" aria-hidden="true" />

        <img
          src={`${ASSET}/hero-network.png`}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[-445px] left-1/2 h-[997px] w-[2588px] max-w-none -translate-x-1/2 object-fill opacity-80 max-[1024px]:bottom-[-220px] max-[1024px]:h-[620px] max-[1024px]:w-[1610px]"
          style={{ mixBlendMode: 'plus-lighter' }}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[698px]"
          style={{
            background:
              'linear-gradient(180deg, rgba(16,16,16,0) 9.62%, #101010 100%)',
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 mix-blend-color"
          style={{
            background:
              'linear-gradient(180deg, #1A3E9E 0%, rgba(26,62,158,0) 71.94%)',
          }}
        />

        <div className="absolute left-1/2 top-1/2 z-10 flex w-full max-w-[948px] -translate-x-1/2 -translate-y-[60%] flex-col items-center gap-6 text-center max-[640px]:px-4 max-[640px]:gap-4">
          <p className="font-body text-[14px] font-bold uppercase leading-[130%] tracking-[0.06em] text-[#E6FF2A] max-[640px]:text-[10px]">
            HOME&nbsp;&nbsp;&gt;&nbsp;&nbsp;ABOUT US&nbsp;&nbsp;&gt;&nbsp;&nbsp;ECOSYSTEM PHILOSOPHY
          </p>
          <h1 className="font-heading text-[clamp(56px,5vw,96px)] font-medium leading-none tracking-[-0.02em] text-[#F7F7F7]">
            Ecosystem Philosophy
          </h1>
        </div>

        <button
          type="button"
          aria-label="Scroll to ecosystem introduction"
          onClick={handleScrollDown}
          className="absolute left-1/2 bottom-[clamp(34px,4.5vw,71px)] z-20 flex h-[clamp(56px,4.167vw,80px)] w-[clamp(56px,4.167vw,80px)] -translate-x-1/2 items-center justify-center rounded-full border border-[rgba(175,175,175,0.25)] text-white transition-transform duration-300 hover:translate-y-1"
          style={{
            background:
              'linear-gradient(230.45deg, rgba(247,247,247,0.21) -7.74%, rgba(247,247,247,0.105) 81.5%)',
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)',
          }}
        >
          <IconChevronDown />
        </button>
      </section>

      {/* SECTION 01 — SPECIALIZED INDUSTRY */}
      <section
        id="ecosystem-intro"
        className="w-full bg-[#F7F7F7] px-[clamp(24px,13.333vw,256px)] py-[clamp(80px,6.563vw,110px)]"
      >
        <NarrowContainer className="flex items-center justify-between gap-[clamp(32px,2.5vw,48px)] max-[1024px]:flex-col">
          <div className="flex w-[38.7%] shrink-0 flex-col justify-center max-[1024px]:w-full">
            <div className="flex flex-col gap-[clamp(24px,2.188vw,42px)]">
              <div className="flex items-center gap-[10px]">
                <span className="h-2 w-2 shrink-0 bg-[#1A3E9E]" />
                <p className="font-body text-[14px] font-extrabold uppercase leading-[130%] tracking-[0.06em] text-[#1A3E9E] max-[640px]:text-[13px]">
                  OUR ECOSYSTEM PHILOSOPHY
                </p>
              </div>

              <h2 className="font-heading text-[clamp(40px,3.333vw,64px)] font-medium leading-[120%] tracking-[-0.02em] text-[#101010]">
                Specialized
                <br />
                Industry,
                <br />
                Unified Integration
              </h2>

              <p className="font-body text-[clamp(15px,1.042vw,20px)] font-normal leading-[160%] tracking-[0.02em] text-[#292929]">
                We recognize that broad, generalist agencies lack the depth required to solve highly complex technical problems, while isolated niche boutiques lack the scale to handle cross-border enterprise demands.
              </p>
            </div>
          </div>

          <div className="relative w-[54.3%] shrink-0 overflow-hidden rounded-[24px] bg-[#071C3D] max-[1024px]:w-full aspect-[764/670]">
            <img
              src={`${ASSET}/intro-hand.png`}
              alt="Integrated digital ecosystem"
              className="absolute left-[-103px] top-[-224px] h-[957px] w-[1068px] max-w-none object-fill max-[1024px]:inset-0 max-[1024px]:h-full max-[1024px]:w-full max-[1024px]:object-cover"
            />
          </div>
        </NarrowContainer>
      </section>

      {/* SECTION 02 — ONE UNIFIED ECOSYSTEM */}
      <section className="relative min-h-[833px] w-full overflow-hidden bg-gradient-to-b from-[#1A3E9E] to-[#152571] px-[clamp(24px,13.333vw,256px)] py-[clamp(100px,8.125vw,156px)]">
        <img
          src={`${ASSET}/ecosystem-network.png`}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-[32px] top-[-702px] h-[1287px] w-[2746px] max-w-none object-fill opacity-25 max-[1024px]:left-1/2 max-[1024px]:top-[-220px] max-[1024px]:h-[760px] max-[1024px]:w-[1620px] max-[1024px]:-translate-x-1/2"
          style={{ mixBlendMode: 'plus-lighter' }}
        />
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[1056px] w-[1920px] max-w-none -translate-x-1/2 -translate-y-1/2"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(50% 50% at 50% 50%, rgba(21,37,113,0) 3.85%, #152571 100%)',
          }}
        />

        <NarrowContainer className="relative z-10 flex flex-col gap-[clamp(48px,3.75vw,72px)]">
          <div className="flex flex-col gap-[clamp(20px,1.667vw,32px)]">
            <div className="flex items-center gap-[10px]">
              <span className="h-2 w-2 shrink-0 bg-[#E6FF2A]" />
              <p className="font-body text-[14px] font-semibold uppercase leading-[130%] tracking-[0.06em] text-[#E6FF2A] max-[640px]:text-[13px]">
                ONE UNIFIED ECOSYSTEM
              </p>
            </div>

            <h2 className="font-heading text-[clamp(12px,2.917vw,28px)] font-normal leading-[110%] tracking-[-0.01em] text-[#F7F7F7]">
              This is not a collection of individual vendors—it is a synchronized corporate ecosystem designed to strengthen operations, optimize assets, and help businesses execute with confidence.
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-[clamp(20px,1.563vw,30px)] max-[1024px]:grid-cols-1">
            {PILLARS.map((pillar) => (
              <article
                key={pillar.label}
                className="flex min-h-[clamp(80px,17.5vw,100px)] min-w-0 flex-col items-start justify-between gap-[clamp(16px,1.563vw,20px)] rounded-[20px] border border-[rgba(198,198,198,0.45)] bg-white/[0.15] px-[clamp(10px,2.5vw,16px)] pt-[clamp(10px,2.5vw,16px)] pb-[clamp(10px,2.813vw,16px)]"
                style={{
                  backdropFilter: 'blur(12.5px)',
                  WebkitBackdropFilter: 'blur(12.5px)',
                }}
              >
                <div className="flex w-full flex-col gap-4">
                  <p className="font-body text-[12px] font-normal uppercase leading-[130%] tracking-[0.06em] text-[#F7F7F7]">
                    {pillar.label}
                  </p>

                  <div className="flex items-start gap-3">
                    <span className="mt-2.5 h-2 w-2 shrink-0 bg-[#E6FF2A]" />
                    <h3 className="font-body text-[clamp(20px,1.458vw,28px)] font-bold uppercase leading-[130%] text-[#E6FF2A]">
                      {pillar.title.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </h3>
                  </div>
                </div>

                <p className="font-body text-[clamp(14px,0.938vw,18px)] font-normal leading-[160%] tracking-[0.02em] text-white/90">
                  {pillar.description}
                </p>
              </article>
            ))}
          </div>
        </NarrowContainer>
      </section>

      {/* EXPLORE OTHER INFORMATION */}
      <section className="w-full bg-[rgba(153,166,231,.10)] px-[clamp(24px,5.729vw,110px)] py-[clamp(80px,6.563vw,126px)]">
        <WideContainer>
          <h2 className="mb-[clamp(32px,2.5vw,48px)] text-center font-heading text-[clamp(48px,4.375vw,84px)] font-medium leading-none tracking-[-0.03em] text-[#101010]">
            Explore Other Information
          </h2>

          <div className="grid grid-cols-2 gap-[clamp(20px,1.563vw,30px)] max-[768px]:grid-cols-1">
            <Link
              href="/about-us/company-leadership"
              className="group relative overflow-hidden rounded-[24px] bg-[#8C8C8C] no-underline aspect-[835/500]"
            >
              <img
                src={`${ASSET}/company-leadership.png`}
                alt="Company Leadership"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
              />
              <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-b from-transparent to-black" />
              <h3 className="absolute bottom-[34px] left-[clamp(24px,2.5vw,48px)] right-8 font-heading text-[clamp(28px,2.917vw,56px)] font-semibold leading-[1.1] tracking-[-0.01em] text-[#F7F7F7]">
                Company Leadership
              </h3>
            </Link>

            <Link
              href="/about-us/corporate-profile"
              className="group relative overflow-hidden rounded-[24px] bg-[#8C8C8C] no-underline aspect-[835/500]"
            >
              <img
                src={`${ASSET}/corporate-profile.png`}
                alt="Corporate Profile"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
              />
              <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-b from-transparent to-black" />
              <h3 className="absolute bottom-[34px] left-[clamp(24px,2.5vw,48px)] right-8 font-heading text-[clamp(28px,2.917vw,56px)] font-semibold leading-[1.1] tracking-[-0.01em] text-[#F7F7F7]">
                Corporate Profile
              </h3>
            </Link>
          </div>
        </WideContainer>
      </section>

      {/* Komponen ini sengaja tidak diubah */}
      <BeyondExpectations />

      <style jsx global>{`
        .ecosystem-philosophy-page .font-heading {
          font-family: 'Switzer', Arial, sans-serif;
        }

        .ecosystem-philosophy-page .font-body {
          font-family: 'Manrope', Arial, sans-serif;
        }

        .ecosystem-philosophy-page,
        .ecosystem-philosophy-page * {
          box-sizing: border-box;
        }

        @media (prefers-reduced-motion: reduce) {
          .ecosystem-philosophy-page *,
          .ecosystem-philosophy-page *::before,
          .ecosystem-philosophy-page *::after {
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}</style>
    </main>
  );
}
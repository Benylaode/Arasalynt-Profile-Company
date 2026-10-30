import type { Metadata } from 'next';
import Link from 'next/link';
import BeyondExpectations from '@/components/sections/BeyondExpectations/BeyondExpectations';
import { CORE_SOLUTIONS, OUR_SOLUTION_CHALLENGE, OUR_SOLUTION_CHALLENGES, SOLUTION_SERVICES } from '@/lib/our-solution.data';
import SolutionWorksExplorer from '@/components/sections/SolutionWorksExplorer/SolutionWorksExplorer';
import JsonLd from '@/components/seo/JsonLd';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Enterprise ERP, IoT & System Solutions | Arsalynk',
  description:
    'Arsalynk enterprise technology solutions: ERP systems development, IoT hardware integration, retail POS, HRMS, finance & supply chain automation.',
  alternates: { canonical: '/our-solution' },
  openGraph: {
    title: 'Enterprise Technology Solutions — ERP, IoT & Operational Systems | Arsalynk',
    description: 'Integrated enterprise operational systems custom-engineered to elevate efficiency and workflow scale.',
    url: '/our-solution',
    images: ['/images/our-works/our-works-hero-bg.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise Technology Solutions — ERP, IoT & Operational Systems | Arsalynk',
    description: 'Integrated enterprise operational systems custom-engineered to elevate efficiency and workflow scale.',
    images: ['/images/our-works/our-works-hero-bg.webp'],
  },
};

function IconChevronDown() {
  return (
    <svg width="32" height="22" viewBox="0 0 32 22" fill="none" aria-hidden="true">
      <path d="M3 4L16 17L29 4" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function OurSolutionPage() {
  const canonicalUrl = `${SITE_URL}/our-solution`;
  const solutionSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Our Solution', item: canonicalUrl },
        ],
      },
      {
        '@type': 'CollectionPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: 'Our Solution | Arsalynk',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
        breadcrumb: { '@id': `${canonicalUrl}#breadcrumb` },
        inLanguage: 'en-US',
      },
      {
        '@type': 'Service',
        '@id': `${canonicalUrl}#service`,
        name: 'Arsalynk Enterprise Technology Solutions',
        provider: { '@id': `${SITE_URL}/#organization` },
        description:
          'Integrated enterprise systems spanning ERP, IoT hardware integration, data intelligence, and digital web development.',
        areaServed: 'ID',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Enterprise Solutions Catalog',
          itemListElement: SOLUTION_SERVICES.map((s) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: s.title,
              description: s.description,
            },
          })),
        },
      },
    ],
  };

  return (
    <main className="relative w-full overflow-x-hidden bg-[#F7F7F7] text-[#101010]">
      <JsonLd id="solution-schema" data={solutionSchema} />
      
      {/* ── HERO SECTION ── */}
      <section className="relative isolate flex h-[clamp(560px,41.666vw,800px)] items-center justify-center overflow-hidden rounded-b-[clamp(24px,2.188vw,42px)] bg-[#101010]">
        <img
          src="/images/our-works/our-works-hero-bg.webp"
          alt="Arsalynk Enterprise Solutions Hero Background"
          className="absolute left-1/2 top-1/2 z-0 h-auto min-h-[166%] w-[104%] min-w-[1100px] max-w-none object-cover"
          style={{ transform: 'translate(-50%, calc(-50% + clamp(90px, 9.74vw, 187px)))' }}
        />
        <img
          src="/images/specialized/specialized-network.webp"
          alt="Network technology overlay background"
          className="pointer-events-none absolute bottom-[-90px] left-1/2 z-[1] w-[134.8vw] min-w-[1450px] max-w-none -translate-x-1/2 scale-y-[-1] md:bottom-[-140px] xl:bottom-[-204px]"
          style={{ mixBlendMode: 'plus-lighter' }}
        />
        <div className="absolute inset-0 z-[2] bg-[linear-gradient(180deg,#1A3E9E_0%,rgba(26,62,158,0)_71.94%)] mix-blend-multiply" />
        <div className="absolute inset-x-0 bottom-0 z-[3] h-[87%] bg-[linear-gradient(180deg,rgba(16,16,16,0)_9.62%,#101010_100%)]" />
        
        <div className="relative z-10 mx-auto flex w-full max-w-[900px] flex-col items-center gap-6 px-6 text-center">
          <p className="font-body text-[clamp(10px,.75vw,14px)] font-bold uppercase tracking-[.08em] text-[#E6FF2A]">
            HOME · OUR SOLUTION
          </p>
          <h1 className="font-heading text-[clamp(52px,5vw,96px)] font-medium leading-none text-[#F7F7F7]">
            Our Solution
          </h1>
          <p className="max-w-[650px] font-body text-[clamp(14px,1.042vw,20px)] font-light leading-[1.6] tracking-[0.02em] text-white/95">
            Integrated enterprise technology systems engineered to optimize efficiency and operational workflows
          </p>
        </div>
        
        <a
          href="#challenge"
          aria-label="Scroll to Challenge"
          className="absolute bottom-[clamp(34px,3.698vw,71px)] left-1/2 z-20 flex h-[clamp(56px,4.167vw,80px)] w-[clamp(56px,4.167vw,80px)] -translate-x-1/2 items-center justify-center rounded-full border border-white/20 bg-[linear-gradient(230.45deg,rgba(247,247,247,0.21)_-7.74%,rgba(247,247,247,0.105)_81.5%)] text-white shadow-[0_12px_30px_rgba(0,0,0,0.2)] backdrop-blur-[4px] transition duration-300 hover:-translate-y-1 hover:bg-white/20"
        >
          <IconChevronDown />
        </a>
      </section>

      {/* ── THE CHALLENGE ── */}
      <section id="challenge" className="relative isolate scroll-mt-24 overflow-hidden bg-[#EEF0F6] px-[6vw] py-[clamp(100px,8.125vw,156px)] max-[1199px]:px-[4vw]">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[clamp(420px,52vw,700px)] w-[88%] max-w-[1759px] -translate-x-1/2 -translate-y-1/2 bg-cover bg-center opacity-[.14]"
          style={{ backgroundImage: "url('/images/our-business/pain-points-radial.webp')" }}
        />
        <div className="relative z-10 mx-auto flex max-w-[1700px] flex-col items-center gap-[clamp(48px,4.167vw,80px)]">
          <div className="flex flex-col items-center gap-6 text-center">
            <p className="font-body text-[13px] font-bold tracking-[.08em] text-[#1A3E9E]">▪ THE CHALLENGE</p>
            <h2 className="max-w-[900px] font-heading text-[clamp(48px,4.375vw,84px)] font-medium leading-[1.08]">
              {OUR_SOLUTION_CHALLENGE.title}
            </h2>
          </div>
          <div className="grid w-full grid-cols-4 gap-[clamp(16px,1.56vw,30px)] max-[1100px]:grid-cols-2 max-[640px]:grid-cols-1">
            {OUR_SOLUTION_CHALLENGES.map((challenge, index) => (
              <article
                key={challenge.title}
                className="group flex flex-col overflow-hidden rounded-[24px] border border-[#E4E4E4] bg-white shadow-[0_12px_36px_rgba(26,62,158,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#7F9CFF] hover:shadow-[0_22px_45px_rgba(26,62,158,0.16)]"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#101010]/5">
                  <img
                    src={challenge.image}
                    alt={challenge.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-gradient-to-b from-[#101010] to-[#155A99] p-6 text-white">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center rounded-full bg-[#E6FF2A] px-3 py-1 font-body text-[11px] font-bold text-[#101010]">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="mt-3.5 font-heading text-[20px] font-medium leading-snug text-[#F7F7F7]">
                      {challenge.title}
                    </h3>
                    <p className="mt-2.5 font-body text-[13px] leading-[1.65] text-white/85">
                      {challenge.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR ARCHITECTURE (4 CORE PILLARS) ── */}
      <section id="solutions" className="relative overflow-hidden bg-[#0A0D14] px-[6vw] py-[clamp(100px,8.125vw,156px)] text-white max-[1199px]:px-[4vw]">
        {/* Ambient Backdrops */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(26,62,158,.35),transparent_48%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(230,255,42,.06),transparent_50%)]" />

        <div className="relative z-10 mx-auto max-w-[1700px]">
          <div className="mb-14 text-center">
            <p className="font-body text-[13px] font-bold tracking-[.08em] text-[#E6FF2A]">▪ OUR ARCHITECTURE</p>
            <h2 className="mt-4 font-heading text-[clamp(44px,4.375vw,84px)] font-medium leading-[1.05]">
              Four Pillars of Enterprise Solution Ecosystem
            </h2>
          </div>

          {/* Cards mirroring the exact structural design of Gambar 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_SOLUTIONS.map((solution) => (
              <Link
                key={solution.slug}
                href={`/our-solution/${solution.slug}`}
                className="group relative flex aspect-[1.44/1] w-full flex-col justify-between overflow-hidden rounded-[20px] p-6 sm:p-7 md:p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_22px_45px_rgba(0,0,0,0.55)]"
                style={{
                  backgroundColor: solution.cardBg,
                  borderColor: solution.cardBorder,
                  borderWidth: '1px',
                }}
              >
                {/* Prototype Mockup Background Image */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="h-full w-full object-cover object-top opacity-35 transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-55"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D14] via-[#0A0D14]/75 to-[#0A0D14]/35" />
                </div>

                {/* Background Stylized Arsalynt Geometric Brand Graphic */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                  <svg
                    viewBox="0 0 402 278"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                  >
                    <defs>
                      <radialGradient
                        id={`pillar-glow-${solution.slug}`}
                        cx="0"
                        cy="0"
                        r="1"
                        gradientTransform="matrix(-145.542 357.75 -405.49 -128.407 985.126 550.7)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor={solution.glowStart} stopOpacity={solution.glowStartOpacity} />
                        <stop offset="1" stopColor={solution.glowEnd} stopOpacity={solution.glowEndOpacity} />
                      </radialGradient>
                    </defs>
                    <g transform="translate(-551, -380.744)">
                      <path
                        d="M774.55 184.951C810.459 153.503 868.702 153.761 904.466 185.08L1011.03 279.037C1034.24 299.658 1049.13 325.436 1054.53 353.274C1056.13 360.878 1056.72 368.87 1056.72 376.731C1056.72 379.584 1056.62 382.425 1056.43 385.252C1059.37 385.109 1062.32 385.037 1065.29 385.037C1073.98 385.037 1082.82 385.529 1091.24 386.868C1091.25 386.773 1091.26 386.678 1091.26 386.583C1123.4 391.091 1153.35 404.613 1176.57 425.09L1283.51 519.233C1319.15 550.915 1318.86 602.301 1283.36 633.854L1176.87 727.868C1153.49 748.345 1124.28 761.482 1092.72 766.247C1084.1 767.664 1075.05 768.179 1066.13 768.179C1062.88 768.179 1059.64 768.09 1056.42 767.919C1056.62 770.767 1056.72 773.63 1056.72 776.504C1056.72 784.495 1056.13 792.357 1054.53 800.09C1049.13 828.058 1034.24 853.706 1011.03 874.198L904.466 968.155C886.511 984.008 863.009 991.741 839.508 991.741C816.006 991.741 792.504 984.008 774.55 968.284L667.989 874.198C644.78 853.706 629.453 827.413 624.344 798.93C624.412 798.926 624.481 798.921 624.55 798.918C623.01 791.323 622.445 783.603 622.445 775.76C622.445 773.137 622.528 770.523 622.69 767.921C619.48 768.091 616.254 768.179 613.015 768.179C603.958 768.179 595.046 767.664 586.281 766.247C554.581 761.482 525.511 748.345 502.283 727.868L395.788 633.854C377.82 618.013 369.055 597.279 369.055 576.544C369.055 555.809 377.819 535.074 395.642 519.233L502.283 425.219C525.51 404.742 555.311 391.22 587.596 386.712C587.599 386.772 587.605 386.833 587.608 386.894C596.218 385.535 604.968 385.037 613.858 385.037C616.813 385.037 619.756 385.108 622.687 385.25C622.527 382.67 622.445 380.078 622.445 377.477C622.445 369.808 623.004 362.016 624.521 354.58C624.414 354.575 624.305 354.569 624.197 354.563C629.306 326.209 644.634 299.788 667.844 279.295L774.55 184.951Z"
                        fill={`url(#pillar-glow-${solution.slug})`}
                      />
                    </g>
                  </svg>
                </div>

                {/* Title */}
                <div className="relative z-10">
                  <h3
                    className="font-heading text-[clamp(26px,2.1vw,36px)] font-bold leading-[1.08] tracking-tight"
                    style={{ color: solution.textColor }}
                  >
                    {solution.titleLine1}
                    <br />
                    {solution.titleLine2}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPLORE OUR SERVICES (FOCUSED 4 SERVICES) ── */}
      <section id="services" className="scroll-mt-24 bg-[#F0F2F8] px-[6vw] py-[clamp(80px,7vw,130px)] max-[1199px]:px-[4vw]">
        <div className="mx-auto max-w-[1700px]">
          <div className="mb-12 flex items-end justify-between gap-8 max-[700px]:flex-col max-[700px]:items-start">
            <div>
              <div className="flex items-center gap-2 font-body text-[12px] font-extrabold uppercase tracking-[0.06em] text-[#1A3E9E]">
                <span className="h-1.5 w-1.5 bg-[#1A3E9E]" />
                <span>FOCUSED SPECIALIZATIONS</span>
              </div>
              <h2 className="mt-2 font-heading text-[clamp(44px,4.375vw,84px)] font-medium leading-[1.04]">
                Explore<br />Our Services
              </h2>
            </div>
            <p className="max-w-[460px] font-body text-[15px] leading-[1.65] text-[#424242]">
              In-depth focus across 4 core services engineered to solve real-world industrial and enterprise operational challenges.
            </p>
          </div>
          <SolutionWorksExplorer services={SOLUTION_SERVICES} />
        </div>
      </section>

      <BeyondExpectations />
    </main>
  );
}

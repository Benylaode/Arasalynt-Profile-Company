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
      <section id="solutions" className="relative overflow-hidden bg-[#101010] px-[6vw] py-[clamp(100px,8.125vw,156px)] text-white max-[1199px]:px-[4vw]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(26,62,158,.45),transparent_48%)]" />
        <div className="relative z-10 mx-auto max-w-[1700px]">
          <div className="mb-14 text-center">
            <p className="font-body text-[13px] font-bold tracking-[.08em] text-[#E6FF2A]">▪ OUR ARCHITECTURE</p>
            <h2 className="mt-4 font-heading text-[clamp(44px,4.375vw,84px)] font-medium leading-[1.05]">
              4 Pillars of Enterprise Solution Ecosystem
            </h2>
            <p className="mx-auto mt-4 max-w-[720px] font-body text-[15px] leading-[1.65] text-white/75 sm:text-[16px]">
              An integrated architecture connecting business operations, analytics intelligence, hardware sensor automation, and high-performance digital platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_SOLUTIONS.map((solution, idx) => (
              <div
                key={solution.slug}
                className="group relative flex flex-col justify-between rounded-[20px] border border-white/15 bg-white/[0.04] p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#E6FF2A]/60 hover:bg-white/[0.08]"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <span className="font-body text-[12px] font-bold tracking-widest text-[#E6FF2A]">
                      0{idx + 1}
                    </span>
                    <span className="h-2 w-2 rounded-full bg-[#1A3E9E]" />
                  </div>
                  <h3 className="mt-6 font-heading text-[22px] font-medium leading-tight text-white group-hover:text-[#E6FF2A] transition-colors">
                    {solution.title}
                  </h3>
                  <p className="mt-3 font-body text-[13px] leading-[1.6] text-white/70">
                    {solution.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 mt-6">
                  <Link
                    href={`/our-solution/${solution.slug}`}
                    className="inline-flex items-center gap-2 font-body text-[12px] font-bold uppercase tracking-[0.06em] text-[#E6FF2A] transition group-hover:underline"
                  >
                    <span>Explore Capabilities</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
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

import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import BeyondExpectations from '@/components/sections/BeyondExpectations/BeyondExpectations';
import JsonLd from '@/components/seo/JsonLd';
import { getSolutionService, SOLUTION_SERVICES } from '@/lib/our-solution.data';
import { SITE_URL } from '@/lib/constants';

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SOLUTION_SERVICES.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getSolutionService(slug);

  if (!service) {
    return { title: 'Solution Not Found', robots: { index: false, follow: false } };
  }

  const canonicalUrl = `/our-solution/${service.slug}`;
  const title = service.title;

  return {
    title,
    description: service.description,
    keywords: service.keywords,
    robots: { index: true, follow: true },
    alternates: { canonical: canonicalUrl },
    openGraph: {
      type: 'website',
      title: `${service.title} | Arsalynk Enterprise Solution`,
      description: service.description,
      url: canonicalUrl,
      images: [
        {
          url: service.heroSvg || (service.image.startsWith('/') ? service.image : '/images/our-works/our-works-hero-bg.webp'),
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.title} | Arsalynk Enterprise Solution`,
      description: service.description,
      images: [service.heroSvg || (service.image.startsWith('/') ? service.image : '/images/our-works/our-works-hero-bg.webp')],
    },
  };
}

function IconArrowRight({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12H19M14 7L19 12L14 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0 text-[#E6FF2A]">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default async function SolutionServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getSolutionService(slug);

  if (!service) {
    notFound();
  }

  const canonicalUrl = `${SITE_URL}/our-solution/${service.slug}`;

  const solutionServiceSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${canonicalUrl}#service`,
        name: service.title,
        description: service.description,
        provider: { '@id': `${SITE_URL}/#organization` },
        serviceType: service.title,
        areaServed: 'ID',
        url: canonicalUrl,
        category: service.industry,
      },
      {
        '@type': 'WebPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: `${service.title} | Arsalynk`,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${canonicalUrl}#service` },
        description: service.description,
        breadcrumb: { '@id': `${canonicalUrl}#breadcrumb` },
        inLanguage: 'en-US',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Our Solution', item: `${SITE_URL}/our-solution` },
          { '@type': 'ListItem', position: 3, name: service.shortTitle, item: canonicalUrl },
        ],
      },
    ],
  };

  return (
    <main className="relative w-full overflow-x-hidden bg-[#F7F7F7] text-[#101010]">
      <JsonLd
        id={`solution-service-schema-${service.slug}`}
        data={solutionServiceSchema}
      />

      {/* ── HERO SECTION ── */}
      <section className="relative isolate flex min-h-[600px] lg:min-h-[660px] items-center justify-center overflow-hidden rounded-b-[clamp(24px,2.188vw,42px)] bg-black pb-24 pt-[150px] text-white">
        {/* Bespoke Vector Hero Background for each solution */}
        <img
          src={service.heroSvg || '/images/our-works/our-works-hero-bg.webp'}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 z-0 h-full w-full object-cover object-center pointer-events-none select-none blur-[8px] scale-105"
        />

        {/* Subtle center-radial vignette behind content for maximum text contrast */}
        <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.4)_0%,transparent_70%)] pointer-events-none" />

        {/* Smooth bottom gradient fade to seamlessly blend with the rounded section base */}
        <div className="absolute inset-x-0 bottom-0 z-[2] h-40 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />

        <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col items-center px-6 text-center">
          {/* Breadcrumb text */}
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center justify-center gap-2 font-body text-[11px] font-bold uppercase tracking-[0.08em] text-[#E6FF2A]">
            <Link href="/" className="transition hover:opacity-75">Home</Link>
            <span aria-hidden="true">·</span>
            <Link href="/our-solution" className="transition hover:opacity-75">Our Solution</Link>
            <span aria-hidden="true">·</span>
            <span className="text-white/80">{service.shortTitle}</span>
          </nav>

          <h1 className="mt-6 max-w-[980px] font-heading text-[clamp(32px,3.8vw,64px)] font-medium leading-[1.12] text-[#F7F7F7] drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]">
            {service.heroHeadline ? service.heroHeadline.replace(/^["“]+|["”]+$/g, '') : service.title}
          </h1>

          <p className="mt-5 max-w-[760px] font-body text-[clamp(15px,1.15vw,20px)] font-light leading-[1.65] text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
            {service.description}
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact-us#contact-form"
              className="inline-flex h-[50px] items-center justify-center gap-2.5 rounded-full bg-[#E6FF2A] px-7 font-body text-[14px] font-bold tracking-[0.02em] text-[#101010] shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_8px_25px_rgba(230,255,42,0.35)]"
            >
              <span>{service.ctaPrimary ?? 'Consult Solution'}</span>
              <IconArrowRight />
            </Link>

            <Link
              href={service.relatedWork ? `/our-works/${service.relatedWork.slug}` : `/insight-programs/case-studies/${service.caseStudySlug}`}
              className="inline-flex h-[50px] items-center justify-center gap-2.5 rounded-full border border-white/30 bg-white/10 px-7 font-body text-[14px] font-semibold text-white shadow-[0_4px_20px_rgba(0,0,0,0.2)] backdrop-blur-[6px] transition duration-300 hover:border-[#E6FF2A] hover:bg-white/20 hover:text-[#E6FF2A]"
            >
              <span>{service.ctaSecondary ?? 'View Related Case Study'}</span>
              <IconArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 1: WHAT IT IS & OVERVIEW ── */}
      <section className="relative isolate overflow-hidden bg-[#F7F7F7] px-[6vw] py-[clamp(70px,7vw,130px)] max-[1199px]:px-[4vw]">
        {/* Service Section SVG Right Visual (Desktop lg+) */}
        {service.serviceSectionSvg && (
          <div
            aria-hidden="true"
            className="pointer-events-none select-none hidden lg:block absolute right-0 top-0 bottom-0 w-[68%] xl:w-[64%] 2xl:w-[60%] z-0 overflow-hidden"
          >
            <img
              src={service.serviceSectionSvg}
              alt=""
              aria-hidden="true"
              className="absolute right-[-2%] xl:right-0 top-1/2 -translate-y-1/2 h-[112%] xl:h-[118%] w-auto max-w-none object-contain object-right scale-[1.25] origin-right"
            />
          </div>
        )}

        <div className="mx-auto flex max-w-[1600px] flex-col lg:flex-row items-center justify-between min-h-[500px]">
          {/* Left Content Column */}
          <div className="relative z-10 flex w-full max-w-[640px] flex-col gap-6 lg:w-[48%] lg:shrink-0 lg:pr-6">
            <div className="flex items-center gap-2.5 font-body text-[13px] font-bold uppercase tracking-[0.08em] text-[#1A3E9E]">
              <span className="h-2 w-2 bg-[#1A3E9E]" />
              <span>WHAT SERVICE IS THIS ?</span>
            </div>
            <h2 className="font-heading text-[clamp(32px,3.2vw,56px)] font-medium leading-[1.12] text-[#101010]">
              Integrated &amp; Precision Operational Architecture
            </h2>
            <p className="font-body text-[clamp(15px,1vw,18px)] leading-[1.7] text-[#424242]">
              {service.whatItIs}
            </p>
            <div className="mt-2 flex flex-col sm:flex-row items-center gap-6 rounded-[22px] border border-black/10 bg-white/95 backdrop-blur-sm p-6 sm:p-7 shadow-[0_10px_30px_rgba(26,62,158,0.05)]">
              <img
                src="/images/our-solution/gambar-kecil-bawah.svg"
                alt="Beyond Generic Solution"
                className="w-[120px] sm:w-[140px] h-auto flex-shrink-0 object-contain"
              />
              <div className="flex flex-col gap-2">
                <h3 className="font-heading text-[18px] font-semibold text-[#101010]">
                  Beyond Generic Solution
                </h3>
                <p className="font-body text-[14px] leading-[1.65] text-[#555]">
                  We do not deploy rigid, one-size-fits-all solutions. Every module is tailored to align with industry regulations, internal team workflows, and long-term enterprise scalability.
                </p>
              </div>
            </div>
          </div>

          {/* Right Visual for Tablet / Mobile (< lg) */}
          {service.serviceSectionSvg && (
            <div className="relative z-0 mt-8 w-full aspect-[16/11] sm:aspect-[16/9] overflow-hidden rounded-2xl lg:hidden">
              <img
                src={service.serviceSectionSvg}
                alt="Service Architecture Overview"
                className="h-full w-full object-cover object-right pointer-events-none select-none scale-[1.55] origin-right"
              />
            </div>
          )}
        </div>
      </section>

      {/* ── SECTION 2: PROBLEMS IT SOLVES (THE CHALLENGE) ── */}
      <section className="bg-[#F6FBFF] px-[6vw] py-[clamp(70px,6.5vw,120px)] max-[1199px]:px-[4vw]">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-10">
          <div className="flex max-w-[900px] flex-col gap-4">
            <div className="flex items-center gap-2.5 font-body text-[13px] font-bold uppercase tracking-[0.08em] text-[#1A3E9E]">
              <span className="h-2 w-2 bg-[#1A3E9E]" />
              <span>THE CHALLENGE</span>
            </div>
            <h2 className="font-heading text-[clamp(32px,3.2vw,56px)] font-medium leading-[1.12]">
              Real Challenges We Solve
            </h2>
            <p className="font-body text-[clamp(15px,1vw,18px)] leading-[1.65] text-[#424242]">
              {service.challenge}
            </p>
          </div>

          <div
            className={`grid grid-cols-1 gap-6 ${
              (service.challengeCards?.length ?? 3) === 2
                ? 'md:grid-cols-2 max-w-[1100px] mx-auto w-full'
                : 'md:grid-cols-2 lg:grid-cols-3'
            }`}
          >
            {(service.challengeCards ?? [
              {
                number: '01',
                badge: 'Data Disconnect',
                title: 'Information Fragmentation',
                description: 'Corporate data trapped across disconnected databases and spreadsheets prevents teams from achieving a single source of operational truth.',
                image: '/images/projects/altatic-analytic/1.webp',
              },
              {
                number: '02',
                badge: 'Decision Lag',
                title: 'Data Lag & Reactive Decisions',
                description: 'Delayed batch reports leave leadership reacting after problems happen instead of proactively forecasting market trends and demands.',
                image: '/images/projects/altatic-analytic/2.webp',
              },
              {
                number: '03',
                badge: 'Resource Drain',
                title: 'Manual Administrative Burden',
                description: 'Valuable workforce hours are consumed by repetitive data cleaning, manual reconciliations, and error-prone reporting pipelines.',
                image: '/images/projects/altatic-analytic/3.webp',
              },
            ]).map((card) => (
              <div
                key={card.number}
                className="group flex flex-col overflow-hidden rounded-[26px] border border-[#E4E4E4] bg-white shadow-[0_12px_36px_rgba(26,62,158,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#7F9CFF] hover:shadow-[0_22px_50px_rgba(26,62,158,0.16)]"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#101010]/5">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>

                <div className="flex flex-1 flex-col justify-between bg-gradient-to-b from-[#101010] to-[#155A99] p-6 text-white sm:p-7">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex items-center rounded-full bg-[#E6FF2A] px-3 py-1 font-body text-[11px] font-bold uppercase tracking-wider text-[#101010] shadow-sm">
                        {card.badge}
                      </span>
                      <span className="font-body text-[13px] font-bold tracking-widest text-[#E6FF2A]">
                        {card.number}
                      </span>
                    </div>

                    <h3 className="mt-4 font-heading text-[21px] font-medium leading-snug text-[#F7F7F7]">
                      {card.title}
                    </h3>
                    <p className="mt-2.5 font-body text-[13.5px] leading-[1.65] text-white/85">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMBINED SECTION: REAL IMPACTS & INTEGRATION ARCHITECTURE ── */}
      <section className="bg-[#101010] px-[6vw] py-[clamp(80px,7vw,130px)] text-white max-[1199px]:px-[4vw]">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-10">
            {/* Left Column: Real Impacts */}
            <div className="flex flex-col justify-between rounded-[32px] border border-black/40 bg-[#3B3A3A]/40 p-7 shadow-2xl backdrop-blur-sm sm:p-9 lg:col-span-5 lg:p-11">
              <div>
                <div className="font-body text-[12px] font-bold uppercase tracking-[0.14em] text-[#E6FF2A] sm:text-[13px]">
                  ARSALYNT IMPACTS
                </div>
                <h2 className="mt-3 font-heading text-[clamp(32px,3vw,52px)] font-medium leading-[1.1] text-white">
                  Real Impacts
                </h2>
              </div>

              <div className="mt-8 flex flex-1 flex-col justify-center gap-4 sm:mt-10 sm:gap-5">
                {service.outcomes.map((outcome, idx) => (
                  <div
                    key={idx}
                    className="group flex items-start gap-4 rounded-2xl border border-white/[0.08] bg-[#A5A5A5]/[0.09] p-5 transition duration-300 hover:border-[#E6FF2A]/40 hover:bg-white/[0.12] sm:p-6"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#E6FF2A] bg-transparent text-[#E6FF2A] shadow-[0_0_12px_rgba(230,255,42,0.15)]">
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="3.5 8.5 6.5 11.5 12.5 5" />
                      </svg>
                    </span>
                    <p className="font-body text-[14.5px] font-normal leading-[1.6] text-white/95 sm:text-[15.5px]">
                      {outcome}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Integration with Partner / Ecosystem */}
            <div className="flex flex-col justify-between rounded-[32px] border border-black/10 bg-white p-7 text-[#101010] shadow-2xl sm:p-10 lg:col-span-7 lg:p-12">
              <div>
                <div className="flex flex-col justify-between gap-6 pb-2 sm:flex-row sm:items-center">
                  {service.partnerIntegration?.logo && (
                    <div className="flex h-12 max-w-[240px] shrink-0 items-center">
                      <img
                        src={service.partnerIntegration.logo}
                        alt={service.partnerIntegration.partnerName}
                        className="h-10 w-auto object-contain sm:h-12"
                      />
                    </div>
                  )}
                  <h3 className="font-heading text-[clamp(26px,2.4vw,40px)] font-bold leading-tight text-[#101010]">
                    Integration with {service.partnerIntegration?.partnerName ?? 'Ecosystem'}
                  </h3>
                </div>

                <div className="mt-6 rounded-2xl border border-[#0072BE]/10 bg-[#F2FCFF] p-5 sm:mt-8 sm:p-6">
                  <p className="font-body text-[14.5px] leading-[1.65] text-[#2C3E50] sm:text-[15.5px]">
                    {service.partnerIntegration?.text || service.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 grid flex-1 grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-5">
                {service.integration.map((feature, idx) => (
                  <div
                    key={idx}
                    className="group flex flex-col justify-between rounded-2xl border border-[#BBBBBB]/60 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-[#0072BE] hover:shadow-[0_10px_25px_rgba(0,114,190,0.08)] sm:p-6"
                  >
                    <div>
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#0072BE] bg-transparent text-[#0072BE]">
                        <svg
                          className="h-4 w-4"
                          viewBox="0 0 16 16"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="3.5 8.5 6.5 11.5 12.5 5" />
                        </svg>
                      </span>
                      <p className="mt-4 font-body text-[14px] font-medium leading-[1.6] text-[#1F2937] sm:text-[15px]">
                        {feature}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION: OTHER SOLUTIONS (EXPLORE ALL SOLUTIONS) ── */}
      <section id="other-solutions" className="bg-[#F8FBFF] px-[6vw] py-[clamp(80px,7vw,130px)] max-[1199px]:px-[4vw]">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-10">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2.5 font-body text-[13px] font-bold uppercase tracking-[0.08em] text-[#1A3E9E]">
              <span className="h-2 w-2 bg-[#1A3E9E]" />
              <span>EXPLORE ALL SOLUTION</span>
            </div>
            <h2 className="font-heading text-[clamp(34px,3.5vw,56px)] font-medium leading-[1.12] text-[#101010]">
              Find your relevant solution.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/our-solution/enterprise-solution"
              className="group block overflow-hidden rounded-[20px] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.18)]"
            >
              <img
                src="/images/our-solution/card-enterprise.svg"
                alt="Enterprise Solution - Integrates corporate workflows into a single system for real-time visibility and scalable growth"
                className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </Link>

            <Link
              href="/our-solution/data-ai-integration"
              className="group block overflow-hidden rounded-[20px] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(26,62,158,0.12)]"
            >
              <img
                src="/images/our-solution/card-data-ai.svg"
                alt="Data & AI Integration - Consolidates corporate data and leverages AI to automate insights, predict trends, and guide smart decisions"
                className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </Link>

            <Link
              href="/our-solution/smart-iot-system"
              className="group block overflow-hidden rounded-[20px] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(21,90,153,0.22)]"
            >
              <img
                src="/images/our-solution/card-smart-iot.svg"
                alt="Smart IOT System - Connect physical devices for real-time operational automation"
                className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </Link>

            <Link
              href="/our-solution/digital-development"
              className="group block overflow-hidden rounded-[20px] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(26,62,158,0.12)]"
            >
              <img
                src="/images/our-solution/card-digital-dev.svg"
                alt="Digital Development - Build high-performance websites and digital solutions"
                className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <BeyondExpectations />
    </main>
  );
}

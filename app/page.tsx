import type { Metadata } from 'next';
import Link from 'next/link';
import HeroSection from '@/components/sections/HeroSection/HeroSection';
import ClientLogoBar from '@/components/sections/ClientLogoBar/ClientLogoBar';
import ITInfrastructure from '@/components/sections/ITInfrastructure/ITInfrastructure';
import BridgePossibility from '@/components/sections/BridgePossibility/BridgePossibility';
import SpecializedByNature from '@/components/sections/SpecializedByNature/SpecializedByNature';
import GrowthMetrics from '@/components/sections/GrowthMetrics/GrowthMetrics';
import ProjectShowcase from '@/components/sections/ProjectShowcase/ProjectShowcase';
import Testimonials from '@/components/sections/Testimonials/Testimonials';
import BeyondExpectations from '@/components/sections/BeyondExpectations/BeyondExpectations';
import JsonLd from '@/components/seo/JsonLd';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { BRAND } from '@/lib/seo/brand';
import {
  SITE_NAVIGATION_ITEMS,
  buildSiteNavigationElementJsonLd,
  buildWebSiteJsonLd,
  buildBreadcrumbJsonLd,
} from '@/lib/seo';
import { SOLUTION_SERVICES } from '@/lib/our-solution.data';

export const metadata: Metadata = {
  title: { absolute: `${SITE_NAME} — Enterprise Technology Ecosystem & Solutions` },
  description:
    'Arsalynk (PT Sinergi Muda Arsa) delivers integrated enterprise technology solutions: custom ERP architecture, deep learning infrastructure, smart IoT telemetry, and digital engineering. Solusi teknologi enterprise dan software house di Indonesia.',
  keywords: [
    // Bilingual High-Impact Keywords
    'Arsalynk',
    'PT Sinergi Muda Arsa',
    'software house indonesia',
    'solusi teknologi enterprise',
    'konsultan ERP indonesia',
    'sistem ERP custom enterprise',
    'integrasi IoT industri',
    'enterprise software development',
    'custom ERP architecture',
    'deep learning infrastructure',
    'smart IoT telemetry',
    'predictive data analytics',
    'transformasi digital bisnis',
    'digital transformation indonesia',
    'enterprise HRMS',
    'retail POS systems',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    title: `${SITE_NAME} — Enterprise Technology Ecosystem & Solutions`,
    description:
      'Integrated enterprise technology solutions: custom ERP architecture, IoT telemetry, deep learning infrastructure, and custom digital development.',
    url: '/',
    images: [
      {
        url: '/images/about-us/corporate-profile-hero.webp',
        width: 1200,
        height: 630,
        alt: 'Arsalynk enterprise technology ecosystem',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | Enterprise Technology Ecosystem`,
    description:
      'Integrated enterprise technology solutions: ERP, IoT, Data Intelligence, and Scalable Digital Development.',
    images: ['/images/about-us/corporate-profile-hero.webp'],
  },
};

export default function Home() {
  const homeSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE_URL}/#webpage`,
    url: `${SITE_URL}/`,
    name: 'Arsalynk — Enterprise Technology Ecosystem & Solutions',
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#organization` },
    mainEntity: { '@id': `${SITE_URL}/#organization` },
    description:
      'Arsalynk provides integrated enterprise technology solutions: custom ERP systems, IoT device connectivity, deep learning pipelines, and digital development. Solusi teknologi enterprise & software house di Indonesia.',
    breadcrumb: {
      '@id': `${SITE_URL}/#breadcrumb`,
      ...buildBreadcrumbJsonLd([{ name: 'Home', url: `${SITE_URL}/` }]),
    },
    inLanguage: ['en-US', 'id-ID'],
  };

  return (
    <main>
      <JsonLd id="home-webpage-schema" data={homeSchema} />

      <HeroSection />

      <section
        aria-labelledby="arsalynk-brand-overview"
        className="sr-only"
      >
        <div className="mx-auto flex max-w-[1600px] flex-col gap-8">
          <div className="max-w-[860px]">
            <p className="mb-2 font-body text-[11px] font-bold uppercase tracking-[0.12em] text-[#1A3E9E]">
              Arsalynk Ecosystem
            </p>
            <h2
              id="arsalynk-brand-overview"
              className="font-heading text-[clamp(26px,2.2vw,38px)] font-medium leading-[1.18] tracking-[-0.02em] text-[#101010]"
            >
              Enterprise technology solutions, connected through one ecosystem.
            </h2>
            <p className="mt-3 font-body text-[14px] leading-[1.75] text-[#555] md:text-[15px]">
              Arsalynk is an integrated enterprise technology ecosystem connecting custom ERP platforms, IoT telemetry, deep learning intelligence, web development, and strategic research for measurable digital transformation.
            </p>
          </div>

          <nav
            aria-label="Explore Arsalynk Sitelinks"
            className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
          >
            {SITE_NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                itemProp="url"
                itemScope
                itemType="https://schema.org/SiteNavigationElement"
                className="group flex flex-col justify-between rounded-xl border border-black/10 bg-white p-4 font-body no-underline transition-all duration-200 hover:border-[#1A3E9E] hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between text-[14px] font-semibold text-[#101010] transition-colors group-hover:text-[#1A3E9E]">
                    <span itemProp="name">{item.name}</span>
                    <span className="text-[12px] opacity-0 transition-opacity group-hover:opacity-100">→</span>
                  </div>
                  <p
                    itemProp="description"
                    className="mt-1.5 text-[12px] leading-[1.5] text-[#666]"
                  >
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </nav>
        </div>
      </section>
      <ClientLogoBar />
      <ITInfrastructure />
      <BridgePossibility />
      <SpecializedByNature />
      <GrowthMetrics />
      <div data-nosnippet>
        <ProjectShowcase />
      </div>
      <Testimonials />
      <BeyondExpectations />
    </main>
  );
}

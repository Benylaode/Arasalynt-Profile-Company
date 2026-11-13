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
import { buildBreadcrumbJsonLd } from '@/lib/seo';
import { getServerLocale, buildLocalizedAlternates } from '@/lib/i18n/server';
import { getDictionary } from '@/lib/i18n/dictionaries';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const dict = getDictionary(locale);
  const alternates = buildLocalizedAlternates('/', locale);

  return {
    title: { absolute: dict.seo.homeTitle },
    description: dict.seo.homeDescription,
    keywords: [
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
    alternates,
    openGraph: {
      type: 'website',
      title: dict.seo.homeTitle,
      description: dict.seo.homeDescription,
      url: alternates.canonical,
      locale: locale === 'id' ? 'id_ID' : 'en_US',
      alternateLocale: locale === 'id' ? ['en_US'] : ['id_ID'],
      images: [
        {
          url: '/images/about-us/corporate-profile-hero.webp',
          width: 1200,
          height: 630,
          alt: dict.seo.homeTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.seo.homeTitle,
      description: dict.seo.homeDescription,
      images: ['/images/about-us/corporate-profile-hero.webp'],
    },
  };
}

export default async function Home() {
  const locale = await getServerLocale();
  const dict = getDictionary(locale);

  const homeUrl = locale === 'id' ? `${SITE_URL}/id` : `${SITE_URL}/`;
  const homeSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${homeUrl}#webpage`,
    url: homeUrl,
    name: dict.seo.homeTitle,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#organization` },
    mainEntity: { '@id': `${SITE_URL}/#organization` },
    description: dict.seo.homeDescription,
    breadcrumb: {
      '@id': `${SITE_URL}/#breadcrumb`,
      ...buildBreadcrumbJsonLd([{ name: dict.common.home, url: homeUrl }]),
    },
    inLanguage: locale === 'id' ? 'id-ID' : 'en-US',
  };

  return (
    <main>
      <JsonLd id="home-webpage-schema" data={homeSchema} />

      <HeroSection />
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

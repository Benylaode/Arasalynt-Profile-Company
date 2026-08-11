import type { Metadata } from 'next';
import Script from 'next/script';
import HeroSection from '@/components/sections/HeroSection/HeroSection';
import ClientLogoBar from '@/components/sections/ClientLogoBar/ClientLogoBar';
import ITInfrastructure from '@/components/sections/ITInfrastructure/ITInfrastructure';
import BridgePossibility from '@/components/sections/BridgePossibility/BridgePossibility';
import SpecializedByNature from '@/components/sections/SpecializedByNature/SpecializedByNature';
import GrowthMetrics from '@/components/sections/GrowthMetrics/GrowthMetrics';
import ProjectShowcase from '@/components/sections/ProjectShowcase/ProjectShowcase';
import Testimonials from '@/components/sections/Testimonials/Testimonials';
import BeyondExpectations from '@/components/sections/BeyondExpectations/BeyondExpectations';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: { absolute: `${SITE_NAME} | Solusi Teknologi Enterprise Indonesia` },
  description:
    'Arsalynk adalah penyedia solusi teknologi enterprise & software house di Indonesia. Menghubungkan sistem ERP, integrasi IoT, data analytics, POS, HRMS & transformasi digital bisnis.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    title: `${SITE_NAME} | Solusi Teknologi Enterprise Indonesia`,
    description:
      'Penyedia solusi teknologi enterprise, software house, sistem ERP, integrasi IoT, dan data analytics terintegrasi di Indonesia.',
    url: '/',
    images: [{ url: '/images/our-works/our-works-hero-bg.webp', width: 1200, height: 630, alt: 'Arsalynk enterprise technology ecosystem' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | Solusi Teknologi Enterprise Indonesia`,
    description:
      'Solusi teknologi enterprise terintegrasi: ERP, IoT, Data Intelligence, dan Software Development Indonesia.',
    images: ['/images/our-works/our-works-hero-bg.webp'],
  },
};

export default function Home() {
  const homeSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        logo: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/images/logos/arsalynk-mark-512.png`,
          width: 512,
          height: 512,
        },
        description: metadata.description,
        telephone: '+62 821-3939-569',
        sameAs: [
          'https://www.instagram.com/arsalynk',
          'https://www.linkedin.com/company/arsalynk-group/',
          'https://www.facebook.com/share/1bbYtBuoUd/',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        alternateName: 'Arsalynk Enterprise Ecosystem',
        description: metadata.description,
        publisher: { '@id': `${SITE_URL}/#organization` },
        inLanguage: 'en',
      },
    ],
  };

  return (
    <main>
      <Script
        id="home-website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema).replace(/</g, '\\u003c') }}
      />
      <HeroSection />
      <ClientLogoBar />
      <ITInfrastructure />
      <BridgePossibility />
      <SpecializedByNature />
      <GrowthMetrics />
      <ProjectShowcase />
      <Testimonials />
      <BeyondExpectations />
    </main>
  );
}

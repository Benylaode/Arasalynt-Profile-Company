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
  keywords: [
    'software house indonesia',
    'enterprise technology indonesia',
    'ERP indonesia',
    'solusi teknologi bisnis',
    'IoT integration',
    'data analytics indonesia',
    'arsalynk',
    'transformasi digital',
    'sistem HRMS',
    'POS sistem retail',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    title: `${SITE_NAME} | Solusi Teknologi Enterprise Indonesia`,
    description:
      'Penyedia solusi teknologi enterprise, software house, sistem ERP, integrasi IoT, dan data analytics terintegrasi di Indonesia.',
    url: '/',
    images: [
      {
        url: '/images/our-works/our-works-hero-bg.webp',
        width: 1200,
        height: 630,
        alt: 'Arsalynk enterprise technology ecosystem',
      },
    ],
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
        '@type': ['Organization', 'Corporation'],
        '@id': `${SITE_URL}/#organization`,
        name: 'Arsalynk',
        legalName: 'PT Sinergi Muda Arsa',
        alternateName: ['Arsalynk Enterprise Ecosystem', 'Arsalynk Indonesia'],
        url: SITE_URL,
        logo: {
          '@type': 'ImageObject',
          '@id': `${SITE_URL}/#logo`,
          url: `${SITE_URL}/images/logos/arsalynk-mark-512.png`,
          contentUrl: `${SITE_URL}/images/logos/arsalynk-mark-512.png`,
          width: 512,
          height: 512,
          caption: 'Arsalynk',
        },
        image: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/images/our-works/our-works-hero-bg.webp`,
          width: 1200,
          height: 630,
        },
        description:
          'Arsalynk adalah ekosistem bisnis teknologi enterprise terintegrasi di Indonesia, menyediakan solusi ERP, IoT, data analytics, software development, HRMS, POS, riset strategis, dan transformasi digital.',
        foundingDate: '2020',
        foundingLocation: {
          '@type': 'Place',
          name: 'Jakarta, Indonesia',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Jakarta',
            addressRegion: 'DKI Jakarta',
            addressCountry: 'ID',
          },
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Menara Rajawali 26th Floor, Jl. DR. Ide Anak Agung Gde Agung',
          addressLocality: 'Jakarta',
          addressRegion: 'DKI Jakarta',
          postalCode: '12950',
          addressCountry: 'ID',
        },
        telephone: '+62-878-6276-6846',
        email: 'corporate.arsalynk@gmail.com',
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: '+62-878-6276-6846',
            contactType: 'customer service',
            areaServed: 'ID',
            availableLanguage: ['Indonesian', 'English'],
            hoursAvailable: {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
              opens: '09:00',
              closes: '17:00',
            },
          },
          {
            '@type': 'ContactPoint',
            email: 'corporate.arsalynk@gmail.com',
            contactType: 'sales',
            areaServed: 'ID',
            availableLanguage: ['Indonesian', 'English'],
          },
        ],
        areaServed: {
          '@type': 'Country',
          name: 'Indonesia',
        },
        knowsAbout: [
          'Enterprise Resource Planning (ERP)',
          'Internet of Things (IoT) Integration',
          'Data Analytics & Business Intelligence',
          'Software House & Custom Development',
          'Human Resource Management System (HRMS)',
          'Point of Sale (POS) Systems',
          'Digital Transformation',
          'Strategic Research & Consulting',
          'Digital Media & Creative Production',
        ],
        sameAs: [
          'https://www.instagram.com/arsalynk',
          'https://www.linkedin.com/company/arsalynk-group/',
          'https://www.facebook.com/share/1bbYtBuoUd/',
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Arsalynk Enterprise Solutions',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Enterprise ERP Systems',
                url: `${SITE_URL}/our-solution`,
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'IoT Hardware Integration',
                url: `${SITE_URL}/our-solution`,
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Data Analytics & Intelligence',
                url: `${SITE_URL}/our-solution`,
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Custom Software Development',
                url: `${SITE_URL}/our-solution`,
              },
            },
          ],
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: 'Arsalynk',
        alternateName: 'Arsalynk Enterprise Ecosystem',
        description:
          'Arsalynk adalah penyedia solusi teknologi enterprise, software house, ERP, IoT, dan data analytics terintegrasi di Indonesia.',
        publisher: { '@id': `${SITE_URL}/#organization` },
        inLanguage: ['id-ID', 'en-US'],
      },
      {
        '@type': 'WebPage',
        '@id': `${SITE_URL}/#webpage`,
        url: SITE_URL,
        name: 'Arsalynk | Solusi Teknologi Enterprise Indonesia',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
        description:
          'Arsalynk adalah penyedia solusi teknologi enterprise & software house di Indonesia. Menghubungkan sistem ERP, integrasi IoT, data analytics, POS, HRMS & transformasi digital bisnis.',
        breadcrumb: {
          '@type': 'BreadcrumbList',
          '@id': `${SITE_URL}/#breadcrumb`,
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: SITE_URL,
            },
          ],
        },
        inLanguage: 'id-ID',
      },
    ],
  };

  return (
    <main>
      <Script
        id="home-website-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeSchema).replace(/</g, '\\u003c'),
        }}
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

import type { Metadata } from 'next';
import JsonLd from '@/components/seo/JsonLd';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Our Business',
  description:
    'Jelajahi ekosistem bisnis Arsalynk di Indonesia: infrastruktur IT, integrasi IoT, survey & data analytics, media digital, komunikasi strategis, dan konsultasi bisnis enterprise.',
  keywords: [
    'ekosistem bisnis IT',
    'arsalynk business ecosystem',
    'unit bisnis teknologi indonesia',
    'konsultasi strategis IT',
    'layanan media digital indonesia',
    'integrasi sistem enterprise',
  ],
  alternates: { canonical: '/our-business' },
  openGraph: {
    title: 'Our Business | Arsalynk',
    description: 'Temukan portofolio unit bisnis dan kapabilitas enterprise Arsalynk yang terintegrasi di Indonesia.',
    url: '/our-business',
    images: [
      {
        url: '/images/our-works/our-works-hero-bg.webp',
        width: 1200,
        height: 630,
        alt: 'Arsalynk — Ekosistem Bisnis Enterprise Indonesia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Business | Arsalynk',
    description: 'Ekosistem bisnis enterprise Arsalynk yang terintegrasi di Indonesia.',
    images: ['/images/our-works/our-works-hero-bg.webp'],
  },
};

export default function OurBusinessLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const canonicalUrl = `${SITE_URL}/our-business`;
  const businessNavSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'About Us', item: `${SITE_URL}/about-us` },
          { '@type': 'ListItem', position: 3, name: 'Our Business', item: canonicalUrl },
        ],
      },
      {
        '@type': 'CollectionPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: `Our Business | ${SITE_NAME}`,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
        breadcrumb: { '@id': `${canonicalUrl}#breadcrumb` },
        description:
          'Jelajahi ekosistem bisnis Arsalynk di Indonesia: Dari infrastruktur IT, integrasi IoT, survey & data analytics, hingga media digital dan komunikasi strategis.',
        inLanguage: 'id-ID',
      },
    ],
  };

  return (
    <>
      <JsonLd id="our-business-layout-schema" data={businessNavSchema} />
      {children}
    </>
  );
}

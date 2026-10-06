import type { Metadata } from 'next';
import JsonLd from '@/components/seo/JsonLd';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { SOLUTION_SERVICES } from '@/lib/our-solution.data';

export const metadata: Metadata = {
  title: 'Solusi ERP, IoT & Sistem Enterprise Indonesia',
  description:
    'Layanan solusi teknologi enterprise Arsalynk di Indonesia: Pengembangan sistem ERP, integrasi hardware IoT, POS retail, HRMS, data analytics, dan otomasi bisnis terintegrasi.',
  keywords: [
    'solusi ERP indonesia',
    'sistem enterprise indonesia',
    'integrasi IoT hardware',
    'POS retail system',
    'HRMS indonesia',
    'data analytics enterprise',
    'custom software development indonesia',
    'arsalynk solution',
  ],
  alternates: { canonical: '/our-solution' },
  openGraph: {
    title: 'Solusi ERP, IoT & Sistem Enterprise Indonesia | Arsalynk',
    description: 'Layanan ERP, IoT, POS, HRMS, data analytics, dan pengembangan software enterprise terintegrasi oleh Arsalynk.',
    url: '/our-solution',
    images: [
      {
        url: '/images/our-works/our-works-hero-bg.webp',
        width: 1200,
        height: 630,
        alt: 'Arsalynk — Solusi Teknologi Enterprise Indonesia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solusi ERP, IoT & Sistem Enterprise Indonesia | Arsalynk',
    description: 'ERP, IoT, POS, HRMS, data analytics, dan software development enterprise oleh Arsalynk.',
    images: ['/images/our-works/our-works-hero-bg.webp'],
  },
};

export default function OurSolutionLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const canonicalUrl = `${SITE_URL}/our-solution`;
  const solutionNavSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Our Solution', item: canonicalUrl },
        ],
      },
      {
        '@type': 'CollectionPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: `Solusi ERP, IoT & Sistem Enterprise Indonesia | ${SITE_NAME}`,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
        breadcrumb: { '@id': `${canonicalUrl}#breadcrumb` },
        description:
          'Layanan solusi teknologi enterprise Arsalynk di Indonesia: Pengembangan sistem ERP, integrasi hardware IoT, POS retail, HRMS, otomasi keuangan & supply chain.',
        inLanguage: 'id-ID',
      },
      {
        '@type': 'ItemList',
        '@id': `${canonicalUrl}#services`,
        name: 'Arsalynk Enterprise Solutions',
        itemListElement: SOLUTION_SERVICES.map((service, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: service.title,
          url: `${SITE_URL}/our-solution/${service.slug}`,
        })),
      },
    ],
  };

  return (
    <>
      <JsonLd id="our-solution-layout-schema" data={solutionNavSchema} />
      {children}
    </>
  );
}

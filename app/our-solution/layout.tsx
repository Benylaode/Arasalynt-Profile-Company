import type { Metadata } from 'next';
import JsonLd from '@/components/seo/JsonLd';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { buildBreadcrumbJsonLd, SITE_NAVIGATION_ITEMS } from '@/lib/seo';
import { SOLUTION_SERVICES } from '@/lib/our-solution.data';

const PAGE_DEF = SITE_NAVIGATION_ITEMS.find((item) => item.href === '/our-solution')!;

export const metadata: Metadata = {
  title: 'Our Solution',
  description: PAGE_DEF.description,
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
    title: 'Our Solution | Arsalynk',
    description: PAGE_DEF.description,
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
    title: 'Our Solution | Arsalynk',
    description: PAGE_DEF.description,
    images: ['/images/our-works/our-works-hero-bg.webp'],
  },
};

export default function OurSolutionLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const canonicalUrl = `${SITE_URL}/our-solution`;
  const solutionNavSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@id': `${canonicalUrl}#breadcrumb`,
        ...buildBreadcrumbJsonLd([
          { name: 'Home', url: `${SITE_URL}/` },
          { name: 'Our Solution', url: canonicalUrl },
        ]),
      },
      {
        '@type': 'CollectionPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: `Our Solution | ${SITE_NAME}`,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
        breadcrumb: { '@id': `${canonicalUrl}#breadcrumb` },
        description: PAGE_DEF.description,
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

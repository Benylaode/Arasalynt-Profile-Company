import type { Metadata } from 'next';
import JsonLd from '@/components/seo/JsonLd';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { buildBreadcrumbJsonLd, SITE_NAVIGATION_ITEMS } from '@/lib/seo';

const PAGE_DEF = SITE_NAVIGATION_ITEMS.find((item) => item.href === '/our-works')!;

export const metadata: Metadata = {
  title: 'Our Works',
  description: PAGE_DEF.description,
  keywords: [
    'portofolio IT indonesia',
    'studi kasus proyek enterprise',
    'implementasi ERP indonesia',
    'proyek IoT indonesia',
    'dashboard data analytics',
    'software house portfolio',
    'karya arsalynk',
  ],
  alternates: { canonical: '/our-works' },
  openGraph: {
    title: `Our Works | ${SITE_NAME}`,
    description: PAGE_DEF.description,
    url: '/our-works',
    images: [
      {
        url: '/images/our-works/our-works-hero-bg.webp',
        width: 1200,
        height: 630,
        alt: 'Arsalynk — Our Works',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Our Works | ${SITE_NAME}`,
    description: PAGE_DEF.description,
    images: ['/images/our-works/our-works-hero-bg.webp'],
  },
};

export default function OurWorksLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const canonicalUrl = `${SITE_URL}/our-works`;
  const ourWorksSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@id': `${canonicalUrl}#breadcrumb`,
        ...buildBreadcrumbJsonLd([
          { name: 'Home', url: `${SITE_URL}/` },
          { name: 'Our Works', url: canonicalUrl },
        ]),
      },
      {
        '@type': 'CollectionPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: `Our Works | ${SITE_NAME}`,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
        breadcrumb: { '@id': `${canonicalUrl}#breadcrumb` },
        description: PAGE_DEF.description,
        inLanguage: 'id-ID',
        image: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/images/our-works/our-works-hero-bg.webp`,
          width: 1200,
          height: 630,
        },
      },
    ],
  };

  return (
    <>
      <JsonLd id="our-works-schema" data={ourWorksSchema} />
      {children}
    </>
  );
}

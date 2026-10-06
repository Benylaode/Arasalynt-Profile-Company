import type { Metadata } from 'next';
import JsonLd from '@/components/seo/JsonLd';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Our Works',
  description:
    'Portofolio karya dan proyek Arsalynk di Indonesia: sistem ERP, IoT, data analytics dashboard, platform digital perusahaan, riset kebijakan, dan produksi media.',
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
    description:
      'Proyek teknologi enterprise, riset, komunikasi, dan produksi media terpilih oleh ekosistem Arsalynk.',
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
    description: 'Jelajahi proyek teknologi enterprise, riset, dan media produksi terpilih Arsalynk.',
    images: ['/images/our-works/our-works-hero-bg.webp'],
  },
};

export default function OurWorksLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const canonicalUrl = `${SITE_URL}/our-works`;
  const ourWorksSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Our Works', item: canonicalUrl },
        ],
      },
      {
        '@type': 'CollectionPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: `Our Works | ${SITE_NAME}`,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
        breadcrumb: { '@id': `${canonicalUrl}#breadcrumb` },
        description:
          'Portofolio karya dan proyek Arsalynk di Indonesia: sistem ERP, IoT, data analytics dashboard, platform digital perusahaan, riset kebijakan, dan produksi media.',
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

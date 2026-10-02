import type { Metadata } from 'next';
import Script from 'next/script';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Portofolio & Studi Kasus Proyek IT Enterprise Indonesia',
  description:
    'Portofolio karya dan proyek IT Arsalynk di Indonesia: Sistem ERP, IoT, data analytics dashboard, platform digital perusahaan, riset kebijakan & produksi media sinematik.',
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
    title: 'Portofolio & Studi Kasus Proyek IT Enterprise Indonesia | Arsalynk',
    description: 'Proyek teknologi enterprise, riset, komunikasi, dan produksi media terpilih oleh ekosistem Arsalynk.',
    url: '/our-works',
    images: [
      {
        url: '/images/our-works/our-works-hero-bg.webp',
        width: 1200,
        height: 630,
        alt: 'Arsalynk — Portofolio Proyek IT Enterprise Indonesia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portofolio & Studi Kasus Proyek IT Enterprise Indonesia | Arsalynk',
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
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Karya & Portofolio', item: canonicalUrl },
        ],
      },
      {
        '@type': 'CollectionPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: `Portofolio & Studi Kasus Proyek IT Enterprise Indonesia | ${SITE_NAME}`,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
        breadcrumb: { '@id': `${canonicalUrl}#breadcrumb` },
        description:
          'Portofolio karya dan proyek IT Arsalynk di Indonesia: Sistem ERP, IoT, data analytics dashboard, platform digital perusahaan, riset kebijakan & produksi media sinematik.',
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
      <Script
        id="our-works-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ourWorksSchema).replace(/</g, '\\u003c') }}
      />
      {children}
    </>
  );
}

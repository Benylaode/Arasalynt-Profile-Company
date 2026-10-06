import type { Metadata } from 'next';
import JsonLd from '@/components/seo/JsonLd';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    'Kumpulan studi kasus implementasi proyek Arsalynk di Indonesia: sistem ERP, IoT, otomasi workflow bisnis, data analytics, riset strategis, dan media.',
  keywords: [
    'studi kasus transformasi digital',
    'implementasi ERP',
    'case study IT enterprise',
    'studi kasus IoT',
    'otomasi workflow bisnis',
    'data analytics case study',
    'arsalynk case studies',
  ],
  alternates: { canonical: '/insight-programs/case-studies' },
  openGraph: {
    title: `Case Studies | ${SITE_NAME}`,
    description:
      'Cerita implementasi sistem enterprise, teknologi, riset, dan kapabilitas kreatif oleh Arsalynk.',
    url: '/insight-programs/case-studies',
    images: [
      {
        url: '/images/insight-programs/case-studies/hero-case-studies.webp',
        width: 1200,
        height: 630,
        alt: 'Arsalynk — Case Studies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Case Studies | ${SITE_NAME}`,
    description: 'Cerita implementasi dari ekosistem Arsalynk.',
    images: ['/images/insight-programs/case-studies/hero-case-studies.webp'],
  },
};

export default function CaseStudiesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const canonicalUrl = `${SITE_URL}/insight-programs/case-studies`;
  const caseStudiesSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Insight & Programs', item: `${SITE_URL}/insight-programs` },
          { '@type': 'ListItem', position: 3, name: 'Case Studies', item: canonicalUrl },
        ],
      },
      {
        '@type': ['CollectionPage', 'WebPage'],
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: `Case Studies | ${SITE_NAME}`,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
        breadcrumb: { '@id': `${canonicalUrl}#breadcrumb` },
        description:
          'Kumpulan studi kasus implementasi proyek Arsalynk di Indonesia: sistem ERP, IoT, otomasi workflow bisnis, data analytics, riset strategis, dan media.',
        inLanguage: 'id-ID',
        image: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/images/insight-programs/case-studies/hero-case-studies.webp`,
          width: 1200,
          height: 630,
        },
      },
    ],
  };

  return (
    <>
      <JsonLd id="case-studies-schema" data={caseStudiesSchema} />
      {children}
    </>
  );
}

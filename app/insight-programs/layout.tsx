import type { Metadata } from 'next';
import JsonLd from '@/components/seo/JsonLd';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Insight & Programs',
  description:
    'Studi kasus implementasi sistem enterprise dan pemikiran kepemimpinan strategis dari ekosistem Arsalynk di Indonesia.',
  keywords: [
    'insight and programs',
    'studi kasus arsalynk',
    'leadership thoughts',
    'case studies teknologi enterprise',
    'transformasi digital indonesia',
    'artikel teknologi bisnis',
  ],
  alternates: { canonical: '/insight-programs' },
  openGraph: {
    title: `Insight & Programs | ${SITE_NAME}`,
    description:
      'Studi kasus implementasi nyata dan perspektif kepemimpinan dari ekosistem Arsalynk.',
    url: '/insight-programs',
    images: [
      {
        url: '/images/insight-programs/case-studies/hero-case-studies.webp',
        width: 1200,
        height: 630,
        alt: 'Arsalynk — Insight & Programs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Insight & Programs | ${SITE_NAME}`,
    description: 'Knowledge, implementasi, dan perspektif dari ekosistem Arsalynk.',
    images: ['/images/insight-programs/case-studies/hero-case-studies.webp'],
  },
};

export default function InsightProgramsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const canonicalUrl = `${SITE_URL}/insight-programs`;
  const hubSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Insight & Programs', item: canonicalUrl },
        ],
      },
      {
        '@type': 'CollectionPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: `Insight & Programs | ${SITE_NAME}`,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
        breadcrumb: { '@id': `${canonicalUrl}#breadcrumb` },
        description:
          'Studi kasus implementasi sistem enterprise dan pemikiran kepemimpinan strategis dari ekosistem Arsalynk di Indonesia.',
        inLanguage: 'id-ID',
      },
      {
        '@type': 'ItemList',
        '@id': `${canonicalUrl}#sections`,
        name: 'Insight & Programs Pillars',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Case Studies',
            url: `${SITE_URL}/insight-programs/case-studies`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Leadership Thoughts',
            url: `${SITE_URL}/insight-programs/leadership-thoughts`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd id="insight-programs-hub-schema" data={hubSchema} />
      {children}
    </>
  );
}

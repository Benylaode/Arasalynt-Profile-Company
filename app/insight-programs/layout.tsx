import type { Metadata } from 'next';
import JsonLd from '@/components/seo/JsonLd';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { buildBreadcrumbJsonLd, SITE_NAVIGATION_ITEMS } from '@/lib/seo';

const PAGE_DEF = SITE_NAVIGATION_ITEMS.find((item) => item.href === '/insight-programs')!;

export const metadata: Metadata = {
  title: 'Insight & Programs',
  description: PAGE_DEF.description,
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
    description: PAGE_DEF.description,
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
    description: PAGE_DEF.description,
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
        '@id': `${canonicalUrl}#breadcrumb`,
        ...buildBreadcrumbJsonLd([
          { name: 'Home', url: `${SITE_URL}/` },
          { name: 'Insight & Programs', url: canonicalUrl },
        ]),
      },
      {
        '@type': 'CollectionPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: `Insight & Programs | ${SITE_NAME}`,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
        breadcrumb: { '@id': `${canonicalUrl}#breadcrumb` },
        description: PAGE_DEF.description,
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

import type { Metadata } from 'next';
import JsonLd from '@/components/seo/JsonLd';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Leadership Thoughts',
  description:
    'Perspektif dan pemikiran para pemimpin Arsalynk tentang transformasi enterprise, kepemimpinan berbasis data, desain organisasi, dan komunikasi bisnis.',
  keywords: [
    'kepemimpinan enterprise',
    'wawasan strategi bisnis',
    'transformasi digital indonesia',
    'pemikiran leadership IT',
    'arsalynk leadership thoughts',
    'artikel strategi enterprise',
    'organisasi berbasis data',
  ],
  alternates: { canonical: '/insight-programs/leadership-thoughts' },
  openGraph: {
    title: `Leadership Thoughts | ${SITE_NAME}`,
    description:
      'Perspektif kepemimpinan mengenai transformasi digital, data, dan strategi organisasi enterprise.',
    url: '/insight-programs/leadership-thoughts',
    images: [
      {
        url: '/images/leadership-thoughts/hero-leadership-thoughts-v2.webp',
        width: 1200,
        height: 630,
        alt: 'Arsalynk — Leadership Thoughts',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Leadership Thoughts | ${SITE_NAME}`,
    description: 'Perspektif enterprise dari para pemimpin Arsalynk.',
    images: ['/images/leadership-thoughts/hero-leadership-thoughts-v2.webp'],
  },
};

export default function LeadershipThoughtsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const canonicalUrl = `${SITE_URL}/insight-programs/leadership-thoughts`;
  const leadershipSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Insight & Programs', item: `${SITE_URL}/insight-programs` },
          { '@type': 'ListItem', position: 3, name: 'Leadership Thoughts', item: canonicalUrl },
        ],
      },
      {
        '@type': ['Blog', 'WebPage'],
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: `Leadership Thoughts | ${SITE_NAME}`,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
        breadcrumb: { '@id': `${canonicalUrl}#breadcrumb` },
        description:
          'Perspektif dan pemikiran para pemimpin Arsalynk tentang transformasi enterprise, kepemimpinan berbasis data, desain organisasi, dan komunikasi bisnis.',
        inLanguage: 'id-ID',
        publisher: { '@id': `${SITE_URL}/#organization` },
        image: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/images/leadership-thoughts/hero-leadership-thoughts-v2.webp`,
          width: 1200,
          height: 630,
        },
      },
    ],
  };

  return (
    <>
      <JsonLd id="leadership-thoughts-schema" data={leadershipSchema} />
      {children}
    </>
  );
}

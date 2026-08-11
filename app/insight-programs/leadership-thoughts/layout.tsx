import type { Metadata } from 'next';
import Script from 'next/script';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Pemikiran & Wawasan Strategi Enterprise',
  description:
    'Perspektif dan pemikiran para pemimpin Arsalynk tentang transformasi enterprise, kepemimpinan berbasis data, desain organisasi, dan komunikasi bisnis.',
  alternates: { canonical: '/insight-programs/leadership-thoughts' },
  openGraph: {
    title: 'Pemikiran & Wawasan Strategi Enterprise | Arsalynk',
    description: 'Perspektif kepemimpinan mengenai transformasi digital, data, dan strategi organisasi enterprise.',
    url: '/insight-programs/leadership-thoughts',
    images: ['/images/leadership-thoughts/hero-leadership-thoughts-v2.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pemikiran & Wawasan Strategi Enterprise | Arsalynk',
    description: 'Perspektif enterprise dari para pemimpin Arsalynk.',
    images: ['/images/leadership-thoughts/hero-leadership-thoughts-v2.webp'],
  },
};

export default function LeadershipThoughtsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const canonicalUrl = `${SITE_URL}/insight-programs/leadership-thoughts`;
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${canonicalUrl}#breadcrumb`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Insight & Programs', item: canonicalUrl },
      { '@type': 'ListItem', position: 3, name: 'Leadership Thoughts', item: canonicalUrl },
    ],
  };

  return (
    <>
      <Script
        id="leadership-thoughts-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, '\\u003c') }}
      />
      {children}
    </>
  );
}

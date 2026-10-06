import type { Metadata } from 'next';
import Script from 'next/script';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Corporate Profile',
  description:
    'Discover Arsalynk’s corporate profile, purpose, enterprise capabilities, and integrated approach to sustainable digital excellence.',
  alternates: { canonical: '/about-us/corporate-profile' },
  openGraph: {
    title: 'Corporate Profile | Arsalynk',
    description: 'Discover Arsalynk’s purpose, enterprise capabilities, and integrated operating approach.',
    url: '/about-us/corporate-profile',
    images: ['/images/about-us/corporate-profile-hero.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Corporate Profile | Arsalynk',
    description: 'Discover Arsalynk’s purpose and integrated enterprise capabilities.',
    images: ['/images/about-us/corporate-profile-hero.webp'],
  },
};

export default function CorporateProfileLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const canonicalUrl = `${SITE_URL}/about-us/corporate-profile`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'About Us', item: `${SITE_URL}/about-us` },
          { '@type': 'ListItem', position: 3, name: 'Corporate Profile', item: canonicalUrl },
        ],
      },
      {
        '@type': 'AboutPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: `Corporate Profile | ${SITE_NAME}`,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
        breadcrumb: { '@id': `${canonicalUrl}#breadcrumb` },
      },
    ],
  };

  return (
    <>
      <Script
        id="corporate-profile-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}
      />
      {children}
    </>
  );
}

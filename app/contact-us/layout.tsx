import type { Metadata } from 'next';
import JsonLd from '@/components/seo/JsonLd';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { buildBreadcrumbJsonLd, SITE_NAVIGATION_ITEMS } from '@/lib/seo';
import { BRAND } from '@/lib/seo/brand';

const PAGE_DEF = SITE_NAVIGATION_ITEMS.find((item) => item.href === '/contact-us')!;

export const metadata: Metadata = {
  title: 'Contact Us',
  description: PAGE_DEF.description,
  keywords: [
    'contact arsalynk',
    'hubungi arsalynk',
    'konsultasi IT enterprise',
    'kontak software house indonesia',
    'konsultan ERP indonesia',
    'project IT consultation',
    'digital transformation consultation',
    'enterprise technology advisory',
  ],
  alternates: { canonical: '/contact-us' },
  openGraph: {
    title: `Contact Us | ${SITE_NAME}`,
    description: PAGE_DEF.description,
    url: '/contact-us',
    images: [
      {
        url: '/images/our-works/our-works-hero-bg.webp',
        width: 1200,
        height: 630,
        alt: 'Contact Arsalynk',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Contact Us | ${SITE_NAME}`,
    description: PAGE_DEF.description,
    images: ['/images/our-works/our-works-hero-bg.webp'],
  },
};

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const canonicalUrl = `${SITE_URL}/contact-us`;
  const contactSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@id': `${canonicalUrl}#breadcrumb`,
        ...buildBreadcrumbJsonLd([
          { name: 'Home', url: `${SITE_URL}/` },
          { name: 'Contact Us', url: canonicalUrl },
        ]),
      },
      {
        '@type': ['ContactPage', 'WebPage'],
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: `Contact Us | ${SITE_NAME}`,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
        breadcrumb: { '@id': `${canonicalUrl}#breadcrumb` },
        description: PAGE_DEF.description,
        inLanguage: ['en-US', 'id-ID'],
        mainEntity: {
          '@type': 'Organization',
          '@id': `${SITE_URL}/#organization`,
          name: BRAND.name,
          legalName: BRAND.legalName,
          url: `${SITE_URL}/`,
          telephone: BRAND.phone,
          email: BRAND.email,
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: BRAND.phone,
            email: BRAND.email,
            contactType: 'customer service',
            areaServed: 'ID',
            availableLanguage: ['Indonesian', 'English'],
          },
        },
      },
    ],
  };

  return (
    <>
      <JsonLd id="contact-us-schema" data={contactSchema} />
      {children}
    </>
  );
}

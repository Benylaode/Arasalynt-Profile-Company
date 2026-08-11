import type { Metadata } from 'next';
import Script from 'next/script';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Konsultasi Solusi Teknologi Enterprise',
  description:
    'Hubungi tim Arsalynk di Indonesia untuk konsultasi sistem ERP, integrasi IoT, data analytics, software development, riset bisnis, dan produksi media.',
  alternates: { canonical: '/contact-us' },
  openGraph: {
    title: 'Hubungi Arsalynk — Konsultasi Proyek IT & Software House Enterprise | Arsalynk',
    description: 'Diskusikan kebutuhan teknologi enterprise, sistem software, data, atau media produksi Anda bersama tim Arsalynk.',
    url: '/contact-us',
    images: ['/images/our-works/our-works-hero-bg.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hubungi Arsalynk — Konsultasi Proyek IT & Software House Enterprise',
    description: 'Mulai diskusi bersama tim solusi enterprise Arsalynk.',
    images: ['/images/our-works/our-works-hero-bg.webp'],
  },
};

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const canonicalUrl = `${SITE_URL}/contact-us`;
  const contactSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Contact Us', item: canonicalUrl },
        ],
      },
      {
        '@type': 'ContactPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: 'Contact Arsalynk',
        description: 'Contact page for Arsalynk Enterprise Technology Solutions.',
        mainEntity: { '@id': `${SITE_URL}/#organization` },
      },
    ],
  };

  return (
    <>
      <Script
        id="contact-us-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema).replace(/</g, '\\u003c') }}
      />
      {children}
    </>
  );
}

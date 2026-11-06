import type { Metadata } from 'next';
import JsonLd from '@/components/seo/JsonLd';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { buildBreadcrumbJsonLd } from '@/lib/seo';
import { BRAND } from '@/lib/seo/brand';
import { getServerLocale, buildLocalizedAlternates } from '@/lib/i18n/server';
import { getDictionary } from '@/lib/i18n/dictionaries';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const dict = getDictionary(locale);
  const alternates = buildLocalizedAlternates('/contact-us', locale);

  return {
    title: dict.seo.contactUsTitle,
    description: dict.seo.contactUsDescription,
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
    alternates,
    openGraph: {
      title: `${dict.seo.contactUsTitle} | ${SITE_NAME}`,
      description: dict.seo.contactUsDescription,
      url: alternates.canonical,
      locale: locale === 'id' ? 'id_ID' : 'en_US',
      alternateLocale: locale === 'id' ? ['en_US'] : ['id_ID'],
      images: [
        {
          url: '/images/our-works/our-works-hero-bg.webp',
          width: 1200,
          height: 630,
          alt: `${dict.seo.contactUsTitle} — ${SITE_NAME}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${dict.seo.contactUsTitle} | ${SITE_NAME}`,
      description: dict.seo.contactUsDescription,
      images: ['/images/our-works/our-works-hero-bg.webp'],
    },
  };
}

export default async function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const locale = await getServerLocale();
  const dict = getDictionary(locale);
  const canonicalUrl = `${SITE_URL}/contact-us`;
  const contactSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@id': `${canonicalUrl}#breadcrumb`,
        ...buildBreadcrumbJsonLd([
          { name: dict.common.home, url: `${SITE_URL}/` },
          { name: dict.seo.contactUsTitle, url: canonicalUrl },
        ]),
      },
      {
        '@type': ['ContactPage', 'WebPage'],
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: `${dict.seo.contactUsTitle} | ${SITE_NAME}`,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
        breadcrumb: { '@id': `${canonicalUrl}#breadcrumb` },
        description: dict.seo.contactUsDescription,
        inLanguage: locale === 'id' ? 'id-ID' : 'en-US',
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

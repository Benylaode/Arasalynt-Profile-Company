import type { Metadata } from 'next';
import JsonLd from '@/components/seo/JsonLd';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { getServerLocale, buildLocalizedAlternates } from '@/lib/i18n/server';
import { getDictionary } from '@/lib/i18n/dictionaries';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const dict = getDictionary(locale);
  const alternates = buildLocalizedAlternates('/about-us/company-leadership', locale);

  return {
    title: dict.seo.companyLeadership.title,
    description: dict.seo.companyLeadership.description,
    alternates,
    openGraph: {
      title: dict.seo.companyLeadership.title,
      description: dict.seo.companyLeadership.description,
      url: alternates.canonical,
      locale: locale === 'id' ? 'id_ID' : 'en_US',
      images: ['/images/about-us/company-leadership-hero.webp'],
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.seo.companyLeadership.title,
      description: dict.seo.companyLeadership.description,
      images: ['/images/about-us/company-leadership-hero.webp'],
    },
  };
}

export default async function CompanyLeadershipLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const locale = await getServerLocale();
  const isId = locale === 'id';
  const canonicalUrl = `${SITE_URL}/about-us/company-leadership`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: isId ? 'Beranda' : 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: isId ? 'Tentang Kami' : 'About Us', item: `${SITE_URL}/about-us` },
          { '@type': 'ListItem', position: 3, name: isId ? 'Kepemimpinan Perusahaan' : 'Company Leadership', item: canonicalUrl },
        ],
      },
      {
        '@type': 'AboutPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: `${isId ? 'Kepemimpinan Perusahaan' : 'Company Leadership'} | ${SITE_NAME}`,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
        breadcrumb: { '@id': `${canonicalUrl}#breadcrumb` },
        inLanguage: isId ? 'id-ID' : 'en-US',
      },
    ],
  };

  return (
    <>
      <JsonLd id="company-leadership-schema" data={schema} />
      {children}
    </>
  );
}

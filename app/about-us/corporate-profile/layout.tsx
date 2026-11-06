import type { Metadata } from 'next';
import JsonLd from '@/components/seo/JsonLd';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { getServerLocale, buildLocalizedAlternates } from '@/lib/i18n/server';
import { getDictionary } from '@/lib/i18n/dictionaries';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const dict = getDictionary(locale);
  const alternates = buildLocalizedAlternates('/about-us/corporate-profile', locale);

  return {
    title: dict.seo.corporateProfile.title,
    description: dict.seo.corporateProfile.description,
    alternates,
    openGraph: {
      title: dict.seo.corporateProfile.title,
      description: dict.seo.corporateProfile.description,
      url: alternates.canonical,
      locale: locale === 'id' ? 'id_ID' : 'en_US',
      images: ['/images/about-us/corporate-profile-hero.webp'],
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.seo.corporateProfile.title,
      description: dict.seo.corporateProfile.description,
      images: ['/images/about-us/corporate-profile-hero.webp'],
    },
  };
}

export default async function CorporateProfileLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const locale = await getServerLocale();
  const isId = locale === 'id';
  const canonicalUrl = `${SITE_URL}/about-us/corporate-profile`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: isId ? 'Beranda' : 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: isId ? 'Tentang Kami' : 'About Us', item: `${SITE_URL}/about-us` },
          { '@type': 'ListItem', position: 3, name: isId ? 'Profil Korporat' : 'Corporate Profile', item: canonicalUrl },
        ],
      },
      {
        '@type': 'AboutPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: `${isId ? 'Profil Korporat' : 'Corporate Profile'} | ${SITE_NAME}`,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
        breadcrumb: { '@id': `${canonicalUrl}#breadcrumb` },
        inLanguage: isId ? 'id-ID' : 'en-US',
      },
    ],
  };

  return (
    <>
      <JsonLd id="corporate-profile-schema" data={schema} />
      {children}
    </>
  );
}

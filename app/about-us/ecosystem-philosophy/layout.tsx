import type { Metadata } from 'next';
import JsonLd from '@/components/seo/JsonLd';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { getServerLocale, buildLocalizedAlternates } from '@/lib/i18n/server';
import { getDictionary } from '@/lib/i18n/dictionaries';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const dict = getDictionary(locale);
  const alternates = buildLocalizedAlternates('/about-us/ecosystem-philosophy', locale);

  return {
    title: dict.seo.ecosystemPhilosophy.title,
    description: dict.seo.ecosystemPhilosophy.description,
    alternates,
    openGraph: {
      title: dict.seo.ecosystemPhilosophy.title,
      description: dict.seo.ecosystemPhilosophy.description,
      url: alternates.canonical,
      locale: locale === 'id' ? 'id_ID' : 'en_US',
      images: ['/images/about-us/ecosystem-philosophy-hero.webp'],
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.seo.ecosystemPhilosophy.title,
      description: dict.seo.ecosystemPhilosophy.description,
      images: ['/images/about-us/ecosystem-philosophy-hero.webp'],
    },
  };
}

export default async function EcosystemPhilosophyLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const locale = await getServerLocale();
  const isId = locale === 'id';
  const canonicalUrl = `${SITE_URL}/about-us/ecosystem-philosophy`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: isId ? 'Beranda' : 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: isId ? 'Tentang Kami' : 'About Us', item: `${SITE_URL}/about-us` },
          { '@type': 'ListItem', position: 3, name: isId ? 'Filosofi Ekosistem' : 'Ecosystem Philosophy', item: canonicalUrl },
        ],
      },
      {
        '@type': 'AboutPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: `${isId ? 'Filosofi Ekosistem' : 'Ecosystem Philosophy'} | ${SITE_NAME}`,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
        breadcrumb: { '@id': `${canonicalUrl}#breadcrumb` },
        inLanguage: isId ? 'id-ID' : 'en-US',
      },
    ],
  };

  return (
    <>
      <JsonLd id="ecosystem-philosophy-schema" data={schema} />
      {children}
    </>
  );
}

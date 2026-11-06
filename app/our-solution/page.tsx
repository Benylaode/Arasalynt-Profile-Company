import type { Metadata } from 'next';
import { SOLUTION_SERVICES } from '@/lib/our-solution.data';
import JsonLd from '@/components/seo/JsonLd';
import { SITE_URL } from '@/lib/constants';
import { getServerLocale, buildLocalizedAlternates } from '@/lib/i18n/server';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { getLocalizedOurSolutionData } from '@/lib/i18n/localized-data';
import OurSolutionClient from './OurSolutionClient';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const dict = getDictionary(locale);
  const alternates = buildLocalizedAlternates('/our-solution', locale);

  return {
    title: dict.seo.ourSolution.title,
    description: dict.seo.ourSolution.description,
    alternates,
    openGraph: {
      title: dict.seo.ourSolution.title,
      description: dict.seo.ourSolution.description,
      url: alternates.canonical,
      locale: locale === 'id' ? 'id_ID' : 'en_US',
      images: ['/images/our-works/our-works-hero-bg.webp'],
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.seo.ourSolution.title,
      description: dict.seo.ourSolution.description,
      images: ['/images/our-works/our-works-hero-bg.webp'],
    },
  };
}

export default async function OurSolutionPage() {
  const locale = await getServerLocale();
  const { services } = getLocalizedOurSolutionData(locale);
  const canonicalUrl = `${SITE_URL}/our-solution`;
  const solutionSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: locale === 'id' ? 'Beranda' : 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: locale === 'id' ? 'Solusi Kami' : 'Our Solution', item: canonicalUrl },
        ],
      },
      {
        '@type': 'CollectionPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: locale === 'id' ? 'Solusi Kami | Arsalynk' : 'Our Solution | Arsalynk',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
        breadcrumb: { '@id': `${canonicalUrl}#breadcrumb` },
        inLanguage: locale === 'id' ? 'id-ID' : 'en-US',
      },
      {
        '@type': 'Service',
        '@id': `${canonicalUrl}#service`,
        name: 'Arsalynk Enterprise Technology Solutions',
        provider: { '@id': `${SITE_URL}/#organization` },
        description:
          locale === 'id'
            ? 'Sistem perusahaan terintegrasi yang mencakup ERP, integrasi perangkat keras IoT, inteligensi data, dan pengembangan web digital.'
            : 'Integrated enterprise systems spanning ERP, IoT hardware integration, data intelligence, and digital web development.',
        areaServed: 'ID',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Enterprise Solutions Catalog',
          itemListElement: (services.length ? services : SOLUTION_SERVICES).map((s) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: s.title,
              description: s.description,
            },
          })),
        },
      },
    ],
  };

  return (
    <main className="relative w-full overflow-x-hidden bg-[#F7F7F7] text-[#101010]">
      <JsonLd id="solution-schema" data={solutionSchema} />
      <OurSolutionClient />
    </main>
  );
}

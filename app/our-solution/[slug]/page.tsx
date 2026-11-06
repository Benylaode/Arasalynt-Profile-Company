import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import JsonLd from '@/components/seo/JsonLd';
import { SOLUTION_SERVICES } from '@/lib/our-solution.data';
import { SITE_URL } from '@/lib/constants';
import { getServerLocale, buildLocalizedAlternates } from '@/lib/i18n/server';
import { getLocalizedSolutionService } from '@/lib/i18n/localized-data';
import SolutionServiceClient from './SolutionServiceClient';

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SOLUTION_SERVICES.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const locale = await getServerLocale();
  const service = getLocalizedSolutionService(slug, locale);

  if (!service) {
    return {
      title: locale === 'id' ? 'Solusi Tidak Ditemukan' : 'Solution Not Found',
      robots: { index: false, follow: false },
    };
  }

  const alternates = buildLocalizedAlternates(`/our-solution/${service.slug}`, locale);
  const suffix = locale === 'id' ? 'Solusi Perusahaan Arsalynk' : 'Arsalynk Enterprise Solution';

  return {
    title: service.title,
    description: service.description,
    keywords: service.keywords,
    robots: { index: true, follow: true },
    alternates,
    openGraph: {
      type: 'website',
      title: `${service.title} | ${suffix}`,
      description: service.description,
      url: alternates.canonical,
      locale: locale === 'id' ? 'id_ID' : 'en_US',
      images: [
        {
          url: service.heroSvg || (service.image.startsWith('/') ? service.image : '/images/our-works/our-works-hero-bg.webp'),
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.title} | ${suffix}`,
      description: service.description,
      images: [service.heroSvg || (service.image.startsWith('/') ? service.image : '/images/our-works/our-works-hero-bg.webp')],
    },
  };
}

export default async function SolutionServicePage({ params }: PageProps) {
  const { slug } = await params;
  const locale = await getServerLocale();
  const service = getLocalizedSolutionService(slug, locale);

  if (!service) {
    notFound();
  }

  const canonicalUrl = `${SITE_URL}/our-solution/${service.slug}`;

  const solutionServiceSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${canonicalUrl}#service`,
        name: service.title,
        description: service.description,
        provider: { '@id': `${SITE_URL}/#organization` },
        serviceType: service.title,
        areaServed: 'ID',
        url: canonicalUrl,
        category: service.industry,
      },
      {
        '@type': 'WebPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: `${service.title} | Arsalynk`,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${canonicalUrl}#service` },
        description: service.description,
        breadcrumb: { '@id': `${canonicalUrl}#breadcrumb` },
        inLanguage: locale === 'id' ? 'id-ID' : 'en-US',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: locale === 'id' ? 'Beranda' : 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: locale === 'id' ? 'Solusi Kami' : 'Our Solution', item: `${SITE_URL}/our-solution` },
          { '@type': 'ListItem', position: 3, name: service.shortTitle, item: canonicalUrl },
        ],
      },
    ],
  };

  return (
    <main className="relative w-full overflow-x-hidden bg-[#F7F7F7] text-[#101010]">
      <JsonLd
        id={`solution-service-schema-${service.slug}`}
        data={solutionServiceSchema}
      />
      <SolutionServiceClient slug={slug} />
    </main>
  );
}

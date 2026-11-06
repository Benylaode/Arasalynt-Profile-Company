import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import JsonLd from '@/components/seo/JsonLd';
import { CASE_STUDIES_DUMMY_DATA } from '@/lib/db/dummy';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { getServerLocale, buildLocalizedAlternates } from '@/lib/i18n/server';
import { getLocalizedCaseStudy } from '@/lib/i18n/localized-data';
import CaseStudyDetailClient from './CaseStudyDetailClient';

const ALL_CASE_STUDIES = CASE_STUDIES_DUMMY_DATA;

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return ALL_CASE_STUDIES.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const locale = await getServerLocale();
  const article = getLocalizedCaseStudy(slug, locale);

  if (!article) {
    return { title: locale === 'id' ? 'Studi Kasus Tidak Ditemukan' : 'Case Study Not Found', robots: { index: false, follow: false } };
  }

  const pathname = `/insight-programs/case-studies/${article.slug}`;
  const alternates = buildLocalizedAlternates(pathname, locale);
  const suffix = locale === 'id' ? 'Studi Kasus' : 'Case Study';

  return {
    title: `${article.title} — ${suffix}`,
    description: article.description,
    alternates,
    openGraph: {
      title: `${article.title} | ${SITE_NAME} ${suffix}`,
      description: article.description,
      url: alternates.canonical,
      locale: locale === 'id' ? 'id_ID' : 'en_US',
      alternateLocale: locale === 'id' ? ['en_US'] : ['id_ID'],
      type: 'article',
      publishedTime: article.dateValue,
      images: [{ url: article.coverImage, alt: article.coverImageAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${article.title} | ${SITE_NAME} ${suffix}`,
      description: article.description,
      images: [article.coverImage],
    },
  };
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const locale = await getServerLocale();
  const article = getLocalizedCaseStudy(slug, locale);

  if (!article) notFound();

  const canonicalUrl = `${SITE_URL}/insight-programs/case-studies/${article.slug}`;
  const articleSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${canonicalUrl}/#article`,
        headline: article.title,
        description: article.description,
        image: `${SITE_URL}${article.coverImage}`,
        datePublished: article.dateValue,
        dateModified: article.dateValue,
        mainEntityOfPage: canonicalUrl,
        author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
        publisher: { '@id': `${SITE_URL}/#organization` },
        keywords: article.tags.join(', '),
        articleSection: article.category,
        inLanguage: locale === 'id' ? 'id-ID' : 'en-US',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: locale === 'id' ? 'Beranda' : 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: locale === 'id' ? 'Wawasan & Program' : 'Insight & Programs', item: `${SITE_URL}/insight-programs` },
          { '@type': 'ListItem', position: 3, name: locale === 'id' ? 'Studi Kasus' : 'Case Studies', item: `${SITE_URL}/insight-programs/case-studies` },
          { '@type': 'ListItem', position: 4, name: article.title, item: canonicalUrl },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#F7F7F7] text-[#101010]">
      <JsonLd id={`case-study-schema-${article.slug}`} data={articleSchema} />
      <CaseStudyDetailClient slug={slug} />
    </div>
  );
}

import React from 'react';
import JsonLd from '@/components/seo/JsonLd';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { LEADERSHIP_THOUGHTS_DUMMY_DATA } from '@/lib/db/dummy';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { getServerLocale, buildLocalizedAlternates } from '@/lib/i18n/server';
import { getLocalizedLeadershipThought } from '@/lib/i18n/localized-data';
import LeadershipThoughtDetailClient from './LeadershipThoughtDetailClient';

export async function generateStaticParams() {
  return LEADERSHIP_THOUGHTS_DUMMY_DATA.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const locale = await getServerLocale();
  const article = getLocalizedLeadershipThought(slug, locale);

  if (!article) {
    return {
      title: locale === 'id' ? 'Pemikiran Tidak Ditemukan' : 'Thought Not Found',
      robots: { index: false, follow: false },
    };
  }

  const pathname = `/insight-programs/leadership-thoughts/${article.slug}`;
  const alternates = buildLocalizedAlternates(pathname, locale);
  const publishedDate = article.datePublished ?? article.date;
  const modifiedDate = article.dateModified ?? publishedDate;
  const suffix = locale === 'id' ? 'Pemikiran Kepemimpinan' : 'Leadership Thought';

  return {
    title: `${article.title} — ${suffix}`,
    description: article.description,
    alternates,
    openGraph: {
      title: `${article.title} | ${SITE_NAME} ${suffix}`,
      description: article.description,
      type: 'article',
      url: alternates.canonical,
      locale: locale === 'id' ? 'id_ID' : 'en_US',
      alternateLocale: locale === 'id' ? ['en_US'] : ['id_ID'],
      publishedTime: publishedDate,
      modifiedTime: modifiedDate,
      images: [article.coverImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${article.title} | ${SITE_NAME} ${suffix}`,
      description: article.description,
      images: [article.coverImage],
    },
  };
}

export default async function LeadershipThoughtDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const locale = await getServerLocale();
  const article = getLocalizedLeadershipThought(slug, locale);

  if (!article) {
    notFound();
  }

  const canonicalUrl = `${SITE_URL}/insight-programs/leadership-thoughts/${article.slug}`;
  const publishedDate = article.datePublished ?? article.date;
  const modifiedDate = article.dateModified ?? publishedDate;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${canonicalUrl}#article`,
        headline: article.title,
        description: article.description,
        image: `${SITE_URL}${article.coverImage}`,
        datePublished: publishedDate,
        dateModified: modifiedDate,
        mainEntityOfPage: canonicalUrl,
        author: {
          '@type': 'Person',
          name: article.author || SITE_NAME,
        },
        publisher: { '@id': `${SITE_URL}/#organization` },
        keywords: article.tags.join(', '),
        articleSection: article.category,
        inLanguage: locale === 'id' ? 'id-ID' : 'en-US',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: locale === 'id' ? 'Beranda' : 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: locale === 'id' ? 'Wawasan & Program' : 'Insight & Programs', item: `${SITE_URL}/insight-programs` },
          { '@type': 'ListItem', position: 3, name: locale === 'id' ? 'Pemikiran Kepemimpinan' : 'Leadership Thoughts', item: `${SITE_URL}/insight-programs/leadership-thoughts` },
          { '@type': 'ListItem', position: 4, name: article.title, item: canonicalUrl },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#F7F7F7] text-[#101010]">
      <JsonLd
        id={`thought-schema-${article.slug}`}
        data={articleSchema}
      />
      <LeadershipThoughtDetailClient slug={slug} />
    </div>
  );
}

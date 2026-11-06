import type { Metadata } from 'next';
import { SITE_NAME } from '@/lib/constants';
import { getServerLocale, buildLocalizedAlternates } from '@/lib/i18n/server';
import { getDictionary } from '@/lib/i18n/dictionaries';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const dict = getDictionary(locale);
  const alternates = buildLocalizedAlternates('/insight-programs/leadership-thoughts', locale);

  return {
    title: dict.seo.leadershipThoughtsTitle,
    description: dict.seo.leadershipThoughtsDescription,
    keywords: [
      'enterprise leadership',
      'strategic business insights',
      'enterprise digital transformation',
      'technology leadership',
      'arsalynk leadership thoughts',
      'evidence-based decision making',
    ],
    alternates,
    openGraph: {
      title: `${dict.seo.leadershipThoughtsTitle} | ${SITE_NAME}`,
      description: dict.seo.leadershipThoughtsDescription,
      url: alternates.canonical,
      locale: locale === 'id' ? 'id_ID' : 'en_US',
      alternateLocale: locale === 'id' ? ['en_US'] : ['id_ID'],
      images: [
        {
          url: '/images/leadership-thoughts/hero-leadership-thoughts-v2.webp',
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} — ${dict.seo.leadershipThoughtsTitle}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${dict.seo.leadershipThoughtsTitle} | ${SITE_NAME}`,
      description: dict.seo.leadershipThoughtsDescription,
      images: ['/images/leadership-thoughts/hero-leadership-thoughts-v2.webp'],
    },
  };
}

export default function LeadershipThoughtsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}

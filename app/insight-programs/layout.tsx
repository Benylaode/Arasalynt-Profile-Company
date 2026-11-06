import type { Metadata } from 'next';
import { SITE_NAME } from '@/lib/constants';
import { getServerLocale, buildLocalizedAlternates } from '@/lib/i18n/server';
import { getDictionary } from '@/lib/i18n/dictionaries';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const dict = getDictionary(locale);
  const alternates = buildLocalizedAlternates('/insight-programs', locale);

  return {
    title: dict.seo.insightProgramsTitle,
    description: dict.seo.insightProgramsDescription,
    keywords: [
      'insight and programs',
      'studi kasus arsalynk',
      'leadership thoughts',
      'case studies teknologi enterprise',
      'transformasi digital indonesia',
      'artikel teknologi bisnis',
    ],
    alternates,
    openGraph: {
      title: `${dict.seo.insightProgramsTitle} | ${SITE_NAME}`,
      description: dict.seo.insightProgramsDescription,
      url: alternates.canonical,
      locale: locale === 'id' ? 'id_ID' : 'en_US',
      alternateLocale: locale === 'id' ? ['en_US'] : ['id_ID'],
      images: [
        {
          url: '/images/insight-programs/case-studies/hero-case-studies.webp',
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} — ${dict.seo.insightProgramsTitle}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${dict.seo.insightProgramsTitle} | ${SITE_NAME}`,
      description: dict.seo.insightProgramsDescription,
      images: ['/images/insight-programs/case-studies/hero-case-studies.webp'],
    },
  };
}

export default function InsightProgramsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}

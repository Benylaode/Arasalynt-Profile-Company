import type { Metadata } from 'next';
import { SITE_NAME } from '@/lib/constants';
import { getServerLocale, buildLocalizedAlternates } from '@/lib/i18n/server';
import { getDictionary } from '@/lib/i18n/dictionaries';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const dict = getDictionary(locale);
  const alternates = buildLocalizedAlternates('/insight-programs/case-studies', locale);

  return {
    title: dict.seo.caseStudiesTitle,
    description: dict.seo.caseStudiesDescription,
    keywords: [
      'enterprise digital transformation',
      'ERP implementation case study',
      'enterprise IoT solutions',
      'business workflow automation',
      'data analytics case study',
      'arsalynk case studies',
    ],
    alternates,
    openGraph: {
      title: `${dict.seo.caseStudiesTitle} | ${SITE_NAME}`,
      description: dict.seo.caseStudiesDescription,
      url: alternates.canonical,
      locale: locale === 'id' ? 'id_ID' : 'en_US',
      alternateLocale: locale === 'id' ? ['en_US'] : ['id_ID'],
      images: [
        {
          url: '/images/insight-programs/case-studies/hero-case-studies.webp',
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} — ${dict.seo.caseStudiesTitle}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${dict.seo.caseStudiesTitle} | ${SITE_NAME}`,
      description: dict.seo.caseStudiesDescription,
      images: ['/images/insight-programs/case-studies/hero-case-studies.webp'],
    },
  };
}

export default function CaseStudiesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}

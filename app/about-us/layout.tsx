import type { Metadata } from 'next';
import { SITE_NAME } from '@/lib/constants';
import { getServerLocale, buildLocalizedAlternates } from '@/lib/i18n/server';
import { getDictionary } from '@/lib/i18n/dictionaries';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const dict = getDictionary(locale);
  const alternates = buildLocalizedAlternates('/about-us', locale);

  return {
    title: dict.seo.aboutUs.title,
    description: dict.seo.aboutUs.description,
    keywords: [
      'about arsalynk',
      'tentang arsalynk',
      'ekosistem teknologi enterprise indonesia',
      'profil perusahaan IT indonesia',
      'enterprise software house profile',
      'visi misi arsalynk',
      'executive leadership team',
      'PT Sinergi Muda Arsa',
      'enterprise technology ecosystem',
    ],
    alternates,
    openGraph: {
      title: `${dict.seo.aboutUs.title} | ${SITE_NAME}`,
      description: dict.seo.aboutUs.description,
      url: alternates.canonical,
      locale: locale === 'id' ? 'id_ID' : 'en_US',
      images: [
        {
          url: '/images/about-us/hero-infinity-new.webp',
          width: 1200,
          height: 630,
          alt: locale === 'id' ? 'Arsalynk — Ekosistem Teknologi Perusahaan' : 'Arsalynk — Enterprise Technology Ecosystem',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${dict.seo.aboutUs.title} | ${SITE_NAME}`,
      description: dict.seo.aboutUs.description,
      images: ['/images/about-us/hero-infinity-new.webp'],
    },
  };
}

export default function AboutLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}

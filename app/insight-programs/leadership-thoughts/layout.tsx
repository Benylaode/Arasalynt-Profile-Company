import type { Metadata } from 'next';
import { SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Leadership Thoughts',
  description:
    'Perspektif dan pemikiran para pemimpin Arsalynk tentang transformasi enterprise, kepemimpinan berbasis data, desain organisasi, dan komunikasi bisnis.',
  keywords: [
    'kepemimpinan enterprise',
    'wawasan strategi bisnis',
    'transformasi digital indonesia',
    'pemikiran leadership IT',
    'arsalynk leadership thoughts',
    'artikel strategi enterprise',
    'organisasi berbasis data',
  ],
  alternates: { canonical: '/insight-programs/leadership-thoughts' },
  openGraph: {
    title: `Leadership Thoughts | ${SITE_NAME}`,
    description:
      'Perspektif kepemimpinan mengenai transformasi digital, data, dan strategi organisasi enterprise.',
    url: '/insight-programs/leadership-thoughts',
    images: [
      {
        url: '/images/leadership-thoughts/hero-leadership-thoughts-v2.webp',
        width: 1200,
        height: 630,
        alt: 'Arsalynk — Leadership Thoughts',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Leadership Thoughts | ${SITE_NAME}`,
    description: 'Perspektif enterprise dari para pemimpin Arsalynk.',
    images: ['/images/leadership-thoughts/hero-leadership-thoughts-v2.webp'],
  },
};

export default function LeadershipThoughtsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}

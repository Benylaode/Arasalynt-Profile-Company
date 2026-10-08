import type { Metadata } from 'next';
import { SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    'Kumpulan studi kasus implementasi proyek Arsalynk di Indonesia: sistem ERP, IoT, otomasi workflow bisnis, data analytics, riset strategis, dan media.',
  keywords: [
    'studi kasus transformasi digital',
    'implementasi ERP',
    'case study IT enterprise',
    'studi kasus IoT',
    'otomasi workflow bisnis',
    'data analytics case study',
    'arsalynk case studies',
  ],
  alternates: { canonical: '/insight-programs/case-studies' },
  openGraph: {
    title: `Case Studies | ${SITE_NAME}`,
    description:
      'Cerita implementasi sistem enterprise, teknologi, riset, dan kapabilitas kreatif oleh Arsalynk.',
    url: '/insight-programs/case-studies',
    images: [
      {
        url: '/images/insight-programs/case-studies/hero-case-studies.webp',
        width: 1200,
        height: 630,
        alt: 'Arsalynk — Case Studies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Case Studies | ${SITE_NAME}`,
    description: 'Cerita implementasi dari ekosistem Arsalynk.',
    images: ['/images/insight-programs/case-studies/hero-case-studies.webp'],
  },
};

export default function CaseStudiesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Enterprise Case Studies',
  description: 'Read Arsalynk case studies about ERP, IoT, analytics, enterprise workflows, research, communication, and media production.',
  keywords: ['enterprise case studies Indonesia', 'ERP case study', 'IoT case study', 'digital transformation case study', 'Arsalynk insights'],
  alternates: { canonical: '/insight-programs/case-studies' },
  openGraph: {
    title: 'Enterprise Case Studies | Arsalynk',
    description: 'Evidence-led stories about enterprise workflows, technology, research, and creative delivery.',
    url: '/insight-programs/case-studies',
    images: [{ url: '/images/insight-programs/case-studies/hero-case-studies.webp', width: 1200, height: 630, alt: 'Arsalynk Enterprise Case Studies' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise Case Studies | Arsalynk',
    description: 'Evidence-led stories from the Arsalynk ecosystem.',
    images: ['/images/insight-programs/case-studies/hero-case-studies.webp'],
  },
};

export default function CaseStudiesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Our Enterprise Solutions Team',
  description: 'Contact Arsalynk to discuss ERP, IoT, data analytics, enterprise software, research, communication, or creative production requirements.',
  keywords: ['contact Arsalynk', 'enterprise technology consultation Indonesia', 'ERP consultation', 'IoT consultation Indonesia'],
  alternates: { canonical: '/contact-us' },
  openGraph: { title: 'Contact Our Enterprise Solutions Team | Arsalynk', description: 'Discuss your enterprise technology, data, research, communication, or creative requirements with Arsalynk.', url: '/contact-us', images: ['/images/our-works/our-works-hero-bg.webp'] },
  twitter: { card: 'summary_large_image', title: 'Contact Arsalynk', description: 'Start a conversation with the Arsalynk enterprise solutions team.', images: ['/images/our-works/our-works-hero-bg.webp'] },
};

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Our Enterprise Ecosystem',
  description: 'Learn about Arsalynk, an integrated business ecosystem connecting technology, data, strategy, communication, and creative capabilities.',
  keywords: ['about Arsalynk', 'enterprise ecosystem Indonesia', 'digital transformation partner Indonesia', 'integrated business solutions'],
  alternates: { canonical: '/about-us' },
  openGraph: { title: 'About Our Enterprise Ecosystem | Arsalynk', description: 'Technology, data, strategy, communication, and creative capabilities connected through one enterprise ecosystem.', url: '/about-us', images: ['/images/about-us/hero-infinity-new.webp'] },
  twitter: { card: 'summary_large_image', title: 'About Our Enterprise Ecosystem | Arsalynk', description: 'Discover the purpose and capabilities behind the Arsalynk ecosystem.', images: ['/images/about-us/hero-infinity-new.webp'] },
};

export default function AboutLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}

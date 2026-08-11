import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Corporate Profile',
  description: 'Discover Arsalynk’s corporate profile, purpose, enterprise capabilities, and integrated approach to sustainable digital excellence.',
  alternates: { canonical: '/about-us/corporate-profile' },
  openGraph: { title: 'Corporate Profile | Arsalynk', description: 'Discover Arsalynk’s purpose, enterprise capabilities, and integrated operating approach.', url: '/about-us/corporate-profile', images: ['/images/about-us/corporate-profile-hero.webp'] },
  twitter: { card: 'summary_large_image', title: 'Corporate Profile | Arsalynk', description: 'Discover Arsalynk’s purpose and integrated enterprise capabilities.', images: ['/images/about-us/corporate-profile-hero.webp'] },
};

export default function CorporateProfileLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}

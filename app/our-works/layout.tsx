import type { Metadata } from 'next';
import { SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Our Works',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
  alternates: { canonical: '/our-solution' },
};

export default function OurWorksLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}

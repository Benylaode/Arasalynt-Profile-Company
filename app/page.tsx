import type { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection/HeroSection';
import ClientLogoBar from '@/components/sections/ClientLogoBar/ClientLogoBar';
import ITInfrastructure from '@/components/sections/ITInfrastructure/ITInfrastructure';
import BridgePossibility from '@/components/sections/BridgePossibility/BridgePossibility';
import SpecializedByNature from '@/components/sections/SpecializedByNature/SpecializedByNature';
import GrowthMetrics from '@/components/sections/GrowthMetrics/GrowthMetrics';
import ProjectShowcase from '@/components/sections/ProjectShowcase/ProjectShowcase';
import Testimonials from '@/components/sections/Testimonials/Testimonials';
import BeyondExpectations from '@/components/sections/BeyondExpectations/BeyondExpectations';

export const metadata: Metadata = {
  title: { absolute: 'Arsalynk — Enterprise Technology & Business Ecosystem' },
  description: 'Arsalynk connects ERP, IoT, data intelligence, strategic research, communication, and creative capabilities to build resilient enterprise operations.',
  keywords: [
    'Arsalynk', 'enterprise technology solutions Indonesia', 'enterprise ERP Indonesia',
    'IoT integration Indonesia', 'data intelligence Indonesia', 'digital transformation partner',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    title: 'Arsalynk — Enterprise Technology & Business Ecosystem',
    description: 'Integrated technology, data, strategy, and creative capabilities for resilient enterprise operations.',
    url: '/',
    images: [{ url: '/images/home/hero/slide-01-mobile-38814c.webp', alt: 'Arsalynk enterprise technology ecosystem' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arsalynk — Enterprise Technology & Business Ecosystem',
    description: 'Integrated technology, data, strategy, and creative capabilities for resilient enterprise operations.',
    images: ['/images/home/hero/slide-01-mobile-38814c.webp'],
  },
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ClientLogoBar />
      <ITInfrastructure />
      <BridgePossibility />
      <SpecializedByNature />
      <GrowthMetrics />
      <ProjectShowcase />
      <Testimonials />
      <BeyondExpectations />
    </main>
  );
}

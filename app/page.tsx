import type { Metadata } from 'next';
import Script from 'next/script';
import HeroSection from '@/components/sections/HeroSection/HeroSection';
import ClientLogoBar from '@/components/sections/ClientLogoBar/ClientLogoBar';
import ITInfrastructure from '@/components/sections/ITInfrastructure/ITInfrastructure';
import BridgePossibility from '@/components/sections/BridgePossibility/BridgePossibility';
import SpecializedByNature from '@/components/sections/SpecializedByNature/SpecializedByNature';
import GrowthMetrics from '@/components/sections/GrowthMetrics/GrowthMetrics';
import ProjectShowcase from '@/components/sections/ProjectShowcase/ProjectShowcase';
import Testimonials from '@/components/sections/Testimonials/Testimonials';
import BeyondExpectations from '@/components/sections/BeyondExpectations/BeyondExpectations';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: { absolute: `${SITE_NAME} | Solusi Teknologi Enterprise Indonesia` },
  description:
    'Arsalynk adalah penyedia solusi teknologi enterprise & software house di Indonesia. Menghubungkan sistem ERP, integrasi IoT, data analytics, POS, HRMS & transformasi digital bisnis.',
  keywords: [
    'software house indonesia',
    'enterprise technology indonesia',
    'ERP indonesia',
    'solusi teknologi bisnis',
    'IoT integration',
    'data analytics indonesia',
    'arsalynk',
    'transformasi digital',
    'sistem HRMS',
    'POS sistem retail',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    title: `${SITE_NAME} | Solusi Teknologi Enterprise Indonesia`,
    description:
      'Penyedia solusi teknologi enterprise, software house, sistem ERP, integrasi IoT, dan data analytics terintegrasi di Indonesia.',
    url: '/',
    images: [{ url: '/images/our-works/our-works-hero-bg.webp', width: 1200, height: 630, alt: 'Arsalynk enterprise technology ecosystem' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | Solusi Teknologi Enterprise Indonesia`,
    description:
      'Solusi teknologi enterprise terintegrasi: ERP, IoT, Data Intelligence, dan Software Development Indonesia.',
    images: ['/images/our-works/our-works-hero-bg.webp'],
  },
};

export default function Home() {
  const homeSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        // ── Organization: Entitas utama bisnis Arsalynk ──────────────────
        '@type': ['Organization', 'Corporation'],
        '@id': `${SITE_URL}/#organization`,
        name: 'Arsalynk',
        legalName: 'Arsalynk Enterprise Ecosystem',
        alternateName: ['Arsalynk Group', 'Arsalynk Indonesia'],
        url: SITE_URL,
        logo: {
          '@type': 'ImageObject',
          '@id': `${SITE_URL}/#logo`,
          url: `${SITE_URL}/images/logos/arsalynk-mark-512.png`,
          contentUrl: `${SITE_URL}/images/logos/arsalynk-mark-512.png`,
          width: 512,
          height: 512,
          caption: 'Arsalynk — Enterprise Technology & Software House Indonesia',
        },
        image: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/images/our-works/our-works-hero-bg.webp`,
          width: 1200,
          height: 630,
        },
        description:
          'Arsalynk adalah ekosistem bisnis teknologi enterprise terintegrasi di Indonesia, menyediakan solusi ERP, IoT, data analytics, software house, HRMS, POS, riset strategis, dan transformasi digital.',
        foundingDate: '2020',
        foundingLocation: {
          '@type': 'Place',
          name: 'Jakarta, Indonesia',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Jakarta',
            addressRegion: 'DKI Jakarta',
            addressCountry: 'ID',
          },
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Menara Rajawali 26th Floor, Jl. DR. Ide Anak Agung Gde Agung',
          addressLocality: 'Jakarta',
          addressRegion: 'DKI Jakarta',
          postalCode: '12950',
          addressCountry: 'ID',
        },
        telephone: '+62-878-6276-6846',
        email: 'corporate.arsalynk@gmail.com',
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: '+62-878-6276-6846',
            contactType: 'customer service',
            areaServed: 'ID',
            availableLanguage: ['Indonesian', 'English'],
            hoursAvailable: {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
              opens: '09:00',
              closes: '17:00',
            },
          },
          {
            '@type': 'ContactPoint',
            email: 'corporate.arsalynk@gmail.com',
            contactType: 'sales',
            areaServed: 'ID',
            availableLanguage: 'Indonesian',
          },
        ],
        areaServed: [
          { '@type': 'Country', name: 'Indonesia' },
          { '@type': 'City', name: 'Jakarta' },
          { '@type': 'City', name: 'Semarang' },
          { '@type': 'City', name: 'Surabaya' },
        ],
        knowsAbout: [
          'Enterprise Resource Planning (ERP)',
          'Internet of Things (IoT) Integration',
          'Data Analytics & Business Intelligence',
          'Software House & Custom Development',
          'Human Resource Management System (HRMS)',
          'Point of Sale (POS) Systems',
          'Digital Transformation',
          'Strategic Research & Consulting',
          'Digital Media & Creative Production',
        ],
        numberOfEmployees: {
          '@type': 'QuantitativeValue',
          minValue: 10,
          maxValue: 50,
        },
        sameAs: [
          'https://www.instagram.com/arsalynk',
          'https://www.linkedin.com/company/arsalynk-group/',
          'https://www.facebook.com/share/1bbYtBuoUd/',
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Arsalynk Enterprise Solutions',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Enterprise ERP Systems', url: `${SITE_URL}/our-solution` } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'IoT Hardware Integration', url: `${SITE_URL}/our-solution` } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Data Analytics & Intelligence', url: `${SITE_URL}/our-solution` } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Software Development', url: `${SITE_URL}/our-solution` } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Digital Media Production', url: `${SITE_URL}/our-business` } },
          ],
        },
      },
      {
        // ── WebSite: dengan SearchAction untuk Sitelinks Searchbox ────────
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: 'Arsalynk',
        alternateName: 'Arsalynk Enterprise Ecosystem',
        description:
          'Arsalynk adalah penyedia solusi teknologi enterprise, software house, ERP, IoT, dan data analytics terintegrasi di Indonesia.',
        publisher: { '@id': `${SITE_URL}/#organization` },
        inLanguage: ['id-ID', 'en-US'],
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${SITE_URL}/our-works?q={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
      },
      {
        // ── WebPage: Halaman Utama ─────────────────────────────────────────
        '@type': 'WebPage',
        '@id': `${SITE_URL}/#webpage`,
        url: SITE_URL,
        name: 'Arsalynk | Solusi Teknologi Enterprise Indonesia',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
        description:
          'Arsalynk adalah penyedia solusi teknologi enterprise & software house di Indonesia. Menghubungkan sistem ERP, integrasi IoT, data analytics, POS, HRMS & transformasi digital bisnis.',
        breadcrumb: {
          '@type': 'BreadcrumbList',
          '@id': `${SITE_URL}/#breadcrumb`,
          itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL }],
        },
        inLanguage: 'id-ID',
        potentialAction: [
          { '@type': 'ReadAction', target: [SITE_URL] },
        ],
      },
      {
        // ── SiteNavigationElement: Menu Utama → Sitelinks Google ──────────
        '@type': 'ItemList',
        '@id': `${SITE_URL}/#sitelinks`,
        name: 'Arsalynk Site Navigation',
        description: 'Navigasi utama website Arsalynk',
        itemListElement: [
          {
            '@type': 'SiteNavigationElement',
            position: 1,
            name: 'Solusi Kami',
            description: 'Layanan ERP, IoT, Data Analytics, POS, HRMS & sistem enterprise terintegrasi.',
            url: `${SITE_URL}/our-solution`,
          },
          {
            '@type': 'SiteNavigationElement',
            position: 2,
            name: 'Ekosistem Bisnis',
            description: 'Portofolio unit bisnis dan kapabilitas Arsalynk di Indonesia.',
            url: `${SITE_URL}/our-business`,
          },
          {
            '@type': 'SiteNavigationElement',
            position: 3,
            name: 'Karya & Portofolio',
            description: 'Studi kasus dan proyek IT enterprise yang telah diselesaikan.',
            url: `${SITE_URL}/our-works`,
          },
          {
            '@type': 'SiteNavigationElement',
            position: 4,
            name: 'Tentang Kami',
            description: 'Visi, misi, dan ekosistem enterprise Arsalynk Indonesia.',
            url: `${SITE_URL}/about-us`,
          },
          {
            '@type': 'SiteNavigationElement',
            position: 5,
            name: 'Insight & Riset',
            description: 'Studi kasus, pemikiran kepemimpinan, dan wawasan industri dari tim Arsalynk.',
            url: `${SITE_URL}/insight-programs/case-studies`,
          },
          {
            '@type': 'SiteNavigationElement',
            position: 6,
            name: 'Hubungi Kami',
            description: 'Konsultasikan kebutuhan teknologi enterprise Anda bersama tim Arsalynk.',
            url: `${SITE_URL}/contact-us`,
          },
        ],
      },
    ],
  };

  return (
    <main>
      <Script
        id="home-website-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema).replace(/</g, '\\u003c') }}
      />

      {/*
        Navigasi tersembunyi secara visual, tapi dibaca Googlebot.
        Navbar menggunakan 'use client' sehingga link-nya hanya muncul
        setelah JS berjalan — navigasi statis ini memastikan Googlebot
        selalu menemukan semua halaman utama dari HTML awal.
      */}
      <nav
        aria-label="Site navigation"
        className="sr-only"
      >
        <ul>
          <li><a href="/">Home — Arsalynk</a></li>
          <li><a href="/our-solution">Solusi Kami — ERP, IoT & Sistem Enterprise</a></li>
          <li><a href="/our-business">Ekosistem Bisnis Arsalynk</a></li>
          <li><a href="/our-works">Karya & Portofolio</a></li>
          <li><a href="/about-us">Tentang Kami</a></li>
          <li><a href="/insight-programs/case-studies">Studi Kasus & Insight</a></li>
          <li><a href="/insight-programs/leadership-thoughts">Leadership Thoughts</a></li>
          <li><a href="/contact-us">Hubungi Kami</a></li>
        </ul>
      </nav>

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

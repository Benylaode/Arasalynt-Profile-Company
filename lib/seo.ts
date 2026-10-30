import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { BRAND } from '@/lib/seo/brand';

/**
 * 6 Pilar Utama Navigasi Sitelinks Arsalynk (Target 6-Pack Sitelinks Google SERP)
 * Deskripsi ditulis ringkas (110–140 karakter) agar Google dapat menampilkannya
 * secara utuh sebagai snippet 2-baris di bawah judul sitelink tanpa terpotong (...).
 */
export const SITE_NAVIGATION_ITEMS = [
  {
    name: 'Our Solution',
    href: '/our-solution',
    description:
      'Layanan solusi teknologi enterprise Arsalynk: implementasi ERP kustom, deep learning AI, sistem Smart IoT, dan pengembangan aplikasi digital scalable.',
  },
  {
    name: 'About Us',
    href: '/about-us',
    description:
      'Mengenal profil, visi, tata kelola kepemimpinan, dan filosofi ekosistem Arsalynk sebagai partner transformasi digital enterprise terpercaya.',
  },
  {
    name: 'Insight & Programs',
    href: '/insight-programs',
    description:
      'Wadah pengetahuan transformasi digital Arsalynk: menghubungkan studi kasus lapangan, analisis arsitektur, dan kepemimpinan strategis.',
  },
  {
    name: 'Case Studies',
    href: '/insight-programs/case-studies',
    description:
      'Dokumentasi mendalam implementasi proyek nyata: Sinau Print POS, Presstis media platform, MarkaPlus AI, MARKA finance, dan MyBOS IoT telemetri.',
  },
  {
    name: 'Leadership Thoughts',
    href: '/insight-programs/leadership-thoughts',
    description:
      'Perspektif dan gagasan kepemimpinan eksekutif seputar arsitektur alur kerja, tata kelola data, ketahanan organisasi, dan strategi teknologi.',
  },
  {
    name: 'Contact Us',
    href: '/contact-us',
    description:
      'Konsultasikan kebutuhan proyek teknologi enterprise Anda bersama tim ahli Arsalynk via WhatsApp resmi, email, atau kantor kami di Jakarta.',
  },
] as const;

export type NavigationItem = (typeof SITE_NAVIGATION_ITEMS)[number];

/**
 * Membangun Schema BreadcrumbList terstandar untuk Google Search Console & SERP.
 */
export function buildBreadcrumbJsonLd(
  items: { name: string; url?: string; href?: string }[]
) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => {
      const targetUrl = item.url
        ? item.url
        : item.href?.startsWith('http')
        ? item.href
        : `${SITE_URL}${item.href ?? ''}`;

      return {
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: targetUrl,
      };
    }),
  };
}

/**
 * Membangun Schema SiteNavigationElement khusus untuk memandu Googlebot
 * membentuk tampilan 6-Pack Sitelinks secara terstruktur dan teratur.
 */
export function buildSiteNavigationElementJsonLd() {
  return SITE_NAVIGATION_ITEMS.map((item) => ({
    '@type': 'SiteNavigationElement',
    '@id': `${SITE_URL}${item.href}#navigation`,
    name: item.name,
    url: `${SITE_URL}${item.href}`,
    description: item.description,
  }));
}

/**
 * Membangun Schema WebSite lengkap dengan publisher & deklarasi hasPart sitelinks.
 */
export function buildWebSiteJsonLd() {
  return {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: `${SITE_URL}/`,
    name: BRAND.name,
    alternateName: BRAND.alternateNames,
    description:
      'Arsalynk menyediakan solusi teknologi enterprise terintegrasi di Indonesia, meliputi ERP, IoT, data analytics, POS, HRMS, dan transformasi digital bisnis.',
    publisher: { '@id': `${SITE_URL}/#organization` },
    about: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'id-ID',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/insight-programs/case-studies?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    hasPart: SITE_NAVIGATION_ITEMS.map((item) => ({
      '@type': 'WebPage',
      '@id': `${SITE_URL}${item.href}#webpage`,
      name: item.name,
      url: `${SITE_URL}${item.href}`,
      description: item.description,
    })),
  };
}

/**
 * Schema Organisasi & Korporasi Resmi (Knowledge Graph)
 */
export function buildOrganizationJsonLd() {
  return {
    '@type': ['Organization', 'Corporation'],
    '@id': `${SITE_URL}/#organization`,
    name: BRAND.name,
    legalName: BRAND.legalName,
    alternateName: BRAND.alternateNames,
    url: `${SITE_URL}/`,
    logo: {
      '@type': 'ImageObject',
      '@id': `${SITE_URL}/#logo`,
      url: BRAND.logo,
      contentUrl: BRAND.logo,
      width: 512,
      height: 512,
      caption: BRAND.name,
    },
    image: {
      '@type': 'ImageObject',
      url: BRAND.heroImage,
      width: 1200,
      height: 630,
    },
    description:
      'Arsalynk adalah ekosistem bisnis teknologi enterprise terintegrasi di Indonesia, menyediakan solusi ERP, IoT, data analytics, software development, HRMS, POS, riset strategis, dan transformasi digital.',
    address: BRAND.addresses.map((addr) => ({
      '@type': 'PostalAddress',
      ...addr,
    })),
    telephone: BRAND.phone,
    email: BRAND.email,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: BRAND.phone,
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
        email: BRAND.email,
        contactType: 'sales',
        areaServed: 'ID',
        availableLanguage: ['Indonesian', 'English'],
      },
    ],
    areaServed: {
      '@type': 'Country',
      name: 'Indonesia',
    },
    knowsAbout: [...BRAND.knowsAbout],
    sameAs: [
      BRAND.social.instagram,
      BRAND.social.linkedin,
      BRAND.social.facebook,
    ],
  };
}

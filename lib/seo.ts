import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { BRAND } from '@/lib/seo/brand';

/**
 * 6 Pilar Utama Navigasi Sitelinks Arsalynk (Target 6-Pack Sitelinks Google SERP)
 * Deskripsi ditulis ringkas (110–140 karakter) agar Google dapat menampilkannya
 * secara utuh sebagai snippet 2-baris di bawah judul sitelink tanpa terpotong (...).
 */
export const SITE_NAVIGATION_ITEMS = [
  {
    name: 'Our Works',
    href: '/our-works',
    description:
      'Eksplorasi portofolio proyek teknologi enterprise Arsalynk: implementasi ERP, integrasi IoT, data intelligence, dan platform digital modern.',
  },
  {
    name: 'Our Solution',
    href: '/our-solution',
    description:
      'Layanan solusi teknologi enterprise Arsalynk: implementasi ERP, integrasi IoT hardware, POS retail, HRMS, dan otomasi proses bisnis.',
  },
  {
    name: 'About Us',
    href: '/about-us',
    description:
      'Mengenal profil, visi, dan ekosistem bisnis Arsalynk sebagai partner transformasi digital dan rekayasa teknologi enterprise di Indonesia.',
  },
  {
    name: 'Our Business',
    href: '/our-business',
    description:
      'Ekosistem unit bisnis terintegrasi Arsalynk: infrastruktur IT, riset strategis, survey data analytics, hingga media digital enterprise.',
  },
  {
    name: 'Insight & Programs',
    href: '/insight-programs',
    description:
      'Studi kasus implementasi nyata dan pemikiran kepemimpinan strategis transformasi teknologi enterprise dari ekosistem Arsalynk.',
  },
  {
    name: 'Contact Us',
    href: '/contact-us',
    description:
      'Konsultasikan kebutuhan proyek teknologi enterprise Anda bersama tim ahli Arsalynk via WhatsApp, email, atau kantor kami di Jakarta.',
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
    hasPart: SITE_NAVIGATION_ITEMS.map((item) => ({
      '@type': 'WebPage',
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

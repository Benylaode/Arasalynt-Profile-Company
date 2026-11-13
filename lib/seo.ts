import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { BRAND } from '@/lib/seo/brand';
import type { Locale } from '@/lib/i18n/config';

/**
 * 6 Pilar Utama Navigasi Sitelinks Arsalynk (Target 6-Pack Sitelinks Google SERP)
 * Deskripsi ditulis ringkas (110–140 karakter) agar Google dapat menampilkannya
 * secara utuh sebagai snippet 2-baris di bawah judul sitelink tanpa terpotong (...).
 */
export const SITE_NAVIGATION_ITEMS_EN = [
  {
    name: 'Our Solution',
    href: '/our-solution',
    description:
      'Integrated enterprise ERP, smart IoT systems, AI data intelligence, and custom digital software development.',
  },
  {
    name: 'About Us',
    href: '/about-us',
    description:
      'Corporate profile, executive leadership, and unified ecosystem philosophy of Arsalynk.',
  },
  {
    name: 'Insight & Programs',
    href: '/insight-programs',
    description:
      'Strategic insights, case study implementations, and technology leadership thoughts.',
  },
  {
    name: 'Case Studies',
    href: '/insight-programs/case-studies',
    description:
      'Enterprise implementations: MarkaSuite ERP, MarkaPlus AI, MyBOS fleet IoT, AdsVar, and Craftivation.',
  },
  {
    name: 'Leadership Thoughts',
    href: '/insight-programs/leadership-thoughts',
    description:
      'Executive perspectives on digital architecture, data integration, and enterprise governance.',
  },
  {
    name: 'Contact Us',
    href: '/contact-us',
    description:
      'Consult enterprise digital transformation and custom software engineering with Arsalynk architects.',
  },
];

export const SITE_NAVIGATION_ITEMS_ID = [
  {
    name: 'Solusi Kami',
    href: '/id/our-solution',
    description:
      'Layanan ERP, IoT, data intelligence, dan solusi digital enterprise terintegrasi Arsalynk.',
  },
  {
    name: 'Tentang Kami',
    href: '/id/about-us',
    description:
      'Mengenal profil perusahaan, visi, jajaran kepemimpinan, dan ekosistem bisnis teknologi Arsalynk.',
  },
  {
    name: 'Wawasan & Program',
    href: '/id/insight-programs',
    description:
      'Pusat wawasan, studi kasus implementasi proyek, dan pemikiran kepemimpinan teknologi enterprise.',
  },
  {
    name: 'Studi Kasus',
    href: '/id/insight-programs/case-studies',
    description:
      'Studi kasus implementasi: MarkaSuite ERP, MarkaPlus AI, MyBOS fleet IoT, AdsVar, dan Craftivation.',
  },
  {
    name: 'Artikel Kepemimpinan',
    href: '/id/insight-programs/leadership-thoughts',
    description:
      'Pandangan kepemimpinan tentang arsitektur alur kerja, integrasi data, dan tata kelola organisasi.',
  },
  {
    name: 'Hubungi Kami',
    href: '/id/contact-us',
    description:
      'Konsultasikan kebutuhan transformasi digital dan arsitektur sistem enterprise Anda bersama Arsalynk.',
  },
];

export function getSiteNavigationItems(locale?: Locale) {
  return locale === 'id' ? SITE_NAVIGATION_ITEMS_ID : SITE_NAVIGATION_ITEMS_EN;
}

export const SITE_NAVIGATION_ITEMS = SITE_NAVIGATION_ITEMS_EN;

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
export function buildSiteNavigationElementJsonLd(locale?: Locale) {
  const items = getSiteNavigationItems(locale);
  return items.map((item) => ({
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
export function buildWebSiteJsonLd(locale?: Locale) {
  const items = getSiteNavigationItems(locale);
  const homeUrl = locale === 'id' ? `${SITE_URL}/id` : `${SITE_URL}/`;
  return {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: homeUrl,
    name: BRAND.name,
    alternateName: BRAND.alternateNames,
    description:
      'Arsalynk (PT Sinergi Muda Arsa) provides integrated enterprise technology solutions: custom ERP architecture, deep learning AI, connected IoT ecosystems, and scalable web development. Solusi teknologi enterprise dan software house terpercaya di Indonesia.',
    publisher: { '@id': `${SITE_URL}/#organization` },
    about: { '@id': `${SITE_URL}/#organization` },
    inLanguage: locale === 'id' ? ['id-ID', 'en-US'] : ['en-US', 'id-ID'],
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/insight-programs/case-studies?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    hasPart: items.map((item) => ({
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
      'Arsalynk (PT Sinergi Muda Arsa) is an integrated enterprise technology ecosystem providing custom ERP architecture, deep learning AI, smart IoT telemetry, scalable web development, and strategic digital transformation. Ekosistem solusi teknologi enterprise dan software house terkemuka di Indonesia.',
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

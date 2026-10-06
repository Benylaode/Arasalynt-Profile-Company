import { SITE_URL } from '@/lib/constants';

export const BRAND = {
  name: 'Arsalynk',
  legalName: 'PT Sinergi Muda Arsa',
  url: SITE_URL,
  alternateNames: ['Arsalynk Group', 'arsalynk.com'],
  phone: '+62-878-6276-6846',
  email: 'corporate.arsalynk@gmail.com',
  logo: `${SITE_URL}/images/logos/arsalynk-mark-512.png`,
  heroImage: `${SITE_URL}/images/our-works/our-works-hero-bg.webp`,
  social: {
    instagram: 'https://www.instagram.com/arsalynk',
    linkedin: 'https://www.linkedin.com/company/arsalynk-group/',
    facebook: 'https://www.facebook.com/share/1bbYtBuoUd/',
  },
  addresses: [
    {
      streetAddress:
        'Menara Rajawali 26th Floor, Jl. DR. Ide Anak Agung Gde Agung',
      addressLocality: 'Jakarta',
      addressRegion: 'DKI Jakarta',
      postalCode: '12950',
      addressCountry: 'ID',
    },
    {
      streetAddress:
        'MG Setos 3rd Floor, Jl. Inspeksi, Kembangsari, Semarang Tengah',
      addressLocality: 'Semarang',
      addressRegion: 'Jawa Tengah',
      postalCode: '50133',
      addressCountry: 'ID',
    },
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
} as const;

export type BrandIdentity = typeof BRAND;

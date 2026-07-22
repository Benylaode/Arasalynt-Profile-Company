/* ==========================================================================
   BUSINESS TYPES — Arsalynt
   ========================================================================== */

export interface PainPoint {
  icon: string;
  title: string;
  desc: string;
}

export interface Service {
  name: string;
  img: string;
}

export interface Work {
  name: string;
  img: string;
  tag: string;
}

export interface OtherBusiness {
  slug: string;
  name: string;
  img: string;
}

export interface BusinessPage {
  id: number;
  slug: string;
  name: string;
  category: string;
  tagline: string;
  heroImg: string;
  aboutDesc: string;
  aboutImg: string;
  brandColor: string;
  visionQuote: string;
  ctaTitle: string;
  ctaDesc: string;
  painPoints: PainPoint[];
  services: Service[];
  works: Work[];
  otherBusinesses: OtherBusiness[];
}

/* Raw DB row types (JSON strings stored in SQLite) */
export interface BusinessRow {
  id: number;
  slug: string;
  name: string;
  category: string;
  tagline: string;
  hero_img: string;
  about_desc: string;
  about_img: string;
  brand_color: string;
  vision_quote: string;
  cta_title: string;
  cta_desc: string;
  pain_points: string; // JSON
  services: string;    // JSON
  works: string;       // JSON
  other_businesses: string; // JSON
}

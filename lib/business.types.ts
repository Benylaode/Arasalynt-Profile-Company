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
  shortName?: string;
  category: string;
  tagline: string;
  logo?: string;
  logoWidth?: number | string;
  logoMaxHeight?: number | string;
  brandColor: string;
  heroImg: string;
  heroObjectPosition?: string;
  heroOverlayImg?: string;
  aboutDesc: string;
  aboutImg: string;
  aboutObjectPosition?: string;
  visionQuote: string;
  visionTextSize?: string;
  ctaTitle: string;
  ctaDesc: string;
  ctaPrimaryLabel?: string;
  ctaPrimaryHref?: string;
  ctaSecondaryLabel?: string;
  ctaSecondaryHref?: string;
  painPointsTitle?: string;
  painPointsLabel?: string;
  servicesTitle?: string;
  servicesLabel?: string;
  servicesColumns?: number;
  visionLabel?: string;
  worksLabel?: string;
  worksTitle?: string;
  otherBusinessesTitle?: string;
  featuredWorkIndex?: number;
  featuredOtherBusinessIndex?: number;
  challengeBg?: string;
  servicesBg?: string;
  visionImg?: string;
  ctaImg?: string;
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
  short_name?: string;
  category: string;
  tagline: string;
  logo?: string;
  logo_width?: string;
  logo_max_height?: string;
  brand_color: string;
  hero_img: string;
  hero_object_position?: string;
  hero_overlay_img?: string;
  about_desc: string;
  about_img: string;
  about_object_position?: string;
  vision_quote: string;
  vision_text_size?: string;
  cta_title: string;
  cta_desc: string;
  cta_primary_label?: string;
  cta_primary_href?: string;
  cta_secondary_label?: string;
  cta_secondary_href?: string;
  pain_points_title?: string;
  pain_points_label?: string;
  services_title?: string;
  services_label?: string;
  services_columns?: number;
  vision_label?: string;
  works_label?: string;
  works_title?: string;
  other_businesses_title?: string;
  featured_work_index?: number;
  featured_other_business_index?: number;
  challenge_bg?: string;
  services_bg?: string;
  vision_img?: string;
  cta_img?: string;
  pain_points: string; // JSON
  services: string;    // JSON
  works: string;       // JSON
  other_businesses: string; // JSON
}

export interface HeroSlideRow {
  id: string;
  headline: string;
  body: string;
  background_image: string;
  mobile_background_image?: string;
  background_position?: string;
  primary_cta_label: string;
  primary_cta_href: string;
  secondary_cta_label: string;
  secondary_cta_href: string;
  sort_order: number;
}


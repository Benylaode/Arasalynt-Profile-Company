/* ==========================================================================
   ACTIONS.TS — Server-Side Query Functions
   Semua fungsi ini hanya boleh dipanggil dari Server Components / Route Handlers
   ========================================================================== */

import { getDb } from './db';
import type { BusinessPage, BusinessRow, OtherBusiness } from '@/lib/business.types';
import { BUSINESS_DUMMY_DATA } from './dummy';

/* ── Helper: transform DB row → BusinessPage ── */
function rowToBusinessPage(row: BusinessRow): BusinessPage {
  return {
    id: row.id,
    slug: row.slug,
    name: row.name,
    shortName: row.short_name || undefined,
    category: row.category,
    tagline: row.tagline,
    logo: row.logo || `/images/our-business/${row.slug}/logo.svg`,
    logoWidth: row.logo_width || undefined,
    logoMaxHeight: row.logo_max_height || undefined,
    brandColor: row.brand_color,
    heroImg: row.hero_img,
    heroObjectPosition: row.hero_object_position || undefined,
    heroOverlayImg: row.hero_overlay_img || undefined,
    aboutDesc: row.about_desc,
    aboutImg: row.about_img,
    aboutObjectPosition: row.about_object_position || undefined,
    visionQuote: row.vision_quote,
    visionTextSize: row.vision_text_size || undefined,
    ctaTitle: row.cta_title,
    ctaDesc: row.cta_desc,
    ctaPrimaryLabel: row.cta_primary_label || undefined,
    ctaPrimaryHref: row.cta_primary_href || undefined,
    ctaSecondaryLabel: row.cta_secondary_label || undefined,
    ctaSecondaryHref: row.cta_secondary_href || undefined,
    painPointsTitle: row.pain_points_title || undefined,
    painPointsLabel: row.pain_points_label || undefined,
    servicesTitle: row.services_title || undefined,
    servicesLabel: row.services_label || undefined,
    servicesColumns: row.services_columns ?? undefined,
    visionLabel: row.vision_label || undefined,
    worksLabel: row.works_label || undefined,
    worksTitle: row.works_title || undefined,
    otherBusinessesTitle: row.other_businesses_title || undefined,
    featuredWorkIndex: row.featured_work_index ?? undefined,
    featuredOtherBusinessIndex: row.featured_other_business_index ?? undefined,
    challengeBg: row.challenge_bg || undefined,
    servicesBg: row.services_bg || undefined,
    visionImg: row.vision_img || undefined,
    ctaImg: row.cta_img || undefined,
    painPoints: JSON.parse(row.pain_points),
    services: JSON.parse(row.services),
    works: JSON.parse(row.works),
    otherBusinesses: JSON.parse(row.other_businesses),
  };
}

/* ── Get single business by slug ── */
export function getBusinessBySlug(slug: string): BusinessPage | null {
  const dummyBiz = BUSINESS_DUMMY_DATA.find((b) => b.slug === slug);
  if (dummyBiz) return dummyBiz;

  try {
    const db = getDb();
    const row = db
      .prepare('SELECT * FROM businesses WHERE slug = ?')
      .get(slug) as BusinessRow | undefined;

    if (row) return rowToBusinessPage(row);
  } catch {
    // Ignore DB errors
  }

  return null;
}

/* ── Get all businesses (untuk index page & generateStaticParams) ── */
export function getAllBusinesses(): BusinessPage[] {
  if (BUSINESS_DUMMY_DATA && BUSINESS_DUMMY_DATA.length > 0) {
    return BUSINESS_DUMMY_DATA;
  }

  try {
    const db = getDb();
    const rows = db
      .prepare('SELECT * FROM businesses ORDER BY id ASC')
      .all() as BusinessRow[];

    if (rows.length > 0) {
      return rows.map(rowToBusinessPage);
    }
  } catch {
    // Ignore
  }

  return [];
}

/* ── Get all slugs only (lightweight, untuk generateStaticParams) ── */
export function getAllBusinessSlugs(): string[] {
  if (BUSINESS_DUMMY_DATA && BUSINESS_DUMMY_DATA.length > 0) {
    return BUSINESS_DUMMY_DATA.map((b) => b.slug);
  }

  try {
    const db = getDb();
    const rows = db
      .prepare('SELECT slug FROM businesses ORDER BY id ASC')
      .all() as Pick<BusinessRow, 'slug'>[];

    return rows.map((r) => r.slug);
  } catch {
    return [];
  }
}

/* ── Get a few other businesses (untuk "Explore Other Business" section) ── */
export function getOtherBusinesses(
  currentSlug: string,
  limit = 3,
): OtherBusiness[] {
  const db = getDb();
  const rows = db
    .prepare(
      `SELECT slug, name, hero_img as img
       FROM businesses
       WHERE slug != ?
       ORDER BY RANDOM()
       LIMIT ?`,
    )
    .all(currentSlug, limit) as { slug: string; name: string; img: string }[];

  return rows.map((r) => ({ slug: r.slug, name: r.name, img: r.img }));
}

/* ── Get hero slides from SQLite DB (dengan fallback ke dummy) ── */
import type { HeroSlide } from '@/types';
import type { HeroSlideRow } from '@/lib/business.types';
import { HERO_SLIDES_DUMMY_DATA } from './dummy';

export function getHeroSlides(): HeroSlide[] {
  try {
    const db = getDb();
    const rows = db
      .prepare('SELECT * FROM hero_slides ORDER BY sort_order ASC')
      .all() as HeroSlideRow[];

    if (!rows || rows.length === 0) return HERO_SLIDES_DUMMY_DATA;

    return rows.map((r) => ({
      id: r.id,
      headline: r.headline,
      body: r.body,
      backgroundImage: r.background_image,
      mobileBackgroundImage: r.mobile_background_image || undefined,
      backgroundPosition: r.background_position || 'center center',
      primaryCta: {
        label: r.primary_cta_label,
        href: r.primary_cta_href,
      },
      secondaryCta: {
        label: r.secondary_cta_label,
        href: r.secondary_cta_href,
      },
    }));
  } catch (error) {
    console.error('[db] Error fetching hero slides:', error);
    return HERO_SLIDES_DUMMY_DATA;
  }
}


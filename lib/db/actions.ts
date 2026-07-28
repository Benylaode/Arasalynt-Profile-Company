/* ==========================================================================
   ACTIONS.TS — Server-Side Query Functions
   Semua fungsi ini hanya boleh dipanggil dari Server Components / Route Handlers
   ========================================================================== */

import { getDb } from './db';
import type { BusinessPage, BusinessRow, OtherBusiness } from '@/lib/business.types';

/* ── Helper: transform DB row → BusinessPage ── */
function rowToBusinessPage(row: BusinessRow): BusinessPage {
  return {
    id: row.id,
    slug: row.slug,
    name: row.name,
    category: row.category,
    tagline: row.tagline,
    heroImg: row.hero_img,
    aboutDesc: row.about_desc,
    aboutImg: row.about_img,
    brandColor: row.brand_color,
    visionQuote: row.vision_quote,
    ctaTitle: row.cta_title,
    ctaDesc: row.cta_desc,
    painPoints: JSON.parse(row.pain_points),
    services: JSON.parse(row.services),
    works: JSON.parse(row.works),
    otherBusinesses: JSON.parse(row.other_businesses),
  };
}

/* ── Get single business by slug ── */
export function getBusinessBySlug(slug: string): BusinessPage | null {
  const db = getDb();
  const row = db
    .prepare('SELECT * FROM businesses WHERE slug = ?')
    .get(slug) as BusinessRow | undefined;

  if (!row) return null;
  return rowToBusinessPage(row);
}

/* ── Get all businesses (untuk index page & generateStaticParams) ── */
export function getAllBusinesses(): BusinessPage[] {
  const db = getDb();
  const rows = db
    .prepare('SELECT * FROM businesses ORDER BY id ASC')
    .all() as BusinessRow[];

  return rows.map(rowToBusinessPage);
}

/* ── Get all slugs only (lightweight, untuk generateStaticParams) ── */
export function getAllBusinessSlugs(): string[] {
  const db = getDb();
  const rows = db
    .prepare('SELECT slug FROM businesses ORDER BY id ASC')
    .all() as Pick<BusinessRow, 'slug'>[];

  return rows.map((r) => r.slug);
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


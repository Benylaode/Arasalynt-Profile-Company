/* ==========================================================================
   ACTIONS.TS — Server-Side Query Functions
   Semua fungsi ini hanya boleh dipanggil dari Server Components / Route Handlers
   ========================================================================== */

import { getDb } from './db';
import type { BusinessPage, BusinessRow, OtherBusiness } from '@/lib/business.types';
import { BUSINESS_DUMMY_DATA } from './dummy';

function optionalText(value: string | null | undefined): string | undefined {
  const normalized = value?.trim();
  
  return normalized || undefined;
}

function parseJsonArray<T>(value: string, field: string, slug: string): T[] {
  try {
    const parsed: unknown = JSON.parse(value);
    if (Array.isArray(parsed)) return parsed as T[];
  } catch (error) {
    console.error(`[db] Invalid ${field} JSON for business "${slug}".`, error);
  }

  return [];
}

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
    ctaPrimaryLabel: optionalText(row.cta_primary_label),
    ctaPrimaryHref: optionalText(row.cta_primary_href),
    ctaSecondaryLabel: optionalText(row.cta_secondary_label),
    ctaSecondaryHref: optionalText(row.cta_secondary_href),
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
    painPoints: parseJsonArray(row.pain_points, 'pain_points', row.slug),
    services: parseJsonArray(row.services, 'services', row.slug),
    works: parseJsonArray(row.works, 'works', row.slug),
    otherBusinesses: parseJsonArray(row.other_businesses, 'other_businesses', row.slug),
  };
}

/* ── Get single business by slug ── */
export function getBusinessBySlug(slug: string): BusinessPage | null {
  try {
    const db = getDb();
    const row = db
      .prepare('SELECT * FROM businesses WHERE slug = ?')
      .get(slug) as BusinessRow | undefined;

    if (row) return rowToBusinessPage(row);
  } catch (error) {
    console.error(`[db] Failed to fetch business "${slug}".`, error);
  }

  return BUSINESS_DUMMY_DATA.find((business) => business.slug === slug) ?? null;
}

/* ── Get all businesses (untuk index page & generateStaticParams) ── */
export function getAllBusinesses(): BusinessPage[] {
  try {
    const db = getDb();
    const rows = db
      .prepare('SELECT * FROM businesses ORDER BY id ASC')
      .all() as BusinessRow[];

    if (rows.length > 0) {
      return rows.map(rowToBusinessPage);
    }
  } catch (error) {
    console.error('[db] Failed to fetch businesses.', error);
  }

  return BUSINESS_DUMMY_DATA;
}

/* ── Get all slugs only (lightweight, untuk generateStaticParams) ── */
export function getAllBusinessSlugs(): string[] {
  try {
    const db = getDb();
    const rows = db
      .prepare('SELECT slug FROM businesses ORDER BY id ASC')
      .all() as Pick<BusinessRow, 'slug'>[];

    return rows.map((r) => r.slug);
  } catch (error) {
    console.error('[db] Failed to fetch business slugs.', error);
    return BUSINESS_DUMMY_DATA.map((business) => business.slug);
  }
}

/* ── Get a few other businesses (untuk "Explore Other Business" section) ── */
export function getOtherBusinesses(
  currentSlug: string,
  limit = 3,
): OtherBusiness[] {
  try {
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
  } catch (error) {
    console.error('[db] Failed to fetch other businesses.', error);
    return BUSINESS_DUMMY_DATA
      .filter((business) => business.slug !== currentSlug)
      .slice(0, limit)
      .map((business) => ({
        slug: business.slug,
        name: business.name,
        img: business.heroImg,
      }));
  }
}

/* ── Get hero slides from SQLite DB (dengan fallback ke dummy) ── */
import type { HeroSlide, CaseStudyArticle, LeadershipThoughtArticle } from '@/types';
import type { HeroSlideRow } from '@/lib/business.types';
import { HERO_SLIDES_DUMMY_DATA, CASE_STUDIES_DUMMY_DATA, LEADERSHIP_THOUGHTS_DUMMY_DATA } from './dummy';

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

/* ── Case Studies Query Functions ── */
export function getAllCaseStudies(): CaseStudyArticle[] {
  try {
    const db = getDb();
    const rows = db.prepare('SELECT * FROM case_studies ORDER BY id ASC').all() as any[];
    if (rows && rows.length > 0) {
      return rows.map((r) => ({
        id: r.id,
        slug: r.slug,
        title: r.title,
        category: r.category,
        tags: JSON.parse(r.tags),
        dateLabel: r.date_label,
        dateValue: r.date_value,
        description: r.description,
        coverImage: r.cover_image,
        coverImageAlt: r.cover_image_alt,
        sections: JSON.parse(r.sections),
      }));
    }
  } catch {
    // Fallback to dummy data
  }
  return CASE_STUDIES_DUMMY_DATA;
}

export function getCaseStudyBySlug(slug: string): CaseStudyArticle | null {
  const found = CASE_STUDIES_DUMMY_DATA.find((c) => c.slug === slug);
  if (found) return found;

  try {
    const db = getDb();
    const r = db.prepare('SELECT * FROM case_studies WHERE slug = ?').get(slug) as any;
    if (r) {
      return {
        id: r.id,
        slug: r.slug,
        title: r.title,
        category: r.category,
        tags: JSON.parse(r.tags),
        dateLabel: r.date_label,
        dateValue: r.date_value,
        description: r.description,
        coverImage: r.cover_image,
        coverImageAlt: r.cover_image_alt,
        sections: JSON.parse(r.sections),
      };
    }
  } catch {
    // Fallback
  }
  return null;
}

/* ── Leadership Thoughts Query Functions ── */
export function getAllLeadershipThoughts(): LeadershipThoughtArticle[] {
  try {
    const db = getDb();
    const rows = db.prepare('SELECT * FROM leadership_thoughts ORDER BY id ASC').all() as any[];
    if (rows && rows.length > 0) {
      return rows.map((r) => ({
        id: r.id,
        slug: r.slug,
        title: r.title,
        category: r.category,
        tags: JSON.parse(r.tags),
        author: r.author,
        readTime: r.read_time,
        date: r.date,
        description: r.description,
        coverImage: r.cover_image,
        coverImageAlt: r.cover_image_alt,
        sections: JSON.parse(r.sections),
      }));
    }
  } catch {
    // Fallback to dummy data
  }
  return LEADERSHIP_THOUGHTS_DUMMY_DATA;
}

export function getLeadershipThoughtBySlug(slug: string): LeadershipThoughtArticle | null {
  const found = LEADERSHIP_THOUGHTS_DUMMY_DATA.find((t) => t.slug === slug);
  if (found) return found;

  try {
    const db = getDb();
    const r = db.prepare('SELECT * FROM leadership_thoughts WHERE slug = ?').get(slug) as any;
    if (r) {
      return {
        id: r.id,
        slug: r.slug,
        title: r.title,
        category: r.category,
        tags: JSON.parse(r.tags),
        author: r.author,
        readTime: r.read_time,
        date: r.date,
        description: r.description,
        coverImage: r.cover_image,
        coverImageAlt: r.cover_image_alt,
        sections: JSON.parse(r.sections),
      };
    }
  } catch {
    // Fallback
  }
  return null;
}

/* ==========================================================================
   DB.TS — SQLite Connection, Schema & Auto-Seed
   Menggunakan better-sqlite3 (sinkronus, cocok untuk Next.js Server Components)
   ========================================================================== */

import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';
import { BUSINESS_DUMMY_DATA, HERO_SLIDES_DUMMY_DATA, TESTIMONIALS_DUMMY_DATA } from './dummy';

/* ── Resolve path ke file database (di project root / .next tidak masuk) ── */
const DB_DIR = path.join(process.cwd(), '.db');
const DB_PATH = path.join(DB_DIR, 'arsalynt.db');

/* Pastikan folder .db ada */
if (!fs.existsSync(DB_DIR)) {
  fs.mkdirSync(DB_DIR, { recursive: true });
}

/* ── Inisialisasi koneksi singleton ── */
let _db: Database.Database | null = null;

function getDb(): Database.Database {
  if (_db) return _db;

  _db = new Database(DB_PATH);

  /* Aktifkan WAL mode untuk performa lebih baik */
  _db.pragma('journal_mode = WAL');
  _db.pragma('foreign_keys = ON');

  /* Bootstrap schema & seed */
  initSchema(_db);
  seedIfEmpty(_db);

  return _db;
}

/* ── Schema ── */
function initSchema(db: Database.Database): void {
  db.exec(`
    CREATE TABLE IF NOT EXISTS businesses (
      id               INTEGER PRIMARY KEY,
      slug             TEXT    NOT NULL UNIQUE,
      name             TEXT    NOT NULL,
      category         TEXT    NOT NULL,
      tagline          TEXT    NOT NULL,
      hero_img         TEXT    NOT NULL,
      about_desc       TEXT    NOT NULL,
      about_img        TEXT    NOT NULL,
      brand_color      TEXT    NOT NULL DEFAULT '#E6FF2A',
      vision_quote     TEXT    NOT NULL,
      cta_title        TEXT    NOT NULL,
      cta_desc         TEXT    NOT NULL,
      pain_points      TEXT    NOT NULL DEFAULT '[]',  -- JSON array
      services         TEXT    NOT NULL DEFAULT '[]',  -- JSON array
      works            TEXT    NOT NULL DEFAULT '[]',  -- JSON array
      other_businesses TEXT    NOT NULL DEFAULT '[]'   -- JSON array
    );

    CREATE TABLE IF NOT EXISTS hero_slides (
      id                      TEXT    PRIMARY KEY,
      headline                TEXT    NOT NULL,
      body                    TEXT    NOT NULL,
      background_image        TEXT    NOT NULL,
      mobile_background_image TEXT,
      background_position     TEXT    DEFAULT 'center center',
      primary_cta_label       TEXT    NOT NULL,
      primary_cta_href        TEXT    NOT NULL,
      secondary_cta_label     TEXT    NOT NULL,
      secondary_cta_href      TEXT    NOT NULL,
      sort_order              INTEGER DEFAULT 0
    );

    CREATE TABLE IF NOT EXISTS testimonials (
      id      INTEGER PRIMARY KEY,
      name    TEXT    NOT NULL,
      role    TEXT    NOT NULL,
      text    TEXT    NOT NULL,
      avatar  TEXT    NOT NULL
    );
  `);
}

/* ── Auto-seed dari dummy.ts jika tabel kosong ── */
function seedIfEmpty(db: Database.Database): void {
  const count = (
    db.prepare('SELECT COUNT(*) as cnt FROM businesses').get() as { cnt: number }
  ).cnt;

  if (count === 0) {
    const insert = db.prepare(`
      INSERT INTO businesses
        (id, slug, name, category, tagline, hero_img, about_desc, about_img,
         brand_color, vision_quote, cta_title, cta_desc,
         pain_points, services, works, other_businesses)
      VALUES
        (@id, @slug, @name, @category, @tagline, @hero_img, @about_desc, @about_img,
         @brand_color, @vision_quote, @cta_title, @cta_desc,
         @pain_points, @services, @works, @other_businesses)
    `);

    const insertMany = db.transaction(() => {
      for (const biz of BUSINESS_DUMMY_DATA) {
        insert.run({
          id: biz.id,
          slug: biz.slug,
          name: biz.name,
          category: biz.category,
          tagline: biz.tagline,
          hero_img: biz.heroImg,
          about_desc: biz.aboutDesc,
          about_img: biz.aboutImg,
          brand_color: biz.brandColor,
          vision_quote: biz.visionQuote,
          cta_title: biz.ctaTitle,
          cta_desc: biz.ctaDesc,
          pain_points: JSON.stringify(biz.painPoints),
          services: JSON.stringify(biz.services),
          works: JSON.stringify(biz.works),
          other_businesses: JSON.stringify(biz.otherBusinesses),
        });
      }
    });

    insertMany();
    console.log(`[db] Seeded ${BUSINESS_DUMMY_DATA.length} businesses into SQLite.`);
  }

  const heroCount = (
    db.prepare('SELECT COUNT(*) as cnt FROM hero_slides').get() as { cnt: number }
  ).cnt;

  if (heroCount < HERO_SLIDES_DUMMY_DATA.length) {
    const insertHero = db.prepare(`
      INSERT OR REPLACE INTO hero_slides
        (id, headline, body, background_image, mobile_background_image, background_position,
         primary_cta_label, primary_cta_href, secondary_cta_label, secondary_cta_href, sort_order)
      VALUES
        (@id, @headline, @body, @background_image, @mobile_background_image, @background_position,
         @primary_cta_label, @primary_cta_href, @secondary_cta_label, @secondary_cta_href, @sort_order)
    `);

    const insertManyHero = db.transaction(() => {
      HERO_SLIDES_DUMMY_DATA.forEach((slide, idx) => {
        insertHero.run({
          id: String(slide.id),
          headline: slide.headline,
          body: slide.body,
          background_image: slide.backgroundImage,
          mobile_background_image: slide.mobileBackgroundImage || null,
          background_position: slide.backgroundPosition || 'center center',
          primary_cta_label: slide.primaryCta.label,
          primary_cta_href: slide.primaryCta.href,
          secondary_cta_label: slide.secondaryCta.label,
          secondary_cta_href: slide.secondaryCta.href,
          sort_order: idx,
        });
      });
    });

    insertManyHero();
    console.log(`[db] Seeded ${HERO_SLIDES_DUMMY_DATA.length} hero slides into SQLite.`);
  }

  const testiCount = (
    db.prepare('SELECT COUNT(*) as cnt FROM testimonials').get() as { cnt: number }
  ).cnt;

  if (testiCount < TESTIMONIALS_DUMMY_DATA.length) {
    const insertTesti = db.prepare(`
      INSERT OR REPLACE INTO testimonials (id, name, role, text, avatar)
      VALUES (@id, @name, @role, @text, @avatar)
    `);

    const insertManyTesti = db.transaction(() => {
      TESTIMONIALS_DUMMY_DATA.forEach((item) => {
        insertTesti.run(item);
      });
    });

    insertManyTesti();
    console.log(`[db] Seeded ${TESTIMONIALS_DUMMY_DATA.length} testimonials into SQLite.`);
  }
}

export function getAllTestimonials() {
  const db = getDb();
  return db.prepare('SELECT * FROM testimonials ORDER BY id ASC').all();
}

export { getDb };


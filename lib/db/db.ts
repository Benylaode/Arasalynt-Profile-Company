/* ==========================================================================
   DB.TS — SQLite Connection, Schema & Auto-Seed
   Menggunakan better-sqlite3 (sinkronus, cocok untuk Next.js Server Components)
   ========================================================================== */

import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';
import { BUSINESS_DUMMY_DATA } from './dummy';

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
  `);
}

/* ── Auto-seed dari dummy.ts jika tabel kosong ── */
function seedIfEmpty(db: Database.Database): void {
  const count = (
    db.prepare('SELECT COUNT(*) as cnt FROM businesses').get() as { cnt: number }
  ).cnt;

  if (count > 0) return; // sudah ada data, skip

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

export { getDb };

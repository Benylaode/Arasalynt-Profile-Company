/* ==========================================================================
   app/our-business/page.tsx
   Server Component — Business Index Page
   Daftar semua bisnis diambil dari SQLite via getAllBusinesses()
   ========================================================================== */

import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllBusinesses } from '@/lib/db/actions';
import styles from './our-business.module.css';

export const metadata: Metadata = {
  title: 'Our Business — Arsalynt',
  description:
    'Explore the Arsalynt ecosystem — from IT infrastructure and data analytics to media, branding, and beyond.',
};

/* Category grouping */
const CATEGORY_ORDER = [
  'IT INFRASTRUCTURE',
  'DATA & ANALYTICS',
  'MEDIA',
  'MEDIA / BRANDING',
];

/* ── Pure SVG icon ── */
function IconChevronDown() {
  return (
    <svg
      width={20}
      height={20}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export default function OurBusinessPage() {
  /* Fetch semua bisnis dari SQLite */
  const allBusinesses = getAllBusinesses();

  /* Kelompokkan: IT+Data (top row), Media (bottom grid) */
  const topRow = allBusinesses.filter((b) =>
    ['IT INFRASTRUCTURE', 'DATA & ANALYTICS'].includes(b.category),
  );
  const mediaRow = allBusinesses.filter((b) =>
    ['MEDIA', 'MEDIA / BRANDING'].includes(b.category),
  );

  return (
    <div className={styles.container}>

      {/* ── HERO ── */}
      <section className={styles.hero} id="hero" aria-label="Our Business Title">
        <div className={styles.backgroundImage} aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1200&auto=format&fit=crop"
            alt="Neon City Skyline"
          />
        </div>
        <div className={styles.networkOverlay} aria-hidden="true" />
        <div className={styles.gradientBottom} aria-hidden="true" />
        <div className={styles.heroContent}>
          <span className={styles.heroLabel}>WHAT WE FOCUS ON</span>
          <h1 className={styles.heroTitle}>Our Business</h1>
          <p className={styles.heroDesc}>
            Sinergi teknologi untuk menciptakan ekosistem digital yang tangguh,
            terintegrasi, dan berdampak bagi kemajuan bisnis Anda.
          </p>
          <a href="#divisions-grid" className={styles.scrollBtn} aria-label="Scroll down">
            <IconChevronDown />
          </a>
        </div>
      </section>

      {/* ── DIVISIONS GRID ── */}
      <section
        id="divisions-grid"
        className={styles.gridSection}
        aria-label="Business Divisions Grid"
      >
        <div className={styles.inner}>

          {/* Top Row: IT Infrastructure & Data Analytics */}
          <div className={styles.topRow}>
            {topRow.map((biz) => (
              <div key={biz.slug} className={styles.columnGroup}>
                <div className={styles.groupHeader}>
                  <span className={styles.groupDot} />
                  <h2 className={styles.groupTitle}>{biz.category}</h2>
                </div>
                <Link
                  href={`/our-business/${biz.slug}`}
                  className={styles.businessCard}
                >
                  <img
                    src={biz.heroImg}
                    alt={biz.name}
                    className={styles.cardBg}
                  />
                  <div className={styles.cardMask} />
                  <div className={styles.cardContent}>
                    <h3 className={styles.cardName}>{biz.name}</h3>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Bottom Row: Digital Media & Social Impact */}
          {mediaRow.length > 0 && (
            <div className={styles.bottomRow}>
              <div className={styles.groupHeader}>
                <span className={styles.groupDot} />
                <h2 className={styles.groupTitle}>
                  Digital Media &amp; Social Impact
                </h2>
              </div>
              <div className={styles.cardsGrid}>
                {mediaRow.map((biz) => (
                  <Link
                    key={biz.slug}
                    href={`/our-business/${biz.slug}`}
                    className={styles.businessCard}
                  >
                    <img
                      src={biz.heroImg}
                      alt={biz.name}
                      className={styles.cardBg}
                    />
                    <div className={styles.cardMask} />
                    <div className={styles.cardContent}>
                      <h3 className={styles.cardName}>{biz.name}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}

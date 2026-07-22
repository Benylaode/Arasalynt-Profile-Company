/* ==========================================================================
   app/our-business/[slug]/page.tsx
   Server Component — Dynamic Business Sub-Page
   Data diambil dari SQLite via actions.ts
   ========================================================================== */

import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  getBusinessBySlug,
  getAllBusinessSlugs,
} from '@/lib/db/actions';
import styles from '../business-sub.module.css';

/* ── Pre-render semua slug yang ada di DB ── */
export async function generateStaticParams() {
  const slugs = getAllBusinessSlugs();
  return slugs.map((slug) => ({ slug }));
}

/* ── Dynamic SEO metadata per bisnis ── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const biz = getBusinessBySlug(slug);
  if (!biz) return { title: 'Not Found' };

  return {
    title: `${biz.name} — Arsalynt`,
    description: biz.aboutDesc.slice(0, 155),
    openGraph: {
      title: `${biz.name} | Arsalynt`,
      description: biz.aboutDesc.slice(0, 155),
      images: [{ url: biz.heroImg }],
    },
  };
}

/* ── Pure SVG Icons (Server-safe, no client state needed) ── */
function IconChevronDown() {
  return (
    <svg
      width={22}
      height={22}
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

function IconArrowRight() {
  return (
    <svg
      width={14}
      height={14}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

/* ── Page Component ── */
export default async function BusinessSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const biz = getBusinessBySlug(slug);

  /* 404 jika slug tidak ditemukan di DB */
  if (!biz) notFound();

  return (
    <div className={styles.page}>

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <img src={biz.heroImg} alt={biz.name} />
        </div>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.heroLabel}>{biz.category}</span>
          <h1 className={styles.heroTitle}>{biz.name}</h1>
          {/* Scroll button — rendered as anchor to JS-free scroll */}
          <a href="#about" className={styles.scrollBtn} aria-label="Scroll to about section">
            <IconChevronDown />
          </a>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className={styles.about}>
        <div className={styles.inner}>
          <div className={styles.aboutText}>
            <span className={styles.sectionLabel}>{biz.category}</span>
            <h2 className={styles.aboutTitle}>{biz.tagline}</h2>
            <p className={styles.aboutDesc}>{biz.aboutDesc}</p>
            <div className={styles.brandMark}>
              <div
                className={styles.brandDot}
                style={{ backgroundColor: biz.brandColor }}
              />
              <span>{biz.name}</span>
            </div>
          </div>
          <div className={styles.aboutImage}>
            <img src={biz.aboutImg} alt={`${biz.name} team`} />
          </div>
        </div>
      </section>

      {/* ── PAIN POINTS ── */}
      <section className={styles.painPoints}>
        <div className={styles.inner}>
          <span className={styles.sectionLabel}>PAIN POINT</span>
          <h2 className={styles.sectionTitle}>
            {biz.painPoints.length === 4 ? 'Is This Your Challenge?' : 'What\'s Slowing Your Business Down?'}
          </h2>
          <div className={styles.painGrid}>
            {biz.painPoints.map((p, i) => (
              <div key={i} className={styles.painCard}>
                <span className={styles.painIcon}>{p.icon}</span>
                <h3 className={styles.painCardTitle}>{p.title}</h3>
                <p className={styles.painCardDesc}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES (dark bg) ── */}
      <section className={styles.services}>
        <div className={styles.inner}>
          <span className={styles.sectionLabelLight}>OUR SOLUTIONS</span>
          <h2 className={styles.serviceTitle}>
            {biz.name === 'Kaluna Technology'
              ? 'End-to-End Technology Integration Solutions'
              : biz.name === 'Artic Analytica'
              ? 'We Do Data-Driven Business Intelligence'
              : biz.name === 'LoxLive'
              ? 'End-to-End Premium Broadcast Services'
              : biz.name === 'The Drafroom'
              ? 'Your Strategic Brand Solutions'
              : `${biz.name}'s Core Services`}
          </h2>
          <div className={styles.servicesGrid}>
            {biz.services.map((s, i) => (
              <div key={i} className={styles.serviceCard}>
                <img src={s.img} alt={s.name} className={styles.serviceCardImg} />
                <div className={styles.serviceCardOverlay} />
                <span className={styles.serviceCardName}>{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VISION QUOTE ── */}
      <section className={styles.vision}>
        <div className={styles.visionBg}>
          <img src={biz.heroImg} alt="" aria-hidden="true" />
        </div>
        <div className={styles.visionOverlay} />
        <div className={styles.visionContent}>
          <span className={styles.sectionLabelLight}>ARSALYNT</span>
          <p className={styles.visionQuote}>{biz.visionQuote}</p>
        </div>
      </section>

      {/* ── OUR WORKS ── */}
      <section className={styles.worksSection}>
        <div className={styles.inner}>
          <div className={styles.worksSectionHeader}>
            <h2 className={styles.sectionTitle}>
              Explore {biz.name}&apos;s Work
            </h2>
            <Link href="/our-works" className={styles.seeAllBtn}>
              See All <IconArrowRight />
            </Link>
          </div>
          <div className={styles.worksScroll}>
            {biz.works.map((w, i) => (
              <div key={i} className={styles.workCard}>
                <img src={w.img} alt={w.name} className={styles.workCardImg} />
                <div className={styles.workCardOverlay} />
                <div className={styles.workCardInfo}>
                  <span className={styles.workCardTag}>{w.tag}</span>
                  <h3 className={styles.workCardTitle}>{w.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPLORE OTHER BUSINESSES ── */}
      {biz.otherBusinesses.length > 0 && (
        <section className={styles.otherBiz}>
          <div className={styles.inner}>
            <div className={styles.worksSectionHeader}>
              <h2 className={styles.sectionTitle}>Explore Other Business</h2>
              <Link href="/our-business" className={styles.seeAllBtn}>
                View All <IconArrowRight />
              </Link>
            </div>
            <div className={styles.otherBizGrid}>
              {biz.otherBusinesses.map((b, i) => (
                <Link
                  key={i}
                  href={`/our-business/${b.slug}`}
                  className={styles.otherBizCard}
                >
                  <img
                    src={b.img}
                    alt={b.name}
                    className={styles.otherBizImg}
                  />
                  <div className={styles.otherBizOverlay} />
                  <span className={styles.otherBizName}>{b.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className={styles.cta}>
        <div className={styles.ctaBg}>
          <img src={biz.aboutImg} alt="" aria-hidden="true" />
        </div>
        <div className={styles.ctaOverlay} />
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>{biz.ctaTitle}</h2>
          <p className={styles.ctaDesc}>{biz.ctaDesc}</p>
          <div className={styles.ctaBtns}>
            <Link href="/our-works" className={styles.ctaBtnPrimary}>
              Get Started
            </Link>
            <Link href="/about-us" className={styles.ctaBtnSecondary}>
              Learn More
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

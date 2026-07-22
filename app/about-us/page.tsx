'use client';

import styles from './about-us.module.css';
import Link from 'next/link';

/* ── Pure SVG Chevron Down Icon ── */
const IconChevronDown = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M6 9l6 6 6-6" />
  </svg>
);

export default function AboutUsPage() {
  const handleScrollDown = () => {
    const el = document.getElementById("about-grid");
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.container}>
      
      {/* ===================================================
          HERO HEADER SECTION
          =================================================== */}
      <section className={styles.hero} id="hero" aria-label="About Arsalynk Hero">
        {/* Glow/orbital loop ribbon backdrop image */}
        <div className={styles.backgroundImage} aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop"
            alt="Abstract Neon Ribbon Loop"
          />
        </div>

        {/* Blueprint connection overlay */}
        <div className={styles.networkOverlay} aria-hidden="true" />
        <div className={styles.gradientBottom} aria-hidden="true" />

        {/* Content */}
        <div className={styles.heroContent}>
          <span className={styles.heroLabel}>HOME &gt; ABOUT US</span>
          <h1 className={styles.heroTitle}>About Arsalynk</h1>
          <p className={styles.heroDesc}>
            Connecting capabilities across strategy, technology, and execution to solve 
            complex business challenges and deliver lasting value.
          </p>

          <button onClick={handleScrollDown} className={styles.scrollBtn} aria-label="Scroll down">
            <IconChevronDown />
          </button>
        </div>
      </section>

      {/* ===================================================
          3-COLUMN ABOUT US GRID SECTION
          =================================================== */}
      <section id="about-grid" className={styles.gridSection} aria-label="About Us Sections Grid">
        <div className={styles.inner}>
          
          <div className={styles.aboutGrid}>
            {/* Card 1: Corporate Profile */}
            <Link href="/about-us/corporate-profile" className={styles.aboutCard}>
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop"
                alt="Corporate Profile Office Silhouette"
                className={styles.cardBg}
              />
              <div className={styles.cardMask} />
              <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>Corporate<br />Profile</h2>
              </div>
            </Link>

            {/* Card 2: Company Leadership */}
            <Link href="/about-us/company-leadership" className={styles.aboutCard}>
              <img
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600&auto=format&fit=crop"
                alt="Company Leadership Executive Abstract"
                className={styles.cardBg}
              />
              <div className={styles.cardMask} />
              <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>Company<br />Leadership</h2>
              </div>
            </Link>

            {/* Card 3: Ecosystem Philosophy */}
            <Link href="/about-us/ecosystem-philosophy" className={styles.aboutCard}>
              <img
                src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=600&auto=format&fit=crop"
                alt="Ecosystem Philosophy Digital Globe"
                className={styles.cardBg}
              />
              <div className={styles.cardMask} />
              <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>Ecosystem<br />Philosophy</h2>
              </div>
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}

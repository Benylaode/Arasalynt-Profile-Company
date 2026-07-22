'use client';

import styles from './ecosystem-philosophy.module.css';
import BeyondExpectations from '@/components/sections/BeyondExpectations/BeyondExpectations';
import Link from 'next/link';

const IconChevronDown = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const PILLARS = [
  {
    label: "TECHNOLOGY",
    title: "WE BUILD BETTER\nIT SYSTEM",
    desc: "Developing architecture and technology\n& IT infrastructure"
  },
  {
    label: "DATA & ANALYTICS",
    title: "WE UNLOCK INSIGHTFUL\nMEASURABLE DATA",
    desc: "Turning metric into actionable insight\nbusiness and data"
  },
  {
    label: "CREATIVE",
    title: "WE DELIVER EXCELLENT\nCREATIVE EXECUTION",
    desc: "Creating visual communication with\nmeasurable impact"
  }
];

export default function EcosystemPhilosophyPage() {
  const handleScrollDown = () => {
    const el = document.getElementById("content");
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={styles.container}>
      
      {/* ===================================================
          HERO HEADER SECTION
          =================================================== */}
      <section className={styles.hero} id="hero" aria-label="Ecosystem Philosophy Hero">
        <div className={styles.backgroundImage} aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=1600&auto=format&fit=crop"
            alt="Digital Globe"
          />
        </div>
        <div className={styles.networkOverlay} aria-hidden="true" />
        <div className={styles.gradientBottom} aria-hidden="true" />

        <div className={styles.heroContent}>
          <span className={styles.heroLabel}>HOME &gt; ABOUT US &gt; ECOSYSTEM PHILOSOPHY</span>
          <h1 className={styles.heroTitle}>Ecosystem Philosophy</h1>
          <button onClick={handleScrollDown} className={styles.scrollBtn} aria-label="Scroll down">
            <IconChevronDown />
          </button>
        </div>
      </section>

      <div id="content">
        {/* ===================================================
            SPECIALIZED INDUSTRY
            =================================================== */}
        <section className={styles.specializedSection}>
          <div className={styles.inner}>
            <div className={styles.specializedGrid}>
              
              <div className={styles.specializedText}>
                <span className={styles.sectionLabel}>&lt; LEADERSHIP FOUNDATION &gt;</span>
                <h2 className={styles.sectionTitle}>Specialized<br />Industry,<br />Unified Integration</h2>
                <p className={styles.sectionDesc}>
                  We recognized that every specialized industry has its own unique complexities. 
                  Our philosophy is to deliver highly specialized solutions within a unified framework, 
                  allowing businesses to scale with ease and confidence.
                </p>
              </div>

              <div className={styles.specializedImage}>
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop" 
                  alt="Glowing Icon Hand" 
                />
              </div>

            </div>
          </div>
        </section>

        {/* ===================================================
            CROSS-BRAND ECOSYSTEM
            =================================================== */}
        <section className={styles.ecosystemSection}>
          <div className={styles.ecosystemBg} aria-hidden="true" />
          <div className={styles.ecosystemGridOverlay} aria-hidden="true" />
          
          <div className={styles.inner}>
            <div className={styles.ecosystemHeader}>
              <span className={styles.ecoLabel}>&lt; CROSS-BRAND ECOSYSTEM &gt;</span>
              <h2 className={styles.ecoTitle}>
                This is not a collection of individual vendors — it is a synchronized corporate ecosystem designed to strengthen operations, optimize assets, and help businesses execute with confidence.
              </h2>
            </div>

            <div className={styles.pillarsGrid}>
              {PILLARS.map((pillar, i) => (
                <div key={i} className={styles.pillarCard}>
                  <span className={styles.pillarLabel}>{pillar.label}</span>
                  <h3 className={styles.pillarTitle}>
                    <span className={styles.bullet}>•</span>
                    <span>
                      {pillar.title.split('\n').map((line, idx) => (
                        <span key={idx}>{line}<br/></span>
                      ))}
                    </span>
                  </h3>
                  <p className={styles.pillarDesc}>
                    {pillar.desc.split('\n').map((line, idx) => (
                      <span key={idx}>{line}<br/></span>
                    ))}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================
            EXPLORE OTHER INFORMATION
            =================================================== */}
        <section className={styles.exploreSection}>
          <div className={styles.inner}>
            <h2 className={styles.exploreHeading}>Explore Other Information</h2>
            
            <div className={styles.exploreGrid}>
              <Link href="/about-us/company-leadership" className={styles.exploreCard}>
                <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop" alt="Company Leadership" />
                <div className={styles.exploreMask} />
                <h3 className={styles.exploreTitle}>Company Leadership</h3>
              </Link>
              
              <Link href="/about-us/corporate-profile" className={styles.exploreCard}>
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop" alt="Corporate Profile" />
                <div className={styles.exploreMask} />
                <h3 className={styles.exploreTitle}>Corporate Profile</h3>
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* ===================================================
          BEYOND EXPECTATIONS
          =================================================== */}
      <BeyondExpectations />
    </div>
  );
}

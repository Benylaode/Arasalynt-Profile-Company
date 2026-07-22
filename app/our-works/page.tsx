'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './our-works.module.css';

/* ── Pure SVG Icons ── */
const IconChevronDown = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const IconChevronRight = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M9 5l7 7-7 7" />
  </svg>
);

const IconArrowRight = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const PROJECTS = [
  {
    id: 1,
    title: "Company Profile Revamp for X-1 Tire",
    tag: "X-1 TIRE / COMPANY PROFILE",
    category: "Web App",
    slug: "#",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Sinau Print Marketplace Website",
    tag: "SINAU PRINT / MARKETPLACE WEB",
    category: "Web App",
    slug: "sinau-print-semarang",
    image: "https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Live Streaming Event for Sirkuit Nasional Padel 2026",
    tag: "PADEL NASIONAL / LIVE STREAMING",
    category: "IoT System",
    slug: "#",
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Company Profile Revamp for X-1 Tire",
    tag: "X-1 TIRE / COMPANY PROFILE",
    category: "Web App",
    slug: "#",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Sinau Print Marketplace Website",
    tag: "SINAU PRINT / MARKETPLACE WEB",
    category: "Web App",
    slug: "sinau-print-semarang",
    image: "https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Live Streaming Event for Sirkuit Nasional Padel 2026",
    tag: "PADEL NASIONAL / LIVE STREAMING",
    category: "IoT System",
    slug: "#",
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=600&auto=format&fit=crop"
  }
];

export default function OurWorksPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const handleScrollDown = () => {
    const el = document.getElementById("featured-section");
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const filteredProjects = PROJECTS.filter(p => activeCategory === 'All' || p.category === activeCategory);

  return (
    <div className={styles.container}>
      
      {/* ===================================================
          HERO HEADER SECTION
          =================================================== */}
      <section className={styles.hero} id="hero" aria-label="Our Works Hero">
        <div className={styles.backgroundImage} aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop"
            alt="Digital Connected Networks"
          />
        </div>

        <div className={styles.networkOverlay} aria-hidden="true" />
        <div className={styles.gradientBottom} aria-hidden="true" />

        <div className={styles.heroContent}>
          <span className={styles.heroLabel}>HOME &gt; OUR WORKS</span>
          <h1 className={styles.heroTitle}>Our Works</h1>
          <p className={styles.heroDesc}>
            Mendokumentasikan inovasi solusi digital, integrasi sistem, dan transformasi teknologi 
            yang telah kami deliver kepada para klien.
          </p>

          <button onClick={handleScrollDown} className={styles.scrollBtn} aria-label="Scroll down">
            <IconChevronDown />
          </button>
        </div>
      </section>

      {/* ===================================================
          FEATURED CAROUSEL SECTION
          =================================================== */}
      <section id="featured-section" className={styles.featuredSection} aria-label="Featured Works Carousel">
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <span className={styles.accentLabel}>PORTFOLIO HIGHLIGHTS</span>
            <h2 className={styles.carouselTitle}>Amplify Your Business<br />in One Ecosystem</h2>
          </div>

          {/* Slider track row */}
          <div className={styles.sliderContainer}>
            {/* Left Card partially visible */}
            <div className={`${styles.sliderCard} ${styles.sideCard}`} aria-hidden="true">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop"
                alt="Website Mockup Left"
                className={styles.cardBg}
              />
              <div className={styles.cardOverlay} />
            </div>

            {/* Center main Card */}
            <Link href="/our-works/sinau-print-semarang" className={`${styles.sliderCard} ${styles.mainCard}`}>
              <img
                src="https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=800&auto=format&fit=crop"
                alt="Sinau Print Marketplace Website"
                className={styles.cardBg}
              />
              <div className={styles.cardOverlay} />
              <div className={styles.cardInfo}>
                <h3 className={styles.cardTitleText}>Sinau Print Marketplace Website</h3>
                <span className={styles.cardTagText}>WEB SYSTEM / E-COMMERCE</span>
              </div>
            </Link>

            {/* Right Card partially visible */}
            <div className={`${styles.sliderCard} ${styles.sideCard}`} aria-hidden="true">
              <img
                src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=600&auto=format&fit=crop"
                alt="Website Mockup Right"
                className={styles.cardBg}
              />
              <div className={styles.cardOverlay} />
            </div>

            {/* Navigation arrows overlay */}
            <button className={`${styles.navArrow} ${styles.leftArrow}`} aria-label="Previous slide">&lt;</button>
            <button className={`${styles.navArrow} ${styles.rightArrow}`} aria-label="Next slide">&gt;</button>
          </div>

        </div>
      </section>

      {/* ===================================================
          EXPLORE BEST WORKS GRID SECTION
          =================================================== */}
      <section className={styles.exploreSection} aria-label="Explore Best Works">
        <div className={styles.inner}>
          
          <div className={styles.exploreHeader}>
            <h2 className={styles.exploreTitle}>Explore Arsalynk<br />Best Works</h2>
            
            {/* Filter Tabs */}
            <div className={styles.tabs}>
              {['All', 'Web App', 'Mobile App', 'IoT System'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`${styles.tabBtn} ${activeCategory === cat ? styles.activeTab : ''}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* 2-Column Grid */}
          <div className={styles.grid}>
            {filteredProjects.map((p) => (
              <Link 
                key={p.id} 
                href={p.slug !== "#" ? `/our-works/${p.slug}` : "#"} 
                className={styles.gridCard}
              >
                <img src={p.image} alt={p.title} className={styles.gridCardBg} />
                <div className={styles.gridCardMask} />
                
                <div className={styles.gridCardContent}>
                  <div className={styles.gridCardText}>
                    <h3 className={styles.gridCardTitle}>{p.title}</h3>
                    <span className={styles.gridCardTag}>{p.tag}</span>
                  </div>
                  
                  {/* Circle arrow button */}
                  <div className={styles.circleBtn}>
                    <IconChevronRight size={12} />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Load More Button */}
          <div className={styles.loadMoreWrapper}>
            <button className={styles.loadMoreBtn}>LOAD MORE</button>
          </div>

        </div>
      </section>

      {/* ===================================================
          BOTTOM CTA BANNER SECTION
          =================================================== */}
      <section className={styles.ctaSection} aria-label="See What Artic Analytica Can Do">
        {/* Glow overlay */}
        <div className={styles.ctaGlow} aria-hidden="true" />
        
        <div className={styles.inner}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaHeading}>See What Artic Analytica Can Do</h2>
            <p className={styles.ctaDesc}>
              Optimalkan sistem informasi dan analisis data korporasi Anda untuk pertumbuhan maksimal.
            </p>
            <div className={styles.ctaButtons}>
              <a href="#contact" className={styles.ctaPillBtn}>
                GET STARTED <IconArrowRight size={12} />
              </a>
              <a href="/our-business" className={styles.ctaOutlineBtn}>
                OTHER BUSINESS
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

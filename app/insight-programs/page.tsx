'use client';

import { useState } from 'react';
import styles from './insight-programs.module.css';
import GrowthMetrics from '@/components/sections/GrowthMetrics/GrowthMetrics';

/* ── Pure SVG Icons ── */
const IconChevronDown = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const IconChevronRight = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M9 5l7 7-7 7" />
  </svg>
);

const IconSearch = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <circle cx="11" cy="11" r="8" />
    <path d="M21 21l-4.35-4.35" />
  </svg>
);

const CASE_STUDIES = [
  {
    id: 1,
    title: "How We Built an Election Data Tracking System",
    category: "WEB DEVELOPMENT",
    brand: "Adsvar",
    desc: "A highly resilient cloud database and tracking system built to handle millions of real-time data inputs securely during national polls.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Modernizing Operations with Enterprise IoT",
    category: "IOT INTEGRATION",
    brand: "Kaluna Technology",
    desc: "Deploying automated telemetry sensors and hardware controllers across high-scale manufacturing factories for real-time asset monitoring.",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "How We Broadcasted PBSI Sirnas Jawa Tengah",
    category: "LIVE BROADCAST",
    brand: "LoxLive",
    desc: "Providing zero-latency live production, multiple angle camera setups, and cloud mixing software for Indonesian national badminton matches.",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Modernizing Operations with Enterprise IoT",
    category: "IOT INTEGRATION",
    brand: "Kaluna Technology",
    desc: "Deploying automated telemetry sensors and hardware controllers across high-scale manufacturing factories for real-time asset monitoring.",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "How We Built an Election Data Tracking System",
    category: "WEB DEVELOPMENT",
    brand: "Adsvar",
    desc: "A highly resilient cloud database and tracking system built to handle millions of real-time data inputs securely during national polls.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "How We Broadcasted PBSI Sirnas Jawa Tengah",
    category: "LIVE BROADCAST",
    brand: "LoxLive",
    desc: "Providing zero-latency live production, multiple angle camera setups, and cloud mixing software for Indonesian national badminton matches.",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 7,
    title: "How We Built an Election Data Tracking System",
    category: "WEB DEVELOPMENT",
    brand: "Adsvar",
    desc: "A highly resilient cloud database and tracking system built to handle millions of real-time data inputs securely during national polls.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 8,
    title: "Modernizing Operations with Enterprise IoT",
    category: "IOT INTEGRATION",
    brand: "Kaluna Technology",
    desc: "Deploying automated telemetry sensors and hardware controllers across high-scale manufacturing factories for real-time asset monitoring.",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 9,
    title: "How We Broadcasted PBSI Sirnas Jawa Tengah",
    category: "LIVE BROADCAST",
    brand: "LoxLive",
    desc: "Providing zero-latency live production, multiple angle camera setups, and cloud mixing software for Indonesian national badminton matches.",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=600&auto=format&fit=crop"
  }
];

export default function InsightProgramsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');

  const handleScrollDown = () => {
    const el = document.getElementById("explore-cases");
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const filteredCases = CASE_STUDIES.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.brand.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilter === 'All' || item.category === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className={styles.container}>
      
      {/* ===================================================
          HERO HEADER SECTION
          =================================================== */}
      <section className={styles.hero} id="hero" aria-label="Insight & Programs Hero">
        <div className={styles.backgroundImage} aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop"
            alt="Professional Live Recording Gimbal"
          />
        </div>

        <div className={styles.networkOverlay} aria-hidden="true" />
        <div className={styles.gradientBottom} aria-hidden="true" />

        <div className={styles.heroContent}>
          <span className={styles.heroLabel}>OUR SUCCESS STORIES</span>
          <h1 className={styles.heroTitle}>Case Studies</h1>
          <p className={styles.heroDesc}>
            Eksplorasi proyek-proyek inovatif yang kami kerjakan untuk mendampingi transformasi digital para mitra industri.
          </p>

          <button onClick={handleScrollDown} className={styles.scrollBtn} aria-label="Scroll down">
            <IconChevronDown />
          </button>
        </div>
      </section>

      {/* ===================================================
          FEATURED CASE STUDY CARD (LARGE BOX)
          =================================================== */}
      <section className={styles.featuredSection} aria-label="Featured Case Study">
        <div className={styles.inner}>
          <div className={styles.featuredCard}>
            <img
              src="https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=1200&auto=format&fit=crop"
              alt="National Badminton Stadium Court Match"
              className={styles.featuredBg}
            />
            <div className={styles.featuredMask} />

            <div className={styles.featuredContent}>
              <span className={styles.featuredTag}>LOXLIVE / LIVE BROADCAST</span>
              <h2 className={styles.featuredTitle}>
                Delivering a Seamless National Badminton Championship Experience
              </h2>
              
              {/* Pagination controls at bottom right */}
              <div className={styles.featuredFooter}>
                <div className={styles.paginationDots}>
                  <span className={`${styles.dot} ${styles.activeDot}`} />
                  <span className={styles.dot} />
                  <span className={styles.dot} />
                </div>
                <div className={styles.paginationArrows}>
                  <button className={styles.arrowBtn} aria-label="Previous featured study">&lt;</button>
                  <button className={styles.arrowBtn} aria-label="Next featured study">&gt;</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          EXPLORE GRID SECTION
          =================================================== */}
      <section id="explore-cases" className={styles.exploreSection} aria-label="Explore Case Studies Grid">
        <div className={styles.inner}>
          
          {/* Header Row with Search and Filters */}
          <div className={styles.exploreHeader}>
            <h2 className={styles.exploreTitle}>Explore Case Studies</h2>
            
            <div className={styles.filterControls}>
              {/* Search Box */}
              <div className={styles.searchWrapper}>
                <input
                  type="text"
                  placeholder="Search Case..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={styles.searchInput}
                />
                <span className={styles.searchIcon}>
                  <IconSearch size={14} />
                </span>
              </div>

              {/* Filter Select Box */}
              <div className={styles.selectWrapper}>
                <select
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  className={styles.selectInput}
                >
                  <option value="All">Filter by Category</option>
                  <option value="WEB DEVELOPMENT">Web Development</option>
                  <option value="IOT INTEGRATION">IoT Integration</option>
                  <option value="LIVE BROADCAST">Live Broadcast</option>
                </select>
                <span className={styles.selectChevron}>
                  <IconChevronDown size={12} />
                </span>
              </div>
            </div>
          </div>

          {/* 3-Column Grid */}
          <div className={styles.grid}>
            {filteredCases.map((item) => (
              <div key={item.id} className={styles.card}>
                <div className={styles.cardImageWrapper}>
                  <img src={item.image} alt={item.title} className={styles.cardImg} />
                </div>
                
                <div className={styles.cardInfo}>
                  <div className={styles.cardMeta}>
                    <span className={styles.cardBrand}>{item.brand}</span>
                    <span className={styles.cardCategory}>{item.category}</span>
                  </div>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDesc}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {filteredCases.length > 0 && (
            <div className={styles.loadMoreWrapper}>
              <button className={styles.loadMoreBtn}>
                LOAD MORE <IconChevronRight size={12} />
              </button>
            </div>
          )}

        </div>
      </section>

      {/* Operations Metrics & Advisory Sections */}
      <GrowthMetrics />

    </div>
  );
}

'use client';

import { useState, useRef } from 'react';
import styles from './ProjectShowcase.module.css';

/* ── Pure SVG Icons ── */
const IconArrowRight = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const IconChevronLeft = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const IconChevronRight = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M9 18l6-6-6-6" />
  </svg>
);

/* ── Hardcoded Premium Project Data ── */
const MOCK_PROJECTS = [
  {
    id: 1,
    client: "SINAR PRINT",
    title: "Sinar Print Marketplace Website",
    category: "Web App",
    desc: "A custom B2B marketplace platform for industrial printing needs with real-time order management.",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    client: "K-SUBHUB",
    title: "Company Profile for K-Subhub",
    category: "Web App",
    desc: "Premium corporate presentation site highlighting automated subscription services and integrations.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    client: "NAVICOM",
    title: "Smart Home Management System",
    category: "IT Infrastructure",
    desc: "Integrated dashboard regulating connected smart appliances and security sensors across thousands of units.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    client: "KORLANTAS POLRI",
    title: "E-Drives for Korlantas Polri",
    category: "IT Infrastructure",
    desc: "Backend and IoT integration system for national vehicle registration and licensing digital platform.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop",
  },
];

const CATEGORIES = ["All", "Web App", "Mobile App", "IT Infrastructure"];

export default function ProjectShowcase() {
  const [activeCategory, setActiveCategory] = useState("All");
  const scrollRef = useRef<HTMLDivElement>(null);

  const filteredProjects = activeCategory === "All"
    ? MOCK_PROJECTS
    : MOCK_PROJECTS.filter(p => p.category === activeCategory);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.section} id="portfolio" aria-label="We Build It All">
      <div className={styles.inner}>
        
        {/* Top Header Row */}
        <div className={styles.headerRow}>
          <div>
            <div className={styles.sectionLabel}>
              <span className={styles.dot} />
              <span className={styles.labelText}>PORTFOLIO</span>
            </div>
            <h2 className={styles.heading}>We Build It All</h2>
          </div>

          {/* Category Tabs */}
          <div className={styles.filtersContainer}>
            <div className={styles.tabs}>
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`${styles.tabButton} ${activeCategory === cat ? styles.activeTab : ''}`}
                  type="button"
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Slider arrows next to tabs */}
            <div className={styles.arrowsWrap}>
              <button onClick={() => scrollCarousel('left')} className={styles.arrowBtn} aria-label="Previous">
                <IconChevronLeft size={16} />
              </button>
              <button onClick={() => scrollCarousel('right')} className={styles.arrowBtn} aria-label="Next">
                <IconChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Tracks */}
        <div className={styles.carouselWrapper}>
          <div className={styles.track} ref={scrollRef}>
            {filteredProjects.map((project) => (
              <a
                key={project.id}
                href={`/works/${project.id}`}
                className={styles.card}
              >
                {/* Image Backdrop */}
                <img
                  src={project.image}
                  alt={project.title}
                  className={styles.cardBgImage}
                />
                
                {/* Dark Gradient Overlay */}
                <div className={styles.overlay} />

                {/* Card Info Content */}
                <div className={styles.cardContent}>
                  <div>
                    <span className={styles.tag}>{project.category}</span>
                  </div>
                  <div>
                    <p className={styles.clientName}>{project.client}</p>
                    <h3 className={styles.cardTitle}>{project.title}</h3>
                    <div className={styles.exploreLink}>
                      Explore <IconArrowRight size={12} />
                    </div>
                  </div>
                </div>
              </a>
            ))}

            {/* See All Card at the end */}
            <a href="/works" className={styles.seeAllCard}>
              <div className={styles.seeAllCircle}>
                <IconArrowRight size={18} />
              </div>
              <span className={styles.seeAllText}>See All<br />Projects</span>
            </a>
          </div>
        </div>

        {/* Bottom Description */}
        <div className={styles.bottom}>
          <p className={styles.bottomDescription}>
            From enterprise web portals to high-performance analytics systems, we build solutions 
            that deliver exceptional user experiences and robust, scalable backend operations.
          </p>
        </div>

      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';
import styles from './leadership-thoughts.module.css';

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

const IconChevronLeft = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

/* ── Leadership Thought Articles ── */
const LEADERSHIP_THOUGHTS = [
  {
    id: 1,
    title: "Building High-Performance Teams Starts with Trust, Not Control",
    category: "LEADERSHIP INSIGHTS",
    author: "Arsalynt Executive Team",
    readTime: "6 min read",
    date: "July 2026",
    desc: "The most effective leaders don't manage from a position of authority — they create environments where trust becomes the operating system of performance.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=900&auto=format&fit=crop",
    featured: true,
  },
  {
    id: 2,
    title: "Why We Prioritize Process Before Technology",
    category: "STRATEGIC THINKING",
    author: "Arsalynt Executive Team",
    readTime: "5 min read",
    date: "June 2026",
    desc: "Investing in technology without a solid operational foundation is like building a skyscraper on sand. Here's how we help organisations get the order right.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=900&auto=format&fit=crop",
    featured: true,
  },
  {
    id: 3,
    title: "Lessons from Scaling Cross-Functional Collaboration",
    category: "ORGANISATIONAL GROWTH",
    author: "Arsalynt Executive Team",
    readTime: "7 min read",
    date: "June 2026",
    desc: "Scaling a business isn't just about hiring more people — it's about designing systems that allow teams across disciplines to work as one unified force.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=900&auto=format&fit=crop",
    featured: true,
  },
  {
    id: 4,
    title: "Why We Prioritize Process Before Technology",
    category: "STRATEGIC THINKING",
    author: "Arsalynt Executive Team",
    readTime: "5 min read",
    date: "May 2026",
    desc: "Investing in technology without a solid operational foundation is like building a skyscraper on sand. Here's how we help organisations get the order right.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=900&auto=format&fit=crop",
    featured: false,
  },
  {
    id: 5,
    title: "Building High-Performance Teams Starts with Trust, No...",
    category: "LEADERSHIP INSIGHTS",
    author: "Arsalynt Executive Team",
    readTime: "6 min read",
    date: "May 2026",
    desc: "The most effective leaders don't manage from a position of authority — they create environments where trust becomes the operating system of performance.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=900&auto=format&fit=crop",
    featured: false,
  },
  {
    id: 6,
    title: "Lessons from Scaling Cross-Functional Collaboration",
    category: "ORGANISATIONAL GROWTH",
    author: "Arsalynt Executive Team",
    readTime: "7 min read",
    date: "April 2026",
    desc: "Scaling a business isn't just about hiring more people — it's about designing systems that allow teams across disciplines to work as one unified force.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=900&auto=format&fit=crop",
    featured: false,
  },
  {
    id: 7,
    title: "Building High-Performance Teams Starts with Trust, No...",
    category: "LEADERSHIP INSIGHTS",
    author: "Arsalynt Executive Team",
    readTime: "6 min read",
    date: "April 2026",
    desc: "The most effective leaders don't manage from a position of authority — they create environments where trust becomes the operating system of performance.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=900&auto=format&fit=crop",
    featured: false,
  },
  {
    id: 8,
    title: "Lessons from Scaling Cross-Functional Collaboration",
    category: "ORGANISATIONAL GROWTH",
    author: "Arsalynt Executive Team",
    readTime: "7 min read",
    date: "March 2026",
    desc: "Scaling a business isn't just about hiring more people — it's about designing systems that allow teams across disciplines to work as one unified force.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=900&auto=format&fit=crop",
    featured: false,
  },
  {
    id: 9,
    title: "Why We Prioritize Process Before Technology",
    category: "STRATEGIC THINKING",
    author: "Arsalynt Executive Team",
    readTime: "5 min read",
    date: "March 2026",
    desc: "Investing in technology without a solid operational foundation is like building a skyscraper on sand. Here's how we help organisations get the order right.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=900&auto=format&fit=crop",
    featured: false,
  },
];

const ALL_CATEGORIES = ['All', 'LEADERSHIP INSIGHTS', 'STRATEGIC THINKING', 'ORGANISATIONAL GROWTH'];

const CATEGORY_COLORS: Record<string, string> = {
  'LEADERSHIP INSIGHTS': '#2563EB',
  'STRATEGIC THINKING': '#7C3AED',
  'ORGANISATIONAL GROWTH': '#059669',
};

const FEATURED_ARTICLES = LEADERSHIP_THOUGHTS.filter((a) => a.featured);
const PAGE_SIZE = 6;

export default function LeadershipThoughtsPage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const handleScrollDown = () => {
    const el = document.getElementById('explore-thoughts');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePrev = () =>
    setActiveSlide((prev) => (prev === 0 ? FEATURED_ARTICLES.length - 1 : prev - 1));

  const handleNext = () =>
    setActiveSlide((prev) => (prev === FEATURED_ARTICLES.length - 1 ? 0 : prev + 1));

  const filteredArticles = LEADERSHIP_THOUGHTS.filter((a) =>
    selectedCategory === 'All' ? true : a.category === selectedCategory
  );

  const visibleArticles = filteredArticles.slice(0, visibleCount);
  const hasMore = visibleCount < filteredArticles.length;

  const featured = FEATURED_ARTICLES[activeSlide];

  return (
    <div className={styles.container}>

      {/* ===================================================
          HERO HEADER SECTION
          =================================================== */}
      <section className={styles.hero} id="hero" aria-label="Leadership Thoughts Hero">
        <div className={styles.backgroundImage} aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop"
            alt="Leadership team discussion"
          />
        </div>
        <div className={styles.networkOverlay} aria-hidden="true" />
        <div className={styles.gradientBottom} aria-hidden="true" />

        <div className={styles.heroContent}>
          <span className={styles.heroLabel}>ARSALYNT PERSPECTIVE</span>
          <h1 className={styles.heroTitle}>Leadership Thoughts</h1>
          <p className={styles.heroDesc}>
            Perspectives, principles, and insights from the Arsalynt leadership team —
            shaping the way we think about business, technology, and human potential.
          </p>
          <button onClick={handleScrollDown} className={styles.scrollBtn} aria-label="Scroll down">
            <IconChevronDown />
          </button>
        </div>
      </section>

      {/* ===================================================
          FEATURED ARTICLE SLIDER
          =================================================== */}
      <section className={styles.featuredSection} aria-label="Featured Thought">
        <div className={styles.inner}>
          <div className={styles.featuredCard}>
            {/* Background image */}
            <img
              src={featured.image}
              alt={featured.title}
              className={styles.featuredBg}
            />
            <div className={styles.featuredMask} />

            <div className={styles.featuredContent}>
              <span className={styles.featuredTag}>{featured.category}</span>
              <h2 className={styles.featuredTitle}>{featured.title}</h2>
              <p className={styles.featuredDesc}>{featured.desc}</p>

              <div className={styles.featuredFooter}>
                {/* Pagination Dots */}
                <div className={styles.paginationDots}>
                  {FEATURED_ARTICLES.map((_, i) => (
                    <button
                      key={i}
                      className={`${styles.dot} ${i === activeSlide ? styles.activeDot : ''}`}
                      onClick={() => setActiveSlide(i)}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>

                {/* Arrow Controls */}
                <div className={styles.paginationArrows}>
                  <button className={styles.arrowBtn} onClick={handlePrev} aria-label="Previous article">
                    <IconChevronLeft />
                  </button>
                  <button className={styles.arrowBtn} onClick={handleNext} aria-label="Next article">
                    <IconChevronRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          EXPLORE THOUGHTS GRID
          =================================================== */}
      <section id="explore-thoughts" className={styles.exploreSection} aria-label="Explore Leadership Thoughts">
        <div className={styles.inner}>

          {/* Header Row with Category Tabs + Sort */}
          <div className={styles.exploreHeader}>
            <h2 className={styles.exploreTitle}>Explore Our Thoughts</h2>

            <div className={styles.filterControls}>
              {/* Category Filter Pills */}
              <div className={styles.categoryPills}>
                {ALL_CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    className={`${styles.pill} ${selectedCategory === cat ? styles.pillActive : ''}`}
                    onClick={() => { setSelectedCategory(cat); setVisibleCount(PAGE_SIZE); }}
                  >
                    {cat === 'All' ? 'All Topics' : cat}
                  </button>
                ))}
              </div>

              {/* Sort Label */}
              <div className={styles.sortLabel}>
                <span>Latest</span>
                <IconChevronDown size={12} />
              </div>
            </div>
          </div>

          {/* 3-Column Grid */}
          <div className={styles.grid}>
            {visibleArticles.map((article) => (
              <article key={article.id} className={styles.card}>
                <div className={styles.cardImageWrapper}>
                  <img src={article.image} alt={article.title} className={styles.cardImg} />
                  <span
                    className={styles.cardCategoryBadge}
                    style={{ backgroundColor: CATEGORY_COLORS[article.category] ?? '#2563EB' }}
                  >
                    {article.category}
                  </span>
                </div>

                <div className={styles.cardInfo}>
                  <div className={styles.cardMeta}>
                    <span className={styles.cardAuthor}>{article.author}</span>
                    <span className={styles.cardDate}>{article.date}</span>
                  </div>
                  <h3 className={styles.cardTitle}>{article.title}</h3>
                  <p className={styles.cardDesc}>{article.desc}</p>
                  <div className={styles.cardFooter}>
                    <span className={styles.cardReadTime}>{article.readTime}</span>
                    <button className={styles.cardReadMore} aria-label={`Read ${article.title}`}>
                      Read More <IconChevronRight size={11} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          {hasMore && (
            <div className={styles.loadMoreWrapper}>
              <button
                className={styles.loadMoreBtn}
                onClick={() => setVisibleCount((v) => v + PAGE_SIZE)}
              >
                LOAD MORE <IconChevronRight size={12} />
              </button>
            </div>
          )}

        </div>
      </section>

    </div>
  );
}

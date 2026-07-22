'use client';

import styles from './company-leadership.module.css';
import BeyondExpectations from '@/components/sections/BeyondExpectations/BeyondExpectations';
import Link from 'next/link';

const IconChevronDown = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const PRINCIPLES = [
  {
    title: "Technical\nExcellence",
    desc: "We pursue superiority in every code, architecture, and system we deliver.",
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    )
  },
  {
    title: "ROI-First\nExecution",
    desc: "Every deployment is designed to generate measurable business value and capital efficiency.",
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        <path d="M12 8v4l3 3"/>
      </svg>
    )
  },
  {
    title: "Cross-Disciplinary\nExpertise",
    desc: "Silos are eliminated. We integrate expertise from multiple fields for complete solutions.",
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <polyline points="10 9 9 9 8 9"></polyline>
      </svg>
    )
  },
  {
    title: "Redundant\nLeadership",
    desc: "Building self-sustaining systems where teams lead and operate without single points of failure.",
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    )
  }
];

export default function CompanyLeadershipPage() {
  const handleScrollDown = () => {
    const el = document.getElementById("content");
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={styles.container}>
      
      {/* ===================================================
          HERO HEADER SECTION
          =================================================== */}
      <section className={styles.hero} id="hero" aria-label="Company Leadership Hero">
        <div className={styles.backgroundImage} aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1600&auto=format&fit=crop"
            alt="Executive Abstract"
          />
        </div>
        <div className={styles.networkOverlay} aria-hidden="true" />
        <div className={styles.gradientBottom} aria-hidden="true" />

        <div className={styles.heroContent}>
          <span className={styles.heroLabel}>HOME &gt; ABOUT US &gt; COMPANY LEADERSHIP</span>
          <h1 className={styles.heroTitle}>Company Leadership</h1>
          <button onClick={handleScrollDown} className={styles.scrollBtn} aria-label="Scroll down">
            <IconChevronDown />
          </button>
        </div>
      </section>

      <div id="content">
        {/* ===================================================
            LEADERSHIP FOUNDATION
            =================================================== */}
        <section className={styles.foundationSection}>
          <div className={styles.inner}>
            <div className={styles.foundationGrid}>
              
              <div className={styles.foundationText}>
                <span className={styles.sectionLabel}>&lt; LEADERSHIP FOUNDATION &gt;</span>
                <h2 className={styles.sectionTitle}>Leading with<br />Expertise and<br />Purpose</h2>
                <p className={styles.sectionDesc}>
                  Executive officers driving the Arsalynk strategy towards an integrated future. 
                  We believe that strong leadership requires a delicate balance of deep technical mastery, 
                  relentless execution, and a clear vision for sustainable business scalability.
                </p>
              </div>

              <div className={styles.foundationImage}>
                <img 
                  src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop" 
                  alt="Executive Leader" 
                />
              </div>

            </div>
          </div>
        </section>

        {/* ===================================================
            MEETING POINTS SLIDER (STATIC FOR NOW)
            =================================================== */}
        <section className={styles.meetingPointsSection}>
          <div className={styles.meetingPointsBg}>
            <img 
              src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1600&auto=format&fit=crop" 
              alt="Live Event Crowd" 
            />
          </div>
          <div className={styles.meetingPointsOverlay} />

          <div className={styles.inner}>
            <div className={styles.meetingPointsContent}>
              <span className={styles.mpLabel}>&lt; MEETING POINTS &gt;</span>
              <h2 className={styles.mpQuote}>
                By combining technical precision with a commitment to client success, 
                Arsalynk Group delivers reliable, predictable, and results-driven execution.
              </h2>

              <div className={styles.mpControls}>
                <button className={styles.mpArrow}>&lt;</button>
                <span className={styles.mpPagination}>1 / 3</span>
                <button className={styles.mpArrow}>&gt;</button>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================
            LEADERSHIP PRINCIPLES
            =================================================== */}
        <section className={styles.principlesSection}>
          <div className={styles.inner}>
            <div className={styles.sectionHeaderCentered}>
              <span className={styles.sectionLabel}>&lt; LEADERSHIP PRINCIPLES &gt;</span>
              <h2 className={styles.sectionTitle}>The Standards That<br />Guide Every Decision</h2>
            </div>

            <div className={styles.principlesGrid}>
              {PRINCIPLES.map((item, i) => (
                <div key={i} className={styles.principleCard}>
                  <div className={styles.principleIcon}>
                    {item.icon}
                  </div>
                  <h3 className={styles.principleTitle}>
                    {item.title.split('\n').map((line, idx) => (
                      <span key={idx}>{line}<br/></span>
                    ))}
                  </h3>
                  <p className={styles.principleDesc}>{item.desc}</p>
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
              <Link href="/about-us/corporate-profile" className={styles.exploreCard}>
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop" alt="Corporate Profile" />
                <div className={styles.exploreMask} />
                <h3 className={styles.exploreTitle}>Corporate Profile</h3>
              </Link>
              
              <Link href="/about-us/ecosystem-philosophy" className={styles.exploreCard}>
                <img src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=800&auto=format&fit=crop" alt="Ecosystem Philosophy" />
                <div className={styles.exploreMask} />
                <h3 className={styles.exploreTitle}>Ecosystem Philosophy</h3>
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

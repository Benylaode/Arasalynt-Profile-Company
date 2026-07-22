import React from 'react';
import Link from 'next/link';
import styles from './article.module.css';

const IconArrowRight = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export default function CaseStudyDetailPage({ params }: { params: { slug: string } }) {
  // We mock the content based on the "Delivering a Seamless National Badminton Championship Experience" reference.

  return (
    <div className={styles.container}>
      {/* HEADER */}
      <header className={styles.header}>
        <div className={styles.breadcrumb}>HOME &gt; INSIGHT PROGRAMS &gt; CASE STUDIES &gt;</div>
        <h1 className={styles.title}>Delivering a Seamless National Badminton Championship Experience</h1>
        <div className={styles.tags}>
          <span className={styles.tag}>PADEL NASIONAL</span>
          <span className={styles.tag}>LIVE STREAMING</span>
        </div>
      </header>

      {/* HERO IMAGE */}
      <div className={styles.heroImageContainer}>
        <img 
          src="https://images.unsplash.com/photo-1599577180579-2470e8ed3233?q=80&w=1600&auto=format&fit=crop" 
          alt="Badminton Match Venue" 
          className={styles.heroImage} 
        />
      </div>

      {/* MAIN CONTENT */}
      <main className={styles.mainContent}>
        
        <h2 className={styles.sectionTitle}>Bringing Every Match to Audiences Nationwide</h2>
        <p className={styles.textBlock}>
          Organizing a national-scale sporting event requires seamless coordination, high-quality production, and reliable broadcast technology to ensure fans across the country can engage with the tournament. We partnered with the organizers to deliver a comprehensive live broadcasting and media production solution.
        </p>

        <img 
          src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop" 
          alt="Broadcast Monitoring" 
          className={styles.contentImage}
        />

        <h3 className={styles.subHeading}>Broadcasting Every Match Without Compromise</h3>
        <p className={styles.textBlock}>
          With multiple courts running simultaneously, our challenge was to ensure that not a single moment of action was missed. We deployed a robust, multi-court streaming architecture with centralized mixing and live graphics integration to provide a premium viewing experience comparable to international sports broadcasts.
        </p>

        <h3 className={styles.subHeading}>Professional Production From Court to Screen</h3>
        
        <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '8px' }}>Multi-Camera Production</h4>
        <p className={styles.textBlock}>
          Each court featured a dedicated multi-camera setup covering wide angles and tight action shots, seamlessly switching to capture player emotions, fast-paced rallies, and crucial referee decisions.
        </p>

        <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '8px' }}>Live Broadcast Direction</h4>
        <p className={styles.textBlock}>
          Our technical directors and producers worked in real-time to overlay scores, player statistics, and sponsor graphics, ensuring a continuous and highly professional output for the audience watching from home.
        </p>

        <img 
          src="https://images.unsplash.com/photo-1601506521793-dc748fc80b67?q=80&w=1200&auto=format&fit=crop" 
          alt="Live Broadcast System Monitor" 
          className={styles.contentImage}
        />

        <h3 className={styles.subHeading}>A Championship Experienced Beyond the Venue</h3>
        <p className={styles.textBlock}>
          The resulting production achieved record-breaking viewership numbers across online platforms. By delivering a flawless live stream, we helped expand the championship's reach far beyond the physical venue, bringing the excitement of national badminton directly to fans' living rooms.
        </p>
      </main>

      {/* OTHER CASE STUDIES */}
      <section className={styles.otherSection}>
        <div className={styles.otherInner}>
          <div className={styles.otherHeader}>
            <h2 className={styles.otherTitle}>Other Case Studies</h2>
            <div className={styles.navButtons}>
              <button className={styles.navBtn} aria-label="Previous">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg>
              </button>
              <button className={styles.navBtn} aria-label="Next">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>
              </button>
            </div>
          </div>

          <div className={styles.grid}>
            <Link href="/insight-programs" className={styles.card}>
              <div className={styles.cardImgWrapper}>
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop" alt="Data Tracking" className={styles.cardImg} />
              </div>
              <span className={styles.cardTag}>DATA</span>
              <h3 className={styles.cardTitle}>How We Built an Election Data Tracking System</h3>
              <p className={styles.cardDesc}>Delivering real-time data visualization and processing architecture for critical public events.</p>
            </Link>

            <Link href="/insight-programs" className={styles.card}>
              <div className={styles.cardImgWrapper}>
                <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop" alt="Enterprise IoT" className={styles.cardImg} />
              </div>
              <span className={styles.cardTag}>IOT</span>
              <h3 className={styles.cardTitle}>Modernizing Operations with Enterprise IoT</h3>
              <p className={styles.cardDesc}>Connecting physical assets to cloud infrastructure for predictive maintenance and insights.</p>
            </Link>

            <Link href="/insight-programs" className={styles.card}>
              <div className={styles.cardImgWrapper}>
                <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=600&auto=format&fit=crop" alt="PBPI Broadcasting" className={styles.cardImg} />
              </div>
              <span className={styles.cardTag}>LIVE STREAMING</span>
              <h3 className={styles.cardTitle}>How We Broadcasted PBPI Sirnas Jawa Tengah</h3>
              <p className={styles.cardDesc}>End-to-end event coverage and multi-platform distribution for regional sports tournaments.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaGlow} />
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Build Your Own Digital Marketplace with Us</h2>
          <div className={styles.ctaButtons}>
            <a href="#contact" className={styles.ctaBtnPrimary}>
              GET STARTED <IconArrowRight size={14} />
            </a>
            <a href="/insight-programs" className={styles.ctaBtnOutline}>
              OTHER CASE STUDIES
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

import React from 'react';
import Link from 'next/link';
import styles from './article.module.css';

const IconArrowRight = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export default function LeadershipThoughtDetailPage({ params }: { params: { slug: string } }) {
  // We mock the content based on the "Building High-Performance Teams Starts with Trust, Not Control" reference.

  return (
    <div className={styles.container}>
      {/* HEADER */}
      <header className={styles.header}>
        <div className={styles.breadcrumb}>HOME &gt; LEADERSHIP THOUGHTS &gt; INSIGHTS &gt;</div>
        <h1 className={styles.title}>Building High-Performance Teams Starts with Trust, Not Control</h1>
        <div className={styles.tags}>
          <span className={styles.tag}>LEADERSHIP</span>
          <span className={styles.tag}>CULTURE</span>
          <span className={styles.tag}>MANAGEMENT</span>
        </div>
      </header>

      {/* HERO IMAGE */}
      <div className={styles.heroImageContainer}>
        <img 
          src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1600&auto=format&fit=crop" 
          alt="Silhouette of business people" 
          className={styles.heroImage} 
        />
      </div>

      {/* MAIN CONTENT */}
      <main className={styles.mainContent}>
        
        <h2 className={styles.sectionTitle}>Trust Begins with Clarity</h2>
        <p className={styles.textBlock}>
          A high-performance culture is not built on micromanagement or constant surveillance. It is built on trust, which stems from clarity of purpose, alignment of goals, and the empowerment of individuals to make decisions. When leaders focus on defining the "what" and the "why," leaving the "how" to their teams, they unlock unprecedented levels of innovation and ownership.
        </p>
        <p className={styles.textBlock}>
          Trust is not a passive state; it requires active communication, vulnerability from leadership, and a safe environment where taking calculated risks is encouraged rather than penalized.
        </p>

        <img 
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop" 
          alt="Team assembling puzzle" 
          className={styles.contentImage}
        />

        <h3 className={styles.subHeading}>Ownership Over Micromanagement</h3>
        <p className={styles.textBlock}>
          When individuals are given autonomy, they naturally assume greater responsibility. Leaders must shift their mindset from controlling outcomes to coaching their teams toward them. Providing regular, constructive feedback and removing roadblocks is far more effective than monitoring every step of the process.
        </p>

        <h3 className={styles.subHeading}>Mistakes Are Opportunities to Improve</h3>
        
        {/* Keeping the text exactly as the mockup image had it as requested/observed */}
        <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '8px' }}>Multi-Camera Production</h4>
        <p className={styles.textBlock}>
          A culture that fears failure is a culture that stagnates. High-performance teams understand that mistakes are an inevitable part of pushing boundaries. By conducting blameless post-mortems and focusing on systemic improvements rather than individual blame, organizations can turn failures into their most valuable learning opportunities.
        </p>

        <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '8px' }}>Building Trust Through Transparency</h4>
        <p className={styles.textBlock}>
          Transparency in decision-making, financial health, and company strategy eliminates rumors and builds a cohesive unit. When team members understand the broader context of their work, they are better equipped to make autonomous decisions that align with the organization's overarching goals.
        </p>

        <img 
          src="https://images.unsplash.com/photo-1601506521793-dc748fc80b67?q=80&w=1200&auto=format&fit=crop" 
          alt="Live Broadcast System Monitor" 
          className={styles.contentImage}
        />

        <h3 className={styles.subHeading}>A Championship Experienced Beyond the Venue</h3>
        <p className={styles.textBlock}>
          Ultimately, leadership is about serving those you lead. By cultivating a culture rooted in trust, respect, and continuous learning, leaders can build resilient teams capable of navigating uncertainty and achieving sustained excellence.
        </p>
      </main>

      {/* OTHER THOUGHTS */}
      <section className={styles.otherSection}>
        <div className={styles.otherInner}>
          <div className={styles.otherHeader}>
            <h2 className={styles.otherTitle}>Other Thoughts</h2>
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
            <Link href="/leadership-thoughts" className={styles.card}>
              <div className={styles.cardImgWrapper}>
                <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=600&auto=format&fit=crop" alt="Leadership" className={styles.cardImg} />
              </div>
              <span className={styles.cardTag}>LEADERSHIP</span>
              <h3 className={styles.cardTitle}>Building High-Performance Teams Starts with Trust, Not...</h3>
              <p className={styles.cardDesc}>Trust is the foundation of any successful team. Learn how to cultivate it within your organization.</p>
            </Link>

            <Link href="/leadership-thoughts" className={styles.card}>
              <div className={styles.cardImgWrapper}>
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop" alt="Process" className={styles.cardImg} />
              </div>
              <span className={styles.cardTag}>MANAGEMENT</span>
              <h3 className={styles.cardTitle}>Why We Prioritize Process Before Technology</h3>
              <p className={styles.cardDesc}>Implementing new tools without fixing broken processes only accelerates inefficiency.</p>
            </Link>

            <Link href="/leadership-thoughts" className={styles.card}>
              <div className={styles.cardImgWrapper}>
                <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=600&auto=format&fit=crop" alt="Collaboration" className={styles.cardImg} />
              </div>
              <span className={styles.cardTag}>CULTURE</span>
              <h3 className={styles.cardTitle}>Lessons from Scaling Cross-Functional Collaboration</h3>
              <p className={styles.cardDesc}>Breaking down silos and aligning disparate teams towards a unified corporate vision.</p>
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
            <a href="/leadership-thoughts" className={styles.ctaBtnOutline}>
              OTHER THOUGHTS
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

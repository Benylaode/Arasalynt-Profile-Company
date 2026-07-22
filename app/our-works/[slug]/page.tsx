import React from 'react';
import Link from 'next/link';
import styles from './work-detail.module.css';

const IconCheck = () => (
  <svg width="16" height="16" fill="none" stroke="#0052FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const IconArrowRight = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const IconDashboard = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect x="3" y="3" width="7" height="9" rx="1" />
    <rect x="14" y="3" width="7" height="5" rx="1" />
    <rect x="14" y="12" width="7" height="9" rx="1" />
    <rect x="3" y="16" width="7" height="5" rx="1" />
  </svg>
);

const IconPriceTag = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
    <line x1="7" y1="7" x2="7.01" y2="7" />
  </svg>
);

const IconLayers = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 12 12 17 22 12" />
    <polyline points="2 17 12 22 22 17" />
  </svg>
);

export default function WorkDetailPage({ params }: { params: { slug: string } }) {
  // For the context of this design challenge, we mock the content 
  // corresponding to the 'Sinau Print Semarang' detail view.

  return (
    <div className={styles.container}>
      {/* HEADER */}
      <header className={styles.header}>
        <div className={styles.breadcrumb}>OUR WORK / MARKETPLACE WEB /</div>
        <h1 className={styles.title}>Manifesting The A-Z Print Solution, Marketplace Website Optimization for Sinau Print Semarang</h1>
        <div className={styles.tags}>
          <span className={styles.tag}>SINAU PRINT</span>
          <span className={styles.tag}>WEB SYSTEM</span>
          <span className={styles.tag}>UI/UX</span>
        </div>
      </header>

      {/* HERO IMAGE */}
      <div className={styles.heroImageContainer}>
        <img 
          src="https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=1200&auto=format&fit=crop" 
          alt="Sinau Print Website Mockup on Laptop" 
          className={styles.heroImage} 
        />
      </div>

      {/* MAIN CONTENT SPLIT */}
      <div className={styles.contentWrapper}>
        
        {/* SIDEBAR */}
        <aside>
          <div className={styles.sidebar}>
            <div className={styles.sidebarSection}>
              <h3 className={styles.sidebarTitle}>CLIENT GOALS</h3>
              <ul className={styles.sidebarList}>
                <li><IconCheck /> Increase brand awareness</li>
                <li><IconCheck /> UI/UX Revamp</li>
                <li><IconCheck /> Brand Guidelines</li>
                <li><IconCheck /> Next.js Tech Stack</li>
              </ul>
            </div>
            <div className={styles.sidebarSection}>
              <h3 className={styles.sidebarTitle}>TEAM INVOLVED</h3>
              <ul className={styles.sidebarList}>
                <li><IconCheck /> UI/UX Designer</li>
                <li><IconCheck /> Frontend Dev</li>
                <li><IconCheck /> Backend Dev</li>
                <li><IconCheck /> Project Manager</li>
              </ul>
            </div>
            <button className={styles.visitBtn}>
              VISIT WEBSITE <IconArrowRight size={14} />
            </button>
          </div>
        </aside>

        {/* MAIN BODY */}
        <main className={styles.mainContent}>
          <h2 className={styles.sectionTitle}>Digitizing Printing Services Through a Scalable Marketplace Platform</h2>
          <p className={styles.textBlock}>
            Sinau Print Semarang is an industry leader in custom printing. As the demand for convenient, at-home printing services skyrocketed, Sinau Print recognized the need to transform their traditional manual ordering system into a robust, scalable digital marketplace. We worked closely with their team to architect a seamless, user-centric e-commerce experience that empowers users to order custom prints from anywhere, while streamlining their internal operations and order management systems.
          </p>

          <img 
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop" 
            alt="Website Mockups" 
            className={styles.contentImage}
          />

          <h2 className={styles.sectionTitle}>Addressing Operational Bottlenecks in Manual Order Processing</h2>
          <p className={styles.textBlock}>
            The previous workflow required tedious back-and-forth communication for pricing, file uploads, and status checks. By integrating a dynamic pricing calculator, automated pre-flight checks, and real-time order tracking, we drastically reduced operational bottlenecks and improved customer satisfaction.
          </p>

          {/* KEY FEATURES GRID */}
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}><IconDashboard /></div>
              <h4 className={styles.featureTitle}>Dashboard Admin & Envoy</h4>
              <p className={styles.featureDesc}>Comprehensive control panel to manage orders, track delivery envoys, and monitor sales analytics in real-time.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}><IconPriceTag /></div>
              <h4 className={styles.featureTitle}>Multiple Print Pricing</h4>
              <p className={styles.featureDesc}>Dynamic pricing calculator that instantly adjusts based on material, size, quantity, and finishing options.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}><IconLayers /></div>
              <h4 className={styles.featureTitle}>Multiple Product Variations</h4>
              <p className={styles.featureDesc}>Extensive catalogue supporting everything from business cards and banners to custom merchandise.</p>
            </div>
          </div>

          <h3 className={styles.subHeading}>Subheadline 1</h3>
          <p className={styles.textBlock}>
            Through meticulous user research and iterative prototyping, our UI/UX team crafted an interface that simplifies complex configuration options into an intuitive, step-by-step flow. This ensures that even users with no prior printing knowledge can confidently place complex orders without requiring support.
          </p>

          <h3 className={styles.subHeading}>Subheadline 2</h3>
          <p className={styles.textBlock}>
            Built on a modern tech stack utilizing Next.js for lightning-fast performance and a headless CMS architecture, the new platform is highly scalable. It effortlessly handles high traffic volumes during peak promotional seasons while maintaining optimal load times and SEO rankings.
          </p>

          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop" 
            alt="Dashboard View" 
            className={styles.contentImage}
          />

        </main>
      </div>

      {/* OTHER WORKS */}
      <section className={styles.otherWorksSection}>
        <div className={styles.otherWorksInner}>
          <div className={styles.otherWorksHeader}>
            <h2 className={styles.otherWorksTitle}>Other Works</h2>
            <div className={styles.navButtons}>
              <button className={styles.navBtn} aria-label="Previous">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg>
              </button>
              <button className={styles.navBtn} aria-label="Next">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>
              </button>
            </div>
          </div>

          <div className={styles.worksGrid}>
            <Link href="/our-works" className={styles.workCard}>
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop" alt="X-1 Tire" className={styles.workCardImg} />
              <div className={styles.workCardOverlay} />
              <div className={styles.workCardContent}>
                <div>
                  <h3 className={styles.workCardTitle}>Company Profile Revamp for X-1 Tire</h3>
                  <span className={styles.workCardTag}>COMPANY PROFILE / CONTENT REVAMP</span>
                </div>
                <div className={styles.workCardIcon}>
                  <IconArrowRight size={18} />
                </div>
              </div>
            </Link>
            <Link href="/our-works" className={styles.workCard}>
              <img src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=600&auto=format&fit=crop" alt="Padel 2026" className={styles.workCardImg} />
              <div className={styles.workCardOverlay} />
              <div className={styles.workCardContent}>
                <div>
                  <h3 className={styles.workCardTitle}>Live Streaming Event for Sirkuit Nasional Padel 2026</h3>
                  <span className={styles.workCardTag}>PADEL NASIONAL / LIVE STREAMING EVENT</span>
                </div>
                <div className={styles.workCardIcon}>
                  <IconArrowRight size={18} />
                </div>
              </div>
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
            <a href="/our-works" className={styles.ctaBtnOutline}>
              OTHER WORKS
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

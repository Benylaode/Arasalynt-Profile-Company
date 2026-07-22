'use client';

import styles from './corporate-profile.module.css';
import BeyondExpectations from '@/components/sections/BeyondExpectations/BeyondExpectations';
import Link from 'next/link';

const IconChevronDown = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const SERVICES = [
  {
    title: "Enterprise Data\n& Intelligence",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=400&auto=format&fit=crop"
  },
  {
    title: "Customer\nAcquisition",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&auto=format&fit=crop"
  },
  {
    title: "Mission-Critical\nBroadcast",
    img: "https://images.unsplash.com/photo-1601506521793-dc748fc80b67?q=80&w=400&auto=format&fit=crop"
  },
  {
    title: "Integrated\nExecution",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=400&auto=format&fit=crop"
  }
];

export default function CorporateProfilePage() {
  const handleScrollDown = () => {
    const el = document.getElementById("content");
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={styles.container}>
      
      {/* ===================================================
          HERO HEADER SECTION
          =================================================== */}
      <section className={styles.hero} id="hero" aria-label="Corporate Profile Hero">
        <div className={styles.backgroundImage} aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop"
            alt="Global Network"
          />
        </div>
        <div className={styles.networkOverlay} aria-hidden="true" />
        <div className={styles.gradientBottom} aria-hidden="true" />

        <div className={styles.heroContent}>
          <span className={styles.heroLabel}>HOME &gt; ABOUT US &gt; CORPORATE PROFILE</span>
          <h1 className={styles.heroTitle}>Corporate Profile</h1>
          <button onClick={handleScrollDown} className={styles.scrollBtn} aria-label="Scroll down">
            <IconChevronDown />
          </button>
        </div>
      </section>

      <div id="content">
        {/* ===================================================
            THE BACKBONE SECTION
            =================================================== */}
        <section className={styles.backboneSection}>
          <div className={styles.inner}>
            <div className={styles.sectionHeaderCentered}>
              <span className={styles.sectionLabel}>&lt; ABOUT ARSALYNT &gt;</span>
              <h2 className={styles.sectionTitle}>The Backbone<br />of Modern Enterprise</h2>
              <p className={styles.sectionDesc}>
                We provide comprehensive technology solutions designed to modernize, connect, and scale your business operations. 
                From intelligent hardware integration to enterprise software ecosystems.
              </p>
            </div>

            <div className={styles.sliderGallery}>
              <div className={styles.sliderItemSide}>
                <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=400&auto=format&fit=crop" alt="Side image 1" />
              </div>
              <div className={styles.sliderItemCenter}>
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" alt="Center team collaboration" />
              </div>
              <div className={styles.sliderItemSide}>
                <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=400&auto=format&fit=crop" alt="Side image 2" />
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================
            VISION MISSION SECTION
            =================================================== */}
        <section className={styles.visionSection}>
          <div className={styles.visionBg} aria-hidden="true">
            <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop" alt="Network" />
          </div>
          <div className={styles.visionOverlay} />
          
          <div className={styles.inner}>
            <div className={styles.visionContent}>
              <span className={styles.visionLabel}>&lt; VISION &gt;</span>
              <h2 className={styles.visionTitle}>
                We envision a future where enterprises thrive through one unified ecosystem built for growth, resilience, and execution
              </h2>
              
              <div className={styles.missionBox}>
                <span className={styles.visionLabel}>&lt; MISSION &gt;</span>
                <p className={styles.missionDesc}>
                  Our mission is to make corporate execution flawless, predictable, and immensely capital efficient.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================
            OUR SERVICES SECTION
            =================================================== */}
        <section className={styles.servicesSection}>
          <div className={styles.inner}>
            <div className={styles.sectionHeaderCentered}>
              <span className={styles.sectionLabel}>&lt; OUR SERVICES &gt;</span>
              <h2 className={styles.sectionTitle}>Make Sustainable<br />Business Excellence</h2>
            </div>

            <div className={styles.servicesGrid}>
              {SERVICES.map((srv, i) => (
                <div key={i} className={styles.serviceCard}>
                  <div className={styles.serviceImgBox}>
                    <img src={srv.img} alt={srv.title.replace('\n', ' ')} />
                  </div>
                  <h3 className={styles.serviceTitle}>
                    {srv.title.split('\n').map((line, idx) => (
                      <span key={idx}>{line}<br/></span>
                    ))}
                  </h3>
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

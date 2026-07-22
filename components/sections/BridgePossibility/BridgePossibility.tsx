'use client';

import styles from './BridgePossibility.module.css';
import Button from '@/components/ui/Button/Button';
import SectionLabel from '@/components/ui/SectionLabel/SectionLabel';

export default function BridgePossibility() {
  return (
    <section className={styles.section} id="bridge" aria-label="Bridge Every Possibility">
      {/* Decorative Glow */}
      <div className={styles.glow} aria-hidden="true" />

      {/* Orbital Decoration */}
      <div className={styles.orbitalWrap} aria-hidden="true">
        <div className={styles.orbitOuter} />
        <div className={styles.orbitInner} />
      </div>

      <div className={styles.inner}>
        {/* Left: Floating Nodes Illustration */}
        <div className={styles.visual}>
          {/* Background Giant Numbers */}
          <div className={`${styles.bgNumber} ${styles.numOne}`}>01</div>
          <div className={`${styles.bgNumber} ${styles.numTwo}`}>02</div>
          <div className={`${styles.bgNumber} ${styles.numThree}`}>03</div>

          {/* Central Globe & Arrows */}
          <div className={styles.globeWrapper}>
            <svg viewBox="0 0 400 400" className={styles.globeSvg}>
              <defs>
                <linearGradient id="arrowGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#2563EB" stopOpacity="0.8" />
                </linearGradient>
                <linearGradient id="arrowGrad2" x1="100%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#1E3A8A" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              
              {/* Globe grid lines */}
              <circle cx="200" cy="200" r="140" fill="none" stroke="rgba(96, 165, 250, 0.15)" strokeWidth="1.5" />
              <circle cx="200" cy="200" r="120" fill="none" stroke="rgba(96, 165, 250, 0.1)" strokeWidth="1" />
              <ellipse cx="200" cy="200" rx="140" ry="50" fill="none" stroke="rgba(96, 165, 250, 0.12)" strokeWidth="1.2" />
              <ellipse cx="200" cy="200" rx="140" ry="90" fill="none" stroke="rgba(96, 165, 250, 0.12)" strokeWidth="1.2" />
              <ellipse cx="200" cy="200" rx="50" ry="140" fill="none" stroke="rgba(96, 165, 250, 0.12)" strokeWidth="1.2" />
              <ellipse cx="200" cy="200" rx="90" ry="140" fill="none" stroke="rgba(96, 165, 250, 0.12)" strokeWidth="1.2" />
              <line x1="60" y1="200" x2="340" y2="200" stroke="rgba(96, 165, 250, 0.15)" strokeWidth="1.5" />
              <line x1="200" y1="60" x2="200" y2="340" stroke="rgba(96, 165, 250, 0.15)" strokeWidth="1.5" />

              {/* Dotted map elements */}
              <circle cx="260" cy="130" r="2" fill="rgba(96, 165, 250, 0.4)" />
              <circle cx="280" cy="140" r="3" fill="rgba(96, 165, 250, 0.6)" />
              <circle cx="290" cy="150" r="2" fill="rgba(96, 165, 250, 0.5)" />
              <circle cx="270" cy="160" r="3.5" fill="rgba(96, 165, 250, 0.7)" />
              <circle cx="250" cy="150" r="2.5" fill="rgba(96, 165, 250, 0.5)" />
              
              <circle cx="130" cy="160" r="3" fill="rgba(96, 165, 250, 0.6)" />
              <circle cx="140" cy="180" r="2.5" fill="rgba(96, 165, 250, 0.5)" />
              <circle cx="120" cy="190" r="3.5" fill="rgba(96, 165, 250, 0.7)" />
              <circle cx="150" cy="200" r="2" fill="rgba(96, 165, 250, 0.4)" />
              <circle cx="130" cy="220" r="3" fill="rgba(96, 165, 250, 0.5)" />
              
              <circle cx="210" cy="220" r="3" fill="rgba(96, 165, 250, 0.6)" />
              <circle cx="220" cy="240" r="2.5" fill="rgba(96, 165, 250, 0.5)" />
              <circle cx="200" cy="250" r="3.5" fill="rgba(96, 165, 250, 0.7)" />

              {/* Curving Arrows */}
              <path d="M 100 130 C 120 60, 280 60, 300 130" fill="none" stroke="url(#arrowGrad1)" strokeWidth="6" strokeLinecap="round" />
              <path d="M 300 270 C 280 340, 120 340, 100 270" fill="none" stroke="url(#arrowGrad2)" strokeWidth="6" strokeLinecap="round" />
            </svg>
          </div>

          {/* Node 1 */}
          <div className={`${styles.nodeCard} ${styles.cardOne}`}>
            <div className={styles.nodeCardLabel}>TECHNOLOGY</div>
            <div className={styles.nodeCardTitleWrap}>
              <span className={styles.starIconYellow}>■</span>
              <span className={styles.nodeCardTitleYellow}>WE BUILD</span>
            </div>
            <p className={styles.nodeText}>
              Building resilient enterprise infrastructure
            </p>
          </div>

          {/* Node 2 */}
          <div className={`${styles.nodeCard} ${styles.cardTwo}`}>
            <div className={styles.nodeCardLabel}>DATA & SURVEY</div>
            <div className={styles.nodeCardTitleWrap}>
              <span className={styles.starIconYellow}>■</span>
              <span className={styles.nodeCardTitleYellow}>WE UNDERSTAND</span>
            </div>
            <p className={styles.nodeText}>
              Turning data into strategic decisions
            </p>
          </div>

          {/* Node 3 */}
          <div className={`${styles.nodeCard} ${styles.cardThree}`}>
            <div className={styles.nodeCardLabel}>MEDIA</div>
            <div className={styles.nodeCardTitleWrap}>
              <span className={styles.starIconYellow}>■</span>
              <span className={styles.nodeCardTitleYellow}>WE AMPLIFY</span>
            </div>
            <p className={styles.nodeText}>
              Delivering ideas with measurable impact
            </p>
          </div>
        </div>

        {/* Right: Content */}
        <div className={styles.content}>
          <SectionLabel text="PLATFORM" variant="light" />

          <h2 className={styles.heading}>
            Bridge Every
            <br />
            Possibility
          </h2>
          <p className={styles.description}>
            Connect disparate systems and bridge the gap between technology and business outcomes. 
            Our solutions create seamless integrations that unlock new possibilities for growth 
            and operational efficiency.
          </p>

          <div className={styles.cta}>
            <Button variant="primary" href="#contact">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

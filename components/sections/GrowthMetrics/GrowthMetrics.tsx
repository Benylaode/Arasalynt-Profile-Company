'use client';

import styles from './GrowthMetrics.module.css';
import SectionLabel from '@/components/ui/SectionLabel/SectionLabel';

/* ── Inline Arrow Right Icon ── */
const IconArrowRight = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export default function GrowthMetrics() {
  return (
    <section className={styles.section} id="growth" aria-label="Growth and Insights">
      {/* Background radial glow */}
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.inner}>
        
        {/* Main Grid: Left content, Right actions */}
        <div className={styles.mainGrid}>
          
          {/* Left Column: Heading */}
          <div className={styles.content}>
            <SectionLabel text="METRICS" variant="light" />
            <h2 className={styles.heading}>
              Insights That Drive
              <br />
              Measurable Growth
            </h2>
            <p className={styles.description}>
              We transform business performance through integrated dashboards and strategic intelligence. 
              Monitor your key metrics and unlock scalability with custom data integrations.
            </p>
          </div>

          {/* Right Column: Actions */}
          <div className={styles.actions}>
            {/* Action Card 1 */}
            <a href="#contact" className={styles.actionCard}>
              <div className={styles.cardInfo}>
                <h3 className={styles.actionTitle}>IT Consulting / Advisory</h3>
                <p className={styles.actionDesc}>Formulate custom roadmaps with our expert enterprise team.</p>
              </div>
              <div className={styles.arrowCircle}>
                <IconArrowRight size={16} />
              </div>
            </a>

            {/* Action Card 2 */}
            <a href="#portfolio" className={styles.actionCardSecond}>
              <div className={styles.cardInfo}>
                <h3 className={styles.actionTitle}>Read Our Case Studies</h3>
                <p className={styles.actionDesc}>Explore real-world client system deployment projects.</p>
              </div>
              <div className={styles.yellowBtn}>
                Read More <IconArrowRight size={12} />
              </div>
            </a>
          </div>

        </div>

        {/* Bottom Row: Stats Counters */}
        <div className={styles.statsRow}>
          {[
            { value: "50+", label: "Clients Served" },
            { value: "10+", label: "Years Experience" },
            { value: "7+", label: "Countries Reached" },
            { value: "25+", label: "Active Subscriptions" },
          ].map((stat, index) => (
            <div key={index} className={styles.statItem}>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

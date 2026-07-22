'use client';

import styles from './SpecializedByNature.module.css';

/* ── Pure SVG Isometric Components ── */
const Iso3DCube = () => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
    <polygon points="100,30 160,65 100,100 40,65" fill="#2563eb" fillOpacity="0.85" />
    <polygon points="40,65 100,100 100,160 40,125" fill="#1d4ed8" />
    <polygon points="160,65 100,100 100,160 160,125" fill="#1e3a8a" />
    <g transform="translate(85,15)">
      <rect x="0" y="0" width="30" height="30" rx="4" fill="#050b18" stroke="#ccff00" strokeWidth="1.5" />
      <rect x="4" y="4" width="22" height="22" rx="2" fill="#1d4ed8" fillOpacity="0.5" />
      <rect x="8" y="8" width="14" height="14" rx="2" fill="#ccff00" />
    </g>
    <ellipse cx="100" cy="155" rx="55" ry="15" fill="#2563eb" fillOpacity="0.15" />
  </svg>
);

const IsoBarChart = () => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
    {/* Bar 1 */}
    <polygon points="30,130 60,115 60,145 30,160" fill="#ccff00" fillOpacity="0.8" />
    <polygon points="60,115 80,125 80,155 60,145" fill="#a3d900" />
    <polygon points="30,130 60,115 80,125 50,140" fill="#e2f122" />
    {/* Bar 2 */}
    <polygon points="75,110 105,95 105,145 75,160" fill="#ccff00" fillOpacity="0.85" />
    <polygon points="105,95 125,105 125,155 105,145" fill="#a3d900" />
    <polygon points="75,110 105,95 125,105 95,120" fill="#e2f122" />
    {/* Bar 3 */}
    <polygon points="120,80 150,65 150,145 120,160" fill="#ccff00" />
    <polygon points="150,65 170,75 170,155 150,145" fill="#a3d900" />
    <polygon points="120,80 150,65 170,75 140,90" fill="#e2f122" />
    {/* Wire */}
    <polyline points="35,145 70,120 110,110 145,80" stroke="#ccff00" strokeWidth="2" fill="none" strokeDasharray="4 2" />
    <ellipse cx="100" cy="150" rx="60" ry="12" fill="#ccff00" fillOpacity="0.08" />
  </svg>
);

const IsoFolder = () => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
    <polygon points="25,120 100,85 175,120 100,155" fill="#1d4ed8" fillOpacity="0.7" />
    <polygon points="25,70 25,120 100,155 100,105" fill="#2563eb" />
    <polygon points="175,70 175,120 100,155 100,105" fill="#1e3a8a" />
    <polygon points="25,70 100,35 175,70 100,105" fill="#3b82f6" />
    <g transform="translate(70, 20) rotate(-8, 30, 40)">
      <rect x="0" y="0" width="55" height="75" rx="4" fill="white" fillOpacity="0.95" />
      <rect x="8" y="12" width="39" height="3" rx="1" fill="#94a3b8" />
      <rect x="8" y="22" width="31" height="3" rx="1" fill="#94a3b8" />
      <rect x="8" y="32" width="35" height="3" rx="1" fill="#94a3b8" />
    </g>
    <ellipse cx="100" cy="148" rx="60" ry="12" fill="#2563eb" fillOpacity="0.1" />
  </svg>
);

export default function SpecializedByNature() {
  return (
    <section className={styles.section} id="services" aria-label="Specialized By Nature, Unified By Design">
      <div className={styles.inner}>
        
        {/* Section Heading */}
        <div className={styles.headingWrap}>
          <div className={styles.sectionLabel}>
            <span className={styles.dot} />
            <span className={styles.labelText}>WHAT WE DO</span>
          </div>
          <h2 className={styles.heading}>
            Specialized By Nature,
            <br />
            Unified By Design
          </h2>
        </div>

        {/* Bento Cards List */}
        <div className={styles.listContainer}>
          
          {/* Card 1: Flexible Resilient Infrastructure */}
          <div className={`${styles.bentoCard} ${styles.cardDark}`}>
            <div className={styles.visualPaneBlue}>
              <div className={styles.illustrationWrapper}>
                <Iso3DCube />
              </div>
            </div>
            <div className={styles.textPane}>
              <h3 className={styles.cardTitle}>
                Flexible Resilient
                <br />
                Technology Infrastructure
              </h3>
              <p className={styles.cardDesc}>
                Constructing robust network cores and hybrid databases designed to support and accelerate your critical enterprise software processes at scale.
              </p>
              <a href="#bridge" className={styles.linkYellow}>
                Learn More <span className={styles.arrow}>→</span>
              </a>
            </div>
          </div>

          {/* Card 2: Strategic Intelligence */}
          <div className={`${styles.bentoCard} ${styles.cardLight}`}>
            <div className={styles.textPane}>
              <h3 className={styles.cardTitle}>
                Driven by Strategic
                <br />
                Intelligence
              </h3>
              <p className={styles.cardDesc}>
                We integrate data metrics tools and reporting flows that deliver visual intelligence directly to operators, improving daily execution and strategic decision making.
              </p>
              <a href="#growth" className={styles.linkBlue}>
                Learn More <span className={styles.arrow}>→</span>
              </a>
            </div>
            <div className={styles.visualPaneYellow}>
              <div className={styles.illustrationWrapper}>
                <IsoBarChart />
              </div>
            </div>
          </div>

          {/* Card 3: Long Lasting Impact */}
          <div className={`${styles.bentoCard} ${styles.cardDark}`}>
            <div className={styles.visualPaneBlue}>
              <div className={styles.illustrationWrapper}>
                <IsoFolder />
              </div>
            </div>
            <div className={styles.textPane}>
              <h3 className={styles.cardTitle}>
                Designed for Long
                <br />
                Lasting Impact
              </h3>
              <p className={styles.cardDesc}>
                We build with maintainable architectures, clean modules, and detailed audit logs that guarantee your enterprise systems will operate without interruption for years.
              </p>
              <a href="#portfolio" className={styles.linkYellow}>
                Learn More <span className={styles.arrow}>→</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

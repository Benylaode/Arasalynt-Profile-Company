'use client';

import { useState, useEffect } from 'react';
import styles from './ITInfrastructure.module.css';
import SectionLabel from '@/components/ui/SectionLabel/SectionLabel';
import Button from '@/components/ui/Button/Button';

const SERVICES_DATA = [
  {
    id: 0,
    number: "01",
    label: "ONE ECOSYSTEM, THREE PILLARS",
    title: <>Information<br />Technology<br />Infrastructure</>,
    desc: "We build resilient technology infrastructure that connects your business systems into a unified, intelligent ecosystem — enabling seamless operations, scalability, and long-term growth.",
    tags: ['NETWORK & SECURITY', 'CLOUD', 'MANAGED SERVICES', 'More...']
  },
  {
    id: 1,
    number: "02",
    label: "DATA & ANALYTICS SYSTEMS",
    title: <>Data Survey<br />and<br />Analytics</>,
    desc: "Turning fragmented information into strategic enterprise dashboards, empowering teams with predictive data modeling and deep-dive analytical insights.",
    tags: ['DATA MODELING', 'SURVEY', 'ANALYTICS', 'More...']
  },
  {
    id: 2,
    number: "03",
    label: "ONE ECOSYSTEM, THREE PILLARS",
    title: <>Digital Media<br />and<br />Impact</>,
    desc: "Delivering your brand message through high-impact media placements and content strategies designed to maximize modern marketplace engagement.",
    tags: ['BRANDING', 'ADS/PROMOTION', 'CAMPAIGN MAKING', 'More...']
  }
];

export default function ITInfrastructure() {
  const [activeTab, setActiveTab] = useState(0);

  // Auto-rotate tab every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % SERVICES_DATA.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const current = SERVICES_DATA[activeTab];

  return (
    <section className={styles.section} id="services" aria-label="Services Platform">
      <div className={styles.bgHalo} aria-hidden="true" />

      <div className={styles.inner}>
        {/* ── LEFT SIDE: CONTENT ── */}
        <div className={styles.content}>
          <SectionLabel text={current.label} />

          {/* Animated Text Content */}
          <div className={styles.textContainer}>
            {SERVICES_DATA.map((item) => (
              <div
                key={item.id}
                className={`${styles.slideItem} ${
                  activeTab === item.id ? styles.slideItemActive : styles.slideItemInactive
                }`}
              >
                <h2 className={styles.heading}>{item.title}</h2>
                <div className={styles.tagsList}>
                  {item.tags.map((tag, idx) => (
                    <span key={idx} className={styles.tagItem}>
                      {tag}
                      {idx < item.tags.length - 1 && <span className={styles.tagSeparator}>|</span>}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.buttons}>
            <a href="#portfolio" className={styles.blueButton}>
              LEARN MORE
            </a>
          </div>
        </div>

        {/* ── RIGHT SIDE: VISUAL ISOMETRIC ── */}
        <div className={styles.visual}>
          {/* Background Giant Numbers */}
          <div className={styles.bgNumberContainer}>
            {SERVICES_DATA.map((item) => (
              <span
                key={item.id}
                className={`${styles.sectionNumber} ${
                  activeTab === item.id ? styles.sectionNumberActive : styles.sectionNumberInactive
                }`}
              >
                {item.number}
              </span>
            ))}
          </div>

          {/* Background Wireframe Globe Network */}
          <div className={styles.networkBg}>
            <svg viewBox="0 0 400 400" className={styles.networkSvg}>
              {/* Complex network dots and lines */}
              <circle cx="200" cy="200" r="180" fill="none" stroke="rgba(37,99,235,0.05)" strokeWidth="1" />
              <circle cx="200" cy="200" r="140" fill="none" stroke="rgba(37,99,235,0.1)" strokeWidth="1" strokeDasharray="4 4" />
              <ellipse cx="200" cy="200" rx="180" ry="80" fill="none" stroke="rgba(37,99,235,0.08)" strokeWidth="1" transform="rotate(30 200 200)" />
              <ellipse cx="200" cy="200" rx="180" ry="80" fill="none" stroke="rgba(37,99,235,0.08)" strokeWidth="1" transform="rotate(-30 200 200)" />
              <ellipse cx="200" cy="200" rx="80" ry="180" fill="none" stroke="rgba(37,99,235,0.08)" strokeWidth="1" transform="rotate(30 200 200)" />
              {/* Dots */}
              <circle cx="350" cy="100" r="3" fill="#94a3b8" />
              <circle cx="280" cy="50" r="2" fill="#94a3b8" />
              <circle cx="380" cy="250" r="4" fill="#cbd5e1" />
              <circle cx="100" cy="80" r="2" fill="#cbd5e1" />
            </svg>
          </div>

          <div className={styles.cubeIllustration}>
            <svg viewBox="0 0 400 400" className={styles.svgIllustration} fill="none">
              
              <defs>
                {/* Isometric Clip Paths for images */}
                <clipPath id="isoClipLeft">
                  <polygon points="40,0 80,20 40,40 0,20" />
                </clipPath>
                <clipPath id="isoClipRight">
                  <polygon points="50,0 100,25 50,50 0,25" />
                </clipPath>
                <clipPath id="isoClipSmall">
                  <polygon points="30,0 60,15 30,30 0,15" />
                </clipPath>
                {/* Glow Filter for Active Spotlight */}
                <filter id="glowFilter" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feComponentTransfer in="blur" result="boost">
                    <feFuncA type="linear" slope="1.5"/>
                  </feComponentTransfer>
                  <feMerge>
                    <feMergeNode in="boost" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* BACK-LEFT PILLAR (Tab 2: Digital Media) */}
              <g transform="translate(140, 70)" className={styles.pillarGroup} onClick={() => setActiveTab(2)}>
                {/* Floating Lid for Inactive State */}
                {activeTab !== 2 && (
                  <g transform="translate(0, -30)" className={styles.inactiveLid}>
                    <polygon points="80,0 160,40 80,80 0,40" fill="#9CA3AF" />
                  </g>
                )}
                
                {/* Top Face */}
                <polygon points="80,0 160,40 80,80 0,40" fill={activeTab === 2 ? "#3B82F6" : "#E5E7EB"} className={styles.pillarFace} />
                {activeTab === 2 && (
                  <ellipse cx="80" cy="40" rx="35" ry="17.5" fill="#60A5FA" opacity="0.8" filter="url(#glowFilter)" pointerEvents="none" />
                )}
                {/* Left Face */}
                <polygon points="0,40 80,80 80,240 0,200" fill={activeTab === 2 ? "#2563EB" : "#D1D5DB"} className={styles.pillarFace} />
                {/* Right Face */}
                <polygon points="160,40 80,80 80,240 160,200" fill={activeTab === 2 ? "#1D4ED8" : "#9CA3AF"} className={styles.pillarFace} />
                
                {/* Holograms for Tab 2 */}
                {activeTab === 2 && (
                  <g className={styles.holoActive}>
                    {/* Video Player Card */}
                    <g transform="translate(-10, -70) skewY(-20) scale(0.9)" className={styles.holoPanel}>
                      <rect x="0" y="0" width="90" height="65" rx="8" fill="rgba(37, 99, 235, 0.15)" stroke="#60A5FA" strokeWidth="1.5" />
                      <circle cx="45" cy="30" r="12" fill="rgba(37, 99, 235, 0.3)" stroke="#60A5FA" strokeWidth="1.5" />
                      <polygon points="42,24 52,30 42,36" fill="#fff" />
                      <line x1="15" y1="50" x2="75" y2="50" stroke="#60A5FA" strokeWidth="2" />
                      <circle cx="75" cy="50" r="3" fill="#fff" />
                      <line x1="15" y1="12" x2="35" y2="12" stroke="#60A5FA" strokeWidth="1.5" />
                    </g>
                    {/* Camera Card */}
                    <g transform="translate(80, -40) skewY(-20) scale(0.9)" className={styles.holoPanel}>
                      <rect x="0" y="0" width="90" height="65" rx="8" fill="rgba(37, 99, 235, 0.15)" stroke="#60A5FA" strokeWidth="1.5" />
                      <rect x="25" y="22" width="40" height="26" rx="4" fill="none" stroke="#60A5FA" strokeWidth="2" />
                      <path d="M 35 22 L 40 16 L 50 16 L 55 22 Z" fill="none" stroke="#60A5FA" strokeWidth="2" />
                      <circle cx="45" cy="35" r="8" fill="none" stroke="#fff" strokeWidth="1.5" />
                      <circle cx="12" cy="12" r="2" fill="#60A5FA" />
                      <circle cx="78" cy="12" r="2" fill="#60A5FA" />
                    </g>
                  </g>
                )}
              </g>

              {/* FRONT-CENTER PILLAR (Tab 0: IT Infrastructure) */}
              <g transform="translate(10, 200)" className={styles.pillarGroup} onClick={() => setActiveTab(0)}>
                {activeTab !== 0 && (
                  <g transform="translate(0, -30)" className={styles.inactiveLid}>
                    <polygon points="70,0 140,35 70,70 0,35" fill="#9CA3AF" />
                  </g>
                )}
                
                <polygon points="70,0 140,35 70,70 0,35" fill={activeTab === 0 ? "#3B82F6" : "#E5E7EB"} className={styles.pillarFace} />
                {activeTab === 0 && (
                  <ellipse cx="70" cy="35" rx="30" ry="15" fill="#60A5FA" opacity="0.8" filter="url(#glowFilter)" pointerEvents="none" />
                )}
                <polygon points="0,35 70,70 70,250 0,215" fill={activeTab === 0 ? "#2563EB" : "#D1D5DB"} className={styles.pillarFace} />
                <polygon points="140,35 70,70 70,250 140,215" fill={activeTab === 0 ? "#1D4ED8" : "#9CA3AF"} className={styles.pillarFace} />
                
                {activeTab === 0 && (
                  <g className={styles.holoActive}>
                    {/* Server Rack Card */}
                    <g transform="translate(10, -80) skewY(-20) scale(0.9)" className={styles.holoPanel}>
                      <rect x="0" y="0" width="90" height="65" rx="8" fill="rgba(37, 99, 235, 0.15)" stroke="#60A5FA" strokeWidth="1.5" />
                      <rect x="15" y="12" width="60" height="10" rx="2" fill="rgba(96, 165, 250, 0.2)" stroke="#60A5FA" strokeWidth="1" />
                      <circle cx="25" cy="17" r="2" fill="#3B82F6" />
                      <circle cx="33" cy="17" r="2" fill="#10B981" />
                      <rect x="15" y="27" width="60" height="10" rx="2" fill="rgba(96, 165, 250, 0.2)" stroke="#60A5FA" strokeWidth="1" />
                      <circle cx="25" cy="32" r="2" fill="#3B82F6" />
                      <circle cx="33" cy="32" r="2" fill="#10B981" />
                      <rect x="15" y="42" width="60" height="10" rx="2" fill="rgba(96, 165, 250, 0.2)" stroke="#60A5FA" strokeWidth="1" />
                      <circle cx="25" cy="47" r="2" fill="#3B82F6" />
                      <circle cx="33" cy="47" r="2" fill="#10B981" />
                    </g>
                    {/* Cloud Card */}
                    <g transform="translate(85, -30) skewY(-20) scale(0.9)" className={styles.holoPanel}>
                      <rect x="0" y="0" width="90" height="65" rx="8" fill="rgba(37, 99, 235, 0.15)" stroke="#60A5FA" strokeWidth="1.5" />
                      <path d="M 45 42 A 10 10 0 0 1 35 32 A 8 8 0 0 1 45 24 A 12 12 0 0 1 62 28 A 8 8 0 0 1 58 42 Z" fill="none" stroke="#60A5FA" strokeWidth="2" />
                      <line x1="20" y1="50" x2="70" y2="50" stroke="#60A5FA" strokeWidth="1.5" strokeDasharray="3 3" />
                    </g>
                  </g>
                )}
              </g>

              {/* RIGHT PILLAR (Tab 1: Data & Survey) */}
              <g transform="translate(220, 240)" className={styles.pillarGroup} onClick={() => setActiveTab(1)}>
                {activeTab !== 1 && (
                  <g transform="translate(0, -30)" className={styles.inactiveLid}>
                    <polygon points="60,0 120,30 60,60 0,30" fill="#9CA3AF" />
                  </g>
                )}
                
                <polygon points="60,0 120,30 60,60 0,30" fill={activeTab === 1 ? "#3B82F6" : "#E5E7EB"} className={styles.pillarFace} />
                {activeTab === 1 && (
                  <ellipse cx="60" cy="30" rx="25" ry="12.5" fill="#60A5FA" opacity="0.8" filter="url(#glowFilter)" pointerEvents="none" />
                )}
                <polygon points="0,30 60,60 60,160 0,130" fill={activeTab === 1 ? "#2563EB" : "#D1D5DB"} className={styles.pillarFace} />
                <polygon points="120,30 60,60 60,160 120,130" fill={activeTab === 1 ? "#1D4ED8" : "#9CA3AF"} className={styles.pillarFace} />
                
                {activeTab === 1 && (
                  <g className={styles.holoActive}>
                    {/* Line Chart Card */}
                    <g transform="translate(10, -40) skewY(-20) scale(0.9)" className={styles.holoPanel}>
                      <rect x="0" y="0" width="90" height="65" rx="8" fill="rgba(37, 99, 235, 0.15)" stroke="#60A5FA" strokeWidth="1.5" />
                      <path d="M 15 45 L 35 25 L 50 35 L 75 15" fill="none" stroke="#60A5FA" strokeWidth="2.5" strokeLinecap="round" />
                      <circle cx="35" cy="25" r="3" fill="#fff" />
                      <circle cx="50" cy="35" r="3" fill="#fff" />
                      <circle cx="75" cy="15" r="3" fill="#fff" />
                      <line x1="15" y1="50" x2="75" y2="50" stroke="rgba(96, 165, 250, 0.5)" strokeWidth="1.5" />
                    </g>
                  </g>
                )}
              </g>

            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

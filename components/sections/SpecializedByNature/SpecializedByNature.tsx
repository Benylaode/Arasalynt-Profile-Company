'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { CSSProperties } from 'react';
import styles from './SpecializedByNature.module.css';

type CardItem = {
  id: number;
  image: string;
  imageAlt: string;
  title: [string, string];
  description: string;
  label: string;
  mediaSide: 'left' | 'right';
  imageClass: string;
};

const CARDS: CardItem[] = [
  {
    id: 1,
    image: '/images/specialized/specialized-technology.webp',
    imageAlt: 'Isometric technology infrastructure illustration',
    title: ['Flexible Resilience', '& Modern Infrastructure'],
    description:
      'We engineer resilient IT architectures, optimize digital infrastructure, and surface actionable insights—empowering our enterprise partners to adapt, scale, and thrive in a dynamic tech landscape.',
    label: 'FLEXIBLE TECH COVERING',
    mediaSide: 'left',
    imageClass: styles.technologyImage,
  },
  {
    id: 2,
    image: '/images/specialized/specialized-intelligence.webp',
    imageAlt: 'Isometric strategic intelligence dashboard illustration',
    title: ['Driven by Strategic', 'Intelligence'],
    description:
      'Our integrated ecosystem feeds a shared intelligence network, allowing deep technical expertise, industry best practices, and continuous innovation to compound across every client engagement.',
    label: 'DATA-DRIVEN DECISION MAKING',
    mediaSide: 'right',
    imageClass: styles.intelligenceImage,
  },
  {
    id: 3,
    image: '/images/specialized/specialized-impact.webp',
    imageAlt: 'Isometric media and long-term impact illustration',
    title: ['Designed for Long-', 'Lasting Impact'],
    description:
      'We turn complex IT strategy into operational advantage, delivering high-performance ERP, IoT, and system integrations with technical precision, operational consistency, and measurable results.',
    label: 'MEASURABLE BUSINESS OUTCOMES',
    mediaSide: 'left',
    imageClass: styles.impactImage,
  },
];

export default function SpecializedByNature() {
  return (
    <section
      id="services"
      className={styles.section}
      aria-labelledby="specialized-by-nature-heading"
    >
      {/* Background dipisah agar overflow tidak merusak sticky */}
      <div className={styles.backgroundClip} aria-hidden="true">
        <div className={styles.networkBackground} />
      </div>

      <div className={styles.inner}>
        <header className={styles.header}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot} aria-hidden="true" />
            <span>WHY ARSALYNK</span>
          </div>

          <h2
            id="specialized-by-nature-heading"
            className={styles.heading}
          >
            Specialized By Nature,
            <br />
            Unified By Design
          </h2>
        </header>

        <div className={styles.cards}>
          {CARDS.map((item, index) => {
            const cardStyle = {
              '--card-index': index,
              '--card-z-index': 10 + index,
            } as CSSProperties;

            return (
              <article
                key={item.id}
                className={`${styles.card} ${
                  item.mediaSide === 'right'
                    ? styles.mediaRight
                    : styles.mediaLeft
                }`}
                style={cardStyle}
              >
                <div className={styles.cardSurface}>
                  <div className={styles.mediaPanel}>
                    <div
                      className={`${styles.imageFrame} ${item.imageClass}`}
                      style={{ position: 'absolute' }}
                    >
                      <Image
                        src={item.image}
                        alt={item.imageAlt}
                        fill
                        sizes="(max-width: 767px) 100vw, (max-width: 1024px) 37vw, 520px"
                        className={styles.image}
                        unoptimized
                      />
                    </div>
                  </div>

                  <div className={styles.content}>
                    <h3 className={styles.cardTitle}>
                      {item.title[0]}
                      <br />
                      {item.title[1]}
                    </h3>

                    <p className={styles.description}>
                      {item.description}
                    </p>

                    <div className={styles.label}>
                      <span
                        className={styles.labelDot}
                        aria-hidden="true"
                      />
                      <span>{item.label}</span>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-14 flex justify-center">
          <Link
            href="/our-business"
            className="inline-flex items-center gap-3 rounded-full border border-[#1A3E9E] bg-[#1A3E9E] px-8 py-4 font-body text-[13px] font-bold uppercase tracking-wider text-white no-underline transition hover:bg-[#152571] hover:shadow-[0_8px_25px_rgba(26,62,158,0.25)]"
          >
            <span>EXPLORE OUR BUSINESS ECOSYSTEM</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

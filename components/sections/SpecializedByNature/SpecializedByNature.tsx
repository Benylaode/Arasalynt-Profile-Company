'use client';

import Image from 'next/image';
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
    title: ['Flexible Resilients', 'Technology Infrastructure'],
    description:
      'We build resilient systems, optimize infrastructure, and uncover insights that strengthen our business partner',
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
      'Our ecosystem contributes to a shared intelligence network, allowing knowledge, experience, and innovation to compound across every engagement.',
    label: 'DATA-DRIVEN DECISION MAKING',
    mediaSide: 'right',
    imageClass: styles.intelligenceImage,
  },
  {
    id: 3,
    image: '/images/specialized/specialized-impact.webp',
    imageAlt: 'Isometric media and long-term impact illustration',
    title: ['Designed for Long', 'Lasting Impact'],
    description:
      'Transform strategy into influence, delivering creative execution and enterprise communications with precision, consistency, and measurable impact.',
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
                    >
                      <Image
                        src={item.image}
                        alt={item.imageAlt}
                        fill
                        sizes="(max-width: 767px) 100vw, (max-width: 1024px) 37vw, 520px"
                        className={styles.image}
                        priority={index === 0}
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
      </div>
    </section>
  );
}
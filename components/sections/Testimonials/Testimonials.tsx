'use client';

import { useState } from 'react';
import styles from './Testimonials.module.css';
import SectionLabel from '@/components/ui/SectionLabel/SectionLabel';

/* ── Pure SVG Icons ── */
const IconQuote = () => (
  <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1zm12 0c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
  </svg>
);

const IconChevronLeft = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const IconChevronRight = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M9 18l6-6-6-6" />
  </svg>
);

const MOCK_TESTIMONIALS = [
  {
    id: 1,
    name: "NINA PRATIWI",
    role: "IT Director",
    company: "Sinar Mas",
    text: "Sangat puas dengan layanan IT Solution dari Arsalynk. Sistem kami sekarang jauh lebih stabil dan cepat. Tim support-nya juga sangat responsif dan professional. Sangat direkomendasikan untuk enterprise!",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=120&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "BUDI SETIAWAN",
    role: "Chief Technology Officer",
    company: "GOTO Logistics",
    text: "Arsalynk membantu kami melakukan integrasi sistem logistik nasional secara mulus. Arsitektur cloud mereka sangat tangguh dan andal untuk menangani beban transaksi dengan volume sangat tinggi.",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=120&auto=format&fit=crop",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % MOCK_TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + MOCK_TESTIMONIALS.length) % MOCK_TESTIMONIALS.length);
  };

  const active = MOCK_TESTIMONIALS[activeIndex];

  return (
    <section className={styles.section} id="testimonials" aria-label="Client Testimonials">
      <div className={styles.inner}>
        
        {/* Quote Icon */}
        <div className={styles.quoteIcon} aria-hidden="true">
          <IconQuote />
        </div>

        {/* Section Label */}
        <div className={styles.labelWrap}>
          <SectionLabel text="TESTIMONIALS" />
        </div>

        {/* Testimonial Quote Slider */}
        <div className={styles.sliderContainer}>
          {MOCK_TESTIMONIALS.map((t, idx) => (
            <div
              key={t.id}
              className={`${styles.slide} ${idx === activeIndex ? styles.activeSlide : ''}`}
              style={{
                display: idx === activeIndex ? 'block' : 'none',
              }}
            >
              <blockquote className={styles.quoteText}>
                "{t.text}"
              </blockquote>
            </div>
          ))}
        </div>

        {/* Author Bio Row */}
        <div className={styles.authorRow}>
          <img
            src={active.avatar}
            alt={active.name}
            className={styles.avatar}
          />
          <div className={styles.bio}>
            <div className={styles.authorName}>{active.name}</div>
            <div className={styles.authorTitle}>{active.role} at {active.company}</div>
          </div>
        </div>

        {/* Control Buttons */}
        <div className={styles.controls}>
          <button onClick={handlePrev} className={styles.controlBtn} aria-label="Previous testimonial">
            <IconChevronLeft size={16} />
          </button>
          <button onClick={handleNext} className={styles.controlBtn} aria-label="Next testimonial">
            <IconChevronRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
}

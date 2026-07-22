'use client';

import styles from './BeyondExpectations.module.css';
import Button from '@/components/ui/Button/Button';

export default function BeyondExpectations() {
  return (
    <section className={styles.section} id="contact" aria-label="Beyond Expectations CTA">
      {/* Glow Center Overlay */}
      <div className={styles.glow} aria-hidden="true" />

      {/* Blueprint Grid Overlay */}
      <div className={styles.gridOverlay} aria-hidden="true" />

      <div className={styles.inner}>
        <h2 className={styles.heading}>
          We Build Beyond
          <br />
          Your Expectations
        </h2>

        <p className={styles.description}>
          Partner with us to transform your digital landscape. Our team of experts is ready 
          to deliver tailored IT solutions that drive efficiency, growth, and long-term innovation.
        </p>

        <div className={styles.ctaWrap}>
          <Button variant="primary" href="#contact">
            Get Started
          </Button>
          <Button variant="secondary" href="#about">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}

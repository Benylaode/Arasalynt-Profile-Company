import styles from './SectionLabel.module.css';

interface SectionLabelProps {
  text: string;
  variant?: 'dark' | 'light';
  className?: string;
}

/**
 * SectionLabel — Colored dot + uppercase label pattern.
 * Used at the top of sections (e.g., "WHAT WE DO", "TRUSTED BY LEADING COMPANIES").
 *
 * - dark variant: Cobalt blue dot + text (for light backgrounds)
 * - light variant: Lime yellow dot + text (for dark backgrounds)
 */
export default function SectionLabel({
  text,
  variant = 'dark',
  className = '',
}: SectionLabelProps) {
  const classes = [
    styles.label,
    variant === 'light' ? styles.light : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes}>
      <span className={styles.dot} aria-hidden="true" />
      <span className={styles.text}>{text}</span>
    </div>
  );
}

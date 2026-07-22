import styles from './StatCounter.module.css';

interface StatCounterProps {
  value: string;
  label: string;
  className?: string;
}

/**
 * StatCounter — Large number with descriptive label.
 * Used in the Growth Metrics section (50+, 10+, 7+, 25+).
 */
export default function StatCounter({
  value,
  label,
  className = '',
}: StatCounterProps) {
  return (
    <div className={`${styles.stat} ${className}`}>
      <span className={styles.value}>{value}</span>
      <span className={styles.label}>{label}</span>
    </div>
  );
}

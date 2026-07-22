import styles from './SliderArrow.module.css';

interface SliderArrowProps {
  direction: 'left' | 'right';
  onClick?: () => void;
  ariaLabel?: string;
  className?: string;
}

/**
 * SliderArrow — Navigation arrow for sliders/carousels.
 * 54×54px bordered square with chevron icon.
 */
export default function SliderArrow({
  direction,
  onClick,
  ariaLabel,
  className = '',
}: SliderArrowProps) {
  const label =
    ariaLabel || (direction === 'left' ? 'Previous slide' : 'Next slide');

  return (
    <button
      className={`${styles.arrow} ${className}`}
      onClick={onClick}
      aria-label={label}
      type="button"
    >
      <svg
        className={styles.icon}
        viewBox="0 0 20 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          transform: direction === 'left' ? 'rotate(180deg)' : 'none',
        }}
      >
        <path
          d="M14 1L19 6M19 6L14 11M19 6H1"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

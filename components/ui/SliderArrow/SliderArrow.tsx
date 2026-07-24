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
      className={`group box-border flex justify-center items-center w-[54px] h-[54px] max-[768px]:w-[44px] max-[768px]:h-[44px] border border-[#4C4C4C] rounded-[6px] bg-transparent cursor-pointer shrink-0 transition-all duration-250 ease-in-out hover:border-[#D9D9D9] hover:bg-[rgba(247,247,247,0.05)] active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-lime-yellow focus-visible:outline-offset-2 ${className}`}
      onClick={onClick}
      aria-label={label}
      type="button"
    >
      <svg
        className="w-[20px] h-[12px] max-[768px]:w-[16px] max-[768px]:h-[10px] text-[#D9D9D9] group-hover:text-white transition-colors duration-250 ease-in-out"
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

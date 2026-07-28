interface SliderArrowProps {
  direction: 'left' | 'right';
  onClick?: () => void;
  ariaLabel?: string;
  className?: string;
}

/**
 * SliderArrow — Navigation arrow for sliders/carousels.
 *
 * Pixel-perfect match to SVG design (canvas 1920×970):
 * - Size: 53×53px
 * - Border: 1px solid #4C4C4C, border-radius: 5.5px
 * - Icon: fill-rule evenodd chevron, fill #D9D9D9
 *   Path normalized from SVG coords: viewBox "0 0 11.915 20"
 *   Left : M0 10 L10.065 20 L11.915 18.166 L3.694 10 L11.915 1.837 L10.065 0 Z
 *   Right: mirror via scaleX(-1)
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
      className={`group box-border flex justify-center items-center w-[53px] h-[53px] max-[768px]:w-[44px] max-[768px]:h-[44px] border border-[#4C4C4C] rounded-[5.5px] bg-transparent cursor-pointer shrink-0 transition-all duration-250 ease-in-out hover:border-[#D9D9D9] hover:bg-[rgba(247,247,247,0.05)] active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-lime-yellow focus-visible:outline-offset-2 ${className}`}
      onClick={onClick}
      aria-label={label}
      type="button"
    >
      <svg
        className="max-[768px]:scale-[0.82] transition-colors duration-250 ease-in-out"
        width="12"
        height="20"
        viewBox="0 0 11.915 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{
          transform: direction === 'right' ? 'scaleX(-1)' : 'none',
        }}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 10L10.065 20L11.915 18.166L3.694 10L11.915 1.837L10.065 0L0 10Z"
          className="fill-[#D9D9D9] group-hover:fill-white transition-colors duration-250 ease-in-out"
        />
      </svg>
    </button>
  );
}


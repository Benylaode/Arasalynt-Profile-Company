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
    <div className={`flex flex-col gap-2 ${className}`}>
      <span className="font-heading font-extrabold text-[56px] max-[768px]:text-[40px] leading-tight tracking-[-0.02em] text-lime-yellow">
        {value}
      </span>
      <span className="font-body font-normal text-sm leading-loose tracking-[0.02em] text-[#A0A0A0]">
        {label}
      </span>
    </div>
  );
}

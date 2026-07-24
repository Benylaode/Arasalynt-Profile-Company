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
  const isLight = variant === 'light';
  const dotBg = isLight ? 'bg-lime-yellow' : 'bg-blue-600';
  const textColor = isLight ? 'text-lime-yellow' : 'text-blue-600';

  return (
    <div className={`inline-flex flex-row items-center gap-2 ${className}`}>
      <span className={`w-2 h-2 shrink-0 ${dotBg}`} aria-hidden="true" />
      <span className={`font-body font-extrabold text-sm leading-[1.6] tracking-[0.02em] uppercase ${textColor}`}>
        {text}
      </span>
    </div>
  );
}

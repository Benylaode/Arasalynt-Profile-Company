import type { ButtonVariant, ButtonSize } from '@/types';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  children: React.ReactNode;
}

/**
 * Button — Primary action component.
 *
 * Variants:
 * - primary:   Solid lime yellow (#E6FF2A), dark text
 * - secondary: Outline lime yellow, light text
 * - ghost:     Transparent, light text
 */
export default function Button({
  variant = 'primary',
  size = 'default',
  href,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseClasses =
    'inline-flex flex-row justify-center items-center gap-[10px] rounded-full font-body font-bold cursor-pointer transition-all duration-250 ease-in-out whitespace-nowrap no-underline active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#E6FF2A] focus-visible:outline-offset-[3px]';

  const variantClasses = {
    primary: 'bg-[#E6FF2A] text-[#0B0F19] font-extrabold hover:bg-[#d8f21d] hover:shadow-[0_8px_25px_rgba(230,255,42,0.3)] hover:-translate-y-[2px]',
    secondary: 'bg-white/5 border border-[#E6FF2A]/80 text-white font-bold backdrop-blur-sm hover:bg-[#E6FF2A]/10 hover:border-[#E6FF2A] hover:shadow-[0_8px_25px_rgba(230,255,42,0.15)] hover:-translate-y-[2px]',
    ghost: 'bg-transparent text-white font-semibold hover:bg-white/10 hover:text-[#E6FF2A]',
  }[variant];

  const sizeClasses =
    size === 'small'
      ? 'h-[44px] px-6 text-sm max-[768px]:h-[40px] max-[768px]:px-5 max-[768px]:text-xs'
      : 'h-[56px] px-8 text-base max-[768px]:h-[48px] max-[768px]:px-6 max-[768px]:text-sm';

  const classes = `${baseClasses} ${variantClasses} ${sizeClasses} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

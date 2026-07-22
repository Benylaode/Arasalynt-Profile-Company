import type { ButtonVariant, ButtonSize } from '@/types';
import styles from './Button.module.css';
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
  const classes = [
    styles.button,
    styles[variant],
    size === 'small' ? styles.small : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

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

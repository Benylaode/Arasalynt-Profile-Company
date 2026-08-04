import type { ContainerWidth } from '@/types';
import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  width?: ContainerWidth;
  className?: string;
  as?: React.ElementType;
}

/**
 * Container — Consistent width wrapper for page content.
 *
 * Widths:
 * - max:     1980px (widest MV frame, including responsive gutters)
 * - content: 1315px (standard content, default)
 * - narrow:  921px  (narrow content like hero text)
 */
export default function Container({
  children,
  width = 'content',
  className = '',
  as: Tag = 'div',
}: ContainerProps) {
  const widthMap: Record<ContainerWidth, string> = {
    max: 'var(--container-max)',
    content: 'var(--container-content)',
    narrow: 'var(--container-narrow)',
  };

  return (
    <Tag
      className={className}
      style={{
        width: '100%',
        maxWidth: widthMap[width],
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: 'var(--container-padding-x)',
        paddingRight: 'var(--container-padding-x)',
      }}
    >
      {children}
    </Tag>
  );
}

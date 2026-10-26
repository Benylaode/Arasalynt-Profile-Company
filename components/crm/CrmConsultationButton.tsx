'use client';

import React from 'react';

interface CrmConsultationButtonProps {
  solutionTitle?: string;
  className?: string;
  children: React.ReactNode;
}

export default function CrmConsultationButton({
  solutionTitle = 'Enterprise Solution (Marka ERP)',
  className = '',
  children,
}: CrmConsultationButtonProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('open-crm-consultation', {
          detail: { solution: solutionTitle },
        })
      );
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={className}
    >
      {children}
    </button>
  );
}

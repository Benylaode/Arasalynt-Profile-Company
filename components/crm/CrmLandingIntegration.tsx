'use client';

import React, { useState, useEffect } from 'react';
import CrmConsultationModal from './CrmConsultationModal';

export default function CrmLandingIntegration() {
  const [isOpen, setIsOpen] = useState(false);
  const [defaultSolution, setDefaultSolution] = useState('');

  useEffect(() => {
    const handleConsultationEvent = (e: Event) => {
      const customEvent = e as CustomEvent<{ solution?: string }>;
      setDefaultSolution(customEvent?.detail?.solution || '');
      setIsOpen(true);
    };

    const handleHash = () => {
      if (typeof window === 'undefined') return;
      const hash = window.location.hash.toLowerCase();
      if (hash === '#crm-consultation' || hash === '#consultation') {
        setIsOpen(true);
      }
    };

    window.addEventListener('open-crm-consultation', handleConsultationEvent);
    window.addEventListener('hashchange', handleHash);
    handleHash();

    return () => {
      window.removeEventListener('open-crm-consultation', handleConsultationEvent);
      window.removeEventListener('hashchange', handleHash);
    };
  }, []);

  return (
    <CrmConsultationModal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      defaultSolution={defaultSolution}
    />
  );
}

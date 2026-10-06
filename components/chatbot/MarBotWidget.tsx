'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import MarBotTrigger from './MarBotTrigger';

const MarBotDrawer = dynamic(() => import('./MarBotDrawer'), {
  ssr: false,
});

export default function MarBotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prev) => {
      const next = !prev;
      if (next) setHasOpened(true);
      return next;
    });
  };
  const closeDrawer = () => setIsOpen(false);

  return (
    <>
      <MarBotTrigger isOpen={isOpen} onClick={toggleDrawer} />
      {hasOpened && <MarBotDrawer isOpen={isOpen} onClose={closeDrawer} />}
    </>
  );
}

export const ArsAIWidget = MarBotWidget;


'use client';

import { useState } from 'react';
import type { ChallengeCard } from '@/lib/our-solution.data';
import ServiceDetailsModal from './ServiceDetailsModal';

type ChallengeCardsSectionProps = {
  cards: ChallengeCard[];
  modulesSectionTag?: string;
  modulesSectionTitle?: string;
  modulesSectionDescription?: string;
  challengeFallback: string;
  solutionTitle: string;
};

export default function ChallengeCardsSection({
  cards,
  modulesSectionTag,
  modulesSectionTitle,
  modulesSectionDescription,
  challengeFallback,
  solutionTitle,
}: ChallengeCardsSectionProps) {
  const [selectedCard, setSelectedCard] = useState<ChallengeCard | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (card: ChallengeCard) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section className="bg-[#F6FBFF] px-[6vw] py-[clamp(70px,6.5vw,120px)] max-[1199px]:px-[4vw]">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-10">
          <div className="flex max-w-[900px] flex-col gap-4">
            <div className="flex items-center gap-2.5 font-body text-[13px] font-bold uppercase tracking-[0.08em] text-[#1A3E9E]">
              <span className="h-2 w-2 bg-[#1A3E9E]" />
              <span>{modulesSectionTag ?? 'CORE MODULES & SERVICES'}</span>
            </div>
            <h2 className="font-heading text-[clamp(32px,3.2vw,56px)] font-medium leading-[1.12] text-[#101010]">
              {modulesSectionTitle ?? 'Real Challenges We Solve'}
            </h2>
            <p className="font-body text-[clamp(15px,1vw,18px)] leading-[1.65] text-[#424242]">
              {modulesSectionDescription ?? challengeFallback}
            </p>
          </div>

          <div
            className={`grid grid-cols-1 gap-6 ${
              cards.length === 2
                ? 'md:grid-cols-2 max-w-[1100px] mx-auto w-full'
                : 'md:grid-cols-2 lg:grid-cols-3'
            }`}
          >
            {cards.map((card) => (
              <div
                key={card.number}
                role="button"
                tabIndex={0}
                onClick={() => handleOpenModal(card)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleOpenModal(card);
                  }
                }}
                className="group flex cursor-pointer flex-col overflow-hidden rounded-[26px] border border-[#E4E4E4] bg-white shadow-[0_12px_36px_rgba(26,62,158,0.06)] transition-all duration-300 hover:-translate-y-2 hover:border-[#1A3E9E] hover:shadow-[0_24px_50px_rgba(26,62,158,0.18)]"
              >
                <div className="relative aspect-[1396/936] w-full overflow-hidden bg-[#001830]">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-contain"
                  />
                  
                  {/* Subtle hover pill overlay */}
                  <div className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 font-body text-[11px] font-bold text-[#101010] shadow-md backdrop-blur-sm transition-all duration-300 group-hover:bg-[#E6FF2A]">
                    <span>View Details</span>
                    <svg
                      className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-between bg-gradient-to-b from-[#101010] to-[#155A99] p-6 text-white sm:p-7">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex items-center rounded-full bg-[#E6FF2A] px-3 py-1 font-body text-[11px] font-bold uppercase tracking-wider text-[#101010] shadow-sm">
                        {card.badge}
                      </span>
                      <span className="font-body text-[13px] font-bold tracking-widest text-[#E6FF2A]">
                        {card.number}
                      </span>
                    </div>

                    <h3 className="mt-4 font-heading text-[21px] font-medium leading-snug text-[#F7F7F7] transition-colors group-hover:text-[#E6FF2A]">
                      {card.title}
                    </h3>
                    <p className="mt-2.5 font-body text-[13.5px] leading-[1.65] text-white/85">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE DETAILS MODAL POPUP ── */}
      <ServiceDetailsModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        card={selectedCard}
        allCards={cards}
        solutionTitle={solutionTitle}
        onSelectCard={(newCard) => setSelectedCard(newCard)}
      />
    </>
  );
}


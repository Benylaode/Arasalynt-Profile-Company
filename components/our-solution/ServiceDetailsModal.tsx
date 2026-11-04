'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import type { ChallengeCard } from '@/lib/our-solution.data';
import { getServiceCardDetail } from './service-details-data';

type ServiceDetailsModalProps = {
  isOpen: boolean;
  onClose: () => void;
  card: ChallengeCard | null;
  allCards: ChallengeCard[];
  solutionTitle: string;
  onSelectCard: (card: ChallengeCard) => void;
};

export default function ServiceDetailsModal({
  isOpen,
  onClose,
  card,
  allCards,
  solutionTitle,
  onSelectCard,
}: ServiceDetailsModalProps) {
  const modalScrollRef = useRef<HTMLDivElement>(null);

  // Lock background scroll when open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !card) return null;

  const detail = getServiceCardDetail(card.title, solutionTitle);
  const otherCards = allCards.filter((c) => c.number !== card.number);

  const handleSwitchCard = (newCard: ChallengeCard) => {
    onSelectCard(newCard);
    if (modalScrollRef.current) {
      modalScrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-service-title"
      className="fixed inset-0 z-[999] flex items-center justify-center overflow-y-auto bg-black/75 p-3 backdrop-blur-md transition-opacity duration-300 sm:p-6 md:p-8"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={modalScrollRef}
        className="relative max-h-[92vh] w-full max-w-[1240px] overflow-y-auto rounded-[28px] border border-black/15 bg-white p-6 shadow-2xl transition-all sm:rounded-[32px] sm:p-10 md:p-12 lg:p-14"
      >
        {/* ── TOP NAV BAR ── */}
        <div className="flex items-center justify-between border-b border-black/[0.08] pb-5 sm:pb-6">
          <button
            type="button"
            onClick={onClose}
            className="group inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[13px] font-semibold tracking-wider text-[#84849B] transition-all hover:bg-black/5 hover:text-[#101010]"
          >
            <svg
              className="h-4 w-4 transition-transform group-hover:-translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            <span>Back to Services</span>
          </button>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-black/5 text-[#84849B] transition-all hover:bg-black/10 hover:text-[#101010]"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* ── HERO ILLUSTRATION / SCREENSHOT ── */}
        <div className="mt-6 overflow-hidden rounded-[22px] border border-black/10 bg-[#0C1222] shadow-[0_16px_40px_rgba(0,0,0,0.08)] sm:mt-8 sm:rounded-[24px]">
          <div className="relative aspect-[16/9] w-full max-h-[500px] overflow-hidden bg-gradient-to-b from-[#10192D] to-[#0A101D]">
            <img
              src={card.image}
              alt={card.title}
              className="h-full w-full object-contain sm:object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
          </div>
        </div>

        {/* ── HEADER TITLE & SUITE LOGO ── */}
        <div className="mt-8 flex flex-col justify-between gap-5 border-b border-black/[0.08] pb-6 sm:mt-10 sm:flex-row sm:items-end sm:pb-8">
          <div className="flex flex-col gap-2">
            <span className="font-body text-[12px] font-extrabold uppercase tracking-[0.12em] text-[#002BB9] sm:text-[13px]">
              {detail.category}
            </span>
            <h2
              id="modal-service-title"
              className="font-heading text-[clamp(26px,2.8vw,44px)] font-bold leading-tight tracking-[-0.01em] text-[#101010]"
            >
              {card.title}
            </h2>
          </div>

          <div className="shrink-0">
            {detail.suiteLogo ? (
              <img
                src={detail.suiteLogo}
                alt={detail.suiteName}
                className="h-8 w-auto object-contain sm:h-10"
              />
            ) : (
              <div className="rounded-full bg-[#155599]/10 px-4 py-1.5 font-heading text-[13px] font-bold uppercase tracking-wider text-[#155599]">
                {detail.suiteName}
              </div>
            )}
          </div>
        </div>

        {/* ── TWO-COLUMN CONTENT BODY ── */}
        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Detailed Description & Capabilities */}
          <div className="flex flex-col gap-6 lg:col-span-7 xl:col-span-8">
            <div className="space-y-5 text-[#334155]">
              {detail.paragraphs.map((p, idx) => (
                <p
                  key={idx}
                  className="font-body text-[15px] leading-[1.75] text-[#2C3E50] sm:text-[16px]"
                >
                  {p}
                </p>
              ))}
            </div>

            {/* Core Capabilities Box */}
            <div className="mt-4 rounded-2xl border border-[#E2E8F0] bg-[#F8FBFF] p-6 sm:p-7">
              <h4 className="font-heading text-[16px] font-bold uppercase tracking-wider text-[#101010]">
                Core Operational Capabilities
              </h4>
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {detail.capabilities.map((cap, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#002BB9]/10 text-[#002BB9]">
                      <svg
                        className="h-3 w-3"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="3.5 8.5 6.5 11.5 12.5 5" />
                      </svg>
                    </span>
                    <span className="font-body text-[13.5px] leading-snug text-[#334155]">
                      {cap}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Abstract Architecture Illustration & CTA Box */}
          <div className="flex flex-col gap-6 lg:col-span-5 xl:col-span-4">
            {/* Abstract Service Architecture Illustration */}
            <div className="group overflow-hidden rounded-[24px] border border-black/10 bg-white p-3 shadow-[0_12px_30px_rgba(26,62,158,0.06)] transition-all duration-300 hover:border-[#1A3E9E] hover:shadow-[0_18px_40px_rgba(26,62,158,0.12)]">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[18px] bg-[#0A101D] flex items-center justify-center">
                <img
                  src={detail.abstractImage ?? card.image}
                  alt={`${card.title} Architecture Overview`}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </div>

            {/* CTA Box */}
            <div className="rounded-[22px] border border-[#155599]/25 bg-gradient-to-br from-[#F0F7FF] via-[#E8F3FD] to-[#F8FBFF] p-6 text-left shadow-sm sm:p-7">
              <h3 className="font-heading text-[20px] font-bold text-[#101010] sm:text-[22px]">
                Want to apply this to your business?
              </h3>
              <p className="mt-2 font-body text-[13.5px] leading-relaxed text-[#475569]">
                Connect directly with our engineering team for an architecture walkthrough and tailored implementation roadmap.
              </p>
              <Link
                href="/contact-us"
                onClick={onClose}
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#0A2540] px-6 py-3 font-body text-[12px] font-bold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:bg-[#1A3E9E] hover:shadow-lg"
              >
                CONTACT OUR TEAM →
              </Link>
            </div>
          </div>
        </div>

        {/* ── OTHER SERVICES SECTION ── */}
        {otherCards.length > 0 && (
          <div className="mt-16 border-t border-black/[0.08] pt-12 sm:mt-20 sm:pt-14">
            <div className="text-center">
              <h3 className="font-heading text-[clamp(24px,2.4vw,34px)] font-medium text-[#101010]">
                Other Services
              </h3>
              <p className="mt-1.5 font-body text-[14px] text-[#64748B]">
                Explore adjacent capabilities within {solutionTitle}
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {otherCards.map((otherCard) => (
                <div
                  key={otherCard.number}
                  role="button"
                  tabIndex={0}
                  onClick={() => handleSwitchCard(otherCard)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleSwitchCard(otherCard);
                    }
                  }}
                  className="group flex cursor-pointer flex-col overflow-hidden rounded-[24px] border border-[#E2E8F0] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1A3E9E] hover:shadow-[0_16px_36px_rgba(26,62,158,0.12)]"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0F172A]">
                    <img
                      src={otherCard.image}
                      alt={otherCard.title}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>

                  <div className="flex flex-1 flex-col justify-between bg-gradient-to-b from-[#101010] to-[#155A99] p-5 text-white sm:p-6">
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="inline-flex items-center rounded-full bg-[#E6FF2A] px-2.5 py-0.5 font-body text-[10px] font-bold uppercase tracking-wider text-[#101010]">
                          {otherCard.badge}
                        </span>
                        <span className="font-body text-[12px] font-bold tracking-widest text-[#E6FF2A]">
                          {otherCard.number}
                        </span>
                      </div>

                      <h4 className="mt-3 font-heading text-[18px] font-medium leading-snug text-[#F7F7F7] group-hover:text-[#E6FF2A] transition-colors">
                        {otherCard.title}
                      </h4>
                      <p className="mt-2 line-clamp-3 font-body text-[12.5px] leading-[1.6] text-white/80">
                        {otherCard.description}
                      </p>
                    </div>

                    <div className="mt-4 flex items-center gap-1.5 font-body text-[11px] font-bold uppercase tracking-wider text-[#E6FF2A]">
                      <span>View Service Details</span>
                      <svg
                        className="h-3 w-3 transition-transform group-hover:translate-x-1"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


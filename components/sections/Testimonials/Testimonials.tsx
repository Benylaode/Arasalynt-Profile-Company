'use client';

import { useState } from 'react';
import SectionLabel from '@/components/ui/SectionLabel/SectionLabel';

/* ── Pure SVG Icons ── */
const IconQuote = () => (
  <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1zm12 0c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
  </svg>
);

const IconChevronLeft = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const IconChevronRight = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M9 18l6-6-6-6" />
  </svg>
);

const MOCK_TESTIMONIALS = [
  {
    id: 1,
    name: "NINA PRATIWI",
    role: "IT Director",
    company: "Sinar Mas",
    text: "Sangat puas dengan layanan IT Solution dari Arsalynt. Sistem kami sekarang jauh lebih stabil dan cepat. Tim support-nya juga sangat responsif dan professional. Sangat direkomendasikan untuk enterprise!",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=120&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "BUDI SETIAWAN",
    role: "Chief Technology Officer",
    company: "GOTO Logistics",
    text: "Arsalynt membantu kami melakukan integrasi sistem logistik nasional secara mulus. Arsitektur cloud mereka sangat tangguh dan andal untuk menangani beban transaksi dengan volume sangat tinggi.",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=120&auto=format&fit=crop",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % MOCK_TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + MOCK_TESTIMONIALS.length) % MOCK_TESTIMONIALS.length);
  };

  const active = MOCK_TESTIMONIALS[activeIndex];

  return (
    <section className="relative bg-white py-[120px] max-[1024px]:py-[96px] max-[768px]:py-[72px] text-center" id="testimonials" aria-label="Client Testimonials">
      <div className="w-full max-w-[921px] mx-auto px-[110px] max-[1280px]:px-[64px] max-[1024px]:px-[40px] max-[768px]:px-[24px] max-[480px]:px-[16px] flex flex-col items-center">
        
        {/* Quote Icon */}
        <div className="w-[56px] h-[56px] rounded-full bg-[#eff6ff] text-blue-600 flex items-center justify-center mb-6" aria-hidden="true">
          <IconQuote />
        </div>

        {/* Section Label */}
        <div className="mb-8">
          <SectionLabel text="TESTIMONIALS" />
        </div>

        {/* Testimonial Quote Slider */}
        <div className="w-full min-h-[140px]">
          {MOCK_TESTIMONIALS.map((t, idx) => (
            <div
              key={t.id}
              className="animate-fade-in"
              style={{
                display: idx === activeIndex ? 'block' : 'none',
              }}
            >
              <blockquote className="font-heading font-bold text-[24px] md:text-[32px] leading-relaxed text-[#101010] italic max-w-[680px] mx-auto">
                "{t.text}"
              </blockquote>
            </div>
          ))}
        </div>

        {/* Author Bio Row */}
        <div className="flex items-center gap-4 mt-8 pt-6 border-t border-[#E5E5E5]">
          <img
            src={active.avatar}
            alt={active.name}
            className="w-[56px] h-[56px] rounded-full object-cover border-2 border-[#E5E5E5]"
          />
          <div className="text-left">
            <div className="font-heading font-extrabold text-[13px] tracking-[0.05em] text-[#101010] uppercase">
              {active.name}
            </div>
            <div className="font-body text-[11px] font-semibold text-[#717171] mt-0.5">
              {active.role} at {active.company}
            </div>
          </div>
        </div>

        {/* Control Buttons */}
        <div className="flex gap-3 mt-8">
          <button 
            onClick={handlePrev} 
            className="w-9 h-9 rounded-full border border-[#E5E5E5] bg-white text-[#4C4C4C] flex items-center justify-center cursor-pointer transition-all duration-250 hover:bg-slate-100 hover:border-[#D9D9D9] hover:text-[#101010]" 
            aria-label="Previous testimonial"
          >
            <IconChevronLeft size={16} />
          </button>
          <button 
            onClick={handleNext} 
            className="w-9 h-9 rounded-full border border-[#E5E5E5] bg-white text-[#4C4C4C] flex items-center justify-center cursor-pointer transition-all duration-250 hover:bg-slate-100 hover:border-[#D9D9D9] hover:text-[#101010]" 
            aria-label="Next testimonial"
          >
            <IconChevronRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
}

'use client';

import Button from '@/components/ui/Button/Button';

export default function BeyondExpectations() {
  return (
    <section className="relative bg-gradient-to-br from-[#0B0F19] via-[#162456] to-[#0B0F19] border border-white/10 py-20 px-6 max-[1024px]:py-16 max-[768px]:py-12 max-[768px]:px-4 overflow-hidden flex items-center justify-center rounded-[32px] max-[768px]:rounded-[20px] my-16 mx-[110px] max-[1280px]:mx-[64px] max-[1024px]:mx-[40px] max-[768px]:mx-[24px] max-[480px]:mx-[16px] text-center shadow-[0_20px_50px_rgba(0,0,0,0.5)]" id="contact" aria-label="Beyond Expectations CTA">
      {/* Glow Center Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-[1]" 
        aria-hidden="true" 
        style={{
          background: 'radial-gradient(circle at center, rgba(37, 99, 235, 0.35) 0%, rgba(230, 255, 42, 0.08) 45%, transparent 70%)'
        }}
      />

      {/* Blueprint Grid Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-[1]" 
        aria-hidden="true" 
        style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          backgroundPosition: 'center'
        }}
      />

      <div className="relative z-[2] max-w-[720px] flex flex-col items-center gap-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-[#E6FF2A]" />
          <span className="font-heading font-extrabold text-[11px] tracking-[0.2em] uppercase text-white/90">
            START YOUR TRANSFORMATION
          </span>
        </div>

        <h2 className="font-heading font-bold text-[56px] max-[1280px]:text-[44px] max-[1024px]:text-[36px] max-[768px]:text-[28px] max-[480px]:text-[24px] leading-tight tracking-tight text-white">
          We Build Beyond
          <br />
          <span className="text-[#E6FF2A]">Your Expectations</span>
        </h2>

        <p className="font-body text-[18px] max-[1280px]:text-[16px] leading-relaxed text-[#94A3B8] max-w-[620px]">
          Partner with us to transform your digital landscape. Our team of experts is ready 
          to deliver tailored IT solutions that drive efficiency, growth, and long-term innovation.
        </p>

        <div className="flex flex-row max-[768px]:flex-col items-center gap-4 max-[768px]:gap-3 mt-4 max-[768px]:w-full [&_a]:max-[768px]:w-full [&_button]:max-[768px]:w-full">
          <Button variant="primary" href="#contact">
            Get Started
          </Button>
          <Button variant="secondary" href="#about">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}

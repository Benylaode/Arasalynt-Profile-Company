'use client';

import React, { useState, useEffect } from 'react';

interface CrmConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultSolution?: string;
}

const SOLUTIONS = [
  'Enterprise Solution (Marka ERP)',
  'Data & AI Integration',
  'Smart IOT System',
  'Digital Development (Web & Apps)',
  'Technology Consultation',
  'Other Inquiries',
];

export default function CrmConsultationModal({
  isOpen,
  onClose,
  defaultSolution = '',
}: CrmConsultationModalProps) {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [solutionChoice, setSolutionChoice] = useState('');
  const [targetBudget, setTargetBudget] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (defaultSolution) {
      setSolutionChoice(defaultSolution);
    }
  }, [defaultSolution, isOpen]);

  // Lock body scroll when open
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          company: company.trim(),
          email: email.trim(),
          phone: phone.trim(),
          contact: `${phone.trim()} | ${email.trim()}`.trim(),
          service: solutionChoice || 'Enterprise Solution',
          packageChoice: solutionChoice || 'Enterprise Solution',
          targetBudget: targetBudget ? Number(targetBudget) : undefined,
          message: message.trim(),
          brandDescription: message.trim(),
          source: 'landing_page_modal',
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Failed to submit CRM consultation form.');
      }

      setIsSuccess(true);
    } catch (err: unknown) {
      const errObj = err as Error;
      setErrorMessage(errObj.message || 'An error occurred while submitting data. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetAndClose = () => {
    setName('');
    setCompany('');
    setEmail('');
    setPhone('');
    setSolutionChoice('');
    setTargetBudget('');
    setMessage('');
    setIsSuccess(false);
    setErrorMessage('');
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="crm-modal-title"
      className="fixed inset-0 z-[120] flex items-center justify-center bg-black/75 p-4 backdrop-blur-md"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) handleResetAndClose();
      }}
    >
      <div className="relative w-full max-w-[620px] max-h-[90vh] overflow-y-auto rounded-[24px] border border-white/15 bg-[#0A0D14] p-6 text-white shadow-2xl md:p-8">
        {/* Close Button */}
        <button
          type="button"
          onClick={handleResetAndClose}
          aria-label="Close modal"
          className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {isSuccess ? (
          <div className="py-6 text-center">
            {/* Starburst badge */}
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#1A3E9E]/20 text-[#E6FF2A] border border-[#1A3E9E]">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>

            <h3 id="crm-modal-title" className="font-heading text-2xl font-bold tracking-tight text-white">
              Consultation Successfully Scheduled!
            </h3>
            <p className="mx-auto mt-3 max-w-[440px] text-sm leading-relaxed text-white/70">
              Your enterprise project requirements have been recorded and synchronized directly with our <strong className="text-white">Marka ERP CRM</strong> system. Our engineering representatives will contact you shortly.
            </p>

            <button
              type="button"
              onClick={handleResetAndClose}
              className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-[#1A3E9E] px-8 text-xs font-bold tracking-wider uppercase text-white hover:bg-[#14347F] transition"
            >
              Close &amp; Continue Exploring
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-5 pr-8">
              <span className="font-mono text-[11px] font-semibold tracking-wider uppercase text-[#E6FF2A]">
                Enterprise CRM Consultation
              </span>
              <h2 id="crm-modal-title" className="mt-1 font-heading text-2xl font-bold tracking-tight text-white md:text-3xl">
                Schedule a Solution Consultation
              </h2>
              <p className="mt-1.5 text-xs text-white/60">
                Connect your digital transformation initiatives directly with our engineering representatives via Marka CRM.
              </p>
            </div>

            {errorMessage && (
              <div className="mb-4 rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-xs text-red-400">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-medium text-white/80 mb-1">
                    Full Name <span className="text-[#FF5050]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. John Doe"
                    className="h-10 w-full rounded-lg border border-white/15 bg-white/5 px-3 text-xs text-white placeholder-white/30 focus:border-[#1A3E9E] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/80 mb-1">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="e.g. Acme Corporation"
                    className="h-10 w-full rounded-lg border border-white/15 bg-white/5 px-3 text-xs text-white placeholder-white/30 focus:border-[#1A3E9E] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-medium text-white/80 mb-1">
                    Business Email <span className="text-[#FF5050]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@company.com"
                    className="h-10 w-full rounded-lg border border-white/15 bg-white/5 px-3 text-xs text-white placeholder-white/30 focus:border-[#1A3E9E] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/80 mb-1">
                    WhatsApp / Phone Number <span className="text-[#FF5050]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (555) 000-0000"
                    className="h-10 w-full rounded-lg border border-white/15 bg-white/5 px-3 text-xs text-white placeholder-white/30 focus:border-[#1A3E9E] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-medium text-white/80 mb-1">
                    Primary Solution Focus
                  </label>
                  <select
                    value={solutionChoice}
                    onChange={(e) => setSolutionChoice(e.target.value)}
                    className="h-10 w-full rounded-lg border border-white/15 bg-[#0A0D14] px-3 text-xs text-white focus:border-[#1A3E9E] focus:outline-none"
                  >
                    <option value="">Select a Solution...</option>
                    {SOLUTIONS.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/80 mb-1">
                    Estimated Target Budget (Optional)
                  </label>
                  <input
                    type="number"
                    value={targetBudget}
                    onChange={(e) => setTargetBudget(e.target.value)}
                    placeholder="e.g. 50000"
                    className="h-10 w-full rounded-lg border border-white/15 bg-white/5 px-3 text-xs text-white placeholder-white/30 focus:border-[#1A3E9E] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-white/80 mb-1">
                  Project Scope &amp; Description <span className="text-[#FF5050]">*</span>
                </label>
                <textarea
                  required
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your system architecture, business workflows, or goals..."
                  className="w-full resize-none rounded-lg border border-white/15 bg-white/5 p-3 text-xs text-white placeholder-white/30 focus:border-[#1A3E9E] focus:outline-none"
                />
              </div>

              <div className="mt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="h-10 rounded-lg px-4 text-xs font-medium text-white/70 hover:text-white transition"
                >Cancel</button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-[#1A3E9E] px-6 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#14347F] transition disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting to CRM...' : 'Submit Consultation'}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

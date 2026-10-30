'use client';

import React, { useState } from 'react';
import Link from 'next/link';

function StarburstCheckBadge() {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto mb-4"
      aria-hidden="true"
    >
      <path
        d="M50 4L57.5 12.5L68.6 10.1L72.7 20.7L83.9 22.6L83.8 34L93.4 40.2L89.1 50L93.4 59.8L83.8 66L83.9 77.4L72.7 79.3L68.6 89.9L57.5 87.5L50 96L42.5 87.5L31.4 89.9L27.3 79.3L16.1 77.4L16.2 66L6.6 59.8L10.9 50L6.6 40.2L16.2 34L16.1 22.6L27.3 20.7L31.4 10.1L42.5 12.5L50 4Z"
        fill="#1A3E9E"
      />
      <path
        d="M34 50.5L44 60.5L66 38.5"
        stroke="white"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RequiredLabel({ children }: { children: React.ReactNode }) {
  return (
    <label className="flex items-start gap-1 font-body text-[13px] font-medium leading-[1.5] text-[#292929] sm:text-[14px]">
      <span className="font-bold text-[#FF5050]">*</span>
      <span>{children}</span>
    </label>
  );
}

export default function FeedbackClient() {
  const [customerCode, setCustomerCode] = useState('');
  const [rating, setRating] = useState<number>(5);
  const [feedbackText, setFeedbackText] = useState('');
  const [feedbackType, setFeedbackType] = useState('CUSTOMER_REVIEW');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    if (!customerCode.trim()) {
      setErrorMessage('Client Code is required to link this evaluation to your enterprise project.');
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customer_code: customerCode.trim(),
          rating,
          feedback_text: feedbackText.trim(),
          feedback_type: feedbackType || 'CUSTOMER_REVIEW',
        }),
      });

      const json = await res.json();
      if (!res.ok || !json.success) {
        throw new Error(json.error || 'Failed to submit feedback.');
      }

      setIsSuccess(true);
    } catch (err: unknown) {
      const errObj = err as Error;
      setErrorMessage(errObj.message || 'An error occurred while submitting your review.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="rounded-[20px] border border-[#D9D9D9] bg-white p-8 sm:p-12 text-center shadow-sm">
        <StarburstCheckBadge />
        <h3 className="font-heading text-[26px] font-semibold text-[#101010]">
          Thank You for Your Feedback!
        </h3>
        <p className="mx-auto mt-3 max-w-[480px] font-body text-[14px] leading-[1.6] text-[#717171]">
          Your evaluation for client code <strong className="text-[#1A3E9E]">{customerCode}</strong> has been successfully recorded. We sincerely appreciate your valuable insight as we continually enhance our service standards.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => {
              setIsSuccess(false);
              setFeedbackText('');
            }}
            className="inline-flex h-[48px] items-center justify-center rounded-full border border-[#C8C8C8] bg-white px-6 font-body text-[13px] font-bold uppercase tracking-[0.04em] text-[#505050] transition hover:bg-gray-100 hover:text-[#101010]"
          >
            SUBMIT ANOTHER REVIEW
          </button>
          <Link
            href="/"
            className="inline-flex h-[48px] items-center justify-center rounded-full bg-[#1A3E9E] px-8 font-body text-[13px] font-bold uppercase tracking-[0.04em] text-white transition hover:bg-[#14347F]"
          >
            BACK TO HOME
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-[20px] border border-[#D9D9D9] bg-white p-6 sm:p-8 shadow-sm">
      <div className="mb-6 flex flex-col gap-1">
        <div className="flex items-center gap-2 font-body text-[11px] font-extrabold uppercase tracking-[0.06em] text-[#1A3E9E]">
          <span className="h-1.5 w-1.5 bg-[#1A3E9E]" />
          <span>CLIENT SATISFACTION EVALUATION</span>
        </div>
        <h3 className="font-heading text-[20px] font-medium text-[#101010]">
          Service Quality &amp; Feedback Form
        </h3>
        <p className="font-body text-[13px] text-[#717171]">
          Your feedback is reviewed directly by Arsalynk management to ensure optimal execution and support standards across every client engagement.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4.5">
        {/* 1. Customer Code */}
        <div className="flex flex-col gap-1.5">
          <RequiredLabel>Client Code / Company ID</RequiredLabel>
          <input
            type="text"
            required
            value={customerCode}
            onChange={(e) => setCustomerCode(e.target.value.toUpperCase())}
            placeholder="e.g. CUST-MP-01 or from your proposal/invoice"
            className="h-[46px] w-full rounded-[8px] border border-[#C8C8C8] bg-white px-4 font-body text-[14px] text-[#101010] outline-none transition placeholder:text-[#B0B0B0] focus:border-[#1A3E9E] focus:ring-2 focus:ring-[#1A3E9E]/10 md:h-[48px]"
          />
          <span className="font-body text-[11px] text-[#717171]">
            * Unique identifier listed on your proposal document, invoice, or master agreement with Arsalynk.
          </span>
        </div>

        {/* 2. Star Rating */}
        <div className="flex flex-col gap-2 rounded-[12px] bg-[#F7F7F7] p-4 border border-[#EAEAEA]">
          <RequiredLabel>Satisfaction Level</RequiredLabel>
          <div className="flex items-center gap-2 pt-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                aria-label={`Star ${star}`}
                className={`flex h-11 w-11 items-center justify-center rounded-[10px] text-[20px] transition duration-200 ${
                  rating >= star
                    ? 'bg-[#1A3E9E] text-[#E6FF2A] shadow-md scale-105'
                    : 'bg-white text-[#B0B0B0] border border-[#D9D9D9] hover:border-[#1A3E9E]'
                }`}
              >
                ★
              </button>
            ))}
          </div>
          <span className="font-body text-[12px] font-semibold text-[#1A3E9E]">
            {rating === 5 && 'Outstanding (5/5) — Exceeded Expectations'}
            {rating === 4 && 'Satisfied (4/5) — Professional Standards Fully Met'}
            {rating === 3 && 'Average (3/5) — Adequate, Room for Improvement'}
            {rating === 2 && 'Needs Improvement (2/5) — Below Expectations'}
            {rating === 1 && 'Unsatisfactory (1/5) — Requires Immediate Attention'}
          </span>
        </div>

        {/* 3. Service Category */}
        <div className="flex flex-col gap-1.5">
          <label className="font-body text-[13px] font-medium text-[#292929]">
            Service Category
          </label>
          <div className="relative">
            <select
              value={feedbackType}
              onChange={(e) => setFeedbackType(e.target.value)}
              className="h-[46px] w-full appearance-none rounded-[8px] border border-[#C8C8C8] bg-white px-4 font-body text-[14px] text-[#101010] outline-none transition focus:border-[#1A3E9E] focus:ring-2 focus:ring-[#1A3E9E]/10 md:h-[48px]"
            >
              <option value="CUSTOMER_REVIEW">Project Collaboration Review</option>
              <option value="SERVICE_EVALUATION">System &amp; Software Performance</option>
              <option value="PROJECT_FEEDBACK">Project Management &amp; Communication</option>
              <option value="SUPPORT_FEEDBACK">Technical Support Quality</option>
            </select>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#717171]"
            >
              <path
                d="m7 10 5 5 5-5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* 4. Feedback Text */}
        <div className="flex flex-col gap-1.5">
          <RequiredLabel>Feedback, Comments, or Suggestions</RequiredLabel>
          <textarea
            required
            rows={4}
            value={feedbackText}
            onChange={(e) => setFeedbackText(e.target.value)}
            placeholder="Share your experience working with Arsalynk's engineering and operations team..."
            className="w-full resize-none rounded-[8px] border border-[#C8C8C8] bg-white p-3.5 font-body text-[14px] text-[#101010] outline-none transition placeholder:text-[#B0B0B0] focus:border-[#1A3E9E] focus:ring-2 focus:ring-[#1A3E9E]/10"
          />
        </div>

        {errorMessage && (
          <div className="rounded-[8px] border border-red-200 bg-red-50 p-3 font-body text-[13px] text-red-700">
            {errorMessage}
          </div>
        )}

        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex h-[48px] w-full sm:w-[220px] items-center justify-center gap-2 rounded-full bg-[#1A3E9E] px-8 font-body text-[13px] font-bold uppercase tracking-[0.04em] text-white transition hover:bg-[#14347F] disabled:cursor-wait disabled:opacity-60 md:h-[50px]"
          >
            <span>{isSubmitting ? 'SUBMITTING...' : 'SUBMIT FEEDBACK'}</span>
            <svg width="6" height="10" viewBox="0 0 8 14" fill="none" aria-hidden="true">
              <path
                d="M1 1L7 7L1 13"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}

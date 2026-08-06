'use client';

import { useState, type FormEvent, type ReactNode } from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';
import BeyondExpectations from '@/components/sections/BeyondExpectations/BeyondExpectations';
import { submitLead } from '@/lib/actions';

function DownIcon() {
  return (
    <svg
      width="32"
      height="22"
      viewBox="0 0 32 22"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="m4 5 12 12L28 5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      width="8"
      height="14"
      viewBox="0 0 8 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M1 1L7 7L1 13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M6.62 10.79a15.44 15.44 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.5 11.5 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.5 11.5 0 0 0 .57 3.57 1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
    </svg>
  );
}

function MailIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6Zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M5.34 3.25A2.35 2.35 0 1 1 5.33 7.95a2.35 2.35 0 0 1 .01-4.7ZM3.32 9.63h4.03V21H3.32V9.63Zm6.54 0h3.86v1.56h.05c.54-1.02 1.85-2.1 3.81-2.1 4.08 0 4.83 2.69 4.83 6.18V21h-4.02v-5.08c0-1.21-.02-2.77-1.69-2.77-1.69 0-1.95 1.32-1.95 2.68V21h-4.02V9.63Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      width="38"
      height="38"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12.04 2a9.84 9.84 0 0 0-8.51 14.76L2 22l5.38-1.41A9.86 9.86 0 1 0 12.04 2Zm0 17.9a8 8 0 0 1-4.08-1.12l-.29-.17-3.19.84.85-3.11-.19-.31a7.99 7.99 0 1 1 6.9 3.87Zm4.39-5.99c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.93-1.19-.71-.64-1.19-1.42-1.33-1.66-.14-.24-.02-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.19-.47-.39-.41-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.1.16 1.51.1.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

function RequiredLabel({ children }: { children: ReactNode }) {
  return (
    <label className="flex items-start gap-1 font-body text-[14px] font-normal leading-[1.5] tracking-[0.02em] text-[#292929] sm:text-[15px]">
      <span className="font-bold text-[#FF5050]">*</span>
      <span>{children}</span>
    </label>
  );
}

function StarburstCheckBadge() {
  return (
    <svg
      width="96"
      height="96"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto mb-5"
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

function SuccessModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-success-title"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-5 py-8 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-[560px] overflow-hidden rounded-[32px] bg-white p-8 text-center shadow-2xl md:p-12">
        {/* Close Button X on top right in gray circle */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close success message"
          className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full bg-[#B0B0B0] text-white transition hover:bg-[#888888]"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M6 6l12 12M18 6 6 18"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* Starburst badge icon */}
        <StarburstCheckBadge />

        {/* Title */}
        <h2
          id="contact-success-title"
          className="font-heading text-[28px] font-bold leading-[1.18] tracking-[-0.02em] text-[#101010] md:text-[38px]"
        >
          Thank You for Reaching Out!
        </h2>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-[460px] font-body text-[14px] leading-[1.65] text-[#717171] md:text-[16px]">
          Your form has been successfully submitted. Our team will get back to you as soon as possible. Don&apos;t forget to check your inbox and spam folder for our response.
        </p>

        {/* Action Button */}
        <Link
          href="/"
          onClick={onClose}
          className="mx-auto mt-8 inline-flex h-[50px] items-center justify-center gap-2 rounded-full bg-[#1A3E9E] px-8 font-body text-[13px] font-bold tracking-[0.04em] text-white transition hover:bg-[#14347F]"
        >
          <span>BACK TO HOME</span>
          <svg width="6" height="10" viewBox="0 0 8 14" fill="none" aria-hidden="true">
            <path
              d="M1 1L7 7L1 13"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

type BusinessCard = {
  name: string;
  slug: string;
  logo: string;
  email: string;
  instagram: string;
  linkedin: string;
  actionLabel: 'VISIT WEB' | 'PHONE US';
  actionHref: string;
};

const COMPANY_CARDS: BusinessCard[] = [
  {
    name: 'Kaluna Technology',
    slug: 'kaluna-technology',
    logo: '/images/our-business/kaluna-technology/logo.svg',
    email: 'kalunatechnology@gmail.com',
    instagram: 'https://www.instagram.com/arsalynk?igsh=am8xZ3FpMncweXYz',
    linkedin: 'https://www.linkedin.com/company/arsalynk-group/',
    actionLabel: 'VISIT WEB',
    actionHref: '/our-business/kaluna-technology',
  },
  {
    name: 'Artic Analytica',
    slug: 'artic-analytica',
    logo: '/images/our-business/artic-analytica/logo.svg',
    email: 'arsanalytic@gmail.com',
    instagram: 'https://www.instagram.com/arsalynk?igsh=am8xZ3FpMncweXYz',
    linkedin: 'https://www.linkedin.com/company/arsalynk-group/',
    actionLabel: 'VISIT WEB',
    actionHref: '/our-business/artic-analytica',
  },
  {
    name: 'LoxLive',
    slug: 'loxlive',
    logo: '/images/our-business/loxlive/logo.svg',
    email: 'loxlive.corporate@gmail.com',
    instagram: 'https://www.instagram.com/arsalynk?igsh=am8xZ3FpMncweXYz',
    linkedin: 'https://www.linkedin.com/company/arsalynk-group/',
    actionLabel: 'PHONE US',
    actionHref: 'tel:+6287855471107',
  },
  {
    name: 'TheDrafroom',
    slug: 'the-drafroom',
    logo: '/images/our-business/the-drafroom/logo.svg',
    email: 'thedrafroom@gmail.com',
    instagram: 'https://www.instagram.com/arsalynk?igsh=am8xZ3FpMncweXYz',
    linkedin: 'https://www.linkedin.com/company/arsalynk-group/',
    actionLabel: 'PHONE US',
    actionHref: 'tel:+6287855471107',
  },
  {
    name: 'Ilusia Studio',
    slug: 'ilusia',
    logo: '/images/our-business/ilusia/logo.svg',
    email: 'ilusiacreative@gmail.com',
    instagram: 'https://www.instagram.com/arsalynk?igsh=am8xZ3FpMncweXYz',
    linkedin: 'https://www.linkedin.com/company/arsalynk-group/',
    actionLabel: 'PHONE US',
    actionHref: 'tel:+6287855471107',
  },
  {
    name: 'Seveny',
    slug: 'seveny',
    logo: '/images/our-business/seveny/logo.svg',
    email: 'sevenycorporate@gmail.com',
    instagram: 'https://www.instagram.com/arsalynk?igsh=am8xZ3FpMncweXYz',
    linkedin: 'https://www.linkedin.com/company/arsalynk-group/',
    actionLabel: 'PHONE US',
    actionHref: 'tel:+6287855471107',
  },
  {
    name: 'AdsVar',
    slug: 'adsvar',
    logo: '/images/our-business/adsvar/logo.svg',
    email: 'adsvarcorporate@gmail.com',
    instagram: 'https://www.instagram.com/arsalynk?igsh=am8xZ3FpMncweXYz',
    linkedin: 'https://www.linkedin.com/company/arsalynk-group/',
    actionLabel: 'PHONE US',
    actionHref: 'tel:+6287855471107',
  },
  {
    name: 'Personice',
    slug: 'personice',
    logo: '/images/our-business/personice/logo.svg',
    email: 'personicecorporate@gmail.com',
    instagram: 'https://www.instagram.com/arsalynk?igsh=am8xZ3FpMncweXYz',
    linkedin: 'https://www.linkedin.com/company/arsalynk-group/',
    actionLabel: 'PHONE US',
    actionHref: 'tel:+6287855471107',
  },
];

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    inquiry: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const resetForm = () => {
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      inquiry: '',
      message: '',
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitting) return;

    const payload = new FormData(event.currentTarget);

    setIsSubmitting(true);
    setSubmitError('');

    try {
      const result = await submitLead(payload);

      if (!result.success) {
        setSubmitError(
          result.message ||
            'Your inquiry could not be submitted. Please try again.',
        );
        return;
      }

      resetForm();
      setShowSuccessModal(true);
    } catch (error) {
      console.error('Contact form submission failed:', error);
      setSubmitError(
        'A server error occurred while sending your inquiry. Please try again.',
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F7F7F7]">
      <Navbar />

      <main>
        {/* ================================================================
            HERO — Standard Height Matching About Us & Our Business
        ================================================================= */}
        <section className="relative isolate h-[380px] overflow-hidden rounded-b-[24px] bg-[#05070A] sm:h-[440px] sm:rounded-b-[32px] lg:h-[500px] xl:h-[560px] xl:rounded-b-[42px]">
          <div className="absolute inset-0 -z-30">
            <img
              src="/images/our-business/kaluna-technology/hero.webp"
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div className="pointer-events-none absolute inset-0 -z-20 bg-black/20" />

          <div
            className="pointer-events-none absolute -inset-x-[17.4%] bottom-[-55.63%] top-[31%] -z-20 bg-cover bg-center opacity-100 mix-blend-plus-lighter"
            style={{
              backgroundImage:
                'url(/images/our-business/kaluna-technology/hero-network-overlay.webp)',
            }}
            aria-hidden="true"
          />

          <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[87.25%] bg-gradient-to-b from-transparent from-[9.62%] to-[#101010]" />
          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#1A3E9E] to-transparent to-[71.94%] mix-blend-multiply" />

          <div
            className="pointer-events-none absolute -right-[14%] -top-[14%] -z-10 hidden h-[125%] w-[64%] opacity-[0.06] xl:block"
            style={{
              background:
                'linear-gradient(180deg, rgba(234,234,234,0) 0%, #EAEAEA 29.81%, rgba(234,234,234,0) 100%)',
              clipPath:
                'polygon(50% 0%, 60% 14%, 75% 18%, 68% 34%, 100% 50%, 70% 64%, 78% 83%, 59% 86%, 50% 100%, 40% 86%, 22% 83%, 30% 64%, 0 50%, 31% 34%, 24% 18%, 40% 14%)',
            }}
            aria-hidden="true"
          />

          <div className="absolute inset-0 z-10 flex items-center justify-center px-5 pt-[20px] sm:px-8 xl:pt-0">
            <div className="flex flex-col items-center gap-3 text-center sm:gap-4">
              <div className="flex items-center justify-center gap-2 font-body text-[11px] font-bold uppercase leading-[1.3] tracking-[0.06em] text-[#E6FF2A] sm:text-[13px]">
                <Link href="/" className="transition-opacity hover:opacity-70">
                  HOME
                </Link>
                <span>/</span>
                <span>CONTACT US</span>
              </div>

              <h1 className="font-heading text-[42px] font-medium leading-none tracking-[-0.02em] text-[#F7F7F7] sm:text-[56px] lg:text-[72px] xl:text-[84px]">
                Contact Us
              </h1>
            </div>
          </div>

          <a
            href="#contact-form"
            aria-label="Scroll to contact form"
            className="absolute bottom-5 left-1/2 z-20 flex h-[48px] w-[48px] -translate-x-1/2 items-center justify-center rounded-full border border-[rgba(175,175,175,0.25)] text-white backdrop-blur-[4px] transition hover:bg-white/20 sm:bottom-6 sm:h-[56px] sm:w-[56px] xl:bottom-7 xl:h-[64px] xl:w-[64px]"
            style={{
              background:
                'linear-gradient(230.45deg, rgba(247,247,247,0.21) -7.74%, rgba(247,247,247,0.105) 81.5%)',
            }}
          >
            <DownIcon />
          </a>
        </section>

        {/* ================================================================
            CONTACT INFORMATION + FORM — Compact Height & Sizing
        ================================================================= */}
        <section
          id="contact-form"
          className="scroll-mt-8 w-full bg-[#F7F7F7] px-[clamp(24px,13.333vw,256px)] py-[clamp(48px,4.5vw,76px)]"
        >
          <div className="mx-auto flex w-full max-w-[1408px] items-start justify-between gap-[clamp(36px,4vw,72px)] max-[1024px]:flex-col">
            {/* LEFT */}
            <div className="flex w-[42%] shrink-0 flex-col gap-[clamp(20px,2vw,32px)] max-[1024px]:w-full">
              <h2 className="font-heading text-[clamp(32px,2.8vw,48px)] font-medium leading-[1.12] tracking-[-0.03em] text-[#101010]">
                Let&apos;s Build
                <br />
                Something Great
                <br />
                Together
              </h2>

              <div className="flex flex-col gap-4 rounded-[16px] md:gap-5">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 font-body text-[12px] font-extrabold uppercase leading-[1.3] tracking-[0.06em] text-[#1A3E9E] md:text-[13px]">
                    <span className="h-1.5 w-1.5 shrink-0 bg-[#1A3E9E]" />
                    <span>CONTACT</span>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <a
                      href="tel:+6287855471107"
                      className="flex items-center gap-2.5 font-body text-[14px] leading-[1.5] tracking-[0.02em] text-[#717171] transition hover:text-[#101010] md:text-[15px]"
                    >
                      <span className="shrink-0">
                        <PhoneIcon size={18} />
                      </span>
                      <span>+62 878-5547-107</span>
                    </a>

                    <a
                      href="mailto:corporate.arsalynk@gmail.com"
                      className="flex items-center gap-2.5 font-body text-[14px] leading-[1.5] tracking-[0.02em] text-[#717171] transition hover:text-[#101010] md:text-[15px]"
                    >
                      <span className="shrink-0">
                        <MailIcon size={18} />
                      </span>
                      <span>corporate.arsalynk@gmail.com</span>
                    </a>
                  </div>
                </div>

                <div className="h-px w-full bg-[#D9D9D9]" />

                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 font-body text-[12px] font-extrabold uppercase leading-[1.3] tracking-[0.06em] text-[#1A3E9E] md:text-[13px]">
                    <span className="h-1.5 w-1.5 shrink-0 bg-[#1A3E9E]" />
                    <span>JAKARTA OFFICE</span>
                  </div>

                  <p className="font-body text-[14px] leading-[1.5] tracking-[0.02em] text-[#717171] md:text-[15px]">
                    Menara Rajawali 26th Floor Jl. DR. Ide Anak Agung Gde
                    Agung, Jakarta, Indonesia 12950 →
                  </p>
                </div>

                <div className="h-px w-full bg-[#D9D9D9]" />

                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 font-body text-[12px] font-extrabold uppercase leading-[1.3] tracking-[0.06em] text-[#1A3E9E] md:text-[13px]">
                    <span className="h-1.5 w-1.5 shrink-0 bg-[#1A3E9E]" />
                    <span>SEMARANG HQ</span>
                  </div>

                  <p className="font-body text-[14px] leading-[1.5] tracking-[0.02em] text-[#717171] md:text-[15px]">
                    MG Setos, Jl. Inspeksi, 3rd Floor Kembangsari
                    Subdistrict, Semarang Tengah District, Semarang City,
                    Central Java 50133, Indonesia →
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT FORM */}
            <form
              onSubmit={handleSubmit}
              className="flex w-[54%] shrink-0 flex-col gap-4 max-[1024px]:w-full md:gap-4.5"
            >
              <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <RequiredLabel>Your Name</RequiredLabel>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={formData.name}
                    onChange={(event) =>
                      setFormData((current) => ({
                        ...current,
                        name: event.target.value,
                      }))
                    }
                    placeholder="John Doe"
                    className="h-[46px] w-full rounded-[8px] border border-[#C8C8C8] bg-transparent px-4 font-body text-[14px] text-[#101010] outline-none transition placeholder:text-[#C8C8C8] focus:border-[#1A3E9E] focus:ring-2 focus:ring-[#1A3E9E]/10 md:h-[48px]"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <RequiredLabel>Company Name</RequiredLabel>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    required
                    value={formData.company}
                    onChange={(event) =>
                      setFormData((current) => ({
                        ...current,
                        company: event.target.value,
                      }))
                    }
                    placeholder="PT Timedoer Indonesia"
                    className="h-[46px] w-full rounded-[8px] border border-[#C8C8C8] bg-transparent px-4 font-body text-[14px] text-[#101010] outline-none transition placeholder:text-[#C8C8C8] focus:border-[#1A3E9E] focus:ring-2 focus:ring-[#1A3E9E]/10 md:h-[48px]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <RequiredLabel>E-mail</RequiredLabel>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={(event) =>
                      setFormData((current) => ({
                        ...current,
                        email: event.target.value,
                      }))
                    }
                    placeholder="youremail@gmail.com"
                    className="h-[46px] w-full rounded-[8px] border border-[#C8C8C8] bg-transparent px-4 font-body text-[14px] text-[#101010] outline-none transition placeholder:text-[#C8C8C8] focus:border-[#1A3E9E] focus:ring-2 focus:ring-[#1A3E9E]/10 md:h-[48px]"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <RequiredLabel>Phone Number</RequiredLabel>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    value={formData.phone}
                    onChange={(event) =>
                      setFormData((current) => ({
                        ...current,
                        phone: event.target.value,
                      }))
                    }
                    placeholder="+62 8920-2090-298"
                    className="h-[46px] w-full rounded-[8px] border border-[#C8C8C8] bg-transparent px-4 font-body text-[14px] text-[#101010] outline-none transition placeholder:text-[#C8C8C8] focus:border-[#1A3E9E] focus:ring-2 focus:ring-[#1A3E9E]/10 md:h-[48px]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <RequiredLabel>Inquiry</RequiredLabel>
                <div className="relative">
                  <select
                    id="inquiry"
                    name="inquiry"
                    required
                    value={formData.inquiry}
                    onChange={(event) =>
                      setFormData((current) => ({
                        ...current,
                        inquiry: event.target.value,
                      }))
                    }
                    className={`h-[46px] w-full appearance-none rounded-[8px] border border-[#C8C8C8] bg-transparent px-4 pr-12 font-body text-[14px] outline-none transition focus:border-[#1A3E9E] focus:ring-2 focus:ring-[#1A3E9E]/10 md:h-[48px] ${
                      formData.inquiry ? 'text-[#101010]' : 'text-[#C8C8C8]'
                    }`}
                  >
                    <option value="" disabled>
                      Choose Inquiry
                    </option>
                    <option value="Technology & Digital Solutions">
                      Technology &amp; Digital Solutions
                    </option>
                    <option value="Data, Survey & Analytics">
                      Data, Survey &amp; Analytics
                    </option>
                    <option value="Media, Creative & Communication">
                      Media, Creative &amp; Communication
                    </option>
                    <option value="Strategic Partnership">
                      Strategic Partnership
                    </option>
                    <option value="Other">Other</option>
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

              <div className="flex flex-col gap-1.5">
                <RequiredLabel>Message</RequiredLabel>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={(event) =>
                    setFormData((current) => ({
                      ...current,
                      message: event.target.value,
                    }))
                  }
                  placeholder="Write your message here..."
                  className="h-[110px] w-full resize-none rounded-[8px] border border-[#C8C8C8] bg-transparent px-4 py-3 font-body text-[14px] text-[#101010] outline-none transition placeholder:text-[#C8C8C8] focus:border-[#1A3E9E] focus:ring-2 focus:ring-[#1A3E9E]/10 md:h-[125px]"
                />
              </div>

              <div className="flex flex-col items-start gap-2.5 pt-1">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                  className="inline-flex h-[48px] w-full items-center justify-center gap-2 rounded-full bg-[#1A3E9E] px-6 font-body text-[14px] font-semibold leading-[1.6] tracking-[0.01em] text-[#F7F7F7] transition hover:bg-[#14347F] disabled:cursor-wait disabled:opacity-60 sm:w-[200px] md:h-[50px]"
                >
                  <span>
                    {isSubmitting ? 'SUBMITTING...' : 'SUBMIT INQUIRY'}
                  </span>

                  <span className="flex h-6 w-6 items-center justify-center">
                    {isSubmitting ? (
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                        className="animate-spin"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="9"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          className="opacity-25"
                        />
                        <path
                          d="M21 12a9 9 0 0 0-9-9"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          className="opacity-90"
                        />
                      </svg>
                    ) : (
                      <ArrowRightIcon />
                    )}
                  </span>
                </button>

                {submitError && (
                  <p
                    role="alert"
                    className="max-w-[560px] font-body text-[13px] leading-[1.6] text-[#D63C3C]"
                  >
                    {submitError}
                  </p>
                )}
              </div>
            </form>
          </div>
        </section>

        {/* ================================================================
            OTHER COMPANIES — Compact Height & Sizing
        ================================================================= */}
        <section className="w-full bg-[rgba(153,166,231,0.10)] py-[54px] md:py-[64px]">
          <div className="site-shell flex flex-col gap-[clamp(24px,2vw,38px)] px-0">
            <div className="flex flex-col items-center gap-3 text-center">
              <div className="flex items-center justify-center gap-2 font-body text-[12px] font-extrabold uppercase leading-[1.6] tracking-[0.02em] text-[#1A3E9E] md:text-[13px]">
                <span className="h-1.5 w-1.5 shrink-0 bg-[#1A3E9E]" />
                <span>COMPANY CONTACT</span>
              </div>

              <h2 className="max-w-[1050px] font-heading text-[clamp(30px,2.5vw,48px)] font-medium leading-[1.12] tracking-[-0.03em] text-[#101010]">
                Connect with Arsalynk
                <br />
                Other Companies
              </h2>
            </div>

            <div className="grid grid-cols-4 gap-[clamp(14px,1vw,20px)] max-[1280px]:grid-cols-2 max-[640px]:grid-cols-1">
              {COMPANY_CARDS.map((card) => (
                <article
                  key={card.slug}
                  className="group flex h-full min-h-[210px] w-full flex-col rounded-[16px] p-4 pb-5 transition duration-300 hover:-translate-y-1 sm:min-h-[225px]"
                  style={{
                    background:
                      'linear-gradient(79deg, rgba(26,62,158,0.0375) 13.31%, rgba(133,166,255,0.075) 132.94%)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <div className="flex h-[26px] w-[95px] items-center">
                    <img
                      src={card.logo}
                      alt={`${card.name} logo`}
                      className="max-h-[26px] max-w-[95px] object-contain object-left"
                    />
                  </div>

                  <h3 className="mt-3 font-body text-[clamp(17px,1.2vw,21px)] font-semibold leading-[1.3] tracking-[-0.02em] text-[#424242]">
                    {card.name}
                  </h3>

                  <div className="mt-2.5 flex flex-1 flex-col gap-3.5">
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center gap-1.5 font-body text-[11px] font-extrabold uppercase leading-[1.3] tracking-[0.06em] text-[#1A3E9E]">
                        <span className="h-1.5 w-1.5 shrink-0 bg-[#1A3E9E]" />
                        <span>CONTACT</span>
                      </div>

                      <a
                        href={`mailto:${card.email}`}
                        className="flex min-w-0 items-center gap-2 font-body text-[13px] leading-[1.5] tracking-[0.02em] text-[#717171] transition hover:text-[#101010]"
                      >
                        <span className="shrink-0">
                          <MailIcon size={16} />
                        </span>
                        <span className="truncate">{card.email}</span>
                      </a>
                    </div>

                    <div className="mt-auto flex items-center gap-2">
                      <div className="flex shrink-0 items-center gap-1">
                        <a
                          href={card.instagram}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${card.name} Instagram`}
                          className="flex h-[38px] w-[38px] items-center justify-center rounded-[8px] bg-[rgba(153,166,231,0.15)] text-[#3248B4] transition hover:bg-[#1A3E9E] hover:text-white md:h-[40px] md:w-[40px]"
                        >
                          <InstagramIcon />
                        </a>

                        <a
                          href={card.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${card.name} LinkedIn`}
                          className="flex h-[38px] w-[38px] items-center justify-center rounded-[8px] bg-[rgba(153,166,231,0.15)] text-[#3248B4] transition hover:bg-[#1A3E9E] hover:text-white md:h-[40px] md:w-[40px]"
                        >
                          <LinkedinIcon />
                        </a>
                      </div>

                      {card.actionHref.startsWith('/') ? (
                        <Link
                          href={card.actionHref}
                          className="inline-flex h-[38px] min-w-0 flex-1 items-center justify-center gap-1.5 rounded-full bg-[#1A3E9E] px-3 font-body text-[12px] font-semibold leading-[1.6] tracking-[0.01em] text-[#F7F7F7] transition hover:bg-[#14347F] md:h-[40px] md:text-[13px]"
                        >
                          <span className="whitespace-nowrap">
                            {card.actionLabel}
                          </span>
                          <ArrowRightIcon />
                        </Link>
                      ) : (
                        <a
                          href={card.actionHref}
                          className="inline-flex h-[38px] min-w-0 flex-1 items-center justify-center gap-1.5 rounded-full bg-[#1A3E9E] px-3 font-body text-[12px] font-semibold leading-[1.6] tracking-[0.01em] text-[#F7F7F7] transition hover:bg-[#14347F] md:h-[40px] md:text-[13px]"
                        >
                          <span className="whitespace-nowrap">
                            {card.actionLabel}
                          </span>
                          <ArrowRightIcon />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Global BeyondExpectations callout */}
        <BeyondExpectations />
      </main>

      {/* Global Footer */}
      {/* <Footer /> */}

      {showSuccessModal && (
        <SuccessModal onClose={() => setShowSuccessModal(false)} />
      )}
    </div>
  );
}

'use client';

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function ClientPortalClient() {
  const { locale, t } = useLanguage();
  const searchParams = useSearchParams();
  const initialType = searchParams.get('type') === 'ticket' ? 'ticket' : 'quotation';
  const initialCode = searchParams.get('code') || searchParams.get('id') || '';

  const [activeTab, setActiveTab] = useState<'quotation' | 'ticket'>(initialType);

  // 1. QUOTATION STATE
  const [quotationCode, setQuotationCode] = useState(initialCode);
  const [signatureName, setSignatureName] = useState('');
  const [decisionNotes, setDecisionNotes] = useState('');
  const [isSubmittingQuote, setIsSubmittingQuote] = useState(false);
  const [quoteFeedback, setQuoteFeedback] = useState<{
    type: 'success' | 'error' | 'info';
    message: string;
  } | null>(null);

  // 2. TICKET CREATION STATE (MARKA ERP SCHEMA)
  const [ticketSubject, setTicketSubject] = useState('');
  const [serialNumber, setSerialNumber] = useState('');
  const [priority, setPriority] = useState<'LOW' | 'NORMAL' | 'HIGH' | 'URGENT'>('NORMAL');
  const [customerCode, setCustomerCode] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [ticketDescription, setTicketDescription] = useState('');
  const [isSubmittingTicket, setIsSubmittingTicket] = useState(false);
  const [ticketFeedback, setTicketFeedback] = useState<{
    type: 'success' | 'error';
    message: string;
    eventId?: string;
  } | null>(null);

  // HANDLER: QUOTATION DECISION (ACCEPTED/REJECTED)
  const handleQuotationDecision = async (decision: 'ACCEPTED' | 'REJECTED') => {
    const cleanCode = quotationCode.trim();

    if (!cleanCode) {
      setQuoteFeedback({
        type: 'error',
        message: t.portal.quoteErrorRequiredCode,
      });
      return;
    }

    if (!signatureName.trim()) {
      setQuoteFeedback({
        type: 'error',
        message: t.portal.quoteErrorRequiredName,
      });
      return;
    }

    setIsSubmittingQuote(true);
    setQuoteFeedback({
      type: 'info',
      message: t.portal.quoteInfoSubmitting,
    });

    try {
      const res = await fetch('/api/portal/quotation/decision', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          quotation_code: cleanCode,
          decision,
          signed_by: signatureName.trim(),
          decision_notes: decisionNotes.trim(),
        }),
      });

      const resText = await res.text();
      let data;
      try {
        data = JSON.parse(resText);
      } catch {
        throw new Error(
          locale === 'id'
            ? `Server merespons dengan format tidak valid (Status ${res.status}). Periksa API Route '/api/portal/quotation/decision'.`
            : `Server responded with invalid format (Status ${res.status}). Verify API Route '/api/portal/quotation/decision'.`
        );
      }

      if (!res.ok) {
        throw new Error(
          data.error ||
            (locale === 'id'
              ? 'Gagal mengirim konfirmasi penawaran.'
              : 'Failed to submit quotation confirmation.')
        );
      }

      if (data.processing_status === 'DUPLICATE') {
        setQuoteFeedback({
          type: 'info',
          message:
            data.message ||
            (locale === 'id'
              ? `Keputusan untuk dokumen ${cleanCode} sudah tercatat sebelumnya.`
              : `A decision for document ${cleanCode} has already been recorded.`),
        });
        setIsSubmittingQuote(false);
        return;
      }

      if (data.status === 202 && data.status_check_url) {
        setQuoteFeedback({
          type: 'info',
          message: t.portal.quoteInfoQueued,
        });

        const checkUrl = data.status_check_url;
        let attempts = 0;
        const maxAttempts = 15;

        const pollStatus = async (): Promise<void> => {
          attempts++;
          try {
            const statusRes = await fetch(checkUrl);
            const statusText = await statusRes.text();
            let statusData;
            try {
              statusData = JSON.parse(statusText);
            } catch {
              setIsSubmittingQuote(false);
              return;
            }

            if (!statusRes.ok) {
              setQuoteFeedback({
                type: 'success',
                message:
                  decision === 'ACCEPTED'
                    ? locale === 'id'
                      ? `Persetujuan penawaran untuk ${cleanCode} berhasil dicatat. Tim Arsalynk akan segera menindaklanjuti.`
                      : `Quotation approval for ${cleanCode} has been successfully recorded. Arsalynk's team will follow up promptly.`
                    : locale === 'id'
                    ? `Catatan revisi untuk penawaran ${cleanCode} berhasil dicatat.`
                    : `Revision notes for quotation ${cleanCode} have been successfully recorded.`,
              });
              setIsSubmittingQuote(false);
              return;
            }

            if (statusData.completed) {
              if (statusData.success && statusData.processing_status === 'COMPLETED') {
                setQuoteFeedback({
                  type: 'success',
                  message:
                    statusData.message ||
                    (decision === 'ACCEPTED'
                      ? locale === 'id'
                        ? `Persetujuan penawaran untuk ${cleanCode} berhasil diproses oleh Marka ERP. Tim Arsalynk akan segera menindaklanjuti.`
                        : `Quotation approval for ${cleanCode} has been successfully processed by Marka ERP. Arsalynk's team will follow up promptly.`
                      : locale === 'id'
                      ? `Catatan revisi untuk penawaran ${cleanCode} telah diproses oleh Marka ERP.`
                      : `Revision notes for quotation ${cleanCode} have been processed by Marka ERP.`),
                });
              } else {
                setQuoteFeedback({
                  type: 'error',
                  message:
                    statusData.error ||
                    (locale === 'id'
                      ? 'Pemrosesan keputusan gagal pada worker Marka ERP.'
                      : 'Decision processing failed on Marka ERP worker.'),
                });
              }
              setIsSubmittingQuote(false);
              return;
            }

            if (attempts >= maxAttempts) {
              setQuoteFeedback({
                type: 'info',
                message:
                  locale === 'id'
                    ? `Event keputusan diterima (ID: ${data.eventId}). Status akhir akan diperbarui secara otomatis di dalam sistem.`
                    : `Decision event accepted (ID: ${data.eventId}). Final status will automatically update in the system.`,
              });
              setIsSubmittingQuote(false);
              return;
            }

            setTimeout(pollStatus, 1500);
          } catch {
            setQuoteFeedback({
              type: 'error',
              message:
                locale === 'id'
                  ? 'Masalah jaringan ditemukan saat memeriksa status pemrosesan.'
                  : 'Network issue encountered while polling processing status.',
            });
            setIsSubmittingQuote(false);
          }
        };

        setTimeout(pollStatus, 1000);
      } else {
        setQuoteFeedback({
          type: 'success',
          message:
            data.message ||
            (locale === 'id'
              ? `Keputusan penawaran untuk ${cleanCode} berhasil dikirim.`
              : `Quotation decision for ${cleanCode} successfully submitted.`),
        });
        setIsSubmittingQuote(false);
      }
    } catch (err: unknown) {
      const msg =
        err instanceof Error
          ? err.message
          : locale === 'id'
          ? 'Terjadi kesalahan saat pengiriman.'
          : 'Error encountered during submission.';
      setQuoteFeedback({ type: 'error', message: msg });
      setIsSubmittingQuote(false);
    }
  };

  // HANDLER: CREATE SUPPORT TICKET
  const handleTicketSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!ticketSubject.trim()) {
      setTicketFeedback({ type: 'error', message: t.portal.ticketErrorRequiredSubject });
      return;
    }

    if (!ticketDescription.trim()) {
      setTicketFeedback({ type: 'error', message: t.portal.ticketErrorRequiredDescription });
      return;
    }

    if (!customerCode.trim() && (!customerName.trim() || !customerEmail.trim())) {
      setTicketFeedback({
        type: 'error',
        message: t.portal.ticketErrorRequiredIdentity,
      });
      return;
    }

    setIsSubmittingTicket(true);
    setTicketFeedback(null);

    try {
      const res = await fetch('/api/support/ticket', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subject: ticketSubject.trim(),
          serial_number: serialNumber.trim() || undefined,
          priority,
          customer_code: customerCode.trim() || undefined,
          customer: {
            name: customerName.trim() || undefined,
            email: customerEmail.trim() || undefined,
          },
          description: ticketDescription.trim(),
        }),
      });

      const resText = await res.text();
      let data;
      try {
        data = JSON.parse(resText);
      } catch {
        throw new Error(
          locale === 'id'
            ? `Server merespons dengan format tidak valid (Status ${res.status}). Periksa API Route '/api/support/ticket'.`
            : `Server responded with invalid format (Status ${res.status}). Verify API Route '/api/support/ticket'.`
        );
      }

      if (!res.ok || !data.success) {
        throw new Error(
          data.error ||
            data.message ||
            (locale === 'id' ? 'Gagal membuat tiket dukungan.' : 'Failed to create support ticket.')
        );
      }

      setTicketFeedback({
        type: 'success',
        message: t.portal.ticketSuccessRegistered,
        eventId: data.eventId,
      });

      setTicketSubject('');
      setSerialNumber('');
      setPriority('NORMAL');
      setCustomerCode('');
      setCustomerName('');
      setCustomerEmail('');
      setTicketDescription('');
    } catch (err: unknown) {
      const msg =
        err instanceof Error
          ? err.message
          : locale === 'id'
          ? 'Terjadi kesalahan saat membuat tiket.'
          : 'Error encountered while creating ticket.';
      setTicketFeedback({ type: 'error', message: msg });
    } finally {
      setIsSubmittingTicket(false);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Segmented Tab Switcher */}
      <div className="flex rounded-full border border-[#D9D9D9] bg-[#EFEFEF] p-1.5 shadow-inner">
        <button
          type="button"
          onClick={() => {
            setActiveTab('quotation');
            setQuoteFeedback(null);
          }}
          className={`flex-1 rounded-full py-2.5 sm:py-3 text-[12px] sm:text-[13px] font-body font-bold uppercase tracking-[0.04em] transition ${
            activeTab === 'quotation'
              ? 'bg-[#1A3E9E] text-white shadow-md'
              : 'text-[#505050] hover:text-[#101010]'
          }`}
        >
          {t.portal.tabQuotationReview}
        </button>
        <button
          type="button"
          onClick={() => {
            setActiveTab('ticket');
            setTicketFeedback(null);
          }}
          className={`flex-1 rounded-full py-2.5 sm:py-3 text-[12px] sm:text-[13px] font-body font-bold uppercase tracking-[0.04em] transition ${
            activeTab === 'ticket'
              ? 'bg-[#1A3E9E] text-white shadow-md'
              : 'text-[#505050] hover:text-[#101010]'
          }`}
        >
          {t.portal.tabSupportTicket}
        </button>
      </div>

      {/* TAB 1: QUOTATION DECISION */}
      {activeTab === 'quotation' && (
        <div className="rounded-[20px] border border-[#D9D9D9] bg-white p-6 sm:p-8 shadow-sm">
          <div className="mb-6 flex flex-col gap-1">
            <div className="flex items-center gap-2 font-body text-[11px] font-extrabold uppercase tracking-[0.06em] text-[#1A3E9E]">
              <span className="h-1.5 w-1.5 bg-[#1A3E9E]" />
              <span>{t.portal.quoteEyebrow}</span>
            </div>
            <h3 className="font-heading text-[20px] font-medium text-[#101010]">
              {t.portal.quoteTitle}
            </h3>
            <p className="font-body text-[13px] text-[#717171]">
              {t.portal.quoteDescription}
            </p>
            <div className="mt-2 rounded-[8px] border border-blue-100 bg-blue-50/60 p-2.5 font-body text-[12px] text-[#1A3E9E]">
              ℹ️ {t.portal.quoteInfoNote}
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col gap-1.5">
              <label className="font-body text-[13px] font-medium text-[#292929]">
                <span className="font-bold text-[#FF5050] mr-1">*</span>
                {t.portal.quoteDocNumberLabel}
              </label>
              <input
                type="text"
                required
                value={quotationCode}
                onChange={(e) => setQuotationCode(e.target.value.toUpperCase())}
                placeholder={t.portal.quoteDocNumberPlaceholder}
                className="h-[46px] w-full rounded-[8px] border border-[#C8C8C8] bg-white px-4 font-body text-[14px] text-[#101010] outline-none transition placeholder:text-[#B0B0B0] focus:border-[#1A3E9E] focus:ring-2 focus:ring-[#1A3E9E]/10 md:h-[48px]"
              />
              <span className="font-body text-[11px] text-[#717171]">
                {t.portal.quoteDocNumberHelp}
              </span>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-body text-[13px] font-medium text-[#292929]">
                <span className="font-bold text-[#FF5050] mr-1">*</span>
                {t.portal.quoteRepNameLabel}
              </label>
              <input
                type="text"
                required
                value={signatureName}
                onChange={(e) => setSignatureName(e.target.value)}
                placeholder={t.portal.quoteRepNamePlaceholder}
                className="h-[46px] w-full rounded-[8px] border border-[#C8C8C8] bg-white px-4 font-body text-[14px] text-[#101010] outline-none transition placeholder:text-[#B0B0B0] focus:border-[#1A3E9E] focus:ring-2 focus:ring-[#1A3E9E]/10 md:h-[48px]"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-body text-[13px] font-medium text-[#292929]">
                {t.portal.quoteNotesLabel}
              </label>
              <textarea
                rows={3}
                value={decisionNotes}
                onChange={(e) => setDecisionNotes(e.target.value)}
                placeholder={t.portal.quoteNotesPlaceholder}
                className="w-full resize-none rounded-[8px] border border-[#C8C8C8] bg-white p-3.5 font-body text-[14px] text-[#101010] outline-none transition placeholder:text-[#B0B0B0] focus:border-[#1A3E9E] focus:ring-2 focus:ring-[#1A3E9E]/10"
              />
            </div>

            {quoteFeedback && (
              <div
                className={`rounded-[10px] p-4 font-body text-[13px] ${
                  quoteFeedback.type === 'success'
                    ? 'border border-emerald-300 bg-emerald-50 text-emerald-900'
                    : quoteFeedback.type === 'info'
                    ? 'border border-blue-300 bg-blue-50 text-blue-900'
                    : 'border border-red-300 bg-red-50 text-red-900'
                }`}
              >
                {quoteFeedback.type === 'success' && '✓ '}
                {quoteFeedback.type === 'info' && 'ℹ️ '}
                {quoteFeedback.type === 'error' && '✕ '}
                {quoteFeedback.message}
              </div>
            )}

            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                type="button"
                disabled={isSubmittingQuote}
                onClick={() => handleQuotationDecision('ACCEPTED')}
                className="inline-flex h-[48px] items-center justify-center gap-2 rounded-full bg-[#1A3E9E] px-8 font-body text-[13px] font-bold uppercase tracking-[0.04em] text-white transition hover:bg-[#14347F] disabled:cursor-wait disabled:opacity-50 md:h-[50px]"
              >
                <span>{isSubmittingQuote ? t.portal.quoteProcessingButton : t.portal.quoteApproveButton}</span>
              </button>

              <button
                type="button"
                disabled={isSubmittingQuote}
                onClick={() => handleQuotationDecision('REJECTED')}
                className="inline-flex h-[48px] items-center justify-center gap-2 rounded-full border border-[#C8C8C8] bg-white px-8 font-body text-[13px] font-bold uppercase tracking-[0.04em] text-[#505050] transition hover:bg-gray-100 hover:text-[#101010] disabled:cursor-wait disabled:opacity-50 md:h-[50px]"
              >
                <span>{t.portal.quoteRejectButton}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: SUPPORT TICKET */}
      {activeTab === 'ticket' && (
        <div className="rounded-[20px] border border-[#D9D9D9] bg-white p-6 sm:p-8 shadow-sm">
          <div className="mb-6 flex flex-col gap-1">
            <div className="flex items-center gap-2 font-body text-[11px] font-extrabold uppercase tracking-[0.06em] text-[#1A3E9E]">
              <span className="h-1.5 w-1.5 bg-[#1A3E9E]" />
              <span>{t.portal.ticketEyebrow}</span>
            </div>
            <h3 className="font-heading text-[20px] font-medium text-[#101010]">
              {t.portal.ticketTitle}
            </h3>
            <p className="font-body text-[13px] text-[#717171]">
              {t.portal.ticketDescription}
            </p>
          </div>

          <form onSubmit={handleTicketSubmit} className="space-y-4">
            {/* 1. Subject */}
            <div className="flex flex-col gap-1.5">
              <label className="font-body text-[13px] font-medium text-[#292929]">
                <span className="font-bold text-[#FF5050] mr-1">*</span>
                {t.portal.ticketSubjectLabel}
              </label>
              <input
                type="text"
                required
                value={ticketSubject}
                onChange={(e) => setTicketSubject(e.target.value)}
                placeholder={t.portal.ticketSubjectPlaceholder}
                className="h-[46px] w-full rounded-[8px] border border-[#C8C8C8] bg-white px-4 font-body text-[14px] text-[#101010] outline-none transition placeholder:text-[#B0B0B0] focus:border-[#1A3E9E] focus:ring-2 focus:ring-[#1A3E9E]/10 md:h-[48px]"
              />
            </div>

            {/* 2. Serial Number */}
            <div className="flex flex-col gap-1.5">
              <label className="font-body text-[13px] font-medium text-[#292929]">
                {t.portal.ticketSerialLabel}
              </label>
              <input
                type="text"
                value={serialNumber}
                onChange={(e) => setSerialNumber(e.target.value)}
                placeholder={t.portal.ticketSerialPlaceholder}
                className="h-[46px] w-full rounded-[8px] border border-[#C8C8C8] bg-white px-4 font-body text-[14px] text-[#101010] outline-none transition placeholder:text-[#B0B0B0] focus:border-[#1A3E9E] focus:ring-2 focus:ring-[#1A3E9E]/10 md:h-[48px]"
              />
            </div>

            {/* 3. Priority */}
            <div className="flex flex-col gap-1.5">
              <label className="font-body text-[13px] font-medium text-[#292929]">
                {t.portal.ticketPriorityLabel}
              </label>
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value as 'LOW' | 'NORMAL' | 'HIGH' | 'URGENT')}
                className="h-[46px] w-full cursor-pointer rounded-[8px] border border-[#C8C8C8] bg-white px-4 font-body text-[14px] text-[#101010] outline-none transition focus:border-[#1A3E9E] focus:ring-2 focus:ring-[#1A3E9E]/10 md:h-[48px]"
              >
                <option value="LOW">{t.portal.ticketPriorityLow}</option>
                <option value="NORMAL">{t.portal.ticketPriorityNormal}</option>
                <option value="HIGH">{t.portal.ticketPriorityHigh}</option>
                <option value="URGENT">{t.portal.ticketPriorityUrgent}</option>
              </select>
            </div>

            {/* 4. Requester info */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label className="font-body text-[13px] font-medium text-[#292929]">
                  <span className="font-bold text-[#FF5050] mr-1">*</span>
                  {t.portal.ticketFullNameLabel}
                </label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder={t.portal.ticketFullNamePlaceholder}
                  className="h-[46px] w-full rounded-[8px] border border-[#C8C8C8] bg-white px-4 font-body text-[14px] text-[#101010] outline-none transition placeholder:text-[#B0B0B0] focus:border-[#1A3E9E] focus:ring-2 focus:ring-[#1A3E9E]/10 md:h-[48px]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-body text-[13px] font-medium text-[#292929]">
                  <span className="font-bold text-[#FF5050] mr-1">*</span>
                  {t.portal.ticketEmailLabel}
                </label>
                <input
                  type="email"
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  placeholder={t.portal.ticketEmailPlaceholder}
                  className="h-[46px] w-full rounded-[8px] border border-[#C8C8C8] bg-white px-4 font-body text-[14px] text-[#101010] outline-none transition placeholder:text-[#B0B0B0] focus:border-[#1A3E9E] focus:ring-2 focus:ring-[#1A3E9E]/10 md:h-[48px]"
                />
              </div>
            </div>

            {/* Optional Customer Code */}
            <div className="flex flex-col gap-1.5">
              <label className="font-body text-[13px] font-medium text-[#292929]">
                {t.portal.ticketClientCodeLabel}
              </label>
              <input
                type="text"
                value={customerCode}
                onChange={(e) => setCustomerCode(e.target.value.toUpperCase())}
                placeholder={t.portal.ticketClientCodePlaceholder}
                className="h-[46px] w-full rounded-[8px] border border-[#C8C8C8] bg-white px-4 font-body text-[14px] text-[#101010] outline-none transition placeholder:text-[#B0B0B0] focus:border-[#1A3E9E] focus:ring-2 focus:ring-[#1A3E9E]/10 md:h-[48px]"
              />
            </div>

            {/* 5. Description */}
            <div className="flex flex-col gap-1.5">
              <label className="font-body text-[13px] font-medium text-[#292929]">
                <span className="font-bold text-[#FF5050] mr-1">*</span>
                {t.portal.ticketIssueDescriptionLabel}
              </label>
              <textarea
                required
                rows={4}
                value={ticketDescription}
                onChange={(e) => setTicketDescription(e.target.value)}
                placeholder={t.portal.ticketIssueDescriptionPlaceholder}
                className="w-full resize-none rounded-[8px] border border-[#C8C8C8] bg-white p-3.5 font-body text-[14px] text-[#101010] outline-none transition placeholder:text-[#B0B0B0] focus:border-[#1A3E9E] focus:ring-2 focus:ring-[#1A3E9E]/10"
              />
            </div>

            {ticketFeedback && (
              <div
                className={`rounded-[10px] p-4 font-body text-[13px] ${
                  ticketFeedback.type === 'success'
                    ? 'border border-emerald-300 bg-emerald-50 text-emerald-900'
                    : 'border border-red-300 bg-red-50 text-red-900'
                }`}
              >
                {ticketFeedback.type === 'success' ? '✓ ' : '✕ '}
                {ticketFeedback.message}
                {ticketFeedback.eventId && (
                  <span className="block mt-1 font-body text-[12px] text-emerald-700">
                    {t.portal.ticketRefEventIdPrefix} {ticketFeedback.eventId}
                  </span>
                )}
              </div>
            )}

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmittingTicket}
                className="inline-flex h-[48px] items-center justify-center gap-2 rounded-full bg-[#1A3E9E] px-8 font-body text-[13px] font-bold uppercase tracking-[0.04em] text-white transition hover:bg-[#14347F] disabled:cursor-wait disabled:opacity-60 md:h-[50px]"
              >
                <span>{isSubmittingTicket ? t.portal.quoteProcessingButton : t.portal.ticketCreateButton}</span>
              </button>
            </div>
          </form>

          {/* Info box */}
          <div className="mt-6 rounded-[12px] border border-[#EAEAEA] bg-[#F7F7F7] p-4">
            <div className="flex items-center gap-2 font-body text-[11px] font-bold uppercase tracking-wider text-[#1A3E9E]">
              <span>ℹ {t.portal.ticketProtocolTitle}</span>
            </div>
            <p className="mt-1 font-body text-[12px] leading-[1.6] text-[#717171]">
              {t.portal.ticketProtocolDescription}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

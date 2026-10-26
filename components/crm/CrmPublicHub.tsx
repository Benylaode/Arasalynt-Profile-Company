'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';

interface ChatMessage {
  id?: number;
  messageId: string;
  senderType: 'EXTERNAL' | 'INTERNAL' | 'BOT';
  senderName: string;
  text: string;
  createdAt?: string;
  status?: 'sending' | 'sent' | 'error';
}

const SOLUTIONS = [
  'Enterprise Solution (Marka ERP)',
  'Data & AI Integration',
  'Smart IOT System',
  'Digital Development (Web & Apps)',
  'Technology Consultation',
  'Other Inquiries',
];

export default function CrmPublicHub() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'inbox' | 'inquiry' | 'tracking'>('inbox');
  const [hasNewReply, setHasNewReply] = useState(false);

  // ── INBOX STATE ──
  const [visitorId, setVisitorId] = useState('');
  const [visitorName, setVisitorName] = useState('');
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isSendingChat, setIsSendingChat] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // ── INQUIRY STATE ──
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    solution: 'Enterprise Solution (Marka ERP)',
    budget: '',
    message: '',
  });
  const [isSubmittingInquiry, setIsSubmittingInquiry] = useState(false);
  const [inquirySuccess, setInquirySuccess] = useState(false);
  const [inquiryError, setInquiryError] = useState('');

  // ── TRACKING / PORTAL STATE ──
  const [trackingType, setTrackingType] = useState<'tickets' | 'quotations'>('tickets');
  const [docId, setDocId] = useState('');
  const [docToken, setDocToken] = useState('');
  const [isLoadingTracking, setIsLoadingTracking] = useState(false);
  const [trackingResult, setTrackingResult] = useState<any>(null);
  const [trackingError, setTrackingError] = useState('');
  const [decisionNotes, setDecisionNotes] = useState('');
  const [signatureName, setSignatureName] = useState('');
  const [isSubmittingDecision, setIsSubmittingDecision] = useState(false);
  const [decisionFeedback, setDecisionFeedback] = useState('');

  // ── INITIALIZE VISITOR IDENTITY ──
  useEffect(() => {
    if (typeof window === 'undefined') return;
    let vid = localStorage.getItem('arsalynk_crm_visitor_id');
    if (!vid) {
      vid = `vis-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
      localStorage.setItem('arsalynk_crm_visitor_id', vid);
    }
    setVisitorId(vid);

    const savedName = localStorage.getItem('arsalynk_crm_visitor_name') || '';
    if (savedName) setVisitorName(savedName);
  }, []);

  // ── FETCH INBOX MESSAGES ──
  const fetchMessages = useCallback(async () => {
    if (!visitorId) return;
    try {
      const res = await fetch(`/api/chat/messages?threadId=webchat:${visitorId}&_t=${Date.now()}`);
      const json = await res.json();
      if (json.success && Array.isArray(json.messages)) {
        if (json.messages.length > 0) {
          setMessages((prev) => {
            const prevCount = prev.length;
            const newCount = json.messages.length;
            if (newCount > prevCount && !isOpen) {
              setHasNewReply(true);
            }
            return json.messages;
          });
        } else {
          setMessages([
            {
              messageId: 'welcome-arsalynk',
              senderType: 'BOT',
              senderName: 'Arsalynk Assistant',
              text: 'Halo! Selamat datang di layanan live customer support Arsalynk. Pesan Anda akan langsung diteruskan ke tim Commercial & Marka CRM kami.',
              createdAt: new Date().toISOString(),
            },
          ]);
        }
      }
    } catch (err) {
      console.warn('[CRM Inbox Fetch Warning]', err);
    }
  }, [visitorId, isOpen]);

  useEffect(() => {
    if (visitorId) {
      fetchMessages();
    }
  }, [visitorId, fetchMessages]);

  // Poll inbox every 4 seconds when open
  useEffect(() => {
    if (!isOpen || !visitorId) return;
    const interval = setInterval(() => {
      fetchMessages();
    }, 4000);
    return () => clearInterval(interval);
  }, [isOpen, visitorId, fetchMessages]);

  useEffect(() => {
    if (isOpen) {
      setHasNewReply(false);
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, activeTab]);

  // ── EVENT LISTENERS (GLOBAL & NAVBAR/FOOTER CLICKS) ──
  useEffect(() => {
    const handleConsultation = (e: Event) => {
      const customEvent = e as CustomEvent<{ solution?: string }>;
      if (customEvent?.detail?.solution) {
        setInquiryForm((prev) => ({ ...prev, solution: customEvent.detail.solution! }));
      }
      setActiveTab('inquiry');
      setIsOpen(true);
    };

    const handleInbox = () => {
      setActiveTab('inbox');
      setIsOpen(true);
    };

    const handleTracking = (e: Event) => {
      const customEvent = e as CustomEvent<{ type?: 'tickets' | 'quotations' }>;
      if (customEvent?.detail?.type) {
        setTrackingType(customEvent.detail.type);
      }
      setActiveTab('tracking');
      setIsOpen(true);
    };

    const handleHash = () => {
      if (typeof window === 'undefined') return;
      const hash = window.location.hash.toLowerCase();
      if (hash === '#crm-consultation' || hash === '#consultation') {
        setActiveTab('inquiry');
        setIsOpen(true);
      } else if (hash === '#crm-inbox' || hash === '#live-chat') {
        setActiveTab('inbox');
        setIsOpen(true);
      } else if (hash === '#crm-tracking' || hash === '#crm-portal') {
        setActiveTab('tracking');
        setIsOpen(true);
      }
    };

    window.addEventListener('open-crm-consultation', handleConsultation);
    window.addEventListener('open-crm-inbox', handleInbox);
    window.addEventListener('open-crm-tracking', handleTracking);
    window.addEventListener('open-crm-portal', handleTracking);
    window.addEventListener('hashchange', handleHash);
    handleHash();

    return () => {
      window.removeEventListener('open-crm-consultation', handleConsultation);
      window.removeEventListener('open-crm-inbox', handleInbox);
      window.removeEventListener('open-crm-tracking', handleTracking);
      window.removeEventListener('open-crm-portal', handleTracking);
      window.removeEventListener('hashchange', handleHash);
    };
  }, []);

  // ── SEND CHAT MESSAGE ──
  const handleSendChat = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!chatInput.trim() || isSendingChat || !visitorId) return;

    const textToSend = chatInput.trim();
    const tempMsgId = `m-${Date.now()}`;
    const newMsg: ChatMessage = {
      messageId: tempMsgId,
      senderType: 'EXTERNAL',
      senderName: visitorName.trim() || 'Tamu Website',
      text: textToSend,
      createdAt: new Date().toISOString(),
      status: 'sending',
    };

    setMessages((prev) => [...prev, newMsg]);
    setChatInput('');
    setIsSendingChat(true);

    try {
      const res = await fetch('/api/chat/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          visitorId,
          visitorName: visitorName.trim() || 'Tamu Website',
          messageId: tempMsgId,
          messageText: textToSend,
        }),
      });

      const json = await res.json();
      if (res.ok || json.success) {
        setMessages((prev) =>
          prev.map((m) => (m.messageId === tempMsgId ? { ...m, status: 'sent' } : m))
        );
      } else {
        setMessages((prev) =>
          prev.map((m) => (m.messageId === tempMsgId ? { ...m, status: 'error' } : m))
        );
      }
    } catch {
      setMessages((prev) =>
        prev.map((m) => (m.messageId === tempMsgId ? { ...m, status: 'error' } : m))
      );
    } finally {
      setIsSendingChat(false);
    }
  };

  // ── SUBMIT INQUIRY ──
  const handleInquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingInquiry(true);
    setInquiryError('');

    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: inquiryForm.name.trim(),
          company: inquiryForm.company.trim(),
          email: inquiryForm.email.trim(),
          phone: inquiryForm.phone.trim(),
          contact: `${inquiryForm.phone.trim()} | ${inquiryForm.email.trim()}`.trim(),
          service: inquiryForm.solution || 'Enterprise Solution',
          packageChoice: inquiryForm.solution || 'Enterprise Solution',
          targetBudget: inquiryForm.budget ? Number(inquiryForm.budget) : undefined,
          message: inquiryForm.message.trim(),
          brandDescription: inquiryForm.message.trim(),
          source: 'public_hub_landing',
        }),
      });

      const result = await res.json();
      if (!res.ok || !result.success) {
        throw new Error(result.error || 'Gagal mengirim formulir konsultasi.');
      }

      setInquirySuccess(true);
    } catch (err: unknown) {
      const errObj = err as Error;
      setInquiryError(errObj.message || 'Terjadi kesalahan saat memproses data.');
    } finally {
      setIsSubmittingInquiry(false);
    }
  };

  // ── QUERY TRACKING / PORTAL ──
  const handleTrackingQuery = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!docId.trim() || !docToken.trim()) {
      setTrackingError('Mohon isi Nomor ID Dokumen dan Token Akses.');
      return;
    }

    setIsLoadingTracking(true);
    setTrackingError('');
    setTrackingResult(null);
    setDecisionFeedback('');

    try {
      const res = await fetch(
        `/api/portal/data?type=${trackingType}&id=${encodeURIComponent(docId.trim())}&token=${encodeURIComponent(docToken.trim())}`
      );
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Data tidak ditemukan atau token tidak cocok.');
      }
      setTrackingResult(data.data || data);
    } catch (err: unknown) {
      const errObj = err as Error;
      setTrackingError(errObj.message || 'Gagal mengambil data dari Marka CRM.');
    } finally {
      setIsLoadingTracking(false);
    }
  };

  // ── SUBMIT QUOTATION DECISION ──
  const handleDecisionSubmit = async (decision: 'accepted' | 'rejected') => {
    if (!signatureName.trim()) {
      setDecisionFeedback('Nama penandatangan wajib diisi.');
      return;
    }
    setIsSubmittingDecision(true);
    setDecisionFeedback('');

    try {
      const res = await fetch('/api/portal/quotation/decision', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          quotation_id: docId.trim(),
          token: docToken.trim(),
          decision,
          decision_notes: decisionNotes.trim(),
          signature: signatureName.trim(),
        }),
      });

      const resData = await res.json();
      if (!res.ok || !resData.success) {
        throw new Error(resData.error || 'Gagal memproses keputusan.');
      }

      setDecisionFeedback(
        decision === 'accepted'
          ? '🎉 Penawaran berhasil disetujui (Accepted) di sistem Marka CRM.'
          : 'Catatan penolakan telah diteruskan ke tim Commercial.'
      );

      // Re-fetch
      const refresh = await fetch(
        `/api/portal/data?type=quotations&id=${encodeURIComponent(docId.trim())}&token=${encodeURIComponent(docToken.trim())}`
      );
      if (refresh.ok) {
        const d = await refresh.json();
        setTrackingResult(d.data || d);
      }
    } catch (err: unknown) {
      const errObj = err as Error;
      setDecisionFeedback(errObj.message || 'Terjadi kesalahan.');
    } finally {
      setIsSubmittingDecision(false);
    }
  };

  return (
    <>
      {/* ── 1. VISIBLE FLOATING TRIGGER DOCK ON LANDING PAGE ── */}
      <div className="fixed bottom-6 left-6 z-[89] flex flex-col items-start gap-2 max-[767px]:bottom-4 max-[767px]:left-4">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="group relative flex items-center gap-3 rounded-full border border-white/20 bg-[#101010]/90 px-4 py-3 text-white shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-[#E6FF2A]/80 hover:bg-[#1A3E9E] hover:shadow-[0_8px_30px_rgba(26,62,158,0.4)] active:scale-95"
          aria-label="Buka Arsalynk CRM & Support Hub"
        >
          {/* Active Ping Dot */}
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
          </span>

          <span className="flex flex-col text-left font-body">
            <span className="text-[12px] font-bold tracking-wider text-white uppercase group-hover:text-[#E6FF2A]">
              Live CRM &amp; Support
            </span>
            <span className="text-[10px] text-white/60">Marka ERP Integrated</span>
          </span>

          {/* Icon */}
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-[#E6FF2A] transition-transform duration-300 group-hover:rotate-12">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </span>

          {hasNewReply && !isOpen && (
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[9px] font-bold text-white animate-bounce">
              1
            </span>
          )}
        </button>
      </div>

      {/* ── 2. INTERACTIVE CRM HUB WINDOW ── */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed bottom-22 left-4 z-[95] flex h-[580px] max-h-[85vh] w-[calc(100vw-32px)] max-w-[430px] flex-col overflow-hidden rounded-2xl border border-white/15 bg-[#0C0E14] text-white shadow-2xl backdrop-blur-xl sm:left-6 animate-in fade-in slide-in-from-bottom-4 duration-200"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 bg-[#12151F] px-4 py-3.5">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1A3E9E] font-bold text-[#E6FF2A]">
                A
              </span>
              <div>
                <h3 className="font-heading text-sm font-semibold text-white">
                  Arsalynk CRM Interface
                </h3>
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>Marka ERP Sync Active</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="flex h-7 w-7 items-center justify-center rounded-full text-white/60 transition-colors hover:bg-white/10 hover:text-white"
              aria-label="Tutup CRM Interface"
            >
              ✕
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-white/10 bg-[#0E1018] p-1.5 text-xs font-semibold">
            <button
              type="button"
              onClick={() => setActiveTab('inbox')}
              className={`flex-1 rounded-lg py-2 transition-all ${
                activeTab === 'inbox'
                  ? 'bg-[#1A3E9E] text-white shadow'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              💬 Live Inbox
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('inquiry')}
              className={`flex-1 rounded-lg py-2 transition-all ${
                activeTab === 'inquiry'
                  ? 'bg-[#1A3E9E] text-white shadow'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              📋 Inquiry
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('tracking')}
              className={`flex-1 rounded-lg py-2 transition-all ${
                activeTab === 'tracking'
                  ? 'bg-[#1A3E9E] text-white shadow'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              🔍 Portal
            </button>
          </div>

          {/* ── TAB CONTENT ── */}
          <div className="flex flex-1 flex-col overflow-y-auto">
            {/* ── TAB 1: LIVE INBOX ── */}
            {activeTab === 'inbox' && (
              <div className="flex flex-1 flex-col justify-between p-3">
                {/* Visitor Name Ribbon */}
                <div className="mb-2 flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-[11px]">
                  <span className="text-white/50">Identitas:</span>
                  <input
                    type="text"
                    value={visitorName}
                    onChange={(e) => {
                      setVisitorName(e.target.value);
                      if (typeof window !== 'undefined') {
                        localStorage.setItem('arsalynk_crm_visitor_name', e.target.value);
                      }
                    }}
                    placeholder="Ketik nama Anda..."
                    className="flex-1 bg-transparent text-white outline-none placeholder-white/30"
                  />
                </div>

                {/* Messages List */}
                <div className="flex flex-1 flex-col gap-2.5 overflow-y-auto pr-1">
                  {messages.map((m, idx) => {
                    const isMe = m.senderType === 'EXTERNAL';
                    return (
                      <div
                        key={m.messageId || idx}
                        className={`flex flex-col ${isMe ? 'items-end' : 'items-start'}`}
                      >
                        <div className="mb-0.5 text-[10px] text-white/40">
                          {isMe ? 'Anda' : m.senderName || 'Marka CS'}
                        </div>
                        <div
                          className={`max-w-[85%] rounded-2xl px-3.5 py-2 text-xs leading-relaxed ${
                            isMe
                              ? 'rounded-br-xs bg-[#1A3E9E] text-white'
                              : 'rounded-bl-xs border border-white/10 bg-white/10 text-white'
                          }`}
                        >
                          {m.text}
                        </div>
                        {isMe && m.status && (
                          <span className="mt-0.5 text-[9px] text-white/40">
                            {m.status === 'sending' && 'Mengirim...'}
                            {m.status === 'sent' && '✓ Terkirim ke CRM'}
                            {m.status === 'error' && '✕ Gagal'}
                          </span>
                        )}
                      </div>
                    );
                  })}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input Bar */}
                <form onSubmit={handleSendChat} className="mt-3 flex gap-2">
                  <input
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    placeholder="Ketik pesan untuk tim CRM..."
                    className="flex-1 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-xs text-white placeholder-white/40 focus:border-[#E6FF2A] focus:outline-none"
                  />
                  <button
                    type="submit"
                    disabled={isSendingChat || !chatInput.trim()}
                    className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#E6FF2A] text-[#101010] transition hover:bg-white disabled:opacity-40"
                    aria-label="Kirim Pesan"
                  >
                    ➔
                  </button>
                </form>
              </div>
            )}

            {/* ── TAB 2: INQUIRY FORM ── */}
            {activeTab === 'inquiry' && (
              <div className="flex-1 p-4">
                {inquirySuccess ? (
                  <div className="flex h-full flex-col items-center justify-center py-6 text-center">
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                      ✓
                    </div>
                    <h4 className="font-heading text-base font-semibold text-white">
                      Inquiry Berhasil Disimpan!
                    </h4>
                    <p className="mt-1 text-xs text-white/70">
                      Data Anda telah tersinkronisasi ke Marka ERP. Konsultan Arsalynk akan segera menghubungi Anda.
                    </p>
                    <button
                      type="button"
                      onClick={() => setInquirySuccess(false)}
                      className="mt-4 rounded-lg bg-white/10 px-4 py-2 text-xs font-semibold text-white hover:bg-white/20"
                    >
                      Kirim Inquiry Lain
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleInquirySubmit} className="space-y-3">
                    <div>
                      <label className="block text-[11px] font-medium text-white/70 mb-1">
                        Nama Lengkap *
                      </label>
                      <input
                        type="text"
                        required
                        value={inquiryForm.name}
                        onChange={(e) =>
                          setInquiryForm((p) => ({ ...p, name: e.target.value }))
                        }
                        placeholder="Nama PIC"
                        className="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-xs text-white placeholder-white/30 focus:border-[#E6FF2A] focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-[11px] font-medium text-white/70 mb-1">
                          Perusahaan
                        </label>
                        <input
                          type="text"
                          value={inquiryForm.company}
                          onChange={(e) =>
                            setInquiryForm((p) => ({ ...p, company: e.target.value }))
                          }
                          placeholder="PT / Instansi"
                          className="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-xs text-white placeholder-white/30 focus:border-[#E6FF2A] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-medium text-white/70 mb-1">
                          WhatsApp / Telepon *
                        </label>
                        <input
                          type="tel"
                          required
                          value={inquiryForm.phone}
                          onChange={(e) =>
                            setInquiryForm((p) => ({ ...p, phone: e.target.value }))
                          }
                          placeholder="08123456789"
                          className="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-xs text-white placeholder-white/30 focus:border-[#E6FF2A] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-medium text-white/70 mb-1">
                        Email Bisnis *
                      </label>
                      <input
                        type="email"
                        required
                        value={inquiryForm.email}
                        onChange={(e) =>
                          setInquiryForm((p) => ({ ...p, email: e.target.value }))
                        }
                        placeholder="pic@perusahaan.com"
                        className="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-xs text-white placeholder-white/30 focus:border-[#E6FF2A] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-medium text-white/70 mb-1">
                        Kebutuhan Solusi *
                      </label>
                      <select
                        value={inquiryForm.solution}
                        onChange={(e) =>
                          setInquiryForm((p) => ({ ...p, solution: e.target.value }))
                        }
                        className="w-full rounded-lg border border-white/15 bg-[#141722] px-3 py-2 text-xs text-white focus:border-[#E6FF2A] focus:outline-none"
                      >
                        {SOLUTIONS.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-medium text-white/70 mb-1">
                        Pesan Kebutuhan / Spesifikasi *
                      </label>
                      <textarea
                        rows={2}
                        required
                        value={inquiryForm.message}
                        onChange={(e) =>
                          setInquiryForm((p) => ({ ...p, message: e.target.value }))
                        }
                        placeholder="Jelaskan alur atau modul sistem yang dibutuhkan..."
                        className="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-xs text-white placeholder-white/30 focus:border-[#E6FF2A] focus:outline-none"
                      />
                    </div>

                    {inquiryError && (
                      <div className="rounded-lg bg-red-500/10 p-2 text-[11px] text-red-300">
                        {inquiryError}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmittingInquiry}
                      className="w-full rounded-lg bg-[#E6FF2A] py-2.5 text-xs font-bold uppercase tracking-wider text-[#101010] transition hover:bg-white disabled:opacity-50"
                    >
                      {isSubmittingInquiry ? 'Menyimpan ke Marka CRM...' : 'Kirim Inquiry Konsultasi'}
                    </button>
                  </form>
                )}
              </div>
            )}

            {/* ── TAB 3: CLIENT PORTAL & TRACKING ── */}
            {activeTab === 'tracking' && (
              <div className="flex-1 p-4">
                <div className="mb-3 flex rounded-lg border border-white/10 bg-white/5 p-1 text-[11px]">
                  <button
                    type="button"
                    onClick={() => {
                      setTrackingType('tickets');
                      setTrackingResult(null);
                    }}
                    className={`flex-1 rounded py-1 transition ${
                      trackingType === 'tickets' ? 'bg-[#1A3E9E] text-white' : 'text-white/60'
                    }`}
                  >
                    Tiket Support
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setTrackingType('quotations');
                      setTrackingResult(null);
                    }}
                    className={`flex-1 rounded py-1 transition ${
                      trackingType === 'quotations' ? 'bg-[#1A3E9E] text-white' : 'text-white/60'
                    }`}
                  >
                    Quotation
                  </button>
                </div>

                <form onSubmit={handleTrackingQuery} className="space-y-2.5">
                  <div>
                    <label className="block text-[11px] font-medium text-white/70 mb-1">
                      {trackingType === 'tickets' ? 'Nomor Tiket' : 'Nomor Quotation'}
                    </label>
                    <input
                      type="text"
                      required
                      value={docId}
                      onChange={(e) => setDocId(e.target.value)}
                      placeholder={trackingType === 'tickets' ? 'TKT-10023' : 'QUO-2026-001'}
                      className="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-xs text-white placeholder-white/30"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-white/70 mb-1">
                      Token Akses Dokumen
                    </label>
                    <input
                      type="text"
                      required
                      value={docToken}
                      onChange={(e) => setDocToken(e.target.value)}
                      placeholder="Token rahasia dokumen"
                      className="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-xs text-white placeholder-white/30"
                    />
                  </div>

                  {trackingError && (
                    <div className="rounded-lg bg-red-500/10 p-2 text-[11px] text-red-300">
                      {trackingError}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isLoadingTracking}
                    className="w-full rounded-lg bg-[#E6FF2A] py-2 text-xs font-bold uppercase tracking-wider text-[#101010] transition hover:bg-white disabled:opacity-50"
                  >
                    {isLoadingTracking ? 'Memeriksa...' : 'Cek Status Dokumen'}
                  </button>
                </form>

                {/* Result Card */}
                {trackingResult && (
                  <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-3 text-xs">
                    <div className="flex items-center justify-between border-b border-white/10 pb-2">
                      <span className="font-semibold text-white">
                        {trackingResult.code || trackingResult.ticket_number || docId}
                      </span>
                      <span className="rounded bg-[#1A3E9E] px-2 py-0.5 text-[10px] uppercase font-bold text-white">
                        {trackingResult.status || 'Aktif'}
                      </span>
                    </div>

                    <div className="mt-2 space-y-1.5 text-white/80 text-[11px]">
                      {trackingResult.title && (
                        <div>
                          <span className="text-white/40">Judul: </span>
                          {trackingResult.title}
                        </div>
                      )}
                      {trackingResult.total_amount && (
                        <div>
                          <span className="text-white/40">Nilai: </span>
                          <span className="text-[#E6FF2A] font-bold">
                            Rp {Number(trackingResult.total_amount).toLocaleString('id-ID')}
                          </span>
                        </div>
                      )}
                      {trackingResult.description && (
                        <div className="mt-1 rounded bg-black/30 p-2 text-white/70">
                          {trackingResult.description}
                        </div>
                      )}
                    </div>

                    {/* Quotation Approval */}
                    {trackingType === 'quotations' && trackingResult.status?.toLowerCase() === 'sent' && (
                      <div className="mt-3 border-t border-white/10 pt-2.5 space-y-2">
                        <input
                          type="text"
                          value={signatureName}
                          onChange={(e) => setSignatureName(e.target.value)}
                          placeholder="Nama Penandatangan *"
                          className="w-full rounded border border-white/15 bg-white/5 px-2 py-1.5 text-xs text-white"
                        />
                        <div className="flex gap-2">
                          <button
                            type="button"
                            disabled={isSubmittingDecision}
                            onClick={() => handleDecisionSubmit('accepted')}
                            className="flex-1 rounded bg-emerald-600 py-1.5 text-[11px] font-bold text-white"
                          >
                            Setujui
                          </button>
                          <button
                            type="button"
                            disabled={isSubmittingDecision}
                            onClick={() => handleDecisionSubmit('rejected')}
                            className="rounded border border-red-500/50 px-3 py-1.5 text-[11px] text-red-300"
                          >
                            Tolak
                          </button>
                        </div>
                      </div>
                    )}

                    {decisionFeedback && (
                      <div className="mt-2 text-[11px] text-[#E6FF2A]">{decisionFeedback}</div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

interface Inquiry {
  id: number;
  name: string;
  phone: string;
  email: string;
  contact: string;
  company: string;
  service: string;
  packageChoice: string;
  billingCycle: string;
  price: string;
  message: string;
  brandDescription: string;
  source: string;
  createdAt: string;
  status: 'pending' | 'contacted' | 'deal' | 'closed';
}

interface CrmEventLog {
  id: number;
  eventId: string;
  eventType: string;
  direction: 'INBOUND_DISPATCHED' | 'OUTBOUND_RECEIVED';
  statusCode: number;
  success: number;
  payloadJson: string;
  responseJson: string;
  createdAt: string;
}

interface CrmChatMessage {
  id: number;
  threadId: string;
  messageId: string;
  senderType: 'EXTERNAL' | 'INTERNAL' | 'BOT';
  senderName: string;
  text: string;
  createdAt: string;
}

interface CrmTicket {
  id: number;
  eventId: string;
  subject: string;
  description: string;
  serialNumber?: string;
  customerEmail?: string;
  status: string;
  createdAt: string;
}

export default function CrmDashboardPage() {
  const [activeTab, setActiveTab] = useState<'inquiries' | 'inbox' | 'webhooks' | 'tickets'>('inquiries');

  // Inquiries State
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loadingInquiries, setLoadingInquiries] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [updatingId, setUpdatingId] = useState<number | null>(null);

  // Webhook Logs State
  const [logs, setLogs] = useState<CrmEventLog[]>([]);
  const [loadingLogs, setLoadingLogs] = useState(false);
  const [selectedLog, setSelectedLog] = useState<CrmEventLog | null>(null);

  // Inbox State
  const [chatThreads, setChatThreads] = useState<string[]>([]);
  const [selectedThread, setSelectedThread] = useState<string>('');
  const [threadMessages, setThreadMessages] = useState<CrmChatMessage[]>([]);
  const [loadingChat, setLoadingChat] = useState(false);

  // Tickets State
  const [tickets, setTickets] = useState<CrmTicket[]>([]);
  const [loadingTickets, setLoadingTickets] = useState(false);

  // Fetch Inquiries
  const fetchInquiries = useCallback(async () => {
    setLoadingInquiries(true);
    try {
      const res = await fetch('/api/inquiries');
      const json = await res.json();
      if (json.success && Array.isArray(json.data)) {
        setInquiries(json.data);
      }
    } catch (e) {
      console.error('Failed to load inquiries:', e);
    } finally {
      setLoadingInquiries(false);
    }
  }, []);

  // Fetch Webhook Logs
  const fetchLogs = useCallback(async () => {
    setLoadingLogs(true);
    try {
      const res = await fetch('/api/crm/events?limit=100');
      const json = await res.json();
      if (json.success && Array.isArray(json.logs)) {
        setLogs(json.logs);
      }
    } catch (e) {
      console.error('Failed to load webhook logs:', e);
    } finally {
      setLoadingLogs(false);
    }
  }, []);

  // Fetch Tickets
  const fetchTickets = useCallback(async () => {
    setLoadingTickets(true);
    try {
      const res = await fetch('/api/support/ticket');
      const json = await res.json();
      if (json.success && Array.isArray(json.tickets)) {
        setTickets(json.tickets);
      }
    } catch (e) {
      console.error('Failed to load tickets:', e);
    } finally {
      setLoadingTickets(false);
    }
  }, []);

  // Fetch Thread Messages
  const fetchThreadMessages = useCallback(async (threadId: string) => {
    if (!threadId) return;
    setLoadingChat(true);
    try {
      const res = await fetch(`/api/chat/messages?threadId=${encodeURIComponent(threadId)}`);
      const json = await res.json();
      if (json.success && Array.isArray(json.messages)) {
        setThreadMessages(json.messages);
      }
    } catch (e) {
      console.error('Failed to load chat messages:', e);
    } finally {
      setLoadingChat(false);
    }
  }, []);

  useEffect(() => {
    fetchInquiries();
  }, [fetchInquiries]);

  useEffect(() => {
    if (activeTab === 'webhooks') fetchLogs();
    if (activeTab === 'tickets') fetchTickets();
    if (activeTab === 'inbox') {
      // Extract unique threads from recent logs or inquiries
      fetchLogs().then(() => {
        // also fetch first thread if available
      });
    }
  }, [activeTab, fetchLogs, fetchTickets]);

  const handleUpdateStatus = async (id: number, newStatus: string) => {
    setUpdatingId(id);
    try {
      const res = await fetch('/api/inquiries', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status: newStatus }),
      });
      if (res.ok) {
        setInquiries((prev) =>
          prev.map((item) =>
            item.id === id ? { ...item, status: newStatus as Inquiry['status'] } : item
          )
        );
      }
    } catch (e) {
      console.error('Failed to update status:', e);
    } finally {
      setUpdatingId(null);
    }
  };

  const handleDeleteInquiry = async (id: number) => {
    if (!confirm('Hapus data inquiry ini dari database?')) return;
    try {
      const res = await fetch(`/api/inquiries?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        setInquiries((prev) => prev.filter((item) => item.id !== id));
      }
    } catch (e) {
      console.error('Failed to delete inquiry:', e);
    }
  };

  const handleExportCsv = () => {
    if (inquiries.length === 0) return;
    const headers = ['ID', 'Tanggal', 'Nama', 'Perusahaan', 'Phone', 'Email', 'Layanan', 'Status', 'Pesan'];
    const rows = filteredInquiries.map((i) => [
      i.id,
      i.createdAt,
      `"${(i.name || '').replace(/"/g, '""')}"`,
      `"${(i.company || '-').replace(/"/g, '""')}"`,
      `"${(i.phone || i.contact || '').replace(/"/g, '""')}"`,
      `"${(i.email || '').replace(/"/g, '""')}"`,
      `"${(i.service || i.packageChoice || '').replace(/"/g, '""')}"`,
      i.status,
      `"${(i.message || i.brandDescription || '').replace(/"/g, '""')}"`,
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `arsalynk_crm_inquiries_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredInquiries = inquiries.filter((item) => {
    const matchesSearch =
      (item.name || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.company || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.email || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.phone || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.service || '').toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === 'all' || item.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const stats = {
    total: inquiries.length,
    pending: inquiries.filter((i) => i.status === 'pending').length,
    contacted: inquiries.filter((i) => i.status === 'contacted').length,
    deal: inquiries.filter((i) => i.status === 'deal').length,
  };

  return (
    <div className="min-h-screen bg-[#05070A] text-[#F7F7F7]">
      {/* Top Header */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#05070A]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="font-heading text-lg font-bold tracking-tight text-white hover:text-[#E6FF2A] transition"
            >
              ARSALYNK<span className="text-[#1A3E9E]">.</span>
            </Link>
            <span className="rounded-full bg-[#1A3E9E]/30 px-2.5 py-0.5 font-mono text-[11px] font-semibold tracking-wider text-[#99A6E7] border border-[#1A3E9E]/50">
              PRODUCTION CRM
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                if (activeTab === 'inquiries') fetchInquiries();
                if (activeTab === 'webhooks') fetchLogs();
                if (activeTab === 'tickets') fetchTickets();
              }}
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/90 hover:bg-white/10 transition"
            >
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
              </svg>
              <span>Refresh</span>
            </button>
            <Link
              href="/"
              className="rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/70 hover:text-white hover:bg-white/10 transition"
            >
              &larr; Back to Website
            </Link>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="mx-auto flex max-w-7xl gap-2 px-6 pt-2">
          <button
            onClick={() => setActiveTab('inquiries')}
            className={`border-b-2 px-4 py-2.5 text-sm font-semibold transition ${
              activeTab === 'inquiries'
                ? 'border-[#E6FF2A] text-[#E6FF2A]'
                : 'border-transparent text-white/60 hover:text-white'
            }`}
          >
            Inquiries &amp; Leads ({inquiries.length})
          </button>
          <button
            onClick={() => setActiveTab('inbox')}
            className={`border-b-2 px-4 py-2.5 text-sm font-semibold transition ${
              activeTab === 'inbox'
                ? 'border-[#E6FF2A] text-[#E6FF2A]'
                : 'border-transparent text-white/60 hover:text-white'
            }`}
          >
            Live Chat / Inbox
          </button>
          <button
            onClick={() => setActiveTab('webhooks')}
            className={`border-b-2 px-4 py-2.5 text-sm font-semibold transition ${
              activeTab === 'webhooks'
                ? 'border-[#E6FF2A] text-[#E6FF2A]'
                : 'border-transparent text-white/60 hover:text-white'
            }`}
          >
            Marka Webhook Logs ({logs.length})
          </button>
          <button
            onClick={() => setActiveTab('tickets')}
            className={`border-b-2 px-4 py-2.5 text-sm font-semibold transition ${
              activeTab === 'tickets'
                ? 'border-[#E6FF2A] text-[#E6FF2A]'
                : 'border-transparent text-white/60 hover:text-white'
            }`}
          >
            Support Tickets ({tickets.length})
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="mx-auto max-w-7xl px-6 py-8">
        {/* TAB 1: INQUIRIES */}
        {activeTab === 'inquiries' && (
          <div className="flex flex-col gap-6">
            {/* KPI Cards */}
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <span className="text-xs uppercase tracking-wider text-white/50">Total Inquiries</span>
                <p className="mt-2 text-3xl font-bold text-white">{stats.total}</p>
              </div>
              <div className="rounded-xl border border-amber-500/20 bg-amber-500/[0.03] p-5">
                <span className="text-xs uppercase tracking-wider text-amber-400">Pending Review</span>
                <p className="mt-2 text-3xl font-bold text-amber-300">{stats.pending}</p>
              </div>
              <div className="rounded-xl border border-blue-500/20 bg-blue-500/[0.03] p-5">
                <span className="text-xs uppercase tracking-wider text-blue-400">Contacted</span>
                <p className="mt-2 text-3xl font-bold text-blue-300">{stats.contacted}</p>
              </div>
              <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/[0.03] p-5">
                <span className="text-xs uppercase tracking-wider text-emerald-400">Deals Closed</span>
                <p className="mt-2 text-3xl font-bold text-emerald-300">{stats.deal}</p>
              </div>
            </div>

            {/* Filters Bar */}
            <div className="flex flex-col justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-4 sm:flex-row sm:items-center">
              <div className="flex flex-1 items-center gap-3">
                <input
                  type="text"
                  placeholder="Cari nama, perusahaan, email, atau phone..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="h-10 w-full max-w-md rounded-lg border border-white/15 bg-white/5 px-3 text-sm text-white placeholder-white/40 focus:border-[#1A3E9E] focus:outline-none"
                />
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="h-10 rounded-lg border border-white/15 bg-[#05070A] px-3 text-sm text-white focus:border-[#1A3E9E] focus:outline-none"
                >
                  <option value="all">Semua Status</option>
                  <option value="pending">Pending</option>
                  <option value="contacted">Contacted</option>
                  <option value="deal">Deal</option>
                  <option value="closed">Closed</option>
                </select>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleExportCsv}
                  disabled={inquiries.length === 0}
                  className="inline-flex h-10 items-center gap-1.5 rounded-lg border border-white/20 bg-white/10 px-4 text-xs font-semibold uppercase tracking-wider text-white hover:bg-white/20 transition disabled:opacity-40"
                >
                  Export CSV
                </button>
              </div>
            </div>

            {/* Inquiries Table */}
            <div className="overflow-x-auto rounded-xl border border-white/10 bg-white/[0.02]">
              <table className="w-full text-left text-sm text-white/80">
                <thead className="border-b border-white/10 bg-white/[0.03] text-xs uppercase tracking-wider text-white/50">
                  <tr>
                    <th className="px-4 py-3.5">Nama &amp; Perusahaan</th>
                    <th className="px-4 py-3.5">Kontak</th>
                    <th className="px-4 py-3.5">Layanan / Subjek</th>
                    <th className="px-4 py-3.5">Waktu</th>
                    <th className="px-4 py-3.5">Status</th>
                    <th className="px-4 py-3.5 text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 font-normal">
                  {loadingInquiries ? (
                    <tr>
                      <td colSpan={6} className="px-4 py-8 text-center text-white/40">
                        Memuat data inquiries...
                      </td>
                    </tr>
                  ) : filteredInquiries.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="px-4 py-8 text-center text-white/40">
                        Tidak ada inquiry yang sesuai filter.
                      </td>
                    </tr>
                  ) : (
                    filteredInquiries.map((inq) => (
                      <tr key={inq.id} className="hover:bg-white/[0.02] transition">
                        <td className="px-4 py-3.5">
                          <div className="font-semibold text-white">{inq.name}</div>
                          <div className="text-xs text-white/50">{inq.company || 'Personal'}</div>
                        </td>
                        <td className="px-4 py-3.5">
                          <div className="text-xs text-[#99A6E7]">{inq.email}</div>
                          <div className="text-xs text-white/60">{inq.phone || inq.contact}</div>
                        </td>
                        <td className="px-4 py-3.5">
                          <span className="inline-block rounded bg-[#1A3E9E]/20 px-2 py-0.5 text-xs text-[#99A6E7] border border-[#1A3E9E]/40">
                            {inq.service || inq.packageChoice}
                          </span>
                          {inq.message && (
                            <p className="mt-1 line-clamp-1 max-w-xs text-xs text-white/50" title={inq.message}>
                              {inq.message}
                            </p>
                          )}
                        </td>
                        <td className="px-4 py-3.5 text-xs text-white/50 whitespace-nowrap">
                          {new Date(inq.createdAt).toLocaleDateString('id-ID', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </td>
                        <td className="px-4 py-3.5">
                          <select
                            value={inq.status}
                            disabled={updatingId === inq.id}
                            onChange={(e) => handleUpdateStatus(inq.id, e.target.value)}
                            className={`rounded-md px-2 py-1 text-xs font-semibold outline-none transition ${
                              inq.status === 'pending'
                                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                                : inq.status === 'contacted'
                                ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                                : inq.status === 'deal'
                                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                                : 'bg-gray-500/20 text-gray-300 border border-gray-500/30'
                            }`}
                          >
                            <option value="pending" className="bg-[#05070A] text-white">Pending</option>
                            <option value="contacted" className="bg-[#05070A] text-white">Contacted</option>
                            <option value="deal" className="bg-[#05070A] text-white">Deal</option>
                            <option value="closed" className="bg-[#05070A] text-white">Closed</option>
                          </select>
                        </td>
                        <td className="px-4 py-3.5 text-right">
                          <button
                            onClick={() => handleDeleteInquiry(inq.id)}
                            className="rounded p-1 text-red-400 hover:bg-red-500/10 hover:text-red-300 transition"
                            title="Hapus"
                          >
                            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <polyline points="3 6 5 6 21 6" />
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 2: INBOX & LIVE CHAT */}
        {activeTab === 'inbox' && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <h3 className="mb-3 font-heading text-sm font-semibold uppercase tracking-wider text-white/70">
                Pencarian Percakapan
              </h3>
              <p className="mb-4 text-xs text-white/50">
                Pesan yang masuk dari live-chat web atau WhatsApp secara otomatis tersinkronisasi dua arah dengan webhook Marka CRM.
              </p>
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  placeholder="Masukkan thread ID (cth: webchat:guest_123)..."
                  value={selectedThread}
                  onChange={(e) => setSelectedThread(e.target.value)}
                  className="rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-xs text-white focus:border-[#1A3E9E] focus:outline-none"
                />
                <button
                  onClick={() => fetchThreadMessages(selectedThread)}
                  disabled={!selectedThread.trim()}
                  className="rounded-lg bg-[#1A3E9E] py-2 text-xs font-semibold text-white hover:bg-[#14347F] transition disabled:opacity-50"
                >
                  Buka Percakapan
                </button>
              </div>
            </div>

            <div className="col-span-2 rounded-xl border border-white/10 bg-white/[0.02] p-5">
              <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
                <h3 className="font-heading text-sm font-semibold text-white">
                  Thread Message Viewer: <span className="font-mono text-[#99A6E7]">{selectedThread || 'Belum dipilih'}</span>
                </h3>
              </div>

              {loadingChat ? (
                <div className="py-12 text-center text-xs text-white/40">Memuat riwayat chat...</div>
              ) : threadMessages.length === 0 ? (
                <div className="py-12 text-center text-xs text-white/40">
                  {selectedThread ? 'Tidak ada pesan dalam thread ini.' : 'Pilih atau masukkan thread ID untuk melihat percakapan.'}
                </div>
              ) : (
                <div className="flex max-h-[500px] flex-col gap-3 overflow-y-auto pr-2">
                  {threadMessages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex flex-col max-w-[80%] rounded-xl p-3 text-xs ${
                        msg.senderType === 'EXTERNAL'
                          ? 'self-end bg-[#1A3E9E]/40 border border-[#1A3E9E]/60 text-white'
                          : 'self-start bg-white/10 border border-white/15 text-white/90'
                      }`}
                    >
                      <div className="mb-1 flex items-center justify-between gap-2 text-[10px] opacity-75">
                        <span className="font-semibold">{msg.senderName || msg.senderType}</span>
                        <span>{new Date(msg.createdAt).toLocaleTimeString('id-ID')}</span>
                      </div>
                      <p className="whitespace-pre-wrap">{msg.text}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 3: MARKA WEBHOOK LOGS */}
        {activeTab === 'webhooks' && (
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-heading text-base font-semibold text-white">Audit Log Integrasi Webhook Marka CRM</h3>
                <p className="text-xs text-white/50">
                  Riwayat transmisi event outward ke Marka CRM dan event callback inbound yang diterima secara live.
                </p>
              </div>
            </div>

            <div className="overflow-x-auto rounded-xl border border-white/10 bg-white/[0.02]">
              <table className="w-full text-left text-sm text-white/80">
                <thead className="border-b border-white/10 bg-white/[0.03] text-xs uppercase tracking-wider text-white/50">
                  <tr>
                    <th className="px-4 py-3.5">Event ID</th>
                    <th className="px-4 py-3.5">Event Type</th>
                    <th className="px-4 py-3.5">Direction</th>
                    <th className="px-4 py-3.5">Status Code</th>
                    <th className="px-4 py-3.5">Waktu</th>
                    <th className="px-4 py-3.5 text-right">Detail</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-xs font-mono">
                  {loadingLogs ? (
                    <tr>
                      <td colSpan={6} className="px-4 py-8 text-center text-white/40">
                        Memuat event logs...
                      </td>
                    </tr>
                  ) : logs.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="px-4 py-8 text-center text-white/40">
                        Belum ada riwayat webhook event yang tercatat.
                      </td>
                    </tr>
                  ) : (
                    logs.map((item) => (
                      <tr key={item.id} className="hover:bg-white/[0.02] transition">
                        <td className="px-4 py-3 text-white/90 truncate max-w-[150px]">{item.eventId}</td>
                        <td className="px-4 py-3 text-[#99A6E7]">{item.eventType}</td>
                        <td className="px-4 py-3">
                          <span
                            className={`rounded px-2 py-0.5 text-[10px] font-bold ${
                              item.direction === 'INBOUND_DISPATCHED'
                                ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                                : 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                            }`}
                          >
                            {item.direction}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <span
                            className={`font-semibold ${
                              item.statusCode >= 200 && item.statusCode < 300
                                ? 'text-emerald-400'
                                : 'text-red-400'
                            }`}
                          >
                            {item.statusCode}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-white/50">{item.createdAt}</td>
                        <td className="px-4 py-3 text-right">
                          <button
                            onClick={() => setSelectedLog(item)}
                            className="rounded bg-white/10 px-2 py-1 text-[11px] font-sans text-white hover:bg-white/20 transition"
                          >
                            Inspect
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* Modal Inspector */}
            {selectedLog && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
                onClick={() => setSelectedLog(null)}
              >
                <div
                  className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/20 bg-[#0A0D14] p-6 shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <h4 className="font-heading text-sm font-bold text-white">
                      Inspect Event: <span className="font-mono text-[#E6FF2A]">{selectedLog.eventId}</span>
                    </h4>
                    <button
                      onClick={() => setSelectedLog(null)}
                      className="rounded p-1 text-white/60 hover:text-white"
                    >
                      &times;
                    </button>
                  </div>

                  <div className="mt-4 flex flex-col gap-4 font-mono text-xs">
                    <div>
                      <span className="text-white/50">Event Type:</span> {selectedLog.eventType}
                    </div>
                    <div>
                      <span className="text-white/50">Direction:</span> {selectedLog.direction}
                    </div>
                    <div>
                      <span className="text-white/50">Status Code:</span> {selectedLog.statusCode}
                    </div>
                    <div>
                      <span className="text-white/50">Payload Sent/Received:</span>
                      <pre className="mt-1 overflow-x-auto rounded-lg bg-black/60 p-3 text-[11px] text-emerald-300">
                        {(() => {
                          try {
                            return JSON.stringify(JSON.parse(selectedLog.payloadJson), null, 2);
                          } catch {
                            return selectedLog.payloadJson;
                          }
                        })()}
                      </pre>
                    </div>
                    <div>
                      <span className="text-white/50">Response Body:</span>
                      <pre className="mt-1 overflow-x-auto rounded-lg bg-black/60 p-3 text-[11px] text-blue-300">
                        {(() => {
                          try {
                            return JSON.stringify(JSON.parse(selectedLog.responseJson), null, 2);
                          } catch {
                            return selectedLog.responseJson;
                          }
                        })()}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 4: SUPPORT TICKETS */}
        {activeTab === 'tickets' && (
          <div className="flex flex-col gap-6">
            <h3 className="font-heading text-base font-semibold text-white">Support Tickets Sinkron Marka CRM</h3>
            <div className="overflow-x-auto rounded-xl border border-white/10 bg-white/[0.02]">
              <table className="w-full text-left text-sm text-white/80">
                <thead className="border-b border-white/10 bg-white/[0.03] text-xs uppercase tracking-wider text-white/50">
                  <tr>
                    <th className="px-4 py-3.5">Tiket ID</th>
                    <th className="px-4 py-3.5">Subjek</th>
                    <th className="px-4 py-3.5">Customer Email</th>
                    <th className="px-4 py-3.5">Serial Number</th>
                    <th className="px-4 py-3.5">Status</th>
                    <th className="px-4 py-3.5">Waktu</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-xs">
                  {loadingTickets ? (
                    <tr>
                      <td colSpan={6} className="px-4 py-8 text-center text-white/40">
                        Memuat data tiket...
                      </td>
                    </tr>
                  ) : tickets.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="px-4 py-8 text-center text-white/40">
                        Belum ada tiket support yang tercatat.
                      </td>
                    </tr>
                  ) : (
                    tickets.map((t) => (
                      <tr key={t.id} className="hover:bg-white/[0.02] transition">
                        <td className="px-4 py-3 font-mono text-white/80">{t.eventId}</td>
                        <td className="px-4 py-3 font-semibold text-white">{t.subject}</td>
                        <td className="px-4 py-3 text-[#99A6E7]">{t.customerEmail || '-'}</td>
                        <td className="px-4 py-3 font-mono text-white/60">{t.serialNumber || '-'}</td>
                        <td className="px-4 py-3">
                          <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-300 border border-emerald-500/30">
                            {t.status}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-white/50">{t.createdAt}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

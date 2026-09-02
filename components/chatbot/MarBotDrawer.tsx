'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChatMessage, QuickActionItem } from '@/types/chatbot';
import {
  MARBOT_QUICK_ACTIONS,
  streamChatCompletion,
} from '@/lib/chatbot.service';
import { MarBotIcon } from './MarBotTrigger';
import { MarkdownRenderer } from './MarkdownRenderer';
import styles from './MarBotDrawer.module.css';

interface MarBotDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

function CloseIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function SendArrowIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function StopIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <rect x="6" y="6" width="12" height="12" rx="2" />
    </svg>
  );
}

function formatCurrentTime(): string {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  return `${hours}.${minutes}`;
}

const INITIAL_MESSAGE: ChatMessage = {
  id: 'initial-greeting',
  role: 'assistant',
  content:
    'Halo! Saya MarBot, asisten AI resmi Arsalynk (PT Sinergi Muda Arsa). Saya siap membantu Anda mengetahui lebih banyak tentang profil perusahaan kami, solusi teknologi enterprise (ERP, IoT, Cloud), studi kasus proyek, serta konsultasi bisnis. Ada yang ingin Anda tanyakan?',
  timestamp: formatCurrentTime(),
};

export default function MarBotDrawer({ isOpen, onClose }: MarBotDrawerProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [conversationId, setConversationId] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  const abortControllerRef = useRef<AbortController | null>(null);
  const chatEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Auto-scroll to bottom on new messages or when opened
  useEffect(() => {
    if (isOpen && isMounted) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isOpen, isMounted, messages, isLoading]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && isMounted) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isOpen, isMounted]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleStopGeneration = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
      setIsLoading(false);
      setMessages((prev) =>
        prev.map((msg) =>
          msg.isStreaming ? { ...msg, isStreaming: false } : msg
        )
      );
    }
  };

  const handleSendMessage = async (textToSend?: string) => {
    const messageContent = (textToSend ?? inputValue).trim();
    if (!messageContent || isLoading) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: messageContent,
      timestamp: formatCurrentTime(),
    };

    const assistantPlaceholderId = `bot-${Date.now()}`;
    const assistantPlaceholder: ChatMessage = {
      id: assistantPlaceholderId,
      role: 'assistant',
      content: '',
      timestamp: formatCurrentTime(),
      isStreaming: true,
    };

    setMessages((prev) => [...prev, userMessage, assistantPlaceholder]);
    if (!textToSend) {
      setInputValue('');
    }
    setIsLoading(true);

    const abortController = new AbortController();
    abortControllerRef.current = abortController;

    try {
      await streamChatCompletion({
        message: messageContent,
        conversationId: conversationId || undefined,
        signal: abortController.signal,
        onChunk: (delta: string) => {
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === assistantPlaceholderId
                ? { ...msg, content: msg.content + delta }
                : msg
            )
          );
        },
        onDone: (meta) => {
          if (meta.conversationId) {
            setConversationId(meta.conversationId);
          }
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === assistantPlaceholderId
                ? {
                    ...msg,
                    isStreaming: false,
                    sources: meta.sources || msg.sources,
                  }
                : msg
            )
          );
          setIsLoading(false);
          abortControllerRef.current = null;
        },
        onError: (err) => {
          console.error('[MarBot Stream Error]', err);
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === assistantPlaceholderId
                ? {
                    ...msg,
                    content:
                      msg.content ||
                      'Mohon maaf, saat ini terjadi kendala koneksi ke server AI. Anda dapat mencoba sesaat lagi atau menghubungi kami melalui WhatsApp.',
                    isStreaming: false,
                    isError: !msg.content,
                  }
                : msg
            )
          );
          setIsLoading(false);
          abortControllerRef.current = null;
        },
      });
    } catch {
      setIsLoading(false);
      abortControllerRef.current = null;
    }
  };

  const handleQuickActionClick = (item: QuickActionItem) => {
    handleSendMessage(item.prompt);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isMounted || !isOpen) return null;

  return (
    <>
      <div className={styles.overlay} onClick={onClose} aria-hidden="true" />
      <section
        className={styles.drawer}
        role="dialog"
        aria-label="MarBot Chat Assistant"
        aria-modal="true"
      >
        {/* Header */}
        <header className={styles.header}>
          <div className={styles.botInfo}>
            <div className={styles.headerAvatar}>
              <MarBotIcon className={styles.headerAvatarIcon} />
            </div>
            <div className={styles.botText}>
              <span className={styles.botName}>MarBot</span>
              <span className={styles.botStatus}>
                <span className={styles.statusDot} />
                Online
              </span>
            </div>
          </div>
          <button
            type="button"
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Tutup jendela chat"
          >
            <CloseIcon />
          </button>
        </header>

        {/* Chat Body */}
        <div className={styles.chatBody}>
          {messages.map((msg) => {
            // Sembunyikan placeholder bot kosong saat baru mengawali request
            if (msg.role === 'assistant' && !msg.content && isLoading) {
              return null;
            }

            return (
              <div
                key={msg.id}
                className={`${styles.messageGroup} ${
                  msg.role === 'user'
                    ? styles.userMessageGroup
                    : styles.assistantMessageGroup
                }`}
              >
                <div className={styles.messageMeta}>
                  {msg.role === 'assistant' && (
                    <div className={styles.miniAvatar}>
                      <MarBotIcon className={styles.miniAvatarIcon} />
                    </div>
                  )}
                  <span className={styles.senderName}>
                    {msg.role === 'assistant' ? 'MarBot' : 'Anda'}
                  </span>
                  <span className={styles.messageTimestamp}>· {msg.timestamp}</span>
                </div>

                <div
                  className={`${styles.bubble} ${
                    msg.role === 'assistant'
                      ? styles.assistantBubble
                      : styles.userBubble
                  }`}
                >
                  <MarkdownRenderer content={msg.content} />

                  {msg.sources && msg.sources.length > 0 && (
                    <div className={styles.sourcesContainer}>
                      <span className={styles.sourcesLabel}>Sumber:</span>
                      {msg.sources.map((src, i) => (
                        <span key={i} className={styles.sourceBadge}>
                          {src}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {isLoading && !messages[messages.length - 1]?.content && (
            <div className={`${styles.messageGroup} ${styles.assistantMessageGroup}`}>
              <div className={styles.messageMeta}>
                <div className={styles.miniAvatar}>
                  <MarBotIcon className={styles.miniAvatarIcon} />
                </div>
                <span className={styles.senderName}>MarBot</span>
                <span className={styles.messageTimestamp}>· sedang mengetik</span>
              </div>
              <div className={styles.typingContainer}>
                <span className={styles.typingDot} />
                <span className={styles.typingDot} />
                <span className={styles.typingDot} />
              </div>
            </div>
          )}

          {/* Quick Actions */}
          {messages.length <= 1 && (
            <div className={styles.quickActionsSection}>
              <span className={styles.quickActionsTitle}>Quick Actions</span>
              {MARBOT_QUICK_ACTIONS.map((action) => (
                <button
                  key={action.id}
                  type="button"
                  className={styles.quickActionButton}
                  onClick={() => handleQuickActionClick(action)}
                >
                  <span>{action.label}</span>
                  <span className={styles.quickActionArrow}>➔</span>
                </button>
              ))}
            </div>
          )}

          <div ref={chatEndRef} />
        </div>

        {/* Footer */}
        <footer className={styles.footer}>
          <div className={styles.inputContainer}>
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleInputKeyDown}
              placeholder="Ask MarBot anything.."
              className={styles.inputField}
              disabled={isLoading}
              aria-label="Ketik pesan untuk MarBot"
            />
            {isLoading ? (
              <button
                type="button"
                onClick={handleStopGeneration}
                className={styles.sendButton}
                aria-label="Hentikan jawaban"
                title="Hentikan"
              >
                <StopIcon className={styles.sendIcon} />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => handleSendMessage()}
                disabled={!inputValue.trim()}
                className={styles.sendButton}
                aria-label="Kirim pesan"
              >
                <SendArrowIcon className={styles.sendIcon} />
              </button>
            )}
          </div>
          <p className={styles.disclaimer}>
            MarBot didukung AI. Silakan verifikasi data penting ke tim resmi Arsalynk.
          </p>
        </footer>
      </section>
    </>
  );
}

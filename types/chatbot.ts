export type ChatRole = 'user' | 'assistant' | 'system' | 'human_cs';

export interface ChatMessage {
  id: string;
  role: ChatRole;
  content: string;
  timestamp: string;
  sources?: string[];
  isStreaming?: boolean;
  isError?: boolean;
}

export interface Conversation {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  callerId?: string;
  externalUserId?: string;
  messagesCount?: number;
}

export interface ConversationDetail extends Conversation {
  messages: ChatMessage[];
}

export interface KnowledgeDocument {
  id: string;
  title: string;
  fileName?: string;
  fileType?: string;
  fileSize?: number;
  totalChunks?: number;
  createdAt: string;
  updatedAt: string;
}

export interface SearchKnowledgeResultItem {
  id: string;
  documentId: string;
  documentTitle: string;
  content: string;
  score: number;
}

export interface QuickActionItem {
  id: string;
  label: string;
  prompt: string;
}

'use client';

import React, { memo } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import styles from './MarkdownRenderer.module.css';

interface MarkdownRendererProps {
  content: string;
}

/**
 * Preprocess raw text from AI model to fix common formatting edge-cases
 */
function normalizeMarkdown(text: string): string {
  if (!text) return '';

  return (
    text
      .replace(/\r\n/g, '\n')
      // Convert inline " - " into proper markdown list items
      .replace(/([^\n])\s+-\s+([A-Z0-9])/g, '$1\n- $2')
      .replace(/:\s+-\s+/g, ':\n- ')
      // Ensure colons followed by dash lists have newlines
      .replace(/([^\n])\s+•\s+/g, '$1\n- ')
  );
}

export const MarkdownRenderer = memo(function MarkdownRenderer({
  content,
}: MarkdownRendererProps) {
  if (!content) return null;

  const normalized = normalizeMarkdown(content);

  return (
    <div className={styles.markdown}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => <h2 className={styles.heading1}>{children}</h2>,
          h2: ({ children }) => <h3 className={styles.heading2}>{children}</h3>,
          h3: ({ children }) => <h4 className={styles.heading3}>{children}</h4>,
          h4: ({ children }) => <h5 className={styles.heading4}>{children}</h5>,
          p: ({ children }) => <p className={styles.paragraph}>{children}</p>,
          ul: ({ children }) => <ul className={styles.unorderedList}>{children}</ul>,
          ol: ({ children }) => <ol className={styles.orderedList}>{children}</ol>,
          li: ({ children }) => <li className={styles.listItem}>{children}</li>,
          hr: () => <hr className={styles.divider} />,
          strong: ({ children }) => <strong className={styles.strong}>{children}</strong>,
          em: ({ children }) => <em className={styles.em}>{children}</em>,
          blockquote: ({ children }) => (
            <blockquote className={styles.blockquote}>{children}</blockquote>
          ),
          code: ({ children }) => (
            <code className={styles.inlineCode}>{children}</code>
          ),
          pre: ({ children }) => (
            <div className={styles.codeBlock}>
              <pre>{children}</pre>
            </div>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              {children}
            </a>
          ),
          table: ({ children }) => (
            <div className={styles.tableWrapper}>
              <table className={styles.table}>{children}</table>
            </div>
          ),
        }}
      >
        {normalized}
      </ReactMarkdown>
    </div>
  );
});

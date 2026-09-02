'use client';

import React from 'react';
import styles from './MarkdownRenderer.module.css';

interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  if (!content) return null;

  // Pre-process: normalize bullet lists that were joined with " - **"
  const normalized = content
    .replace(/\r\n/g, '\n')
    .replace(/([^\n])\s+-\s+\*\*/g, '$1\n- **')
    .replace(/([^\n])\s+-\s+([A-Z])/g, '$1\n- $2');

  const blocks = splitIntoBlocks(normalized);

  return (
    <div className={styles.markdown}>
      {blocks.map((block, idx) => (
        <RenderBlock key={idx} block={block} />
      ))}
    </div>
  );
}

interface BlockItem {
  type:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'divider'
    | 'code'
    | 'table'
    | 'blockquote'
    | 'ul'
    | 'ol'
    | 'p';
  content: string;
  lang?: string;
  rows?: string[][];
  items?: string[];
}

function splitIntoBlocks(text: string): BlockItem[] {
  const lines = text.split('\n');
  const blocks: BlockItem[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    if (!trimmed) {
      i++;
      continue;
    }

    // Horizontal divider
    if (trimmed === '---' || trimmed === '***' || trimmed === '___') {
      blocks.push({ type: 'divider', content: '' });
      i++;
      continue;
    }

    // Fenced Code Block
    if (trimmed.startsWith('```')) {
      const lang = trimmed.slice(3).trim();
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith('```')) {
        codeLines.push(lines[i]);
        i++;
      }
      if (i < lines.length) i++; // skip closing ```
      blocks.push({ type: 'code', content: codeLines.join('\n'), lang });
      continue;
    }

    // Headings
    if (trimmed.startsWith('# ')) {
      blocks.push({ type: 'h1', content: trimmed.slice(2).trim() });
      i++;
      continue;
    }
    if (trimmed.startsWith('## ')) {
      blocks.push({ type: 'h2', content: trimmed.slice(3).trim() });
      i++;
      continue;
    }
    if (trimmed.startsWith('### ')) {
      blocks.push({ type: 'h3', content: trimmed.slice(4).trim() });
      i++;
      continue;
    }
    if (trimmed.startsWith('#### ')) {
      blocks.push({ type: 'h4', content: trimmed.slice(5).trim() });
      i++;
      continue;
    }

    // Blockquote
    if (trimmed.startsWith('>')) {
      const quoteLines: string[] = [];
      while (i < lines.length && (lines[i].trim().startsWith('>') || lines[i].trim() !== '')) {
        if (!lines[i].trim()) break;
        quoteLines.push(lines[i].trim().replace(/^>\s?/, ''));
        i++;
      }
      blocks.push({ type: 'blockquote', content: quoteLines.join('\n') });
      continue;
    }

    // Markdown Table
    if (trimmed.startsWith('|') && trimmed.endsWith('|') && i + 1 < lines.length && lines[i + 1].includes('---')) {
      const tableRows: string[][] = [];
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        const row = lines[i]
          .trim()
          .slice(1, -1)
          .split('|')
          .map((cell) => cell.trim());
        if (!row.every((cell) => /^[-:\s]+$/.test(cell))) {
          tableRows.push(row);
        }
        i++;
      }
      blocks.push({ type: 'table', content: '', rows: tableRows });
      continue;
    }

    // Ordered List (1. Item)
    if (/^\d+\.\s+/.test(trimmed)) {
      const listItems: string[] = [];
      while (i < lines.length && /^\d+\.\s+/.test(lines[i].trim())) {
        listItems.push(lines[i].trim().replace(/^\d+\.\s+/, ''));
        i++;
      }
      blocks.push({ type: 'ol', content: '', items: listItems });
      continue;
    }

    // Unordered List (- Item, * Item, • Item)
    if (/^[-*•]\s+/.test(trimmed)) {
      const listItems: string[] = [];
      while (i < lines.length && /^[-*•]\s+/.test(lines[i].trim())) {
        listItems.push(lines[i].trim().replace(/^[-*•]\s+/, ''));
        i++;
      }
      blocks.push({ type: 'ul', content: '', items: listItems });
      continue;
    }

    // Regular Paragraph (gather lines until blank line or special block)
    const pLines: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() !== '' &&
      !lines[i].trim().startsWith('#') &&
      !lines[i].trim().startsWith('```') &&
      !lines[i].trim().startsWith('>') &&
      !/^[-*•]\s+/.test(lines[i].trim()) &&
      !/^\d+\.\s+/.test(lines[i].trim()) &&
      !(lines[i].trim() === '---' || lines[i].trim() === '***')
    ) {
      pLines.push(lines[i]);
      i++;
    }

    if (pLines.length > 0) {
      blocks.push({ type: 'p', content: pLines.join('\n') });
    }
  }

  return blocks;
}

function RenderBlock({ block }: { block: BlockItem }) {
  switch (block.type) {
    case 'h1':
      return <h2 className={styles.heading1}>{parseInline(block.content)}</h2>;
    case 'h2':
      return <h3 className={styles.heading2}>{parseInline(block.content)}</h3>;
    case 'h3':
      return <h4 className={styles.heading3}>{parseInline(block.content)}</h4>;
    case 'h4':
      return <h5 className={styles.heading4}>{parseInline(block.content)}</h5>;
    case 'divider':
      return <hr className={styles.divider} />;
    case 'code':
      return (
        <div className={styles.codeBlock}>
          <pre>
            <code>{block.content}</code>
          </pre>
        </div>
      );
    case 'table':
      if (!block.rows || block.rows.length === 0) return null;
      const [headerRow, ...bodyRows] = block.rows;
      return (
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                {headerRow.map((h, hIdx) => (
                  <th key={hIdx}>{parseInline(h)}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {bodyRows.map((row, rIdx) => (
                <tr key={rIdx}>
                  {row.map((cell, cIdx) => (
                    <td key={cIdx}>{parseInline(cell)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case 'blockquote':
      return (
        <blockquote className={styles.blockquote}>
          <MarkdownRenderer content={block.content} />
        </blockquote>
      );
    case 'ol':
      return (
        <ol className={styles.orderedList}>
          {block.items?.map((item, idx) => (
            <li key={idx} className={styles.listItem}>
              {parseInline(item)}
            </li>
          ))}
        </ol>
      );
    case 'ul':
      return (
        <ul className={styles.unorderedList}>
          {block.items?.map((item, idx) => (
            <li key={idx} className={styles.listItem}>
              {parseInline(item)}
            </li>
          ))}
        </ul>
      );
    case 'p':
    default:
      const pLines = block.content.split('\n');
      return (
        <p className={styles.paragraph}>
          {pLines.map((line, lIdx) => (
            <React.Fragment key={lIdx}>
              {parseInline(line)}
              {lIdx < pLines.length - 1 && <br />}
            </React.Fragment>
          ))}
        </p>
      );
  }
}

/**
 * Parse bold, italic, inline code, links, emails, and phone numbers
 */
function parseInline(text: string): React.ReactNode {
  if (!text) return null;

  // Tokenize regex for Markdown links [text](url), bold **text**, italic *text*, inline code `code`
  const tokenRegex =
    /(\[.*?\]\(.*?\)|\*\*.*?\*\*|__.*?__|`.*?`|\*.*?\*|_.*?_|https?:\/\/[^\s]+|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;

  const parts = text.split(tokenRegex);

  return parts.map((part, index) => {
    if (!part) return null;

    // Link: [title](url)
    if (part.startsWith('[') && part.includes('](') && part.endsWith(')')) {
      const match = part.match(/^\[(.*?)\]\((.*?)\)$/);
      if (match) {
        const [, title, url] = match;
        return (
          <a
            key={index}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            {parseInline(title)}
          </a>
        );
      }
    }

    // Bold: **text** or __text__
    if (
      (part.startsWith('**') && part.endsWith('**') && part.length >= 4) ||
      (part.startsWith('__') && part.endsWith('__') && part.length >= 4)
    ) {
      return (
        <strong key={index} className={styles.strong}>
          {parseInline(part.slice(2, -2))}
        </strong>
      );
    }

    // Inline code: `text`
    if (part.startsWith('`') && part.endsWith('`') && part.length >= 2) {
      return (
        <code key={index} className={styles.inlineCode}>
          {part.slice(1, -1)}
        </code>
      );
    }

    // Italic: *text* or _text_
    if (
      (part.startsWith('*') && part.endsWith('*') && part.length >= 2) ||
      (part.startsWith('_') && part.endsWith('_') && part.length >= 2)
    ) {
      return (
        <em key={index} className={styles.em}>
          {parseInline(part.slice(1, -1))}
        </em>
      );
    }

    // Raw Email
    if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(part)) {
      return (
        <a
          key={index}
          href={`mailto:${part}`}
          className={styles.link}
        >
          {part}
        </a>
      );
    }

    // Raw URL
    if (/^https?:\/\//.test(part)) {
      return (
        <a
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          {part}
        </a>
      );
    }

    return part;
  });
}

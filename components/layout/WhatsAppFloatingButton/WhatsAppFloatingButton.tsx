import { WHATSAPP_LINK } from '@/lib/constants';
import styles from './WhatsAppFloatingButton.module.css';

function WhatsAppIcon() {
  return (
    <svg
      aria-hidden="true"
      className={styles.icon}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12.04 2a9.84 9.84 0 0 0-8.51 14.76L2 22l5.38-1.41A9.86 9.86 0 1 0 12.04 2Zm0 17.9a8 8 0 0 1-4.08-1.12l-.29-.17-3.19.84.85-3.11-.19-.31a7.99 7.99 0 1 1 6.9 3.87Zm4.39-5.99c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.93-1.19-.71-.64-1.19-1.42-1.33-1.66-.14-.24-.02-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.19-.47-.39-.41-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.1.16 1.51.1.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

export default function WhatsAppFloatingButton() {
  return (
    <a
      className={styles.button}
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hubungi Arsalynk melalui WhatsApp"
      title="Hubungi kami melalui WhatsApp"
    >
      <WhatsAppIcon />
    </a>
  );
}

'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { SITE_NAVIGATION_ITEMS } from '@/lib/seo';

/**
 * WebKitBackgroundPreloader
 *
 * Mengoptimalkan Core Web Vitals & Apple WebKit (Safari / iOS):
 * Memanfaatkan requestIdleCallback saat browser menganggur untuk mem-prefetch
 * 6 rute Sitelinks utama Arsalynk secara background.
 *
 * Hal ini membuat perpindahan halaman terasa instan (0ms delay) seperti aplikasi
 * native Apple tanpa membebani LCP awal homepage.
 */
export default function WebKitBackgroundPreloader() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Deteksi idle callback dengan fallback setTimeout
    const scheduleIdle =
      'requestIdleCallback' in window
        ? (window as unknown as { requestIdleCallback: (cb: () => void, opts?: { timeout: number }) => number })
            .requestIdleCallback
        : (cb: () => void) => setTimeout(cb, 1200);

    const idleHandle = scheduleIdle(
      () => {
        // Prefetch rute 6-Pack Sitelinks
        SITE_NAVIGATION_ITEMS.forEach((item) => {
          try {
            router.prefetch(item.href);
          } catch {
            // Abaikan error pada browser unsupported
          }
        });

        // Preconnect / preload aset WebKit penting
        const appleSafeElements = document.querySelectorAll<HTMLElement>('[data-apple-safe]');
        appleSafeElements.forEach((el) => {
          el.style.transform = 'translateZ(0)';
          el.style.webkitBackfaceVisibility = 'hidden';
        });
      },
      { timeout: 3500 }
    );

    return () => {
      if ('cancelIdleCallback' in window && typeof idleHandle === 'number') {
        (window as unknown as { cancelIdleCallback: (id: number) => void }).cancelIdleCallback(idleHandle);
      } else if (typeof idleHandle === 'number') {
        clearTimeout(idleHandle);
      }
    };
  }, [router]);

  return null;
}

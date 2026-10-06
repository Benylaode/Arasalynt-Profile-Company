import { SITE_URL } from '@/lib/constants';

// IndexNow key (32-character hex or alphanumeric)
export const INDEXNOW_KEY =
  process.env.INDEXNOW_KEY || 'a89c20a4f5b74c8989b6574f82635a9c';

export const INDEXNOW_KEY_LOCATION = `${SITE_URL}/indexnow-key.txt`;

export interface IndexNowPayload {
  host: string;
  key: string;
  keyLocation?: string;
  urlList: string[];
}

export interface IndexNowResponse {
  success: boolean;
  status: number;
  message: string;
}

/**
 * Submits updated/new URLs to the IndexNow protocol (supported by Bing, Yandex, Naver, Seznam).
 * IndexNow automatically notifies participating search engines.
 */
export async function submitToIndexNow(
  urls: string[]
): Promise<IndexNowResponse> {
  if (!urls || urls.length === 0) {
    return {
      success: false,
      status: 400,
      message: 'No URLs provided for IndexNow submission.',
    };
  }

  // Ensure absolute URLs on the primary canonical host
  const host = new URL(SITE_URL).host;
  const normalizedUrls = urls.map((u) => {
    if (u.startsWith('http://') || u.startsWith('https://')) {
      return u;
    }
    return `${SITE_URL}${u.startsWith('/') ? u : `/${u}`}`;
  });

  const payload: IndexNowPayload = {
    host,
    key: INDEXNOW_KEY,
    keyLocation: INDEXNOW_KEY_LOCATION,
    urlList: Array.from(new Set(normalizedUrls)),
  };

  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    // 200 OK or 202 Accepted means successful submission
    if (response.ok || response.status === 202) {
      return {
        success: true,
        status: response.status,
        message: `Successfully submitted ${payload.urlList.length} URL(s) to IndexNow.`,
      };
    }

    const text = await response.text();
    return {
      success: false,
      status: response.status,
      message: `IndexNow submission returned status ${response.status}: ${text}`,
    };
  } catch (error) {
    return {
      success: false,
      status: 500,
      message: error instanceof Error ? error.message : 'Unknown IndexNow error',
    };
  }
}

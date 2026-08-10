'use server';

import nodemailer from 'nodemailer';
import { getDb } from '@/lib/db/db';

export type SubmitLeadResult = {
  success: boolean;
  message?: string;
  id?: number;
};

/**
 * ============================================================
 * EMAIL CONFIGURATION
 * ============================================================
 *
 * Semua credential wajib disimpan di .env.local
 *
 * EMAIL_USER=your-gmail@gmail.com
 * EMAIL_PASS=your-gmail-app-password
 * EMAIL_RECEIVER=corporate@arsalynk.com
 *
 * Jangan masukkan password Gmail langsung ke source code.
 */

const emailUser = process.env.EMAIL_USER;
const emailPass = process.env.EMAIL_PASS?.replace(/\s+/g, '');
const emailReceiver =
  process.env.EMAIL_RECEIVER || 'halo@arsalynk.com';

/**
 * Nodemailer transporter
 *
 * Menggunakan Gmail SMTP seperti kode yang kamu jadikan referensi.
 */
const transporter =
  emailUser && emailPass
    ? nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: emailUser,
          pass: emailPass,
        },
      })
    : null;

/**
 * Escape HTML untuk mencegah input user
 * merusak struktur HTML email.
 */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * ============================================================
 * PREMIUM EMAIL TEMPLATE
 * ============================================================
 */
function generateEmailHTML({
  name,
  company,
  email,
  phone,
  inquiry,
  message,
}: {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  inquiry?: string;
  message?: string;
}) {
  const dateStr = new Date().toLocaleString('id-ID', {
    dateStyle: 'full',
    timeStyle: 'short',
    timeZone: 'Asia/Jakarta',
  });

  const safeName = escapeHtml(name);
  const safeCompany = escapeHtml(company || '-');
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone || '-');
  const safeInquiry = escapeHtml(inquiry || 'General Inquiry');
  const safeMessage = escapeHtml(
    message || 'Tidak ada pesan tambahan.',
  );

  return `
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  >
  <title>New Contact Lead - Arsalynk</title>
</head>

<body
  style="
    margin: 0;
    padding: 0;
    background-color: #F4F6F9;
    font-family:
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      Helvetica,
      Arial,
      sans-serif;
    color: #1E293B;
  "
>
  <table
    role="presentation"
    width="100%"
    cellspacing="0"
    cellpadding="0"
    border="0"
    style="
      background-color: #F4F6F9;
      padding: 40px 16px;
    "
  >
    <tr>
      <td align="center">

        <table
          role="presentation"
          width="100%"
          cellspacing="0"
          cellpadding="0"
          border="0"
          style="
            max-width: 600px;
            width: 100%;
            background-color: #FFFFFF;
            border-radius: 16px;
            overflow: hidden;
            border: 1px solid #E2E8F0;
          "
        >

          <!-- HEADER -->
          <tr>
            <td
              style="
                background-color: #101010;
                padding: 36px 32px;
                text-align: center;
              "
            >
              <table
                role="presentation"
                width="100%"
                cellspacing="0"
                cellpadding="0"
                border="0"
              >
                <tr>
                  <td align="center">

                    <span
                      style="
                        display: inline-block;
                        font-size: 22px;
                        font-weight: 700;
                        color: #FFFFFF;
                        letter-spacing: 0.05em;
                        text-transform: uppercase;
                      "
                    >
                      ARSALYNK<span style="color: #1A3E9E;">.</span>
                    </span>

                    <p
                      style="
                        margin: 8px 0 0 0;
                        font-size: 13px;
                        color: #A0A0A0;
                        text-transform: uppercase;
                        letter-spacing: 0.1em;
                        font-weight: 500;
                      "
                    >
                      New Lead Inquiry Notification
                    </p>

                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- BODY -->
          <tr>
            <td style="padding: 32px;">

              <h1
                style="
                  margin: 0 0 8px 0;
                  font-size: 20px;
                  font-weight: 600;
                  color: #101010;
                "
              >
                Pesan Baru dari Form Kontak
              </h1>

              <p
                style="
                  margin: 0 0 24px 0;
                  font-size: 14px;
                  color: #64748B;
                  line-height: 1.5;
                "
              >
                Berikut adalah rincian calon klien yang telah
                mengisi formulir pada website Arsalynk.
              </p>

              <!-- LEAD DETAILS -->
              <table
                role="presentation"
                width="100%"
                cellspacing="0"
                cellpadding="0"
                border="0"
                style="
                  background-color: #F8FAFC;
                  border-radius: 12px;
                  border: 1px solid #E2E8F0;
                  margin-bottom: 24px;
                "
              >

                <tr>
                  <td
                    style="
                      padding: 16px 20px;
                      border-bottom: 1px solid #E2E8F0;
                      width: 35%;
                      font-size: 13px;
                      font-weight: 600;
                      color: #64748B;
                    "
                  >
                    Nama Pengirim
                  </td>

                  <td
                    style="
                      padding: 16px 20px;
                      border-bottom: 1px solid #E2E8F0;
                      font-size: 14px;
                      font-weight: 600;
                      color: #101010;
                    "
                  >
                    ${safeName}
                  </td>
                </tr>

                <tr>
                  <td
                    style="
                      padding: 16px 20px;
                      border-bottom: 1px solid #E2E8F0;
                      font-size: 13px;
                      font-weight: 600;
                      color: #64748B;
                    "
                  >
                    Perusahaan
                  </td>

                  <td
                    style="
                      padding: 16px 20px;
                      border-bottom: 1px solid #E2E8F0;
                      font-size: 14px;
                      color: #1E293B;
                    "
                  >
                    ${safeCompany}
                  </td>
                </tr>

                <tr>
                  <td
                    style="
                      padding: 16px 20px;
                      border-bottom: 1px solid #E2E8F0;
                      font-size: 13px;
                      font-weight: 600;
                      color: #64748B;
                    "
                  >
                    Email
                  </td>

                  <td
                    style="
                      padding: 16px 20px;
                      border-bottom: 1px solid #E2E8F0;
                      font-size: 14px;
                      color: #1A3E9E;
                      font-weight: 500;
                    "
                  >
                    <a
                      href="mailto:${safeEmail}"
                      style="
                        color: #1A3E9E;
                        text-decoration: none;
                      "
                    >
                      ${safeEmail}
                    </a>
                  </td>
                </tr>

                <tr>
                  <td
                    style="
                      padding: 16px 20px;
                      border-bottom: 1px solid #E2E8F0;
                      font-size: 13px;
                      font-weight: 600;
                      color: #64748B;
                    "
                  >
                    Nomor Telepon
                  </td>

                  <td
                    style="
                      padding: 16px 20px;
                      border-bottom: 1px solid #E2E8F0;
                      font-size: 14px;
                      color: #1E293B;
                    "
                  >
                    ${safePhone}
                  </td>
                </tr>

                <tr>
                  <td
                    style="
                      padding: 16px 20px;
                      font-size: 13px;
                      font-weight: 600;
                      color: #64748B;
                    "
                  >
                    Layanan / Kebutuhan
                  </td>

                  <td
                    style="
                      padding: 16px 20px;
                      font-size: 14px;
                      font-weight: 600;
                      color: #1A3E9E;
                    "
                  >
                    <span
                      style="
                        display: inline-block;
                        background-color: #EEF2FF;
                        color: #1A3E9E;
                        padding: 4px 12px;
                        border-radius: 20px;
                        font-size: 12px;
                        font-weight: 600;
                        border: 1px solid #1A3E9E;
                      "
                    >
                      ${safeInquiry}
                    </span>
                  </td>
                </tr>

              </table>

              <!-- MESSAGE -->
              <div style="margin-bottom: 24px;">

                <label
                  style="
                    display: block;
                    font-size: 13px;
                    font-weight: 600;
                    color: #64748B;
                    margin-bottom: 8px;
                  "
                >
                  Pesan / Pertanyaan:
                </label>

                <div
                  style="
                    background-color: #F8FAFC;
                    border-left: 4px solid #1A3E9E;
                    border-top: 1px solid #E2E8F0;
                    border-right: 1px solid #E2E8F0;
                    border-bottom: 1px solid #E2E8F0;
                    border-radius: 0 8px 8px 0;
                    padding: 16px;
                    font-size: 14px;
                    line-height: 1.6;
                    color: #334155;
                    white-space: pre-wrap;
                  "
                >
                  ${safeMessage}
                </div>

              </div>

              <!-- REPLY BUTTON -->
              <table
                role="presentation"
                width="100%"
                cellspacing="0"
                cellpadding="0"
                border="0"
              >
                <tr>
                  <td
                    align="center"
                    style="padding-top: 8px;"
                  >

                    <a
                      href="mailto:${safeEmail}"
                      style="
                        display: inline-block;
                        background-color: #1A3E9E;
                        color: #FFFFFF;
                        text-decoration: none;
                        padding: 12px 28px;
                        border-radius: 50px;
                        font-size: 14px;
                        font-weight: 600;
                      "
                    >
                      Balas Pesan Klien &rarr;
                    </a>

                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td
              style="
                background-color: #F8FAFC;
                padding: 20px 32px;
                border-top: 1px solid #E2E8F0;
                text-align: center;
              "
            >

              <p
                style="
                  margin: 0 0 4px 0;
                  font-size: 12px;
                  color: #94A3B8;
                "
              >
                Waktu Pengiriman: ${dateStr}
              </p>

              <p
                style="
                  margin: 0;
                  font-size: 12px;
                  color: #CBD5E1;
                "
              >
                &copy; ${new Date().getFullYear()}
                Arsalynk. All rights reserved.
              </p>

            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

/**
 * ============================================================
 * SUBMIT LEAD
 * ============================================================
 *
 * 1. Ambil data form
 * 2. Validasi
 * 3. Simpan ke SQLite
 * 4. Kirim email notification dengan Nodemailer
 */
export async function submitLead(
  data: FormData | Record<string, any>,
): Promise<SubmitLeadResult> {
  try {
    let name = '';
    let company = '';
    let email = '';
    let phone = '';
    let inquiry = '';
    let message = '';

    /**
     * Ambil data dari FormData
     */
    if (data instanceof FormData) {
      name = (data.get('name') as string)?.trim() || '';
      company = (data.get('company') as string)?.trim() || '';
      email = (data.get('email') as string)?.trim() || '';
      phone = (data.get('phone') as string)?.trim() || '';
      inquiry = (data.get('inquiry') as string)?.trim() || '';
      message = (data.get('message') as string)?.trim() || '';
    } else {
      /**
       * Support object biasa jika submitLead
       * digunakan dari tempat lain.
       */
      name = data.name?.trim() || '';
      company = data.company?.trim() || '';
      email = data.email?.trim() || '';
      phone = data.phone?.trim() || '';
      inquiry = data.inquiry?.trim() || '';
      message = data.message?.trim() || '';
    }

    /**
     * ========================================================
     * VALIDATION
     * ========================================================
     */

    if (!name) {
      return {
        success: false,
        message: 'Please provide your name.',
      };
    }

    if (!company) {
      return {
        success: false,
        message: 'Please provide your company name.',
      };
    }

    if (!email || !email.includes('@')) {
      return {
        success: false,
        message: 'Please provide a valid email address.',
      };
    }

    if (!phone) {
      return {
        success: false,
        message: 'Please provide your phone number.',
      };
    }

    if (!inquiry) {
      return {
        success: false,
        message: 'Please select your inquiry.',
      };
    }

    if (!message) {
      return {
        success: false,
        message: 'Please enter your message.',
      };
    }

    /**
     * ========================================================
     * 1. SIMPAN KE SQLITE
     * ========================================================
     */

    const db = getDb();

    const stmt = db.prepare(`
      INSERT INTO leads (
        name,
        company,
        email,
        phone,
        inquiry,
        message,
        created_at
      )
      VALUES (?, ?, ?, ?, ?, ?, DATETIME('now'))
    `);

    const info = stmt.run(
      name,
      company,
      email,
      phone,
      inquiry,
      message,
    );

    const leadId = Number(info.lastInsertRowid);

    console.log(
      `[Lead #${leadId}] Lead berhasil disimpan ke database dari ${email}`,
    );

    /**
     * ========================================================
     * 2. KIRIM EMAIL NOTIFICATION
     * ========================================================
     */

    if (!transporter) {
      console.error(
        'Email transporter belum dikonfigurasi. Pastikan EMAIL_USER dan EMAIL_PASS tersedia di .env.local',
      );

      return {
        success: false,
        message:
          'Inquiry berhasil disimpan, tetapi email notification gagal dikonfigurasi.',
        id: leadId,
      };
    }

    await transporter.sendMail({
      /**
       * Email yang digunakan untuk autentikasi Gmail.
       */
      from: `"Arsalynk Website" <${emailUser}>`,

      /**
       * Email penerima notification.
       */
      to: emailReceiver,

      /**
       * Jika admin menekan Reply,
       * reply akan langsung menuju email user.
       */
      replyTo: email,

      /**
       * Subject email.
       */
      subject: `New Lead Inquiry: ${
        inquiry || 'General Inquiry'
      } - ${name}`,

      /**
       * HTML email premium.
       */
      html: generateEmailHTML({
        name,
        company,
        email,
        phone,
        inquiry,
        message,
      }),
    });

    console.log(
      `[Lead #${leadId}] Email notification berhasil dikirim ke ${emailReceiver}`,
    );

    return {
      success: true,
      message:
        'Thank you! Your inquiry has been submitted successfully.',
      id: leadId,
    };
  } catch (error: any) {
    console.error('submitLead error:', error);

    return {
      success: false,
      message:
        error?.message ||
        'Failed to submit lead. Please try again.',
    };
  }
}

/**
 * ============================================================
 * GET ALL LEADS
 * ============================================================
 *
 * Helper untuk admin/reporting.
 */
export async function getAllLeads() {
  try {
    const db = getDb();

    return db
      .prepare(
        'SELECT * FROM leads ORDER BY id DESC',
      )
      .all();
  } catch (error) {
    console.error('getAllLeads error:', error);

    return [];
  }
}


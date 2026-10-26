import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CRM Dashboard & Webhook Portal | Arsalynk Production',
  description: 'Enterprise CRM Management, Lead Inquiries, and Marka Webhook Monitor for Arsalynk.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function CrmLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-screen bg-[#05070A] text-[#F7F7F7]">{children}</div>;
}

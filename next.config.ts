import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* better-sqlite3 adalah native module — jangan di-bundle oleh webpack */
  serverExternalPackages: ['better-sqlite3'],
  async redirects() {
    return [
      {
        source: '/insight-programs/Case-Studies',
        destination: '/insight-programs/case-studies',
        permanent: true,
      },
      {
        source: '/insight-programs/Case-Studies/:slug*',
        destination: '/insight-programs/case-studies/:slug*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

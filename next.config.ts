import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* better-sqlite3 adalah native module — jangan di-bundle oleh webpack */
  serverExternalPackages: ['better-sqlite3'],
  experimental: {
    cpus: 2,
  },

  async redirects() {
    return [
      // ── P0: Canonical Host Redirect (arsalynk.com -> www.arsalynk.com) ──
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'arsalynk.com',
          },
        ],
        destination: 'https://www.arsalynk.com/:path*',
        permanent: true,
      },

      // Noncanonical aliases redirect to actual indexable pages.
      { source: '/services', destination: '/our-solution', permanent: true },
      { source: '/portfolio', destination: '/our-works', permanent: true },
      { source: '/contact', destination: '/contact-us', permanent: true },

      // ── P0: Legacy Case Study URLs (Google Indexed -> Canonical 200 OK) ──
      {
        source: '/insight-programs/case-studies/point-of-sale-retail-management-system',
        destination: '/insight-programs/case-studies/sinau-print-pos-system',
        permanent: true,
      },
      {
        source: '/insight-programs/case-studies/point-of-sale',
        destination: '/insight-programs/case-studies/sinau-print-pos-system',
        permanent: true,
      },
      {
        source: '/insight-programs/case-studies/sinau-print-pos',
        destination: '/insight-programs/case-studies/sinau-print-pos-system',
        permanent: true,
      },
      {
        source: '/insight-programs/case-studies/warehouse-management-wms',
        destination: '/insight-programs/case-studies/sinau-print-warehouse-management-wms',
        permanent: true,
      },
      {
        source: '/insight-programs/case-studies/sinau-print-wms',
        destination: '/insight-programs/case-studies/sinau-print-warehouse-management-wms',
        permanent: true,
      },
      {
        source: '/insight-programs/case-studies/hr-management',
        destination: '/insight-programs/case-studies/pt-sinergi-muda-arsa-hr-management',
        permanent: true,
      },
      {
        source: '/insight-programs/case-studies/logistics-fleet-management',
        destination: '/insight-programs/case-studies/myboss-logistics-fleet-management',
        permanent: true,
      },
      {
        source: '/insight-programs/case-studies/supply-chain-distribution-system',
        destination: '/insight-programs/case-studies/myboss-supply-chain-distribution-system',
        permanent: true,
      },

      // ── Solution Services Alias & Legacy Variants -> Canonical 200 OK ─────
      {
        source: '/our-solution/point-of-sale-retail-management-system',
        destination: '/our-solution/point-of-sale-pos',
        permanent: true,
      },
      {
        source: '/our-solution/warehouse-management-wms',
        destination: '/our-solution/warehouse-management-system',
        permanent: true,
      },
      {
        source: '/our-solution/hr-management',
        destination: '/our-solution/hr-talent-management-engine',
        permanent: true,
      },
      {
        source: '/our-solution/financial-management-system',
        destination: '/our-solution/financial-accounting-automation-hub',
        permanent: true,
      },
      {
        source: '/our-solution/logistics-fleet-management',
        destination: '/our-solution/logistics-fleet-operations-tracker',
        permanent: true,
      },
      {
        source: '/our-solution/supply-chain-distribution-system',
        destination: '/our-solution/supply-chain-inventory-control',
        permanent: true,
      },
      {
        source: '/our-solution/erp',
        destination: '/our-solution/enterprise-resource-planning',
        permanent: true,
      },
      {
        source: '/our-solution/iot',
        destination: '/our-solution/internet-of-things',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

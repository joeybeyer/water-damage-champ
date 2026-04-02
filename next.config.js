/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  trailingSlash: false,
  async redirects() {
    return [
      // Old WP residential service URLs → new flat URLs
      { source: '/residential-services/water-damage', destination: '/water-damage-restoration', permanent: true },
      { source: '/residential-services/water-damage/', destination: '/water-damage-restoration', permanent: true },
      { source: '/residential-services/flood-damage-cleanup', destination: '/flood-damage-repair', permanent: true },
      { source: '/residential-services/flood-damage-cleanup/', destination: '/flood-damage-repair', permanent: true },
      { source: '/residential-services/flooded-basement-restoration-and-cleanup', destination: '/flooded-basement', permanent: true },
      { source: '/residential-services/flooded-basement-restoration-and-cleanup/', destination: '/flooded-basement', permanent: true },
      { source: '/residential-services/frozen-and-burst-pipes', destination: '/frozen-burst-pipes', permanent: true },
      { source: '/residential-services/frozen-and-burst-pipes/', destination: '/frozen-burst-pipes', permanent: true },
      { source: '/residential-services/crawlspace-encapsulation', destination: '/crawlspace-encapsulation', permanent: true },
      { source: '/residential-services/crawlspace-encapsulation/', destination: '/crawlspace-encapsulation', permanent: true },
      { source: '/residential-services/ceiling-and-wall-water-cleanup', destination: '/ceiling-wall-water-damage', permanent: true },
      { source: '/residential-services/ceiling-and-wall-water-cleanup/', destination: '/ceiling-wall-water-damage', permanent: true },
      { source: '/residential-services/expert-sewage-cleanup-solutions', destination: '/sewage-cleanup', permanent: true },
      { source: '/residential-services/expert-sewage-cleanup-solutions/', destination: '/sewage-cleanup', permanent: true },
      { source: '/residential-services/sump-pump-cleanup', destination: '/sump-pump-cleanup', permanent: true },
      { source: '/residential-services/sump-pump-cleanup/', destination: '/sump-pump-cleanup', permanent: true },
      { source: '/residential-services/water-extraction-and-drying', destination: '/water-extraction', permanent: true },
      { source: '/residential-services/water-extraction-and-drying/', destination: '/water-extraction', permanent: true },
      { source: '/residential-services/fire-and-smoke-damage-restoration', destination: '/fire-damage-restoration', permanent: true },
      { source: '/residential-services/fire-and-smoke-damage-restoration/', destination: '/fire-damage-restoration', permanent: true },
      { source: '/residential-services/mold-remediation-services', destination: '/mold-remediation', permanent: true },
      { source: '/residential-services/mold-remediation-services/', destination: '/mold-remediation', permanent: true },
      { source: '/residential-services/attic-mold-remediation', destination: '/mold-remediation', permanent: true },
      { source: '/residential-services/basement-mold-remediation', destination: '/mold-remediation', permanent: true },
      { source: '/residential-services/residential-reconstruction-services', destination: '/water-damage-restoration', permanent: true },
      // Old WP commercial URLs
      { source: '/commercial-services', destination: '/commercial-water-damage', permanent: true },
      { source: '/commercial-services/', destination: '/commercial-water-damage', permanent: true },
      { source: '/commercial-services/water-damage-restoration', destination: '/commercial-water-damage', permanent: true },
      { source: '/commercial-services/fire-damage-restoration', destination: '/fire-damage-restoration', permanent: true },
      { source: '/commercial-services/mold-removal-services', destination: '/mold-remediation', permanent: true },
      { source: '/commercial-services/storm-cleanup', destination: '/storm-damage-restoration', permanent: true },
      { source: '/commercial-services/commercial-reconstruction', destination: '/commercial-water-damage', permanent: true },
      { source: '/commercial-services/national-accounts', destination: '/commercial-water-damage', permanent: true },
      { source: '/commercial-services/industrial-reconstruction', destination: '/commercial-water-damage', permanent: true },
      { source: '/commercial-services/refinery-factory-cleanup', destination: '/commercial-water-damage', permanent: true },
      // Old WP other services
      { source: '/disaster-response', destination: '/emergency-water-damage', permanent: true },
      { source: '/pack-out-storage', destination: '/water-damage-restoration', permanent: true },
      { source: '/board-up-trap-service', destination: '/emergency-water-damage', permanent: true },
      { source: '/carpet-cleaning', destination: '/water-damage-restoration', permanent: true },
      { source: '/virus-disinfection-sanitation', destination: '/water-damage-restoration', permanent: true },
      { source: '/air-duct-service', destination: '/water-damage-restoration', permanent: true },
      { source: '/crime-scene-trauma-cleanup', destination: '/sewage-cleanup', permanent: true },
      { source: '/emergency-cleanup-service', destination: '/emergency-water-damage', permanent: true },
      { source: '/vandalism-graffit', destination: '/water-damage-restoration', permanent: true },
      // Old WP city page URLs → new structure
      { source: '/in/:slug*', destination: '/locations', permanent: true },
    ];
  },
};

module.exports = nextConfig;

import { MetadataRoute } from 'next';
import { cities } from '@/data/cities';
import { neighborhoods } from '@/data/neighborhoods';
import { services } from '@/data/services';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://waterdamagechamp.com';

  // Static pages
  const staticPages = [
    { url: baseUrl, lastModified: new Date(), priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/locations`, lastModified: new Date(), priority: 0.9 },
  ];

  // Service pages
  const servicePages = services.map((service) => ({
    url: `${baseUrl}/${service.slug}`,
    lastModified: new Date(),
    priority: 0.8,
  }));

  // City pages
  const cityPages = cities.map((city) => ({
    url: `${baseUrl}/locations/${city.slug}`,
    lastModified: new Date(),
    priority: 0.7,
  }));

  // Neighborhood pages
  const neighborhoodPages = neighborhoods.map((n) => ({
    url: \`\${baseUrl}/locations/\${n.citySlug}/\${n.slug}\`,
    lastModified: new Date(),
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...cityPages, ...neighborhoodPages];
}

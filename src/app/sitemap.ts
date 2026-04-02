import { MetadataRoute } from 'next';
import { cities } from '@/data/cities';
import { neighborhoods } from '@/data/neighborhoods';
import { services } from '@/data/services';
import { blogPosts } from '@/data/blogPosts';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.waterdamagechamp.com';

  // Static pages
  const staticPages = [
    { url: baseUrl, lastModified: new Date(), priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/locations`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), priority: 0.8 },
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
    url: `${baseUrl}/locations/${n.citySlug}/${n.slug}`,
    lastModified: new Date(),
    priority: 0.6,
  }));

  // Blog post pages
  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishDate),
    priority: 0.7,
  }));

  // Service × City pages
  const serviceCityPages = services.flatMap((service) =>
    cities.map((city) => ({
      url: `${baseUrl}/${service.slug}/${city.slug}`,
      lastModified: new Date(),
      priority: 0.75,
    }))
  );

  return [...staticPages, ...servicePages, ...cityPages, ...neighborhoodPages, ...blogPages, ...serviceCityPages];
}

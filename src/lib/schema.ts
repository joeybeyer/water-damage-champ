import { City } from '@/data/cities';

export interface LocalBusinessSchema {
  '@context': string;
  '@type': string;
  name: string;
  telephone: string;
  address?: {
    '@type': string;
    addressLocality: string;
    addressRegion: string;
    addressCountry: string;
  };
  areaServed?: string;
  priceRange?: string;
  openingHours?: string;
  url?: string;
  description?: string;
}

export interface ServiceSchema {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  provider: {
    '@type': string;
    name: string;
    telephone: string;
  };
  areaServed?: string;
  url?: string;
}

export interface FAQPageSchema {
  '@context': string;
  '@type': string;
  mainEntity: {
    '@type': string;
    about: string;
  }[];
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface BreadcrumbSchema {
  '@context': string;
  '@type': string;
  itemListElement: {
    '@type': string;
    position: number;
    name: string;
    item: string;
  }[];
}

export function generateLocalBusinessSchema(city?: City) {
  const base = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Water Damage Champ',
    telephone: '+1-888-510-9436',
    priceRange: '$$',
    openingHours: 'Mo-Su 00:00-24:00',
    url: 'https://waterdamagechamp.com',
    description: 'Professional water damage restoration services available 24/7.',
  };

  if (city) {
    return {
      ...base,
      address: {
        '@type': 'PostalAddress',
        addressLocality: city.name,
        addressRegion: city.state,
        addressCountry: 'US',
      },
      areaServed: {
        '@type': 'City',
        name: `${city.name}, ${city.state}`,
      },
      name: `Water Damage Champ - ${city.name}`,
      url: `https://waterdamagechamp.com/locations/${city.slug}`,
    };
  }

  return base;
}

export function generateServiceSchema(service: { name: string; description: string; slug: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Water Damage Champ',
      telephone: '+1-888-510-9436',
    },
    areaServed: 'CA, FL',
    url: `https://waterdamagechamp.com/${service.slug}`,
  };
}

export function generateFAQPageSchema(serviceName: string, faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

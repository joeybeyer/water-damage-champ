import { City } from '@/data/cities';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generateLocalBusinessSchema(city?: City) {
  const base: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://waterdamagechamp.com/#business',
    name: 'Water Damage Champ',
    url: 'https://waterdamagechamp.com',
    telephone: '+1-888-510-9436',
    email: 'service@waterdamagechamp.com',
    description: 'Professional water damage restoration services available 24/7. Fast emergency response, licensed technicians, and free inspections across California and Florida.',
    image: 'https://waterdamagechamp.com/images/Water-damage.jpg',
    logo: 'https://waterdamagechamp.com/images/logo112-1024x301.png',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '5042 Wilshire Blvd #600',
      addressLocality: 'Los Angeles',
      addressRegion: 'CA',
      postalCode: '90036',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 34.0622,
      longitude: -118.3502,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    sameAs: [
      'https://www.facebook.com/waterdamagechamp',
      'https://www.youtube.com/channel/UCPfivC7ChN1dahbi4xnwXPw',
      'https://www.instagram.com/waterdamagechamp/',
    ],
    areaServed: [
      { '@type': 'State', name: 'California' },
      { '@type': 'State', name: 'Florida' },
    ],
  };

  if (city) {
    return {
      ...base,
      '@id': `https://waterdamagechamp.com/locations/${city.slug}/#business`,
      name: `Water Damage Champ - ${city.name}`,
      url: `https://waterdamagechamp.com/locations/${city.slug}`,
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
      '@id': 'https://waterdamagechamp.com/#business',
      name: 'Water Damage Champ',
      telephone: '+1-888-510-9436',
    },
    areaServed: [
      { '@type': 'State', name: 'California' },
      { '@type': 'State', name: 'Florida' },
    ],
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

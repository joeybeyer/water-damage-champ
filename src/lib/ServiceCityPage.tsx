import Link from 'next/link';
import { Metadata } from 'next';
import { services } from '@/data/services';
import { cities } from '@/data/cities';
import { getNeighborhoodsByCity } from '@/data/neighborhoods';
import { groundingBoxes } from '@/data/groundingBoxes';
import { gmbListings } from '@/data/gmb';
import GroundingBox from '@/components/GroundingBox';
import FAQSection from '@/components/FAQSection';
import {
  generateLocalBusinessSchema,
  generateBreadcrumbSchema,
  generateFAQPageSchema,
} from '@/lib/schema';

export function getServiceCityMetadata(serviceSlug: string, citySlug: string): Metadata {
  const service = services.find((s) => s.slug === serviceSlug);
  const city = cities.find((c) => c.slug === citySlug);
  if (!service || !city) return {};
  return {
    title: `${service.name} in ${city.name}, ${city.state} | Water Damage Champ`,
    description: `Professional ${service.name.toLowerCase()} in ${city.name}, ${city.state}. IICRC-certified technicians, 24/7 emergency response, free inspections. Call (888) 510-9436.`,
    alternates: {
      canonical: `https://waterdamagechamp.com/${serviceSlug}/${citySlug}`,
    },
    openGraph: {
      title: `${service.name} in ${city.name}, ${city.state} | Water Damage Champ`,
      description: `Professional ${service.name.toLowerCase()} in ${city.name}, ${city.state}. IICRC-certified technicians, 24/7 emergency response, free inspections.`,
      type: 'website',
    },
  };
}

interface Props {
  serviceSlug: string;
  citySlug: string;
}

export default function ServiceCityPage({ serviceSlug, citySlug }: Props) {
  const service = services.find((s) => s.slug === serviceSlug);
  const city = cities.find((c) => c.slug === citySlug);

  if (!service || !city) {
    return (
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
          <Link href="/" className="text-[#ff6600]">Return to Home</Link>
        </div>
      </div>
    );
  }

  const neighborhoods = getNeighborhoodsByCity(citySlug);
  const groundingBox = groundingBoxes[serviceSlug];
  const gmb = gmbListings[citySlug];
  const localPhone = gmb?.phone ?? '+18885109436';
  const localPhoneDisplay = gmb?.phoneDisplay ?? '(888) 510-9436';
  const relatedServices = services.filter((s) => s.slug !== serviceSlug).slice(0, 4);

  const faqs = [
    {
      question: `How quickly can you respond to ${service.name.toLowerCase()} emergencies in ${city.name}?`,
      answer: `Water Damage Champ dispatches ${service.name.toLowerCase()} crews throughout ${city.name}, ${city.state} within 2–4 hours of your call, 24 hours a day, 7 days a week. Call ${localPhoneDisplay} for immediate dispatch.`,
    },
    ...service.faqs.slice(0, 4),
  ];

  const localBusinessSchema = generateLocalBusinessSchema(city);
  const serviceCitySchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${service.name} in ${city.name}, ${city.state}`,
    description: `Professional ${service.name.toLowerCase()} serving ${city.name}, ${city.state}. IICRC-certified technicians, 24/7 emergency response.`,
    provider: {
      '@type': 'LocalBusiness',
      '@id': 'https://waterdamagechamp.com/#business',
      name: 'Water Damage Champ',
      telephone: localPhone,
    },
    areaServed: { '@type': 'City', name: `${city.name}, ${city.state}` },
    url: `https://waterdamagechamp.com/${serviceSlug}/${citySlug}`,
  };
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://waterdamagechamp.com' },
    { name: service.name, url: `https://waterdamagechamp.com/${serviceSlug}` },
    { name: city.name, url: `https://waterdamagechamp.com/${serviceSlug}/${citySlug}` },
  ]);
  const faqSchema = generateFAQPageSchema(`${service.name} in ${city.name}`, faqs);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#1a237e] to-[#0a1628] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href={`/${serviceSlug}`} className="hover:text-white">{service.name}</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{city.name}</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {service.name} in {city.name}, {city.state}
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl">
            Professional {service.name.toLowerCase()} serving {city.name} and surrounding neighborhoods. IICRC-certified technicians, 24/7 emergency response, direct insurance coordination.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`tel:${localPhone}`}
              className="flex items-center justify-center space-x-2 bg-[#ff6600] hover:bg-[#e65100] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Call {localPhoneDisplay}</span>
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center border-2 border-[#ff6600] text-[#ff6600] hover:bg-[#ff6600] hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Grounding Box */}
      {groundingBox && (
        <div className="py-6 bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4">
            <GroundingBox {...groundingBox} />
          </div>
        </div>
      )}

      {/* Key Takeaways */}
      {service.keyTakeaways && service.keyTakeaways.length > 0 && (
        <section className="py-8 bg-blue-50 border-b border-blue-100">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-lg font-bold text-[#1a237e] mb-3">Key Takeaways</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                ...service.keyTakeaways.slice(0, 4),
                `Serving ${city.name} and surrounding ${city.state} communities`,
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                  <span className="text-[#ff6600] mt-0.5 shrink-0 font-bold">✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1a237e] mb-6">
            {service.name} Services in {city.name}
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            When {service.name.toLowerCase()} is needed in {city.name}, fast professional response is critical. Water Damage Champ provides{' '}
            <Link href={`/${serviceSlug}`} className="text-[#ff6600] hover:underline">
              {service.name.toLowerCase()}
            </Link>{' '}
            throughout {city.name}, {city.state} — our IICRC-certified technicians arrive within 2–4 hours of your call, 24 hours a day. Every hour of delay increases damage and restoration cost.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            {city.name} properties face a range of water damage risks, from aging infrastructure and storm-related flooding to plumbing failures and appliance leaks. Our team responds with truck-mounted extractors, commercial-grade structural drying systems, and moisture mapping technology to locate hidden water behind walls and under floors.
          </p>
          <p className="text-gray-700 mb-10 leading-relaxed">
            We handle direct insurance coordination — documenting all damage and communicating with your carrier so you can focus on your family or business. Our work follows IICRC S500 standards from initial extraction through final clearance. Visit our{' '}
            <Link href={`/locations/${citySlug}`} className="text-[#ff6600] hover:underline">
              {city.name} service area page
            </Link>{' '}
            for more local information.
          </p>

          {/* Process Steps */}
          <h2 className="text-2xl font-bold text-[#1a237e] mb-6">
            Our {service.name} Process in {city.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {[
              {
                step: '1',
                title: 'Emergency Dispatch',
                desc: `24/7 call center dispatches a certified ${city.name} crew within minutes. Technicians arrive in 2–4 hours.`,
              },
              {
                step: '2',
                title: 'Inspection & Documentation',
                desc: 'Moisture mapping, thermal imaging, and full photographic documentation for your insurance claim.',
              },
              {
                step: '3',
                title: 'Extraction & Drying',
                desc: 'Industrial extraction and commercial drying equipment running continuously until all moisture readings reach safe levels.',
              },
              {
                step: '4',
                title: 'Clearance & Restoration',
                desc: 'Final moisture verification, antimicrobial treatment, and structural restoration to pre-damage condition.',
              },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
                <div className="w-10 h-10 bg-[#1a237e] text-white rounded-full flex items-center justify-center font-bold shrink-0 text-sm">
                  {step}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
                  <p className="text-gray-600 text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Neighborhoods */}
          {neighborhoods.length > 0 && (
            <>
              <h2 className="text-2xl font-bold text-[#1a237e] mb-4">
                Neighborhoods We Serve in {city.name}
              </h2>
              <div className="flex flex-wrap gap-2 mb-4">
                {neighborhoods.map((n) => (
                  <Link
                    key={n.slug}
                    href={`/locations/${citySlug}/${n.slug}`}
                    className="bg-gray-100 border border-gray-200 px-3 py-1.5 rounded-lg text-sm text-gray-700 hover:border-[#1a237e] hover:bg-gray-50 transition-colors"
                  >
                    {n.name}
                  </Link>
                ))}
              </div>
              <p className="text-sm text-gray-500 mb-10">
                Don&apos;t see your neighborhood?{' '}
                <a href={`tel:${localPhone}`} className="text-[#ff6600] hover:underline">
                  Call {localPhoneDisplay}
                </a>{' '}
                — we serve all of {city.name} and surrounding areas.
              </p>
            </>
          )}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#1a237e] py-12">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Need {service.name} in {city.name}?
          </h2>
          <p className="text-gray-300 mb-6">
            24/7 emergency response across {city.name}, {city.state}. Call now for immediate dispatch.
          </p>
          <a
            href={`tel:${localPhone}`}
            className="inline-block bg-[#ff6600] hover:bg-[#e65100] text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            {localPhoneDisplay}
          </a>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1a237e] mb-6">
            Related Services in {city.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedServices.map((related) => (
              <Link
                key={related.slug}
                href={`/${related.slug}/${citySlug}`}
                className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg hover:border-[#1a237e] transition-all"
              >
                <h3 className="font-semibold text-[#1a237e]">{related.name}</h3>
                <p className="text-gray-500 text-sm mt-1">in {city.name} →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <FAQSection faqs={faqs} />
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceCitySchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}

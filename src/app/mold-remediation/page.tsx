import { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import { services } from '@/data/services';
import { cities } from '@/data/cities';
import { generateLocalBusinessSchema, generateBreadcrumbSchema, generateServiceSchema, generateFAQPageSchema } from '@/lib/schema';

const SERVICE_SLUG = 'mold-remediation';

export const metadata: Metadata = (() => {
  const service = services.find((s) => s.slug === SERVICE_SLUG);
  return {
    title: service?.title || 'Mold Remediation',
    description: service?.description || '',
  };
})();

export default function ServicePage() {
  const service = services.find((s) => s.slug === SERVICE_SLUG);

  if (!service) {
    return (
      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Link href="/" className="text-[#2196f3] hover:text-[#42a5f5]">Return to Home</Link>
        </div>
      </div>
    );
  }

  const localBusinessSchema = generateLocalBusinessSchema();
  const serviceSchema = generateServiceSchema(service);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://waterdamagechamp.com' },
    { name: service.name, url: `https://waterdamagechamp.com/${service.slug}` },
  ]);
  const faqSchema = generateFAQPageSchema(service.name, service.faqs);

  const relatedServices = services.filter(s => s.slug !== service.slug).slice(0, 4);

  return (
    <>
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{service.name}</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {service.title}
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl">
            {service.description}
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="tel:+18885109436"
              className="flex items-center justify-center space-x-2 bg-[#2196f3] hover:bg-[#1976d2] px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Call (888) 510-9436</span>
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center space-x-2 border border-[#2196f3] text-[#2196f3] hover:bg-blue-500 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              <span>Get Free Quote</span>
            </Link>
          </div>

          {/* Main Content */}
          <div className="prose prose-invert max-w-none">
            <div className="bg-[#111d35] border border-[#1a2942] rounded-xl p-8 mb-12">
              {service.fullContent.split('\n').filter(Boolean).map((paragraph, idx) => {
                if (paragraph.startsWith('## ')) {
                  return <h2 key={idx} className="text-2xl font-bold mt-8 mb-4">{paragraph.replace('## ', '')}</h2>;
                }
                if (paragraph.startsWith('### ')) {
                  return <h3 key={idx} className="text-xl font-semibold mt-6 mb-3">{paragraph.replace('### ', '')}</h3>;
                }
                if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                  return <h4 key={idx} className="text-lg font-semibold mt-4 mb-2">{paragraph.replace(/\*\*/g, '')}</h4>;
                }
                return paragraph.trim() ? <p key={idx} className="text-gray-300 mb-4">{paragraph}</p> : null;
              })}
            </div>
          </div>

          {/* Related Services */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Related Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedServices.map((related) => (
                <Link
                  key={related.slug}
                  href={`/${related.slug}`}
                  className="bg-[#111d35] border border-[#1a2942] rounded-xl p-4 hover:border-[#2196f3] transition-colors"
                >
                  <h3 className="font-semibold hover:text-[#2196f3]">{related.name}</h3>
                  <p className="text-gray-400 text-sm mt-1">Learn more →</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Service Areas */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Service Areas</h2>
            <div className="flex flex-wrap gap-2">
              {cities.slice(0, 20).map((city) => (
                <Link
                  key={city.slug}
                  href={`/locations/${city.slug}`}
                  className="bg-[#111d35] border border-[#1a2942] px-4 py-2 rounded-lg hover:border-[#2196f3] transition-colors text-sm"
                >
                  {city.name}, {city.state}
                </Link>
              ))}
              <Link href="/locations" className="bg-[#111d35] border border-[#1a2942] px-4 py-2 rounded-lg hover:border-[#2196f3] transition-colors text-sm text-[#2196f3]">
                View all locations →
              </Link>
            </div>
          </div>

          {/* FAQ Section */}
          <FAQSection faqs={service.faqs} />
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}

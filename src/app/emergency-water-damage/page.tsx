import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import FAQSection from '@/components/FAQSection';
import { services } from '@/data/services';
import { cities } from '@/data/cities';
import { generateLocalBusinessSchema, generateBreadcrumbSchema, generateServiceSchema, generateFAQPageSchema } from '@/lib/schema';
import GroundingBox from '@/components/GroundingBox';
import { groundingBoxes } from '@/data/groundingBoxes';

const SERVICE_SLUG = 'emergency-water-damage';

export const metadata: Metadata = (() => {
  const service = services.find((s) => s.slug === SERVICE_SLUG);
  return {
    title: service?.title || 'Emergency Water Damage',
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
          <Link href="/" className="text-[#ff6600] hover:text-[#e65100]">Return to Home</Link>
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
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#1a237e] to-[#0a1628] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{service.name}</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{service.title}</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl">{service.description}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:+18885109436" className="flex items-center justify-center space-x-2 bg-[#ff6600] hover:bg-[#e65100] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              <span>Call (888) 510-9436</span>
            </a>
            <Link href="/contact" className="flex items-center justify-center space-x-2 border-2 border-[#ff6600] text-[#ff6600] hover:bg-[#ff6600] hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              <span>Get Free Quote</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Grounding Box */}
      {groundingBoxes[SERVICE_SLUG] && (
        <div className="py-6 bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4">
            <GroundingBox {...groundingBoxes[SERVICE_SLUG]!} />
          </div>
        </div>
      )}

      {/* Key Takeaways */}
      {service.keyTakeaways && service.keyTakeaways.length > 0 && (
        <section className="py-8 bg-blue-50 border-b border-blue-100">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-lg font-bold text-[#1a237e] mb-3">Key Takeaways</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {service.keyTakeaways.map((point, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                  <span className="text-[#ff6600] mt-0.5 shrink-0 font-bold">✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Content */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            {service.fullContent.split('\n').filter(Boolean).map((paragraph, idx) => {
              if (paragraph.startsWith('## ')) {
                return <h2 key={idx} className="text-2xl md:text-3xl font-bold text-[#1a237e] mt-10 mb-4">{paragraph.replace('## ', '')}</h2>;
              }
              if (paragraph.startsWith('### ')) {
                return <h3 key={idx} className="text-xl font-semibold text-[#1a237e] mt-8 mb-3">{paragraph.replace('### ', '')}</h3>;
              }
              if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                return <h4 key={idx} className="text-lg font-semibold text-gray-800 mt-6 mb-2">{paragraph.replace(/\*\*/g, '')}</h4>;
              }
              if (paragraph.startsWith('- ')) {
                return <li key={idx} className="text-gray-700 ml-4 mb-1">{paragraph.replace('- ', '')}</li>;
              }
              return paragraph.trim() ? <p key={idx} className="text-gray-700 mb-4 leading-relaxed">{paragraph}</p> : null;
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#1a237e] py-12">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Need {service.name} Now?</h2>
          <p className="text-gray-300 mb-6">Don't wait — call our 24/7 emergency line for immediate response.</p>
          <a href="tel:+18885109436" className="inline-block bg-[#ff6600] hover:bg-[#e65100] text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors">(888) 510-9436</a>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1a237e] mb-6">Related Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedServices.map((related) => (
              <Link key={related.slug} href={`/${related.slug}`} className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg hover:border-[#1a237e] transition-all">
                <h3 className="font-semibold text-[#1a237e]">{related.name}</h3>
                <p className="text-gray-500 text-sm mt-1">Learn more →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1a237e] mb-6">Service Areas</h2>
          <div className="flex flex-wrap gap-2">
            {cities.slice(0, 20).map((city) => (
              <Link key={city.slug} href={`/locations/${city.slug}`} className="bg-gray-100 border border-gray-200 px-4 py-2 rounded-lg hover:border-[#1a237e] hover:bg-gray-50 transition-colors text-sm text-gray-700">
                {city.name}, {city.state}
              </Link>
            ))}
            <Link href="/locations" className="bg-gray-100 border border-gray-200 px-4 py-2 rounded-lg hover:border-[#1a237e] transition-colors text-sm text-[#ff6600] font-medium">
              View all locations →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <FAQSection faqs={service.faqs} />
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}

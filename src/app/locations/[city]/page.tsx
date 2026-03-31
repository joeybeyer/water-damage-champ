import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { cities } from '@/data/cities';
import { services } from '@/data/services';
import { getCityContent } from '@/data/cityContent';
import FAQSection from '@/components/FAQSection';
import { generateLocalBusinessSchema, generateBreadcrumbSchema, generateFAQPageSchema } from '@/lib/schema';

interface Props {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return cities.map((city) => ({
    city: city.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = cities.find((c) => c.slug === citySlug);
  
  if (!city) {
    return { title: 'Not Found' };
  }

  return {
    title: `Water Damage Restoration in ${city.name}, ${city.state} | Water Damage Champ`,
    description: `Professional water damage restoration services in ${city.name}, ${city.state}. Fast response, licensed technicians, free inspections. Call (888) 510-9436.`,
  };
}

export default async function CityPage({ params }: Props) {
  const { city: citySlug } = await params;
  const city = cities.find((c) => c.slug === citySlug);

  if (!city) {
    notFound();
  }

  const cityContent = getCityContent(citySlug);
  const localBusinessSchema = generateLocalBusinessSchema(city);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://waterdamagechamp.com' },
    { name: 'Locations', url: 'https://waterdamagechamp.com/locations' },
    { name: `${city.name}`, url: `https://waterdamagechamp.com/locations/${city.slug}` },
  ]);
  const faqSchema = generateFAQPageSchema(`Water Damage in ${city.name}`, cityContent.faqs);

  return (
    <>
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/locations" className="hover:text-white">Locations</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{city.name}</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Water Damage Restoration in <span className="text-blue-500">{city.name}, {city.state}</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl">
            Professional water damage restoration services in {city.name}. Our certified technicians 
            provide fast, reliable service when you need it most.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="tel:+18885109436"
              className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Call (888) 510-9436</span>
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center space-x-2 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              <span>Get Free Quote</span>
            </Link>
          </div>

          {/* About This City */}
          <div className="bg-navy-800 border border-navy-700 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-4">About {city.name}, {city.state}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Notable Areas</h3>
                <p className="text-gray-400">{cityContent.neighborhoods.join(', ')}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Landmarks</h3>
                <p className="text-gray-400">{cityContent.landmarks}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Climate</h3>
                <p className="text-gray-400">{cityContent.climate}</p>
              </div>
            </div>
          </div>

          {/* Services in This City */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Services Available in {city.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.slice(0, 6).map((service) => (
                <Link
                  key={service.slug}
                  href={`/${service.slug}`}
                  className="bg-navy-800 border border-navy-700 rounded-xl p-4 hover:border-blue-500 transition-colors"
                >
                  <h3 className="font-semibold hover:text-blue-500">{service.name}</h3>
                  <p className="text-gray-400 text-sm mt-1">Learn more →</p>
                </Link>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <FAQSection faqs={cityContent.faqs} />
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
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

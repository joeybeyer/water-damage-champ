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
    title: `Water Damage Restoration ${city.name}, ${city.state} | 24/7 Emergency Response`,
    description: `${city.name} water damage? Our IICRC-certified crews respond within hours — extraction, drying, mold prevention, and full restoration. Serving ${city.name} and ${city.state}. Call (888) 510-9436.`,
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
  const nearbyCities = cities.filter(c => c.state === city.state && c.slug !== city.slug).slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#1a237e] to-[#0a1628] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/locations" className="hover:text-white">Locations</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{city.name}</span>
          </nav>
          <p className="text-[#ff6600] font-semibold mb-2">Serving {city.name} and {city.state}</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Water Damage Restoration in {city.name}, {city.state}
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl">
            IICRC-certified technicians serving {city.name} with 24/7 emergency water damage response. Fast extraction, structural drying, and complete property restoration.
          </p>
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

      {/* Main Content — Internal linking to service pages per SOP */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            When water damage strikes in {city.name}, fast response is the difference between a minor cleanup and a major reconstruction project. Water Damage Champ provides complete <Link href="/water-damage-restoration" className="text-[#1a237e] font-medium hover:text-[#ff6600]">water damage restoration</Link> across {city.name} and surrounding {city.state} communities — including {cityContent.neighborhoods.slice(0, 3).join(', ')}, and beyond.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            {cityContent.climate} Our certified technicians arrive equipped with industrial <Link href="/water-extraction" className="text-[#1a237e] font-medium hover:text-[#ff6600]">water extraction</Link> equipment, commercial dehumidifiers, and antimicrobial solutions. Whether you&apos;re dealing with a burst pipe, <Link href="/flood-damage-repair" className="text-[#1a237e] font-medium hover:text-[#ff6600]">flood damage</Link>, or <Link href="/sewage-cleanup" className="text-[#1a237e] font-medium hover:text-[#ff6600]">sewage backup</Link>, we handle the full restoration process from extraction through rebuild.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-[#1a237e] mt-10 mb-4">Neighborhoods We Serve</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Our crews respond throughout {city.name} — including {cityContent.neighborhoods.join(', ')}. Local landmarks like {cityContent.landmarks} help our dispatch team route crews efficiently for the fastest possible emergency response.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-[#1a237e] mt-10 mb-4">Our Process</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Every {city.name} property gets our proven four-step process: emergency water extraction using truck-mounted equipment, structural drying with daily moisture monitoring, <Link href="/mold-remediation" className="text-[#1a237e] font-medium hover:text-[#ff6600]">mold prevention</Link> treatment on all exposed surfaces, and complete repair of damaged drywall, flooring, and structural materials. We coordinate directly with your insurance company from day one.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-[#1a237e] mt-10 mb-6">What {city.name} Residents Say</h2>
          <div className="space-y-4 mb-8">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <p className="text-gray-700 italic mb-3">&ldquo;Had a pipe burst at 2am and these guys were at my door by 4am. They had the water extracted and fans running before sunrise. Insurance handled smoothly too.&rdquo;</p>
              <p className="text-sm font-semibold text-[#1a237e]">&mdash; Michael R., {cityContent.neighborhoods[0] || city.name}</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <p className="text-gray-700 italic mb-3">&ldquo;Mold behind our bathroom wall after a slow leak we didn&apos;t catch. They found it with thermal imaging, removed the damaged drywall, treated everything, and rebuilt it better than before.&rdquo;</p>
              <p className="text-sm font-semibold text-[#1a237e]">&mdash; Sarah T., {cityContent.neighborhoods[1] || city.name}</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <p className="text-gray-700 italic mb-3">&ldquo;Our basement flooded during heavy rain. They pumped it out, dried everything with industrial equipment, and prevented any mold. Professional from start to finish.&rdquo;</p>
              <p className="text-sm font-semibold text-[#1a237e]">&mdash; David K., {cityContent.neighborhoods[2] || city.name}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#1a237e] py-12">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Water Damage in {city.name}?</h2>
          <p className="text-gray-300 mb-6">Every hour increases damage and restoration costs. Call now for immediate response.</p>
          <a href="tel:+18885109436" className="inline-block bg-[#ff6600] hover:bg-[#e65100] text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors">(888) 510-9436</a>
        </div>
      </section>

      {/* Services Available */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1a237e] mb-6">Services in {city.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.slice(0, 9).map((service) => (
              <Link key={service.slug} href={`/${service.slug}`} className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg hover:border-[#1a237e] transition-all">
                <h3 className="font-semibold text-[#1a237e]">{service.name}</h3>
                <p className="text-gray-500 text-sm mt-1">Learn more &rarr;</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Cities */}
      {nearbyCities.length > 0 && (
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-[#1a237e] mb-6">Nearby Service Areas</h2>
            <div className="flex flex-wrap gap-2">
              {nearbyCities.map((nearby) => (
                <Link key={nearby.slug} href={`/locations/${nearby.slug}`} className="bg-gray-100 border border-gray-200 px-4 py-2 rounded-lg hover:border-[#1a237e] hover:bg-gray-50 transition-colors text-sm text-gray-700">
                  {nearby.name}, {nearby.state}
                </Link>
              ))}
              <Link href="/locations" className="bg-gray-100 border border-gray-200 px-4 py-2 rounded-lg hover:border-[#1a237e] transition-colors text-sm text-[#ff6600] font-medium">
                All locations &rarr;
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <FAQSection faqs={cityContent.faqs} />
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}

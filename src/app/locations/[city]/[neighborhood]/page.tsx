import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { cities } from '@/data/cities';
import { services } from '@/data/services';
import { getNeighborhood, getNeighborhoodsByCity, getNeighborLinks } from '@/data/neighborhoods';
import FAQSection from '@/components/FAQSection';
import { generateLocalBusinessSchema, generateBreadcrumbSchema, generateFAQPageSchema } from '@/lib/schema';

interface Props {
  params: Promise<{ city: string; neighborhood: string }>;
}

export async function generateStaticParams() {
  const { neighborhoods } = await import('@/data/neighborhoods');
  return neighborhoods.map((n) => ({
    city: n.citySlug,
    neighborhood: n.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: citySlug, neighborhood: neighborhoodSlug } = await params;
  const neighborhood = getNeighborhood(citySlug, neighborhoodSlug);

  if (!neighborhood) {
    return { title: 'Not Found' };
  }

  // Sterling Sky tactic: long title tags with neighborhood names
  const cityNeighborhoods = getNeighborhoodsByCity(citySlug);
  const otherNames = cityNeighborhoods
    .filter(n => n.slug !== neighborhoodSlug)
    .slice(0, 5)
    .map(n => n.name)
    .join(', ');

  return {
    title: `Water Damage Restoration ${neighborhood.name}, ${neighborhood.cityName} ${neighborhood.state} – Serving ${otherNames} & All of ${neighborhood.cityName} – 24/7 Emergency`,
    description: `${neighborhood.name} water damage? IICRC-certified crews serving ${neighborhood.zipCodes}. Emergency extraction, structural drying, mold prevention. Call (888) 510-9436.`,
  };
}

export default async function NeighborhoodPage({ params }: Props) {
  const { city: citySlug, neighborhood: neighborhoodSlug } = await params;
  const neighborhood = getNeighborhood(citySlug, neighborhoodSlug);

  if (!neighborhood) {
    notFound();
  }

  const city = cities.find(c => c.slug === citySlug);
  const neighborLinks = getNeighborLinks(neighborhood);
  const cityNeighborhoods = getNeighborhoodsByCity(citySlug);
  const localBusinessSchema = generateLocalBusinessSchema(city);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://waterdamagechamp.com' },
    { name: 'Locations', url: 'https://waterdamagechamp.com/locations' },
    { name: neighborhood.cityName, url: `https://waterdamagechamp.com/locations/${citySlug}` },
    { name: neighborhood.name, url: `https://waterdamagechamp.com/locations/${citySlug}/${neighborhoodSlug}` },
  ]);
  const faqSchema = generateFAQPageSchema(`Water Damage in ${neighborhood.name}`, neighborhood.faqs);

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
            <Link href={`/locations/${citySlug}`} className="hover:text-white">{neighborhood.cityName}</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{neighborhood.name}</span>
          </nav>
          <p className="text-[#ff6600] font-semibold mb-2">Serving {neighborhood.name}, {neighborhood.cityName}</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Water Damage Restoration in {neighborhood.name}, {neighborhood.cityName}
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl">
            IICRC-certified technicians serving {neighborhood.name} ({neighborhood.zipCodes}) with 24/7 emergency response. Fast extraction, structural drying, and complete restoration.
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

      {/* Key Takeaways — BERT: lists = very high confidence — per SKILL-EXPANDED */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4">
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2"><span className="text-[#ff6600] font-bold mt-0.5">&#x2713;</span> 24/7 emergency water damage restoration in {neighborhood.name}, {neighborhood.cityName}</li>
            <li className="flex items-start gap-2"><span className="text-[#ff6600] font-bold mt-0.5">&#x2713;</span> Serving ZIP codes {neighborhood.zipCodes}</li>
            <li className="flex items-start gap-2"><span className="text-[#ff6600] font-bold mt-0.5">&#x2713;</span> IICRC-certified technicians with truck-mounted extraction equipment</li>
            <li className="flex items-start gap-2"><span className="text-[#ff6600] font-bold mt-0.5">&#x2713;</span> Direct insurance coordination — we bill your carrier directly</li>
            <li className="flex items-start gap-2"><span className="text-[#ff6600] font-bold mt-0.5">&#x2713;</span> Free inspection — call <a href="tel:+18885109436" className="text-[#1a237e] font-semibold">(888) 510-9436</a></li>
          </ul>
        </div>
      </section>

      {/* Main Content — 1 UP link to city hub in first paragraph + 2-3 ACROSS to service pages */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          {/* 1 UP: Link to city hub in first paragraph, above fold */}
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            When you need <Link href={`/locations/${citySlug}`} className="text-[#1a237e] font-medium hover:text-[#ff6600]">water damage restoration in {neighborhood.cityName}</Link>, our {neighborhood.name} crews respond fast with industrial <Link href="/water-extraction" className="text-[#1a237e] font-medium hover:text-[#ff6600]">water extraction</Link> equipment, commercial dehumidifiers, and antimicrobial solutions. {neighborhood.content.split('\n\n')[0]}
          </p>

          {/* Remaining content paragraphs */}
          {neighborhood.content.split('\n\n').slice(1).map((paragraph, idx) => (
            <p key={idx} className="text-gray-700 text-lg leading-relaxed mb-6">{paragraph}</p>
          ))}

          {/* Housing Stock & Common Issues */}
          <h2 className="text-2xl md:text-3xl font-bold text-[#1a237e] mt-10 mb-4">Local Conditions</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">{neighborhood.housingStock}</p>
          <p className="text-gray-700 mb-4 leading-relaxed">{neighborhood.climate}</p>

          {/* Trust Table — BERT: tables = EXTREME confidence */}
          <h2 className="text-2xl md:text-3xl font-bold text-[#1a237e] mt-10 mb-4">Services &amp; Response</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#1a237e] text-white">
                  <th className="px-4 py-3 text-left">Service</th>
                  <th className="px-4 py-3 text-left">Response Time</th>
                  <th className="px-4 py-3 text-left">Typical {neighborhood.name} Scenario</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-3 font-medium text-gray-800"><Link href="/water-damage-restoration" className="text-[#1a237e] hover:text-[#ff6600]">Water Damage Restoration</Link></td>
                  <td className="px-4 py-3 text-gray-600">2-4 hours</td>
                  <td className="px-4 py-3 text-gray-600">{neighborhood.commonIssues[0] || 'Pipe failures and appliance leaks'}</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-800"><Link href="/water-extraction" className="text-[#1a237e] hover:text-[#ff6600]">Emergency Water Extraction</Link></td>
                  <td className="px-4 py-3 text-gray-600">2-4 hours</td>
                  <td className="px-4 py-3 text-gray-600">{neighborhood.commonIssues[1] || 'Standing water from storms or flooding'}</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-3 font-medium text-gray-800"><Link href="/mold-remediation" className="text-[#1a237e] hover:text-[#ff6600]">Mold Remediation</Link></td>
                  <td className="px-4 py-3 text-gray-600">Same day assessment</td>
                  <td className="px-4 py-3 text-gray-600">{neighborhood.commonIssues[2] || 'Hidden mold from slow leaks'}</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-800"><Link href="/fire-damage-restoration" className="text-[#1a237e] hover:text-[#ff6600]">Fire &amp; Smoke Restoration</Link></td>
                  <td className="px-4 py-3 text-gray-600">2-4 hours</td>
                  <td className="px-4 py-3 text-gray-600">{neighborhood.commonIssues[3] || 'Fire suppression water damage'}</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-3 font-medium text-gray-800"><Link href="/sewage-cleanup" className="text-[#1a237e] hover:text-[#ff6600]">Sewage Cleanup</Link></td>
                  <td className="px-4 py-3 text-gray-600">Emergency priority</td>
                  <td className="px-4 py-3 text-gray-600">Sewer line backups and septic failures</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Landmarks — local relevance signals */}
          <h2 className="text-2xl md:text-3xl font-bold text-[#1a237e] mt-10 mb-4">Coverage Area</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Our crews respond to water damage calls throughout {neighborhood.name}, including areas near {neighborhood.landmarks.join(', ')}. We serve all addresses within ZIP codes {neighborhood.zipCodes}.
          </p>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#1a237e] py-12">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Water Damage in {neighborhood.name}?</h2>
          <p className="text-gray-300 mb-6">Every hour increases damage and restoration costs. Call now for immediate response.</p>
          <a href="tel:+18885109436" className="inline-block bg-[#ff6600] hover:bg-[#e65100] text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors">(888) 510-9436</a>
        </div>
      </section>

      {/* 2-3 ACROSS: Neighboring neighborhoods — not ALL, just adjacent */}
      {neighborLinks.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-[#1a237e] mb-6">Nearby Neighborhoods</h2>
            <div className="flex flex-wrap gap-3">
              {neighborLinks.map((neighbor) => (
                <Link key={neighbor.slug} href={`/locations/${citySlug}/${neighbor.slug}`} className="bg-white border border-gray-200 px-5 py-3 rounded-lg hover:border-[#1a237e] hover:shadow-md transition-all text-gray-700 font-medium">
                  {neighbor.name}
                </Link>
              ))}
              {/* Also link to other city neighborhoods */}
              {cityNeighborhoods.filter(n => n.slug !== neighborhoodSlug && !neighborhood.neighborSlugs.includes(n.slug)).slice(0, 3).map((other) => (
                <Link key={other.slug} href={`/locations/${citySlug}/${other.slug}`} className="bg-white border border-gray-200 px-5 py-3 rounded-lg hover:border-[#1a237e] hover:shadow-md transition-all text-gray-500">
                  {other.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <FAQSection faqs={neighborhood.faqs} />
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}

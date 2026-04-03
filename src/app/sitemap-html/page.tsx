import { Metadata } from 'next';
import Link from 'next/link';
import { cities } from '@/data/cities';
import { services } from '@/data/services';
import { generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Site Map | Water Damage Champ',
  description: 'Complete site map for Water Damage Champ — all service pages, city locations, and resources for water damage restoration in California and Florida.',
};

const corePages = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
  { href: '/locations', label: 'All Service Locations' },
  { href: '/blog', label: 'Blog' },
];

const resourcePages = [
  { href: '/water-damage-insurance', label: 'Water Damage Insurance Claims Guide' },
  { href: '/water-damage-cost-guide', label: 'Water Damage Restoration Cost Guide' },
  { href: '/water-damage-prevention', label: 'Water Damage Prevention Guide' },
];

export default function SitemapPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.waterdamagechamp.com' },
    { name: 'Site Map', url: 'https://www.waterdamagechamp.com/sitemap-html' },
  ]);

  const caCities = cities.filter((c) => c.state === 'CA').sort((a, b) => a.name.localeCompare(b.name));
  const flCities = cities.filter((c) => c.state === 'FL').sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      <section className="bg-gradient-to-r from-[#1a237e] to-[#0a1628] py-12">
        <div className="max-w-5xl mx-auto px-4">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Site Map</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Site Map</h1>
          <p className="text-gray-300">All pages on WaterDamageChamp.com — services, locations, and resources.</p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 space-y-12">

          {/* Core Pages */}
          <div>
            <h2 className="text-xl font-bold text-[#1a237e] mb-4 pb-2 border-b border-gray-200">Core Pages</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {corePages.map((page) => (
                <li key={page.href}>
                  <Link href={page.href} className="text-[#1a237e] hover:text-[#ff6600] text-sm transition-colors">
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Pages */}
          <div>
            <h2 className="text-xl font-bold text-[#1a237e] mb-4 pb-2 border-b border-gray-200">Service Pages</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/${service.slug}`} className="text-[#1a237e] hover:text-[#ff6600] text-sm transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resource Pages */}
          <div>
            <h2 className="text-xl font-bold text-[#1a237e] mb-4 pb-2 border-b border-gray-200">Resources &amp; Guides</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {resourcePages.map((page) => (
                <li key={page.href}>
                  <Link href={page.href} className="text-[#1a237e] hover:text-[#ff6600] text-sm transition-colors">
                    {page.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/privacy" className="text-[#1a237e] hover:text-[#ff6600] text-sm transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="text-[#1a237e] hover:text-[#ff6600] text-sm transition-colors">Terms of Use</Link>
              </li>
            </ul>
          </div>

          {/* California City Pages */}
          <div>
            <h2 className="text-xl font-bold text-[#1a237e] mb-4 pb-2 border-b border-gray-200">
              California Service Areas ({caCities.length} cities)
            </h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {caCities.map((city) => (
                <li key={city.slug}>
                  <Link href={`/locations/${city.slug}`} className="text-[#1a237e] hover:text-[#ff6600] text-sm transition-colors">
                    {city.name}, CA
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Florida City Pages */}
          <div>
            <h2 className="text-xl font-bold text-[#1a237e] mb-4 pb-2 border-b border-gray-200">
              Florida Service Areas ({flCities.length} cities)
            </h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {flCities.map((city) => (
                <li key={city.slug}>
                  <Link href={`/locations/${city.slug}`} className="text-[#1a237e] hover:text-[#ff6600] text-sm transition-colors">
                    {city.name}, FL
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Neighborhood Pages Note */}
          <div>
            <h2 className="text-xl font-bold text-[#1a237e] mb-4 pb-2 border-b border-gray-200">Neighborhood Pages</h2>
            <p className="text-gray-600 text-sm mb-4">
              Water Damage Champ serves 226 neighborhoods across all 49 cities. Each city hub page links to its neighborhood pages.
            </p>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {cities.slice(0, 12).map((city) => (
                <li key={city.slug}>
                  <Link href={`/locations/${city.slug}`} className="text-[#1a237e] hover:text-[#ff6600] text-sm transition-colors">
                    {city.name} neighborhoods →
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/locations" className="text-[#ff6600] hover:text-orange-500 text-sm font-medium transition-colors">
                  View all 49 cities →
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}

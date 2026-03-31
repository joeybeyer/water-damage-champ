import { Metadata } from 'next';
import Link from 'next/link';
import CityCard from '@/components/CityCard';
import { cities, popularCities } from '@/data/cities';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Service Areas | Water Damage Champ',
  description: 'Water Damage Champ provides professional water damage restoration services throughout California and Florida. Find service in your city.',
};

export default function LocationsPage() {
  const schema = generateLocalBusinessSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://waterdamagechamp.com' },
    { name: 'Locations', url: 'https://waterdamagechamp.com/locations' },
  ]);

  return (
    <>
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Service <span className="text-blue-500">Areas</span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl">
            Water Damage Champ provides professional water damage restoration services 
            throughout California and Florida. Find service in your area.
          </p>

          {/* Popular Cities */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Popular Locations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {popularCities.map((city) => (
                <CityCard key={city.slug} slug={city.slug} name={city.name} state={city.state} />
              ))}
            </div>
          </div>

          {/* All Cities */}
          <div>
            <h2 className="text-2xl font-bold mb-6">All Service Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {cities.map((city) => (
                <CityCard key={city.slug} slug={city.slug} name={city.name} state={city.state} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}

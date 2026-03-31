import Link from 'next/link';
import Image from 'next/image';

const services = [
  { slug: 'water-damage-restoration', name: 'Water Damage Restoration' },
  { slug: 'water-extraction', name: 'Water Extraction' },
  { slug: 'flood-damage-repair', name: 'Flood Damage Repair' },
  { slug: 'mold-remediation', name: 'Mold Remediation' },
  { slug: 'emergency-water-damage', name: 'Emergency Services' },
];

const cities = [
  { slug: 'los-angeles', name: 'Los Angeles' },
  { slug: 'san-diego', name: 'San Diego' },
  { slug: 'san-francisco', name: 'San Francisco' },
  { slug: 'sacramento', name: 'Sacramento' },
  { slug: 'tampa', name: 'Tampa' },
  { slug: 'st-petersburg', name: 'St Petersburg' },
];

export default function Footer() {
  return (
    <footer className="bg-navy-800 border-t border-navy-700">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <Image
                src="/images/logo112-1024x301.png"
                alt="Water Damage Champ"
                width={180}
                height={60}
                className="h-12 w-auto mb-4"
              />
            </div>
            <p className="text-gray-400 mb-4">
              Professional water damage restoration services available 24/7. Fast response when you need it most.
            </p>
            <a
              href="tel:+18885109436"
              className="flex items-center space-x-2 text-blue-400 hover:text-blue-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-lg font-semibold">(888) 510-9436</span>
            </a>
            <div className="mt-4">
              <Image
                src="/images/elite-solid-border-e1582749398141.png"
                alt="Certified Elite Contractor"
                width={100}
                height={50}
                className="h-10 w-auto"
              />
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/${service.slug}`} className="text-gray-400 hover:text-white transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Service Areas</h3>
            <ul className="space-y-2">
              {cities.map((city) => (
                <li key={city.slug}>
                  <Link href={`/locations/${city.slug}`} className="text-gray-400 hover:text-white transition-colors">
                    {city.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/locations" className="text-blue-500 hover:text-blue-400">
                  View All Locations →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Water Damage Champ. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">
              Contact Us
            </Link>
            <Link href="/about" className="text-gray-400 hover:text-white text-sm transition-colors">
              About Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

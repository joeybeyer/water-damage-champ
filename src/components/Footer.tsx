import Link from 'next/link';

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
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <span className="text-xl font-bold">Water Damage Champ</span>
            </div>
            <p className="text-gray-400 mb-4">
              Professional water damage restoration services available 24/7. Fast response when you need it most.
            </p>
            <a
              href="tel:+18885109436"
              className="flex items-center space-x-2 text-blue-500 hover:text-blue-400"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-lg font-semibold">(888) 510-9436</span>
            </a>
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

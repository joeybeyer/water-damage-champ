import Link from 'next/link';
import Image from 'next/image';

const services = [
  { slug: 'water-damage-restoration', name: 'Water Damage Restoration' },
  { slug: 'water-extraction', name: 'Water Extraction' },
  { slug: 'flood-damage-repair', name: 'Flood Damage Repair' },
  { slug: 'mold-remediation', name: 'Mold Remediation' },
  { slug: 'emergency-water-damage', name: 'Emergency Services' },
  { slug: 'storm-damage-restoration', name: 'Storm Damage' },
];

const company = [
  { slug: '', name: 'Home' },
  { slug: 'contact', name: 'Contact' },
  { slug: 'locations', name: 'Service Areas' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a1628] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Image src="/images/logo112-1024x301.png" alt="Water Damage Champ" width={180} height={60} className="h-12 w-auto" />
            </div>
            <p className="text-gray-400 text-sm mb-6">
              As the Water Damage Champ, we pride ourselves on being your trusted partner in restoration. With a team of dedicated professionals, cutting-edge technology, and a commitment to customer satisfaction, we stand tall as industry leaders.
            </p>
            {/* Social Links — matching WP originals */}
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/waterdamagechamp" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#ff6600] transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://www.youtube.com/channel/UCPfivC7ChN1dahbi4xnwXPw" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#ff6600] transition-colors" aria-label="YouTube">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="https://www.instagram.com/waterdamagechamp/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#ff6600] transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-[#ff6600] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <a href="tel:+18885109436" className="text-white font-semibold hover:text-[#ff6600] transition-colors">(888) 510-9436</a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-[#ff6600] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <a href="mailto:service@waterdamagechamp.com" className="text-white hover:text-[#ff6600] transition-colors">service@waterdamagechamp.com</a>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.slug}>
                  <Link href={`/${item.slug}`} className="text-gray-400 hover:text-[#ff6600] transition-colors text-sm">{item.name}</Link>
                </li>
              ))}
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/${service.slug}`} className="text-gray-400 hover:text-[#ff6600] transition-colors text-sm">{service.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Service Areas</h3>
            <ul className="space-y-2">
              <li><Link href="/locations/la-jolla" className="text-gray-400 hover:text-[#ff6600] transition-colors text-sm">La Jolla, CA</Link></li>
              <li><Link href="/locations/sherman-oaks" className="text-gray-400 hover:text-[#ff6600] transition-colors text-sm">Sherman Oaks, CA</Link></li>
              <li><Link href="/locations/los-angeles" className="text-gray-400 hover:text-[#ff6600] transition-colors text-sm">Los Angeles, CA</Link></li>
              <li><Link href="/locations/cupertino" className="text-gray-400 hover:text-[#ff6600] transition-colors text-sm">Cupertino, CA</Link></li>
              <li><Link href="/locations/malibu" className="text-gray-400 hover:text-[#ff6600] transition-colors text-sm">Malibu, CA</Link></li>
              <li><Link href="/locations/tampa" className="text-gray-400 hover:text-[#ff6600] transition-colors text-sm">Tampa, FL</Link></li>
              <li><Link href="/locations/st-petersburg" className="text-gray-400 hover:text-[#ff6600] transition-colors text-sm">St Petersburg, FL</Link></li>
              <li><Link href="/locations" className="text-[#ff6600] hover:text-orange-400 text-sm font-medium">View All Locations →</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">Water Damage Champ © All Rights Reserved</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-[#ff6600] text-sm transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-400 hover:text-[#ff6600] text-sm transition-colors">Terms of Use</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

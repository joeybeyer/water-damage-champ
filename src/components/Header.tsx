'use client';

import Link from 'next/link';
import { useState } from 'react';

const services = [
  { slug: 'water-damage-restoration', name: 'Water Damage Restoration' },
  { slug: 'water-extraction', name: 'Water Extraction' },
  { slug: 'flood-damage-repair', name: 'Flood Damage Repair' },
  { slug: 'mold-remediation', name: 'Mold Remediation' },
  { slug: 'storm-damage-restoration', name: 'Storm Damage Restoration' },
  { slug: 'sump-pump-cleanup', name: 'Sump Pump Cleanup' },
  { slug: 'ceiling-wall-water-damage', name: 'Ceiling & Wall Damage' },
  { slug: 'crawlspace-encapsulation', name: 'Crawlspace Encapsulation' },
  { slug: 'commercial-water-damage', name: 'Commercial Services' },
  { slug: 'emergency-water-damage', name: 'Emergency Services' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="bg-navy-800 border-b border-navy-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <span className="text-xl font-bold">Water Damage Champ</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                Services
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-navy-800 border border-navy-700 rounded-lg shadow-xl py-2">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/${service.slug}`}
                      className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-navy-700 transition-colors"
                      onClick={() => setServicesOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/locations" className="text-gray-300 hover:text-white transition-colors">
              Locations
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
          </nav>

          {/* Phone CTA */}
          <a
            href="tel:+18885109436"
            className="hidden md:flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="font-semibold">(888) 510-9436</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-navy-700">
            <nav className="flex flex-col space-y-2">
              <Link href="/locations" className="px-4 py-2 text-gray-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>
                Locations
              </Link>
              <Link href="/about" className="px-4 py-2 text-gray-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
              <Link href="/contact" className="px-4 py-2 text-gray-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
              <div className="border-t border-navy-700 pt-2 mt-2">
                <p className="px-4 py-2 text-sm text-gray-400">Services</p>
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/${service.slug}`}
                    className="block px-8 py-2 text-gray-300 hover:text-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

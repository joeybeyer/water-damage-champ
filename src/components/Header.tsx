'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const residentialServices = [
  { slug: 'water-damage-restoration', name: 'Water Damage Restoration' },
  { slug: 'water-extraction', name: 'Water Extraction' },
  { slug: 'flood-damage-repair', name: 'Flood Damage Repair' },
  { slug: 'mold-remediation', name: 'Mold Remediation' },
  { slug: 'storm-damage-restoration', name: 'Storm Damage Restoration' },
  { slug: 'sump-pump-cleanup', name: 'Sump Pump Cleanup' },
  { slug: 'ceiling-wall-water-damage', name: 'Ceiling & Wall Damage' },
  { slug: 'crawlspace-encapsulation', name: 'Crawlspace Encapsulation' },
];

const commercialServices = [
  { slug: 'commercial-water-damage', name: 'Commercial Services' },
  { slug: 'emergency-water-damage', name: 'Emergency Services' },
];

const otherServices = [
  { slug: 'fire-damage-restoration', name: 'Fire Damage' },
  { slug: 'roof-leak-repair', name: 'Roof Leak Repair' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [residentialOpen, setResidentialOpen] = useState(false);
  const [commercialOpen, setCommercialOpen] = useState(false);
  const [otherOpen, setOtherOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-[#0a1628] text-white py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>(888) 510-9436</span>
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-sm hover:text-gray-300">Find a Location</a>
            <div className="flex space-x-3">
              <a href="#" className="hover:text-gray-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="hover:text-gray-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="#" className="hover:text-gray-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo112-1024x301.png"
              alt="Water Damage Champ"
              width={180}
              height={60}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {/* Residential Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-[#1a237e] font-medium transition-colors py-8">
                Residential Services
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-0 pt-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="bg-white border border-gray-200 rounded-lg shadow-xl py-2 min-w-[220px]">
                  {residentialServices.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/${service.slug}`}
                      className="block px-4 py-2 text-gray-700 hover:text-[#1a237e] hover:bg-gray-50 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Commercial Restoration Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-[#1a237e] font-medium transition-colors py-8">
                Commercial Restoration
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-0 pt-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="bg-white border border-gray-200 rounded-lg shadow-xl py-2 min-w-[220px]">
                  {commercialServices.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/${service.slug}`}
                      className="block px-4 py-2 text-gray-700 hover:text-[#1a237e] hover:bg-gray-50 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Other Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-[#1a237e] font-medium transition-colors py-8">
                Other Services
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-0 pt-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="bg-white border border-gray-200 rounded-lg shadow-xl py-2 min-w-[220px]">
                  {otherServices.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/${service.slug}`}
                      className="block px-4 py-2 text-gray-700 hover:text-[#1a237e] hover:bg-gray-50 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Blog */}
            <Link href="/blog" className="text-gray-700 hover:text-[#1a237e] font-medium transition-colors py-8">
              Blog
            </Link>

            {/* 24/7 Emergency CTA Button */}
            <a
              href="tel:+18885109436"
              className="flex items-center space-x-2 bg-[#1a237e] hover:bg-[#111d35] text-white px-5 py-3 rounded-lg transition-colors font-semibold"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <span>24/7 Emergency Services</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700"
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
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 py-4">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col space-y-2">
              <div className="py-2">
                <p className="text-sm font-semibold text-gray-500 uppercase px-2">Residential Services</p>
                {residentialServices.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/${service.slug}`}
                    className="block px-4 py-2 text-gray-700 hover:text-[#1a237e]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
              <div className="border-t border-gray-200 py-2">
                <p className="text-sm font-semibold text-gray-500 uppercase px-2">Commercial Restoration</p>
                {commercialServices.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/${service.slug}`}
                    className="block px-4 py-2 text-gray-700 hover:text-[#1a237e]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
              <div className="border-t border-gray-200 py-2">
                <p className="text-sm font-semibold text-gray-500 uppercase px-2">Other Services</p>
                {otherServices.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/${service.slug}`}
                    className="block px-4 py-2 text-gray-700 hover:text-[#1a237e]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
              <div className="border-t border-gray-200 pt-2 mt-2">
                <a
                  href="tel:+18885109436"
                  className="flex items-center justify-center space-x-2 bg-[#1a237e] text-white px-5 py-3 rounded-lg font-semibold"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span>24/7 Emergency Services</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
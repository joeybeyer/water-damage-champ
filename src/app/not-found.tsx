import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <p className="text-6xl font-bold text-[#ff6600] mb-4">404</p>
        <h1 className="text-3xl md:text-4xl font-bold text-[#1a237e] mb-4">Page Not Found</h1>
        <p className="text-gray-600 text-lg mb-8">
          The page you&apos;re looking for may have moved or no longer exists. If you&apos;re dealing with a water emergency, call us now.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+18885109436"
            className="inline-flex items-center justify-center space-x-2 bg-[#ff6600] hover:bg-[#e65100] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            <span>(888) 510-9436</span>
          </a>
          <Link
            href="/"
            className="inline-flex items-center justify-center border-2 border-[#1a237e] text-[#1a237e] hover:bg-[#1a237e] hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
          >
            Back to Home
          </Link>
        </div>
        <div className="mt-12 text-left">
          <p className="text-sm font-semibold text-gray-500 uppercase mb-3">Popular Pages</p>
          <div className="flex flex-wrap gap-2">
            <Link href="/water-damage-restoration" className="bg-gray-100 px-4 py-2 rounded-lg text-sm text-gray-700 hover:border-[#1a237e] border border-gray-200">Water Damage Restoration</Link>
            <Link href="/mold-remediation" className="bg-gray-100 px-4 py-2 rounded-lg text-sm text-gray-700 hover:border-[#1a237e] border border-gray-200">Mold Remediation</Link>
            <Link href="/fire-damage-restoration" className="bg-gray-100 px-4 py-2 rounded-lg text-sm text-gray-700 hover:border-[#1a237e] border border-gray-200">Fire Damage</Link>
            <Link href="/locations" className="bg-gray-100 px-4 py-2 rounded-lg text-sm text-gray-700 hover:border-[#1a237e] border border-gray-200">Service Areas</Link>
            <Link href="/contact" className="bg-gray-100 px-4 py-2 rounded-lg text-sm text-gray-700 hover:border-[#1a237e] border border-gray-200">Contact Us</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

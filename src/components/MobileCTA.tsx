'use client';

export default function MobileCTA() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 px-4 py-3 bg-navy-900 border-t border-gray-800">
      <a
        href="tel:+18885109436"
        className="flex items-center justify-center space-x-2 w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-lg transition-all font-bold text-lg shadow-lg"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        <span>Call Now (888) 510-9436</span>
      </a>
    </div>
  );
}
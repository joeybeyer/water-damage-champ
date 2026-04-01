import { Metadata } from 'next';
import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Contact Water Damage Champ | 24/7 Emergency Restoration | CA & FL',
  description: 'Contact Water Damage Champ for 24/7 emergency water damage restoration across California & Florida. Call (888) 510-9436, email service@waterdamagechamp.com, or use our form.',
};

const serviceAreas = [
  'Los Angeles', 'San Diego', 'San Francisco', 'San Jose', 'Sacramento',
  'Orange County', 'Riverside', 'Long Beach', 'Anaheim', 'Irvine',
  'Pasadena', 'Santa Monica', 'Burbank', 'Glendale', 'Torrance',
  'Palo Alto', 'Sunnyvale', 'Cupertino', 'Oakland', 'Fresno',
  'Tampa FL', 'St. Petersburg FL',
];

export default function ContactPage() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://waterdamagechamp.com/#business',
    name: 'Water Damage Champ',
    url: 'https://waterdamagechamp.com',
    telephone: '+1-888-510-9436',
    email: 'service@waterdamagechamp.com',
    description: 'IICRC-certified water damage restoration, mold remediation, and fire damage restoration services across California and Florida. 24/7 emergency response.',
    image: 'https://waterdamagechamp.com/images/Water-damage.jpg',
    logo: 'https://waterdamagechamp.com/images/logo112-1024x301.png',
    priceRange: '$$',
    areaServed: ['California', 'Florida'],
    openingHoursSpecification: [{
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    }],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+1-888-510-9436',
        contactType: 'customer service',
        availableLanguage: ['English', 'Spanish'],
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '00:00',
          closes: '23:59',
        },
      },
      {
        '@type': 'ContactPoint',
        email: 'service@waterdamagechamp.com',
        contactType: 'customer support',
      },
    ],
  };

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://waterdamagechamp.com' },
    { name: 'Contact', url: 'https://waterdamagechamp.com/contact' },
  ]);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#1a237e] to-[#0a1628] py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Contact</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact <span className="text-[#2196f3]">Water Damage Champ</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Water damage emergency? Call us now — we respond across California and Florida 24 hours a day, 7 days a week, 365 days a year.
          </p>
        </div>
      </section>

      {/* Emergency Banner */}
      <div className="bg-[#ff6600] py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white font-semibold text-lg">🚨 Water damage emergency? Don&apos;t wait.</p>
          <a href="tel:+18885109436" className="bg-white text-[#ff6600] font-bold px-8 py-2.5 rounded-lg hover:bg-gray-100 transition-colors text-lg shrink-0">
            Call (888) 510-9436
          </a>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Quote Form */}
            <div>
              <h2 className="text-2xl font-bold text-[#1a237e] mb-6">Get a Free Inspection &amp; Quote</h2>
              <QuoteForm />
            </div>

            {/* Contact Details */}
            <div className="space-y-6">

              {/* NAP Card */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <h2 className="text-xl font-bold text-[#1a237e] mb-5">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#1a237e] rounded-lg flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-0.5">Emergency Phone</p>
                      <a href="tel:+18885109436" className="text-xl font-bold text-[#1a237e] hover:text-[#2196f3] transition-colors">
                        (888) 510-9436
                      </a>
                      <p className="text-sm text-gray-500 mt-0.5">Available 24/7 — including holidays</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#1a237e] rounded-lg flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-0.5">Email</p>
                      <a href="mailto:service@waterdamagechamp.com" className="text-[#1a237e] font-semibold hover:text-[#2196f3] transition-colors">
                        service@waterdamagechamp.com
                      </a>
                      <p className="text-sm text-gray-500 mt-0.5">Monitored 24/7 — we respond within 1 hour</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#1a237e] rounded-lg flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-0.5">Office Hours</p>
                      <p className="text-[#1a237e] font-semibold">24/7 — 365 Days a Year</p>
                      <p className="text-sm text-gray-500 mt-0.5">Emergency response: 2–4 hours across CA & FL</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#1a237e] rounded-lg flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-0.5">Service Area</p>
                      <p className="text-[#1a237e] font-semibold">California &amp; Florida</p>
                      <p className="text-sm text-gray-500 mt-0.5">49 cities served — mobile response to your location</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust indicators */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { icon: '🏅', label: 'IICRC Certified' },
                  { icon: '🔒', label: 'Licensed & Insured' },
                  { icon: '🆓', label: 'Free Inspections' },
                ].map((item, i) => (
                  <div key={i} className="bg-blue-50 border border-blue-100 rounded-xl p-3 text-center">
                    <div className="text-2xl mb-1">{item.icon}</div>
                    <div className="text-xs font-semibold text-[#1a237e]">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-10 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1a237e] mb-6">Our Service Area — California &amp; Florida</h2>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
            {/* Embedded Google Maps showing California */}
            <iframe
              title="Water Damage Champ Service Area — California and Florida"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6874374.218786573!2d-119.8572068!3d36.7782619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="text-sm text-gray-500 mt-3 text-center">
            Water Damage Champ serves 49 cities across California (Southern CA, Northern CA, Bay Area, Central Valley) and Florida (Tampa, St. Petersburg).
          </p>
        </div>
      </section>

      {/* Service Area List */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-xl font-bold text-[#1a237e] mb-6">Cities We Serve</h2>
          <div className="flex flex-wrap gap-2">
            {serviceAreas.map((city, i) => (
              <span key={i} className="bg-gray-100 border border-gray-200 px-3 py-1.5 rounded-lg text-sm text-gray-700">
                {city}
              </span>
            ))}
            <Link href="/locations" className="bg-[#1a237e] border border-[#1a237e] px-3 py-1.5 rounded-lg text-sm text-white font-medium">
              View all 49 cities →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1a237e] mb-8">Common Questions</h2>
          <div className="space-y-4">
            {[
              { q: 'How quickly do you respond to water damage emergencies?', a: 'We arrive within 2–4 hours of your call across all 49 service cities in California and Florida. Emergency dispatch is available 24/7, including weekends and holidays.' },
              { q: 'Do you work directly with my insurance company?', a: 'Yes. Water Damage Champ handles all insurance documentation — moisture readings, photos, scope of work — and communicates directly with your adjuster. We work with all major California and Florida insurers.' },
              { q: 'Is the inspection really free?', a: 'Yes. Our initial moisture assessment and damage inspection are completely free with no obligation. We provide a detailed written estimate before any work begins.' },
              { q: 'Do you serve both residential and commercial properties?', a: 'Yes. We restore residential homes and commercial properties including offices, retail spaces, apartment complexes, and industrial facilities across California and Florida.' },
            ].map((faq, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}

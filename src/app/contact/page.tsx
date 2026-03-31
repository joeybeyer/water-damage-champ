import { Metadata } from 'next';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Contact Us | Water Damage Champ',
  description: 'Contact Water Damage Champ for 24/7 emergency water damage restoration services. Call (888) 510-9436 or use our contact form.',
};

export default function ContactPage() {
  const schema = generateLocalBusinessSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://waterdamagechamp.com' },
    { name: 'Contact', url: 'https://waterdamagechamp.com/contact' },
  ]);

  return (
    <>
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact <span className="text-blue-500">Us</span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl">
            Need emergency water damage restoration? Call us now or fill out the form below.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-navy-800 border border-navy-700 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Get a Free Quote</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-navy-900 border border-navy-700 rounded-lg focus:border-blue-500 focus:outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-navy-900 border border-navy-700 rounded-lg focus:border-blue-500 focus:outline-none"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 bg-navy-900 border border-navy-700 rounded-lg focus:border-blue-500 focus:outline-none"
                    placeholder="(888) 510-9436"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2">Service Needed</label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 bg-navy-900 border border-navy-700 rounded-lg focus:border-blue-500 focus:outline-none"
                  >
                    <option value="">Select a service</option>
                    <option value="water-damage-restoration">Water Damage Restoration</option>
                    <option value="water-extraction">Water Extraction</option>
                    <option value="flood-damage-repair">Flood Damage Repair</option>
                    <option value="mold-remediation">Mold Remediation</option>
                    <option value="storm-damage-restoration">Storm Damage</option>
                    <option value="emergency">Emergency Service</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-navy-900 border border-navy-700 rounded-lg focus:border-blue-500 focus:outline-none"
                    placeholder="Describe your situation..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 py-4 rounded-lg font-semibold transition-colors"
                >
                  Submit Request
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <div className="bg-navy-800 border border-navy-700 rounded-xl p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6">Emergency Contact</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="text-sm text-gray-400">Phone</p>
                      <a href="tel:+18885109436" className="text-lg font-semibold hover:text-blue-500">(888) 510-9436</a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-sm text-gray-400">Hours</p>
                      <p className="text-lg font-semibold">24/7 Emergency Service</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="text-sm text-gray-400">Service Area</p>
                      <p className="text-lg font-semibold">California & Florida</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-navy-800 border border-navy-700 rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-4">Our Location</h2>
                <div className="bg-navy-900 rounded-lg h-64 flex items-center justify-center">
                  <p className="text-gray-400">Map placeholder</p>
                </div>
              </div>
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

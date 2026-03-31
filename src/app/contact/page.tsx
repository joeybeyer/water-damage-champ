import { Metadata } from 'next';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '@/lib/schema';
import QuoteForm from '@/components/QuoteForm';

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
            Contact <span className="text-[#2196f3]">Us</span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl">
            Need emergency water damage restoration? Call us now or fill out the form below.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <QuoteForm />
            </div>

            {/* Contact Info */}
            <div>
              <div className="bg-[#111d35] border border-[#1a2942] rounded-xl p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6">Emergency Contact</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <svg className="w-6 h-6 text-[#2196f3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="text-sm text-gray-400">Phone</p>
                      <a href="tel:+18885109436" className="text-lg font-semibold hover:text-[#2196f3]">(888) 510-9436</a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-6 h-6 text-[#2196f3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-sm text-gray-400">Hours</p>
                      <p className="text-lg font-semibold">24/7 Emergency Service</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-6 h-6 text-[#2196f3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              <div className="bg-[#111d35] border border-[#1a2942] rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-4">Our Location</h2>
                <div className="bg-[#0a1628] rounded-lg h-64 flex items-center justify-center">
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

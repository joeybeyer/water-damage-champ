import { Metadata } from 'next';
import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';
import FAQSection from '@/components/FAQSection';
import { services } from '@/data/services';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Water Damage Champ | 24/7 Emergency Water Damage Restoration',
  description: 'Professional water damage restoration services available 24/7. Fast response, licensed technicians, free inspections. Call (888) 510-9436 for emergency service.',
};

const serviceCards = [
  { slug: 'water-damage-restoration', name: 'Water Damage Restoration', description: 'Complete restoration for water damage of any scale.', icon: '💧' },
  { slug: 'water-extraction', name: 'Water Extraction', description: 'Rapid water removal using industrial equipment.', icon: '🔧' },
  { slug: 'flood-damage-repair', name: 'Flood Damage Repair', description: 'Expert repair after flooding events.', icon: '🌊' },
  { slug: 'mold-remediation', name: 'Mold Remediation', description: 'Safe mold removal and prevention.', icon: '🦠' },
  { slug: 'storm-damage-restoration', name: 'Storm Damage', description: 'Restore your property after severe weather.', icon: '⛈️' },
  { slug: 'emergency-water-damage', name: '24/7 Emergency', description: 'Immediate response when disaster strikes.', icon: '🚨' },
];

const testimonials = [
  { quote: 'Water Damage Champ responded within an hour when our basement flooded. They dried everything thoroughly and handled all the insurance paperwork. Highly recommend!', author: 'Sarah M., Los Angeles' },
  { quote: 'Professional, fast, and thorough. They restored our home after a major pipe burst and we couldn\'t be happier with the results.', author: 'James T., San Diego' },
  { quote: 'The team was amazing. They arrived quickly, worked efficiently, and even helped us set up a sump pump to prevent future issues.', author: 'Maria L., Tampa' },
  { quote: 'Excellent service from start to finish. The technicians were knowledgeable and treated our home with care. Would call them again if needed.', author: 'Robert K., Oakland' },
];

const homeFAQs = [
  { question: 'How quickly can you respond to a water emergency?', answer: 'We offer 24/7 emergency response and typically arrive within 2-4 hours of your call, depending on your location.' },
  { question: 'Will my insurance cover water damage restoration?', answer: 'Most standard homeowner insurance policies cover sudden, accidental water damage. We work directly with insurance companies and can help verify your coverage.' },
  { question: 'How long does water damage restoration take?', answer: 'Duration varies based on damage extent. Minor damage may take 3-5 days, while major flooding can require 2-3 weeks. We provide a timeline after our initial assessment.' },
  { question: 'Do you offer free inspections?', answer: 'Yes, we offer free inspections and estimates for all water damage restoration services.' },
  { question: 'Can you help with mold after water damage?', answer: 'Yes, we provide comprehensive mold remediation services. Our team assesses for mold growth and provides preventive treatments as part of our restoration process.' },
];

export default function HomePage() {
  const localBusinessSchema = generateLocalBusinessSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://waterdamagechamp.com' },
  ]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-navy-800 py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/50 to-navy-800" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            24/7 Water Damage Restoration — <span className="text-blue-500">Fast Response When You Need It Most</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Professional water damage restoration services throughout California and Florida. 
            Licensed technicians, advanced equipment, and satisfaction guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+18885109436"
              className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>(888) 510-9436</span>
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center space-x-2 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              <span>Get Free Quote</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-navy-900 py-8 border-y border-navy-700">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="font-semibold">Licensed & Insured</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="font-semibold">24/7 Emergency</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <span className="font-semibold">Free Inspections</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="font-semibold">Satisfaction Guaranteed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Our <span className="text-blue-500">Services</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Comprehensive water damage restoration services to protect your home or business.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCards.map((service) => (
              <ServiceCard
                key={service.slug}
                slug={service.slug}
                name={service.name}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/water-damage-restoration" className="text-blue-500 hover:text-blue-400">
              View all services →
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-navy-800">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            How It <span className="text-blue-500">Works</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Our simple three-step process gets your property restored quickly.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-400">
                Contact our 24/7 emergency line at (888) 510-9436. We dispatch technicians immediately.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">We Respond</h3>
              <p className="text-gray-400">
                Our certified technicians arrive quickly, assess damage, and begin extraction.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">We Restore</h3>
              <p className="text-gray-400">
                We dry, clean, and restore your property to its pre-damage condition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            What Our <span className="text-blue-500">Clients Say</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-navy-800 border border-navy-700 rounded-xl p-6">
                <p className="text-gray-300 mb-4">"{testimonial.quote}"</p>
                <p className="text-blue-500 font-semibold">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Restore Your Property?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Don't let water damage worsen. Contact us now for fast, professional restoration services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+18885109436"
              className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Call (888) 510-9436</span>
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center space-x-2 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4">
          <FAQSection faqs={homeFAQs} />
        </div>
      </section>

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}

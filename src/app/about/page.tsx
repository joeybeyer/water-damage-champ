import { Metadata } from 'next';
import { generateLocalBusinessSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'About Us | Water Damage Champ',
  description: 'Learn about Water Damage Champ - your trusted partner for professional water damage restoration services in California and Florida.',
};

export default function AboutPage() {
  const schema = generateLocalBusinessSchema();

  return (
    <>
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-blue-500">Water Damage Champ</span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl">
            We are dedicated to providing fast, professional water damage restoration services 
            to homeowners and businesses throughout California and Florida.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-400 mb-6">
                At Water Damage Champ, we understand the stress and uncertainty that comes with 
                water damage. Our mission is to provide fast, reliable, and professional restoration 
                services that give our clients peace of mind during difficult times.
              </p>
              <p className="text-gray-400">
                We combine advanced equipment with certified expertise to restore properties quickly 
                and thoroughly, minimizing disruption to your life or business.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Why Choose Us</h2>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>24/7 Emergency Response - We're always available when you need us</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>IICRC Certified Technicians - Industry-leading certifications</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Advanced Equipment - Professional-grade drying and extraction</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Insurance Coordination - We work directly with your insurance company</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Satisfaction Guaranteed - We're not done until you're satisfied</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}

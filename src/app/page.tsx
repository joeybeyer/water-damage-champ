import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Water Damage Champ | 24/7 Emergency Water Damage Restoration',
  description: 'Professional water damage restoration services available 24/7. Fast response, licensed technicians, free inspections. Call (888) 510-9436 for emergency service.',
};

// Service categories for the "Company You Can Rely On" section
const serviceCategories = [
  { name: 'Water Damage', image: '/images/Water-damage.jpg', slug: 'water-damage-restoration' },
  { name: 'Mold Damage', image: '/images/Mold-damage.jpg', slug: 'mold-remediation' },
  { name: 'Storm Damage', image: '/images/Water-Damage-Truck.jpeg', slug: 'storm-damage-restoration' },
  { name: 'Fire Damage', image: '/images/contract.jpg', slug: 'fire-damage-restoration' },
];

const steps = [
  { number: 1, title: 'Help Is One Call Away', description: 'Contact us anytime, day or night. Our 24/7 emergency line is always staffed.' },
  { number: 2, title: "We'll Assess and Advise", description: 'Our certified technicians arrive promptly to evaluate damage and explain your options.' },
  { number: 3, title: 'Get Back To Normal', description: 'We handle every step of the restoration process, keeping you informed until your property is fully restored.' },
];

export default function HomePage() {
  const localBusinessSchema = generateLocalBusinessSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://waterdamagechamp.com' },
  ]);

  return (
    <>
      {/* Hero Section with Lead Capture Form */}
      <section className="relative min-h-[700px] flex items-stretch">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Water-damage.jpg"
            alt="Water damage emergency"
            fill
            className="object-cover"
            priority
          />
          {/* Blue gradient overlay on left side */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy-primary/90 via-navy-primary/70 to-navy-primary/30" />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 md:py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
            {/* Left Side - Text Content */}
            <div className="text-white">
              <p className="text-orange-500 font-semibold text-lg mb-2">Your Property, Our Priority</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold italic mb-6 leading-tight">
                Trust Us for Swift and Effective Water Damage Solutions
              </h1>
              <p className="text-gray-200 text-lg mb-8 max-w-xl">
                Professional restoration services you can count on. Available 24/7 for emergencies.
              </p>
              <a
                href="tel:+18885109436"
                className="inline-flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>(888) 510-9436</span>
              </a>
              
              {/* Elite Service Badge */}
              <div className="mt-8">
                <Image
                  src="/images/elite-solid-border-e1582749398141.png"
                  alt="Elite Service"
                  width={120}
                  height={60}
                  className="h-14 w-auto"
                />
              </div>
            </div>

            {/* Right Side - Lead Capture Form */}
            <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 max-w-md mx-auto lg:mr-0">
              <h3 className="text-navy-primary text-2xl font-bold text-center mb-6">
                Schedule Free Inspection
              </h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="fullName" className="block text-gray-700 font-medium mb-1">Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-primary focus:border-navy-primary outline-none"
                    placeholder="John Smith"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-primary focus:border-navy-primary outline-none"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-primary focus:border-navy-primary outline-none"
                    placeholder="(555) 123-4567"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="serviceType" className="block text-gray-700 font-medium mb-1">Service Type</label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-primary focus:border-navy-primary outline-none"
                  >
                    <option value="">Select a service...</option>
                    <option value="water-damage">Water Damage</option>
                    <option value="mold">Mold Remediation</option>
                    <option value="storm">Storm Damage</option>
                    <option value="flood">Flood Damage</option>
                    <option value="fire">Fire Damage</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Property Type</label>
                  <div className="flex space-x-6">
                    <label className="flex items-center">
                      <input type="radio" name="propertyType" value="residential" className="w-4 h-4 text-navy-primary" />
                      <span className="ml-2 text-gray-700">Residential</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="propertyType" value="commercial" className="w-4 h-4 text-navy-primary" />
                      <span className="ml-2 text-gray-700">Commercial</span>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-lg transition-colors text-lg"
                >
                  Schedule Free Inspection
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* "THE COMPANY YOU CAN RELY ON" Section - 4 Service Cards */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-primary mb-4">
              THE COMPANY YOU CAN RELY ON
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Expert restoration services for all types of property damage
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCategories.map((category, index) => (
              <Link 
                key={index}
                href={`/${category.slug}`}
                className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{category.name}</h3>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <span className="text-orange-500 font-semibold group-hover:text-orange-600 transition-colors">
                    Learn More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* "#1 Rated Damage Repair Company" Section */}
      <section className="py-16 md:py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-orange-500 text-white font-bold px-4 py-2 rounded mb-6">
                #1 RATED DAMAGE REPAIR COMPANY
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-primary mb-6">
                Professional Water Damage Restoration You Can Trust
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                When water damage strikes, you need a company that responds fast and delivers results. Water Damage Champ has earned a reputation as the go-to restoration experts in California and Florida.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-orange-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  <span className="text-gray-700">24/7 Emergency Response</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-orange-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  <span className="text-gray-700">Licensed & Insured Technicians</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-orange-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  <span className="text-gray-700">Free Inspections & Estimates</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-orange-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  <span className="text-gray-700">Satisfaction Guaranteed</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-navy-primary text-white rounded-xl p-8 text-center">
              <p className="text-2xl font-bold mb-4">24/7 Water Damage Repair</p>
              <p className="text-3xl font-bold text-orange-500 mb-6">(888) 510-9436</p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-lg transition-colors text-lg">
                Get Free Proposal
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* "WORK WITH PROFESSIONALS" Section - Blue Gradient */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-navy-primary to-navy-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              WORK WITH PROFESSIONALS
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Our proven process ensures your property gets back to normal quickly
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* "Request a Service Today" Section - Dark Background */}
      <section className="py-16 md:py-20 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Request a Service Today
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Don't wait - the longer you wait, the worse the damage becomes. Contact us now for fast, professional restoration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+18885109436"
              className="inline-flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold transition-colors text-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Call (888) 510-9436</span>
            </a>
            <button className="inline-flex items-center space-x-2 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-lg font-bold transition-colors text-lg">
              <span>Schedule Free Inspection</span>
            </button>
          </div>
        </div>
      </section>

      {/* Reliability Section - Background Image with Overlay */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <Image
            src="/images/happy-family.jpg"
            alt="Happy family in home"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy-primary/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          {/* 5 Orange Stars */}
          <div className="flex justify-center space-x-2 mb-6">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            ))}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            THE COMPANY YOU CAN RELY ON
          </h2>
          <p className="text-gray-200 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trusted us with their property restoration needs.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-lg transition-colors text-lg">
            Get Started Today
          </button>
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
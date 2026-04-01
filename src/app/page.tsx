import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '@/lib/schema';
import QuoteForm from '@/components/QuoteForm';
import GroundingBox from '@/components/GroundingBox';
import { groundingBoxes } from '@/data/groundingBoxes';

export const metadata: Metadata = {
  title: 'Water Damage Champ | 24/7 Emergency Water Damage Restoration',
  description: 'Need water damage restoration today? Water Damage Champ delivers 24/7 emergency response across California & Florida — licensed technicians, free inspections. Call (888) 510-9436.',
};

const serviceCategories = [
  { name: 'Water Damage', image: '/images/services/hero-water-damage-restoration.jpg', slug: 'water-damage-restoration' },
  { name: 'Mold Remediation', image: '/images/services/hero-mold-remediation.jpg', slug: 'mold-remediation' },
  { name: 'Odor Removal', image: '/images/services/service-odor-removal.jpg', slug: 'odor-removal' },
  { name: 'Fire Damage', image: '/images/services/service-fire-damage.jpg', slug: 'fire-damage-restoration' },
];

const steps = [
  {
    number: 1,
    title: 'Help Is One Call Away',
    description: "Call us right now, and we'll spring into action, getting you the help you need.",
    image: '/images/services/step-call-emergency.jpg',
  },
  {
    number: 2,
    title: "We'll Assess and Advise",
    description: "We've created a clear process to guide our customers through their property restoration.",
    image: '/images/services/hero-water-damage-restoration.jpg',
  },
  {
    number: 3,
    title: 'Get Back To Normal',
    description: 'We get to work handling all the details, resolving all issues until everything is back the way it was before.',
    image: '/images/services/hero-flooded-basement.jpg',
  },
];

export default function HomePage() {
  const localBusinessSchema = generateLocalBusinessSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://waterdamagechamp.com' },
  ]);

  return (
    <>
      {/* HERO — CRO SOP: Phone above fold, Primary CTA above fold, Trust signal */}
      <section className="relative min-h-[700px] flex items-stretch">
        <div className="absolute inset-0 z-0">
          <Image src="/images/Water-damage.jpg" alt="Water damage emergency restoration" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a237e]/90 via-[#1a237e]/70 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 md:py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
            <div className="text-white">
              <p className="text-[#ff6600] font-semibold text-lg mb-2">Your Property, Our Priority</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold italic mb-6 leading-tight">
                24/7 Water Damage Restoration in California &amp; Florida
              </h1>
              <p className="text-gray-200 text-lg mb-8 max-w-xl">
                We specialize in rapid water damage restoration, offering prompt and reliable solutions to bring your property back to its pre-damage condition.
              </p>
              <a href="tel:+18885109436" className="inline-flex items-center space-x-2 bg-[#ff6600] hover:bg-[#e65100] text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span>(888) 510-9436</span>
              </a>
              <div className="mt-8">
                <Image src="/images/elite-solid-border-e1582749398141.png" alt="Elite Service Badge" width={120} height={60} className="h-14 w-auto" />
              </div>
            </div>

            {/* Lead Capture Form — 3-step progressive QuoteForm */}
            <div className="lg:mr-0">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* GROUNDING BOX — AI Overview targeting for "water damage restoration cost" */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <GroundingBox {...groundingBoxes['water-damage-restoration']!} />
        </div>
      </section>

      {/* SERVICE CARDS — Matching WP: Water, Mold, Odor Removal, Fire */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a237e] mb-4">Water Damage Restoration Services</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Trust us as the dependable choice, where reliability meets unwavering commitment – your go-to partner for all your needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCategories.map((category, index) => (
              <Link key={index} href={`/${category.slug}`} className="group relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <Image src={category.image} alt={category.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-xl font-bold text-white mb-1">{category.name}</h3>
                  <span className="text-[#ff6600] font-semibold text-sm group-hover:text-orange-300 transition-colors">Learn More →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* #1 RATED — Matching WP: Two stacked images LEFT + company copy RIGHT */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <div className="relative h-64 md:h-72 rounded-xl overflow-hidden shadow-lg">
                <Image src="/images/Water-damage.jpg" alt="Water damage restoration" fill className="object-cover" />
              </div>
              <div className="relative h-64 md:h-72 rounded-xl overflow-hidden shadow-lg">
                <Image src="/images/Mold-damage.jpg" alt="Mold damage remediation" fill className="object-cover" />
              </div>
            </div>
            <div>
              <div className="inline-block bg-[#ff6600] text-white font-bold text-sm px-4 py-2 rounded mb-6 uppercase tracking-wide">#1 Rated Damage Repair Company</div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a237e] mb-6">IICRC-Certified Water Damage Technicians</h2>
              <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                At Water Damage Champ, we take pride in being the reliable cornerstone for all your damage repair needs. We bring unwavering commitment and trustworthiness to every service we provide.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                With a dedicated team and a proven track record, we prioritize your satisfaction and peace of mind. From rapid responses to quality solutions, we strive to be the steadfast partner you can count on. Our commitment goes beyond services; our promise to consistently deliver excellence, making us the reliable choice for all your requirements.
              </p>
              <div className="bg-[#1a237e] rounded-xl p-8 text-center">
                <p className="text-xl font-bold text-white mb-3">24/7 Water Damage Repair</p>
                <a href="tel:+18885109436" className="block text-3xl font-bold text-[#ff6600] hover:text-orange-300 transition-colors mb-5">(888) 510-9436</a>
                <Link href="/contact" className="inline-block bg-[#ff6600] hover:bg-[#e65100] text-white font-bold px-8 py-4 rounded-lg transition-colors text-lg">Get Free Proposal</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORK WITH PROFESSIONALS — Matching WP: Alternating image+text with large step numbers */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a237e] mb-4">WORK WITH PROFESSIONALS</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Collaborate with professionals at Water Damage Champ and experience the difference expertise makes – where every project is handled with precision and dedication.
            </p>
          </div>
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={step.number} className={`grid lg:grid-cols-2 gap-8 items-center`}>
                <div className={`relative ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <div className="relative h-72 md:h-80 rounded-xl overflow-hidden shadow-lg">
                    <Image src={step.image} alt={step.title} fill className="object-cover" />
                  </div>
                  <div className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 w-20 h-20 lg:w-24 lg:h-24 bg-[#ff6600] rounded-full flex items-center justify-center shadow-xl">
                    <span className="text-4xl lg:text-5xl font-bold text-white">{step.number}</span>
                  </div>
                </div>
                <div className={`${index % 2 !== 0 ? 'lg:order-1 lg:text-right' : ''}`}>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#1a237e] mb-4">{step.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REQUEST A SERVICE — Matching WP: Truck image background */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <Image src="/images/Water-Damage-Truck.jpeg" alt="Water Damage Champ service truck" fill className="object-cover" />
          <div className="absolute inset-0 bg-[#0a1628]/85" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Request a Service Today</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Don't wait – the longer water sits, the worse the damage becomes. Contact us now for fast, professional restoration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+18885109436" className="inline-flex items-center justify-center space-x-2 bg-[#ff6600] hover:bg-[#e65100] text-white px-8 py-4 rounded-lg font-bold transition-colors text-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              <span>Call (888) 510-9436</span>
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center space-x-2 border-2 border-[#ff6600] text-[#ff6600] hover:bg-[#ff6600] hover:text-white px-8 py-4 rounded-lg font-bold transition-colors text-lg">
              <span>Schedule Free Inspection</span>
            </Link>
          </div>
        </div>
      </section>

      {/* RELIABILITY BANNER — Happy family background w/ overlay */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <Image src="/images/happy-family.jpg" alt="Satisfied customers" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/75" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Trusted Water Damage Restoration Since 2018</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
            Reliability at its core – we're the company dedicated to earning and keeping your trust, delivering consistent excellence in every service we provide.
          </p>
          <Link href="/contact" className="inline-block bg-[#ff6600] hover:bg-[#e65100] text-white font-bold px-8 py-4 rounded-lg transition-colors text-lg">Contact The Experts</Link>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}

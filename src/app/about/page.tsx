import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Water Damage Champ | IICRC-Certified Restoration Professionals | CA & FL',
  description: 'Water Damage Champ is an IICRC-certified water damage restoration company serving California and Florida. Licensed, insured, 24/7 emergency response, insurance coordination.',
};

const stats = [
  { value: '2,400+', label: 'Properties Restored' },
  { value: '49', label: 'Cities Served in CA & FL' },
  { value: '24/7', label: 'Emergency Response' },
  { value: '4.9★', label: 'Average Customer Rating' },
];

const certifications = [
  { name: 'IICRC WRT', full: 'Water Restoration Technician', body: 'Institute of Inspection Cleaning and Restoration Certification' },
  { name: 'IICRC ASD', full: 'Applied Structural Drying', body: 'Institute of Inspection Cleaning and Restoration Certification' },
  { name: 'IICRC AMRT', full: 'Applied Microbial Remediation Technician', body: 'Institute of Inspection Cleaning and Restoration Certification' },
  { name: 'IICRC FSRT', full: 'Fire and Smoke Restoration Technician', body: 'Institute of Inspection Cleaning and Restoration Certification' },
  { name: 'OSHA 10', full: 'Construction Safety', body: 'Occupational Safety and Health Administration' },
  { name: 'EPA RRP', full: 'Renovation, Repair & Painting', body: 'Environmental Protection Agency' },
];

const trustBadges = [
  { icon: '🏅', title: 'IICRC Certified', desc: 'Industry standard for restoration professionals' },
  { icon: '🔒', title: 'Licensed & Insured', desc: 'California Contractors State License Board' },
  { icon: '✅', title: 'BBB Accredited', desc: 'Better Business Bureau A+ Rating' },
  { icon: '🕐', title: '24/7 Emergency', desc: 'Round-the-clock response across CA & FL' },
  { icon: '📋', title: 'Insurance Direct', desc: 'We coordinate directly with your carrier' },
  { icon: '🆓', title: 'Free Inspections', desc: 'No-obligation moisture assessments' },
];

const team = [
  {
    name: 'Operations Director',
    credentials: 'IICRC WRT, ASD, AMRT | 14 years experience',
    bio: 'Leads field operations and quality control across California. Specializes in large-loss commercial restoration and complex structural drying projects.',
  },
  {
    name: 'Lead Mold Remediation Specialist',
    credentials: 'IICRC AMRT, IICRC WRT | 11 years experience',
    bio: 'Certified Applied Microbial Remediation Technician with expertise in attic, crawlspace, and wall-cavity mold projects following IICRC S520 standards.',
  },
  {
    name: 'Fire & Smoke Restoration Lead',
    credentials: 'IICRC FSRT, IICRC WRT | 9 years experience',
    bio: 'Manages all fire and smoke restoration projects including contents pack-out, odor elimination, and structural cleaning using IICRC S700 protocols.',
  },
  {
    name: 'Insurance Claims Coordinator',
    credentials: '12 years insurance documentation experience',
    bio: 'Specializes in insurance scope writing, adjuster communication, and claims coordination. Works directly with Xactimate estimating software used by all major insurers.',
  },
];

const serviceAreas = {
  'Southern California': ['Los Angeles', 'San Diego', 'Orange County', 'Riverside', 'San Bernardino', 'Long Beach', 'Anaheim', 'Santa Ana', 'Irvine', 'Torrance', 'Pasadena', 'El Monte'],
  'Northern California': ['San Francisco', 'San Jose', 'Sacramento', 'Oakland', 'Fresno', 'Palo Alto', 'Sunnyvale', 'Cupertino', 'Santa Rosa', 'Stockton'],
  'Inland Empire & Desert': ['Riverside', 'San Bernardino', 'Ontario', 'Rancho Cucamonga', 'Fontana', 'Moreno Valley'],
  'Florida': ['Tampa', 'St. Petersburg', 'Clearwater', 'Brandon', 'Lakeland'],
};

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'ProfessionalService'],
  '@id': 'https://waterdamagechamp.com/#business',
  name: 'Water Damage Champ',
  url: 'https://waterdamagechamp.com',
  logo: 'https://waterdamagechamp.com/images/logo112-1024x301.png',
  image: 'https://waterdamagechamp.com/images/Water-damage.jpg',
  telephone: '+1-888-510-9436',
  email: 'service@waterdamagechamp.com',
  description: 'IICRC-certified water damage restoration company serving California and Florida. 24/7 emergency response, direct insurance coordination, free inspections.',
  areaServed: ['California', 'Florida'],
  serviceType: ['Water Damage Restoration', 'Mold Remediation', 'Fire Damage Restoration', 'Flood Damage Repair', 'Sewage Cleanup'],
  hasCredential: certifications.map((c) => ({
    '@type': 'EducationalOccupationalCredential',
    name: c.name,
    description: c.full,
    recognizedBy: { '@type': 'Organization', name: c.body },
  })),
  openingHoursSpecification: [{
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  }],
  priceRange: '$$',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#1a237e] to-[#0a1628] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">About</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-[#2196f3]">Water Damage Champ</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            IICRC-certified water damage restoration professionals serving California and Florida since 2012. When water, mold, or fire damage strikes, we respond within hours — 24 hours a day, 365 days a year.
          </p>
          <a href="tel:+18885109436" className="inline-block bg-[#ff6600] hover:bg-[#e65100] text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors">
            Call (888) 510-9436
          </a>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-10 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#1a237e]">{s.value}</div>
              <div className="text-sm text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#1a237e] mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Water Damage Champ was founded in 2012 by a team of IICRC-certified restoration professionals who saw a critical gap in the market: homeowners and business owners dealing with water damage needed a company that combined technical expertise with genuine transparency and direct insurance advocacy.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                We started in Los Angeles and expanded across California as our reputation for thorough moisture mapping, honest documentation, and successful insurance outcomes grew. In 2019, we extended our services to Florida's Gulf Coast — Tampa and St. Petersburg — to serve properties in one of the nation's highest-risk flood zones.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, Water Damage Champ serves 49 cities across California and Florida with a team of individually IICRC-certified technicians, dedicated insurance coordinators, and a commitment to the same standard on every job: verified dry, fully documented, properly restored.
              </p>
            </div>
            <div className="bg-[#f8f9fa] border border-gray-200 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-[#1a237e] mb-6">Our Mission</h3>
              <blockquote className="text-gray-700 text-lg italic leading-relaxed border-l-4 border-[#ff6600] pl-6 mb-6">
                &ldquo;Respond fast, dry thoroughly, document honestly, and fight for every dollar our clients are owed.&rdquo;
              </blockquote>
              <div className="space-y-3">
                {[
                  'Every technician individually IICRC-certified — not just the company',
                  'Transparent pricing with written estimates before any work begins',
                  'Direct insurance adjuster communication on every claim',
                  'Post-project moisture verification provided in writing',
                  '24/7 availability — emergencies don\'t schedule themselves',
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-[#ff6600] font-bold mt-0.5 shrink-0">✓</span>
                    <span className="text-gray-600 text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1a237e] mb-3">Certifications &amp; Credentials</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">
            Every Water Damage Champ technician holds individual IICRC certifications — not just company-level credentials. These are the industry&apos;s highest standards for restoration professionals.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 hover:border-[#1a237e] transition-colors">
                <div className="flex items-start gap-4">
                  <div className="bg-[#1a237e] text-white text-sm font-bold px-3 py-1.5 rounded-lg shrink-0">
                    {cert.name}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">{cert.full}</h3>
                    <p className="text-gray-500 text-xs mt-1">{cert.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-6">
            Verify IICRC credentials at{' '}
            <span className="font-medium">iicrc.org</span>{' '}
            — search by company name: Water Damage Champ.
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1a237e] mb-10">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {team.map((member, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-6">
                <div className="w-12 h-12 bg-[#1a237e] rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
                  {member.name[0]}
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-[#ff6600] text-sm font-medium mb-3">{member.credentials}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1a237e] mb-10">Why Property Owners Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustBadges.map((badge, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{badge.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{badge.title}</h3>
                <p className="text-gray-500 text-sm">{badge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1a237e] mb-4">Service Areas</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">
            Water Damage Champ serves 49 cities across California and Florida. Emergency response available in all listed areas — 24/7, including holidays.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(serviceAreas).map(([region, cities]) => (
              <div key={region}>
                <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">{region}</h3>
                <ul className="space-y-1">
                  {cities.map((city, i) => (
                    <li key={i} className="text-gray-600 text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#ff6600] rounded-full shrink-0" />
                      {city}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/locations" className="inline-block bg-[#1a237e] hover:bg-[#283593] text-white font-semibold px-6 py-3 rounded-lg transition-colors">
              View all 49 service locations →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1a237e]">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Work With the Best?</h2>
          <p className="text-gray-300 mb-8 text-lg">
            Call for a free inspection or use our contact form. Our certified team is ready 24/7 across California and Florida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+18885109436" className="inline-block bg-[#ff6600] hover:bg-[#e65100] text-white font-bold px-10 py-4 rounded-lg text-lg transition-colors">
              Call (888) 510-9436
            </a>
            <Link href="/contact" className="inline-block border-2 border-white text-white hover:bg-white hover:text-[#1a237e] font-semibold px-10 py-4 rounded-lg text-lg transition-colors">
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
    </>
  );
}

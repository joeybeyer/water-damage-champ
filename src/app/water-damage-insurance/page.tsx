import { Metadata } from 'next';
import Link from 'next/link';
import { generateFAQPageSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Water Damage Insurance Claims Guide | California & Florida | Water Damage Champ',
  description: 'Does homeowners insurance cover water damage? Learn what is and isn\'t covered, how to file a claim, what documentation you need, and how Water Damage Champ helps maximize your payout.',
};

const faqs = [
  {
    question: 'Does homeowners insurance cover water damage?',
    answer: 'Standard homeowners insurance covers sudden and accidental water damage — such as a burst pipe, appliance overflow, or roof leak from a storm. It does not typically cover gradual leaks, flooding (which requires separate flood insurance through NFIP or a private carrier), or damage caused by lack of maintenance.',
  },
  {
    question: 'What is the difference between water damage and flood damage for insurance purposes?',
    answer: 'For insurance purposes, "water damage" refers to water that originates inside or enters from above (burst pipes, rain through a broken roof). "Flood damage" is water that enters from the ground up, such as storm surge, overflowing rivers, or surface runoff. Flood damage requires a separate NFIP or private flood insurance policy.',
  },
  {
    question: 'How do I file a water damage insurance claim?',
    answer: 'Step 1: Stop the source of water if safe to do so. Step 2: Document all damage with photos and video before cleanup begins. Step 3: Call your insurance company to open a claim. Step 4: Call Water Damage Champ — our documentation meets insurance adjuster standards. Step 5: Cooperate with the adjuster\'s inspection. Step 6: Review the settlement and negotiate if necessary.',
  },
  {
    question: 'Will my insurance rates go up if I file a water damage claim?',
    answer: 'Possibly. A single water damage claim can increase premiums by 5–20% depending on your carrier and claim history. However, unclaimed damage that leads to mold or structural issues can cost far more out of pocket. Water Damage Champ can help you assess whether the damage justifies a claim before you file.',
  },
  {
    question: 'What documentation do I need for a water damage insurance claim?',
    answer: 'You need: (1) Photos and video of all damaged areas taken before cleanup, (2) A written inventory of damaged personal property with estimated values, (3) Professional moisture readings and drying logs, (4) Contractor damage assessment and repair estimate, (5) Receipts for emergency expenses like hotel stays if the home is uninhabitable. Water Damage Champ provides complete documentation packages.',
  },
  {
    question: 'Does insurance cover mold remediation after water damage?',
    answer: 'Most standard policies cover mold remediation if the mold resulted from a covered water damage event and was addressed promptly. Coverage is often capped at $5,000–$10,000. If mold resulted from long-term neglect or an uncovered event, it will not be covered. Acting within 24–48 hours dramatically improves your coverage position.',
  },
  {
    question: 'Can Water Damage Champ bill my insurance company directly?',
    answer: 'Yes. Water Damage Champ works directly with all major insurance carriers. We provide itemized documentation, moisture logs, drying reports, and reconstruction scopes that meet adjuster standards. We communicate with your insurance company throughout the process to minimize delays and maximize your settlement.',
  },
];

export default function WaterDamageInsurancePage() {
  const faqSchema = generateFAQPageSchema('Water Damage Insurance Claims', faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.waterdamagechamp.com' },
    { name: 'Water Damage Insurance Guide', url: 'https://www.waterdamagechamp.com/water-damage-insurance' },
  ]);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#1a237e] to-[#0a1628] py-16">
        <div className="max-w-4xl mx-auto px-4">
          <nav className="text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Water Damage Insurance Guide</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Water Damage Insurance Claims Guide
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl">
            What your homeowners policy covers, what it doesn&apos;t, and how to file a successful claim in California and Florida.
          </p>
          <a href="tel:+18885109436" className="inline-flex items-center space-x-2 bg-[#ff6600] hover:bg-[#e65100] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            <span>Call (888) 510-9436</span>
          </a>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 prose prose-lg max-w-none">

          <h2 className="text-2xl md:text-3xl font-bold text-[#1a237e] mb-4">Does Homeowners Insurance Cover Water Damage?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            The short answer: it depends on the <em>source</em> of the water. Standard homeowners insurance (HO-3 policies) covers water damage that is <strong>sudden and accidental</strong> — a burst pipe, an overflowing washing machine, or rain entering through a storm-damaged roof. What it does not cover is just as important to understand.
          </p>

          <h3 className="text-xl font-semibold text-[#1a237e] mt-8 mb-3">Covered: Sudden &amp; Accidental Water Damage</h3>
          <ul className="space-y-2 mb-6 text-gray-700">
            <li className="flex items-start"><span className="text-green-600 font-bold mr-2">✓</span> Burst or frozen pipes</li>
            <li className="flex items-start"><span className="text-green-600 font-bold mr-2">✓</span> Appliance malfunctions (washing machine, dishwasher, refrigerator ice maker)</li>
            <li className="flex items-start"><span className="text-green-600 font-bold mr-2">✓</span> Roof leak from storm-related damage</li>
            <li className="flex items-start"><span className="text-green-600 font-bold mr-2">✓</span> Accidental overflow from toilets or sinks</li>
            <li className="flex items-start"><span className="text-green-600 font-bold mr-2">✓</span> Fire sprinkler activation</li>
            <li className="flex items-start"><span className="text-green-600 font-bold mr-2">✓</span> Water damage from extinguishing a fire</li>
          </ul>

          <h3 className="text-xl font-semibold text-[#1a237e] mt-8 mb-3">Not Covered: Exclusions to Know</h3>
          <ul className="space-y-2 mb-6 text-gray-700">
            <li className="flex items-start"><span className="text-red-500 font-bold mr-2">✗</span> Flooding (requires separate NFIP or private flood insurance)</li>
            <li className="flex items-start"><span className="text-red-500 font-bold mr-2">✗</span> Gradual leaks, seepage, or slow drips known to the homeowner</li>
            <li className="flex items-start"><span className="text-red-500 font-bold mr-2">✗</span> Sewer or drain backup (requires a separate endorsement)</li>
            <li className="flex items-start"><span className="text-red-500 font-bold mr-2">✗</span> Groundwater seepage through foundation or basement walls</li>
            <li className="flex items-start"><span className="text-red-500 font-bold mr-2">✗</span> Water damage from a neglected maintenance issue</li>
          </ul>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
            <h3 className="text-lg font-semibold text-[#1a237e] mb-2">California &amp; Florida Note</h3>
            <p className="text-gray-700">
              California properties in flood zones require separate flood insurance. Florida&apos;s hurricane season creates unique water damage scenarios — roof damage from wind is typically covered under dwelling coverage, but storm surge flooding requires flood insurance. Water Damage Champ has documented hundreds of successful insurance claims in both states.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#1a237e] mt-12 mb-4">How to File a Water Damage Insurance Claim</h2>

          <div className="space-y-4 mb-8">
            {[
              { step: '1', title: 'Stop the water source', desc: 'Shut off the main water supply if possible. Do not turn power on in flooded areas.' },
              { step: '2', title: 'Document everything', desc: 'Take extensive photos and video of all damage before cleanup begins. This is your strongest evidence.' },
              { step: '3', title: 'Call Water Damage Champ', desc: 'Our crews respond 24/7 and provide professional documentation that meets insurance standards.' },
              { step: '4', title: 'Report the claim', desc: 'Contact your insurance company to open a claim. Note your claim number and adjuster contact information.' },
              { step: '5', title: 'Meet with the adjuster', desc: 'Walk through the damage with the adjuster. Have your documentation ready. Our team can be present.' },
              { step: '6', title: 'Review the settlement', desc: 'Review the settlement offer carefully. You have the right to negotiate or request a re-inspection.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex gap-4 bg-gray-50 rounded-xl p-5">
                <div className="w-10 h-10 rounded-full bg-[#1a237e] text-white font-bold flex items-center justify-center flex-shrink-0">{step}</div>
                <div>
                  <h4 className="font-semibold text-gray-900">{title}</h4>
                  <p className="text-gray-600 text-sm mt-1">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#1a237e] mt-12 mb-4">Documentation Checklist</h2>
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <ul className="space-y-2 text-gray-700">
              {[
                'Photos and video of all affected areas (before and during cleanup)',
                'Itemized list of damaged personal property with estimated replacement values',
                'Professional moisture readings and daily drying logs',
                'Mold assessment report (if applicable)',
                'Contractor damage assessment with line-item repair estimate',
                'Receipts for emergency expenses (hotel, meals, equipment rental)',
                'Copy of your insurance policy to verify coverage limits',
                'Timeline of events — when damage was discovered, what action was taken',
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <svg className="w-5 h-5 text-[#ff6600] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#1a237e] mt-12 mb-4">How Water Damage Champ Helps With Your Claim</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            We&apos;ve worked with hundreds of homeowners in California and Florida to navigate insurance claims. Our documentation process is designed to meet insurance adjuster standards from the first hour on site. We provide:
          </p>
          <ul className="space-y-2 mb-8 text-gray-700">
            <li className="flex items-start"><span className="text-[#ff6600] font-bold mr-2">→</span> Thermal imaging reports showing hidden moisture</li>
            <li className="flex items-start"><span className="text-[#ff6600] font-bold mr-2">→</span> Daily moisture monitoring logs per IICRC S500 standards</li>
            <li className="flex items-start"><span className="text-[#ff6600] font-bold mr-2">→</span> Photo-documented damage assessment</li>
            <li className="flex items-start"><span className="text-[#ff6600] font-bold mr-2">→</span> Line-item restoration and reconstruction scope</li>
            <li className="flex items-start"><span className="text-[#ff6600] font-bold mr-2">→</span> Direct communication with your adjuster</li>
          </ul>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1a237e] mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1a237e] py-12">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Help With a Water Damage Claim?</h2>
          <p className="text-gray-300 mb-6">Our team responds 24/7 and provides the documentation your insurance company requires.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+18885109436" className="inline-block bg-[#ff6600] hover:bg-[#e65100] text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors">
              Call (888) 510-9436
            </a>
            <Link href="/contact" className="inline-block border-2 border-white text-white hover:bg-white hover:text-[#1a237e] font-bold px-8 py-4 rounded-lg text-lg transition-colors">
              Get Free Inspection
            </Link>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}

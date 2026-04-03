import { Metadata } from 'next';
import Link from 'next/link';
import { generateFAQPageSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Water Damage Restoration Cost Guide 2025 | Prices by Type | Water Damage Champ',
  description: 'How much does water damage restoration cost? Detailed cost breakdown by damage category, room type, and scope. Plus what insurance covers and how to reduce out-of-pocket costs.',
};

const faqs = [
  {
    question: 'How much does water damage restoration cost on average?',
    answer: 'The national average for water damage restoration is $3,500–$8,000 for residential properties. Costs range from $300 for a small clean-water spill to $40,000+ for severe Category 3 (sewage) flooding with structural damage. In California and Florida, costs tend to run 10–20% higher than national averages due to labor rates.',
  },
  {
    question: 'What factors affect the cost of water damage restoration?',
    answer: 'Key cost factors include: (1) Water category — clean water is cheapest, sewage is most expensive; (2) Affected square footage; (3) Materials affected — hardwood flooring and plaster cost more than vinyl and drywall; (4) Time since water damage occurred — delayed response dramatically increases costs due to mold growth; (5) Structural involvement — joist or subfloor damage adds significant cost.',
  },
  {
    question: 'Does insurance cover water damage restoration costs?',
    answer: 'Standard homeowners insurance covers sudden and accidental water damage (burst pipes, appliance overflow, storm roof damage). It does not cover flooding, gradual leaks, or maintenance neglect. Covered claims typically mean you pay your deductible (usually $500–$2,500) and insurance pays the rest. Water Damage Champ coordinates directly with your carrier.',
  },
  {
    question: 'How much does it cost to dry out a flooded basement?',
    answer: 'Drying a flooded basement typically costs $500–$2,500 for water extraction alone. Full restoration including drying, mold prevention, and any structural repair ranges from $2,000–$15,000+ depending on severity. If the basement is finished, add carpet or flooring replacement, drywall repair, and painting to the total.',
  },
  {
    question: 'Is it cheaper to handle water damage myself?',
    answer: 'DIY water damage cleanup is rarely cheaper in the long run. Consumer-grade equipment cannot remove moisture from wall cavities or subfloors. Insufficient drying leads to mold growth within 24–48 hours, turning a $2,000 job into a $15,000+ mold remediation. IICRC-certified professionals use industrial equipment and moisture monitoring to ensure complete drying.',
  },
  {
    question: 'How long does water damage restoration take?',
    answer: 'Structural drying takes 3–5 days for clean water damage, 5–10 days for Category 2/3 damage. Full reconstruction (drywall, flooring, painting) adds 1–3 weeks. The timeline depends on damage severity, materials affected, and how quickly drying begins. Water Damage Champ provides daily progress updates throughout.',
  },
];

export default function WaterDamageCostGuidePage() {
  const faqSchema = generateFAQPageSchema('Water Damage Restoration Costs', faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.waterdamagechamp.com' },
    { name: 'Water Damage Cost Guide', url: 'https://www.waterdamagechamp.com/water-damage-cost-guide' },
  ]);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#1a237e] to-[#0a1628] py-16">
        <div className="max-w-4xl mx-auto px-4">
          <nav className="text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Cost Guide</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Water Damage Restoration Cost Guide 2025
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl">
            Detailed cost breakdowns by damage type, room, and material — plus what insurance covers and how to keep costs down.
          </p>
          <a href="tel:+18885109436" className="inline-flex items-center space-x-2 bg-[#ff6600] hover:bg-[#e65100] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            <span>Free Estimate — (888) 510-9436</span>
          </a>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">

          <h2 className="text-2xl md:text-3xl font-bold text-[#1a237e] mb-6">Cost by Water Damage Category</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            The IICRC classifies water damage into three categories based on contamination level. Category is the single biggest factor in restoration cost.
          </p>
          <div className="overflow-x-auto mb-10">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#1a237e] text-white">
                  <th className="px-4 py-3 text-left">Category</th>
                  <th className="px-4 py-3 text-left">Source</th>
                  <th className="px-4 py-3 text-left">Avg. Cost (1,000 sq ft)</th>
                  <th className="px-4 py-3 text-left">Dry Time</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 bg-green-50">
                  <td className="px-4 py-3 font-medium">Category 1 — Clean Water</td>
                  <td className="px-4 py-3">Burst pipes, rain, supply lines</td>
                  <td className="px-4 py-3">$1,500 – $4,000</td>
                  <td className="px-4 py-3">3–5 days</td>
                </tr>
                <tr className="border-b border-gray-200 bg-yellow-50">
                  <td className="px-4 py-3 font-medium">Category 2 — Gray Water</td>
                  <td className="px-4 py-3">Dishwasher, washing machine, toilet overflow (no feces)</td>
                  <td className="px-4 py-3">$4,000 – $10,000</td>
                  <td className="px-4 py-3">4–7 days</td>
                </tr>
                <tr className="border-b border-gray-200 bg-red-50">
                  <td className="px-4 py-3 font-medium">Category 3 — Black Water</td>
                  <td className="px-4 py-3">Sewage backup, floodwater, rising groundwater</td>
                  <td className="px-4 py-3">$7,500 – $25,000+</td>
                  <td className="px-4 py-3">5–10 days</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#1a237e] mt-12 mb-6">Cost by Damage Class</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            IICRC also classifies water damage by how much structural material has absorbed water (Class 1–4). Class determines how much equipment is needed and how long drying takes.
          </p>
          <div className="overflow-x-auto mb-10">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#1a237e] text-white">
                  <th className="px-4 py-3 text-left">Class</th>
                  <th className="px-4 py-3 text-left">Description</th>
                  <th className="px-4 py-3 text-left">Typical Cost Range</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-3 font-medium">Class 1 — Minimal</td>
                  <td className="px-4 py-3">Small area, low porosity materials</td>
                  <td className="px-4 py-3">$300 – $1,500</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="px-4 py-3 font-medium">Class 2 — Significant</td>
                  <td className="px-4 py-3">Entire room, walls wet to 24 inches</td>
                  <td className="px-4 py-3">$1,500 – $5,000</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-3 font-medium">Class 3 — Extensive</td>
                  <td className="px-4 py-3">Ceiling, walls, floors, insulation all saturated</td>
                  <td className="px-4 py-3">$5,000 – $20,000</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="px-4 py-3 font-medium">Class 4 — Specialty</td>
                  <td className="px-4 py-3">Deep wet in hardwood, concrete, or plaster</td>
                  <td className="px-4 py-3">$10,000 – $40,000+</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#1a237e] mt-12 mb-6">Cost by Room</h2>
          <div className="overflow-x-auto mb-10">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#1a237e] text-white">
                  <th className="px-4 py-3 text-left">Room</th>
                  <th className="px-4 py-3 text-left">Typical Restoration Cost</th>
                  <th className="px-4 py-3 text-left">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-3 font-medium">Bathroom</td>
                  <td className="px-4 py-3">$700 – $3,000</td>
                  <td className="px-4 py-3">Tile dries faster than drywall cavities</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="px-4 py-3 font-medium">Kitchen</td>
                  <td className="px-4 py-3">$1,000 – $5,000</td>
                  <td className="px-4 py-3">Cabinets often must be removed for drying</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-3 font-medium">Bedroom</td>
                  <td className="px-4 py-3">$500 – $3,500</td>
                  <td className="px-4 py-3">Carpet and pad usually require replacement</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="px-4 py-3 font-medium">Living Room</td>
                  <td className="px-4 py-3">$1,000 – $6,000</td>
                  <td className="px-4 py-3">Hardwood flooring adds significant cost</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-3 font-medium">Basement (unfinished)</td>
                  <td className="px-4 py-3">$500 – $2,500</td>
                  <td className="px-4 py-3">Concrete dries slowly but is salvageable</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="px-4 py-3 font-medium">Basement (finished)</td>
                  <td className="px-4 py-3">$3,000 – $15,000+</td>
                  <td className="px-4 py-3">Drywall, flooring, and contents multiply costs</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-3 font-medium">Crawlspace</td>
                  <td className="px-4 py-3">$500 – $4,000</td>
                  <td className="px-4 py-3">Often requires encapsulation after drying</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#1a237e] mt-12 mb-4">Key Cost Factors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {[
              { title: 'Response Time', desc: 'Every hour of delay increases damage. Water that reaches wall cavities within 1 hour can cause $5,000+ in additional structural damage.' },
              { title: 'Flooring Type', desc: 'Hardwood flooring ($8–$25/sq ft to replace) costs far more than carpet ($2–$8/sq ft) or vinyl ($3–$10/sq ft).' },
              { title: 'Mold Presence', desc: 'If mold is found, add $500–$6,000 for remediation depending on extent. Acting within 24 hours prevents most mold growth.' },
              { title: 'Structural Damage', desc: 'Compromised joists, subfloors, or load-bearing walls add $2,000–$15,000 per structural element repaired.' },
              { title: 'Square Footage', desc: 'Most contractors price by square foot. Costs drop per-foot as the affected area grows due to equipment efficiency.' },
              { title: 'Contents Damage', desc: 'Furniture, electronics, and personal property replacement is separate from structural restoration. Document everything for insurance.' },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                <h4 className="font-semibold text-[#1a237e] mb-2">{title}</h4>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#1a237e] text-white rounded-xl p-6 mb-10">
            <h3 className="text-xl font-bold mb-3">Insurance vs. Out-of-Pocket</h3>
            <p className="text-gray-300 mb-4">
              If your damage is from a covered event (burst pipe, appliance failure, storm), your typical out-of-pocket cost is your deductible — usually $500–$2,500. For uncovered events like flooding or neglected maintenance, full costs apply.
            </p>
            <Link href="/water-damage-insurance" className="inline-block bg-[#ff6600] hover:bg-[#e65100] text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors">
              Read our insurance claims guide →
            </Link>
          </div>

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
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Get an Accurate Estimate</h2>
          <p className="text-gray-300 mb-6">Every property is different. Call for a free on-site assessment and written estimate.</p>
          <a href="tel:+18885109436" className="inline-block bg-[#ff6600] hover:bg-[#e65100] text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors">
            Call (888) 510-9436 — Free Inspection
          </a>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}

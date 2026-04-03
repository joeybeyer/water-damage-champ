import { Metadata } from 'next';
import Link from 'next/link';
import { generateFAQPageSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Water Damage Prevention Guide | Protect Your Home | Water Damage Champ',
  description: 'Seasonal water damage prevention checklists, common causes of water damage, early warning signs, and maintenance tips for plumbing, roof, and foundation systems.',
};

const faqs = [
  {
    question: 'What are the most common causes of water damage in homes?',
    answer: 'The five most common causes are: (1) Burst or leaking pipes — especially in attics, under sinks, and behind walls; (2) Appliance failures — washing machines, dishwashers, and water heaters are the top culprits; (3) Roof leaks — missing shingles, failed flashing, or clogged gutters; (4) HVAC drain line clogs — AC condensate lines back up and overflow; (5) Foundation or basement seepage — especially in older homes without waterproofing.',
  },
  {
    question: 'How can I tell if I have a hidden water leak?',
    answer: 'Warning signs of a hidden leak include: unexplained increases in your water bill, water stains or discoloration on ceilings or walls, musty odors (especially in bathrooms and basements), warping or buckling wood floors, soft spots in drywall or ceilings, and the sound of running water when no fixtures are in use. Thermal imaging cameras can detect hidden moisture — Water Damage Champ offers free inspections.',
  },
  {
    question: 'How do I prevent frozen pipes in California or Florida?',
    answer: 'While freeze events are rare in California and Florida, they do occur in higher elevation areas and during unusual cold snaps. Prevention includes: insulating pipes in unheated spaces (attics, garages, crawlspaces), keeping cabinet doors open under sinks during cold nights, maintaining indoor temperature above 55°F even when away, and knowing where your main shutoff valve is located.',
  },
  {
    question: 'How often should I inspect my home for water damage risks?',
    answer: 'Inspect your home twice a year — spring and fall. Check gutters, downspouts, roof condition, appliance supply lines, water heater, HVAC drain lines, and all visible plumbing. In California, inspect before and after rainy season (October–April). In Florida, inspect before hurricane season (June–November).',
  },
  {
    question: 'What is the most effective water damage prevention investment?',
    answer: 'The highest ROI prevention measures are: (1) Whole-home water leak detector/shutoff system (e.g., Flo by Moen, Phyn) — these can pay for themselves with a single prevented incident; (2) Water heater replacement before failure (average lifespan 8–12 years); (3) Washing machine supply hose replacement every 5 years (braided stainless hoses are best); (4) Annual roof inspection; (5) Sump pump battery backup installation.',
  },
  {
    question: 'Does a crawlspace encapsulation prevent water damage?',
    answer: 'Yes. Crawlspace encapsulation creates a sealed vapor barrier that prevents ground moisture from entering the structure. It reduces humidity levels throughout the home, prevents wood rot and mold in floor joists, and can improve HVAC efficiency. Water Damage Champ offers complete crawlspace encapsulation as part of our water damage prevention services.',
  },
];

const seasonalChecks = {
  spring: [
    'Inspect roof for winter damage — missing shingles, cracked flashing',
    'Clean gutters and downspouts — remove winter debris',
    'Check downspout extensions direct water 6+ feet from foundation',
    'Inspect window and door seals for gaps or cracks',
    'Test sump pump — pour water into pit to verify it activates',
    'Check washing machine and dishwasher supply hoses for cracks or bulging',
    'Inspect water heater for rust, corrosion, or moisture around base',
    'Clear HVAC condensate drain line with diluted bleach',
  ],
  summer: [
    'Inspect AC drain pan and condensate line monthly during peak season',
    'Check sprinkler system for proper drainage away from foundation',
    'Monitor basement and crawlspace humidity — should be below 60%',
    'Inspect crawlspace for standing water or moisture after heavy rain',
    'Check caulking around tubs, showers, and sinks',
  ],
  fall: [
    'Clean gutters after leaves fall — clogged gutters cause roof deck damage',
    'Disconnect and drain garden hoses before temperatures drop',
    'Insulate exposed pipes in garages, attics, and exterior walls',
    'Test smoke and water alarms — replace batteries',
    'Locate and test main water shutoff valve — ensure it operates smoothly',
    'Inspect roof and chimney flashing before rainy season',
    'Check sump pump and install battery backup before storm season',
  ],
  winter: [
    'During freeze events: open cabinet doors under sinks on exterior walls',
    'Keep home temperature above 55°F even when away',
    'Know location of main water shutoff for freeze emergencies',
    'Check attic insulation — ice dams can form where heat escapes',
    'Monitor pipes in unconditioned spaces during cold spells',
  ],
};

export default function WaterDamagePreventionPage() {
  const faqSchema = generateFAQPageSchema('Water Damage Prevention', faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.waterdamagechamp.com' },
    { name: 'Water Damage Prevention Guide', url: 'https://www.waterdamagechamp.com/water-damage-prevention' },
  ]);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#1a237e] to-[#0a1628] py-16">
        <div className="max-w-4xl mx-auto px-4">
          <nav className="text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Water Damage Prevention Guide</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Water Damage Prevention Guide
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl">
            Seasonal checklists, early warning signs, and maintenance tips to protect your California or Florida home from water damage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:+18885109436" className="inline-flex items-center justify-center space-x-2 bg-[#ff6600] hover:bg-[#e65100] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              <span>Emergency: (888) 510-9436</span>
            </a>
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">

          <h2 className="text-2xl md:text-3xl font-bold text-[#1a237e] mb-6">Early Warning Signs of Water Damage</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Catching water damage early is the difference between a $500 repair and a $15,000 restoration. Know what to look for in each area of your home.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {[
              {
                area: 'Ceilings & Walls',
                signs: ['Yellow or brown water stains', 'Paint bubbling or peeling', 'Soft spots or sagging', 'Visible mold or dark spots'],
              },
              {
                area: 'Floors',
                signs: ['Warping or buckling hardwood', 'Soft spots under carpet', 'Tile grout cracking or shifting', 'Musty odor from flooring'],
              },
              {
                area: 'Basement & Crawlspace',
                signs: ['Efflorescence (white mineral deposits on concrete)', 'Standing water or puddles', 'Musty odor', 'Rust stains on walls or floor'],
              },
              {
                area: 'Bathroom',
                signs: ['Caulk cracking around tub or shower', 'Loose or soft floor tiles', 'Cabinet wood swelling under sink', 'Toilet base rocking or soft flooring nearby'],
              },
              {
                area: 'Kitchen',
                signs: ['Cabinet swelling under sink', 'Stains inside cabinets near dishwasher', 'Water marks on flooring near refrigerator', 'Soft spot in floor near sink'],
              },
              {
                area: 'Utility Areas',
                signs: ['Rust or corrosion around water heater', 'Mineral deposits around supply line connections', 'HVAC drain pan has standing water', 'Washing machine hoses showing wear'],
              },
            ].map(({ area, signs }) => (
              <div key={area} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                <h4 className="font-semibold text-[#1a237e] mb-3">{area}</h4>
                <ul className="space-y-1">
                  {signs.map((sign, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-600">
                      <span className="text-[#ff6600] mr-2">•</span>{sign}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Seasonal Checklists */}
          <h2 className="text-2xl md:text-3xl font-bold text-[#1a237e] mt-12 mb-6">Seasonal Prevention Checklist</h2>

          {(Object.entries(seasonalChecks) as [string, string[]][]).map(([season, items]) => (
            <div key={season} className="mb-8">
              <h3 className="text-xl font-semibold text-[#1a237e] capitalize mb-4 flex items-center gap-2">
                <span className="text-2xl">
                  {season === 'spring' ? '🌧️' : season === 'summer' ? '☀️' : season === 'fall' ? '🍂' : '❄️'}
                </span>
                {season.charAt(0).toUpperCase() + season.slice(1)} Checklist
              </h3>
              <ul className="space-y-2 bg-gray-50 rounded-xl p-5">
                {items.map((item, i) => (
                  <li key={i} className="flex items-start text-sm text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* By System */}
          <h2 className="text-2xl md:text-3xl font-bold text-[#1a237e] mt-12 mb-6">Maintenance by System</h2>

          <div className="space-y-6 mb-10">
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <div className="bg-[#1a237e] text-white px-5 py-3 font-semibold">Plumbing System</div>
              <div className="p-5 space-y-2 text-sm text-gray-700">
                <p><strong>Water heater:</strong> Flush annually to remove sediment. Replace anode rod every 3–5 years. Replace the unit after 10–12 years, before it fails.</p>
                <p><strong>Supply hoses:</strong> Replace rubber washing machine hoses with braided stainless every 5 years. Check dishwasher and refrigerator connections annually.</p>
                <p><strong>Shutoff valves:</strong> Exercise all shutoff valves annually to prevent them from seizing. Know the location of your main shutoff.</p>
                <p><strong>Toilet internals:</strong> Replace flapper, fill valve, and supply line every 5–7 years. A running toilet is often a sign of imminent failure.</p>
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <div className="bg-[#1a237e] text-white px-5 py-3 font-semibold">Roof &amp; Gutters</div>
              <div className="p-5 space-y-2 text-sm text-gray-700">
                <p><strong>Roof inspection:</strong> Annual professional inspection. In California, inspect after winter rains. In Florida, inspect after hurricane season.</p>
                <p><strong>Gutters:</strong> Clean twice yearly (spring and fall). Install gutter guards to reduce debris. Check that gutters slope properly — ¼ inch per 10 feet toward downspout.</p>
                <p><strong>Downspouts:</strong> Extend 6+ feet from foundation. Consider underground drainage if grading is poor.</p>
                <p><strong>Flashings:</strong> Inspect all roof-wall intersections, chimney flashings, and skylights annually. Re-seal as needed.</p>
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <div className="bg-[#1a237e] text-white px-5 py-3 font-semibold">Foundation &amp; Basement</div>
              <div className="p-5 space-y-2 text-sm text-gray-700">
                <p><strong>Grading:</strong> Soil should slope away from foundation — 1 inch drop per foot for the first 6 feet. Regrade if soil has settled toward the house.</p>
                <p><strong>Window wells:</strong> Install covers on below-grade window wells. Clean out leaves and debris that block drainage.</p>
                <p><strong>Sump pump:</strong> Test monthly by pouring water into pit. Replace the pump every 7–10 years. Install a battery backup system.</p>
                <p><strong>Crawlspace:</strong> Inspect annually for moisture, standing water, and wood rot. Consider <Link href="/crawlspace-encapsulation" className="text-[#1a237e] hover:text-[#ff6600] font-medium">crawlspace encapsulation</Link> for chronic moisture issues.</p>
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <div className="bg-[#1a237e] text-white px-5 py-3 font-semibold">HVAC System</div>
              <div className="p-5 space-y-2 text-sm text-gray-700">
                <p><strong>Condensate drain:</strong> Flush AC condensate drain line monthly with diluted bleach or vinegar during cooling season. Clogged lines overflow into ceilings.</p>
                <p><strong>Drain pan:</strong> Inspect secondary drain pan under air handler monthly. Install a float switch that shuts off the system if the pan fills.</p>
                <p><strong>Coil leaks:</strong> Annual professional inspection catches refrigerant leaks and coil corrosion before they cause water damage.</p>
              </div>
            </div>
          </div>

          {/* Smart Technology */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-10">
            <h3 className="text-xl font-bold text-[#1a237e] mb-3">Smart Home Water Protection</h3>
            <p className="text-gray-700 mb-4">
              Modern leak detection technology can automatically shut off your water supply within seconds of detecting a leak — before water damages walls, flooring, or structural components.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start"><span className="text-[#ff6600] mr-2">→</span> <strong>Whole-home shutoff systems</strong> (Flo by Moen, Phyn, LeakSmart) — monitor flow 24/7 and shut off automatically</li>
              <li className="flex items-start"><span className="text-[#ff6600] mr-2">→</span> <strong>Point-of-use sensors</strong> ($15–$50 each) under sinks, behind appliances, and near water heater</li>
              <li className="flex items-start"><span className="text-[#ff6600] mr-2">→</span> <strong>Smart water heaters</strong> with leak detection — alert your phone and shut off before tank failure</li>
              <li className="flex items-start"><span className="text-[#ff6600] mr-2">→</span> <strong>Insurance discounts</strong> — many carriers offer 5–15% premium reduction for leak detection systems</li>
            </ul>
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

      {/* Related Links */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl font-bold text-[#1a237e] mb-4">Related Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/water-damage-insurance" className="bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-[#1a237e] hover:shadow-md transition-all">
              <h4 className="font-semibold text-[#1a237e] mb-1">Insurance Claims Guide</h4>
              <p className="text-gray-500 text-sm">What your policy covers and how to file</p>
            </Link>
            <Link href="/water-damage-cost-guide" className="bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-[#1a237e] hover:shadow-md transition-all">
              <h4 className="font-semibold text-[#1a237e] mb-1">Restoration Cost Guide</h4>
              <p className="text-gray-500 text-sm">Costs by category, class, and room type</p>
            </Link>
            <Link href="/crawlspace-encapsulation" className="bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-[#1a237e] hover:shadow-md transition-all">
              <h4 className="font-semibold text-[#1a237e] mb-1">Crawlspace Encapsulation</h4>
              <p className="text-gray-500 text-sm">Prevent ground moisture from entering your home</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1a237e] py-12">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Already Dealing With Water Damage?</h2>
          <p className="text-gray-300 mb-6">Prevention is ideal — but fast response is critical. Our crews are available 24/7.</p>
          <a href="tel:+18885109436" className="inline-block bg-[#ff6600] hover:bg-[#e65100] text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors">
            Call (888) 510-9436 — 24/7 Emergency Response
          </a>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}

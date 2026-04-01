export interface GroundingBoxData {
  query: string;
  answer: string;
  bullets: string[];
  source: string;
}

const SOURCE = 'Water Damage Champ — based on 2024–2025 California and Florida restoration projects';

export const groundingBoxes: Record<string, GroundingBoxData> = {
  'water-damage-restoration': {
    query: 'How much does water damage restoration cost?',
    answer: 'Water damage restoration typically costs $1,300–$5,600 in California, depending on damage severity and affected area.',
    bullets: [
      'Category 1 (clean water — burst pipe, appliance leak): $1,300–$3,000',
      'Category 2 (grey water — dishwasher, washing machine): $2,500–$5,000',
      'Category 3 (black water — sewage, flooding): $4,000–$8,000+',
      'Standard homeowners insurance covers sudden, accidental water damage',
      'Mold begins growing within 48 hours — fast response is critical',
      'Free inspection — call (888) 510-9436 for a written estimate',
    ],
    source: SOURCE,
  },
  'mold-remediation': {
    query: 'How much does mold remediation cost?',
    answer: 'Professional mold remediation costs $1,500–$9,000+ in California depending on the size and location of the infestation.',
    bullets: [
      'Bathroom surface mold: $500–$1,500',
      'Basement or crawlspace mold: $2,000–$8,000',
      'Wall cavity mold (structural): $2,000–$6,000+',
      'Attic mold: $3,000–$10,000+ due to access difficulty',
      'Insurance covers mold when it results from a covered water damage event',
      'IICRC S520 protocol includes containment, removal, treatment, and clearance testing',
    ],
    source: SOURCE,
  },
  'fire-damage-restoration': {
    query: 'How long does fire damage restoration take?',
    answer: 'Fire damage restoration takes 1–4 weeks for minor smoke damage and 2–6 months for major structural fires in California.',
    bullets: [
      'Emergency board-up and water extraction begin within 24 hours',
      'Minor smoke damage (one room): 1–4 weeks total',
      'Moderate structural damage: 6–12 weeks',
      'Major fire with structural loss: 3–8 months',
      'Homeowners insurance covers fire, smoke, and firefighting water damage',
      'Additional Living Expenses (ALE) coverage pays for temporary housing during restoration',
    ],
    source: SOURCE,
  },
  'flood-damage-repair': {
    query: 'What should you do immediately after a house flood?',
    answer: 'Cut power to flooded areas, stop the water source, document damage with photos, then call a restoration professional within the first hour.',
    bullets: [
      '1. Turn off electricity to flooded areas at the breaker panel — electrocution risk',
      '2. Stop the water source (main shut-off, angle stop, or appliance line)',
      '3. Document all damage with photos and video before any cleanup',
      '4. Move valuables to dry areas; do not run the HVAC system',
      '5. Call Water Damage Champ at (888) 510-9436 — 24/7 emergency response',
      'Mold begins in 48–72 hours — extraction and drying must start within the first day',
    ],
    source: SOURCE,
  },
  'sewage-cleanup': {
    query: 'Is sewage backup cleanup safe to do yourself?',
    answer: 'No. Sewage is a Category 3 biohazard containing E. coli, Salmonella, and Hepatitis A — professional remediation with full PPE is required.',
    bullets: [
      'Do NOT enter the sewage-affected area without proper PPE',
      'Turn off HVAC immediately to prevent spreading contaminants',
      'Cut power to affected areas before entering',
      'Professional cleanup includes containment, extraction, disinfection, and air quality testing',
      'All porous materials (carpet, drywall below flood line) must be removed and disposed',
      'Average sewage cleanup cost: $3,000–$10,000 depending on area and severity',
    ],
    source: SOURCE,
  },
  'emergency-water-damage': {
    query: 'What to do first for emergency water damage?',
    answer: 'Cut power to flooded areas, stop the water source, then call (888) 510-9436 — Water Damage Champ responds across California within 2–4 hours, 24/7.',
    bullets: [
      'Minute 1: Turn off electricity to affected areas at the breaker panel',
      'Minute 2: Identify and stop the water source if safe',
      'Minute 5: Move electronics, documents, and valuables to dry areas',
      'Minute 10: Photograph and video all visible damage for insurance',
      'Minute 15: Call (888) 510-9436 — 24/7 emergency dispatch',
      'Do NOT run your HVAC system — it spreads moisture and contaminants',
    ],
    source: SOURCE,
  },
  'water-extraction': {
    query: 'How long does professional water extraction take?',
    answer: 'Professional water extraction removes standing water in 1–4 hours. Structural drying takes an additional 3–7 days with commercial equipment.',
    bullets: [
      'Truck-mounted extractors remove thousands of gallons per hour',
      'Standing water removal typically complete in 1–4 hours',
      'Residual moisture in walls, floors, and subfloors requires 3–7 days of commercial drying',
      'Daily moisture readings verify drying progress — equipment adjusted as needed',
      'Consumer wet/dry vacuums are insufficient for wall/subfloor moisture extraction',
      'Early extraction is the single biggest factor in preventing mold growth',
    ],
    source: SOURCE,
  },
  'commercial-water-damage': {
    query: 'How is commercial water damage restoration different from residential?',
    answer: 'Commercial water damage restoration involves larger equipment, faster timelines, complex insurance coordination, and strict OSHA compliance to minimize business interruption.',
    bullets: [
      'Large-loss commercial restoration requires industrial drying systems, not residential equipment',
      'Priority is minimizing business downtime — many commercial projects run 24/7 until complete',
      'OSHA-compliant safety protocols for occupied buildings and employee protection',
      'Commercial policies require detailed scope documentation — Water Damage Champ provides this',
      'Services include inventory documentation, contents pack-out, and temporary workspace solutions',
      'California commercial water damage costs: $5,000–$100,000+ depending on facility size',
    ],
    source: SOURCE,
  },
  'flooded-basement': {
    query: 'How do you clean up a flooded basement safely?',
    answer: 'Confirm no electrical hazards first, identify the water source, extract water quickly, remove saturated materials, then dry with commercial equipment within 48 hours.',
    bullets: [
      'Turn off electricity to the basement before entering — standing water and live circuits are fatal',
      'Identify water source: clean (pipe), grey (appliance), or black (sewage/external flooding)',
      'All porous materials submerged more than a few hours should be removed and discarded',
      'Consumer fans and dehumidifiers extend drying to 2–4 weeks — too slow to prevent mold',
      'Commercial drying equipment achieves safe moisture levels in 3–7 days',
      'Average flooded basement restoration: $2,500–$8,000 depending on size and water category',
    ],
    source: SOURCE,
  },
  'frozen-burst-pipes': {
    query: 'What should you do if a pipe bursts from freezing?',
    answer: 'Shut off the main water supply immediately, open faucets to drain remaining water, then call a plumber and a water damage restoration company within the hour.',
    bullets: [
      'Shut off the main water supply at the main shut-off valve immediately',
      'Open cold-water faucets throughout the house to drain the system',
      'Do NOT use open flame or electric heat guns near frozen pipes',
      'Document all damage with photos before any cleanup — insurance documentation',
      'Water damage from burst pipes is covered under standard homeowners insurance',
      'Call (888) 510-9436 for emergency extraction and drying — 24/7 response',
    ],
    source: SOURCE,
  },
  'storm-damage-restoration': {
    query: 'Does homeowners insurance cover storm water damage?',
    answer: 'Yes — storm-driven rain that enters through wind damage to your roof or windows is covered. External flooding from storm surge or runoff requires separate flood insurance.',
    bullets: [
      'Storm-driven rain entering through wind-damaged roof or windows: COVERED under HO-3',
      'Flash flooding, storm surge, or street flooding entering the home: requires FLOOD insurance',
      'Emergency tarping and board-up after storm damage: covered as mitigation expense',
      'Call your insurer within 24 hours and document all damage before cleanup',
      'Water Damage Champ provides complete storm damage documentation for insurance claims',
      'California storm season (Nov–March) is peak demand — call early for fastest response',
    ],
    source: SOURCE,
  },
  'sump-pump-cleanup': {
    query: 'What happens when a sump pump fails and the basement floods?',
    answer: 'A sump pump failure causes water to accumulate in the basement. Standard homeowners insurance typically excludes this — a water backup endorsement is required for coverage.',
    bullets: [
      'Sump pump failures typically result from power outages, mechanical failure, or overwhelm during heavy rain',
      'Most standard HO-3 policies EXCLUDE sump pump overflow — add a water backup endorsement',
      'Water backup endorsement cost: $50–$150/year; coverage limit: $5,000–$25,000',
      'Backup power (battery backup or generator) is the best sump pump failure prevention',
      'Average sump pump failure cleanup: $2,000–$7,000 depending on water depth and duration',
      'Professional extraction and drying must begin within 24 hours to prevent mold',
    ],
    source: SOURCE,
  },
  'crawlspace-encapsulation': {
    query: 'What does crawlspace encapsulation cost and what does it prevent?',
    answer: 'Crawlspace encapsulation costs $3,000–$8,000 in California and prevents moisture damage, mold, wood rot, and pest intrusion that originate in unconditioned crawlspaces.',
    bullets: [
      'Encapsulation installs a heavy-duty vapor barrier on floors, walls, and piers',
      'Eliminates moisture vapor that rises from soil and causes subfloor mold and wood rot',
      'Reduces indoor humidity levels by 10–15%, lowering HVAC costs and mold risk throughout the home',
      'Typical cost range: $3,000–$8,000 depending on crawlspace size and condition',
      'Adds a conditioned crawlspace that can be used for storage after encapsulation',
      'California homes on pier-and-beam foundations are particularly vulnerable to crawlspace moisture',
    ],
    source: SOURCE,
  },
  'ceiling-wall-water-damage': {
    query: 'What causes water stains on walls and ceilings?',
    answer: 'Water stains on walls and ceilings are caused by roof leaks, plumbing leaks from the floor above, HVAC condensate overflow, or exterior water intrusion through siding or windows.',
    bullets: [
      'Ceiling stains directly below a bathroom: plumbing leak from toilet, shower, or supply line above',
      'Ceiling stains in a top-floor room: roof leak — check flashing, shingles, and attic insulation',
      'Wall stains near windows: failed window seals, missing caulk, or siding water intrusion',
      'Stains that appear and fade cyclically indicate an active, ongoing leak',
      'Never paint over water stains without finding and fixing the source first',
      'Professional moisture mapping identifies the leak source precisely — call (888) 510-9436',
    ],
    source: SOURCE,
  },
  'odor-removal': {
    query: 'How do professionals eliminate water damage and mold odors?',
    answer: 'Professional odor removal uses ozone generators, hydroxyl machines, and thermal fogging to neutralize odor compounds at the molecular level — not just mask them.',
    bullets: [
      'Ozone treatment breaks down odor molecules (VOCs, MVOCs) at the molecular level',
      'Hydroxyl generators are safe to use in occupied spaces unlike ozone',
      'Thermal fogging penetrates porous surfaces at the same depth as odor-causing compounds',
      'HEPA air scrubbers with activated carbon filters remove airborne particles and gases',
      'Consumer air fresheners and sprays do not eliminate odors — they mask them temporarily',
      'Odor removal is included in Water Damage Champ restoration projects at no additional charge',
    ],
    source: SOURCE,
  },
};

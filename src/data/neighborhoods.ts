export interface Neighborhood {
  slug: string;
  name: string;
  citySlug: string;
  cityName: string;
  state: string;
  zipCodes: string;
  landmarks: string[];
  neighborSlugs: string[];
  climate: string;
  housingStock: string;
  commonIssues: string[];
  content: string;
  faqs: { question: string; answer: string }[];
}

export const neighborhoods: Neighborhood[] = [
  // ═══════════════════════════════════════
  // LOS ANGELES NEIGHBORHOODS
  // ═══════════════════════════════════════
  {
    slug: "hollywood",
    name: "Hollywood",
    citySlug: "los-angeles",
    cityName: "Los Angeles",
    state: "CA",
    zipCodes: "90028, 90038, 90068",
    landmarks: ["Hollywood Sign", "Dolby Theatre", "Hollywood Walk of Fame", "Griffith Observatory", "Hollywood Bowl"],
    neighborSlugs: ["west-hollywood", "silver-lake", "los-feliz"],
    climate: "Mediterranean climate with dry summers and occasional heavy winter rains that overwhelm aging drainage infrastructure.",
    housingStock: "Mix of 1920s-1960s apartment buildings, bungalow courts, and mid-century multi-family units. Many buildings have original galvanized and copper plumbing nearing end of useful life.",
    commonIssues: ["Aging galvanized pipes corroding from inside", "Flat roof ponding during winter storms", "Hillside properties with foundation seepage", "Multi-unit buildings with shared plumbing failures"],
    content: `When water damage strikes in Hollywood, the combination of aging building stock and dense multi-unit housing creates unique restoration challenges. Many Hollywood apartment buildings date to the 1920s through 1960s, with original plumbing systems that are decades past their expected lifespan. Galvanized pipes corrode internally, reducing flow until they fail catastrophically — often flooding multiple units simultaneously.

Our crews respond throughout Hollywood, covering ZIP codes 90028, 90038, and 90068 — from the hillside homes near the Hollywood Sign down to the commercial corridors along Hollywood Boulevard and Sunset. We regularly extract water from properties near the Dolby Theatre, along the Walk of Fame corridor, and in the residential blocks between Franklin and Melrose.

The Hollywood Hills present additional challenges. Properties built on slopes face foundation seepage during winter rains, with water migrating through retaining walls and into lower-level living spaces. Hillside homes often have limited access for equipment — our crews bring portable extraction units and compact dehumidifiers specifically for tight hillside properties where truck-mounted equipment cannot reach the affected areas.

Flat commercial roofs along Hollywood Boulevard and Sunset Strip are prone to ponding during heavy rains. When roof drains clog or membranes fail, water intrudes through the roof assembly into ceiling cavities, damaging tenant improvements and inventory below. We provide emergency tarping and extraction for commercial properties, coordinating with property managers to minimize tenant disruption.

For multi-unit buildings — which make up the majority of Hollywood housing — a single pipe failure can cascade through multiple floors. We coordinate restoration across affected units simultaneously, deploying extraction and drying equipment on every floor while working with building management to communicate timelines to all affected residents.`,
    faqs: [
      { question: "How fast can you respond to water damage in Hollywood?", answer: "We maintain crews throughout the Hollywood area and typically arrive within 2-4 hours of your call. For multi-unit emergencies, we deploy additional teams to handle all affected units simultaneously." },
      { question: "Do Hollywood buildings have special water damage risks?", answer: "Yes. Many Hollywood buildings have original 1920s-1960s plumbing — galvanized pipes that corrode internally and fail without warning. Multi-story apartment buildings face cascading damage when upper-floor pipes burst, affecting multiple units below." },
      { question: "Can you work on hillside properties in the Hollywood Hills?", answer: "Absolutely. We bring portable extraction units and compact drying equipment for properties with limited access. Our crews are experienced with the specific challenges of hillside homes including foundation seepage and retaining wall moisture intrusion." },
      { question: "What about commercial properties on Hollywood Boulevard?", answer: "We handle commercial water damage from roof leaks, sprinkler malfunctions, and plumbing failures. We coordinate with property managers and tenants to minimize business disruption during restoration." },
      { question: "Does insurance cover water damage in older Hollywood buildings?", answer: "Most policies cover sudden pipe failures and accidental water damage regardless of building age. We work directly with your insurance company and handle all documentation. Gradual deterioration may require a different approach — we help you understand your specific coverage." }
    ]
  },
  {
    slug: "beverly-hills",
    name: "Beverly Hills",
    citySlug: "los-angeles",
    cityName: "Los Angeles",
    state: "CA",
    zipCodes: "90210, 90211, 90212",
    landmarks: ["Rodeo Drive", "Beverly Wilshire Hotel", "Greystone Mansion", "Beverly Gardens Park", "Trousdale Estates"],
    neighborSlugs: ["west-hollywood", "bel-air", "century-city"],
    climate: "Warm Mediterranean climate with occasional heavy winter storms. Hillside estates face runoff and drainage challenges during El Niño events.",
    housingStock: "Luxury single-family estates from the 1920s-present, high-end condominiums, and commercial properties along Wilshire and Rodeo. Many homes feature complex plumbing with pool systems, irrigation, and multiple water features.",
    commonIssues: ["Pool and spa plumbing failures flooding adjacent rooms", "Irrigation system leaks undermining foundations", "Complex multi-zone plumbing in large estates", "Hillside drainage overwhelmed during storms"],
    content: `Beverly Hills properties present unique water damage challenges due to the scale and complexity of luxury residential systems. Estates in the flats and hillside areas often have extensive plumbing networks serving pools, spas, fountains, irrigation systems, and multiple kitchen and bathroom zones — each a potential failure point.

Our restoration teams serve all of Beverly Hills across ZIP codes 90210, 90211, and 90212 — from the Trousdale Estates and hillside properties above Sunset to the commercial corridor along Wilshire Boulevard and the iconic shops along Rodeo Drive. We understand the specific requirements of high-value properties where restoration must preserve architectural details, custom finishes, and irreplaceable materials.

Hillside estates above Sunset Boulevard face significant drainage challenges during winter storms. Retaining walls, French drains, and grading systems can be overwhelmed during heavy rain events, pushing water into lower-level living spaces, wine cellars, and home theaters. Our crews deploy targeted extraction and drying in these below-grade spaces, using humidity-controlled drying to protect sensitive electronics, custom woodwork, and climate-controlled storage.

Pool and spa plumbing failures are among the most common water damage sources in Beverly Hills. Underground supply and return lines develop leaks that saturate soil around foundations before any surface evidence appears. We use thermal imaging and moisture mapping to trace water migration paths from pool equipment to interior spaces, identifying the full extent of damage before beginning restoration.

For commercial properties along Wilshire and in the business triangle, we provide rapid response that minimizes closure time. Retail spaces, restaurants, and professional offices receive priority scheduling to protect inventory, equipment, and business continuity.`,
    faqs: [
      { question: "How do you handle water damage in luxury Beverly Hills homes?", answer: "We specialize in high-value property restoration. Our technicians are trained to work with custom finishes, hardwood floors, imported materials, and architectural details. We use controlled drying techniques that protect sensitive materials while thoroughly removing moisture." },
      { question: "Can pool plumbing cause water damage to my Beverly Hills home?", answer: "Yes — this is one of the most common causes we see in Beverly Hills. Underground pool lines develop leaks that saturate soil and migrate toward foundations. We use thermal imaging to trace moisture paths and identify the full damage extent before restoration." },
      { question: "What about hillside estate drainage issues?", answer: "Hillside properties above Sunset are particularly vulnerable during heavy rains. We handle water intrusion through retaining walls, overwhelmed French drains, and slope runoff that enters lower-level spaces like wine cellars and home theaters." },
      { question: "Do you serve commercial properties on Rodeo Drive?", answer: "Yes. We provide emergency water damage response for retail, restaurant, and office spaces throughout Beverly Hills. We coordinate with property management to minimize business disruption and protect inventory." },
      { question: "How quickly can you get to Beverly Hills?", answer: "We maintain crews in the greater LA area and typically respond within 2-4 hours. For large estates requiring multiple teams, we coordinate a full deployment to address all affected areas simultaneously." }
    ]
  },
  {
    slug: "santa-monica",
    name: "Santa Monica",
    citySlug: "los-angeles",
    cityName: "Los Angeles",
    state: "CA",
    zipCodes: "90401, 90402, 90403, 90404, 90405",
    landmarks: ["Santa Monica Pier", "Third Street Promenade", "Palisades Park", "Montana Avenue", "Santa Monica Place"],
    neighborSlugs: ["venice", "brentwood", "pacific-palisades"],
    climate: "Coastal marine climate with fog, salt air, and high ambient humidity year-round. Proximity to the ocean accelerates pipe corrosion and promotes mold growth in poorly ventilated spaces.",
    housingStock: "Mix of beachfront condominiums, craftsman bungalows, mid-century apartments, and newer construction. Coastal properties face accelerated corrosion from salt air exposure.",
    commonIssues: ["Salt air corrosion accelerating pipe failures", "Coastal humidity promoting mold growth", "Storm surge and flooding in low-lying beach areas", "Condo association complex multi-unit damage"],
    content: `Santa Monica properties face a persistent enemy that inland areas don't — salt air. The coastal marine environment accelerates corrosion on copper and galvanized plumbing, cutting years off pipe lifespan and making sudden failures more frequent in beachfront and near-beach properties.

We serve all Santa Monica ZIP codes — 90401 through 90405 — from the beachfront properties along Ocean Avenue to the residential neighborhoods inland of Lincoln Boulevard. Our crews regularly respond to water damage near the Santa Monica Pier, along the Third Street Promenade, in the residential blocks around Montana Avenue, and throughout the condominium complexes along the oceanfront.

The coastal humidity that makes Santa Monica desirable also creates ideal conditions for mold growth after any water intrusion. What might take 48-72 hours to colonize in drier inland areas can begin within 24 hours in Santa Monica's humid coastal environment. Our restoration protocol includes aggressive antimicrobial treatment on all exposed surfaces — not as an optional add-on, but as a standard part of every Santa Monica restoration project.

Condominium complexes along Ocean Avenue and in the downtown area present coordination challenges when water damage crosses unit boundaries. A supply line failure on an upper floor can cascade through multiple units below, requiring simultaneous extraction and drying across several residences. We work with HOA boards and property managers to coordinate access, communicate timelines, and document damage for individual unit insurance claims.

Low-lying areas near the beach face periodic flooding during king tides and heavy storms. When ocean water or storm surge enters a property, the contamination level is typically Category 2 or 3 — requiring full extraction, antimicrobial treatment, and removal of contaminated porous materials before drying and reconstruction can begin.`,
    faqs: [
      { question: "Does salt air affect water damage risk in Santa Monica?", answer: "Significantly. Salt air accelerates corrosion on copper and galvanized plumbing, causing pipes to fail years earlier than identical systems in inland areas. We see a higher frequency of sudden pipe failures in beachfront and near-beach properties." },
      { question: "Is mold more of a risk in coastal Santa Monica?", answer: "Yes. Santa Monica's high ambient humidity means mold can begin growing within 24 hours of water exposure — faster than in drier inland areas. We include aggressive antimicrobial treatment as standard on every Santa Monica restoration project." },
      { question: "How do you handle condo water damage in Santa Monica?", answer: "We coordinate with HOA boards and property managers for multi-unit incidents. Our teams deploy simultaneously across all affected units, document damage for individual insurance claims, and communicate directly with building management throughout the process." },
      { question: "What about beach flooding in Santa Monica?", answer: "Coastal flooding from king tides or storms brings Category 2-3 contaminated water. We extract the water, remove contaminated porous materials, apply antimicrobial treatment, and dry the structure before any reconstruction begins." },
      { question: "How fast can you respond in Santa Monica?", answer: "We maintain crews in the west LA area and typically arrive within 2-3 hours. For condo emergencies affecting multiple units, we deploy additional teams to handle all units simultaneously." }
    ]
  },
  {
    slug: "venice",
    name: "Venice",
    citySlug: "los-angeles",
    cityName: "Los Angeles",
    state: "CA",
    zipCodes: "90291",
    landmarks: ["Venice Beach Boardwalk", "Venice Canals", "Abbot Kinney Boulevard", "Muscle Beach", "Marina del Rey"],
    neighborSlugs: ["santa-monica", "marina-del-rey", "playa-vista"],
    climate: "Coastal climate with high humidity, morning fog, and salt air exposure. Properties near the canals face additional groundwater and tidal influence challenges.",
    housingStock: "Eclectic mix of craftsman cottages, converted lofts, modern new construction, and historic canal-adjacent homes. The Venice Canals district has unique foundation and moisture challenges.",
    commonIssues: ["Canal-adjacent properties with high water tables", "Salt air corrosion on plumbing", "Older craftsman homes with original plumbing", "New construction defects in recent developments"],
    content: `Venice presents water damage challenges found nowhere else in Los Angeles — particularly for properties along and near the historic Venice Canals. The high water table in the canal district means that basements, crawlspaces, and ground-level structures exist in a perpetually damp environment where any additional water intrusion quickly escalates.

Our crews serve all of Venice (ZIP 90291) — from the canal-front properties along the Grand Canal and smaller waterways, to the bustling commercial strip along Abbot Kinney Boulevard, to the beachfront residences near the Venice Boardwalk and Muscle Beach. We understand the specific construction types and environmental factors unique to this neighborhood.

Properties along the Venice Canals sit on elevated water tables influenced by tidal cycles. Foundations in this area experience constant hydrostatic pressure, and any disruption to waterproofing — whether from age, tree root damage, or seismic settling — allows moisture migration into living spaces. We deploy specialized moisture mapping to distinguish between chronic groundwater intrusion and acute pipe failures, ensuring the right restoration approach for each situation.

The craftsman cottages scattered throughout Venice — many dating to the early 1900s — feature original plumbing systems that predate modern building codes. When these systems fail, the damage often extends behind plaster walls and beneath hardwood floors that owners want to preserve. Our restoration team uses targeted drying techniques that protect original materials wherever possible, opening walls only where necessary and using cavity drying systems to remove moisture without demolishing more than required.

Venice's newer construction — particularly the modern developments along Lincoln Boulevard and near Playa Vista — occasionally presents water damage from construction defects. Improperly flashed windows, inadequate waterproofing, and rushed plumbing connections can cause slow leaks that go undetected for months. We use thermal imaging to trace these hidden moisture paths and document the full extent of damage for warranty or defect claims.`,
    faqs: [
      { question: "Do Venice Canal properties have special water damage risks?", answer: "Yes. Properties along the Venice Canals sit on elevated water tables influenced by tides. Foundations face constant hydrostatic pressure, making waterproofing failures more likely and more damaging. We use specialized moisture mapping to distinguish groundwater intrusion from pipe failures." },
      { question: "Can you restore original materials in older Venice homes?", answer: "We prioritize preservation of original craftsman details wherever possible. We use targeted drying and cavity drying systems to remove moisture without unnecessary demolition, opening walls only where required and protecting original plaster, hardwood, and trim." },
      { question: "What about new construction defects causing water damage?", answer: "We see this regularly in Venice's newer developments. We use thermal imaging to trace hidden moisture from improperly flashed windows or defective waterproofing, documenting the full extent of damage for warranty or construction defect claims." },
      { question: "How does the coastal environment affect Venice properties?", answer: "Salt air accelerates pipe corrosion, coastal humidity promotes rapid mold growth after any water intrusion, and the high water table creates constant moisture pressure on foundations. We factor all of these into every Venice restoration project." },
      { question: "Do you serve commercial properties on Abbot Kinney?", answer: "Yes. We provide emergency water damage response for retail and restaurant spaces along Abbot Kinney and throughout Venice. We coordinate with landlords and tenants to minimize business disruption." }
    ]
  },
  // ═══════════════════════════════════════
  // TAMPA NEIGHBORHOODS
  // ═══════════════════════════════════════
  {
    slug: "hyde-park",
    name: "Hyde Park",
    citySlug: "tampa",
    cityName: "Tampa",
    state: "FL",
    zipCodes: "33606",
    landmarks: ["Hyde Park Village", "Bayshore Boulevard", "Plant Museum", "University of Tampa", "Harbour Island"],
    neighborSlugs: ["south-tampa", "davis-islands", "channel-district"],
    climate: "Subtropical climate with intense summer thunderstorms, hurricane season from June through November, and high year-round humidity that accelerates mold growth.",
    housingStock: "Historic bungalows and craftsman homes from the 1910s-1940s, renovated mid-century properties, and newer townhomes. Many original homes sit on pier-and-beam foundations susceptible to moisture intrusion.",
    commonIssues: ["Hurricane and tropical storm flooding", "Summer thunderstorm water intrusion", "Pier-and-beam foundation moisture issues", "High humidity accelerating mold after any water event"],
    content: `Hyde Park's historic housing stock — some of Tampa's most desirable real estate — is also among the most vulnerable to water damage. The neighborhood's signature bungalows and craftsman homes, many built between 1910 and 1940, sit on pier-and-beam foundations that allow moisture migration from below while aging plumbing systems threaten from within.

We serve all of Hyde Park (ZIP 33606) and respond throughout the neighborhood — from the historic residential streets near Hyde Park Village to the waterfront properties along Bayshore Boulevard, and from the areas near the University of Tampa campus down to Harbour Island. Our Tampa crews understand the specific construction methods and environmental factors that affect historic Hyde Park homes differently from newer construction.

Tampa's subtropical climate means Hyde Park faces water damage threats year-round. Summer thunderstorms deliver intense, localized rainfall that overwhelms drainage systems and drives water through foundation vents, window wells, and any opening in the building envelope. Hurricane season from June through November brings the risk of major flooding, wind-driven rain, and storm surge — particularly for properties closest to Hillsborough Bay along Bayshore Boulevard.

The high ambient humidity in Tampa — often 70-90% — means mold growth after water damage is not a question of if but when. In Hyde Park's older homes with limited ventilation, mold can establish within 24 hours of water intrusion. Our restoration protocol for Hyde Park properties includes immediate antimicrobial treatment, aggressive dehumidification targeting interior humidity below 50%, and daily moisture monitoring until structural materials return to equilibrium.

Historic preservation is a priority for many Hyde Park homeowners. When water damages original heart pine floors, plaster walls, or decorative woodwork, we use precision drying techniques to save original materials wherever possible — injecting dry air into wall cavities, using floor drying mats, and monitoring each material independently to prevent over-drying that causes cracking and warping.`,
    faqs: [
      { question: "How does Hyde Park's historic housing affect water damage restoration?", answer: "Older pier-and-beam foundations, original plaster walls, and vintage plumbing all require specialized approaches. We use precision drying techniques to preserve original materials like heart pine floors and decorative woodwork while thoroughly removing moisture." },
      { question: "Is Hyde Park at risk for hurricane flooding?", answer: "Properties near Bayshore Boulevard and Harbour Island face storm surge risk during hurricanes. Inland Hyde Park properties are more protected but still vulnerable to wind-driven rain and flooding from overwhelmed drainage during intense storms." },
      { question: "How fast does mold grow in Tampa humidity?", answer: "In Tampa's 70-90% ambient humidity, mold can begin colonizing within 24 hours of water intrusion — faster than most inland areas. We include aggressive dehumidification and antimicrobial treatment as standard on every Hyde Park restoration." },
      { question: "Can you preserve original materials in historic Hyde Park homes?", answer: "Preservation is a priority. We use floor drying mats for hardwood, cavity injection for plaster walls, and material-specific monitoring to dry without over-drying. We open walls only when absolutely necessary." },
      { question: "How quickly can you respond to Hyde Park water damage?", answer: "We maintain crews in the Tampa Bay area and typically arrive within 2-3 hours. During active storm events, we pre-position teams and prioritize emergency calls in flood-prone areas." }
    ]
  },
  {
    slug: "south-tampa",
    name: "South Tampa",
    citySlug: "tampa",
    cityName: "Tampa",
    state: "FL",
    zipCodes: "33609, 33611, 33629",
    landmarks: ["International Plaza", "MacDill Air Force Base", "Palma Ceia", "Gandy Boulevard", "Westshore Boulevard"],
    neighborSlugs: ["hyde-park", "davis-islands", "town-n-country"],
    climate: "Low-lying subtropical area surrounded by water on three sides, making it exceptionally vulnerable to flooding during storms and king tides.",
    housingStock: "Mix of 1950s-1970s ranch homes, newer luxury construction, and waterfront properties. Many homes in flood zones with raised foundations or slab-on-grade construction.",
    commonIssues: ["Chronic street flooding during heavy rain", "Storm surge from Tampa Bay", "Slab foundation moisture migration", "AC condensation and humidity damage"],
    content: `South Tampa sits on a peninsula surrounded by Tampa Bay and Old Tampa Bay — making it one of the most flood-prone neighborhoods in the entire Tampa metro. Street flooding during summer thunderstorms is a regular occurrence, and major storm events can push bay water into low-lying residential areas across ZIP codes 33609, 33611, and 33629.

Our crews serve all of South Tampa — from the upscale Palma Ceia neighborhood and areas near International Plaza, down the peninsula past MacDill Air Force Base, and along the waterfront corridors of Bayshore, Gandy, and Westshore Boulevards. We respond fast because in South Tampa, the difference between a manageable cleanup and a major restoration is measured in hours.

The combination of flat terrain, high water tables, and surrounding bay waters means South Tampa properties face chronic moisture challenges even without dramatic weather events. Slab-on-grade foundations — common in 1950s through 1970s ranch-style homes throughout the area — wick moisture from saturated soil into flooring and wall systems. During wet seasons, this background moisture keeps building materials perpetually close to the mold growth threshold, making any additional water intrusion a serious escalation.

Summer thunderstorms in South Tampa don't just bring rain — they bring localized flooding that overwhelms the aging stormwater system. Streets flood within minutes of heavy rainfall, and water enters homes through garage doors, sliding glass doors, and any ground-level opening. We deploy truck-mounted extraction units that can remove thousands of gallons per hour, followed by commercial dehumidifiers that combat both the flood water and Tampa's relentless ambient humidity.

Waterfront properties along Bayshore and the bay-facing streets face the additional threat of storm surge during tropical systems. Even modest tropical storms can push bay water several feet above normal tide levels, flooding ground floors with brackish Category 3 water that requires full extraction, contaminated material removal, antimicrobial treatment, and structural drying before any reconstruction begins.`,
    faqs: [
      { question: "Why does South Tampa flood so frequently?", answer: "South Tampa sits on a low-lying peninsula surrounded by bay water, with flat terrain and a high water table. The stormwater drainage system is overwhelmed during heavy rain, and storm surge from Tampa Bay can flood ground-level properties during tropical weather." },
      { question: "Is South Tampa in a flood zone?", answer: "Much of South Tampa is in FEMA flood zones AE and VE. Flood insurance is often required by mortgage lenders. We work with both standard homeowner insurance and flood insurance policies to coordinate restoration claims." },
      { question: "How do you handle storm surge damage?", answer: "Storm surge brings brackish Category 3 water. We extract all water, remove contaminated porous materials below the flood line, apply EPA-registered antimicrobials to structural surfaces, and dry the structure completely before reconstruction." },
      { question: "What about the constant humidity damaging my home?", answer: "South Tampa humidity keeps building materials perpetually damp, especially slab foundations that wick moisture from saturated soil. We address both acute water damage and chronic moisture issues, recommending dehumidification solutions that protect against ongoing humidity." },
      { question: "How fast can you respond during a storm?", answer: "We pre-position crews during tropical weather warnings and maintain 24/7 dispatch during storm events. Response times during active weather depend on road conditions, but we prioritize South Tampa given its flood vulnerability." }
    ]
  }
];

// Helper to get neighborhoods by city
export function getNeighborhoodsByCity(citySlug: string): Neighborhood[] {
  return neighborhoods.filter(n => n.citySlug === citySlug);
}

export function getNeighborhood(citySlug: string, neighborhoodSlug: string): Neighborhood | undefined {
  return neighborhoods.find(n => n.citySlug === citySlug && n.slug === neighborhoodSlug);
}

export function getNeighborLinks(neighborhood: Neighborhood): Neighborhood[] {
  return neighborhood.neighborSlugs
    .map(slug => neighborhoods.find(n => n.slug === slug && n.citySlug === neighborhood.citySlug))
    .filter((n): n is Neighborhood => n !== undefined);
}

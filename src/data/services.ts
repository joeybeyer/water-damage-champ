export interface Service {
  slug: string;
  name: string;
  title: string;
  description: string;
  fullContent: string;
  faqs: { question: string; answer: string }[];
}

export const services: Service[] = [
  {
    slug: 'water-damage-restoration',
    name: 'Water Damage Restoration',
    title: 'Professional Water Damage Restoration Services',
    description: 'Expert water damage restoration services available 24/7. Fast response, thorough drying, and complete restoration for your property.',
    fullContent: `
## Comprehensive Water Damage Restoration Services

When water damage strikes your home or business, time is of the essence. Water Damage Champ provides rapid, professional water damage restoration services throughout California and Florida. Our certified technicians arrive within hours of your call, equipped with state-of-the-art drying equipment and years of expertise.

### Understanding Water Damage Categories

Not all water damage is the same. We assess each situation carefully to determine the appropriate restoration approach:

**Category 1 - Clean Water**
This originates from clean sources like burst pipes, overflowing sinks, or rainwater. While less hazardous initially, Category 1 water can quickly degrade to Category 2 if not addressed within 24-48 hours.

**Category 2 - Grey Water**
This includes water from appliance failures, such as washing machines or dishwashers. Grey water contains contaminants and requires professional handling to prevent health risks.

**Category 3 - Black Water**
The most dangerous category, black water comes from sewage backups, flooding from rivers or streams, or standing water that has promoted bacterial growth. This requires specialized equipment and safety protocols.

### Our Restoration Process

**1. Emergency Response**
Our 24/7 emergency line connects you with certified technicians immediately. We arrive at your property within hours, assess the damage, and begin extraction to prevent further deterioration.

**2. Damage Assessment**
We document all affected areas, create a detailed restoration plan, and work with your insurance company to ensure proper coverage. Our team photographs damage for insurance documentation.

**3. Water Extraction**
Industrial-grade pumps and vacuums remove standing water quickly and efficiently. We extract water from carpets, hardwood floors, subfloors, and hard-to-reach areas.

**4. Drying and Dehumidification**
Professional-grade air movers and dehumidifiers dry the affected area completely. We monitor humidity levels daily to ensure thorough drying and prevent secondary damage like mold growth.

**5. Cleaning and Sanitization**
All affected surfaces are cleaned, sanitized, and deodorized. We treat areas with antimicrobial solutions to prevent mold and bacteria growth.

**6. Restoration and Reconstruction**
Our skilled craftsmen repair or replace damaged drywall, flooring, cabinetry, and other structural elements. We restore your property to its pre-damage condition.

### Why Choose Water Damage Champ?

- **24/7 Emergency Response**: We're available around the clock, every day of the year
- **IICRC Certified Technicians**: Our team holds industry-recognized certifications
- **Insurance Coordination**: We work directly with your insurance company
- **Advanced Equipment**: Professional-grade drying and extraction equipment
- **Satisfaction Guarantee**: We're not done until you're completely satisfied

Don't let water damage compromise your property's integrity. Contact Water Damage Champ today for immediate assistance.
    `,
    faqs: [
      {
        question: 'How long does water damage restoration take?',
        answer: 'The duration varies based on the extent of damage. Minor damage may take 3-5 days, while major flooding can require 2-3 weeks. We provide a timeline after our initial assessment.'
      },
      {
        question: 'Will my insurance cover water damage restoration?',
        answer: 'Most homeowner insurance policies cover sudden, accidental water damage. We work directly with insurance companies to verify coverage and handle claims paperwork.'
      },
      {
        question: 'Can I stay in my home during restoration?',
        answer: 'Depends on damage severity. For minor cases, you can typically remain. For extensive damage affecting multiple rooms, we recommend temporary relocation for safety and efficiency.'
      },
      {
        question: 'What causes most residential water damage?',
        answer: 'Common causes include burst pipes, appliance failures, roof leaks, sewer backups, and natural flooding. Regular maintenance can prevent many of these issues.'
      },
      {
        question: 'How soon should I call after water damage occurs?',
        answer: 'Immediately. Water damage worsens over time, and mold can begin growing within 24-48 hours. Quick response minimizes damage and restoration costs.'
      }
    ]
  },
  {
    slug: 'water-extraction',
    name: 'Water Extraction',
    title: 'Professional Water Extraction Services',
    description: 'Rapid water extraction services to remove standing water and prevent further damage to your property.',
    fullContent: `
## Professional Water Extraction Services

Standing water in your property causes ongoing damage with every minute that passes. Water Damage Champ provides fast, professional water extraction services using industrial-grade equipment designed for rapid removal.

### Our Extraction Equipment

**Industrial Wet Vacuums**
For residential and light commercial applications, our industrial wet vacuums handle standing water in carpets, hard floors, and accessible areas efficiently.

**Truck-Mounted Extraction Units**
For large-scale water removal, our truck-mounted units provide maximum extraction power. These units can remove hundreds of gallons per hour, significantly reducing drying time.

**Submersible Pumps**
For flooded basements, crawl spaces, and other areas with significant water depth, submersible pumps remove water quickly and effectively.

### Extraction Process

**1. Initial Assessment**
We evaluate the water level, affected areas, and potential contamination level to determine the appropriate extraction approach.

**2. Equipment Selection**
Based on our assessment, we select the optimal combination of extraction equipment for your specific situation.

**3. Systematic Extraction**
Our technicians methodically extract water from all affected areas, including carpets, hardwood floors, tile floors, and subfloor cavities.

**4. Ongoing Monitoring**
We monitor extraction progress and adjust our approach as needed to ensure complete water removal.

### Why Professional Extraction Matters

DIY extraction often leaves moisture behind, leading to:
- Mold growth within 24-48 hours
- Structural damage to wood and drywall
- Unpleasant odors from trapped moisture
- Insurance claim complications due to inadequate documentation

Our professional extraction ensures complete removal, proper documentation for insurance, and sets the foundation for effective drying.
    `,
    faqs: [
      {
        question: 'How long does water extraction take?',
        answer: 'Extraction time depends on water volume and affected area size. A typical residential job takes 2-4 hours. Larger commercial spaces may require longer.'
      },
      {
        question: 'Do you extract water from carpet?',
        answer: 'Yes. We extract water from all carpeted areas using specialized equipment. In some cases, carpet removal may be necessary if saturation is extensive.'
      },
      {
        question: 'Can extraction damage my floors?',
        answer: 'Our trained technicians use appropriate equipment for each floor type. We assess your flooring before extraction to ensure safe, effective water removal.'
      },
      {
        question: 'What happens after extraction?',
        answer: 'After extraction, we begin the drying process using industrial-grade air movers and dehumidifiers to eliminate remaining moisture.'
      },
      {
        question: 'Is extraction covered by insurance?',
        answer: 'Water extraction is typically covered under most homeowner insurance policies when the damage is sudden and accidental. We help verify your coverage.'
      }
    ]
  },
  {
    slug: 'flood-damage-repair',
    name: 'Flood Damage Repair',
    title: 'Professional Flood Damage Repair Services',
    description: 'Complete flood damage repair and restoration services to restore your property after flooding events.',
    fullContent: `
## Expert Flood Damage Repair

Flooding can devastate your home or business, leaving extensive damage that requires professional restoration. Water Damage Champ specializes in comprehensive flood damage repair, helping properties recover from flash floods, storm surges, and severe water intrusions.

### Types of Flood Damage We Handle

**Flash Floods**
Rapid-onset flooding from heavy rainfall, dam failures, or storm events. Flash floods require immediate response to minimize damage.

**Storm Surge Flooding**
Coastal properties face unique challenges from saltwater flooding, which causes accelerated corrosion and structural damage.

**Sewage Backup Flooding**
Contaminated flood water requires specialized handling and sanitization protocols to ensure safety.

**River Overflow Flooding**
Properties near waterways may experience repeated flooding events requiring durable restoration solutions.

### Our Flood Damage Repair Process

**1. Emergency Response and Safety Assessment**
We prioritize safety, assessing electrical hazards, structural integrity, and contamination levels before beginning work.

**2. Water Extraction and Drying**
Rapid water removal followed by thorough drying using industrial equipment designed for large-scale applications.

**3. Structural Assessment and Repairs**
Our team evaluates structural damage, replacing compromised drywall, insulation, flooring, and framing as needed.

**4. Content Restoration**
We clean, sanitize, and restore salvageable belongings, furniture, and personal items affected by flood water.

**5. Mold Prevention Treatment**
Flood conditions create ideal mold growth conditions. We apply preventive treatments to protect your property.

### Flood Insurance and Documentation

We work directly with flood insurance carriers, documenting all damage with photographs and detailed reports. Our team understands NFIP (National Flood Insurance Program) requirements and helps streamline your claim.
    `,
    faqs: [
      {
        question: 'How much does flood damage repair cost?',
        answer: 'Costs vary based on water depth, affected area size, and contamination level. We provide free estimates and work with insurance when applicable.'
      },
      {
        question: 'Can flood-damaged furniture be saved?',
        answer: 'Many items can be restored with professional cleaning and treatment. We assess each item individually and discuss restoration options with you.'
      },
      {
        question: 'What should I do immediately after flooding?',
        answer: 'Ensure safety first, then contact us for emergency extraction. Avoid entering flood-damaged areas until assessed for electrical and structural hazards.'
      },
      {
        question: 'How long does flood damage repair take?',
        answer: 'Minor flood damage may require 1-2 weeks. Major flooding can take several weeks to months, depending on structural damage extent.'
      },
      {
        question: 'Does flood insurance cover your services?',
        answer: 'We work with all standard flood insurance policies. Our team handles documentation and insurance coordination for seamless claims processing.'
      }
    ]
  },
  {
    slug: 'mold-remediation',
    name: 'Mold Remediation',
    title: 'Professional Mold Remediation Services',
    description: 'Expert mold removal and remediation services to eliminate mold and protect your family\'s health.',
    fullContent: `
## Comprehensive Mold Remediation Services

Mold growth in your home or business poses serious health risks and can compromise structural integrity. Water Damage Champ provides professional mold remediation services, safely removing mold and preventing future growth.

### Understanding Mold

**Health Risks**
Mold exposure can cause allergic reactions, respiratory issues, and exacerbate conditions like asthma. Certain mold types produce mycotoxins that pose serious health concerns.

**Growth Conditions**
Mold requires moisture, organic material, and appropriate temperatures to grow. Water damage creates ideal conditions for mold colonization within 24-48 hours.

**Types of Mold**
We handle all common mold types, including Stachybotrys (black mold), Aspergillus, Penicillium, and Cladosporium. Our technicians identify mold species to determine appropriate remediation protocols.

### Our Remediation Process

**1. Inspection and Assessment**
We conduct thorough mold inspections, identifying affected areas, determining contamination levels, and creating a remediation plan.

**2. Containment**
We establish negative pressure containment to prevent mold spores from spreading to unaffected areas during remediation.

**3. Air Filtration**
HEPA air scrubbers filter spores from the air, preventing cross-contamination and improving air quality.

**4. Mold Removal**
Depending on contamination level, we use various techniques:
- Porous materials (drywall, insulation) may require removal
- Hard surfaces are cleaned with antimicrobial solutions
- Contents are cleaned or professionally restored

**5. Drying and Prevention**
We eliminate moisture sources and apply preventive treatments to inhibit future mold growth.

**6. Final Clearance**
Post-remediation testing verifies successful mold removal before we consider the job complete.

### Certification and Safety

Our mold remediation technicians hold industry certifications and follow EPA and IICRC guidelines. We use professional-grade protective equipment and follow strict safety protocols.
    `,
    faqs: [
      {
        question: 'How long does mold remediation take?',
        answer: 'Duration depends on the extent of mold growth. Small areas may be remediated in 1-2 days. Large-scale contamination can take 1-2 weeks.'
      },
      {
        question: 'Is mold dangerous to my health?',
        answer: 'Mold can cause allergic reactions, respiratory problems, and other health issues. Some molds produce mycotoxins that pose serious health risks.'
      },
      {
        question: 'Can I remove mold myself?',
        answer: 'Small mold areas (less than 10 square feet) may be handled DIY with proper safety equipment. Larger areas require professional remediation.'
      },
      {
        question: 'Will mold come back after remediation?',
        answer: 'If moisture sources are eliminated and proper prevention measures are applied, mold should not return. We address root causes to prevent recurrence.'
      },
      {
        question: 'How much does mold remediation cost?',
        answer: 'Costs depend on affected area size and contamination severity. We provide free inspections and estimates.'
      }
    ]
  },
  {
    slug: 'storm-damage-restoration',
    name: 'Storm Damage Restoration',
    title: 'Professional Storm Damage Restoration',
    description: 'Complete storm damage restoration services to repair and restore your property after severe weather events.',
    fullContent: `
## Storm Damage Restoration Services

Severe storms can cause extensive damage to your property, from roof damage and water intrusion to complete structural devastation. Water Damage Champ provides comprehensive storm damage restoration services, helping you recover and rebuild.

### Types of Storm Damage We Handle

**Wind Damage**
High winds can tear off shingles, damage siding, topple trees, and create openings that allow water intrusion.

**Hail Damage**
Hailstones dent roofing, break windows, damage siding, and destroy outdoor equipment.

**Rain Damage**
Prolonged or heavy rainfall can overwhelm drainage systems, cause roof leaks, and flood basements.

**Lightning Damage**
Lightning strikes can cause fires, electrical damage, and structural damage to properties.

**Hurricane Damage**
Coastal properties face unique challenges from hurricane-force winds, storm surge, and wind-driven rain.

### Our Storm Damage Restoration Process

**1. Emergency Tarping and Board-Up**
We secure your property immediately, preventing further damage from weather exposure.

**2. Damage Assessment**
Our team thoroughly documents all storm damage for insurance purposes, photographing and cataloging affected areas.

**3. Water Extraction and Drying**
Any water intrusion is addressed immediately with professional extraction and drying equipment.

**4. Structural Repairs**
We repair or replace damaged roofing, siding, drywall, framing, and other structural elements.

**5. Content Restoration**
Affected belongings and furnishings are cleaned, restored, or replaced as needed.

**6. Final Restoration**
We complete all cosmetic repairs, painting, and finishing to restore your property to pre-damage condition.

### Insurance Coordination

Storm damage claims require thorough documentation. Our team works directly with insurance adjusters, providing detailed damage assessments and coordinating repairs.
    `,
    faqs: [
      {
        question: 'What should I do immediately after storm damage?',
        answer: 'Ensure safety first, then contact us for emergency board-up and tarping. Document damage with photos if safe to do so before insurance inspection.'
      },
      {
        question: 'Does insurance cover storm damage?',
        answer: 'Most standard homeowner policies cover storm damage, including wind, hail, and rain damage. Flood damage typically requires separate flood insurance.'
      },
      {
        question: 'How long does storm damage restoration take?',
        answer: 'Duration depends on damage extent. Minor damage may take 1-2 weeks. Major storm damage requiring structural repairs can take months.'
      },
      {
        question: 'Can I stay in my home during restoration?',
        answer: 'Depends on damage severity. We assess each situation and recommend whether temporary relocation is necessary for safety.'
      },
      {
        question: 'Do you work with insurance adjusters?',
        answer: 'Yes. We coordinate directly with insurance adjusters, providing detailed documentation and estimates to streamline your claim.'
      }
    ]
  },
  {
    slug: 'sump-pump-cleanup',
    name: 'Sump Pump Cleanup',
    title: 'Professional Sump Pump Cleanup Services',
    description: 'Expert cleanup services after sump pump failures, flooding, and water intrusion in basements and crawl spaces.',
    fullContent: `
## Sump Pump Cleanup and Restoration

Sump pump failures create sudden basement or crawl space flooding that requires immediate response. Water Damage Champ provides rapid sump pump cleanup services, removing water and restoring affected areas.

### Understanding Sump Pump Failures

**Common Causes**
- Power outages during storms
- Mechanical failures
- Frozen or clogged discharge lines
- Improperly sized pumps
- Age and wear

**Warning Signs**
- Unusual noises from the sump pump
- Irregular cycling patterns
- Water stains in the basement
- Visible rust or corrosion
- Age exceeding 10 years

### Our Cleanup Process

**1. Emergency Response**
We arrive quickly to address flooding, preventing further damage to your property and belongings.

**2. Water Extraction**
Industrial equipment removes standing water from basements and crawl spaces efficiently.

**3. Drying and Dehumidification**
Professional-grade drying equipment eliminates moisture from concrete, wood, and other materials.

**4. Sanitization**
We clean and sanitize affected areas, addressing potential bacterial growth from groundwater.

**5. Assessment and Recommendations**
We evaluate your sump pump system and provide recommendations to prevent future failures.

### Sump Pump System Upgrades

After cleanup, we can install or upgrade sump pump systems including:
- Primary pumps with appropriate capacity
- Backup battery systems
- Water-powered backup pumps
- Freeze guards
- Alert systems

Don't wait for the next storm. Contact us today to inspect your sump pump system and prevent future failures.
    `,
    faqs: [
      {
        question: 'How often should I test my sump pump?',
        answer: 'Test your sump pump at least twice yearly, ideally before heavy rain seasons. Check the float mechanism, discharge line, and backup systems.'
      },
      {
        question: 'What is the average lifespan of a sump pump?',
        answer: 'Sump pumps typically last 7-10 years with proper maintenance. Regular testing and maintenance can extend lifespan.'
      },
      {
        question: 'Are battery backup sump pumps worth it?',
        answer: "Yes. Battery backups provide protection during power outages when sump pumps are most needed. They're especially valuable in areas with frequent storms."
      },
      {
        question: 'How much does sump pump cleanup cost?',
        answer: 'Costs depend on water volume and affected area size. We provide free estimates for all cleanup services.'
      },
      {
        question: 'Can I prevent sump pump failures?',
        answer: 'Regular maintenance, testing, and installing backup systems significantly reduce failure risk. We offer maintenance plans and upgrade services.'
      }
    ]
  },
  {
    slug: 'ceiling-wall-water-damage',
    name: 'Ceiling and Wall Water Damage',
    title: 'Ceiling and Wall Water Damage Repair',
    description: 'Professional repair services for water-damaged ceilings, walls, and drywall throughout your property.',
    fullContent: `
## Ceiling and Wall Water Damage Repair

Water damage to ceilings and walls compromises your home's structural integrity and appearance. Water Damage Champ provides expert repair services, restoring damaged areas to their original condition.

### Common Causes of Wall and Ceiling Damage

**Roof Leaks**
Damaged or aging roofing allows water intrusion that manifests as ceiling stains and wall damage.

**Plumbing Failures**
Burst pipes, leaking fixtures, and supply line failures cause significant interior damage.

**HVAC Issues**
Condensation, drain line failures, and AC pan overflow create water damage in walls and ceilings.

**Exterior Water Intrusion**
Foundation cracks, window seal failures, and siding damage allow water penetration.

### Our Repair Process

**1. Damage Assessment**
We identify the source of water damage and assess the extent of structural compromise.

**2. Source Repair**
Before cosmetic repairs, we address the underlying cause of water damage to prevent recurrence.

**3. Structural Drying**
Professional drying equipment eliminates moisture from walls, ceilings, and structural elements.

**4. Material Removal**
Compromised drywall, insulation, and structural elements are carefully removed.

**5. Reconstruction**
We install new materials matching your existing walls and ceilings, including:
- New drywall installation
- Insulation replacement
- Texturing and matching
- Prime and paint services

**6. Final Finishing**
We match existing textures and paint finishes seamlessly, making repairs invisible.

### Signs of Hidden Water Damage

- Discoloration or staining
- Bubbling or peeling paint
- Soft or spongy drywall
- Unusual odors
- Increased humidity
- Visible mold growth

If you notice these signs, contact us immediately for professional assessment.
    `,
    faqs: [
      {
        question: 'How do you match existing wall textures?',
        answer: 'Our craftsmen assess your existing texture (orange peel, knockdown, smooth, etc.) and use specialized techniques to match it precisely.'
      },
      {
        question: 'Can damaged drywall be repaired or does it need replacement?',
        answer: 'Minor damage can be patched. Extensive damage, sagging, or mold contamination typically requires full panel replacement.'
      },
      {
        question: 'How long does wall and ceiling repair take?',
        answer: 'Small repairs take 1-2 days. Large-scale repairs involving multiple rooms may take 1-2 weeks.'
      },
      {
        question: 'Will my paint match exactly?',
        answer: 'We color-match using your existing paint or provide matching paint. Perfect matches depend on original paint age and sun exposure.'
      },
      {
        question: 'Do you handle the entire repair including painting?',
        answer: 'Yes. We provide complete restoration from removal through final painting and finishing.'
      }
    ]
  },
  {
    slug: 'crawlspace-encapsulation',
    name: 'Crawlspace Encapsulation',
    title: 'Crawlspace Encapsulation Services',
    description: 'Professional crawlspace encapsulation to prevent moisture, mold, and structural damage in your home.',
    fullContent: `
## Crawlspace Encapsulation Services

Your crawlspace can harbor moisture, mold, and pests that affect your entire home's air quality and structural integrity. Water Damage Champ provides professional crawlspace encapsulation services, transforming damp crawlspaces into clean, dry spaces.

### Benefits of Crawlspace Encapsulation

**Moisture Control**
Encapsulation eliminates ground moisture that would otherwise evaporate into your home.

**Improved Air Quality**
Sealing crawlspace prevents mold spores, allergens, and pests from entering your living space.

**Energy Efficiency**
Sealed crawlspaces reduce HVAC workload, lowering energy bills.

**Structural Protection**
Moisture causes wood rot and compromises structural elements. Encapsulation protects your home's foundation.

**Pest Prevention**
Sealed crawlspaces deter rodents, insects, and other pests.

### Our Encapsulation Process

**1. Assessment and Planning**
We evaluate your crawlspace, checking for existing damage, moisture sources, and ventilation needs.

**2. Preparation**
We clean the crawlspace, removing debris, old insulation, and addressing any existing mold.

**3. Vapor Barrier Installation**
We install thick polyethylene vapor barriers on floors and walls, sealing all seams and edges.

**4. Sealing and Insulation**
We seal penetrations, vents, and access points. In some cases, we install insulation to improve thermal performance.

**5. Dehumidification**
We install crawlspace-specific dehumidifiers to maintain optimal humidity levels.

**6. Final Inspection**
We verify complete encapsulation and provide maintenance recommendations.

### Encapsulation vs. Ventilation

Traditional building codes called for ventilated crawlspaces, but modern understanding favors encapsulation in most cases. We assess your specific situation and recommend the optimal approach.
    `,
    faqs: [
      {
        question: 'How long does crawlspace encapsulation take?',
        answer: 'Most residential encapsulation projects complete in 2-5 days, depending on crawlspace size and condition.'
      },
      {
        question: 'Do I need to encapsulate if my crawlspace has vents?',
        answer: 'We assess your specific situation. In many cases, sealing vents and encapsulating is more effective than traditional ventilation.'
      },
      {
        question: 'Will encapsulation eliminate all moisture?',
        answer: 'Proper encapsulation significantly reduces moisture, but very humid climates may require supplemental dehumidification.'
      },
      {
        question: 'How much does crawlspace encapsulation cost?',
        answer: 'Costs vary based on crawlspace size and condition. We provide free estimates for all encapsulation projects.'
      },
      {
        question: 'Does encapsulation add value to my home?',
        answer: 'Yes. Encapsulation improves air quality, energy efficiency, and structural protection, all valued by home buyers.'
      }
    ]
  },
  {
    slug: 'commercial-water-damage',
    name: 'Commercial Water Damage',
    title: 'Commercial Water Damage Restoration',
    description: 'Professional water damage restoration services for businesses, warehouses, offices, and commercial properties.',
    fullContent: `
## Commercial Water Damage Restoration

Water damage to your business property means lost revenue and disrupted operations. Water Damage Champ provides professional commercial water damage restoration services, minimizing downtime and getting your business back up and running.

### Commercial Properties We Serve

**Office Buildings**
From server rooms to executive suites, we handle water damage in all commercial office environments.

**Warehouses and Industrial Facilities**
Large-scale water damage requires industrial equipment and experienced technicians.

**Retail Spaces**
We work around your business hours to minimize disruption to customers and operations.

**Hotels and Hospitality**
Guest comfort and safety are paramount. We respond quickly to protect guest rooms and common areas.

**Restaurants and Food Service**
Water damage in food service environments requires specialized sanitization and code compliance.

**Healthcare Facilities**
We understand the critical nature of healthcare environments and follow strict protocols.

### Our Commercial Restoration Process

**1. Emergency Response**
Our 24/7 line connects you with technicians immediately. We respond faster to minimize business interruption.

**2. Assessment and Planning**
We evaluate damage, create a restoration plan, and coordinate with facility managers and insurance adjusters.

**3. Extraction and Drying**
Industrial equipment handles large-scale water removal efficiently.

**4. Restoration and Reconstruction**
Our skilled craftsmen repair drywall, flooring, ceilings, and other elements.

**5. Content Handling**
We handle equipment, furniture, inventory, and records with care, coordinating packing and storage if needed.

**6. Final Inspection**
We verify complete restoration and provide documentation for insurance and quality assurance.

### Minimizing Business Interruption

We understand that time is money. Our services include:
- Working around your schedule
- Expedited drying techniques
- Coordinating with contractors
- Providing temporary barriers
- Managing content storage
    `,
    faqs: [
      {
        question: 'Can you work outside business hours?',
        answer: 'Yes. We coordinate with you to schedule work that minimizes disruption to your operations and customers.'
      },
      {
        question: 'Do you handle large-scale commercial jobs?',
        answer: 'Yes. Our team has experience with industrial-scale water damage, including warehouses, manufacturing facilities, and large office buildings.'
      },
      {
        question: 'How do you handle inventory and equipment?',
        answer: 'We carefully pack, catalog, and store affected items. We can coordinate with specialized content restoration services as needed.'
      },
      {
        question: 'Do you provide documentation for insurance claims?',
        answer: 'Yes. We provide comprehensive documentation including photographs, detailed reports, and itemized estimates for insurance purposes.'
      },
      {
        question: 'How quickly can you respond to commercial emergencies?',
        answer: 'We prioritize commercial accounts and can typically respond within hours to minimize business interruption.'
      }
    ]
  },
  {
    slug: 'emergency-water-damage',
    name: 'Emergency Water Damage',
    title: '24/7 Emergency Water Damage Response',
    description: '24/7 emergency water damage restoration services. Fast response when you need it most.',
    fullContent: `
## 24/7 Emergency Water Damage Response

Water damage doesn't wait for convenient times. Burst pipes, overflows, and flooding can strike at any hour. Water Damage Champ provides round-the-clock emergency response, 365 days a year.

### When to Call for Emergency Service

**Burst Pipes**
A burst pipe can flood your property within minutes. Every second counts.

**Sewage Backup**
Sewage backups pose health hazards and require immediate professional attention.

**Major Flooding**
Natural disasters, severe storms, or major plumbing failures cause extensive flooding.

**Active Leaks**
Significant water intrusion from roof damage or major leaks requires emergency response.

**Appliance Failures**
Water heater failures, washing machine overflows, and dishwasher leaks can cause extensive damage quickly.

### Our Emergency Response Process

**1. Immediate Contact**
Call our 24/7 emergency line. We answer immediately, gather information, and dispatch technicians.

**2. Rapid Dispatch**
Certified technicians are dispatched immediately, arriving at your property within hours.

**3. Emergency Extraction**
We begin water extraction immediately to prevent further damage.

**4. Assessment and Planning**
While extracting, we assess damage and create a restoration plan.

**5. Insurance Notification**
We help you contact your insurance company and begin the claims process.

**6. Complete Restoration**
We complete all restoration work, keeping you informed throughout the process.

### Why 24/7 Response Matters

**Prevent Secondary Damage**
Quick response prevents mold growth, structural damage, and content loss.

**Insurance Requirements**
Many insurance policies require immediate action to prevent further damage.

**Peace of Mind**
Professional response reduces stress during already difficult situations.

Don't wait. Contact Water Damage Champ immediately when water damage strikes.
    `,
    faqs: [
      {
        question: 'How quickly can you respond to my emergency?',
        answer: 'We typically arrive within 2-4 hours of your call, depending on location and demand. In some areas, we can arrive even faster.'
      },
      {
        question: 'Are your technicians available 24/7?',
        answer: 'Yes. Our emergency response team is available around the clock, every day of the year, including holidays.'
      },
      {
        question: 'What should I do while waiting for help?',
        answer: 'Turn off electricity in affected areas if safe, stop the water source if possible, and remove valuables from the affected area.'
      },
      {
        question: 'Will my insurance cover emergency services?',
        answer: 'Most policies cover sudden, accidental water damage. We work with all major insurance carriers and can verify coverage.'
      },
      {
        question: 'How much does emergency response cost?',
        answer: 'Emergency response itself is typically covered by insurance. We provide free estimates and work with insurance for seamless claims processing.'
      }
    ]
  }
];

export const serviceSlugs = services.map(s => s.slug);

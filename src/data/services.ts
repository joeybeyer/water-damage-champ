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
,
  // ═══════════════════════════════════════════════════════════
  // NEW SERVICES — SOP-compliant content per page-copy-template
  // ═══════════════════════════════════════════════════════════
  {
    slug: 'fire-damage-restoration',
    name: 'Fire Damage Restoration',
    title: 'Fire & Smoke Damage Restoration Services — 24/7 Emergency Response',
    description: 'Dealing with fire damage? Water Damage Champ provides complete fire and smoke restoration across California & Florida. Board-up, soot removal, odor elimination, and full reconstruction. Call (888) 510-9436.',
    fullContent: `
## Complete Fire & Smoke Damage Restoration

Fire damage doesn't end when the flames go out. Smoke, soot, and water used during firefighting create a cascade of secondary damage that worsens by the hour. Water Damage Champ provides comprehensive fire damage restoration throughout California and Florida — from emergency board-up to full structural reconstruction.

Our IICRC-certified technicians respond within hours of your call, securing your property and beginning the assessment process immediately. We serve homeowners and businesses in Los Angeles, San Diego, the San Francisco Bay Area, Tampa, and St. Petersburg.

### Why Immediate Response Matters

Soot and smoke residue become increasingly difficult to remove over time. Within 24 hours, soot begins permanently staining surfaces. Within 48 hours, metal fixtures start corroding. Acidic smoke residue etches glass and damages electronics if not addressed quickly.

### Our Fire Damage Restoration Process

**1. Emergency Board-Up & Securing**
We secure your property immediately — boarding windows, tarping the roof, and preventing unauthorized access. This protects against weather damage, theft, and further deterioration.

**2. Damage Assessment & Documentation**
Our team documents all fire, smoke, and water damage thoroughly. We photograph everything for insurance purposes and create a detailed restoration plan with your adjuster.

**3. Water Extraction & Drying**
Firefighting efforts often leave significant water damage. We extract standing water, deploy industrial dehumidifiers, and prevent mold growth in water-damaged areas.

**4. Soot & Smoke Removal**
Different fires produce different types of soot. Protein fires (kitchen), synthetic material fires, and wood fires each require specialized cleaning methods. Our technicians identify the soot type and apply the correct removal technique.

**5. Odor Elimination**
Smoke odor penetrates deep into building materials, fabrics, and HVAC systems. We use thermal fogging, ozone treatment, and hydroxyl generators to neutralize odors at the molecular level — not just mask them.

**6. Structural Cleaning & Restoration**
We clean and restore salvageable materials including drywall, framing, flooring, and cabinetry. Items that cannot be restored are carefully documented for insurance replacement.

**7. Full Reconstruction**
Our licensed contractors handle complete rebuild — from framing and drywall to paint and finish work. We restore your property to its pre-fire condition or better.

### Types of Fire Damage We Handle

- Kitchen fires and grease fires
- Electrical fires
- Appliance malfunctions
- Wildfire damage (common in Southern California communities like Malibu, Woodland Hills, and Encino)
- Lightning strike damage (frequent in Tampa Bay and St. Petersburg areas)
- Arson and vandalism fire damage
- Commercial fire damage

### Insurance Coordination

Fire damage claims are complex. We work directly with your insurance company from day one — handling documentation, supplemental estimates, and scope negotiations. Our team has processed thousands of fire claims and understands what adjusters need to approve restoration work promptly.

### Why Choose Water Damage Champ for Fire Restoration?

- 24/7 emergency response — we arrive within hours, not days
- IICRC-certified fire and smoke restoration technicians
- Complete service from board-up through reconstruction — one company, one point of contact
- Direct insurance billing and claims coordination
- Licensed general contractors for structural rebuild
- Serving communities across California and Florida
`,
    faqs: [
      {
        question: 'How quickly can you respond to fire damage?',
        answer: 'We provide 24/7 emergency response and typically arrive within 2-4 hours of your call. Our first priority is securing your property with board-up services and tarping to prevent further damage from weather or unauthorized access.'
      },
      {
        question: 'Does insurance cover fire damage restoration?',
        answer: 'Most homeowner and commercial property insurance policies cover fire damage restoration. We work directly with all major insurance carriers, handle the documentation and claims process, and bill your insurance company directly in most cases.'
      },
      {
        question: 'How long does fire damage restoration take?',
        answer: 'Timeline depends on severity. Minor smoke damage may take 1-2 weeks. Significant structural fire damage requiring reconstruction can take 2-6 months. We provide a detailed timeline during the initial assessment and keep you updated throughout.'
      },
      {
        question: 'Can smoke odor be completely removed?',
        answer: 'Yes. We use professional-grade thermal fogging, ozone treatment, and hydroxyl generators that neutralize smoke odor at the molecular level. Unlike air fresheners that mask the smell, these methods eliminate the odor permanently from building materials and contents.'
      },
      {
        question: 'Should I try to clean soot damage myself?',
        answer: 'We strongly advise against DIY soot cleaning. Improper wiping can spread soot deeper into surfaces and cause permanent staining. Different fire types produce different soot requiring specialized techniques. Incorrect cleaning can also void insurance coverage for those items.'
      },
      {
        question: 'Do you handle the full reconstruction after a fire?',
        answer: 'Yes. Water Damage Champ provides end-to-end service from emergency response through complete reconstruction. Our licensed general contractors handle framing, drywall, electrical, plumbing, flooring, painting, and finish work — restoring your property to pre-fire condition.'
      },
      {
        question: 'What areas do you serve for fire damage restoration?',
        answer: 'We serve communities throughout California including Los Angeles, San Diego, the Bay Area, Sacramento, and surrounding cities. In Florida, we serve Tampa, St. Petersburg, and surrounding Hillsborough and Pinellas County areas.'
      }
    ]
  },
  {
    slug: 'odor-removal',
    name: 'Odor Removal',
    title: 'Professional Odor Removal Services — Eliminate Odors Permanently',
    description: 'Stubborn odors from smoke, mold, pets, or water damage? Water Damage Champ uses thermal fogging, ozone, and hydroxyl treatment to eliminate odors permanently. Serving CA & FL. Call (888) 510-9436.',
    fullContent: `
## Professional Odor Removal & Deodorization Services

Persistent odors from water damage, fire, mold, pets, or biohazard situations don't respond to consumer-grade air fresheners. These odors penetrate deep into building materials — drywall, subflooring, insulation, HVAC ductwork, and structural framing — where surface cleaning can't reach.

Water Damage Champ provides professional-grade odor elimination across California and Florida using industrial equipment that neutralizes odor molecules at the source, not just masks them.

### Common Odor Sources We Treat

**Water Damage & Mold Odors**
Musty, damp odors signal moisture trapped in building materials. These can indicate active mold growth behind walls or beneath flooring. We identify the moisture source, remediate mold if present, and eliminate the odor through structural drying and deodorization.

**Smoke & Fire Odors**
Smoke particles embed deeply in porous materials. Kitchen grease fires, structural fires, and even cigarette smoke require different treatment approaches. Our technicians assess the smoke type and deploy the appropriate combination of cleaning and deodorization methods.

**Pet Odors**
Pet urine penetrates carpet, pad, and subfloor. Surface cleaning rarely reaches the full depth of contamination. We use enzymatic treatments, subfloor sealing, and deodorization to fully eliminate pet odors — not just cover them up.

**Biohazard & Sewage Odors**
Sewage backups, decomposition, and other biohazard situations produce severe odors that require professional remediation. We handle the complete cleanup, sanitization, and odor elimination process with proper safety protocols.

### Our Odor Elimination Methods

**Thermal Fogging**
Produces a deodorizing fog that penetrates the same spaces smoke and odor particles reach — cracks, crevices, fabric fibers, and porous materials. Particularly effective for smoke and fire odors.

**Ozone Treatment**
Ozone generators produce O3 molecules that oxidize and destroy odor-causing compounds at the molecular level. Highly effective for severe odors. Property must be vacated during treatment.

**Hydroxyl Generators**
Advanced photocatalytic technology that safely neutralizes odors while occupants remain in the building. Effective for moderate odors and ongoing maintenance.

**Enzymatic Treatments**
Biological enzymes break down organic odor sources — particularly effective for pet urine, sewage, and decomposition odors where the source material has penetrated porous surfaces.

**HVAC & Duct Cleaning**
Odors circulating through HVAC systems recontaminate cleaned spaces. We clean ductwork, replace filters, and treat the entire air handling system to prevent odor recirculation.

### Why DIY Odor Removal Fails

Consumer air fresheners, scented candles, and baking soda only mask odors temporarily. The odor-causing molecules remain embedded in building materials and return once the masking agent dissipates. Professional equipment reaches the molecular source of the odor and eliminates it permanently.

### Areas We Serve

We provide professional odor removal throughout California — including Los Angeles, San Diego, San Francisco, Cupertino, Torrance, Malibu, and surrounding communities. In Florida, we serve Tampa, St. Petersburg, and the greater Tampa Bay area.
`,
    faqs: [
      {
        question: 'Can you really remove odors permanently?',
        answer: 'Yes. Unlike air fresheners that mask odors, our professional equipment — thermal foggers, ozone generators, and hydroxyl technology — neutralizes odor molecules at the source. Once the odor-causing compounds are destroyed, the smell does not return.'
      },
      {
        question: 'How long does professional odor removal take?',
        answer: 'Most residential odor removal projects take 1-3 days depending on severity and the source. Severe smoke or biohazard odors may require multiple treatment cycles over 3-5 days. We assess and provide a timeline during the initial inspection.'
      },
      {
        question: 'Is ozone treatment safe?',
        answer: 'Ozone treatment is highly effective but requires the property to be vacated during treatment — including pets and plants. After treatment, we ventilate the space thoroughly before occupants return. Hydroxyl generators are an alternative that allows occupants to remain.'
      },
      {
        question: 'Do you handle the source of the odor or just the smell?',
        answer: 'We address both. If the odor stems from water damage, mold, or contamination, we remediate the source first. Treating the odor without fixing the cause would only provide temporary results. Source removal is always step one.'
      },
      {
        question: 'How much does odor removal cost?',
        answer: 'Cost varies based on the odor source, severity, and square footage. Minor pet odor in one room may cost a few hundred dollars, while whole-house smoke odor treatment runs higher. We provide free inspections and detailed estimates before any work begins.'
      },
      {
        question: 'Will my insurance cover odor removal?',
        answer: 'If the odor results from a covered event — fire, water damage, sewage backup — insurance typically covers professional odor removal as part of the restoration. We coordinate directly with your insurance company and handle the documentation.'
      }
    ]
  },
  {
    slug: 'sewage-cleanup',
    name: 'Sewage Cleanup',
    title: 'Emergency Sewage Cleanup & Sanitization — Category 3 Water Specialists',
    description: 'Sewage backup in your home or business? Water Damage Champ provides emergency Category 3 water cleanup with full sanitization. IICRC-certified technicians, 24/7 response. Call (888) 510-9436.',
    fullContent: `
## Emergency Sewage Cleanup & Sanitization Services

Sewage backups are classified as Category 3 — the most hazardous type of water damage. Raw sewage contains bacteria, viruses, parasites, and other pathogens that pose serious health risks. This is not a situation for DIY cleanup. Professional extraction, sanitization, and decontamination are essential.

Water Damage Champ provides 24/7 emergency sewage cleanup throughout California and Florida. Our IICRC-certified technicians arrive with full PPE, specialized extraction equipment, and EPA-registered antimicrobial solutions.

### Health Hazards of Sewage Exposure

Sewage contains E. coli, Salmonella, Hepatitis A, Giardia, and other dangerous pathogens. Exposure through skin contact, inhalation of contaminated air, or contact with contaminated surfaces can cause severe illness. Children, elderly, and immunocompromised individuals face the highest risk.

### Our Sewage Cleanup Process

**1. Safety Assessment**
We evaluate the contamination scope, shut off water supply if the backup is ongoing, and establish safety zones. All technicians wear full PPE including respirators.

**2. Sewage Extraction**
Industrial pumps and extraction equipment remove standing sewage. We extract contaminated water from carpets, subfloors, wall cavities, and any affected structural elements.

**3. Contaminated Material Removal**
Porous materials that absorbed sewage — carpet, pad, drywall below the flood line, insulation — are removed and disposed of following local health department regulations. These materials cannot be safely decontaminated.

**4. Antimicrobial Treatment**
All affected surfaces are treated with EPA-registered antimicrobial and biocide solutions. This kills remaining pathogens on structural materials, concrete, framing, and subfloor.

**5. Structural Drying**
Professional-grade dehumidifiers and air movers dry the structure completely. We monitor humidity levels with thermal imaging and moisture meters to ensure thorough drying and prevent secondary mold growth.

**6. Deodorization**
Sewage odor is eliminated using industrial deodorization methods — not masked with air fresheners. We use hydroxyl generators and thermal fogging to neutralize odor at the molecular level.

**7. Restoration**
We replace removed materials — new drywall, flooring, baseboards, and insulation — restoring your property to pre-damage condition.

### Common Causes of Sewage Backups

- Clogged or collapsed sewer lines
- Tree root intrusion into sewer pipes
- Heavy rain overwhelming municipal sewer systems (common in older California and Florida neighborhoods)
- Septic system failure
- Combined sewer overflows during storms

### Areas We Serve

Our sewage cleanup teams serve Los Angeles, San Diego, San Francisco, Sacramento, and communities throughout California. In Florida, we provide service in Tampa, St. Petersburg, and across the Tampa Bay region.
`,
    faqs: [
      {
        question: 'Is sewage cleanup covered by insurance?',
        answer: 'Most homeowner policies cover sudden sewage backups. However, coverage varies — some require a specific sewer backup rider. We work with your insurance company to document the damage and maximize your coverage.'
      },
      {
        question: 'Can I clean up sewage myself?',
        answer: 'We strongly advise against it. Raw sewage is Category 3 water containing dangerous pathogens. Professional cleanup requires specialized PPE, extraction equipment, EPA-registered antimicrobials, and proper disposal methods. DIY cleanup risks serious illness and may void insurance coverage.'
      },
      {
        question: 'How long does sewage cleanup take?',
        answer: 'Most residential sewage cleanups take 3-5 days including extraction, sanitization, drying, and deodorization. Larger affected areas or commercial properties may take longer. Restoration and rebuild adds additional time depending on scope.'
      },
      {
        question: 'Will sewage damage cause mold?',
        answer: 'Yes, if not dried properly. Mold can begin growing within 24-48 hours in damp conditions. Our drying protocol includes daily moisture monitoring to ensure the structure dries completely and prevents secondary mold contamination.'
      },
      {
        question: 'What should I do immediately after a sewage backup?',
        answer: 'Stop using water and toilets in the affected area. Do not attempt to wade through sewage. Turn off HVAC to prevent airborne contamination. Call us immediately at (888) 510-9436 for emergency response. Keep children and pets away from the affected area.'
      },
      {
        question: 'Do you dispose of contaminated materials properly?',
        answer: 'Yes. All sewage-contaminated materials are bagged, labeled, and disposed of following local health department and EPA guidelines. We handle all disposal logistics and documentation as part of our service.'
      }
    ]
  },
  {
    slug: 'flooded-basement',
    name: 'Flooded Basement Restoration',
    title: 'Flooded Basement Cleanup & Restoration — Fast Water Extraction',
    description: 'Flooded basement? Water Damage Champ provides emergency basement water extraction, drying, and restoration 24/7. Prevent mold and structural damage. Call (888) 510-9436 now.',
    fullContent: `
## Flooded Basement Cleanup & Restoration

A flooded basement demands immediate action. Standing water degrades foundation walls, destroys stored belongings, shorts electrical systems, and creates prime conditions for mold growth within 24-48 hours. Water Damage Champ provides emergency basement flooding response across California and Florida.

Our technicians arrive equipped with submersible pumps, truck-mounted extraction units, and professional drying systems capable of handling basement floods of any size — from minor seepage to several feet of standing water.

### Common Causes of Basement Flooding

**Heavy Rainfall & Storm Surge**
In California, atmospheric rivers and El Niño events overwhelm drainage systems. In Florida, hurricane season and afternoon thunderstorms regularly flood basements and lower levels — particularly in Tampa, St. Petersburg, and coastal communities.

**Sump Pump Failure**
When sump pumps fail during heavy rain, groundwater rises through the slab and drain tile system. We address both the immediate flooding and can recommend backup sump pump solutions.

**Plumbing Failures**
Burst pipes, water heater failures, and supply line breaks can dump hundreds of gallons into a basement quickly. We trace and stop the water source before beginning extraction.

**Foundation Cracks & Seepage**
Hydrostatic pressure pushes groundwater through foundation cracks. While immediate water removal is critical, we also identify the entry points and recommend long-term waterproofing solutions.

### Our Basement Flood Restoration Process

**1. Emergency Water Extraction**
Submersible pumps remove bulk standing water. Truck-mounted extraction units then pull remaining water from carpet, pad, and subflooring materials.

**2. Content Assessment & Removal**
We assess basement contents for salvageability. Items that can be restored go through our content cleaning process. Unsalvageable items are documented for insurance claims.

**3. Structural Drying**
Industrial dehumidifiers and air movers dry the basement structure — concrete walls, slab floor, framing, and drywall. We monitor moisture levels daily with meters and thermal imaging.

**4. Mold Prevention**
Antimicrobial treatment on all exposed surfaces prevents mold colonization during and after the drying process. If mold is already present, we perform full remediation before restoration.

**5. Restoration & Rebuild**
We replace damaged drywall, flooring, insulation, and baseboards. Electrical and mechanical systems are inspected and repaired as needed.

### Areas We Serve

We respond to basement flooding emergencies throughout California and Florida — including Los Angeles, San Diego, San Francisco, Palo Alto, Cupertino, Tampa, and St. Petersburg. Our 24/7 dispatch ensures rapid response regardless of location.
`,
    faqs: [
      {
        question: 'How quickly can you pump out a flooded basement?',
        answer: 'We arrive within 2-4 hours for emergency calls. Pump-out time depends on water volume — most residential basements can be extracted within 4-8 hours. Drying takes an additional 3-5 days with professional equipment.'
      },
      {
        question: 'Will a flooded basement cause mold?',
        answer: 'Mold can begin growing within 24-48 hours in standing water conditions. Professional extraction and drying significantly reduce mold risk. If mold has already started, we perform full remediation as part of the restoration process.'
      },
      {
        question: 'Does homeowner insurance cover basement flooding?',
        answer: 'Standard homeowner policies typically cover sudden events like burst pipes. Flood damage from external water sources usually requires separate flood insurance. Sewer backup may require an additional rider. We help navigate your specific coverage.'
      },
      {
        question: 'Can basement carpet be saved after flooding?',
        answer: 'It depends on the water category. Clean water (Category 1) from supply lines — carpet can often be professionally cleaned and dried. Grey or black water contamination requires carpet and pad removal and replacement.'
      },
      {
        question: 'Should I run my sump pump before you arrive?',
        answer: 'If your sump pump is working, let it run. However, do not enter standing water if there is any risk of electrical contact. Turn off the circuit breaker for the basement if you can do so safely from a dry area, then call us immediately.'
      },
      {
        question: 'Do you handle finished basement restorations?',
        answer: 'Yes. We restore finished basements including drywall, flooring, built-in cabinetry, home theaters, and bathroom fixtures. Our licensed contractors handle complete rebuild to return your basement to pre-flood condition.'
      }
    ]
  },
  {
    slug: 'frozen-burst-pipes',
    name: 'Frozen & Burst Pipe Repair',
    title: 'Frozen & Burst Pipe Water Damage Restoration — Emergency Response',
    description: 'Burst pipe flooding your property? Water Damage Champ provides emergency extraction, pipe damage repair coordination, and complete drying. Available 24/7. Call (888) 510-9436.',
    fullContent: `
## Frozen & Burst Pipe Water Damage Restoration

A single burst pipe can release hundreds of gallons of water per hour into your home or business — flooding multiple floors, destroying ceilings, warping hardwood, and saturating insulation. Water Damage Champ provides rapid emergency response to burst pipe damage across California and Florida.

While frozen pipes are less common in our primary service areas, supply line failures, corroded pipes, and water hammer damage are among the most frequent causes of residential water damage in Los Angeles, San Diego, the Bay Area, and Tampa.

### Common Pipe Failure Causes

**Supply Line Breaks**
Aging copper, galvanized, and polybutylene supply lines develop pinhole leaks and catastrophic failures. Older homes in San Mateo, Torrance, Encino, and other established California communities are particularly susceptible.

**Water Heater Failures**
Tank-style water heaters have a 10-15 year lifespan. When they fail, 40-80 gallons of water release at once — often in garages, utility rooms, or closets adjacent to living spaces.

**Washing Machine & Appliance Lines**
Rubber supply hoses deteriorate over time. A burst washing machine hose on an upper floor can cause cascading damage through multiple rooms and levels.

**Freeze Events**
While rare in California and Florida, cold snaps do occur. Uninsulated pipes in attics, exterior walls, and crawlspaces can freeze and burst during unusual cold weather events.

### Our Burst Pipe Response Process

**1. Water Source Shutoff**
First priority is stopping the water flow. We locate and shut the main water supply or isolate the failed line to prevent continued flooding.

**2. Emergency Water Extraction**
Truck-mounted extractors and portable units remove standing water from all affected areas — floors, wall cavities, ceiling voids, and between structural layers.

**3. Content Protection**
We move furniture and belongings away from affected areas. Salvageable items enter our content cleaning program. Everything is documented for insurance.

**4. Structural Drying**
Multi-point drying with commercial dehumidifiers and air movers. We use thermal imaging to detect moisture behind walls and under floors, ensuring complete drying throughout the structure.

**5. Mold Prevention**
Antimicrobial application to all exposed surfaces. Daily moisture monitoring ensures the environment stays below mold-growth thresholds throughout the drying period.

**6. Restoration**
We repair or replace damaged drywall, ceilings, flooring, paint, and trim. Our contractors restore your property to pre-damage condition.

### Insurance & Documentation

Burst pipe damage is typically covered under standard homeowner insurance policies. We document all damage with photos, moisture readings, and detailed scope reports. Our team works directly with your adjuster to expedite the claims process.

### Areas We Serve

We respond to burst pipe emergencies across California — Los Angeles, San Diego, San Francisco, Sacramento, and surrounding cities including Cupertino, Pacifica, Chula Vista, and Woodland Hills. In Florida, we serve Tampa, St. Petersburg, and the greater Tampa Bay area.
`,
    faqs: [
      {
        question: 'How fast can you respond to a burst pipe emergency?',
        answer: 'We provide 24/7 emergency response and arrive within 2-4 hours. For active flooding situations, call us immediately at (888) 510-9436 and shut off your main water supply if you can safely access it.'
      },
      {
        question: 'Is burst pipe damage covered by insurance?',
        answer: 'Yes, in most cases. Standard homeowner policies cover sudden and accidental water damage from burst pipes. We work directly with your insurance company and handle all documentation and claims coordination.'
      },
      {
        question: 'How much water can a burst pipe release?',
        answer: 'A typical residential supply line can release 4-8 gallons per minute — that is 240-480 gallons per hour. A burst pipe running overnight can flood an entire home. Shutting off the main water supply immediately is critical.'
      },
      {
        question: 'Can you detect water damage behind walls?',
        answer: 'Yes. We use thermal imaging cameras and professional-grade moisture meters to detect hidden moisture behind walls, under floors, and above ceilings. This ensures we find and dry all affected areas, preventing hidden mold growth.'
      },
      {
        question: 'Will burst pipe damage cause mold?',
        answer: 'Without professional drying, mold can begin growing within 24-48 hours. Our drying protocol uses industrial dehumidifiers and daily moisture monitoring to dry the structure thoroughly and prevent mold colonization.'
      },
      {
        question: 'Do you repair the pipe itself?',
        answer: 'We coordinate with licensed plumbers for the actual pipe repair. Our specialty is the water damage restoration — extraction, drying, mold prevention, and structural repair. We manage the entire process so you have one point of contact.'
      }
    ]
  }

];

export const serviceSlugs = services.map(s => s.slug);

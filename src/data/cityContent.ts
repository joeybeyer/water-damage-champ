export const cityContent: Record<string, { neighborhoods: string[]; landmarks: string; climate: string; faqs: { question: string; answer: string }[] }> = {
  'los-angeles': {
    neighborhoods: ['Hollywood', 'Beverly Hills', 'Santa Monica', 'Venice', 'Westwood', 'Brentwood', 'Burbank', 'Glendale'],
    landmarks: 'Hollywood Sign, Venice Beach, Santa Monica Pier, Griffith Observatory',
    climate: 'Mediterranean climate with dry summers and mild winters. Occasional heavy rains during winter storms can cause flooding in low-lying areas.',
    faqs: [
      { question: 'Do you service the Los Angeles area?', answer: 'Yes! We provide complete water damage restoration services throughout Los Angeles, including Hollywood, Beverly Hills, Santa Monica, and all surrounding areas.' },
      { question: 'What causes water damage in Los Angeles?', answer: 'Common causes include burst pipes from aging infrastructure, appliance failures, roof leaks from heavy rains, and flooding in flood-prone areas like Sun Valley and Glendale.' },
      { question: 'How quickly can you respond in LA traffic?', answer: 'We maintain technicians throughout the LA area enabling 2-4 hour response times in most areas. During heavy rain events, we prioritize emergency calls.' },
      { question: 'Do you work with LA insurance companies?', answer: 'Yes, we work with all major insurance carriers and understand the specific requirements of California insurance claims.' },
      { question: 'Can you handle mold remediation in older LA homes?', answer: 'Absolutely. We have extensive experience with older LA homes, properly assessing and safely removing mold while preserving historic elements.' }
    ]
  },
  'san-diego': {
    neighborhoods: ['La Jolla', 'Mission Beach', 'Pacific Beach', 'North Park', 'Hillcrest', 'Coronado', 'Point Loma'],
    landmarks: 'Balboa Park, Coronado Bridge, SeaWorld, La Jolla Cove',
    climate: 'Coastal Mediterranean climate with mild temperatures year-round. Heavy rains during monsoons can cause flooding in flood-prone areas.',
    faqs: [
      { question: 'Do you service San Diego?', answer: 'Yes! We provide complete water damage restoration services throughout San Diego County, from La Jolla to Chula Vista.' },
      { question: 'What water damage risks exist in San Diego?', answer: 'Risks include monsoonal flooding, pipe bursts from aging infrastructure, water heater failures, and coastal humidity causing mold issues.' },
      { question: 'How quickly can you respond in San Diego?', answer: 'We typically arrive within 2-4 hours. We maintain technicians throughout the county for fast response.' },
      { question: 'Do you handle coastal property water damage?', answer: 'Yes. We have experience with coastal properties including salt air corrosion issues and storm surge damage.' },
      { question: 'Can you help with flood damage from San Diego rivers?', answer: 'Yes, we handle all types of flood damage including from the San Diego River, Los Peñasquitos, and other waterways.' }
    ]
  },
  'san-francisco': {
    neighborhoods: ['Mission District', 'SOMA', 'Marina', 'Pacific Heights', 'Nob Hill', 'Castro', 'Haight-Ashbury'],
    landmarks: 'Golden Gate Bridge, Alcatraz, Fisherman\'s Wharf, Union Square',
    climate: 'Cool, foggy summers and mild, wet winters. Heavy storms can cause flooding and sewer backups.',
    faqs: [
      { question: 'Do you service San Francisco?', answer: 'Yes! We provide complete water damage restoration throughout San Francisco and the Bay Area.' },
      { question: 'What causes water damage in San Francisco?', answer: 'Common causes include old plumbing systems, heavy winter rains, sewer backups, and flooding in low-lying areas like the Mission.' },
      { question: 'How quickly can you respond in SF?', answer: 'We maintain Bay Area technicians enabling 2-4 hour response times throughout San Francisco.' },
      { question: 'Do you handle hillside property damage?', answer: 'Yes. We have experience with hillside properties including drainage issues and foundation water intrusion.' },
      { question: 'Can you help with Victorian-era water damage?', answer: 'We have extensive experience restoring historic Victorian homes common in San Francisco.' }
    ]
  },
  'sacramento': {
    neighborhoods: ['Midtown', 'East Sacramento', 'Land Park', 'Curtis Park', 'Newton Booth', 'Oak Park'],
    landmarks: 'Capitol Building, Old Sacramento, Crocker Art Museum, Memorial Auditorium',
    climate: 'Mediterranean with hot, dry summers and cool, wet winters. Winter storms can cause significant flooding.',
    faqs: [
      { question: 'Do you service Sacramento?', answer: 'Yes! We provide complete water damage restoration throughout Sacramento and the surrounding Valley.' },
      { question: 'What water damage risks exist in Sacramento?', answer: 'Risks include flooding from the Sacramento River, old plumbing in historic homes, and heavy winter rains causing roof leaks.' },
      { question: 'How quickly can you respond?', answer: 'We typically arrive within 2-4 hours. We maintain Sacramento-based technicians for fast response.' },
      { question: 'Do you handle flood damage from river flooding?', answer: 'Yes. We have extensive experience with Sacramento River flooding and flood damage restoration.' },
      { question: 'Can you help with old Victorian home water damage?', answer: 'Absolutely. We have experience restoring historic homes in Sacramento\'s established neighborhoods.' }
    ]
  },
  'tampa': {
    neighborhoods: ['Hyde Park', 'South Tampa', 'West Tampa', 'Davis Islands', 'Channelside', 'Ybor City', 'Carrollwood'],
    landmarks: 'Busch Gardens, Bayshore Boulevard, Tampa Bay, Ybor City',
    climate: 'Humid subtropical with hot summers and mild winters. Hurricane season (June-November) brings heavy rains and flooding.',
    faqs: [
      { question: 'Do you service Tampa?', answer: 'Yes! We provide complete water damage restoration throughout Tampa and the entire Tampa Bay area.' },
      { question: 'What causes water damage in Tampa?', answer: 'Major risks include hurricane and tropical storm flooding, burst pipes from aging infrastructure, and HVAC condensate issues in the humid climate.' },
      { question: 'How quickly can you respond during hurricane season?', answer: 'We maintain 24/7 emergency response with technicians positioned throughout the Tampa Bay area for fast deployment.' },
      { question: 'Do you handle hurricane flood damage?', answer: 'Yes. We have extensive experience with hurricane and tropical storm damage restoration throughout Florida.' },
      { question: 'Can you help with flood insurance claims?', answer: 'We work directly with flood insurance carriers and understand NFIP requirements for smooth claims processing.' }
    ]
  },
  'st-petersburg': {
    neighborhoods: ['Downtown St. Petersburg', 'Beach', 'Old Northeast', 'Kenwood', 'Historic Old Southeast'],
    landmarks: 'Salvador Dali Museum, St. Petersburg Pier, Vinoy Basin, Clearwater Beach',
    climate: 'Humid subtropical with tropical storms and hurricanes. Coastal flooding is a significant risk.',
    faqs: [
      { question: 'Do you service St. Petersburg?', answer: 'Yes! We provide complete water damage restoration throughout St. Petersburg and the Pinellas County area.' },
      { question: 'What water damage risks exist in St. Petersburg?', answer: 'Risks include coastal flooding from storms, hurricane damage, aging plumbing, and humidity-related mold issues.' },
      { question: 'How quickly can you respond?', answer: 'We typically arrive within 2-4 hours. We maintain local technicians for fast response.' },
      { question: 'Do you handle coastal storm damage?', answer: 'Yes. We have extensive experience with coastal storm surge and hurricane damage.' },
      { question: 'Can you help with flood insurance claims?', answer: 'Absolutely. We work directly with flood insurance carriers to streamline your claim.' }
    ]
  },
  'san-jose': {
    neighborhoods: ['Downtown', 'Willow Glen', 'Santana Row', 'Almaden Valley', 'Rose Garden', 'Berryessa'],
    landmarks: 'Tech Museum, Santana Row, SAP Center, Winchester Mystery House',
    climate: 'Mediterranean with dry summers and rainy winters. Silicon Valley flooding can occur during heavy rains.',
    faqs: [
      { question: 'Do you service San Jose?', answer: 'Yes! We provide complete water damage restoration throughout San Jose and the Silicon Valley area.' },
      { question: 'What causes water damage in San Jose?', answer: 'Common causes include aging infrastructure, heavy winter rains, creek flooding, and appliance failures.' },
      { question: 'How quickly can you respond?', answer: 'We typically arrive within 2-4 hours. We maintain South Bay technicians for fast response.' },
      { question: 'Do you work with tech company insurance?', answer: 'Yes. We understand the insurance needs of tech companies and employees in the Silicon Valley area.' },
      { question: 'Can you handle smart home water damage?', answer: 'We are experienced with modern homes including smart home systems and specialized electronics.' }
    ]
  },
  'oakland': {
    neighborhoods: ['Lake Merritt', 'Downtown', 'Rockridge', 'Piedmont', 'Temescal', 'Grand Lake'],
    landmarks: 'Lake Merritt, Oakland Museum, Jack London Square, Chabot Space & Science Center',
    climate: 'Mediterranean with dry summers and wet winters. Hillside areas face mudslide risks during heavy rains.',
    faqs: [
      { question: 'Do you service Oakland?', answer: 'Yes! We provide complete water damage restoration throughout Oakland and the East Bay.' },
      { question: 'What causes water damage in Oakland?', answer: 'Risks include hillside drainage issues, old plumbing, flooding in flatlands, and roof leaks during heavy rains.' },
      { question: 'How quickly can you respond?', answer: 'We typically arrive within 2-4 hours. We maintain East Bay technicians for fast response.' },
      { question: 'Do you handle hillside property damage?', answer: 'Yes. We have experience with Oakland hillside properties including drainage and foundation water issues.' },
      { question: 'Can you help with Lake Merritt area flooding?', answer: 'Absolutely. We understand the specific flooding risks in the Lake Merritt and downtown Oakland areas.' }
    ]
  },
  // Default content for other cities
  'default': {
    neighborhoods: ['Downtown', 'Historic District', 'Residential Areas'],
    landmarks: 'Local landmarks and attractions',
    climate: 'Varied climate with seasonal weather patterns. Regular maintenance can prevent most water damage.',
    faqs: [
      { question: 'Do you service this area?', answer: 'Yes! We provide complete water damage restoration services throughout this region.' },
      { question: 'What causes water damage in this area?', answer: 'Common causes include burst pipes, appliance failures, roof leaks, and severe weather events.' },
      { question: 'How quickly can you respond?', answer: 'We typically arrive within 2-4 hours of your call, depending on location and availability.' },
      { question: 'Do you work with insurance companies?', answer: 'Yes, we work directly with all major insurance carriers and can help verify your coverage.' },
      { question: 'Can you handle mold remediation?', answer: 'Yes, we provide comprehensive mold remediation services as part of our restoration process.' }
    ]
  }
};

export function getCityContent(slug: string) {
  return cityContent[slug] || cityContent['default'];
}

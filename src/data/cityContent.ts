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

  'cupertino': {
      neighborhoods: ['Monta Vista', 'Garden Gate', 'Cypress', 'Homestead', 'Crossroads', 'North Cupertino', 'Rancho Rinconada', 'Seven Springs'],
      landmarks: 'Cupertino City Hall, Cupertino Civic Center, Cupertino Library, Main Street Cupertino, Homestead Road Corridor',
      climate: 'Cupertino experiences a Mediterranean climate with warm, dry summers and mild winters. The area faces occasional flooding from San Francisco Bay storms and has seen increased water damage from atmospheric river events in recent years. The valley terrain can trap moisture, leading to pooling in low-lying areas.',
      faqs: [
        { question: 'Does Cupertino have flood zones that affect homes?', answer: 'Yes, portions of Cupertino near Calabazas Creek and Permanente Creek fall within FEMA flood zones. The 2017 floods caused significant damage in the Homestead area, and new development in North Cupertino has increased runoff concerns.' },
        { question: 'How do Santa Clara County water main breaks affect Cupertino homes?', answer: 'Aging water infrastructure in older Cupertino neighborhoods like Monta Vista has led to main breaks that have flooded basements and garages. The city has an ongoing pipe replacement program.' },
        { question: 'What water damage risks exist near Cupertino\'s creeks?', answer: 'San Francisco Bay Trail development and creek culverts have caused flooding in Garden Gate and Crossroads areas during heavy rains. Native soil expansion from saturation leads to foundation issues.' },
        { question: 'Are Cupertino\'s hillside homes at risk for water damage?', answer: 'Homes in the Seven Springs and North Cupertino hill areas face slope erosion and mudslide risks during intense winter storms. Retaining wall failures have caused property damage.' },
        { question: 'Does Cupertino have Mold concerns after water events?', answer: 'Following the 2017 flooding, Cupertino homes experienced significant mold growth due to delayed drying. The Mediterranean climate creates ideal conditions for mold after water damage if not properly remediated within 48 hours.' }
      ]
    },
    'sherman-oaks': {
      neighborhoods: ['Sherman Oaks', 'Valley Village', 'Studio City', 'Van Nuys', 'Encino', 'Reseda', 'Woodland Hills', 'Toluca Lake'],
      landmarks: 'Sherman Oaks Galleria, Ventura Boulevard Corridor, Van Nuys Boulevard, Sepulveda Basin, Hollywood Burbank Airport',
      climate: 'Sherman Oaks experiences hot, dry Santa Ana wind conditions in fall and winter, which can exacerbate fire damage but reduce flood risks. The San Fernando Valley summer heat can cause AC condensation leaks. Winter storms occasionally bring heavy rain that overwhelms the LA River channel system.',
      faqs: [
        { question: 'How do Santa Ana winds affect water damage restoration in Sherman Oaks?', answer: 'Santa Ana winds create rapid drying conditions that can warp wooden floors and cause drywall cracks during restoration. However, they also help prevent mold growth if dehumidification is properly managed.' },
        { question: 'What flood risks exist near the Los Angeles River in Sherman Oaks?', answer: 'The LA River channel through Sherman Oaks has overflowed during heavy storms, flooding streets and underground parking in the Ventura Boulevard corridor. Development in the Sepulveda Basin affects downstream flow.' },
        { question: 'Are Sherman Oaks older homes prone to plumbing water damage?', answer: 'Many Sherman Oaks homes built in the 1950s-1970s have original cast iron pipes that corrode and burst. The Valley Village area particularly has experienced multiple main breaks causing basement flooding.' },
        { question: 'Does Sherman Oaks face sewer backup issues?', answer: 'Combined storm/sewer systems in older Sherman Oaks neighborhoods can back up during heavy rains, causing wastewater to enter homes through floor drains. This is particularly problematic in low-lying areas near the LA River.' },
        { question: 'How does the San Fernando Valley heat affect water damage?', answer: 'Summer temperatures exceeding 100°F in Sherman Oaks cause AC systems to work overtime, leading to condensate line leaks and water damage in ceilings. The dry heat also causes wood framing to shrink, creating gaps for water intrusion.' }
      ]
    },
    'corona-del-mar': {
      neighborhoods: ['Corona Del Mar', 'Big Canyon', 'Newport Coast', 'Bayside', 'Harbor View', 'Cameo Shores', 'Pelican Hill', 'One Ford Road'],
      landmarks: 'Corona Del Mar State Beach, Big Canyon, Newport Harbor, Pacific Coast Highway, Crystal Cove State Park',
      climate: ' Corona Del Mar enjoys mild coastal weather with marine layer fog in summer. However, winter storms bring heavy rains that cause coastal erosion and flash flooding. The steep canyon areas experience rapid water runoff, and sea level rise threatens coastal properties.',
      faqs: [
        { question: 'What flood risks exist in Corona Del Mar\'s canyon areas?', answer: 'Big Canyon and canyon areas near Corona Del Mar experience flash flooding during heavy rains. The narrow drainage paths channel water rapidly, and several homes have suffered damage from debris flows.' },
        { question: 'How does coastal erosion affect Corona Del Mar water damage?', answer: 'Winter storms and rising sea levels have accelerated coastal erosion at Corona Del Mar State Beach. Seawater intrusion damages foundations and underground utilities, especially during high tide and storm surge combinations.' },
        { question: 'Does Corona Del Mar have drainage issues on Pacific Coast Highway?', answer: 'PCH drainage systems frequently overwhelm during heavy rains, causing standing water across the highway. The low point near Corona Del Mar has stranded vehicles and caused water damage to adjacent businesses.' },
        { question: 'Are Corona Del Mar coastal homes at risk from sea level rise?', answer: 'Coastal properties in Corona Del Mar face increasing flood risks from sea level rise. Storm surges combine with high tides to flood lower floors, and many waterfront homes have installed pump systems.' },
        { question: 'How does marine fog affect water damage in Corona Del Mar?', answer: 'Persistent marine layer fog in Corona Del Mar creates condensation issues in crawl spaces and attics. This moisture leads to wood rot and mold growth, particularly in older homes without proper ventilation.' }
      ]
    },
    'newport-beach': {
      neighborhoods: ['Newport Center', 'Balboa Peninsula', 'Lido Isle', 'Harbor Island', 'Bay Island', 'Promontory', 'Newport Coast', 'Fashion Island'],
      landmarks: 'Newport Harbor, Balboa Pier, Fashion Island, Newport Beach Pier, Corona del Mar State Beach',
      climate: 'Newport Beach experiences mild coastal climate with frequent marine fog in summer. However, winter atmospheric river storms bring intense rainfall that overwhelms drainage systems. The harbor area faces flooding from both storm runoff and tidal surges.',
      faqs: [
        { question: 'What flood risks exist in Newport Beach harbor areas?', answer: 'Newport Harbor experiences flooding during heavy rains when storm drains overwhelm. Tidal surges during winter storms have flooded lower floors of waterfront homes on Balboa Peninsula and Lido Isle.' },
        { question: 'How do atmospheric river storms affect Newport Beach?', answer: 'Atmospheric river events have caused significant flooding in Newport Beach, particularly in 2023 when over 4 inches fell in 24 hours. The sudden intense rainfall overwhelms local drainage and causes street flooding.' },
        { question: 'Are Newport Beach properties at risk from sea level rise?', answer: 'Low-lying areas in Newport Beach including parts of Balboa Peninsula and Harbor Island face increasing flood risks from sea level rise. Many homes have elevated electrical panels and HVAC systems.' },
        { question: 'Does Newport Beach have sewer backup issues during storms?', answer: 'Older sewer lines in Newport Beach, particularly in the Balboa Peninsula area, can backup during heavy rains. The flat terrain and high water table create drainage challenges.' },
        { question: 'How does Newport Beach\'s high water table affect foundations?', answer: 'The high water table in Newport Beach causes hydrostatic pressure against foundations. During extended wet periods, water seeps through foundation cracks, creating moisture issues in basements and ground-floor rooms.' }
      ]
    },
    'malibu': {
      neighborhoods: ['Central Malibu', 'Malibu Beach', 'Malibu Colony', 'Point Dume', 'Trancas Canyon', 'Pacific Palisades', 'Topanga', 'Malibu Canyon'],
      landmarks: 'Malibu Pier, Pepperdine University, Zuma Beach, Point Dume State Beach, Malibu Creek State Park',
      climate: 'Malibu experiences mild coastal weather but faces significant risks from wildfires followed by mudslides during rains. The Santa Monica Mountains terrain channels water through narrow canyons, causing flash floods. Coastal fog provides moisture that leads to mold in older structures.',
      faqs: [
        { question: 'What mudslide risks exist in Malibu after fires?', answer: 'Malibu faces severe mudslide risks in the Santa Monica Mountains following wildfires. The 2018 Woolsey Fire destroyed vegetation, and subsequent rains caused mudflows that damaged homes in Malibu Canyon and Trancas Canyon.' },
        { question: 'How do Malibu\'s canyon drainage systems perform?', answer: 'Malibu\'s narrow canyon roads act as drainage channels during heavy rains. Malibu Canyon Road has experienced flash flooding that traps vehicles and floods adjacent properties multiple times.' },
        { question: 'Does Malibu face coastal cliff erosion issues?', answer: 'Coastal cliff erosion from wave action and rain has caused property damage in Malibu. Point Dume and central Malibu areas have experienced cliff collapses that threaten homes and utilities.' },
        { question: 'Are Malibu beachfront properties at risk from high tides?', answer: 'Malibu beachfront properties face flooding during high tides combined with winter storm surges. King tides have flooded beach parking areas and ground-floor beach houses, particularly in Malibu Beach.' },
        { question: 'How does coastal fog affect Malibu homes?', answer: 'Persistent coastal fog in Malibu creates moisture that leads to wood rot and mold in older homes. The damp conditions are particularly problematic in homes without proper ventilation in the Malibu Colony area.' }
      ]
    },
    'encino': {
      neighborhoods: ['Encino', 'Lake Encino', 'Ventura Village', 'Encino Heights', 'Mulholland Hills', 'Reseda', 'Tarzana', 'Woodland Hills'],
      landmarks: 'Encino Park, Ventura Boulevard, Lake Encino, Los Angeles River, Sepulveda Basin',
      climate: 'Encino experiences hot San Fernando Valley summers with occasional monsoonal moisture in late summer. Winter storms can cause flooding from the Los Angeles River channel. The valley heat causes AC condensation issues, while Santa Ana winds increase fire followed by flood risks.',
      faqs: [
        { question: 'How does the Los Angeles River flooding affect Encino?', answer: 'The LA River channel through Encino has overflowed during heavy storms, flooding streets and properties near the river. The Sepulveda Basin holdover affects downstream flow into Encino.' },
        { question: 'What water damage risks exist from Encino Lake?', answer: 'Lake Encino (the reservoir) has experienced overflow during heavy rains, flooding nearby properties. The drainage system serving the lake has been upgraded after past incidents flooded Encino Park areas.' },
        { question: 'Are older Encino homes prone to water damage?', answer: 'Many Encino homes built in the 1960s-1970s have aging roofs and plumbing. The original tar-and-gravel roofs commonly found in Encino Heights frequently leak during heavy rains.' },
        { question: 'Does Encino have flooding from Ventura Boulevard drainage?', answer: 'Ventura Boulevard in Encino has experienced flooding during heavy rains when storm drains overwhelm. The commercial areas near Encino Town Center have seen multiple flood events.' },
        { question: 'How do Santa Ana winds affect water damage in Encino?', answer: 'Santa Ana winds increase fire risks in Encino\'s hillside areas, followed by mudslide risks during subsequent rains. The Mulholland Hills area faces debris flow risks after vegetation burns.' }
      ]
    },
    'woodland-hills': {
      neighborhoods: ['Woodland Hills', 'Canoga Park', 'Warner Center', 'West Hills', 'Calabasas', 'Topanga', 'Tarzana', 'Reseda'],
      landmarks: 'Westfield Topanga, Warner Center, Woodland Hills Recreation Center, Los Angeles River, Topanga Canyon Boulevard',
      climate: 'Woodland Hills experiences the hottest temperatures in the San Fernando Valley, exceeding 110°F during heat waves. Summer monsoons bring sudden heavy rains that cause flash flooding. The Santa Ana winds create fire followed by mudslide risks in the hills.',
      faqs: [
        { question: 'What flood risks exist in Woodland Hills from heavy rains?', answer: 'Woodland Hills experiences flash flooding during monsoonal storms. The intersection at Topanga Canyon Boulevard and Victory Boulevard has repeatedly flooded, stranding vehicles and damaging nearby businesses.' },
        { question: 'How does the Los Angeles River affect Woodland Hills?', answer: 'The LA River channel through Woodland Hills carries significant runoff from upstream storms. Commercial properties near the river in Warner Center have faced flood damage during heavy rain events.' },
        { question: 'Are Woodland Hills hillside properties at mudslide risk?', answer: 'Homes in the Topanga Canyon and Calabasas areas above Woodland Hills face mudslide risks after fires. The 2019 Woolsey Fire burned the hillsides, and subsequent rains caused debris flows into Woodland Hills.' },
        { question: 'Does Woodland Hills have drainage issues in new developments?', answer: 'The Warner Center development in Woodland Hills has experienced drainage issues during heavy rains. Storm water runoff from the commercial areas has overwhelmed local storm drains.' },
        { question: 'How does extreme heat affect water damage restoration in Woodland Hills?', answer: 'Woodland Hills\' extreme summer heat (often exceeding 110°F) causes rapid drying that can damage materials during restoration. HVAC systems work overtime, and condensation leaks are common.' }
      ]
    },
    'pacifica': {
      neighborhoods: ['Pacifica', 'Linda Mar', 'Rockaway Beach', 'Fairmont', 'Westview', 'Pacifica Heights', 'Sharp Park', 'Sea Gate'],
      landmarks: 'Rockaway Beach, Pacifica State Beach, Devil\'s Slide, Sweeney Ridge, San Pedro Valley State Beach',
      climate: 'Pacifica experiences cool, foggy coastal weather with significant rainfall in winter. The steep coastal hills channel water rapidly, causing flash flooding. Sea spray and fog create persistent moisture issues. The area faces erosion from coastal storms.',
      faqs: [
        { question: 'What flood risks exist in Pacifica from heavy rainfall?', answer: 'Pacifica experiences flash flooding during heavy winter rains. The steep terrain between Rockaway Beach and Linda Mar channels water rapidly through neighborhoods, causing street flooding and property damage.' },
        { question: 'How does coastal erosion affect Pacifica homes?', answer: 'Coastal erosion has caused significant property damage in Pacifica, particularly at Rockaway Beach and Devil\'s Slide areas. Cliff collapses have threatened homes and required emergency protective measures.' },
        { question: 'Does Pacifica face flooding from creeks and streams?', answer: 'San Pedro Creek in Pacifica has repeatedly flooded, affecting the Fairmont and Sharp Park areas. The creek carries runoff from Sweeney Ridge and overwhelms during heavy rains.' },
        { question: 'Are Pacifica coastal properties at risk from storm surges?', answer: 'Pacifica\'s beachfront properties face flooding from winter storm surges combined with high tides. Wave action during storms has damaged beachfront homes and the Pacifica State Beach parking area.' },
        { question: 'How does persistent fog affect water damage in Pacifica?', answer: 'Persistent marine fog in Pacifica creates ongoing moisture problems. The damp conditions lead to wood rot, mold growth, and corrosion of metal fixtures, particularly in older homes without proper ventilation.' }
      ]
    },
    'torrance': {
      neighborhoods: ['Torrance', 'Old Town Torrance', 'South Torrance', 'West Torrance', 'Hollywood Riviera', 'Walteria', 'Seaside', 'Harbor City'],
      landmarks: 'Torrance Beach, Del Amo Fashion Center, Torrance Airport, Madrona Marsh, Western Avenue Corridor',
      climate: 'Torrance experiences mild coastal climate with fog in summer and occasional heavy rains in winter. The flat terrain can lead to standing water during storms. The area faces drainage challenges from urban runoff and the nearby Los Angeles Harbor.',
      faqs: [
        { question: 'What flood risks exist in Torrance during heavy rains?', answer: 'Torrance experiences flooding in low-lying areas during heavy rains. The intersection near Western Avenue and Sepulveda Boulevard has repeatedly flooded, as has the Del Amo Fashion Center area.' },
        { question: 'Does Torrance have drainage issues from urban development?', answer: 'Urban runoff from Torrance\'s extensive commercial areas overwhelms storm drains during heavy rains. The flat terrain in South Torrance prevents rapid water drainage, causing standing water.' },
        { question: 'Are Torrance properties near the harbor at flood risk?', answer: 'Properties near the Los Angeles Harbor in Harbor City face flooding risks during storm surges and high tides. The low-lying areas near the water have experienced flood damage during winter storms.' },
        { question: 'Does Torrance face soil saturation issues?', answer: 'The high water table in parts of Torrance causes water to seep through foundations during extended wet periods. The Hollywood Riviera area, built on former wetlands, has particular moisture issues.' },
        { question: 'How does the Madrona Marsh affect surrounding water damage?', answer: 'The Madrona Marsh wetland in central Torrance absorbs significant stormwater runoff but can overflow during heavy rains, affecting surrounding residential properties in the Walteria area.' }
      ]
    },
    'chula-vista': {
      neighborhoods: ['Chula Vista', 'Eastlake', 'Otay Ranch', 'South San Diego', 'Sunbow', 'San Miguel', 'Proctor Valley', 'Bonita'],
      landmarks: 'Chula Vista Bayfront, Otay Town Center, Chula Vista Marina, San Miguel Mountain, Lower Otay Reservoir',
      climate: 'Chula Vista experiences mild Mediterranean climate with occasional heavy rains from winter storms and late-summer monsoons. The Otay River valley can flood during heavy rains. Development in former agricultural areas faces drainage challenges.',
      faqs: [
        { question: 'What flood risks exist in Chula Vista from the Otay River?', answer: 'The Otay River in Chula Vista has flooded during heavy rains, affecting the Otay Ranch and Eastlake communities. The river carries runoff from the Otay Mountains and can overflow its banks.' },
        { question: 'Does Chula Vista have drainage issues in new developments?', answer: 'New developments in Eastlake and Otay Ranch have experienced drainage issues during heavy rains. The rapid development changed natural drainage patterns, causing flooding in some neighborhoods.' },
        { question: 'Are Chula Vista properties at risk from reservoir overflow?', answer: 'The Lower Otay Reservoir near Chula Vista has overflowed during heavy rainy seasons, flooding downstream properties in the San Miguel and Proctor Valley areas.' },
        { question: 'Does Chula Vista face flooding from the border region?', answer: 'Runoff from Tijuana and the border region flows through Chula Vista via the Otay River. During heavy rains, this cross-border runoff has caused significant flooding in Chula Vista neighborhoods.' },
        { question: 'How does Chula Vista\'s agricultural history affect drainage?', answer: 'Former agricultural land in Chula Vista has drainage issues from compacted soil and altered terrain. The Sunbow and Bonita areas have experienced ponding after heavy rains due to poor soil absorption.' }
      ]
    },
    'milpitas': {
      neighborhoods: ['Milpitas', 'Berryessa', 'Warm Springs', 'Milpitas Central', 'Alviso', 'Pinewood', 'Mayhews', 'Rancho Milpitas'],
      landmarks: 'Great Mall of the Great Lakes, Milpitas Sports Complex, Berryessa Creek, Alviso Marina, Montague Expressway Corridor',
      climate: 'Milpitas experiences hot inland valley summers and cool winters. The area lies near Berryessa Creek and faces flood risks from creek overflow. The flat valley floor creates drainage challenges during heavy rains from Pacific storms.',
      faqs: [
        { question: 'What flood risks exist in Milpitas from Berryessa Creek?', answer: 'Berryessa Creek in Milpitas has repeatedly flooded during heavy rains, affecting properties near the creek and the Great Mall area. The creek carries runoff from the Diablo Range foothills.' },
        { question: 'Does Milpitas have flooding from urban development?', answer: 'Urban runoff from Milpitas\' extensive commercial and residential development overwhelms storm drains during heavy rains. The flat terrain in the central area causes standing water.' },
        { question: 'Are Alviso properties at risk from San Francisco Bay flooding?', answer: 'The Alviso area of Milpitas lies near sea level and faces flood risks from San Francisco Bay. Storm surges and high tides combine with heavy runoff to flood low-lying properties.' },
        { question: 'Does Milpitas face flooding from the硅谷科技园区?', answer: 'Tech campuses in the Warm Springs area of Milpitas have experienced flooding when storm drains clog. The rapid expansion of facilities has altered local drainage patterns.' },
        { question: 'How does the Milpitas water table affect foundations?', answer: 'The high water table in parts of Milpitas causes hydrostatic pressure against foundations. Extended rainy seasons cause water to seep through basement floors and foundation cracks.' }
      ]
    },
    'san-mateo': {
      neighborhoods: ['San Mateo', 'San Mateo Village', 'Hayward Park', 'Beresford', 'Baywood', 'Arlington', 'Farm Hills', 'Parkside'],
      landmarks: 'San Mateo County History Museum, Downtown San Mateo, San Mateo Creek, Crystal Springs Regional Trail, Bayfront',
      climate: 'San Mateo experiences mild coastal climate with significant rainfall in winter. The area lies near San Mateo Creek and faces flood risks during heavy storms. The rolling hills and bay front create varied drainage patterns.',
      faqs: [
        { question: 'What flood risks exist in San Mateo from San Mateo Creek?', answer: 'San Mateo Creek has flooded during heavy rains, affecting properties in the San Mateo Village and Baywood neighborhoods. The creek carries runoff from the Santa Cruz Mountains foothills.' },
        { question: 'Does San Mateo have flooding in the Bayfront areas?', answer: 'Bayfront properties in San Mateo face flood risks from storm surges and high tides combined with heavy runoff. The low-lying areas near the bay have experienced flooding during winter storms.' },
        { question: 'Are San Mateo hillside properties at risk for water damage?', answer: 'Homes in the Farm Hills and Arlington areas face slope erosion during heavy rains. The hillside terrain channels water rapidly, and some properties have experienced minor mudslide issues.' },
        { question: 'Does downtown San Mateo have drainage issues?', answer: 'Downtown San Mateo\'s older storm drainage system has overwhelmed during heavy rains, causing street flooding on El Camino Real and near the downtown commercial area.' },
        { question: 'How does San Mateo\'s fog affect water damage?', answer: 'Persistent coastal fog in San Mateo creates moisture that leads to mold growth in older homes. The damp conditions are particularly problematic in homes with poor ventilation in the Parkside area.' }
      ]
    },
    'chino-hills': {
      neighborhoods: ['Chino Hills', 'Soquel Hills', 'Windemere', 'Chino Hills Parkway', 'Carbon Canyon', 'Vellagio', 'St. James', 'Los Serranos'],
      landmarks: 'Chino Hills State Park, The Shoppes at Chino Hills, Carbon Canyon Regional Park, Chino Hills Tower, San Gabriel River',
      climate: 'Chino Hills experiences hot inland valley summers and mild winters. The area lies near the San Gabriel River and faces flood risks in low-lying areas. The rolling hills channel water through canyons during heavy rains.',
      faqs: [
        { question: 'What flood risks exist in Chino Hills from the San Gabriel River?', answer: 'The San Gabriel River through Chino Hills has flooded during heavy rains, affecting properties in the Los Serranos and Carbon Canyon areas. The river carries significant runoff from the San Gabriel Mountains.' },
        { question: 'Does Chino Hills have canyon flooding issues?', answer: 'Carbon Canyon in Chino Hills experiences flash flooding during heavy rains. The narrow canyon channels water rapidly, and several homes have suffered damage from flooding and debris.' },
        { question: 'Are new developments in Chino Hills at flood risk?', answer: 'New developments in Windemere and Soquel Hills have experienced drainage issues during heavy rains. The rapid development altered natural drainage patterns, causing temporary flooding.' },
        { question: 'Does Chino Hills face flooding from the 71 Expressway corridor?', answer: 'Runoff from the 71 Expressway in Chino Hills overwhelms local storm drains during heavy rains, causing flooding on Chino Hills Parkway and near The Shoppes at Chino Hills.' },
        { question: 'How does Chino Hills\' rural history affect drainage?', answer: 'Former agricultural land in Chino Hills has drainage issues from the clay-rich soil. The slow absorption rate causes water to pond in low-lying areas after heavy rains.' }
      ]
    },
    'los-gatos': {
      neighborhoods: ['Los Gatos', 'Almaden Valley', 'Vasona Heights', 'Summit Road', 'Greene', 'Los Gatos Mountains', 'Cherry Creek', 'Almaden'],
      landmarks: 'Los Gatos Town Center, Vasona Lake County Park, Lexington Reservoir, Los Gatos Creek, Santa Cruz Mountains',
      climate: 'Los Gatos experiences mild Mediterranean climate with significant rainfall in winter. The Santa Cruz Mountains terrain creates flash flood risks in canyons. Creek systems overflow during heavy rains.',
      faqs: [
        { question: 'What flood risks exist in Los Gatos from Los Gatos Creek?', answer: 'Los Gatos Creek has flooded during heavy rains, affecting properties in the downtown area and near Vasona Lake. The creek carries runoff from the Santa Cruz Mountains foothills.' },
        { question: 'Does Los Gatos have canyon flash flooding issues?', answer: 'Canyon areas in Los Gatos, particularly in the Almaden Valley and Los Gatos Mountains, experience flash flooding during heavy rains. Narrow canyons channel water rapidly, causing debris flows.' },
        { question: 'Are Los Gatos hillside properties at mudslide risk?', answer: 'Homes in the hillside areas of Los Gatos face mudslide risks after heavy rains, particularly where vegetation has been disturbed. The Summit Road and Vasona Heights areas have experienced minor slides.' },
        { question: 'Does Los Gatos face flooding from Lexington Reservoir?', answer: 'Lexington Reservoir in Los Gatos has overflowed during heavy rainy seasons, flooding downstream areas along Los Gatos Creek. The reservoir manages significant runoff from the mountains.' },
        { question: 'How does Los Gatos\' mountain terrain affect water damage?', answer: 'The steep terrain in Los Gatos channels water rapidly through neighborhoods, overwhelming drainage systems. Properties in the Cherry Creek area have experienced flooding from fast-moving runoff.' }
      ]
    },
    'foster-city': {
      neighborhoods: ['Foster City', 'San Mateo', 'Edgewater', 'Mariners Island', 'Palace', 'Catalina', 'Parkside', 'Boardwalk'],
      landmarks: 'Foster City Lagoon, Leo J. Ryan Park, The Boardwalk, Edgewater Shopping Center, Marina Lagoon',
      climate: 'Foster City experiences mild coastal climate on the San Francisco Peninsula. The city is built largely on filled marshland, creating significant flood risks during heavy rains and high tides. The lagoon system can overflow.',
      faqs: [
        { question: 'What flood risks exist in Foster City from the lagoon?', answer: 'Foster City\'s lagoon system has overflowed during heavy rains combined with high tides, flooding streets and properties. The Marina Lagoon and Foster City Lagoon both pose flood risks.' },
        { question: 'Does Foster City face flooding from sea level rise?', answer: 'As a city largely built on filled marshland, Foster City faces increasing flood risks from sea level rise. Low-lying areas near the lagoon and Bay are particularly vulnerable.' },
        { question: 'Are Mariners Island properties at flood risk?', answer: 'The Mariners Island development in Foster City sits on filled land and faces flood risks during extreme high tides and heavy rains. Several condo complexes have experienced flooding.' },
        { question: 'Does Foster City have drainage issues in new developments?', answer: 'Newer developments in Foster City have generally improved drainage, but the underlying filled marshland creates challenges. Storm water pumps help manage water levels in the lagoon system.' },
        { question: 'How does Foster City\'s lagoon system handle heavy rains?', answer: 'Foster City\'s extensive lagoon system manages storm runoff, but during extreme events the system can overflow. Pump stations help control water levels but have been overwhelmed during heavy rains.' }
      ]
    },
    'belvedere-tiburon': {
      neighborhoods: ['Belvedere', 'Tiburon', 'Reed Ranch', 'St. Raphael', 'Marin Country Club', 'Old Tiburon', 'Paradise Cay', 'Murray Park'],
      landmarks: 'Belvedere Island, Tiburon waterfront, Ark Row, Richardson Bay, Mount Tamalpais views',
      climate: 'Belvedere Tiburon experiences mild coastal climate with significant winter rainfall. The waterfront location creates flood risks from bay surges. The hillside properties face erosion and drainage issues.',
      faqs: [
        { question: 'What flood risks exist in Belvedere Tiburon from Richardson Bay?', answer: 'Richardson Bay in Tiburon has flooded during heavy rains combined with high tides, affecting waterfront properties and the Ark Row area. Storm surges have caused significant water damage.' },
        { question: 'Does Belvedere face flooding from Belvedere Island position?', answer: 'Belvedere Island properties face flood risks during extreme high tides and storm surges. The low-lying areas on the island have experienced flooding during winter storms.' },
        { question: 'Are Tiburon hillside properties at erosion risk?', answer: 'Homes in the Tiburon hillside areas face erosion during heavy rains. The steep terrain and clay-rich soil cause drainage issues and minor slope failures.' },
        { question: 'Does Tiburon waterfront face sea level rise risks?', answer: 'Tiburon\'s waterfront properties face increasing flood risks from sea level rise. The downtown area and boat harbors are particularly vulnerable to tidal flooding.' },
        { question: 'How does Belvedere\'s bay position affect foundations?', answer: 'The high water table in Belvedere causes hydrostatic pressure against foundations. Properties near the waterfront experience water seepage through foundation walls during extended wet periods.' }
      ]
    },
    'san-rafael': {
      neighborhoods: ['San Rafael', 'Terra Linda', 'Rafael District', 'Fairfax', 'San Anselmo', 'Lucas Valley', 'Smith Ranch', 'Gerstle Park'],
      landmarks: 'San Rafael Mission, San Rafael Civic Center, Mt. Tamalpais, San Rafael Creek, Terra Linda Shopping Center',
      climate: 'San Rafael experiences mild Mediterranean climate with significant winter rainfall. The area lies near San Rafael Creek and faces flood risks in low-lying areas. The terrain varies from flat valley floor to steep hillsides.',
      faqs: [
        { question: 'What flood risks exist in San Rafael from San Rafael Creek?', answer: 'San Rafael Creek has flooded during heavy rains, affecting properties in the downtown area and near the civic center. The creek carries runoff from the Mt. Tamalpais foothills.' },
        { question: 'Does San Rafael have flooding in the Terra Linda area?', answer: 'Terra Linda in San Rafael has experienced flooding during heavy rains. The drainage system serving the shopping center and surrounding neighborhoods has overwhelmed during significant storms.' },
        { question: 'Are San Rafael hillside properties at mudslide risk?', answer: 'Homes in the Lucas Valley and hillside areas of San Rafael face mudslide risks after heavy rains. The steep terrain and clay soil create erosion issues.' },
        { question: 'Does San Rafael face flooding from the Canal area?', answer: 'The canal area in San Rafael, near San Rafael Creek, faces flooding during heavy rains and high tides. The low-lying commercial areas have experienced flood damage.' },
        { question: 'How does San Rafael\'s creek system affect surrounding areas?', answer: 'San Rafael Creek and its tributaries channel water through the city during heavy rains. Properties near the creek in the Rafael District and Gerstle Park areas face flood risks.' }
      ]
    },

  'redondo-beach': {
      neighborhoods: ['North Redondo Beach', 'South Redondo Beach', 'King Harbor', 'The Esplanade', 'Aviation District', 'Powderhouse Canyon', 'Riviera Village', 'Hill Section'],
      landmarks: 'Redondo Beach Pier, King Harbor, Torrance Beach, Hopkins Wilderness Park, Seaside Lagoon',
      climate: 'Redondo Beach experiences a Mediterranean climate with mild temperatures year-round. Its coastal location along Santa Monica Bay exposes properties to coastal flooding, storm surge during winter storms, and increasing sea level rise risks. The nearby Pacific Ocean can cause wave overtopping during high tides and strong surf events, particularly affecting ground-floor condos and beach-adjacent homes.',
      faqs: [
        { question: 'How does coastal erosion affect water damage in Redondo Beach?', answer: 'Coastal erosion along Redondo Beach\'s shoreline accelerates during winter storms, undermining foundations of beachfront properties and causing structural damage. The King Harbor area is particularly vulnerable to wave action that can flood lower floors and damage docks and boat-related infrastructure.' },
        { question: 'What flood risks exist near King Harbor?', answer: 'King Harbor experiences flooding during storm events when wave action combines with high tides. Marina structures and adjacent commercial properties face significant water damage risks, with floodwaters commonly reaching parking areas and ground-floor commercial spaces.' },
        { question: 'Are Redondo Beach homes required to have flood insurance?', answer: 'Properties in FEMA flood zones AE and VE near the coastline are required to carry flood insurance. Many homeowners in King Harbor and beachfront areas maintain coverage due to the high risk of storm surge and coastal flooding events.' },
        { question: 'How does the proximity to the Pacific Ocean affect basements in Redondo Beach?', answer: 'Redondo Beach has very few basements due to the high water table and proximity to the ocean. Ground-level flooding from storm surge and rain events can enter homes through foundations and doorways rather than basement windows.' },
        { question: 'What water damage risks exist from the nearby AES power plant site?', answer: 'The former AES power plant site near the harbor is a remediated wetland area that can experience localized flooding during heavy rains, potentially affecting adjacent properties with water accumulation and moisture issues.' }
      ]
    },
    'walnut': {
      neighborhoods: ['Walnut Village', 'Countrywood', 'Sunset Ridge', 'Maplewood', 'Quail Ridge', 'Valley View', 'Sycamore Heights', 'Walnut Canyon'],
      landmarks: 'Mt. San Antonio College, San Jose Hills, Walnut Creek, Snow Creek, Lemon Creek',
      climate: 'Walnut is located in the San Gabriel Valley at the southern base of the San Jose Hills. The area experiences hot, dry summers and mild winters with occasional heavy rainfall. The city faces significant water damage risks from flash flooding in canyon areas, debris flows from recent burn scars in the hills, and stormwater runoff overwhelming drainage systems in lower-lying neighborhoods.',
      faqs: [
        { question: 'What flood risks exist in Walnut Canyon?', answer: 'Walnut Canyon below the San Jose Hills experiences rapid water flow during heavy rain events. Recent wildfire burn scars in the hills above have increased debris flow risks, with mud and water potentially flooding homes at the canyon mouth.' },
        { question: 'How does stormwater affect Walnut neighborhoods?', answer: 'The city\'s location between the San Jose Hills to the north and Puente Hills to the south creates natural drainage paths through neighborhoods. Snow Creek and Lemon Creek tributaries can overflow during intense storms, affecting streets and homes in their paths.' },
        { question: 'Are Walnut homes in FEMA flood zones?', answer: 'While most of Walnut is not in a high-risk flood zone, properties near creek corridors and canyon areas may fall into FEMA flood zones AE or X. Homeowners in these areas should verify flood insurance requirements with the city building department.' },
        { question: 'What role do the San Jose Hills play in water damage?', answer: 'The steep terrain of the San Jose Hills above Walnut accelerates stormwater runoff during rain events. Properties at the base of the hills face risks from both flash flooding and debris flows, particularly after any vegetation fires expose bare soil.' },
        { question: 'How effective are Walnut\'s drainage systems?', answer: 'The city maintains storm drains and retention basins throughout residential areas. However, during extreme rainfall events, drainage systems can become overwhelmed, particularly in older neighborhoods with smaller culverts and limited capacity.' }
      ]
    },
    'hawthorne': {
      neighborhoods: ['Central Hawthorne', 'Holly Park', 'East Hawthorne', 'Hawthorne Plaza', 'Domain', 'Beach Cities District', 'Northrop Area', 'Jack Benner'],
      landmarks: 'Hawthorne Plaza Shopping Center, The Beach Boys Childhood Home, SpaceX Headquarters, Hollywood Park Casino, Los Angeles Air Force Base',
      climate: 'Hawthorne experiences a semi-arid Mediterranean climate with coastal influences from the nearby Pacific Ocean. While generally mild, the area receives concentrated rainfall during winter storms that can overwhelm local drainage systems. The flat terrain means poor drainage can lead to standing water and flooding in low-lying areas for extended periods after heavy rains.',
      faqs: [
        { question: 'Why does Hawthorne experience flooding during heavy rains?', answer: 'Hawthorne\'s extremely flat terrain with minimal elevation change prevents efficient water runoff. Combined with an aging storm drain system, heavy rainfall quickly overwhelms drainage capacity, causing street flooding that can enter ground-level homes and commercial buildings.' },
        { question: 'How close is Hawthorne to the ocean and what risks does this create?', answer: 'Hawthorne lies about 3 miles inland from the Pacific coast. While not directly on the coast, the area can experience tidal influences and coastal fog that create persistent moisture issues, particularly in older homes with inadequate ventilation that lead to mold growth.' },
        { question: 'What water damage risks exist near the 405 freeway area?', answer: 'The area near the 405 freeway and surrounding commercial zones has extensive paved surfaces that create significant runoff during storms. The Hollywood Park area redevelopment has changed drainage patterns, with some residential areas experiencing new flooding concerns.' },
        { question: 'Are there flood zones in Hawthorne?', answer: 'Most of Hawthorne is outside high-risk FEMA flood zones. However, properties near the Dominguez Channel and low-lying areas may fall into Zone X (moderate flood risk). Lenders may still require flood insurance in these areas.' },
        { question: 'How does industrial development affect water quality and damage?', answer: 'The industrial areas in Hawthorne contain various commercial properties. During flooding events, stormwater can pick up contaminants from these sites, creating additional cleanup challenges for affected properties.' }
      ]
    },
    'el-segundo': {
      neighborhoods: ['El Segundo Downtown', 'Hillcrest', 'El Porto', 'Corporate District', 'Industrial Corridor', 'Richfield', 'Mueller Neighborhood', 'Sepulveda Corridor'],
      landmarks: 'Chevron Refinery, El Segundo Beach, Douglas Aircraft Plant Historic Site, Downtown Main Street, El Segundo Museum of Art',
      climate: 'El Segundo experiences a coastal Mediterranean climate with cool ocean breezes and mild temperatures year-round. The city faces unique water damage risks from its industrial infrastructure, including pipeline leaks, contaminated groundwater, and flooding from the Chevron refinery area. Coastal fog and high humidity create ongoing moisture and mold risks in older buildings.',
      faqs: [
        { question: 'What unique water damage risks exist near the Chevron refinery?', answer: 'The Chevron refinery occupies a significant portion of El Segundo and has had historical pipeline leaks and storage facility incidents. Properties near the refinery face risks from both industrial accidents and contaminated water intrusion that requires specialized cleanup.' },
        { question: 'How does El Segundo\'s coastal location affect water damage?', answer: 'Coastal fog and high humidity are constant in El Segundo, particularly near the beach areas. This persistent moisture creates chronic dampness issues in buildings without proper ventilation, leading to mold growth and deterioration of building materials over time.' },
        { question: 'Are there flood risks from the El Segundo coastline?', answer: 'The beach area and El Porto neighborhood face risks from high tides and winter storm waves. However, the main flood risk comes from inland drainage issues in the industrial area rather than coastal storm surge due to the protection provided by the Santa Monica Bay geography.' },
        { question: 'What should homeowners know about groundwater contamination?', answer: 'Historical industrial activities in El Segundo have caused groundwater contamination in some areas. During flooding or construction, contaminated groundwater can enter basements or foundation systems, requiring environmental remediation professionals.' },
        { question: 'How do El Segundo\'s older industrial buildings handle water damage?', answer: 'Many industrial and commercial buildings in El Segundo are decades old and may have compromised waterproofing systems. Rain events can leak through roof systems and damage equipment and inventory, particularly in buildings with flat roofs common in the area.' }
      ]
    },
    'corona': {
      neighborhoods: ['Downtown Corona', 'South Corona', 'North Corona', 'Eagle Glen', 'The Encanto', 'Garfield District', 'Temescal Canyon', 'Foothill Area'],
      landmarks: 'Grand Boulevard, Corona Historic Civic Center, The Circle, Cleveland National Forest, Corona购物中心',
      climate: 'Corona experiences a semi-arid climate with hot summers and mild winters. The city is located at the western edge of the Inland Empire near the Santa Ana Mountains. Significant water damage risks include flash flooding from canyon washes during monsoonal storms, debris flows from recent burn areas in the nearby Cleveland National Forest, and urban flooding from overwhelmed storm drains in dense neighborhoods.',
      faqs: [
        { question: 'What makes Corona vulnerable to flash flooding?', answer: 'Corona sits at the mouth of several canyon systems including Temescal Canyon and others leading from the Santa Ana Mountains. These natural drainage paths become raging torrents during heavy monsoonal storms, sending water and debris through neighborhoods at the canyon mouths.' },
        { question: 'How do recent wildfires affect water damage in Corona?', answer: 'The Cleveland National Forest burn scars above Corona have significantly increased debris flow risks. Post-fire landscapes cannot absorb rainfall, causing mud and rock slides to cascade into canyon-mouth neighborhoods during rain events.' },
        { question: 'What are the flood risks along the Santa Ana River?', answer: 'The Santa Ana River flows along Corona\'s eastern boundary. Major storm events can cause river flooding that affects riverside properties and parks. The river channel provides flood protection but can be overwhelmed during extreme events.' },
        { question: 'Are older Corona homes more susceptible to water damage?', answer: 'Many homes in older neighborhoods like Downtown Corona and the Garfield District were built before modern flood building codes. These homes may have foundations that are vulnerable to water intrusion and may not have proper drainage systems.' },
        { question: 'How does Corona\'s rapid development affect flooding?', answer: 'Corona has experienced rapid residential and commercial growth. Newer developments often increase impervious surfaces, changing local drainage patterns and potentially causing flooding in previously unaffected areas downstream.' }
      ]
    },
    'elk-grove': {
      neighborhoods: ['East Elk Grove', 'West Elk Grove', 'Laguna', 'Elk Grove Village', 'Franklin', 'South Laguna', 'Somerset', 'Sheldon'],
      landmarks: 'Elk Grove Historic District, Old Town Elk Grove, Cosumnes River, Lagena Creek, Strawberry Creek',
      climate: 'Elk Grove experiences a Mediterranean climate with hot, dry summers and cool, wet winters. The city is located in Sacramento County near the Cosumnes River watershed. Water damage risks include flooding from the Cosumnes River and its tributaries, poor drainage in low-lying areas, and stormwater runoff overwhelming newer development drainage systems.',
      faqs: [
        { question: 'What flood risks exist along the Cosumnes River?', answer: 'The Cosumnes River flows through Elk Grove and can flood during winter storms. Properties near the river, particularly in East Elk Grove and along the floodplain, face significant flood risks. The river\'s relatively natural channel means it can overflow its banks during major storm events.' },
        { question: 'How does wetland areas affect water damage in Elk Grove?', answer: 'Elk Grove contains several wetland and preserve areas that naturally hold water during wet seasons. Nearby properties may experience extended saturation and water table issues, particularly in the Franklin and Sheldon areas where drainage is slower.' },
        { question: 'What causes flooding in the Laguna area?', answer: 'The Laguna area contains several creeks and drainage channels that can overwhelm during heavy rain. Storm drain systems in newer developments may not handle the volume from upstream runoff, causing localized street and intersection flooding.' },
        { question: 'Are Elk Grove homes required to have flood insurance?', answer: 'Most of Elk Grove is not in a high-risk flood zone, but properties near the Cosumnes River and major drainageways may be in FEMA flood zones. The city participates in the National Flood Insurance Program, and mortgage lenders may require coverage in moderate-risk areas.' },
        { question: 'How has development changed flooding patterns in Elk Grove?', answer: 'Rapid development has added extensive impervious surfaces to previously agricultural land. This changes natural drainage patterns and can increase flood risks in downstream areas, particularly during the first storms after construction when landscaping is not yet established.' }
      ]
    },
    'sausalito': {
      neighborhoods: ['Marinship District', 'Old Town', 'Bridgeway Corridor', 'Hurricane Point', 'Strawberry', 'Reed Ranch', 'Upper Town', 'Sausalito Waterfront'],
      landmarks: 'Sausalito Marina, Golden Gate Bridge (northern terminus), Bay Model, Sausalito Boardwalk, U.S. Army Corps of Engineers Bay Model Visitor Center',
      climate: 'Sausalito experiences a mild maritime climate with cool summers and mild winters due to its location on the northern shore of San Francisco Bay. The city faces unique water damage risks from tidal flooding, sea level rise affecting the waterfront, groundwater seeping through hillside properties, and damage to floating home structures during storms.',
      faqs: [
        { question: 'What flood risks exist for Sausalito\'s waterfront properties?', answer: 'Sausalito\'s waterfront and houseboat communities face significant tidal flooding risks, particularly during extreme high tides combined with storm conditions. The Marina Plaza and ferry terminal areas experience regular tidal fluctuations that can flood low-lying sections.' },
        { question: 'How does sea level rise affect Sausalito?', answer: 'Sea level rise poses an existential threat to Sausalito\'s waterfront infrastructure. Current projections indicate that significant portions of the waterfront, Bridgeway area, and houseboat communities could face regular flooding by mid-century, requiring significant infrastructure adaptations.' },
        { question: 'What water damage risks affect Sausalito houseboats?', answer: 'Houseboats in Sausalito face unique risks including structural damage from wave action during storms, flooding from failed floatation devices, and damage from debris hitting floating structures. Many houseboats have been damaged or destroyed in winter storms over the years.' },
        { question: 'How do hillside properties in Sausalito handle water damage?', answer: 'Sausalito\'s steep hillside homes face risks from groundwater seeping through foundations and retaining walls. Proper drainage systems are critical, and many older homes have experienced foundation damage from inadequate waterproofing and drainage.' },
        { question: 'What role does the San Francisco Bay play in Sausalito flooding?', answer: 'The bay\'s tidal patterns directly affect Sausalito\'s waterfront. King tides and storm surge events can push water levels significantly higher than normal, flooding boardwalks, parking areas, and ground-floor commercial spaces along the waterfront.' }
      ]
    },
    'san-bernardino': {
      neighborhoods: ['Downtown San Bernardino', 'Twin Towers', 'Arrowhead Springs', 'North Park', 'West Side', 'Devore', 'Kendall', 'University District'],
      landmarks: 'San Bernardino Santa Fe Depot, San Bernardino County Courthouse, California Theatre, Mount San Bernardino, San Manuel Stadium',
      climate: 'San Bernardino experiences a semi-arid climate with hot summers and mild winters. Located in the San Bernardino Valley at the base of the San Bernardino Mountains, the city faces significant water damage risks from flash flooding coming down mountain canyons, debris flows from recent burn scars, and urban flooding in densely developed areas with poor drainage.',
      faqs: [
        { question: 'What makes San Bernardino vulnerable to flash flooding?', answer: 'The city sits at the mouth of multiple canyon systems descending from the San Bernardino Mountains. During monsoonal summer thunderstorms and winter storms, these canyons funnel massive amounts of water and debris through the city, particularly affecting the Twin Towers and Arrowhead Springs areas.' },
        { question: 'How do wildfire burn areas affect water damage?', answer: 'Recent wildfires in the San Bernardino Mountains above the city have created massive burn scars. These areas cannot absorb rainfall, causing debris flows and flash floods that can devastate neighborhoods at the canyon mouths, particularly along flood channels.' },
        { question: 'What are the flood risks in the Santa Ana River area?', answer: 'The Santa Ana River flows through the southern portion of San Bernardino. Major storm events can cause river flooding that affects adjacent neighborhoods. The river channel provides some protection but has historically overtopped its banks during extreme events.' },
        { question: 'How does urban development affect flooding in San Bernardino?', answer: 'The city\'s extensive paved surfaces from commercial and residential development prevent natural water absorption. During heavy rain events, stormwater overwhelms drainage systems, causing street flooding that can enter homes and businesses, particularly in older downtown areas.' },
        { question: 'Are there dam failure risks affecting San Bernardino?', answer: 'Several dams in the mountains above San Bernardino, including the Seven Oaks Dam and others, create potential flood risks if they were to fail. Emergency response plans exist, and downstream residents should understand evacuation routes and flood plain locations.' }
      ]
    },
    'ventura': {
      neighborhoods: ['Downtown Ventura', 'Westside', 'Eastside', 'Hill Road Corridor', 'Fairy Tale Canyon', 'Wells', 'Montalvo', 'San Jon'],
      landmarks: 'Mission San Buenaventura, Ventura County Courthouse, Ventura Pier, Serra Cross, San Buenaventura State Beach',
      climate: 'Ventura experiences a Mediterranean climate with mild temperatures year-round. The city is located along the Ventura coast where the Ventura River meets the Pacific Ocean. Significant water damage risks include flooding from the Ventura River watershed, coastal storm surge, tsunami risks, and debris flows from the Santa Ynez Mountains burn areas.',
      faqs: [
        { question: 'What flood risks exist from the Ventura River?', answer: 'The Ventura River flows through Ventura and can flood significantly during winter storms. The natural channel can overflow, particularly in the eastside and downstream areas near the ocean. Properties in the river floodplain face regular flooding risks during major storm events.' },
        { question: 'How does the topography affect water damage in Ventura?', answer: 'Ventura is bordered by the Santa Ynez Mountains to the north, with several canyons that channel water through the city. During heavy rains, these canyons create flash flood conditions that race through neighborhoods, particularly in the Fairy Tale Canyon and Hill Road areas.' },
        { question: 'What coastal flooding risks exist in Ventura?', answer: 'Ventura\'s beachfront areas including the pier and boardwalk face risks from high tides and storm waves during winter. Coastal storm surge can damage beachfront businesses and homes, while tsunami risks from distant earthquakes could also cause significant flooding in low-lying waterfront areas.' },
        { question: 'How do recent fires affect water damage in Ventura?', answer: 'The Thomas Fire and other recent wildfires have burned large areas in the mountains above Ventura. Post-fire landscapes create significant debris flow risks during rains, with mud and rock potentially flooding canyon-mouth neighborhoods with little warning.' },
        { question: 'Are Ventura properties in tsunami evacuation zones?', answer: 'The downtown waterfront, harbor area, and beachfront properties are in tsunami evacuation zones. While major tsunamis are rare, a significant undersea earthquake could create dangerous wave conditions requiring immediate evacuation of low-lying areas.' }
      ]
    },
    'stockton': {
      neighborhoods: ['Downtown Stockton', 'Weberstown', 'Parkwood', 'Brookside', 'Lincoln Village', 'West Park', 'Victory Park', 'San Joaquin River Delta Adjacent'],
      landmarks: 'Stockton Arena, Fox Theatre, University of the Pacific, Hotel Stockton, San Joaquin River',
      climate: 'Stockton experiences a Mediterranean climate with hot, dry summers and mild, wet winters. Located in the San Joaquin Valley along the San Joaquin River, the city faces significant water damage risks from river flooding, levee system failures, poor drainage in low-lying areas, and agricultural water infrastructure issues.',
      faqs: [
        { question: 'What flood risks exist from the San Joaquin River?', answer: 'Stockton is located along the San Joaquin River and faces significant flood risks. The river has flooded multiple times in history, with major flooding events potentially affecting thousands of properties. Levee systems protect the city but face ongoing maintenance challenges.' },
        { question: 'How do levee systems affect flood risks in Stockton?', answer: 'Stockton is protected by a levee system along the river and surrounding waterways. However, levee failures during major storms could cause catastrophic flooding. Properties behind levees are in FEMA flood zones due to the protected status, but risks remain from system failures.' },
        { question: 'What causes urban flooding in Stockton?', answer: 'Stockton\'s flat terrain and aging storm drain system cannot handle heavy rainfall efficiently. During significant storms, street flooding is common, with water often ponding in low-lying areas for extended periods, affecting homes and businesses.' },
        { question: 'Are there risks from the California Delta?', answer: 'Stockton sits at the edge of the Sacramento-San Joaquin Delta. Extremely high tides (king tides) can push water backward through the river system, causing tidal flooding in low-lying waterfront areas and marshes surrounding the city.' },
        { question: 'How does groundwater affect basements in Stockton?', answer: 'Stockton has high groundwater levels in many areas, particularly near the river and Delta. This limits basement construction and can cause water seepage into below-grade spaces even during relatively minor rain events.' }
      ]
    },
    'palo-alto': {
      neighborhoods: ['Old Palo Alto', 'Palo Alto Hills', 'Greenmeadow', 'College Terrace', 'Professorville', 'Southgate', 'Waden', 'Midtown'],
      landmarks: 'Stanford University, Palo Alto Baylands, El Palo Alto Tree, Stanford Shopping Center, Hoover Tower',
      climate: 'Palo Alto experiences a Mediterranean climate with mild, wet winters and warm, dry summers. Located at the north end of Silicon Valley near the San Francisco Bay, water damage risks include flooding from San Francisquito Creek, poor drainage in the Baylands area, and groundwater rising in low-lying neighborhoods.',
      faqs: [
        { question: 'What flood risks exist from San Francisquito Creek?', answer: 'San Francisquito Creek runs through Palo Alto and has caused significant flooding, particularly in the Professorville and downtown areas. Major storms have overtopped the creek banks, flooding homes and businesses. Ongoing creek maintenance and improvements continue but risks remain.' },
        { question: 'How does the Baylands area affect water damage?', answer: 'The Palo Alto Baylands are naturally low-lying wetlands that hold water during wet seasons. Adjacent properties can experience groundwater seepage and flooding from the high water table, particularly in the Charleston Road and Embarcadero areas.' },
        { question: 'What role does Stanford University play in local flooding?', answer: 'Stanford\'s extensive campus creates significant impervious surfaces that direct stormwater through local creeks. During heavy storms, creek systems downstream of Stanford can overflow, affecting Palo Alto neighborhoods.' },
        { question: 'Are there flood zones in Palo Alto neighborhoods?', answer: 'Properties near San Francisquito Creek and in the Baylands area are in FEMA flood zones. Old Palo Alto and Professorville neighborhoods have experienced flooding historically, and mortgage lenders often require flood insurance.' },
        { question: 'How does future development affect flood risks?', answer: 'Ongoing development in Palo Alto increases impervious surfaces. While modern developments include stormwater detention systems, the cumulative effect of continued development adds to drainage system burdens during major storm events.' }
      ]
    },
    'national-city': {
      neighborhoods: ['Downtown National City', 'El Toyon', 'Lincoln Acres', 'Mount Hope', 'Paradise Valley', 'Southwest San Diego', 'Las Palomas', 'Palomar'],
      landmarks: 'Sweetwater Reservoir, Mount San Miguel, National City Mile of Cars, Spreckels Park, Paradise Valley Hospital',
      climate: 'National City experiences a semi-arid Mediterranean climate with mild temperatures year-round. Located in the South Bay of San Diego County near the Sweetwater River, the city faces flood risks from the river during heavy rains, poor drainage in flatland areas, and coastal influences creating moisture issues.',
      faqs: [
        { question: 'What flood risks exist from the Sweetwater River?', answer: 'The Sweetwater River flows through National City and can flood significantly during heavy rain events. The river channel has historically overflowed, particularly affecting the eastern portions of the city near the reservoir. Flood control projects help but cannot eliminate risks.' },
        { question: 'How does the Sweetwater Reservoir affect local water damage?', answer: 'The Sweetwater Reservoir and dam above National City create potential flood risks if the dam were to fail. Emergency planning exists, and downstream residents should understand evacuation routes. Normal operations also affect downstream water levels during storms.' },
        { question: 'What causes flooding in downtown National City?', answer: 'The downtown area has aging storm drains that can be overwhelmed during heavy rains. The flat terrain means water pools in low-lying areas, particularly around the Mile of Cars commercial district and along major streets that serve as drainage corridors.' },
        { question: 'Are there coastal flooding risks in National City?', answer: 'National City is located on San Diego Bay and has waterfront areas near the marine terminal. While not directly on the ocean, bay flooding from high tides and storm surge can affect low-lying waterfront properties, particularly during extreme weather events.' },
        { question: 'How does development density affect flooding?', answer: 'High-density development in parts of National City creates significant stormwater runoff. Older neighborhoods with smaller drainage infrastructure face flooding during heavy rains, while newer developments generally include improved stormwater management systems.' }
      ]
    },
    'west-hollywood': {
      neighborhoods: ['West Hollywood', 'Melrose District', 'Sunset Strip', 'West Hollywood Design District', 'WeHo Corridor', 'Normandy', 'Fountain Heights', 'Doerr'],
      landmarks: 'Sunset Strip, Santa Monica Boulevard, The Abbey, Pacific Design Center, West Hollywood Park',
      climate: 'West Hollywood experiences a Mediterranean climate with mild temperatures and low rainfall. Located in Los Angeles County between Beverly Hills and Los Angeles, the city faces water damage risks from aging infrastructure, hillside runoff during rare heavy rains, and drainage issues in densely built commercial areas.',
      faqs: [
        { question: 'What unique water damage risks exist in West Hollywood?', answer: 'West Hollywood\'s hilly terrain creates rapid runoff during heavy rains. The Sunset Strip and hillside neighborhoods can experience flash flooding that overwhelms drainage systems, sending water cascading through commercial areas and into lower-elevation neighborhoods.' },
        { question: 'How do older buildings in West Hollywood handle water damage?', answer: 'Many buildings in West Hollywood are older apartments and commercial structures from the 1920s-1960s era. These buildings often have aging roofs, inadequate drainage systems, and lack modern waterproofing, making them susceptible to water damage during heavy rains.' },
        { question: 'What flood risks exist in the Sunset Strip area?', answer: 'The Sunset Strip\'s location on hillsides above the valley floor means stormwater runs downhill through the commercial district. During heavy rains, water can overwhelm street drains and enter ground-floor businesses and restaurants.' },
        { question: 'Are there municipal separate storm sewer system (MS4) issues?', answer: 'West Hollywood operates under strict MS4 permits requiring separation of storm and sanitary sewer systems. During heavy rains, infiltration can cause backups in older sewer lines, potentially causing water damage in low-lying areas.' },
        { question: 'How does the design district handle water damage?', answer: 'The West Hollywood Design District contains many commercial buildings and warehouses. These properties face risks from roof leaks during heavy rains and from the extensive pavement in the area that creates significant stormwater runoff.' }
      ]
    },
    'downey': {
      neighborhoods: ['Downtown Downey', 'Southeast Downey', 'Southgate', 'Old Town', 'Lakewood Mall Area', 'Paramount Ranch', 'Fitzsimmons', 'Silva'],
      landmarks: ' Downey City Hall, Columbia Memorial Space Center, Downey Theatre, Oldest McDonald\'s Restaurant, Rio Hondo River',
      climate: 'Downey experiences a semi-arid Mediterranean climate with hot, dry summers and mild winters. Located in southeastern Los Angeles County, the city faces water damage risks from the Rio Hondo River, aging storm drain systems, and urban flooding in densely developed areas.',
      faqs: [
        { question: 'What flood risks exist from the Rio Hondo River?', answer: 'The Rio Hondo River flows through Downey and can flood during heavy rains in the San Gabriel Mountains upstream. The river has overflowed historically, particularly affecting areas near the river channel and in low-lying portions of the city.' },
        { question: 'How does Downey\'s history as an agricultural area affect current flooding?', answer: 'Downey was historically agricultural land with absorbent soil. Urban development has created extensive impervious surfaces that prevent natural water absorption, dramatically increasing stormwater runoff and flooding in residential and commercial areas.' },
        { question: 'What causes street flooding in Downey?', answer: 'Downey\'s aging storm drain system cannot handle modern volumes of stormwater from extensive development. During heavy rains, streets frequently flood at intersections and in low-lying areas, with water often entering garages and ground-level homes.' },
        { question: 'Are there flood zones in Downey neighborhoods?', answer: 'Properties along the Rio Hondo are in FEMA flood zones AE or X. Most other areas of Downey are in Zone X (moderate risk), where lenders may not require flood insurance but homeowners should consider coverage.' },
        { question: 'How does proximity to the Los Angeles River affect Downey?', answer: 'The Los Angeles River flows nearby and can affect Downey during extreme storm events when the regional flood control system is overwhelmed. The river\'s concrete channel provides significant capacity but cannot prevent all flooding during major events.' }
      ]
    },
    'rancho-cucamonga': {
      neighborhoods: ['Victoria Heights', 'Cucamonga', 'Banyan', 'Day Creek', 'Etiwanda', 'Northgate', 'Alta Loma', 'Amethyst'],
      landmarks: 'Cucamonga Peak, Victoria Gardens, Chaffee College, Red Hill Country Club, Pacific Trail',
      climate: 'Rancho Cucamonga experiences a semi-arid climate with hot summers and mild winters at the base of the San Gabriel Mountains. The city faces significant water damage risks from flash flooding in canyon areas, debris flows from recent burn scars in the foothills, and drainage issues in the relatively flat valley areas.',
      faqs: [
        { question: 'What flood risks exist from the San Gabriel Mountains?', answer: 'Rancho Cucamonga sits below the San Gabriel Mountains at the mouth of several canyon systems. During heavy monsoonal storms and winter rain events, these canyons funnel water and debris through the city, particularly affecting neighborhoods at canyon mouths.' },
        { question: 'How do recent wildfires affect water damage in Rancho Cucamonga?', answer: 'The San Gabriel Mountains above Rancho Cucamonga have experienced significant wildfires in recent years. Burned areas cannot absorb rainfall, creating dangerous debris flow conditions during rain events that can send mud and rocks through canyon-mouth neighborhoods.' },
        { question: 'What are the flood risks in the Day Creek area?', answer: 'Day Creek flows through Rancho Cucamonga and can flood during significant storm events. The creek has overflowed its banks in the past, affecting properties in the Day Creek and nearby residential areas.' },
        { question: 'How does the old Cucamonga area affect modern water damage?', answer: 'The historic Cucamonga area was originally agricultural with different drainage patterns. Modern development has altered these patterns, sometimes creating flooding in areas that previously handled water differently. Newer developments include drainage improvements but legacy issues remain.' },
        { question: 'Are there dam failure risks affecting Rancho Cucamonga?', answer: 'The San Antonio Dam and other water storage facilities in the mountains above the city create potential flood risks. While these structures are maintained and monitored, residents in downstream flood plains should understand evacuation routes and emergency procedures.' }
      ]
    },
    'oxnard': {
      neighborhoods: ['Oxnard Downtown', 'South Oxnard', 'North Oxnard', 'Pleasant Valley', 'Montalvo', 'Rio Mesa', 'El Rio', 'Camarillo'],
      landmarks: 'Channel Islands Harbor, Carnegie Art Museum, Oxnard Beach, Heritage Square, Oxnard State Beach',
      climate: 'Oxnard experiences a Mediterranean climate with mild temperatures year-round due to coastal influences. Located on the Oxnard Plain along the Pacific coast, the city faces significant water damage risks from coastal flooding and storm surge, river flooding from the Santa Clara River, and stormwater drainage issues in flat terrain.',
      faqs: [
        { question: 'What coastal flooding risks exist in Oxnard?', answer: 'Oxnard\'s beach areas and Channel Islands Harbor face significant flooding risks from high tides, storm waves, and potential tsunami impacts. The flat coastal terrain means water can push far inland during extreme events, affecting harbor facilities and beachfront communities.' },
        { question: 'How does the Santa Clara River affect Oxnard?', answer: 'The Santa Clara River flows along Oxnard\'s southern boundary and can flood significantly during winter storms. The river\'s wide floodplain can affect agricultural areas and properties near the channel during major storm events.' },
        { question: 'What causes flooding in the Channel Islands Harbor area?', answer: 'Channel Islands Harbor experiences flooding during extreme high tides combined with storm conditions. The harbor\'s design has experienced sediment buildup that reduces drainage capacity, causing water to pool in low-lying areas around the harbor.' },
        { question: 'Are there agricultural water issues affecting Oxnard properties?', answer: 'Oxnard\'s agricultural heritage has created land with varying drainage characteristics. Some former agricultural areas have drainage issues that affect newer residential development, with water table and soil conditions requiring careful site preparation.' },
        { question: 'How does sea level rise affect Oxnard?', answer: 'As a low-lying coastal city, Oxnard faces significant risks from sea level rise. Projections indicate that coastal flooding could affect significant portions of the city, particularly the harbor area and beachfront communities, within the coming decades.' }
      ]
    },

  'sunnyvale': {
      neighborhoods: ['Heritage District', 'Lakewood', 'Fairbrae', 'Cumberland', 'Cherry Chase', 'Sunnyvale West', 'Altos Verdes', 'Serra Park'],
      landmarks: 'Sunnyvale City Center, Baylands Park, Murphy Avenue, El Camino Real, Levi\'s Stadium',
      climate: 'Sunnyvale experiences a Mediterranean climate with mild, wet winters and warm, dry summers. The city sits near the San Francisco Bay, creating flood risks in low-lying areas near Permanente Creek and the Bay. Winter storms can cause storm water overflow and property damage in older neighborhoods with aging drainage systems.',
      faqs: [
        { question: 'Does Sunnyvale have flood zones?', answer: 'Yes, FEMA has designated certain areas of Sunnyvale as Special Flood Hazard Areas (SFHA), particularly near Permanente Creek and low-lying areas around the Baylands. Properties in these zones require flood insurance.' },
        { question: 'How does storm water affect Sunnyvale homes?', answer: 'Winter storms can overwhelm drainage systems in older neighborhoods like Heritage District and Lakewood, causing basement flooding and water intrusion in homes with inadequate waterproofing.' },
        { question: 'Are there rivers near Sunnyvale that cause flooding?', answer: 'Permanente Creek and San Francisco Bay adjacent areas are primary flood concerns. The creek can overflow during heavy rains, affecting homes near Fremont Avenue and Mathilda Avenue.' },
        { question: 'What water damage risks exist in newer developments?', answer: 'Newer neighborhoods like Cumberland and Sunnyvale West may face issues from improper grading or drainage around newer construction, especially during first winters.' },
        { question: 'Does sea level rise affect Sunnyvale?', answer: 'Climate change is increasing inland flooding risk due to sea level rise. Low-lying areas near the Bay are increasingly vulnerable to combined tidal and storm surge flooding.' }
      ]
    },
    'santa-rosa': {
      neighborhoods: ['Fountaingrove', 'Montecito Heights', 'Skyhawk', 'McDonald Historic District', 'Railroad Square', 'Maria Carrillo', 'Southwest Santa Rosa', 'Northwest Santa Rosa'],
      landmarks: 'Santa Rosa Plaza, Railroad Square, Fountain Grove Park, Sonoma County Fairgrounds, Safari West',
      climate: 'Santa Rosa enjoys a warm Mediterranean climate typical of wine country, with dry summers and wet winters. The city faces significant flood risk from the Russian River, which has a history of devastating floods. The 1955 flood covered 30,000 acres and reached 47 feet. Winter storms can also trigger flooding in hillside neighborhoods with poor drainage.',
      faqs: [
        { question: 'How does the Russian River affect Santa Rosa?', answer: 'The Russian River flows through Santa Rosa and has caused major flooding events. During heavy winter rains, river overflow can inundate low-lying neighborhoods, particularly near the river corridor and southwest areas.' },
        { question: 'What neighborhoods in Santa Rosa flood most?', answer: 'Southwest Santa Rosa and areas near the Russian River are most vulnerable. Historic neighborhoods with older drainage systems also experience water intrusion during intense storms.' },
        { question: 'Are there flood zones in Fountaingrove?', answer: 'Fountaingrove sits on hillsides with valley views but can face drainage issues on slopes. Runoff from hillsides during heavy rains can affect homes at the bottom of slopes.' },
        { question: 'Does Santa Rosa experience flash floods?', answer: 'Yes, flash flooding can occur in urban areas with impermeable surfaces during intense winter storms. Downtown areas and underpasses are particularly vulnerable to rapid water accumulation.' },
        { question: 'What water damage risks exist after wildfires?', answer: 'Santa Rosa neighborhoods below burn scars from nearby fires face mudslide and debris flow risks during winter rains. Hillside homes in areas like Montecito Heights are particularly vulnerable.' }
      ]
    },
    'pomona': {
      neighborhoods: ['Downtown Pomona', 'Ganesha Park', 'Indian Hill', 'Phillips Ranch', 'Cal Poly Pomona', 'Westmont', 'East Pomona', 'North Pomona'],
      landmarks: 'Pomona Fairplex, Ganesha Park, Cal Poly Pomona Campus, Indian Hill Casino, Pomona Valley Medical Center',
      climate: 'Pomona has a semi-arid climate with hot, dry summers and mild, somewhat rainy winters. The city sits in the Pomona Valley against the San Gabriel Mountains. Flash floods are a significant risk during monsoonal storms and winter rain events, especially near recent burn areas and steep foothills.',
      faqs: [
        { question: 'Does Pomona have flash flood risks?', answer: 'Yes, Pomona faces significant flash flood risks from the San Gabriel Mountains. Steep terrain and recent wildfire burn areas create dangerous debris flows during heavy rains.' },
        { question: 'Which Pomona neighborhoods flood most?', answer: 'Areas near Ganesha Park, Indian Hill, and foothill neighborhoods face the highest flood risks. Downtown Pomona can also experience urban flooding during intense storms.' },
        { question: 'Are there flood zones near Phillips Ranch?', answer: 'Phillips Ranch has some flood-prone areas near drainage channels. The area was historically agricultural and has modified drainage patterns that can overwhelm during heavy storms.' },
        { question: 'How do monsoonal storms affect Pomona?', answer: 'Summer monsoonal moisture from the desert creates intense, brief rain events that can cause rapid flooding in urban areas with inadequate drainage infrastructure.' },
        { question: 'Does Cal Poly Pomona area flood?', answer: 'The hillside areas around Cal Poly can experience mudflows during heavy rains, especially where vegetation was removed for development. Campus buildings have faced water damage in past events.' }
      ]
    },
    'huntington-beach': {
      neighborhoods: ['Downtown Huntington Beach', 'Seacliff', 'Huntington Harbour', 'Goldenwest', 'Pacific City', 'Bolsa Chica', 'Sunset Beach', 'The Strand'],
      landmarks: 'Huntington Beach Pier, Bolsa Chica Ecological Reserve, Pacific City Mall, Huntington Harbour Marina, Edison Field',
      climate: 'Huntington Beach features a coastal Mediterranean climate with mild temperatures year-round. As a beachfront city, it faces unique water damage risks including sea level rise, storm surge, high tides, and coastal erosion. Winter storms can combine with high tides to cause significant beach erosion and property damage.',
      faqs: [
        { question: 'Does Huntington Beach have sea level rise risks?', answer: 'Yes, coastal flooding from sea level rise is a growing threat. Low-lying areas near the beach and Huntington Harbour are increasingly vulnerable to tidal flooding and storm surge.' },
        { question: 'What neighborhoods face coastal flooding?', answer: 'Seacliff, The Strand, and areas near Huntington Harbour are most vulnerable. Storm events combined with high tides can flood coastal roads and beachfront properties.' },
        { question: 'Does Huntington Harbour flood?', answer: 'Huntington Harbour can experience flooding during strong storm events when drainage systems are overwhelmed and combine with high tides.' },
        { question: 'Are beach erosion concerns real in Huntington Beach?', answer: 'Yes, chronic beach erosion affects the coastline. Winter storms with high waves erode beaches, exposing properties to wave damage and increasing flood risks.' },
        { question: 'Does Bolsa Chica area flood?', answer: 'The Bolsa Chica area, including the ecological reserve, experiences tidal flooding during extreme events. Adjacent residential areas can be affected by overflow.' }
      ]
    },
    'santa-margarita': {
      neighborhoods: ['Rancho Santa Margarita Central', 'Dove Canyon', 'Rancho Cielo', 'Robinson Ranch', 'Sendero', 'Tesoro', 'Villagio', 'Canyon Crest'],
      landmarks: 'Rancho Santa Margarita Community Park, Tijeras Creek Golf Club, Saddleback Church, CIF Lake Practice Facility, O\'Neill Regional Park',
      climate: 'Santa Margarita enjoys a warm Mediterranean climate with low humidity. The community sits in the Saddleback Valley near the Santa Ana Mountains. While generally dry, winter storms can create flash flood risks, especially near recent burn areas from past wildfires. The area also has natural drainage patterns that can channel water through neighborhoods.',
      faqs: [
        { question: 'Does Santa Margarita have flood risks?', answer: 'Yes, flash flooding occurs during intense winter storms, particularly near the foothills and recently burned areas. Natural drainage channels through the community can carry significant water flows.' },
        { question: 'Which neighborhoods flood most in Santa Margarita?', answer: 'Foothill neighborhoods like Dove Canyon and areas near drainage washes face the highest risks. Newer developments may have drainage systems that are overwhelmed during major storms.' },
        { question: 'Do wildfire burn areas affect flooding?', answer: 'Yes, areas below previous burn scars in the Santa Ana Mountains can experience debris flows during heavy rains. Recent development in these areas increases property risk.' },
        { question: 'Are there any rivers or creeks that flood?', answer: 'The area has several natural drainagecourses and the San Juan Creek corridor, which can overflow during significant rain events affecting adjacent properties.' },
        { question: 'Does the community have drainage issues?', answer: 'Some areas, particularly lower-lying sections near the 241 toll road, have experienced flooding during heavy storms when drainage systems are capacity-limited.' }
      ]
    },
    'santa-clara': {
      neighborhoods: ['Downtown Santa Clara', 'North San Jose', 'Rivermark Village', 'Santa Clara Square', 'Sunnyvale West', 'Westwood', 'Old San Jose', 'Berryessa'],
      landmarks: 'Santa Clara Convention Center, Levi\'s Stadium, Intel Museum, Santa Clara University, Great Mall',
      climate: 'Santa Clara has a Mediterranean climate with warm, dry summers and mild, wet winters. The city sits near the Guadalupe River and San Francisco Bay. The river runs through the city and has caused significant flooding during heavy winter storms. Urban development has increased runoff, stressing older drainage infrastructure.',
      faqs: [
        { question: 'Does the Guadalupe River flood Santa Clara?', answer: 'Yes, the Guadalupe River is a major flood risk. The river has flooded multiple times, most notably in 1955, 1967, and 1998, causing significant damage to neighborhoods along its path.' },
        { question: 'Which Santa Clara neighborhoods flood most?', answer: 'Areas near the Guadalupe River, particularly downtown and North San Jose, face the highest flood risks. Low-lying areas near the river are in FEMA flood zones.' },
        { question: 'Does North San Jose flood?', answer: 'North San Jose has experienced flooding from both the Guadalupe River and storm drain overflows. Newer developments have improved drainage but older areas remain vulnerable.' },
        { question: 'Are there flood zones in Rivermark?', answer: 'Rivermark Village was built with improved drainage but sits near the river basin. Some areas remain in flood zones and require flood insurance.' },
        { question: 'Does development increase flood risks?', answer: 'Urban development increases impervious surfaces, raising stormwater runoff volumes. This stresses drainage systems and can cause urban flooding in older neighborhoods.' }
      ]
    },
    'victorville': {
      neighborhoods: ['Mesa Linda', 'The Grove', 'Downtown Victorville', 'Spring Valley Lake', 'Apple Valley', 'Oaktree', 'Desert Winds', 'Carmack'],
      landmarks: 'Victorville Fashion Center, Mojave Narrows Regional Park, Victorville City Hall, Route 66, San Bernardino County Museum',
      climate: 'Victorville has a high desert climate with extreme temperature variations. Summers are hot and dry, while winters bring occasional rain. The area faces significant flash flood risks from intense desert thunderstorms that can dump large amounts of rain in short periods. The dry, hard-packed soil cannot absorb water quickly, causing rapid runoff.',
      faqs: [
        { question: 'Does Victorville have flash flood risks?', answer: 'Yes, flash flooding is a major concern. Desert thunderstorms can drop inches of rain in minutes, creating dangerous flash floods that sweep through dry washes and canyons.' },
        { question: 'Which areas flood most in Victorville?', answer: 'Areas near dry washes, canyons, and the Mojave Narrows are most vulnerable. Downtown Victorville and lower-lying areas can experience significant flooding during intense storms.' },
        { question: 'Does Spring Valley Lake flood?', answer: 'Spring Valley Lake can be affected by flooding from surrounding hills during heavy rains. The community was designed with drainage systems but can still experience overflow.' },
        { question: 'Are there any rivers in Victorville?', answer: 'The Mojave River runs through the region but is usually dry. When it flows, it can cause significant flooding in low-lying areas and crossing points.' },
        { question: 'Does recent development increase flood risks?', answer: 'New development increases impervious surfaces, raising flood risks in surrounding areas. Several newer communities have experienced flooding as development has expanded into flood-prone areas.' }
      ]
    },
    'burbank': {
      neighborhoods: ['Downtown Burbank', 'Magnolia Park', 'Media District', 'Hillside District', 'Chandler Park', 'Rancho Adjacent', 'Burbank North Estates', 'Tujunga'],
      landmarks: 'Warner Bros. Studios, Burbank City Hall, Porto\'s Bakery, Chandler Bike Path, Burbank Town Center',
      climate: 'Burbank has a Mediterranean climate with hot, dry summers and mild, wet winters. The city sits at the base of the Verdugo Mountains. During heavy rains, the mountains create significant runoff that can overwhelm drainage systems in lower-lying neighborhoods. Recent wildfire burn areas also create mudslide risks.',
      faqs: [
        { question: 'Does Burbank have flood risks from mountains?', answer: 'Yes, the Verdugo Mountains create significant flood risks. Heavy rains on denuded slopes cause rapid runoff that floods lower-lying neighborhoods and waterways.' },
        { question: 'Which Burbank neighborhoods flood most?', answer: 'The Hillside District and areas below burn scars face the highest risks. Downtown Burbank and areas near the Chandler Bike Path can experience urban flooding during intense storms.' },
        { question: 'Do wildfire areas increase mudslide risks?', answer: 'Yes, areas below the Verdugo Mountain burn scars face significant mud and debris flow risks during heavy winter rains. Several neighborhoods have been affected.' },
        { question: 'Does the Chandler Bike Path area flood?', answer: 'The Chandler Bike Path follows a former railroad right-of-way that can collect water during storms. The drainage system has been overwhelmed during major events.' },
        { question: 'Are there flood zones in Magnolia Park?', answer: 'Magnolia Park is generally in a lower flood risk area but can experience localized flooding from storm drain overflows during heavy rain events.' }
      ]
    },
    'richmond': {
      neighborhoods: ['Marina Bay', 'Eastshore', 'Point Richmond', 'Richmond Annex', 'North Richmond', 'Central Richmond', 'Coronado', 'Hilltop'],
      landmarks: 'Richmond Museum of History, Point Isabel Regional Shoreline, Richmond Marina, Rosie the Riveter WWII Home Front National Historical Park, Miller/Knox Regional Shoreline',
      climate: 'Richmond has a mild, Mediterranean climate with cool, wet winters and warm, dry summers. The city sits on the east shore of San Francisco Bay. It faces significant flood risks from bay tidal flooding, sea level rise, and urban flooding in low-lying areas. Industrial areas have additional contamination risks from flooding.',
      faqs: [
        { question: 'Does Richmond face bay flooding?', answer: 'Yes, Richmond is highly vulnerable to San Francisco Bay flooding. Low-lying areas near the waterfront face risks from high tides, storm surge, and sea level rise.' },
        { question: 'Which neighborhoods flood in Richmond?', answer: 'Marina Bay, Eastshore, and Point Richmond are most vulnerable to bay flooding. The Richmond Annex and areas near the industrial canal also face flood risks.' },
        { question: 'Does sea level rise threaten Richmond?', answer: 'Yes, sea level rise is a major concern. Current projections show significant portions of Richmond\'s waterfront could be flooded by 2100, affecting thousands of residents.' },
        { question: 'Do industrial areas have additional flood risks?', answer: 'Yes, the industrial areas along the canal have contamination risks. Flooding can mobilize hazardous materials from former industrial sites, creating environmental hazards.' },
        { question: 'Does urban flooding occur in Richmond?', answer: 'Yes, older neighborhoods with aging infrastructure experience urban flooding during heavy storms. Storm drains can be overwhelmed, causing street and property flooding.' }
      ]
    },
    'calabasas': {
      neighborhoods: ['The Oaks', 'Calabasas Park', 'Mountain View Estates', 'Monte Nido', 'Deer Springs', 'Stone Creek', 'Greater Mulwood', 'Mont Calabasas'],
      landmarks: 'The Commons at Calabasas, Calabasas Library, Malibu Canyon, Albertsons, Calabasas Swim Center',
      climate: 'Calabasas has a Mediterranean climate with hot, dry summers and mild, wet winters. The city sits in the Santa Monica Mountains with steep, chaparral-covered hillsides. The area faces extreme wildfire burn scar risks, followed by devastating mud and debris flows during winter rains. This is one of the highest-risk areas for water damage in Southern California.',
      faqs: [
        { question: 'Does Calabasas have mudslide risks after fires?', answer: 'Yes, Calabasas is one of the highest-risk areas for post-fire mudflows. The 2018 Woolsey Fire burned hillsides above the city, and subsequent winters have brought devastating debris flows damaging homes.' },
        { question: 'Which neighborhoods face mudslide risks?', answer: 'Mountain View Estates, Monte Nido, Deer Springs, and Greater Mulwood face the highest risks. These hillside communities sit below or within former burn areas.' },
        { question: 'Does Calabasas flood?', answer: 'Flash flooding occurs during intense desert thunderstorms. Water rushes through canyons and can inundate lower-lying areas quickly. Several major flooding events have occurred.' },
        { question: 'Are there flood zones in Calabasas?', answer: 'FEMA has designated flood zones in canyon areas and drainage corridors. Many hillside homes are in high-risk mudslide zones requiring specialized insurance.' },
        { question: 'What water damage risks exist in The Oaks?', answer: 'The Oaks and other gated communities have drainage systems but remain at risk from hillside runoff and mudflows from above properties during heavy rains.' }
      ]
    },
    'la-jolla': {
      neighborhoods: ['Village of La Jolla', 'La Jolla Shores', 'La Jolla Farms', 'Bird Rock', 'WindanSea Beach', 'Muirlands', 'Torrey Pines', 'Mount Soledad'],
      landmarks: 'La Jolla Cove, Torrey Pines State Reserve, Scripps Institution of Oceanography, Birch Aquarium, La Jolla Playhouse',
      climate: 'La Jolla has a coastal Mediterranean climate with mild temperatures year-round. This beachfront community faces unique water damage risks from sea level rise, coastal erosion, storm surge, and high tide flooding. The coastline experiences ongoing erosion that threatens cliffside properties. Winter storms can cause significant beach erosion and coastal property damage.',
      faqs: [
        { question: 'Does La Jolla have sea level rise risks?', answer: 'Yes, sea level rise is a major concern. Low-lying areas like La Jolla Shores and coastal beaches face increasing tidal flooding and erosion that will worsen over coming decades.' },
        { question: 'Which La Jolla areas flood most?', answer: 'La Jolla Shores, the Village coastal areas, and Bird Rock are most vulnerable to coastal flooding. Storm events combined with high tides cause the most damage.' },
        { question: 'Does coastal erosion affect La Jolla?', answer: 'Yes, ongoing coastal erosion is a significant issue. Wave action during winter storms erodes beaches and can undermine cliffside properties, particularly in the WindanSea area.' },
        { question: 'Are cliffside properties at risk?', answer: 'Yes, properties on the coastal bluffs face erosion and collapse risks. Waves and weathering undercut cliffs, causing landslides that damage homes.' },
        { question: 'Does La Jolla experience storm surge?', answer: 'Yes, winter storms bring high waves and storm surge that damage coastal infrastructure and beachfront properties. The La Jolla Cove area is particularly vulnerable to wave damage.' }
      ]
    },

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
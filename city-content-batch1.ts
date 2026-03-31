export const batch1Content: Record<string, { neighborhoods: string[]; landmarks: string; climate: string; faqs: { question: string; answer: string }[] }> = {
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
  }
};
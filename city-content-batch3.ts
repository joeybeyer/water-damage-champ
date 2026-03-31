export const batch3Content: Record<string, { neighborhoods: string[]; landmarks: string; climate: string; faqs: { question: string; answer: string }[] }> = {
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
  }
};

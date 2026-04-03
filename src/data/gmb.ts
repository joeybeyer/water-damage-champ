export interface GmbListing {
  embedSrc: string;
  phone: string;        // E.164: +1XXXXXXXXXX
  phoneDisplay: string; // (XXX) XXX-XXXX
}

export const gmbListings: Record<string, GmbListing> = {
  'victorville': {
    embedSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d19483.113955743647!2d-117.3292359!3d34.5248465!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x645e9f0087f5a037%3A0x87a678643fec624e!2sWater%20Champ!5e1!3m2!1sen!2sus!4v1775171129219!5m2!1sen!2sus',
    phone: '+17605495340',
    phoneDisplay: '(760) 549-5340',
  },
  'huntington-beach': {
    embedSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d19681.847586543627!2d-117.98809!3d33.6658874!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d9317253a18cdbb%3A0xe9b4de6351f9b1eb!2sWater%20Champ!5e1!3m2!1sen!2sus!4v1775171176082!5m2!1sen!2sus',
    phone: '+15626358161',
    phoneDisplay: '(562) 635-8161',
  },
  'oakland': {
    embedSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d18683.291319033695!2d-122.4569412!3d37.873807!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808585d817a9d9f9%3A0x4bcd581957ec424f!2sWater%20Champ!5e1!3m2!1sen!2sus!4v1775171194933!5m2!1sen!2sus',
    phone: '+14154067464',
    phoneDisplay: '(415) 406-7464',
  },
  'milpitas': {
    embedSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d18798.393367870973!2d-121.9652188!3d37.3517544!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6035c7041e9914af%3A0x2f4c649ca95f4a08!2sWater%20Champ!5e1!3m2!1sen!2sus!4v1775171219964!5m2!1sen!2sus',
    phone: '+16693240003',
    phoneDisplay: '(669) 324-0003',
  },
  'sunnyvale': {
    embedSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d18794.645327757204!2d-122.0331141!3d37.3667195!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x806b7c9271bd7a7b%3A0xe5aada644bd72a33!2sWater%20Champ!5e1!3m2!1sen!2sus!4v1775171244789!5m2!1sen!2sus',
    phone: '+16693143798',
    phoneDisplay: '(669) 314-3798',
  },
  'san-diego': {
    embedSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d19882.983586650913!2d-117.1597926!3d32.7763922!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d9556e74a7bc75%3A0x18e48ea1c74da19e!2sWater%20Champ!5e1!3m2!1sen!2sus!4v1775171269113!5m2!1sen!2sus',
    phone: '+18583100839',
    phoneDisplay: '(858) 310-0839',
  },
  'san-bernardino': {
    embedSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d19581.492213038735!2d-117.5944762!3d34.1020169!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x944928f05eed03d%3A0x4815cd9355e44c9b!2sWater%20Champ!5e1!3m2!1sen!2sus!4v1775171287614!5m2!1sen!2sus',
    phone: '+19096866917',
    phoneDisplay: '(909) 686-6917',
  },
  'rancho-cucamonga': {
    embedSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d19592.18604777709!2d-117.7493454!3d34.0557772!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4d6fbd6379e85cb7%3A0xc0f0f5a979f8ef2a!2sWater!5e1!3m2!1sen!2sus!4v1775171311918!5m2!1sen!2sus',
    phone: '+19096868038',
    phoneDisplay: '(909) 686-8038',
  },
  'santa-rosa': {
    embedSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d18538.858989090873!2d-122.7079344!3d38.4397264!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa81d328c737f6cef%3A0x3ab86b57e9a25de8!2sWater%20Champ!5e1!3m2!1sen!2sus!4v1775171330336!5m2!1sen!2sus',
    phone: '+17073164017',
    phoneDisplay: '(707) 316-4017',
  },
  'pomona': {
    embedSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d78389.5669719454!2d-117.860126!3d34.033248!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4de4dffe15c188bb%3A0xfc4d233445460554!2sWater%20Champ!5e1!3m2!1sen!2sus!4v1775171354399!5m2!1sen!2sus',
    phone: '+19093253385',
    phoneDisplay: '(909) 325-3385',
  },
  'foster-city': {
    embedSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d37523.298890356404!2d-122.2703562!3d37.4982447!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ac2d2f0e2ed49b9%3A0x622fec160fd970d5!2sWater%20Champ!5e1!3m2!1sen!2sus!4v1775171375100!5m2!1sen!2sus',
    phone: '+16502401605',
    phoneDisplay: '(650) 240-1605',
  },
  'stockton': {
    embedSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d18662.3645595544!2d-121.2843708!3d37.956246!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x62c4ff472e8030f3%3A0x535a5cfdbd1e0798!2sWater%20Champ!5e1!3m2!1sen!2sus!4v1775171400640!5m2!1sen!2sus',
    phone: '+12092315466',
    phoneDisplay: '(209) 231-5466',
  },
  'downey': {
    embedSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d19618.37063186847!2d-118.1317519!3d33.9423223!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa72da01992941ded%3A0x633e329c208e5cc4!2sChamp!5e1!3m2!1sen!2sus!4v1775171423187!5m2!1sen!2sus',
    phone: '+15626358160',
    phoneDisplay: '(562) 635-8160',
  },
  'oxnard': {
    embedSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d19561.009617138574!2d-119.1753451!3d34.1904293!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x81a4381df8a146db%3A0xaab10d0397f12770!2sWater%20Champ!5e1!3m2!1sen!2sus!4v1775171443966!5m2!1sen!2sus',
    phone: '+18054002740',
    phoneDisplay: '(805) 400-2740',
  },
  'ventura': {
    embedSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d156279.89753345144!2d-119.2487876!3d34.3024654!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa8059c54fcb36aa3%3A0x2765f8f8ed5594f4!2sWater%20Champ!5e1!3m2!1sen!2sus!4v1775171472194!5m2!1sen!2sus',
    phone: '+18055059329',
    phoneDisplay: '(805) 505-9329',
  },
  'calabasas': {
    embedSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d19569.128473891404!2d-118.644788!3d34.1554086!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c29fdbed136399%3A0x18aaafc6cecfd362!2sWater%20Damage%20Champ!5e1!3m2!1sen!2sus!4v1775171497166!5m2!1sen!2sus',
    phone: '+17472815707',
    phoneDisplay: '(747) 281-5707',
  },
  'san-rafael': {
    embedSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d18630.445583838773!2d-122.5354914!3d38.0173966!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808599d8c1785d1b%3A0xf29a25b5ae87763!2sWater%20Damage%20Champ!5e1!3m2!1sen!2sus!4v1775171514282!5m2!1sen!2sus',
    phone: '+14154067468',
    phoneDisplay: '(415) 406-7468',
  },
  'corona': {
    embedSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d19633.833063207814!2d-117.5668057!3d33.8751683!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x615cb513d5c9e9a3%3A0xbf02253d1a856b9c!2sWater%20Damage%20Champ!5e1!3m2!1sen!2sus!4v1775171537129!5m2!1sen!2sus',
    phone: '+19515164743',
    phoneDisplay: '(951) 516-4743',
  },
  'cupertino': {
    embedSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d18805.680028265542!2d-122.0177652!3d37.3226457!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10c2a7110dd7a89%3A0x3ad6a8b7e8136902!2sWater%20Damage%20Champ!5e1!3m2!1sen!2sus!4v1775171558557!5m2!1sen!2sus',
    phone: '+14084033553',
    phoneDisplay: '(408) 403-3553',
  },
};

// Legacy export for backwards compatibility
export const gmbEmbeds: Record<string, string> = Object.fromEntries(
  Object.entries(gmbListings).map(([k, v]) => [k, v.embedSrc])
);

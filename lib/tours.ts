import { viatorUrl } from "./site";

export type DriveRole = "you-drive" | "passenger" | "you-or-passenger";

export type Faq = {
  question: string;
  answer: string;
};

export type Category = {
  slug: string;
  path: string;
  name: string;
  cardTitle: string;
  driveLabel: string;
  driveRole: DriveRole;
  title: string;
  metaTitle: string;
  description: string;
  tagline: string;
  eyebrow?: string;
  overview: string;
  intro: readonly string[];
  bestFor: string;
  standout: string;
  planningTip: string;
  listingsTitle?: string;
  listingsIntro?: string;
  heroImage: string;
  heroAlt: string;
  bookingUrl: string;
  fromPrice: number;
  priceCurrency: "USD";
  duration: string;
  faqs: readonly Faq[];
  faqTitle?: string;
};

export type TourStop = {
  stop: string;
  detail: string;
};

export type Tour = {
  id: string;
  categorySlug: string;
  alsoOn?: readonly string[];
  name: string;
  driveRole: DriveRole;
  driveNote: string;
  rating?: number;
  reviews?: number;
  fromPrice: number;
  duration: string;
  bookingUrl: string;
  image: string;
  imageAlt: string;
  gallery?: readonly { src: string; alt: string }[];
  blurb: string;
  suppliedBy?: string;
  highlights?: readonly string[];
  body?: readonly string[];
  itinerary?: readonly TourStop[];
  extras?: readonly string[];
};

export function driveBadge(role: DriveRole) {
  if (role === "you-drive") return "You drive";
  if (role === "passenger") return "Someone else drives";
  return "You can drive or ride";
}

export function formatFromPrice(price: number) {
  return `$${price}`;
}

export const categories: Category[] = [
  {
    slug: "self-drive-quads",
    path: "/self-drive-quad-tours",
    name: "Quad tours",
    cardTitle: "Self-drive quads",
    driveLabel: "You drive (or ride pillion)",
    driveRole: "you-or-passenger",
    title: "The 4 Best Gozo Quad Tours",
    metaTitle:
      "The 4 Best Gozo Quad Tours (Who Drives, Stops & What’s Included)",
    description:
      "The four best Gozo quad bike tours: who drives, the island stops, what’s included, and live dates to book.",
    tagline: "570cc ATV · you on the bike",
    eyebrow: "Quad tours in Gozo",
    overview:
      "A Gozo quad tour is you on a 570cc ATV along coastal and country trails",
    intro: [
      "A Gozo quad tour is an off-road loop on a bike you straddle — helmet on, a lead rider out front, and tracks most coaches never use. These are the four best quad tours from Malta: Cominology’s all-inclusive loop, Pride’s sunset combo, Arrigo’s self-drive with a Comino mini cruise, and Pride’s full-day boat-and-lunch run. Each has a clear route and a booking link to check live dates.",
      "A typical day starts with pickup in Malta, a private boat or ferry to Mġarr, then cliffs at Ta' Ċenċ, Xlendi, Dwejra and the Inland Sea, the Xwejni salt pans, and a boat past Comino’s Blue Lagoon when the sea allows. Some tours sell a passenger seat on the back. Pick the driver option if you want the handlebars.",
    ],
    bestFor:
      "Riders who want the handlebars, the dust, and a route that leaves the coach trail.",
    standout:
      "This is the bike you sit on: 570cc ATVs, a lead rider, and trails larger vehicles skip.",
    planningTip:
      "A quad is a bike you straddle. Drivers are usually 21+ with a valid car license. Some tours sell a passenger seat on the back — pick driver if you want the handlebars. If you’d rather sit in an open 4x4, the UTV tours page is the better match.",
    listingsTitle: "The 4 best Gozo quad tours",
    listingsIntro:
      "For the best value, look for tours that include lunch and the Comino boat. If you want the small cave boat at Dwejra, bring a little cash for that optional add-on.",
    heroImage: "/images/tours/74443P10-1.jpg",
    heroAlt:
      "Quad bikes on a coastal track in Gozo heading toward Xlendi Tower and the cliffs.",
    bookingUrl: viatorUrl(
      "https://www.viator.com/searchResults/all?text=gozo+quad+bike+self+drive",
    ),
    fromPrice: 116,
    priceCurrency: "USD",
    duration: "6–8 hours",
    faqTitle: "Questions before you book",
    faqs: [
      {
        question: "What is a quad tour in Gozo?",
        answer:
          "You sit on a 570cc ATV, wear a helmet, and follow a lead rider along coastal and country trails. Pickup is usually in Malta, then a boat or ferry to Mġarr. The loop hits cliffs, bays, salt pans, and Dwejra, and most tours finish with a look at Comino when the sea allows.",
      },
      {
        question: "Do I drive it myself?",
        answer:
          "Yes, on the self-drive tours, if you are typically 21 or over with a valid car license. Pride’s full day also lets you ride on the back. Arrigo’s bikes are two-seaters, so a companion can sit behind you. Choose the driver option when you book if you want the handlebars.",
      },
      {
        question: "Do I need a driving license?",
        answer:
          "Only if you drive. Operators usually ask for a full car license, held for about a year. Passengers on the back do not need one. If you’d rather sit back and take photos, the UTV tours page has options with a guide at the wheel.",
      },
      {
        question: "What’s the difference between a quad and a UTV?",
        answer:
          "A quad (or ATV) is the bike you straddle. A UTV is an open 4x4 with seats in a row — often a 6-seater — and someone else usually drives. Same island, different machine.",
      },
      {
        question: "Where does the tour actually go?",
        answer:
          "Most loops include Ta' Ċenċ or Sanap cliffs, Xlendi, Fontana, Dwejra and the Inland Sea, and the Xwejni salt pans. Pride’s full day builds in a proper lunch. The sunset combo pairs a shorter Gozo ride with time on Comino.",
      },
      {
        question: "Do we stop at the Blue Lagoon?",
        answer:
          "Usually as a boat pass-by or a short swim, not a beach day. Summer is the season for a dip; in winter it can be viewing only if the sea is up.",
      },
      {
        question: "How long is the tour, and can I start from Malta?",
        answer:
          "About six to eight hours door to door, and yes — almost all of these pick up in Malta. The sunset combo is the shorter one. Independent rental with a GPS map is a different product if you are already staying on Gozo.",
      },
    ],
  },
  {
    slug: "utv",
    path: "/utv-tours",
    name: "UTV tours",
    cardTitle: "UTV tours",
    driveLabel: "Usually a ride-along or 6-seater",
    driveRole: "passenger",
    title: "The 4 Best Gozo UTV Tours",
    metaTitle:
      "The 4 Best Gozo UTV Tours (Who Drives, Stops & What’s Included)",
    description:
      "The four best Gozo UTV and 4x4 tours: who drives, the island stops, what’s included, and live dates to book.",
    tagline: "Open 4x4 · four tours to compare",
    eyebrow: "UTV tours in Gozo",
    overview:
      "An open-air 4x4 day across Gozo’s coastlines and villages",
    intro: [
      "A Gozo UTV tour is an open-air 4x4 day across the island’s most dramatic coastlines and villages. These are the four best UTV and 4x4 tours on Gozo—each with a driver who knows the island, a clear route, and a booking link to check live dates.",
      "A typical day starts with pickup in Malta, a boat or ferry to Mġarr, then lookouts at Qala or Ta' Ċenċ, Ġgantija, Calypso over Ramla, the Xwejni salt pans, Ta' Pinu, Dwejra, and the Citadel. Most finish with a Comino and Blue Lagoon pass or a swim. Pride’s 6-seater UTV, Cominology’s ride-along 4x4, and the chauffeured buggies from Arrigo and Barbarossa are the four to compare.",
    ],
    bestFor:
      "Groups, couples, and anyone who wants Gozo’s tracks and views without sitting on a quad.",
    standout:
      "Four operators, four machines, one island loop: lookouts, temples, salt pans, Comino.",
    planningTip:
      "A UTV is a multi-seat, open-air vehicle. If you were picturing a quad bike you straddle and drive yourself, you'll want the Self-Drive Quad section instead. If you want to sit back and enjoy the views, you are in the right place.",
    listingsTitle: "The 4 best Gozo UTV tours",
    listingsIntro:
      "For the best value, look for tours that include lunch and the Comino swim. If you want to go inside Ġgantija or take the small cave boat at Dwejra, bring a little cash for those optional add-ons.",
    heroImage: "/images/tours/32057P26-1.jpg",
    heroAlt:
      "Open six-seater UTV on a Gozo coastal road with passengers looking out to sea.",
    bookingUrl: viatorUrl(
      "https://www.viator.com/Gozo-tours/4WD-ATV-and-Off-Road-Tours/d28021-g9-c32",
    ),
    fromPrice: 95,
    priceCurrency: "USD",
    duration: "6–8 hours",
    faqTitle: "Gozo UTV tour FAQs",
    faqs: [
      {
        question: "What is a UTV tour in Gozo?",
        answer:
          "A Gozo UTV tour is a full-day open 4x4 around the island, usually with hotel pickup in Malta, a boat or ferry to Mġarr, and a loop of lookouts, Ġgantija, salt pans, Dwejra, and the Citadel. A UTV is a utility terrain vehicle with seats in a row — often a 6-seater. It is not an ATV or quad you straddle. Many tours finish with a Comino and Blue Lagoon pass or swim.",
      },
      {
        question: "Do I drive a UTV in Gozo?",
        answer:
          "Usually your guide drives. On the four tours we list, Cominology is a ride-along 4x4, and Arrigo and Barbarossa put a driver-guide on a 4WD buggy. Pride’s 6-seater UTV keeps a family or group together in one open vehicle. If you want to sit on a bike and ride it yourself, that is a self-drive quad — a different, brilliant tour.",
      },
      {
        question: "Do I need a driving license for a UTV tour in Gozo?",
        answer:
          "Not on a ride-along or chauffeured buggy. You only need a valid car license, typically 21+ and held for a year, if you pick a self-drive option. Most Gozo UTV tours are passenger tours: sit back, take photos, and let the guide take the tracks.",
      },
      {
        question: "What is the difference between a UTV, ATV, and quad in Gozo?",
        answer:
          "ATV and quad are the same idea here: a straddle bike you usually drive, with a helmet. A UTV is a side-by-side or 6-seater 4x4 with a bench and a roll cage. Jeep safari is a shared closed or open 4x4 with a guide. Buggy on Gozo is typically a small chauffeured 4WD on the same island loop.",
      },
      {
        question: "What stops do Gozo UTV tours include?",
        answer:
          "Expect Qala or Ta' Ċenċ first, then Ġgantija, Calypso over Ramla, the Xwejni salt pans, Ta' Pinu, Dwejra, and the Citadel. Pride adds Xewkija and Xlendi. Arrigo and Barbarossa add Wied il-Mielah. Most return via Comino. Going inside Ġgantija is an optional add-on on some tours. Order can change with the weather.",
      },
      {
        question: "Do Gozo UTV tours include the Blue Lagoon?",
        answer:
          "As a boat pass-by or a swim, weather permitting — not a full beach day. Barbarossa lists about 45 minutes in the water off Comino. Cominology swims in summer. Pride is a scenic pass on the private boat home. Winter can be viewing only if the sea is up.",
      },
      {
        question: "How long is a UTV tour in Gozo, and can I start from Malta?",
        answer:
          "About six to eight hours on the island, plus transfers. Pride is around six hours. Cominology about seven. Arrigo seven to eight. Barbarossa about eight door to door. Almost all full-day UTV and 4x4 packages pick up in Malta. Independent rental is a different product and is not these tours.",
      },
    ],
  },
  {
    slug: "buggy",
    path: "/buggy-tours",
    name: "Buggy tours",
    cardTitle: "Buggy tours",
    driveLabel: "You drive at sunset, or a guide drives",
    driveRole: "you-or-passenger",
    title: "The 4 Best Gozo Buggy Tours",
    metaTitle:
      "The 4 Best Gozo Buggy Tours (Who Drives, Stops & What’s Included)",
    description:
      "The four best Gozo buggy tours: Pride’s sunset self-drive, a Ryker at golden hour, Arrigo’s chauffeured 4WD, and a Comino-plus-sunset combo.",
    tagline: "Sunset self-drive · or a 4WD with a guide",
    eyebrow: "Buggy tours in Gozo",
    overview:
      "Golden-hour self-drive, a three-wheeled Ryker, or a chauffeured 4WD with lunch",
    intro: [
      "A Gozo buggy tour can be you at the wheel as the light goes gold, or a driver-guide on a 4WD while you take the photos. These are the four to compare: Pride’s sunset buggy, the sunset Ryker (a three-wheeler, kept here because it runs the same evening loop), Arrigo’s chauffeured island loop, and the Comino-plus-sunset combo. Each has a booking link for live dates.",
      "The sunset tours pick up in Malta from midday, cross to Gozo, and aim for Ċirkewwa around 9:15pm. You need to be 21 with a full, current license if you drive. Arrigo is the sit-back option: lunch, transfers, and a guide on a 4WD buggy.",
    ],
    bestFor:
      "Couples and small groups who want golden hour on the coast, or a full 4WD day with someone else driving.",
    standout:
      "Sunset self-drive with a platter at the end — or a chauffeured 4WD if you want the views without the license.",
    planningTip:
      "The Ryker is a three-wheeler, not a 4x4 buggy. We keep it here because it is sold next to the sunset buggy tours. If you want a bike you straddle, the Self-Drive Quad page is the better match. Arrigo is the tour where a guide drives.",
    listingsTitle: "The 4 best Gozo buggy tours",
    listingsIntro:
      "Sunset tours include a platter and an optional cocktail. Arrigo includes lunch. If you want the small cave boat at Dwejra on the chauffeured loop, bring a little cash for that add-on.",
    heroImage: "/images/tours/32057P42-1.jpg",
    heroAlt:
      "Sunset buggy tour on a Gozo coastal road in golden hour.",
    bookingUrl: viatorUrl(
      "https://www.viator.com/searchResults/all?text=gozo+buggy+tour",
    ),
    fromPrice: 101,
    priceCurrency: "USD",
    duration: "6–8 hours",
    faqTitle: "Questions before you book",
    faqs: [
      {
        question: "Do I drive a Gozo buggy tour myself?",
        answer:
          "On Pride’s sunset tours, yes — 21 or over with a full, current license. Arrigo is the exception: a driver-guide takes the 4WD so you can sit back. The Ryker is also self-drive, on three wheels.",
      },
      {
        question: "Is the Ryker a buggy?",
        answer:
          "No. It is a three-wheeled Can-Am Ryker. We keep it on this page because it is sold as the same golden-hour loop as the sunset buggy. If you want a 4WD with a roof and a guide, book Arrigo.",
      },
      {
        question: "What’s the difference between the sunset buggy and the Combi?",
        answer:
          "The sunset buggy is Gozo at golden hour, then a platter. The Combi adds about two hours on Comino first, then the same sunset ride. Pickup times from Malta are the same shape: midday start, back at Ċirkewwa around 9:15pm.",
      },
      {
        question: "Buggy or UTV in Gozo?",
        answer:
          "Sunset buggy and Ryker are you driving in the evening. Arrigo is a chauffeured 4WD through the day. UTV tours are open 6-seaters and ride-along 4x4s — usually with a guide at the wheel. Same island, different machine.",
      },
      {
        question: "Do I need a license?",
        answer:
          "Yes if you drive the sunset buggy, the Ryker, or the Combi. Arrigo’s chauffeured tour does not ask for one. Passengers on a two-seater still ride along without driving.",
      },
    ],
  },
  {
    slug: "jeep-safari",
    path: "/jeep-safari-tours",
    name: "Jeep safaris",
    cardTitle: "Jeep safaris",
    driveLabel: "A guide drives, or you in an e-jeep",
    driveRole: "you-or-passenger",
    title: "The 4 Best Gozo Jeep Tours",
    metaTitle:
      "The 4 Best Gozo Jeep Tours (Who Drives, Stops & What’s Included)",
    description:
      "The four best Gozo jeep tours: Pride’s chauffeured 4x4, a self-drive e-jeep, a UTV sold as a jeep tour, and Arrigo’s jeep with lunch.",
    tagline: "Shared 4x4 · or you drive an e-jeep",
    eyebrow: "Jeep tours in Gozo",
    overview:
      "A Gozo jeep tour is a 4x4 loop on tracks coaches skip — usually with a driver-guide",
    intro: [
      "A Gozo jeep tour is the comfortable 4x4 loop: country lanes, lookouts, temples, and a boat from Malta. These are the four to compare: Pride’s full-day jeep with a private boat, Cominology’s self-drive e-jeep, My Dream Malta’s Gozo-in-a-day (sold as a jeep, run as a UTV), and Arrigo’s chauffeured jeep with lunch. Each has a booking link for live dates.",
      "On Pride and Arrigo, a local driver takes the wheel. The e-jeep puts you behind the leader with up to three passengers. Lunch is in all four. Ġgantija is often an optional add-on if you want to go inside.",
    ],
    bestFor:
      "Families and mixed ages who want 4x4 tracks without sitting on a quad — or a small e-jeep if you want to drive.",
    standout:
      "Country roads buses cannot use, a driver-guide on most tours, and lunch in the fare.",
    planningTip:
      "Pride and Arrigo are sit-back jeeps. The e-jeep is self-drive. My Dream Malta’s listing is a UTV loop kept here because it is sold as a jeep tour. If you want a bike you straddle, the Self-Drive Quad page is the better match.",
    listingsTitle: "The 4 best Gozo jeep tours",
    listingsIntro:
      "Lunch and Malta transfers are in these tours. If you want to go inside Ġgantija or take the small cave boat at Dwejra, bring a little cash for those optional add-ons.",
    heroImage: "/images/tours/32057P1-1.jpg",
    heroAlt:
      "Open jeep on a Gozo track with passengers looking out toward the coast.",
    bookingUrl: viatorUrl(
      "https://www.viator.com/searchResults/all?text=gozo+jeep+safari",
    ),
    fromPrice: 95,
    priceCurrency: "USD",
    duration: "6–9 hours",
    faqTitle: "Questions before you book",
    faqs: [
      {
        question: "Do I drive on a Gozo jeep tour?",
        answer:
          "On Pride and Arrigo, no — a driver-guide takes the 4x4. Cominology’s e-jeep is the self-drive option: you follow a leader, with room for up to three passengers. My Dream Malta’s listing is a UTV loop sold as a jeep tour.",
      },
      {
        question: "Do I need a license?",
        answer:
          "Only on the self-drive e-jeep. The chauffeured jeep tours do not ask for one. If you’d rather sit back, book Pride or Arrigo.",
      },
      {
        question: "What’s included?",
        answer:
          "Lunch and hotel pickup from Malta are in all four. Private boat or ferry gets you to Gozo. Going inside Ġgantija is optional on most tours — a little cash is handy if you want it.",
      },
      {
        question: "Jeep, UTV, or tuk tuk?",
        answer:
          "A jeep safari is a 4x4 on tracks with a guide, or a small e-jeep you drive. UTV tours are open 6-seaters and ride-alongs. A tuk tuk stays on roads. Same island, different machine.",
      },
      {
        question: "How long is the tour, and can I start from Malta?",
        answer:
          "About six to nine hours door to door, and yes — these pick up in Malta. Pride is around six hours. The e-jeep about seven. Arrigo seven to eight. My Dream Malta is the long one, eight to nine.",
      },
    ],
  },
  {
    slug: "tuk-tuk",
    path: "/tuk-tuk-tours",
    name: "Tuk tuks",
    cardTitle: "Tuk tuk tours",
    driveLabel: "Chauffeur · road vehicle",
    driveRole: "passenger",
    title: "The 3 Best Gozo Tuk Tuk Tours",
    metaTitle:
      "The 3 Best Gozo Tuk Tuk Tours (Who Drives, Stops & What’s Included)",
    description:
      "The three best Gozo tuk tuk tours: a chauffeured island loop, a Comino mini cruise, and a sunset tuk tuk with a lagoon swim.",
    tagline: "Sit back · chauffeur · villages and Comino",
    eyebrow: "Tuk tuk tours in Gozo",
    overview:
      "A Gozo tuk tuk tour is a chauffeured open taxi around the island — lunch, lookouts, and usually a boat to Comino",
    intro: [
      "A Gozo tuk tuk tour is sit-back sightseeing: forward-facing seats, a local driver, villages and cliffs, and a boat toward Comino when the sea allows. These are the three to compare: Cominology’s all-inclusive loop with a Crystal Lagoon swim, Arrigo’s tuk tuk with a Comino mini cruise, and Arrigo’s sunset tuk tuk after an afternoon on the water. Each has a booking link for live dates.",
      "You do not drive. Pickup is in Malta. Lunch is on the full-day loops. Ġgantija is optional if you want to go inside. If you pictured dusty tracks on a quad or an open 4x4, the Self-Drive Quad and UTV tours pages are the better match — this page is shade, photos, and a chauffeur.",
    ],
    bestFor:
      "Mixed-age groups and anyone who wants Gozo in a day without a license or a clutch.",
    standout:
      "A driver, a running commentary, village squares, and a Comino boat when the weather holds.",
    planningTip:
      "A tuk tuk stays on roads. If you want off-road tracks, the UTV tours, buggy, jeep, and Self-Drive Quad pages are the ones with 4x4s and bikes.",
    listingsTitle: "The 3 best Gozo tuk tuk tours",
    listingsIntro:
      "Lunch is on the full-day loops. If you want to go inside Ġgantija or take the small cave boat at Dwejra, bring a little cash for those optional add-ons.",
    heroImage: "/images/tours/74443P8-1.jpg",
    heroAlt:
      "Chauffeured tuk tuk on a Gozo village street with passengers under a canopy.",
    bookingUrl: viatorUrl(
      "https://www.viator.com/searchResults/all?text=gozo+tuk+tuk+day+tour",
    ),
    fromPrice: 101,
    priceCurrency: "USD",
    duration: "7–9 hours",
    faqTitle: "Questions before you book",
    faqs: [
      {
        question: "Do I drive a tuk tuk in Gozo?",
        answer:
          "No. A chauffeur takes the lanes. You sit in forward-facing seats, take photos, and listen to the commentary. No license needed.",
      },
      {
        question: "Is a tuk tuk an off-road tour?",
        answer:
          "It stays on roads. You still see Sanap cliffs, Xlendi, the Citadel, Dwejra, and the salt pans — in an open taxi rather than a 4x4. For tracks, the UTV tours and Self-Drive Quad pages are the better fit.",
      },
      {
        question: "Do these tours include the Blue Lagoon?",
        answer:
          "Usually as a boat pass-by or a swim, weather permitting. Cominology lists Crystal Lagoon in summer. Arrigo’s full day adds a Comino mini cruise. The sunset tour starts on the water with about 45 minutes in a lagoon when the sea allows.",
      },
      {
        question: "What’s included?",
        answer:
          "Malta pickup, a driver, and a boat or ferry to Gozo. Lunch is on the two full-day loops. Ġgantija entry and the Inland Sea cave boat are optional add-ons — a little cash is handy if you want them.",
      },
      {
        question: "How long is the tour?",
        answer:
          "About seven to nine hours door to door. Cominology is around seven hours. Arrigo’s daytime tuk tuk is seven to eight. The sunset combo is the long one, eight to nine.",
      },
    ],
  },
];

export const tours: Tour[] = [
  {
    id: "74443P10",
    categorySlug: "self-drive-quads",
    name: "Gozo Quad Bike Day Tour - All-inclusive + Blue Lagoon",
    driveRole: "you-drive",
    driveNote:
      "You drive a 570cc ATV. Helmets on, a lead rider out front.",
    fromPrice: 116,
    duration: "7 hours",
    bookingUrl: viatorUrl(
      "https://www.viator.com/tours/Valletta/THREE-3-HOURS-MORNING-TUK-TUK-TOUR-GOZO/d4142-74443P10",
    ),
    image: "/images/tours/74443P10-1.jpg",
    imageAlt:
      "Quad bikes on a Gozo coastal track toward Xlendi Tower and the cliffs.",
    gallery: [
      {
        src: "/images/tours/74443P10-2.jpg",
        alt: "Riders on 570cc quads along a Gozo country trail.",
      },
      {
        src: "/images/tours/74443P10-3.jpg",
        alt: "Gozo quad convoy with helmets on a dusty track.",
      },
      {
        src: "/images/tours/74443P10-4.jpg",
        alt: "All-inclusive Gozo quad tour with coastal views.",
      },
    ],
    suppliedBy: "COMINOLOGY LTD",
    blurb:
      "You on a 570cc ATV, coastal and country trails, a light Gozitan lunch, and a private boat past Comino’s Blue Lagoon and sea caves.",
    body: [
      "This is the roar-and-dust day: a 570cc quad, a lead rider, and tracks hop-on buses never use. Pickup in Malta, a private boat reserved for the group, then Ta' Ċenċ, Xlendi, Fontana, Dwejra, and the Xwejni pans.",
      "Summer usually adds a swim at a Gozo bay and a short Comino look at the Blue Lagoon and caves. If the sea is up, the crossing may use the regular ferry — you still get the island. Lunch and transport are included.",
    ],
    itinerary: [
      {
        stop: "Ta' Ċenċ / Sanap cliffs",
        detail:
          "One of Gozo’s high points, with Malta and Comino in the distance. About 15 minutes. Coaches skip this one.",
      },
      {
        stop: "Xlendi Bay",
        detail:
          "The belvedere over Xlendi Tower and the inlet. About 15 minutes for photos.",
      },
      {
        stop: "Fontana",
        detail:
          "The Knights’ 16th-century wash houses on Spring Street — Ghajn il-Kbira and Ghajn Bendu. About 30 minutes.",
      },
      {
        stop: "Dwejra Bay",
        detail:
          "Western geology and a swim in summer. About 30 minutes on this run.",
      },
      {
        stop: "Fungus Rock",
        detail:
          "The 60-metre limestone islet at Dwejra’s black lagoon. A short look, about 5 minutes.",
      },
      {
        stop: "Inland Sea",
        detail:
          "The seawater lagoon through the natural arch. About 20 minutes.",
      },
      {
        stop: "Xwejni salt pans",
        detail:
          "The north-coast pans after a pass by Ta' Pinu and Wied il-Għasri. About 10 minutes, then Qbajjar and Marsalforn on the way to the boat.",
      },
      {
        stop: "Comino, Blue Lagoon, Crystal Lagoon",
        detail:
          "A boat look at the lagoon, Crystal Lagoon, and the caves, weather permitting — the closer after the quad loop.",
      },
    ],
    extras: [
      "Private boat to Gozo (or the regular ferry if the sea is up), a light Gozitan lunch, and transport are included.",
      "Summer swim at a Gozo bay, plus a Comino look at the Blue Lagoon and caves when the weather holds.",
      "About seven hours. You drive. Helmets and a lead rider are part of the tour.",
    ],
  },
  {
    id: "32057P8",
    categorySlug: "self-drive-quads",
    name: "Sunset Quad Tour Gozo Combi",
    driveRole: "you-drive",
    driveNote:
      "You drive. Golden-hour tracks plus time on Comino in one combo day.",
    fromPrice: 122,
    duration: "6 hours",
    bookingUrl: viatorUrl(
      "https://www.viator.com/tours/Gozo/Gozo-Pride-Half-Day-Quad-Tour-Driver/d28021-32057P8",
    ),
    image: "/images/tours/32057P8-1.jpg",
    imageAlt:
      "Quad bike on a Gozo trail at sunset with a rider in a helmet.",
    gallery: [
      {
        src: "/images/tours/32057P8-2.jpg",
        alt: "Sunset light on a Gozo quad track.",
      },
      {
        src: "/images/tours/32057P8-3.jpg",
        alt: "Pride quad tour along Gozo’s shoreline.",
      },
      {
        src: "/images/tours/32057P8-4.jpg",
        alt: "Riders on quads exploring Gozo in late light.",
      },
    ],
    suppliedBy: "Gozo Pride Tours Ltd",
    blurb:
      "The later start: hotel pickup, a quad loop at the nicest light of the day, and time to explore Comino in the same outing.",
    body: [
      "Pride’s sunset combo is for people who want the bike and the golden hour. You drive a quad to places larger vehicles skip — Qala’s belvedere, Għasri Valley, Calypso, Ramla and Simar valleys — with a guide, helmets, and hotel pickup included.",
      "The day pairs about four hours on Gozo with around two hours on Comino. Starting and ending at Mġarr Harbour makes the boat easy. It is a shorter island loop than the full-day Pride quad, and the light is the point.",
    ],
    itinerary: [
      {
        stop: "Hotel pickup",
        detail:
          "Malta or Gozo hotels. The quad section starts from Mġarr after a briefing.",
      },
      {
        stop: "Qala Belvedere",
        detail:
          "Comino and Malta in one view — a classic first look before the trails.",
      },
      {
        stop: "Għasri Valley, Calypso, Ramla and Simar",
        detail:
          "The shoreline loop at sunset: valleys and lookouts larger vehicles cannot thread.",
      },
      {
        stop: "Island of Gozo",
        detail:
          "About four hours on the bike around the coast, starting and ending at Mġarr.",
      },
      {
        stop: "Comino",
        detail:
          "About two hours to explore the smaller island as part of the combo.",
      },
    ],
    extras: [
      "Quad, equipment, guide, and hotel pickup and drop-off are included.",
      "About six hours in total: Gozo at sunset plus Comino time.",
      "You drive. A valid car license and being 21 or over is the usual rule.",
    ],
  },
  {
    id: "6089P78",
    categorySlug: "self-drive-quads",
    name: "Gozo Quad Bike Self-Drive Tour Including Comino Mini Cruise",
    driveRole: "you-drive",
    driveNote:
      "Two-seater 570cc ATV. Drive solo or with a companion on the back.",
    fromPrice: 116,
    duration: "7–8 hours",
    bookingUrl: viatorUrl(
      "https://www.viator.com/tours/Malta/Gozo-Quad-Bike-Self-Drive-Tour-Including-Comino-Mini-Cruise/d4141-6089P78",
    ),
    image: "/images/tours/6089P78-1.jpg",
    imageAlt:
      "Self-drive quad convoy on a winding Gozo dirt trail with lime-green ATVs.",
    gallery: [
      {
        src: "/images/tours/6089P78-2.jpg",
        alt: "Arrigo 570cc quads on a Gozo countryside track.",
      },
      {
        src: "/images/tours/6089P78-3.jpg",
        alt: "Riders following a lead quad through Gozo scrubland.",
      },
      {
        src: "/images/tours/6089P78-4.jpg",
        alt: "Two-seater quad bikes on a Gozo coastal trail.",
      },
    ],
    suppliedBy: "Robert Arrigo & Sons",
    blurb:
      "You drive a two-seater 570cc quad behind a tour leader, then a private-boat mini cruise around Comino’s Blue Lagoon, Crystal Lagoon, and sea caves.",
    body: [
      "Arrigo’s tour is the self-drive with a safety net: a briefing at Mġarr, then you follow experienced leaders along Ta' Ċenċ, the Knights’ wash houses, Dwejra, and the Xwejni pans. A companion can sit behind you on the two-seater.",
      "Pickup in Malta is by minivan. The crossing is a private boat when the sea allows, or the regular ferry with tickets included. After the quad loop, a mini cruise around Comino — with a swim at the Blue Lagoon or another lagoon in high season.",
    ],
    itinerary: [
      {
        stop: "Mġarr Harbour",
        detail:
          "Orientation and a health-and-safety briefing, then you hop on the quads. About 15 minutes.",
      },
      {
        stop: "Ta' Ċenċ cliffs",
        detail:
          "South-west panoramic cliffs above the Mediterranean. About 30 minutes. Xlendi is a pass-by after.",
      },
      {
        stop: "Knights’ wash houses",
        detail:
          "16th-century spring washhouses still used by locals. About 20 minutes in Fontana.",
      },
      {
        stop: "Dwejra Bay",
        detail:
          "The western geological pocket. About 10 minutes before the Inland Sea.",
      },
      {
        stop: "Inland Sea",
        detail:
          "The lagoon through the 65-metre tunnel. About 20 minutes. The short cave boat is an optional add-on on site.",
      },
      {
        stop: "Xwejni salt pans",
        detail:
          "North-coast pans after a countryside run, with Ta' Pinu and Wied il-Għasri as pass-bys. About 15 minutes, then Qbajjar and Marsalforn.",
      },
      {
        stop: "Comino mini cruise",
        detail:
          "About 30 minutes around Blue Lagoon, Crystal Lagoon, and the Santa Maria caves. High-season swim stop, weather permitting.",
      },
    ],
    extras: [
      "Malta pickup, private boat or ferry tickets, the 570cc quad, and a Comino mini cruise are included.",
      "High-season swim at the Blue Lagoon or another lagoon when the sea allows.",
      "If you want the small cave boat at Dwejra, bring a little cash for that optional add-on.",
      "Seven to eight hours. You drive. A companion can ride pillion.",
    ],
  },
  {
    id: "32057P2",
    categorySlug: "self-drive-quads",
    name: "Gozo Full-Day Quad Tour with Private Boat to Gozo & return",
    driveRole: "you-or-passenger",
    driveNote:
      "Choose to drive your own quad or ride as a passenger when you book.",
    fromPrice: 116,
    duration: "6 hours",
    bookingUrl: viatorUrl(
      "https://www.viator.com/tours/Gozo/Gozo-Pride-Full-Day-Quad-Tour/d28021-32057P2",
    ),
    image: "/images/tours/32057P2-1.jpg",
    imageAlt:
      "Pride full-day quad convoy in Gozo with riders in helmets ready to set off.",
    gallery: [
      {
        src: "/images/tours/32057P2-2.jpg",
        alt: "Full-day Gozo quad tour on a coastal road.",
      },
      {
        src: "/images/tours/32057P2-3.jpg",
        alt: "Quad bikes at a Gozo lookout during Pride’s island loop.",
      },
      {
        src: "/images/tours/32057P2-4.jpg",
        alt: "Riders on a guided Gozo quad tour with a private boat return.",
      },
    ],
    suppliedBy: "Gozo Pride Tours Ltd",
    blurb:
      "Drive or ride a quad through valleys and bays, break for a three-course lunch, then a powerboat home via Comino’s sea caves and the Blue Lagoon.",
    body: [
      "Pride’s full day is the sit-on-the-bike island loop with a proper lunch. You choose driver or passenger, follow a guide through tracks larger vehicles skip, and pause at the Xwejni salt pans, the Inland Sea, and Ramla’s red sand.",
      "North Malta and Gozo hotel transfers are included, plus the private boat both ways. Food-tasting and shopping sit on the route. The closer is the powerboat back to Malta past the caves — a scenic finish after the dust.",
    ],
    itinerary: [
      {
        stop: "Ramla Bay",
        detail:
          "The red-sand bay and the green valley above it. About 30 minutes, with room for photos.",
      },
      {
        stop: "Inland Sea",
        detail:
          "Dwejra’s seawater lagoon through the natural arch. About 30 minutes. Għasri Valley is a pass-by on this run.",
      },
      {
        stop: "Xwejni salt pans",
        detail:
          "A photo stop on the north coast among the old pans — one of the day’s signature views.",
      },
      {
        stop: "Xewkija",
        detail:
          "Lunch stop, about an hour. A three-course meal, with tasting and shopping on the route. Xlendi is a pass-by nearby.",
      },
      {
        stop: "Comino and Crystal Lagoon",
        detail:
          "Photo stops from the private powerboat home, via the Blue Lagoon and Comino’s sea caves when the sea allows.",
      },
    ],
    extras: [
      "Private boat to Gozo and back, north Malta and Gozo hotel transfers, and a three-course lunch are included.",
      "Powerboat return via Comino’s sea caves and the Blue Lagoon, weather permitting.",
      "About six to seven hours. Drive or ride — pick the option when you book.",
    ],
  },
  {
    id: "32057P26",
    categorySlug: "utv",
    name: "Gozo Full Day UTV Tour with Private Boat to Gozo and Return",
    driveRole: "you-or-passenger",
    driveNote: "Open 6-seater UTV — a family or group stays together in one vehicle.",
    fromPrice: 95,
    duration: "6 hours",
    bookingUrl: viatorUrl(
      "https://www.viator.com/tours/Gozo/Bokun-Free-Product-July/d28021-32057P26",
    ),
    image: "/images/tours/32057P26-1.jpg",
    imageAlt:
      "Six-seater UTVs on a Gozo country road during a full-day Pride tour.",
    gallery: [
      {
        src: "/images/tours/32057P26-2.jpg",
        alt: "Open 6-seater UTV on a Gozo coastal track.",
      },
      {
        src: "/images/tours/32057P26-3.jpg",
        alt: "Passengers in a Gozo Pride 6-seater UTV.",
      },
      {
        src: "/images/tours/32057P26-4.jpg",
        alt: "Gozo UTV convoy with limestone hills behind.",
      },
    ],
    suppliedBy: "Gozo Pride Tours Ltd",
    blurb:
      "The open 6-seater UTV is perfect for keeping a family or group together. You get the fresh air and 4x4 access without having to navigate the trails yourself.",
    body: [
      "Pride’s tour follows the island’s landmark loop — lookouts, temples, salt pans — in an open 6-seater, then a private boat past Comino on the way home.",
      "Qala is the briefing point, with Comino and Malta in one view. Then Ġgantija, Ramla from above, the Xwejni salt pans, Ta' Pinu, a crafts stop, Dwejra, the Citadel, Xewkija’s dome, and Xlendi. The boat home passes the Comino caves and the Blue Lagoon when the sea allows.",
    ],
    itinerary: [
      {
        stop: "Qala Belvedere",
        detail:
          "First look over Comino and Malta. The guide sets the tour here — about 15 minutes, no ticket.",
      },
      {
        stop: "Ġgantija",
        detail:
          "Neolithic temples, older than the Egyptian pyramids. Plan about 45 minutes. Going inside is an optional add-on — a little cash is handy if you want it.",
      },
      {
        stop: "Calypso Cave lookout",
        detail:
          "The viewing platform over Ramla’s red sand, not a long cave hike. About 20 minutes.",
      },
      {
        stop: "Xwejni salt pans",
        detail: "A walk along the coastal pans for photos. About 15 minutes.",
      },
      {
        stop: "Ta' Pinu",
        detail:
          "The national shrine on the western plain. About 15 minutes at the architecture, not a mass.",
      },
      {
        stop: "Ta' Dbiegi crafts village",
        detail:
          "Local products, a bite, shopping if you want it. About 20 minutes.",
      },
      {
        stop: "Dwejra Bay",
        detail:
          "Summer swim stop. The Inland Sea cave boat is an optional add-on on site. About 30 minutes.",
      },
      {
        stop: "The Citadel",
        detail:
          "Victoria’s fortified hill, visible from most of Gozo. About 30 minutes.",
      },
      {
        stop: "Xewkija Rotunda",
        detail:
          "St John the Baptist — Gozo’s largest church, one of the bigger unsupported domes. About 15 minutes.",
      },
      {
        stop: "Xlendi Bay",
        detail: "A short walk at the inlet before you turn for the harbour.",
      },
      {
        stop: "Comino and Blue Lagoon",
        detail:
          "A scenic pass-by on the private boat home, weather permitting.",
      },
    ],
    extras: [
      "Private boat to Gozo and back, with a scenic pass of Comino and the Blue Lagoon when the sea allows.",
      "If you want to go inside Ġgantija or take the small cave boat at Dwejra, bring a little cash for those optional add-ons.",
      "About six hours on the island.",
    ],
  },
  {
    id: "74443P25",
    categorySlug: "utv",
    name: "Gozo Jeep Safari Tour (4x4) + Comino (Blue Lagoon) boat trip",
    driveRole: "passenger",
    driveNote: "Ride-along. Your guide takes the tracks so you can enjoy the views.",
    fromPrice: 101,
    duration: "7 hours",
    bookingUrl: viatorUrl(
      "https://www.viator.com/tours/Valletta/GOZO-All-Inclusive-4x4-Ride-Along-UTV-Day-Safari/d4142-74443P25",
    ),
    image: "/images/tours/74443P25-1.jpg",
    imageAlt:
      "Open 4x4 UTV tour on Gozo with a driver-guide, Comino boat included.",
    gallery: [
      {
        src: "/images/tours/74443P25-2.jpg",
        alt: "Ride-along 4x4 on a Gozo off-road track.",
      },
      {
        src: "/images/tours/74443P25-3.jpg",
        alt: "Guests on a Gozo 4x4 safari with coastal views.",
      },
      {
        src: "/images/tours/74443P25-4.jpg",
        alt: "Group with an open 4x4 after a Gozo island loop.",
      },
    ],
    suppliedBy: "COMINOLOGY LTD",
    blurb:
      "This is the sit-back 4x4: a driver-guide on trails coaches skip, lunch included, and a Comino boat to close the day.",
    body: [
      "Your guide handles the rough terrain while you take in the scenery and the commentary. Hotel pickup in Malta and ferry tickets are included, so the tour starts at the minivan.",
      "Lunch is in the fare. Summer brings a swim at the Blue Lagoon when the sea allows; winter is a scenic look if the boat runs. Going inside Ġgantija is an optional add-on if you want more time at the temples.",
    ],
    itinerary: [
      {
        stop: "Ta' Ċenċ cliffs",
        detail:
          "Gozo’s tallest drop, about 150 metres, in a Natura 2000 pocket. A long first stop — up to an hour.",
      },
      {
        stop: "Xlendi Bay",
        detail:
          "The old fishing inlet under the cliffs. About 30 minutes on the waterfront.",
      },
      {
        stop: "Fontana",
        detail:
          "The small spring village above Xlendi, on the way toward Victoria. About 30 minutes.",
      },
      {
        stop: "The Citadel",
        detail:
          "The hill fortress in Victoria. About 45 minutes to walk the walls.",
      },
      {
        stop: "Ġgantija",
        detail:
          "UNESCO temples. About 20 minutes on this run. Going inside is an optional add-on.",
      },
      {
        stop: "Dwejra",
        detail: "Western geology — Inland Sea country. About 30 minutes.",
      },
      {
        stop: "Ta' Pinu",
        detail: "The shrine in the open west. About 15 minutes.",
      },
      {
        stop: "Xwejni salt pans",
        detail:
          "A short photo stop on the north coast, with Qbajjar and Marsalforn as pass-bys.",
      },
      {
        stop: "Blue Lagoon and Comino",
        detail:
          "About an hour at the lagoon in summer for a swim. Winter is viewing if the boat runs. Caves on the pass-by.",
      },
    ],
    extras: [
      "Lunch, hotel pickup in Malta, and ferry tickets are included.",
      "Summer swim at the Blue Lagoon, weather permitting, plus caves on the Comino pass-by.",
      "If you want to go inside Ġgantija, bring a little cash for that optional add-on.",
      "About seven hours. Your guide drives.",
    ],
  },
  {
    id: "32057P42",
    categorySlug: "buggy",
    name: "Sunset Buggy Tour Gozo",
    driveRole: "you-drive",
    driveNote:
      "You drive. 21 or over with a full, current license.",
    fromPrice: 104,
    duration: "6 hours",
    bookingUrl: viatorUrl(
      "https://www.viator.com/tours/Gozo/Sunset-Buggy-Tour-Gozo/d28021-32057P42",
    ),
    image: "/images/tours/32057P42-1.jpg",
    imageAlt:
      "Sunset buggy on a Gozo coastal road in golden hour.",
    gallery: [
      {
        src: "/images/tours/32057P42-2.jpg",
        alt: "Pride sunset buggy along Gozo countryside.",
      },
      {
        src: "/images/tours/32057P42-3.jpg",
        alt: "Golden-hour views on a Gozo sunset buggy tour.",
      },
      {
        src: "/images/tours/32057P42-4.jpg",
        alt: "Evening buggy ride toward the Gozo coast.",
      },
    ],
    suppliedBy: "Gozo Pride Tours Ltd",
    blurb:
      "Coast and countryside as the sun drops, then a relaxing platter and an optional cocktail or mocktail. You drive; a guide leads the loop.",
    body: [
      "This is Pride’s golden-hour buggy tour: you at the wheel, the island in warm light, and a slower finish with food. Pickup runs from Valletta at 12:15pm through Mellieħa at 1:15pm, with a return to Ċirkewwa around 9:15pm.",
      "About four hours on Gozo itself, on coastal and country tracks. It is the evening version of an island loop — thrill, scenery, and a Mediterranean plate at the end rather than a long lunch in the middle of the day.",
    ],
    itinerary: [
      {
        stop: "Malta pickup",
        detail:
          "Valletta 12:15pm, Sliema 12:30pm, St Julian’s 12:45pm, Bugibba 1pm, Mellieħa 1:15pm — then the crossing to Gozo.",
      },
      {
        stop: "Island of Gozo",
        detail:
          "About four hours self-driving the shoreline and countryside at sunset, with a lead guide. Hidden lookouts larger vehicles skip.",
      },
      {
        stop: "Platter and optional drink",
        detail:
          "A relaxing plate at the end of the ride. Cocktail or mocktail if you want one.",
      },
      {
        stop: "Return to Ċirkewwa",
        detail:
          "Aim for about 9:15pm, then transport back to your pickup point.",
      },
    ],
    extras: [
      "Malta pickup and drop-off, the sunset loop, and a platter are included.",
      "Cocktail or mocktail is optional.",
      "About six hours door to door. You drive. 21+ with a full, current license.",
    ],
  },
  {
    id: "32057P44",
    categorySlug: "buggy",
    name: "Sunset Ryker Tour Gozo",
    driveRole: "you-drive",
    driveNote:
      "A three-wheeled Ryker, not a 4x4 buggy. You drive.",
    fromPrice: 104,
    duration: "6 hours",
    bookingUrl: viatorUrl(
      "https://www.viator.com/tours/Gozo/Sunset-Ryker-Tour-Gozo/d28021-32057P44",
    ),
    image: "/images/tours/32057P44-1.jpg",
    imageAlt:
      "Can-Am Ryker three-wheeler on a Gozo road at sunset.",
    gallery: [
      {
        src: "/images/tours/32057P44-2.jpg",
        alt: "Sunset Ryker along a Gozo coastal road.",
      },
      {
        src: "/images/tours/32057P44-3.jpg",
        alt: "Three-wheeled Ryker at golden hour in Gozo.",
      },
      {
        src: "/images/tours/32057P44-4.jpg",
        alt: "Guided Ryker tour on Gozo’s country lanes.",
      },
    ],
    suppliedBy: "Gozo Pride Tours Ltd",
    blurb:
      "The same golden hour as the sunset buggy, on a sleek three-wheeled Ryker. Open-road feel, a lead guide, and the island in warm light.",
    body: [
      "This is not a 4x4 buggy. It is a Can-Am Ryker — three wheels, you drive — sold next to Pride’s sunset buggy, so we keep it on this page. Solo travellers, couples, and small groups who want the evening loop in a different machine.",
      "About four hours on Gozo at the nicest light of the day, on coast and country roads, with an experienced guide out front. Same idea as the sunset buggy: thrill, scenery, and a finish you will remember. Pickup and return follow the same Malta evening shape.",
    ],
    itinerary: [
      {
        stop: "Island of Gozo",
        detail:
          "About four hours at golden hour on your own Ryker, led by a guide, hitting the shoreline spots the daytime tours also love.",
      },
    ],
    extras: [
      "Guided Ryker loop at sunset. You drive.",
      "About six hours door to door, with around four hours on the island.",
      "21+ with a full, current license is the usual rule — same as the sunset buggy.",
    ],
  },
  {
    id: "6089P65",
    categorySlug: "buggy",
    alsoOn: ["utv"],
    name: "Gozo 4x4 Chauffeured Buggy Tour with Lunch and Transport",
    driveRole: "passenger",
    driveNote: "One experienced driver per buggy. You sit back and enjoy the views.",
    fromPrice: 101,
    duration: "7–8 hours",
    bookingUrl: viatorUrl(
      "https://www.viator.com/tours/Malta/Gozo-4x4-Chauffeured-Buggy-Tour-with-Lunch-and-Transport/d4141-6089P65",
    ),
    image: "/images/tours/6089P65-1.jpg",
    imageAlt:
      "Chauffeured 4WD buggy leaving a Gozo village street with a driver-guide.",
    gallery: [
      {
        src: "/images/tours/6089P65-2.jpg",
        alt: "Arrigo 4WD buggy on a Gozo countryside lane.",
      },
      {
        src: "/images/tours/6089P65-3.jpg",
        alt: "Open buggy with driver on a Gozo track.",
      },
      {
        src: "/images/tours/6089P65-4.jpg",
        alt: "Chauffeured buggy overlooking the Gozo coast.",
      },
    ],
    suppliedBy: "Robert Arrigo & Sons",
    blurb:
      "This is the sit-back-and-relax option. Your guide handles the narrow lanes and rough tracks, leaving you free to take photos of the salt pans and cliffs.",
    body: [
      "You meet the 4WD buggy at Mġarr Harbour. One Arrigo driver per vehicle stays with you for the island loop and the commentary.",
      "The route is built for photos: Qala’s belvedere over Comino, Calypso above Ramla, time at Ġgantija if you want to go inside, the Citadel, Dwejra’s Inland Sea, Ta' Pinu, the Xwejni pans, then the walk down to Wied il-Mielah’s limestone window. Lunch and Malta transfers are included.",
    ],
    itinerary: [
      {
        stop: "Mġarr Harbour",
        detail:
          "You board here. Each buggy has a driver who stays with you for the island loop.",
      },
      {
        stop: "Qala Belvedere",
        detail:
          "Comino, Cominotto, and the Blue Lagoon from the high courtyard by the little church of Il-Madonna Tal-Blat.",
      },
      {
        stop: "Calypso Cave",
        detail:
          "The lookout over Ramla Bay. Ramla and Ta' Kola windmill are pass-bys.",
      },
      {
        stop: "Ġgantija Archaeological Park",
        detail:
          "About 40 minutes if you go in. Entry is an optional add-on. Xewkija’s rotunda is a pass-by after.",
      },
      {
        stop: "The Citadel",
        detail:
          "Victoria’s castle. About 35 minutes. The Knights’ wash houses and Xlendi sit on the way west.",
      },
      {
        stop: "Inland Sea and Dwejra",
        detail:
          "The lagoon through the 65-metre tunnel. The short cave boat is an optional add-on on the spot, weather permitting.",
      },
      {
        stop: "Ta' Pinu",
        detail:
          "The shrine of letters and crutches. About 20 minutes on the western plain.",
      },
      {
        stop: "Xwejni salt pans",
        detail:
          "North-coast pans after a countryside run. Ta' Ġurdan lighthouse is a pass-by.",
      },
      {
        stop: "Wied il-Mielah Window",
        detail:
          "The limestone arch reached by a railed stair. About 20 minutes. Marsalforn is a pass-by on the way.",
      },
    ],
    extras: [
      "Lunch and hotel transfers are included.",
      "If you want to go inside Ġgantija or take the small cave boat at Dwejra, bring a little cash for those optional add-ons.",
      "Seven to eight hours. Your guide drives.",
    ],
  },
  {
    id: "32057P10",
    categorySlug: "buggy",
    name: "Sunset Buggy Tour Gozo Combi",
    driveRole: "you-drive",
    driveNote:
      "You drive on Gozo after a Comino stop. 21+ with a full, current license.",
    fromPrice: 122,
    duration: "6 hours",
    bookingUrl: viatorUrl(
      "https://www.viator.com/tours/Gozo/Evening-Half-Day-Quad-Tour-in-Gozo/d28021-32057P10",
    ),
    image: "/images/tours/32057P10-1.jpg",
    imageAlt:
      "Sunset buggy combo day with a Comino stop and golden-hour ride on Gozo.",
    gallery: [
      {
        src: "/images/tours/32057P10-2.jpg",
        alt: "Comino stop before a Gozo sunset buggy ride.",
      },
      {
        src: "/images/tours/32057P10-3.jpg",
        alt: "Evening buggy on Gozo after time on Comino.",
      },
      {
        src: "/images/tours/32057P10-4.jpg",
        alt: "Golden-hour tracks on the Sunset Buggy Tour Gozo Combi.",
      },
    ],
    suppliedBy: "Gozo Pride Tours Ltd",
    blurb:
      "Two hours on Comino first, then the sunset buggy loop on Gozo, a platter, and an optional cocktail. Same Malta pickup window as the plain sunset day.",
    body: [
      "The Combi is the sunset buggy with a head start on the smaller island: about two hours to explore Comino, then across to Gozo for the adrenaline stretch as the light goes gold.",
      "After the ride, the same relaxing platter and optional drink. Pickup matches the sunset buggy — Valletta from 12:15pm through Mellieħa at 1:15pm — and you aim for Ċirkewwa around 9:15pm.",
    ],
    itinerary: [
      {
        stop: "Comino",
        detail:
          "About two hours to explore the tiny island before the Gozo ride.",
      },
      {
        stop: "Island of Gozo",
        detail:
          "About four hours self-driving coastal and country tracks at sunset, with a lead guide.",
      },
      {
        stop: "Platter and optional drink",
        detail:
          "A slower finish after the dust. Cocktail or mocktail if you want one.",
      },
    ],
    extras: [
      "Comino time, the sunset buggy loop, Malta transfers, and a platter are included.",
      "Cocktail or mocktail is optional.",
      "About six hours. You drive on Gozo. 21+ with a full, current license.",
    ],
  },
  {
    id: "46794P1",
    categorySlug: "utv",
    name: "Malta: Gozo Full Day Buggy Tour with lunch and Comino Stop",
    driveRole: "passenger",
    driveNote: "Your guide drives, leaving you free for photos of the salt pans and cliffs.",
    fromPrice: 101,
    duration: "8 hours",
    bookingUrl: viatorUrl(
      "https://www.viator.com/tours/Gozo/Full-Day-Gozo-Jeep-Safari/d28021-46794P1",
    ),
    image: "/images/tours/46794P1-1.jpg",
    imageAlt:
      "Full-day Gozo buggy tour with lunch and a Comino swim stop.",
    gallery: [
      {
        src: "/images/tours/46794P1-2.jpg",
        alt: "Barbarossa buggy tour on a Gozo coastal road.",
      },
      {
        src: "/images/tours/46794P1-3.jpg",
        alt: "View from a Gozo buggy loop toward Comino and Malta.",
      },
      {
        src: "/images/tours/46794P1-4.jpg",
        alt: "Comino and Blue Lagoon swim stop on a Gozo buggy tour.",
      },
    ],
    suppliedBy: "Barbarossa Excursions",
    blurb:
      "This is the sit-back-and-relax option. Your guide handles the narrow lanes and rough tracks, leaving you free to take photos of the salt pans and cliffs.",
    body: [
      "Barbarossa’s tour is the long one — about eight hours door to door — with buffet lunch, wine and water, and a guide at the wheel.",
      "The loop hits Calypso, the Citadel, Dwejra’s Inland Sea, Wied il-Mielah, the Xwejni pans, Sanap’s cliffs, then Qala. The closer is the swim: about 45 minutes around Comino and the Blue Lagoon when the sea allows.",
    ],
    itinerary: [
      {
        stop: "Calypso Cave",
        detail:
          "Ten minutes on the Ramla side. Ġgantija is a pass-by on this run.",
      },
      {
        stop: "The Citadel",
        detail: "About 30 minutes in Victoria’s Castello.",
      },
      {
        stop: "Inland Sea",
        detail:
          "Dwejra’s seawater lagoon through the natural arch. About 20 minutes. The cave boat is an optional add-on if it is running.",
      },
      {
        stop: "Wied il-Mielah Window",
        detail:
          "The north-west limestone window. About 10 minutes at the stair. Marsalforn is a pass-by.",
      },
      {
        stop: "Xwejni salt pans",
        detail: "The old pans along the north shore. About 15 minutes.",
      },
      {
        stop: "Sanap Cliffs",
        detail:
          "About 130 metres of limestone into deep water. About 10 minutes. Xlendi and Ta' Pinu are pass-bys.",
      },
      {
        stop: "Qala",
        detail: "Five minutes at the belvedere before you head for the boat.",
      },
      {
        stop: "Comino swim",
        detail:
          "About 45 minutes in the water around Comino and the Blue Lagoon, weather permitting.",
      },
    ],
    extras: [
      "Buffet lunch with wine and water, round-trip from Malta, and hotel pickup are included.",
      "About 45 minutes at Comino and the Blue Lagoon when the weather holds.",
      "If you want the small cave boat at Dwejra, bring a little cash for that optional add-on.",
      "About eight hours. Your guide drives.",
    ],
  },
  {
    id: "32057P1",
    categorySlug: "jeep-safari",
    name: "Gozo Full-Day Jeep Tour with Private Boat to Gozo & return",
    driveRole: "passenger",
    driveNote: "Shared jeep with a driver-guide. You ride.",
    fromPrice: 95,
    duration: "6 hours",
    bookingUrl: viatorUrl(
      "https://www.viator.com/tours/Gozo/Gozo-Jeep-Tour/d28021-32057P1",
    ),
    image: "/images/tours/32057P1-1.jpg",
    imageAlt:
      "Full-day Gozo jeep tour on a country track with a driver-guide.",
    gallery: [
      {
        src: "/images/tours/32057P1-2.jpg",
        alt: "Pride jeep tour along a Gozo coastal road.",
      },
      {
        src: "/images/tours/32057P1-3.jpg",
        alt: "Passengers in an open jeep looking out over Gozo.",
      },
      {
        src: "/images/tours/32057P1-4.jpg",
        alt: "Jeep safari stop at a Gozo lookout.",
      },
    ],
    suppliedBy: "Gozo Pride Tours Ltd",
    blurb:
      "A driver-guide, lunch and tastings, and a private boat from Malta. Small country roads that coaches never use — Victoria, Qala, Ġgantija if you want it, and the west coast.",
    body: [
      "This is the classic sit-back jeep tour. Pickup in Malta, a boat to Gozo, then a 4x4 that fits lanes buses skip. Your guide covers the history while you take the views.",
      "Lunch is included, with food tastings on the route. Ġgantija is optional if you want to go inside. The Citadel, Dwejra, Ramla, Xlendi, and Ta' Pinu fill the loop, with the salt pans and Qala as pass-bys.",
    ],
    itinerary: [
      {
        stop: "Hotel pickup and boat to Gozo",
        detail:
          "Morning pickup from select Malta hotels, then a private boat across. You board the jeep on Gozo.",
      },
      {
        stop: "Ġgantija Archaeological Park",
        detail:
          "Optional — discuss it with your driver. About 15 minutes if you go in. Entry is an add-on.",
      },
      {
        stop: "The Citadel",
        detail: "Victoria’s fortified hill. About an hour to walk the walls.",
      },
      {
        stop: "Dwejra Bay",
        detail: "Western geology and the inland-sea country. About 30 minutes.",
      },
      {
        stop: "Ramla Bay",
        detail: "The red-sand beach. About 30 minutes. Xwejni pans and Qala Belvedere are pass-bys.",
      },
      {
        stop: "Xlendi Bay",
        detail: "About an hour at the inlet. Marsalforn is a pass-by nearby.",
      },
      {
        stop: "Ta' Pinu",
        detail:
          "The basilica on the western plain, murals inside and out. About 20 minutes.",
      },
    ],
    extras: [
      "Driver-guide, lunch and food tastings, jeep transport, and hotel pickup from select spots are included.",
      "Private boat to Gozo and back.",
      "If you want to go inside Ġgantija, bring a little cash for that optional add-on.",
      "About six hours. Your guide drives.",
    ],
  },
  {
    id: "74443P21",
    categorySlug: "jeep-safari",
    name: "Gozo Self Drive E Jeep Tour - All Inclusive",
    driveRole: "you-drive",
    driveNote:
      "You drive an e-jeep, or share with up to three passengers. Follow a tour leader.",
    fromPrice: 116,
    duration: "7 hours",
    bookingUrl: viatorUrl(
      "https://www.viator.com/tours/Gozo/Gozo-Chauffeured-eJeep-Tour-w-crossing-and-return-by-Yippee-Island-Hopper-boat/d28021-74443P21",
    ),
    image: "/images/tours/74443P21-1.jpg",
    imageAlt:
      "Self-drive e-jeep convoy on a Gozo track with a tour leader ahead.",
    gallery: [
      {
        src: "/images/tours/74443P21-2.jpg",
        alt: "Electric jeep on a Gozo countryside lane.",
      },
      {
        src: "/images/tours/74443P21-3.jpg",
        alt: "Small-group e-jeep tour along the Gozo coast.",
      },
      {
        src: "/images/tours/74443P21-4.jpg",
        alt: "Self-drive jeep tour with a light Gozitan lunch.",
      },
    ],
    suppliedBy: "COMINOLOGY LTD",
    blurb:
      "You drive a small e-jeep behind a leader — no map, no big coach group. Tiny villages, coastline, a light Gozitan lunch, and a boat past Comino when the sea allows.",
    body: [
      "The URL can read chauffeured. The live day is self-drive: an e-jeep for you plus up to three passengers, a group leader out front, and a slower pace than a packed safari.",
      "Pickup in Malta and the boat to Gozo are in the fare. Sanap cliffs, Xlendi, Fontana, the Citadel, Dwejra, Ta' Pinu, and the Xwejni pans. Summer can add a Blue Lagoon swim on the way home.",
    ],
    itinerary: [
      {
        stop: "Sanap cliffs",
        detail:
          "One of Gozo’s high points, with Malta and Comino in the distance. About 20 minutes. Coaches skip this one.",
      },
      {
        stop: "Xlendi",
        detail:
          "The belvedere over Xlendi Tower and the bay. About 15 minutes.",
      },
      {
        stop: "Fontana",
        detail:
          "The small spring village above Xlendi, on the way toward Victoria. About 30 minutes.",
      },
      {
        stop: "The Citadel",
        detail: "About 45 minutes in Victoria’s fortress.",
      },
      {
        stop: "Ġgantija",
        detail:
          "About 20 minutes. Going inside is an optional add-on.",
      },
      {
        stop: "Dwejra Bay",
        detail: "Western geology. About 30 minutes.",
      },
      {
        stop: "Ta' Pinu",
        detail: "The shrine on the western plain. About 15 minutes.",
      },
      {
        stop: "Xwejni salt pans",
        detail:
          "A short photo stop, then Qbajjar and Marsalforn as pass-bys.",
      },
      {
        stop: "Blue Lagoon and Comino",
        detail:
          "Boat pass-by, with a swim in summer when the sea allows. Caves on the way.",
      },
    ],
    extras: [
      "Hotel pickup in Malta, boat to Gozo, the e-jeep, a tour leader, and a light Gozitan lunch are included.",
      "If you want to go inside Ġgantija, bring a little cash for that optional add-on.",
      "About seven hours. You drive. Guides available in several languages.",
    ],
  },
  {
    id: "140340P9",
    categorySlug: "jeep-safari",
    name: "The Gozo in a Day UTV Tour w/ Private Boat ride to Gozo & return",
    driveRole: "passenger",
    driveNote:
      "Sold as a jeep tour. The live title is a UTV loop with a private boat.",
    fromPrice: 119,
    duration: "8–9 hours",
    bookingUrl: viatorUrl(
      "https://www.viator.com/tours/Malta/The-Gozo-in-a-Day-Jeep-Tour-w-Private-Boat-to-Gozo-and-return-to-avoid-queuing/d4141-140340P9",
    ),
    image: "/images/tours/140340P9-1.jpg",
    imageAlt:
      "Gozo in a day on an open UTV with a private boat from Malta.",
    gallery: [
      {
        src: "/images/tours/140340P9-2.jpg",
        alt: "Small-group UTV tour covering Gozo’s citadel and coast.",
      },
      {
        src: "/images/tours/140340P9-3.jpg",
        alt: "Private boat crossing to Gozo for a full island loop.",
      },
      {
        src: "/images/tours/140340P9-4.jpg",
        alt: "Lookout over Gozo during a full-day UTV tour.",
      },
    ],
    suppliedBy: "My Dream Malta",
    blurb:
      "The long one: a private boat from Malta, then an open UTV around Ġgantija, the Citadel, Dwejra, Ramla, and the bays. Lunch included. Beaches if the weather holds.",
    body: [
      "The URL still says jeep. The live title is a UTV tour. We keep it here because that is how it is sold next to the jeep safaris — same island loop, open vehicle, small group.",
      "Private boat transfers skip the ferry queue when the sea allows. Hotel pickup, lunch, and a flexible circuit: optional Ġgantija and Tal-Mixta, then the Citadel, Dwejra, Ramla, Marsalforn, and Xlendi. Comino is a photo pass on the way.",
    ],
    itinerary: [
      {
        stop: "Ġgantija Archaeological Park",
        detail:
          "Optional. About 15 minutes. Entry is an add-on if you go in.",
      },
      {
        stop: "Tal-Mixta Cave",
        detail: "Optional lookout. About 15 minutes.",
      },
      {
        stop: "The Citadel",
        detail: "The ancient fortress in Victoria. About an hour.",
      },
      {
        stop: "Dwejra Bay",
        detail: "Coastal rock and Fungus Rock. About 30 minutes.",
      },
      {
        stop: "Ramla Bay",
        detail:
          "Gozo’s largest sandy beach. About 30 minutes. Xwejni pans and Qala are pass-bys.",
      },
      {
        stop: "Marsalforn Bay",
        detail: "Promenade and a sand-and-pebble beach. About an hour.",
      },
      {
        stop: "Xlendi Bay",
        detail:
          "Swim and snorkel stop when the weather holds. About an hour. Comino is a photo pass on the boat.",
      },
    ],
    extras: [
      "Private boat (weather permitting), lunch, and hotel pickup from select spots are included.",
      "If you want to go inside Ġgantija, bring a little cash for that optional add-on.",
      "Eight to nine hours. Small group. Open UTV — sold as a jeep tour.",
    ],
  },
  {
    id: "6089P52",
    categorySlug: "jeep-safari",
    name: "From Malta: Gozo Jeep Tour with Lunch and Hotel Transfers",
    driveRole: "passenger",
    driveNote: "One experienced driver per jeep. You sit back and enjoy the views.",
    fromPrice: 101,
    duration: "7–8 hours",
    bookingUrl: viatorUrl(
      "https://www.viator.com/tours/Malta/From-Malta-Gozo-Jeep-Tour-with-Lunch-and-Hotel-Transfers/d4141-6089P52",
    ),
    image: "/images/tours/6089P52-1.jpg",
    imageAlt:
      "Arrigo jeep tour leaving Mġarr Harbour with a driver-guide.",
    gallery: [
      {
        src: "/images/tours/6089P52-2.jpg",
        alt: "Chauffeured jeep on a Gozo countryside lane.",
      },
      {
        src: "/images/tours/6089P52-3.jpg",
        alt: "Jeep day covering temples, lagoons, and villages.",
      },
      {
        src: "/images/tours/6089P52-4.jpg",
        alt: "Gozo jeep safari with lunch and hotel transfers from Malta.",
      },
    ],
    suppliedBy: "Robert Arrigo & Sons",
    blurb:
      "Pickup in Malta, a ferry to Mġarr, then a jeep with your own driver-guide. Villages, temples, the Inland Sea, and Wied il-Mielah — lunch in the fare.",
    body: [
      "Arrigo’s jeep tour is the sit-back island loop: you board at Mġarr, one driver per vehicle, commentary all the way. A medium group, a broad agenda, and no license test.",
      "Qala’s belvedere, Calypso over Ramla, time at Ġgantija if you want to go inside, the Citadel, Dwejra and the Inland Sea, Ta' Pinu, the Xwejni pans, and the walk to Wied il-Mielah’s limestone window.",
    ],
    itinerary: [
      {
        stop: "Mġarr Harbour",
        detail:
          "You board here. Each jeep has a driver who stays with you for the island loop.",
      },
      {
        stop: "Qala Belvedere",
        detail:
          "Comino, Cominotto, and the Blue Lagoon from the high courtyard by Il-Madonna Tal-Blat.",
      },
      {
        stop: "Calypso Cave",
        detail:
          "The lookout over Ramla Bay. Ramla and Ta' Kola windmill are pass-bys.",
      },
      {
        stop: "Ġgantija Archaeological Park",
        detail:
          "About 40 minutes if you go in. Entry is an optional add-on. Xewkija’s rotunda is a pass-by after.",
      },
      {
        stop: "The Citadel",
        detail:
          "Victoria’s castle. About 30 minutes. The Knights’ wash houses and Xlendi sit on the way west.",
      },
      {
        stop: "Dwejra and the Inland Sea",
        detail:
          "Western geology, then the lagoon through the 65-metre tunnel. The short cave boat is an optional add-on on the spot.",
      },
      {
        stop: "Ta' Pinu",
        detail: "The shrine on the western plain. About 20 minutes.",
      },
      {
        stop: "Xwejni salt pans",
        detail:
          "North-coast pans after a countryside run. Ta' Ġurdan lighthouse is a pass-by.",
      },
      {
        stop: "Wied il-Mielah Window",
        detail:
          "The limestone arch down a railed stair. About 20 minutes. Marsalforn is a pass-by.",
      },
    ],
    extras: [
      "Hotel transfers from Malta, the ferry, lunch, and a driver-guide per jeep are included.",
      "If you want to go inside Ġgantija or take the small cave boat at Dwejra, bring a little cash for those optional add-ons.",
      "Seven to eight hours. Your guide drives.",
    ],
  },
  {
    id: "74443P8",
    categorySlug: "tuk-tuk",
    name: "Gozo All Inclusive Chauffeured Tuk Tuk Day Tour - Blue Lagoon",
    driveRole: "passenger",
    driveNote: "Chauffeur-guide. Forward-facing seats. You ride.",
    fromPrice: 101,
    duration: "7 hours",
    bookingUrl: viatorUrl(
      "https://www.viator.com/tours/Gozo/ALL-INCLUSIVE-FULL-DAY-TUK-TUK-TOUR-ISLAND-OF-GOZO/d28021-74443P8",
    ),
    image: "/images/tours/74443P8-1.jpg",
    imageAlt:
      "Chauffeured tuk tuk tour around Gozo with a Blue Lagoon boat.",
    gallery: [
      {
        src: "/images/tours/74443P8-2.jpg",
        alt: "Open tuk tuk on a Gozo village street.",
      },
      {
        src: "/images/tours/74443P8-3.jpg",
        alt: "Guests on a Gozo tuk tuk tour with a multilingual guide.",
      },
      {
        src: "/images/tours/74443P8-4.jpg",
        alt: "Scenic stop on an all-inclusive Gozo tuk tuk tour.",
      },
    ],
    suppliedBy: "COMINOLOGY LTD",
    blurb:
      "A chauffeur, a light Gozitan lunch with wine or water, Sanap cliffs, the Citadel, and a summer swim at Crystal Lagoon when the sea allows.",
    body: [
      "This is the easy Gozo day: multilingual guide, private boat from Malta, and an open tuk tuk through villages and lookouts coaches rush past. St John’s in Xewkija — the third-largest unsupported dome — sits on the loop with Sanap, Xlendi, Fontana, and Ta' Pinu.",
      "Lunch looks over the scenery. In summer, the closer is a swim at Comino’s Crystal Lagoon, weather permitting; winter is a scenic look if the boat runs.",
    ],
    itinerary: [
      {
        stop: "Sanap / Ta' Ċenċ cliffs",
        detail:
          "Gozo’s tallest drop, about 150 metres, with Malta and Comino in the distance. About 30 minutes.",
      },
      {
        stop: "Xlendi Bay",
        detail: "The old fishing inlet under the cliffs. About 30 minutes.",
      },
      {
        stop: "Fontana",
        detail:
          "The small spring village above Xlendi, on the way toward Victoria. About 30 minutes.",
      },
      {
        stop: "The Citadel",
        detail: "About 45 minutes in Victoria’s fortress.",
      },
      {
        stop: "Ġgantija",
        detail:
          "About 20 minutes. Going inside is an optional add-on.",
      },
      {
        stop: "Dwejra Bay",
        detail:
          "Western geology, with the Inland Sea and Fungus Rock as pass-bys. About 30 minutes.",
      },
      {
        stop: "Ta' Pinu",
        detail: "The shrine on the western plain. About 15 minutes.",
      },
      {
        stop: "Xwejni salt pans",
        detail:
          "A short photo stop, then Qbajjar and Marsalforn on the way to the boat.",
      },
      {
        stop: "Blue Lagoon and Comino",
        detail:
          "About an hour at the lagoon in summer for a swim. Crystal Lagoon is the usual dip. Winter is viewing if the boat runs.",
      },
    ],
    extras: [
      "Chauffeur, private boat, a light Gozitan lunch with wine or water, and Malta transfers are included.",
      "Summer swim at Crystal Lagoon or the Blue Lagoon when the sea allows.",
      "If you want to go inside Ġgantija, bring a little cash for that optional add-on.",
      "About seven hours. Your guide drives.",
    ],
  },
  {
    id: "6089P79",
    categorySlug: "tuk-tuk",
    name: "From Malta: Gozo TukTuk Tour with Comino Mini Cruise",
    driveRole: "passenger",
    driveNote:
      "One experienced driver per tuk tuk. Forward-facing seats.",
    fromPrice: 101,
    duration: "7–8 hours",
    bookingUrl: viatorUrl(
      "https://www.viator.com/tours/Mellieha/Gozo-Tuk-Tuk-Tour-Including-Comino-Mini-Cruise-Full-Day/d25688-6089P79",
    ),
    image: "/images/tours/6089P79-1.jpg",
    imageAlt:
      "Arrigo chauffeured tuk tuk tour with a Comino mini cruise from Malta.",
    gallery: [
      {
        src: "/images/tours/6089P79-2.jpg",
        alt: "Tuk tuk at Mġarr Harbour ready for a Gozo island loop.",
      },
      {
        src: "/images/tours/6089P79-3.jpg",
        alt: "Open tuk tuk on a Gozo countryside road.",
      },
      {
        src: "/images/tours/6089P79-4.jpg",
        alt: "Comino mini cruise after a Gozo tuk tuk tour.",
      },
    ],
    suppliedBy: "Robert Arrigo & Sons",
    blurb:
      "Sit back in a forward-facing tuk tuk: Sanap, the Citadel, Dwejra, then a private-boat mini cruise around Comino’s Blue Lagoon, Crystal Lagoon, and sea caves.",
    body: [
      "Arrigo’s daytime tuk tuk is the chauffeur loop with a sea finish. Minivan pickup across Malta, a private boat to Mġarr when the sea allows (or the regular ferry with tickets included), then one driver per tuk tuk for the island.",
      "After the land loop, a mini cruise around Comino — Blue Lagoon, Crystal Lagoon, Santa Maria caves — and about 30 minutes in the water in high season if the weather holds. If Comino is off, the swim moves to a Gozo bay.",
    ],
    itinerary: [
      {
        stop: "Malta pickup and crossing",
        detail:
          "Minivan from your hotel or the nearest pickup. Private boat to Gozo, or the ferry if the sea is up.",
      },
      {
        stop: "Mġarr Harbour",
        detail:
          "You board the tuk tuk here. A driver stays with you for the island loop.",
      },
      {
        stop: "Sanap cliffs",
        detail:
          "Limestone cliffs and a wide Mediterranean view. About 30 minutes.",
      },
      {
        stop: "Xlendi and the Knights’ wash houses",
        detail:
          "The inlet, then Fontana’s 16th-century spring washhouses. About 20 minutes at the wash houses.",
      },
      {
        stop: "The Citadel",
        detail: "Victoria’s castle. About 45 minutes.",
      },
      {
        stop: "Ġgantija Archaeological Park",
        detail:
          "About 30 minutes if you go in. Entry is an optional add-on.",
      },
      {
        stop: "Dwejra and the Inland Sea",
        detail:
          "Western geology, then the lagoon through the tunnel. The short cave boat is an optional add-on on the spot.",
      },
      {
        stop: "Ta' Pinu, Xwejni, Qbajjar, Marsalforn",
        detail:
          "The shrine, the north-coast pans, then the bays on the way to the boat.",
      },
      {
        stop: "Comino mini cruise",
        detail:
          "Blue Lagoon, Crystal Lagoon, and Santa Maria caves. About 30 minutes in the water in summer, weather permitting.",
      },
    ],
    extras: [
      "Malta pickup, private boat or ferry tickets, a chauffeur, and a Comino mini cruise are included.",
      "High-season swim at a Comino lagoon, or a Gozo bay if the sea is up.",
      "If you want to go inside Ġgantija or take the small cave boat at Dwejra, bring a little cash for those optional add-ons.",
      "Seven to eight hours. Your guide drives.",
    ],
  },
  {
    id: "6089P126",
    categorySlug: "tuk-tuk",
    name: "Sunset Gozo Tuk-Tuk Chauffeured Tour Including Comino Cruise",
    driveRole: "passenger",
    driveNote:
      "Afternoon on the water, then a chauffeur tuk tuk at golden hour.",
    fromPrice: 101,
    duration: "8–9 hours",
    bookingUrl: viatorUrl(
      "https://www.viator.com/tours/Mellieha/Sunset-Gozo-Tuk-Tuk-Chauffeured-Tour-Including-Comino-Cruise/d25688-6089P126",
    ),
    image: "/images/tours/6089P126-1.jpg",
    imageAlt:
      "Sunset chauffeured tuk tuk tour in Gozo after a Comino cruise.",
    gallery: [
      {
        src: "/images/tours/6089P126-2.jpg",
        alt: "Comino cruise before a Gozo sunset tuk tuk.",
      },
      {
        src: "/images/tours/6089P126-3.jpg",
        alt: "Golden-hour tuk tuk on a Gozo coastal road.",
      },
      {
        src: "/images/tours/6089P126-4.jpg",
        alt: "Sunset views from a chauffeured Gozo tuk tuk.",
      },
    ],
    suppliedBy: "Robert Arrigo & Sons",
    blurb:
      "Sail to Comino in the afternoon — Blue Lagoon, Crystal Lagoon, caves, a 45-minute swim in summer — then a tuk tuk around Gozo as the light goes gold.",
    body: [
      "This is the land-and-sea evening: water first, then the island in warm light. Forward-facing seats, a driver who knows the lanes, and a sunset stop built for photos.",
      "Sanap, Xlendi, Dwejra, Għasri Valley, the Xwejni pans, Qbajjar, and Marsalforn. The Citadel is on the loop in the off-peak season when the days are shorter. Ta' Pinu is a pass-by.",
    ],
    itinerary: [
      {
        stop: "Comino cruise",
        detail:
          "Afternoon sail past Blue Lagoon, Crystal Lagoon, and the sea caves. About 30 minutes on the water before the swim.",
      },
      {
        stop: "Lagoon swim",
        detail:
          "About 45 minutes at Blue Lagoon or Crystal Lagoon in summer, weather permitting. Then on to Gozo.",
      },
      {
        stop: "Sanap cliffs",
        detail:
          "Sweeping cliff views, popular for sunsets. About 45 minutes.",
      },
      {
        stop: "Xlendi Bay",
        detail: "The fjord-like inlet. About 20 minutes.",
      },
      {
        stop: "Dwejra Bay",
        detail:
          "Inland Sea country and the watchtower. About 45 minutes.",
      },
      {
        stop: "Wied il-Għasri",
        detail: "The narrow valley and pebble cove. About 20 minutes.",
      },
      {
        stop: "Xwejni salt pans",
        detail: "The chequerboard coast. About 15 minutes.",
      },
      {
        stop: "Qbajjar and Marsalforn",
        detail:
          "Shallow swimming and the north-coast promenade as evening comes in.",
      },
      {
        stop: "The Citadel",
        detail:
          "About 35 minutes — on the loop in the off-peak season when daylight is shorter.",
      },
    ],
    extras: [
      "Comino cruise, a chauffeur tuk tuk at sunset, and forward-facing seats are included.",
      "About 45 minutes in a lagoon in summer when the sea allows.",
      "Eight to nine hours. Your guide drives. No license needed.",
    ],
  },
];

export function categoryBySlug(slug: string) {
  return categories.find((item) => item.slug === slug);
}

export function toursFor(slug: string) {
  return tours.filter(
    (item) => item.categorySlug === slug || item.alsoOn?.includes(slug),
  );
}

export function otherCategories(slug: string) {
  return categories.filter((item) => item.slug !== slug);
}

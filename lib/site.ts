export const site = {
  name: "Gozo Quad Tours",
  shortName: "Gozo Quad Tours",
  domain: "gozoquadtours.fun",
  url: "https://gozoquadtours.fun",
  locale: "en_US",
  language: "en-US",
  title: "The Best Gozo Off-Road Tours (Who Drives, Stops & What’s Included)",
  description:
    "Compare Gozo quad, UTV, buggy, jeep, and tuk tuk tours: who drives, the island stops, what’s included, and live dates to book from Malta.",
  keywords: [
    "Gozo UTV tour",
    "UTV Gozo",
    "Gozo ATV tour",
    "Gozo quad tours",
    "Gozo off-road tours",
    "Gozo buggy tour",
    "Gozo jeep safari",
    "Gozo 4x4 tour",
    "self-drive quad Gozo",
    "Blue Lagoon Gozo tour",
  ],
  updated: "August 2026",
  affiliatePid: "P00276441",
  affiliateMcid: "42383",
  affiliateCampaign: "gozoquad",
  bookingUrl:
    "https://www.viator.com/Gozo-tours/4WD-ATV-and-Off-Road-Tours/d28021-g9-c32?pid=P00276441&mcid=42383&medium=link&campaign=gozoquad",
  affiliateDisclosure:
    "Affiliate disclosure: Some booking links go to Viator, our trusted partner. We may earn a commission at no extra cost to you.",
  toptours: {
    url: "https://toptours.ai/destinations/gozo",
    label: "TopTours.ai",
  },
  owner: "2xGen LLC",
  ownerUrl: "https://2xgen.com",
  affiliateRel: "sponsored nofollow noopener noreferrer",
  bookAhead: {
    title: "Check dates once your Malta trip is set",
    body: "Full-day quads, UTV loops, and sunset buggies fill first in summer. Jeep and tuk tuk tours have more seats.",
  },
  ogImage: {
    url: "/opengraph-image",
    width: 1200,
    height: 630,
    alt: "The Best Gozo Off-Road Tours — quad, UTV, buggy, jeep, or tuk tuk from Malta.",
  },
} as const;

export function viatorUrl(href: string) {
  const url = new URL(href);
  url.searchParams.set("pid", site.affiliatePid);
  url.searchParams.set("mcid", site.affiliateMcid);
  url.searchParams.set("medium", "link");
  url.searchParams.set("campaign", site.affiliateCampaign);
  return url.toString();
}

export const nav = [
  { href: "/self-drive-quad-tours", label: "Quads" },
  { href: "/utv-tours", label: "UTV" },
  { href: "/buggy-tours", label: "Buggy" },
  { href: "/jeep-safari-tours", label: "Jeep" },
  { href: "/tuk-tuk-tours", label: "Tuk tuk" },
  { href: "/operators", label: "Operators" },
  { href: "/self-drive-or-passenger", label: "Who drives?" },
] as const;

export const facts = [
  { label: "From Malta", value: "6–9 hours, door to door" },
  { label: "Five vehicles", value: "Quad, UTV, buggy, jeep, tuk tuk" },
  { label: "Who drives", value: "You, or a local guide" },
  { label: "Comino", value: "Often a boat or swim" },
] as const;

export const steps = [
  {
    n: "01",
    title: "Pickup and the crossing",
    body: "Most tours start at your Malta hotel. A private boat to Mġarr when the sea allows, or the regular ferry with tickets in the fare. Briefing at the harbour, then you are on the island.",
  },
  {
    n: "02",
    title: "The island loop",
    body: "Expect lookouts at Sanap, Qala, or Ta' Ċenċ, then Ġgantija, Ramla or Calypso, the Xwejni salt pans, Dwejra and the Inland Sea, and often the Citadel. Lunch is included on most full-day tours.",
  },
  {
    n: "03",
    title: "Home via Comino",
    body: "The boat back usually passes the Blue Lagoon, Crystal Lagoon, and the sea caves. Summer often adds a swim. Winter can be a scenic look if the sea is up.",
  },
] as const;

export const faqs = [
  {
    question: "Do I drive, or does a guide?",
    answer:
      "On a self-drive quad, sunset buggy, Ryker, or e-jeep, you drive — typically 21+ with a full car license. Pride’s 6-seater UTV, Arrigo’s 4WD, Barbarossa’s buggy, the jeep safaris, and every tuk tuk put a local at the wheel. Pick the driver option if you want the handlebars.",
  },
  {
    question: "Do I need a driving license?",
    answer:
      "Only if you drive. Operators usually want a full car license, held for about a year. Passengers on the back of a quad or in a 6-seater do not need one. Sit-back tours — UTV ride-along, chauffeured buggy, jeep, tuk tuk — skip the license test.",
  },
  {
    question: "What’s the difference between a quad, UTV, buggy, jeep, and tuk tuk?",
    answer:
      "A quad (or ATV) is the bike you straddle. A UTV is an open 4x4 with seats in a row — often a 6-seater. A buggy here is a small 4WD, sometimes self-drive at sunset, sometimes with a chauffeur. A jeep safari is a shared 4x4, or a small e-jeep you drive. A tuk tuk is a chauffeured road taxi with forward-facing seats.",
  },
  {
    question: "Do these tours include the Blue Lagoon?",
    answer:
      "Usually as a boat pass-by or a short swim, not a beach day. Cominology and Arrigo often add Crystal Lagoon. Pride’s jeep and UTV tours return by private boat past the caves. Barbarossa lists about 45 minutes in the water off Comino. Weather decides.",
  },
  {
    question: "Can I start from Malta?",
    answer:
      "Yes. Almost every tour we list picks up in Malta, crosses to Gozo, runs the island loop, and comes back the same afternoon or evening. Sunset buggy and tuk tuk tours start later and aim for Ċirkewwa around 9pm.",
  },
  {
    question: "What should I wear?",
    answer:
      "Clothes you do not mind getting dusty, closed-toe shoes, sunglasses, and sunscreen. Bring swimwear in summer. A light layer for the boat. If you drive, bring the physical license — a photo on your phone is not enough.",
  },
  {
    question: "Which tour if I do not want to drive?",
    answer:
      "A UTV ride-along, Arrigo or Barbarossa’s chauffeured 4WD, Pride’s jeep, or any tuk tuk. Jeep and UTV still use tracks. A tuk tuk stays on roads and is the easiest sit-back option. If you want the bike, that is the quad page.",
  },
] as const;

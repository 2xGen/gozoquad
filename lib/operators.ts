import {
  categoryBySlug,
  driveBadge,
  tours,
  type Tour,
} from "./tours";

export type Operator = {
  slug: string;
  name: string;
  summary: string;
};

export const operatorsCard = {
  path: "/operators",
  name: "Operators",
  cardTitle: "View operators",
  driveLabel: "Who runs these tours",
  blurb: "Pride, Arrigo, Cominology, Barbarossa, and My Dream Malta.",
} as const;

export const operators: readonly Operator[] = [
  {
    slug: "gozo-pride-tours",
    name: "Gozo Pride Tours Ltd",
    summary:
      "The widest mix on this site: self-drive quads, an open 6-seater UTV, sunset buggy and Ryker tours, and a chauffeured full-day jeep. Pickup from Malta, private boats, and golden-hour loops are the Pride signature.",
  },
  {
    slug: "arrigo",
    name: "Robert Arrigo & Sons",
    summary:
      "Chauffeured 4WD buggy and jeep tours with one driver per vehicle, a self-drive two-seater quad, and tuk tuk loops with a Comino mini cruise or a sunset finish. Sit-back island tours with lunch and transfers from Malta.",
  },
  {
    slug: "cominology",
    name: "COMINOLOGY LTD",
    summary:
      "All-inclusive tours from Malta: a 570cc self-drive quad, a ride-along 4x4, a self-drive e-jeep, and the chauffeured tuk tuk with a Blue Lagoon boat. A tour leader or chauffeur on every product — you only drive when the listing says so.",
  },
  {
    slug: "barbarossa",
    name: "Barbarossa Excursions",
    summary:
      "A full-day chauffeured buggy from Malta: buffet lunch with wine, an island loop, and about 45 minutes at Comino and the Blue Lagoon when the sea allows. Your guide drives.",
  },
  {
    slug: "my-dream-malta",
    name: "My Dream Malta",
    summary:
      "Gozo in a day on an open UTV with a private boat from Malta. The listing is often sold as a jeep tour. Small group, lunch included, eight to nine hours door to door.",
  },
];

export type OperatorTour = Tour & {
  vehicleName: string;
  vehiclePath: string;
  pageHref: string;
};

export function toursForOperator(name: string): OperatorTour[] {
  return tours
    .filter((tour) => tour.suppliedBy === name)
    .map((tour) => {
      const category = categoryBySlug(tour.categorySlug);
      return {
        ...tour,
        vehicleName: category?.name ?? tour.categorySlug,
        vehiclePath: category?.path ?? "/",
        pageHref: `${category?.path ?? "/"}#tour-${tour.id}`,
      };
    });
}

export function operatorsWithTours() {
  return operators
    .map((operator) => {
      const listings = toursForOperator(operator.name);
      return {
        ...operator,
        tours: listings,
        driveMix: [...new Set(listings.map((tour) => driveBadge(tour.driveRole)))],
      };
    })
    .filter((operator) => operator.tours.length > 0);
}

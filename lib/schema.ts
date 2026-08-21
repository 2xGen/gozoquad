import { faqs, site } from "./site";
import { operatorsWithTours } from "./operators";
import {
  categories,
  tours,
  type Category,
  type Tour,
} from "./tours";

const gozoPlace = {
  "@type": "TouristDestination" as const,
  "@id": `${site.url}/#gozo-offroad`,
  name: "Off-road tours in Gozo",
  description:
    "Quad, buggy, UTV, jeep safari, and tuk tuk tours on Gozo, Malta — sorted by who actually drives.",
  touristType: "Adventure",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Victoria",
    addressRegion: "Gozo",
    addressCountry: "MT",
  },
};

const organization = {
  "@type": "Organization",
  "@id": `${site.url}/#organization`,
  name: site.name,
  legalName: site.owner,
  url: site.url,
  sameAs: [site.toptours.url, site.ownerUrl],
  parentOrganization: {
    "@type": "Organization",
    name: site.owner,
    url: site.ownerUrl,
  },
  image: `${site.url}${site.ogImage.url}`,
  logo: {
    "@type": "ImageObject",
    url: `${site.url}/apple-icon`,
  },
  description: site.description,
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Gozo",
  },
};

const website = {
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  url: site.url,
  name: site.name,
  inLanguage: site.language,
  publisher: { "@id": `${site.url}/#organization` },
};

export function buildSiteGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [organization, website, gozoPlace],
  };
}

function tourOffer(tour: Tour | Category) {
  return {
    "@type": "Offer" as const,
    url: tour.bookingUrl,
    priceCurrency: "USD",
    price: tour.fromPrice.toFixed(2),
    availability: "https://schema.org/InStock",
  };
}

export function buildHomeGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${site.url}/#webpage`,
        url: site.url,
        name: site.title,
        description: site.description,
        inLanguage: site.language,
        isPartOf: { "@id": `${site.url}/#website` },
        about: { "@id": `${site.url}/#gozo-offroad` },
        potentialAction: {
          "@type": "ReserveAction",
          name: "Book Gozo off-road tours",
          target: site.bookingUrl,
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${site.url}${site.ogImage.url}`,
          width: site.ogImage.width,
          height: site.ogImage.height,
          caption: site.ogImage.alt,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: site.url,
          },
        ],
      },
      {
        "@type": "ItemList",
        name: "Gozo off-road tour types",
        numberOfItems: categories.length,
        itemListElement: categories.map((category, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: category.cardTitle,
          description: category.driveLabel,
          url: `${site.url}${category.path}`,
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };
}

export function buildCategoryGraph(category: Category, listings: Tour[]) {
  const pageUrl = `${site.url}${category.path}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: category.metaTitle,
        description: category.description,
        inLanguage: site.language,
        isPartOf: { "@id": `${site.url}/#website` },
        about: { "@id": `${site.url}/#gozo-offroad` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${pageUrl}/opengraph-image`,
          width: site.ogImage.width,
          height: site.ogImage.height,
          caption: category.heroAlt,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: site.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: category.name,
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "ItemList",
        name: category.title,
        numberOfItems: listings.length,
        itemListElement: listings.map((tour, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: tour.name,
          url: tour.bookingUrl,
          offers: tourOffer(tour),
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: category.faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };
}

export function buildCompareGraph() {
  const pageUrl = `${site.url}/self-drive-or-passenger`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "Do you drive a Gozo quad yourself?",
        description:
          "Self-drive vs passenger on Gozo: quads, buggies, jeeps, and tuk tuks explained.",
        inLanguage: site.language,
        isPartOf: { "@id": `${site.url}/#website` },
        about: { "@id": `${site.url}/#gozo-offroad` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${pageUrl}/opengraph-image`,
          width: site.ogImage.width,
          height: site.ogImage.height,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: site.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Who drives?",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.slice(0, 6).map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };
}

export function buildOperatorsGraph() {
  const pageUrl = `${site.url}/operators`;
  const listings = operatorsWithTours();
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "Gozo Tour Operators",
        description:
          "The operators behind these Gozo quad, UTV, buggy, jeep, and tuk tuk tours — with booking links.",
        inLanguage: site.language,
        isPartOf: { "@id": `${site.url}/#website` },
        about: { "@id": `${site.url}/#gozo-offroad` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${pageUrl}/opengraph-image`,
          width: site.ogImage.width,
          height: site.ogImage.height,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: site.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Operators",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "ItemList",
        name: "Gozo tour operators",
        numberOfItems: listings.length,
        itemListElement: listings.map((operator, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: operator.name,
          url: `${pageUrl}#${operator.slug}`,
          description: operator.summary,
        })),
      },
    ],
  };
}

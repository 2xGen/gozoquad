import type { Metadata } from "next";
import { BookLink } from "@/components/BookLink";
import { JsonLd } from "@/components/JsonLd";
import { operatorsWithTours } from "@/lib/operators";
import { buildOperatorsGraph } from "@/lib/schema";
import { socialMetadata } from "@/lib/seo";
import { driveBadge, formatFromPrice } from "@/lib/tours";

const title = "Gozo Tour Operators";
const description =
  "The operators behind these Gozo quad, UTV, buggy, jeep, and tuk tuk tours: Pride, Arrigo, Cominology, Barbarossa, and My Dream Malta — with booking links.";

export const metadata: Metadata = {
  title: {
    absolute: "Gozo Tour Operators (Who Runs These Tours)",
  },
  description,
  alternates: { canonical: "/operators" },
  ...socialMetadata({
    title: "Gozo Tour Operators (Who Runs These Tours)",
    description,
    path: "/operators",
    imageAlt:
      "Gozo tour operators: Pride, Arrigo, Cominology, Barbarossa, and My Dream Malta.",
  }),
};

export default function OperatorsPage() {
  const listings = operatorsWithTours();

  return (
    <main id="main" className="pb-16">
      <JsonLd data={buildOperatorsGraph()} />
      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 md:py-16">
        <nav aria-label="Breadcrumb" className="text-[12px] text-muted">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <a href="/" className="hover:text-ink">
                Home
              </a>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-ink">Operators</li>
          </ol>
        </nav>
        <p className="eyebrow mt-6">Who runs the tours</p>
        <h1 className="mt-3 font-display text-4xl font-extrabold leading-[1.2] sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 text-[1.02rem] leading-relaxed text-muted">
          We do not operate the tours. These are the local companies behind
          the listings on this site. Each listing below has a short note on what
          they run, then the tours with a booking link that opens on Viator.
        </p>
        <ol className="mt-8 space-y-2 text-sm font-extrabold">
          {listings.map((operator, index) => (
            <li key={operator.slug}>
              <a
                href={`#${operator.slug}`}
                className="text-ink underline decoration-rule underline-offset-2 hover:text-rust"
              >
                {index + 1}. {operator.name}
              </a>
              <span className="ml-2 font-bold text-muted">
                ({operator.tours.length}{" "}
                {operator.tours.length === 1 ? "tour" : "tours"})
              </span>
            </li>
          ))}
        </ol>
      </article>

      <div className="divide-y divide-rule border-t border-rule">
        {listings.map((operator) => (
          <section
            key={operator.slug}
            id={operator.slug}
            className="scroll-mt-6 bg-sand py-14 sm:py-16"
          >
            <div className="mx-auto max-w-3xl px-4 sm:px-6">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-rust">
                {operator.driveMix.join(" · ")}
              </p>
              <h2 className="mt-2 font-display text-3xl font-extrabold leading-[1.15] sm:text-4xl">
                {operator.name}
              </h2>
              <p className="mt-4 text-[1.02rem] leading-relaxed text-muted">
                {operator.summary}
              </p>
              <h3 className="mt-8 font-display text-2xl font-extrabold tracking-tight">
                Their tours on this site
              </h3>
              <ul className="mt-5 divide-y divide-rule border-y border-rule">
                {operator.tours.map((tour) => (
                  <li key={tour.id} className="py-5">
                    <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-rust">
                      {tour.vehicleName} · {driveBadge(tour.driveRole)}
                    </p>
                    <p className="mt-1.5 font-display text-[1.15rem] font-extrabold leading-snug">
                      {tour.name}
                    </p>
                    <p className="mt-1 text-sm font-extrabold text-ink">
                      From {formatFromPrice(tour.fromPrice)} per person ·{" "}
                      {tour.duration}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {tour.blurb}
                    </p>
                    <p className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm font-extrabold">
                      <a
                        href={tour.pageHref}
                        className="text-ink underline decoration-rule underline-offset-2 hover:text-rust"
                      >
                        Read the itinerary
                      </a>
                      <BookLink
                        href={tour.bookingUrl}
                        externalHint="visible"
                        className="text-rust hover:text-rust-2"
                      >
                        Check dates and book
                      </BookLink>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}

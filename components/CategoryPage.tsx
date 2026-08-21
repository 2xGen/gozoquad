import Image from "next/image";
import { BookLink } from "@/components/BookLink";
import { BookAhead } from "@/components/BookAhead";
import { StickyBook } from "@/components/HomeStickyBook";
import { JsonLd } from "@/components/JsonLd";
import { buildCategoryGraph } from "@/lib/schema";
import {
  driveBadge,
  formatFromPrice,
  otherCategories,
  toursFor,
  type Category,
  type Tour,
} from "@/lib/tours";

export function CategoryPage({ category }: { category: Category }) {
  const listings = toursFor(category.slug);
  const others = otherCategories(category.slug);

  return (
    <div className="pb-28 sm:pb-24">
      <JsonLd data={buildCategoryGraph(category, listings)} />
      <Hero category={category} />
      <BookAhead href={category.bookingUrl} />
      <Intro category={category} />
      <Fit category={category} />
      <Listings category={category} />
      <Faq category={category} />
      <Closing others={others} />
      <StickyBook href={category.bookingUrl} externalHint="visible">
        Check dates and book
      </StickyBook>
    </div>
  );
}

function Hero({ category }: { category: Category }) {
  return (
    <section className="relative isolate min-h-[52svh] overflow-hidden bg-night text-sand sm:min-h-[58svh]">
      <Image
        src={category.heroImage}
        alt={category.heroAlt}
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-night via-night/45 to-night/20"
        aria-hidden="true"
      />
      <div className="relative mx-auto flex min-h-[52svh] max-w-6xl flex-col justify-end px-4 pb-10 pt-16 sm:min-h-[58svh] sm:px-6 sm:pb-12">
        <nav aria-label="Breadcrumb" className="text-[12px] text-sand/75">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <a href="/" className="hover:text-sand">
                Home
              </a>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <a href="/#vehicles" className="hover:text-sand">
                Vehicles
              </a>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-sand">{category.name}</li>
          </ol>
        </nav>
        <p className="mt-3 text-[11px] font-extrabold uppercase tracking-[0.2em] text-ochre">
          {category.tagline}
        </p>
        <h1 className="mt-2 max-w-3xl font-display text-[2.2rem] font-extrabold leading-[1.2] text-white sm:text-5xl">
          {category.title}
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-sand/90 sm:text-lg">
          From {formatFromPrice(category.fromPrice)} per person ·{" "}
          {category.duration} · {category.driveLabel}
        </p>
      </div>
    </section>
  );
}

function Intro({ category }: { category: Category }) {
  return (
    <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 md:py-16">
      <p className="eyebrow">{category.eyebrow ?? "Who drives"}</p>
      <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
        {category.overview}
      </h2>
      <div className="mt-5 space-y-4 text-[1.02rem] leading-relaxed text-muted">
        {category.intro.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}

function PlanningTip({ text }: { text: string }) {
  const hrefByLabel: Record<string, string> = {
    "Self-Drive Quad": "/self-drive-quad-tours",
    "UTV tours": "/utv-tours",
  };
  const parts = text.split(/(Self-Drive Quad|UTV tours)/g);
  return (
    <>
      {parts.map((part, index) => {
        const href = hrefByLabel[part];
        if (!href) return part;
        return (
          <a
            key={`${part}-${index}`}
            href={href}
            className="font-extrabold underline decoration-rule underline-offset-2 hover:text-rust"
          >
            {part}
          </a>
        );
      })}
    </>
  );
}

function Fit({ category }: { category: Category }) {
  return (
    <section className="border-y border-rule bg-sand-2/60">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3 md:py-16">
        <div>
          <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-rust">
            Best for
          </p>
          <p className="mt-2 text-[1.02rem] leading-relaxed text-ink">
            {category.bestFor}
          </p>
        </div>
        <div>
          <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-rust">
            Standout
          </p>
          <p className="mt-2 text-[1.02rem] leading-relaxed text-ink">
            {category.standout}
          </p>
        </div>
        <div>
          <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-rust">
            Planning tip
          </p>
          <p className="mt-2 text-[1.02rem] leading-relaxed text-ink">
            <PlanningTip text={category.planningTip} />
          </p>
        </div>
      </div>
    </section>
  );
}

function Listings({ category }: { category: Category }) {
  const listings = toursFor(category.slug);

  return (
    <section className="border-t border-rule">
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 md:py-20">
        <p className="eyebrow">The tours</p>
        <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
          {category.listingsTitle ??
            `${listings.length} ${category.name.toLowerCase()} to compare`}
        </h2>
        <p className="mt-3 text-muted">
          {category.listingsIntro ??
            "Who drives, the island stops, and what’s included — then check live dates."}
        </p>
        {listings.length > 1 ? (
          <ol className="mt-8 space-y-2 text-sm font-extrabold">
            {listings.map((tour, index) => (
              <li key={tour.id}>
                <a
                  href={`#tour-${tour.id}`}
                  className="text-ink underline decoration-rule underline-offset-2 hover:text-rust"
                >
                  {index + 1}. {tour.name}
                </a>
              </li>
            ))}
          </ol>
        ) : null}
      </div>
      <div className="divide-y divide-rule border-t border-rule">
        {listings.map((tour) => (
          <TourArticle key={tour.id} tour={tour} />
        ))}
      </div>
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <BookLink
          href={category.bookingUrl}
          className="rounded-full bg-rust px-6 py-3 text-sm font-extrabold text-white hover:bg-rust-2"
        >
          More {category.name.toLowerCase()} on Viator
        </BookLink>
      </div>
    </section>
  );
}

function TourArticle({ tour }: { tour: Tour }) {
  return (
    <article
      id={`tour-${tour.id}`}
      className="scroll-mt-6 bg-sand py-14 sm:py-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-rust">
          {driveBadge(tour.driveRole)}
        </p>
        <h2 className="mt-2 max-w-4xl font-display text-3xl font-extrabold leading-[1.15] sm:text-4xl">
          {tour.name}
        </h2>
        {tour.suppliedBy ? (
          <p className="mt-2 text-sm font-bold text-ink/70">
            Supplied by {tour.suppliedBy}
          </p>
        ) : null}
        <p className="mt-2 text-base font-extrabold text-ink">
          From {formatFromPrice(tour.fromPrice)} per person · {tour.duration}
          {tour.rating != null && tour.reviews != null
            ? ` · ${tour.rating.toFixed(1)} (${tour.reviews.toLocaleString()} reviews)`
            : null}
        </p>
        <p className="mt-1 text-sm text-muted">{tour.driveNote}</p>

        <div className="mt-8 grid items-start gap-10 lg:grid-cols-2">
          <div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-sand-2">
              <Image
                src={tour.image}
                alt={tour.imageAlt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="mt-6 space-y-4 text-[1.02rem] leading-relaxed text-muted">
              {tour.body ? (
                <h3 className="font-display text-2xl font-extrabold tracking-tight text-ink">
                  Why we like it
                </h3>
              ) : null}
              <p>{tour.blurb}</p>
              {tour.body?.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
            {tour.highlights && !tour.itinerary ? (
              <ul className="mt-6 list-disc space-y-2 pl-5 text-[1.02rem] leading-relaxed text-muted">
                {tour.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
            {tour.gallery && tour.gallery.length > 0 ? (
              <ul className="mt-6 grid grid-cols-3 gap-2 sm:gap-3">
                {tour.gallery.map((photo) => (
                  <li
                    key={photo.src}
                    className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-sand-2"
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(min-width: 1024px) 16vw, 33vw"
                      className="object-cover"
                    />
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <div>
            {tour.itinerary ? (
              <div>
                <h3 className="font-display text-2xl font-extrabold tracking-tight">
                  Where the tour actually goes
                </h3>
                <ol className="mt-5 divide-y divide-rule border-y border-rule">
                  {tour.itinerary.map((item, index) => (
                    <li key={item.stop} className="py-3.5">
                      <p className="font-display text-[1.05rem] font-extrabold text-ink">
                        {index + 1}. {item.stop}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-muted">
                        {item.detail}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            ) : null}
            {tour.extras ? (
              <div className={tour.itinerary ? "mt-8" : ""}>
                <h3 className="font-display text-2xl font-extrabold tracking-tight">
                  What’s included
                </h3>
                <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-muted">
                  {tour.extras.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ) : null}
            <div className="mt-8">
              <BookLink
                href={tour.bookingUrl}
                externalHint="visible"
                className="rounded-full bg-rust px-6 py-3 text-sm font-extrabold text-white hover:bg-rust-2"
              >
                Check dates and book
              </BookLink>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function Faq({ category }: { category: Category }) {
  return (
    <section className="border-t border-rule bg-sand-2/40">
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 md:py-20">
        <p className="eyebrow">FAQ</p>
        <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight">
          {category.faqTitle ?? `${category.name} questions`}
        </h2>
        <dl className="mt-8 divide-y divide-rule">
          {category.faqs.map((item) => (
            <div key={item.question} className="py-5">
              <dt className="font-display text-lg font-extrabold">
                {item.question}
              </dt>
              <dd className="mt-2 leading-relaxed text-muted">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Closing({ others }: { others: ReturnType<typeof otherCategories> }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <p className="eyebrow">Other vehicles</p>
      <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight">
        Looking for a different way around Gozo?
      </h2>
        <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {others.map((item) => (
          <li key={item.slug} className="h-full">
            <a
              href={item.path}
              className="group flex h-full min-h-[11.5rem] flex-col rounded-2xl border border-rule bg-sand p-5 hover:border-rust/40"
            >
              <p className="min-h-[3.25rem] text-[11px] font-extrabold uppercase leading-snug tracking-[0.14em] text-rust">
                {item.driveLabel}
              </p>
              <p className="mt-auto font-display text-xl font-extrabold leading-snug group-hover:text-rust">
                {item.name}
              </p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

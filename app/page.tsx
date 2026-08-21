import Image from "next/image";
import type { Metadata } from "next";
import { BookLink } from "@/components/BookLink";
import { BookAhead } from "@/components/BookAhead";
import { HomeStickyBook } from "@/components/HomeStickyBook";
import { JsonLd } from "@/components/JsonLd";
import { buildHomeGraph } from "@/lib/schema";
import { socialMetadata } from "@/lib/seo";
import { facts, faqs, site, steps } from "@/lib/site";
import { operatorsCard } from "@/lib/operators";
import {
  categories,
  driveBadge,
  formatFromPrice,
} from "@/lib/tours";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  ...socialMetadata({
    title: site.title,
    description: site.description,
    path: "/",
  }),
};

export default function Home() {
  return (
    <main id="main" className="pb-28 sm:pb-24">
      <JsonLd data={buildHomeGraph()} />
      <Hero />
      <Facts />
      <BookAhead />
      <Intro />
      <Vehicles />
      <Compare />
      <HowItRuns />
      <Faq />
      <ClosingCta />
      <HomeStickyBook />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative isolate min-h-[70svh] overflow-hidden bg-night text-sand sm:min-h-[80svh]">
      <Image
        src="/images/hero.jpg"
        alt="Riders on quad bikes following a dusty coastal track across Gozo, Malta, with limestone hills behind them."
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-night/80 via-night/40 to-night/55"
        aria-hidden="true"
      />
      <div className="relative mx-auto flex min-h-[70svh] max-w-6xl flex-col justify-start px-4 pb-16 pt-10 sm:min-h-[80svh] sm:px-6 sm:pb-20 sm:pt-14">
        <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-ochre">
          Gozo, Malta · Full-day tours from the main island
        </p>
        <h1 className="mt-5 max-w-3xl font-display text-[2.15rem] font-extrabold leading-[1.2] text-white sm:text-5xl sm:leading-[1.16]">
          The Best Gozo Off-Road Tours
        </h1>
        <h2 className="mt-5 max-w-2xl font-display text-xl font-extrabold leading-snug text-white/95 sm:text-2xl">
          Quad, UTV, buggy, jeep, or tuk tuk — five machines, one island
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-sand/90 sm:text-lg">
          Pickup in Malta, a boat to Gozo, then cliffs, salt pans, Dwejra, and
          usually Comino on the way home. We compare the tours so you can book
          the one that fits.
        </p>
        <p className="mt-5 max-w-xl text-[11px] leading-relaxed text-sand/70">
          {site.affiliateDisclosure}
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <BookLink className="rounded-full bg-rust px-7 py-3.5 text-base font-extrabold tracking-wide text-white hover:bg-rust-2">
            See Gozo tours
          </BookLink>
          <a
            href="#vehicles"
            className="inline-flex items-center rounded-full border border-white/40 px-5 py-2.5 text-sm font-extrabold tracking-wide text-white hover:bg-white/10"
          >
            Compare vehicles
          </a>
        </div>
      </div>
    </section>
  );
}

function Facts() {
  return (
    <section aria-label="Key facts" className="border-b border-rule bg-sand-2">
      <dl className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
        {facts.map((fact, i) => (
          <div
            key={fact.label}
            className={`px-4 py-5 sm:px-6 sm:py-6 ${
              i !== facts.length - 1 ? "md:border-r md:border-rule" : ""
            } ${i < 2 ? "border-b border-rule md:border-b-0" : ""} ${
              i === 0 || i === 2 ? "border-r border-rule" : ""
            }`}
          >
            <dt className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-muted">
              {fact.label}
            </dt>
            <dd className="mt-1 font-display text-lg font-extrabold text-ink">
              {fact.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function Intro() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 md:py-20">
      <p className="eyebrow">Who drives</p>
      <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
        Five vehicles, one island loop
      </h2>
      <div className="mt-5 space-y-4 text-[1.02rem] leading-relaxed text-muted">
        <p>
          A Gozo day is the same beautiful circuit — lookouts, temples, salt
          pans, Dwejra — in a different machine. A quad is the bike you
          straddle. A UTV is an open 6-seater or a ride-along 4x4. A buggy can
          be a chauffeured 4WD or a sunset self-drive (one of those is a
          three-wheeled Ryker). A jeep safari is a shared 4x4, unless you pick
          the e-jeep. A tuk tuk is the sit-back road day with a chauffeur.
        </p>
        <p>
          Start with{" "}
          <a
            href="/self-drive-or-passenger"
            className="font-extrabold text-ink underline decoration-rule underline-offset-2 hover:text-rust"
          >
            who drives
          </a>
          , then compare{" "}
          <a
            href="/self-drive-quad-tours"
            className="font-extrabold text-ink underline decoration-rule underline-offset-2 hover:text-rust"
          >
            quads
          </a>
          ,{" "}
          <a
            href="/utv-tours"
            className="font-extrabold text-ink underline decoration-rule underline-offset-2 hover:text-rust"
          >
            UTV
          </a>
          ,{" "}
          <a
            href="/buggy-tours"
            className="font-extrabold text-ink underline decoration-rule underline-offset-2 hover:text-rust"
          >
            buggy
          </a>
          ,{" "}
          <a
            href="/jeep-safari-tours"
            className="font-extrabold text-ink underline decoration-rule underline-offset-2 hover:text-rust"
          >
            jeep
          </a>
          , or{" "}
          <a
            href="/tuk-tuk-tours"
            className="font-extrabold text-ink underline decoration-rule underline-offset-2 hover:text-rust"
          >
            tuk tuk
          </a>
          . The tours come from{" "}
          <a
            href="/operators"
            className="font-extrabold text-ink underline decoration-rule underline-offset-2 hover:text-rust"
          >
            Pride, Arrigo, Cominology, Barbarossa, and My Dream Malta
          </a>
          . Live dates are on Viator.
        </p>
      </div>
    </section>
  );
}

function Vehicles() {
  return (
    <section
      id="vehicles"
      className="scroll-mt-4 border-t border-rule bg-sand-2/50"
    >
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <p className="eyebrow">Five vehicles, plus who runs them</p>
        <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
          Pick the machine that fits the island
        </h2>
        <ul className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <li key={category.slug}>
              <a
                href={category.path}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-rule bg-sand hover:border-rust/40"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-night">
                  <Image
                    src={category.heroImage}
                    alt={category.heroAlt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-rust">
                    {driveBadge(category.driveRole)}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-extrabold tracking-tight group-hover:text-rust">
                    {category.cardTitle}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {category.driveLabel}. From{" "}
                    {formatFromPrice(category.fromPrice)} · {category.duration}
                  </p>
                  <p className="mt-4 text-sm font-extrabold text-rust group-hover:text-rust-2">
                    See {category.name.toLowerCase()}
                  </p>
                </div>
              </a>
            </li>
          ))}
          <li>
            <a
              href={operatorsCard.path}
              className="group flex h-full flex-col items-center justify-center rounded-3xl border border-rule bg-sand p-5 text-center hover:border-rust/40"
            >
              <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-rust">
                {operatorsCard.driveLabel}
              </p>
              <h3 className="mt-2 font-display text-2xl font-extrabold tracking-tight group-hover:text-rust">
                {operatorsCard.cardTitle}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {operatorsCard.blurb}
              </p>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

function Compare() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
      <p className="eyebrow">Side by side</p>
      <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
        Quad, UTV, buggy, jeep, tuk tuk — same island, different ride
      </h2>
      <div className="mt-8 overflow-x-auto rounded-2xl border border-rule">
        <table className="w-full min-w-[36rem] text-left text-sm">
          <thead className="bg-sand-2 text-[11px] font-extrabold uppercase tracking-[0.12em] text-muted">
            <tr>
              <th className="px-4 py-3">Vehicle</th>
              <th className="px-4 py-3">Who drives</th>
              <th className="px-4 py-3">License</th>
              <th className="px-4 py-3">Terrain</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rule bg-sand">
            <tr>
              <td className="px-4 py-3 font-extrabold">
                <a href="/self-drive-quad-tours" className="hover:text-rust">
                  Quad
                </a>
              </td>
              <td className="px-4 py-3">You, or a passenger on the back</td>
              <td className="px-4 py-3">Yes, if you drive</td>
              <td className="px-4 py-3">Tracks and lanes</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-extrabold">
                <a href="/utv-tours" className="hover:text-rust">
                  UTV
                </a>
              </td>
              <td className="px-4 py-3">Usually ride-along or a 6-seater</td>
              <td className="px-4 py-3">No, on a ride-along</td>
              <td className="px-4 py-3">Open 4x4, tracks</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-extrabold">
                <a href="/buggy-tours" className="hover:text-rust">
                  Buggy
                </a>
              </td>
              <td className="px-4 py-3">You, or a driver-guide</td>
              <td className="px-4 py-3">Yes, if you drive at sunset</td>
              <td className="px-4 py-3">4WD tracks, or a Ryker</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-extrabold">
                <a href="/jeep-safari-tours" className="hover:text-rust">
                  Jeep safari
                </a>
              </td>
              <td className="px-4 py-3">Guide, or you in an e-jeep</td>
              <td className="px-4 py-3">Yes, on the self-drive e-jeep</td>
              <td className="px-4 py-3">4x4 tracks</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-extrabold">
                <a href="/tuk-tuk-tours" className="hover:text-rust">
                  Tuk tuk
                </a>
              </td>
              <td className="px-4 py-3">Chauffeur</td>
              <td className="px-4 py-3">No</td>
              <td className="px-4 py-3">Village roads and lookouts</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

function HowItRuns() {
  return (
    <section className="border-y border-rule bg-sand-2/50">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <p className="eyebrow">How a Gozo day actually runs</p>
        <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
          Pickup, the island loop, boat home
        </h2>
        <ol className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <li
              key={step.n}
              className="rounded-3xl border border-rule bg-sand p-6"
            >
              <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-rust">
                {step.n}
              </p>
              <h3 className="mt-3 font-display text-xl font-extrabold">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="scroll-mt-4">
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 md:py-20">
        <p className="eyebrow">FAQ</p>
        <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
          Questions before you book
        </h2>
        <dl className="mt-8 divide-y divide-rule">
          {faqs.map((item) => (
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

function ClosingCta() {
  return (
    <section className="border-t border-rule bg-night text-sand">
      <div className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6 md:py-16">
        <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
          Find the vehicle. Check live dates.
        </h2>
        <p className="mt-4 text-sand/80">
          Open quads, UTV, buggy, jeep, or tuk tuk — then book the tour that
          fits.
        </p>
        <div className="mt-6 flex justify-center">
          <BookLink className="rounded-full bg-rust px-7 py-3.5 text-base font-extrabold text-white hover:bg-rust-2">
            See Gozo tours
          </BookLink>
        </div>
      </div>
    </section>
  );
}

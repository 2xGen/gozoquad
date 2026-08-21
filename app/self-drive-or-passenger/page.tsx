import type { Metadata } from "next";
import { BookLink } from "@/components/BookLink";
import { HomeStickyBook } from "@/components/HomeStickyBook";
import { JsonLd } from "@/components/JsonLd";
import { buildCompareGraph } from "@/lib/schema";
import { socialMetadata } from "@/lib/seo";
import { faqs } from "@/lib/site";
import { categories } from "@/lib/tours";

const title = "Do You Drive a Gozo Quad Yourself?";
const description =
  "Self-drive vs passenger on Gozo: quads, buggies, jeeps, and tuk tuks. License rules, safety, and what “buggy” actually means before you book.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/self-drive-or-passenger" },
  ...socialMetadata({
    title,
    description,
    path: "/self-drive-or-passenger",
    imageAlt:
      "Do you drive a Gozo quad yourself, or ride as a passenger?",
  }),
};

export default function ComparePage() {
  return (
    <main id="main" className="pb-28 sm:pb-24">
      <JsonLd data={buildCompareGraph()} />
      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 md:py-16">
        <nav aria-label="Breadcrumb" className="text-[12px] text-muted">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <a href="/" className="hover:text-ink">
                Home
              </a>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-ink">Who drives?</li>
          </ol>
        </nav>
        <p className="eyebrow mt-6">The only question that matters</p>
        <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
          Do you actually get to drive the quad yourself?
        </h1>
        <p className="mt-5 text-[1.05rem] leading-relaxed text-muted">
          A “Gozo quad tour” can be you on the bike, you on the back, a UTV
          with a steering wheel, or a tuk tuk with a chauffeur. Use this
          page, then open the matching category.
        </p>

        <section className="mt-12">
          <h2 className="font-display text-2xl font-extrabold tracking-tight">
            If you want the handlebars
          </h2>
          <p className="mt-3 leading-relaxed text-muted">
            Book a{" "}
            <a
              href="/self-drive-quad-tours"
              className="font-extrabold text-ink underline decoration-rule underline-offset-2 hover:text-rust"
            >
              true self-drive quad
            </a>
            . Choose the driver option, not the passenger seat. You need a
            valid car license, usually held for a year or more, and you need
            to be 21 on most operators. Helmets are included. The roads are
            narrow. If gravel makes you nervous, do not start here.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-2xl font-extrabold tracking-tight">
            If you want an open 4x4, not a bike
          </h2>
          <p className="mt-3 leading-relaxed text-muted">
            That is a{" "}
            <a
              href="/utv-tours"
              className="font-extrabold text-ink underline decoration-rule underline-offset-2 hover:text-rust"
            >
              UTV tour
            </a>
            : a 6-seater or a ride-along safari, same island loop as a jeep,
            more wind. On the listings we feature, you are usually a
            passenger. Confirm the driver line before you pay.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-2xl font-extrabold tracking-tight">
            If you want a small 4WD with a chauffeur
          </h2>
          <p className="mt-3 leading-relaxed text-muted">
            Book a{" "}
            <a
              href="/buggy-tours"
              className="font-extrabold text-ink underline decoration-rule underline-offset-2 hover:text-rust"
            >
              chauffeured buggy
            </a>
            . A driver takes the lanes. You take the photos. This is not a
            self-drive quad and not a tuk tuk.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-2xl font-extrabold tracking-tight">
            If you do not want to drive at all
          </h2>
          <p className="mt-3 leading-relaxed text-muted">
            UTV ride-alongs and buggies above both work. Or book a{" "}
            <a
              href="/jeep-safari-tours"
              className="font-extrabold text-ink underline decoration-rule underline-offset-2 hover:text-rust"
            >
              jeep safari
            </a>{" "}
            for a shared 4x4, or a{" "}
            <a
              href="/tuk-tuk-tours"
              className="font-extrabold text-ink underline decoration-rule underline-offset-2 hover:text-rust"
            >
              tuk tuk
            </a>{" "}
            for a road tour. A tuk tuk is not off-roading.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-2xl font-extrabold tracking-tight">
            Read the inclusions
          </h2>
          <p className="mt-3 leading-relaxed text-muted">
            Look for “self-drive,” “driver-guide,” and “valid driving
            license.” A listing titled chauffeured e-jeep can still put you
            at the wheel. If it asks for a license, you are the driver.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-2xl font-extrabold tracking-tight">
            Short answers
          </h2>
          <dl className="mt-6 divide-y divide-rule">
            {faqs.slice(0, 6).map((item) => (
              <div key={item.question} className="py-5">
                <dt className="font-display text-lg font-extrabold">
                  {item.question}
                </dt>
                <dd className="mt-2 leading-relaxed text-muted">
                  {item.answer}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <ul className="mt-12 grid gap-3 sm:grid-cols-2">
          {categories.map((category) => (
            <li key={category.slug}>
              <a
                href={category.path}
                className="block rounded-2xl border border-rule p-4 hover:border-rust/40"
              >
                <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-rust">
                  {category.driveLabel}
                </p>
                <p className="mt-1 font-display text-lg font-extrabold">
                  {category.cardTitle}
                </p>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <BookLink className="rounded-full bg-rust px-6 py-3 text-sm font-extrabold text-white hover:bg-rust-2">
            See Gozo tours
          </BookLink>
        </div>
      </article>
      <HomeStickyBook />
    </main>
  );
}

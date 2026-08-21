import type { Metadata } from "next";
import { CookieSettingsButton } from "@/components/CookieConsent";
import { socialMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

const title = "Cookies and privacy";
const description =
  "How Gozo Quad Tours uses necessary storage and Vercel Analytics. Manage your cookie choices any time.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/cookies" },
  ...socialMetadata({
    title,
    description,
    path: "/cookies",
    image: site.ogImage.url,
  }),
};

export default function CookiesPage() {
  return (
    <main id="main" className="mx-auto max-w-3xl px-4 py-12 sm:px-6 md:py-16">
      <p className="eyebrow">Legal</p>
      <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
        Cookies and privacy
      </h1>
      <p className="mt-4 text-[1.02rem] leading-relaxed text-muted">
        {site.name} lists Gozo off-road and island-day tours. Bookings
        complete on Viator, which has its own privacy notice.
      </p>
      <section className="mt-10">
        <h2 className="font-display text-2xl font-extrabold tracking-tight">
          Your choices
        </h2>
        <p className="mt-3 leading-relaxed text-muted">
          Vercel Web Analytics is cookieless and counts page views. You can
          still store a local preference and change it later.
        </p>
        <CookieSettingsButton className="mt-4 inline-flex items-center rounded-full bg-rust px-5 py-2.5 text-sm font-extrabold tracking-wide text-white hover:bg-rust-2" />
      </section>
      <section className="mt-10">
        <h2 className="font-display text-2xl font-extrabold tracking-tight">
          Necessary
        </h2>
        <p className="mt-3 leading-relaxed text-muted">
          One first-party record stores whether you accepted or rejected
          analytics. It is not used for ads.
        </p>
      </section>
      <section className="mt-10">
        <h2 className="font-display text-2xl font-extrabold tracking-tight">
          Analytics (optional)
        </h2>
        <p className="mt-3 leading-relaxed text-muted">
          Vercel Web Analytics records page views and referrers. It does not
          set ads cookies. The banner stores whether you acknowledged this.
        </p>
      </section>
      <section className="mt-10">
        <h2 className="font-display text-2xl font-extrabold tracking-tight">
          Booking links
        </h2>
        <p className="mt-3 leading-relaxed text-muted">
          {site.affiliateDisclosure} Viator may set its own cookies once you
          leave this site.
        </p>
      </section>
      <section className="mt-10">
        <h2 className="font-display text-2xl font-extrabold tracking-tight">
          Contact
        </h2>
        <p className="mt-3 leading-relaxed text-muted">
          Contact{" "}
          <a
            href={site.ownerUrl}
            className="font-extrabold text-ink underline decoration-rule underline-offset-2 hover:text-rust"
          >
            2xgen.com
          </a>
          .
        </p>
      </section>
    </main>
  );
}

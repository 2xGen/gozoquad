import { CookieSettingsButton } from "./CookieConsent";
import { nav, site } from "@/lib/site";
import { categories } from "@/lib/tours";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-night pb-24 text-sand sm:pb-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-[1.12rem] font-extrabold tracking-tight text-sand">
            Gozo Quad Tours
          </p>
          <p className="mt-0.5 text-[0.65rem] font-extrabold uppercase tracking-[0.18em] text-ochre">
            ATV · UTV · Jeep · Quad
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-sand/75">
            The independent guide to Gozo off-road tours: quad and ATV, UTV
            and 4x4, jeep safari, and buggy. Compare tours, stops, and who
            drives — then book.
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-sand/75">
            Gozo is only the start. Explore{" "}
            <a
              href={site.toptours.url}
              className="text-ochre underline decoration-white/25 underline-offset-2 hover:text-sand"
            >
              more tours on {site.toptours.label}
            </a>
            .
          </p>
        </div>

        <div>
          <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-ochre">
            Vehicles
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {categories.map((category) => (
              <li key={category.slug}>
                <a
                  href={category.path}
                  className="text-sand/80 hover:text-sand"
                >
                  {category.name}
                </a>
              </li>
            ))}
            {nav
              .filter(
                (item) =>
                  item.href.startsWith("/self-drive-or") ||
                  item.href === "/operators",
              )
              .map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sand/80 hover:text-sand">
                    {item.label}
                  </a>
                </li>
              ))}
            <li>
              <a href="/#faq" className="text-sand/80 hover:text-sand">
                FAQ
              </a>
            </li>
            <li>
              <a
                href={site.bookingUrl}
                target="_blank"
                rel={site.affiliateRel}
                className="inline-flex items-center gap-1.5 text-sand/80 hover:text-sand"
              >
                See Gozo tours
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 12 12"
                  aria-hidden="true"
                  className="opacity-80"
                >
                  <path
                    d="M3.5 3h5.5v5.5M8.8 3.2 3 9"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="square"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-ochre">
            Note
          </p>
          <p className="mt-3 text-sm leading-relaxed text-sand/75">
            We do not operate the tours. We compare Gozo ATV, UTV, jeep, and
            quad tours from local operators. Bookings complete on Viator.
          </p>
        </div>
      </div>

      <div
        id="disclosure"
        className="border-t border-white/10 px-4 py-5 sm:px-6"
      >
        <div className="mx-auto max-w-6xl space-y-2 text-[12px] leading-relaxed text-sand/60">
          <p>{site.affiliateDisclosure}</p>
          <p>
            Owned and operated by{" "}
            <a
              href={site.ownerUrl}
              className="text-sand/80 underline decoration-white/25 underline-offset-2 hover:text-sand"
            >
              {site.owner}
            </a>
            .
          </p>
          <p>
            © {new Date().getFullYear()} {site.name} · {site.domain}
          </p>
          <p className="flex flex-wrap gap-x-3 gap-y-1">
            <a
              href="/cookies"
              className="text-sand/80 underline decoration-white/25 underline-offset-2 hover:text-sand"
            >
              Cookie policy
            </a>
            <CookieSettingsButton className="text-sand/80 underline decoration-white/25 underline-offset-2 hover:text-sand" />
          </p>
        </div>
      </div>
    </footer>
  );
}

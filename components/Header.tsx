import { BookLink } from "./BookLink";
import { nav, site } from "@/lib/site";

const bookBtn =
  "inline-flex items-center rounded-full bg-rust px-3.5 py-2 text-[13px] font-extrabold tracking-wide text-white hover:bg-rust-2";

export function Header() {
  return (
    <header className="border-b border-rule bg-sand">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3 sm:gap-8 sm:px-6">
        <a
          href="/"
          className="shrink-0 font-display text-[1.05rem] font-extrabold tracking-tight text-night"
        >
          {site.name}
        </a>

        <nav
          className="hidden items-center gap-4 lg:flex"
          aria-label="Primary"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] font-extrabold tracking-wide text-ink/80 hover:text-rust"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <BookLink className={`${bookBtn} ml-auto hidden lg:inline-flex`}>
          See Gozo tours
        </BookLink>

        <div className="ml-auto lg:hidden">
          <details className="relative">
            <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-full border border-rule text-ink [&::-webkit-details-marker]:hidden">
              <span className="sr-only">Open menu</span>
              <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
                <path
                  d="M2 4.5h14M2 9h14M2 13.5h14"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </summary>
            <nav
              className="absolute right-0 z-40 mt-2 w-52 rounded-2xl border border-rule bg-sand py-2 shadow-sm"
              aria-label="Mobile"
            >
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-2.5 text-sm font-bold text-ink hover:bg-sand-2"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}

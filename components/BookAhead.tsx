import { BookLink } from "@/components/BookLink";
import { site } from "@/lib/site";

export function BookAhead({ href }: { href?: string }) {
  return (
    <section className="border-y border-rust bg-rust text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 py-8 sm:flex-row sm:items-center sm:px-6">
        <div>
          <h2 className="font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
            {site.bookAhead.title}
          </h2>
          <p className="mt-1 text-base font-medium text-white/90 sm:text-lg">
            {site.bookAhead.body}
          </p>
        </div>
        <BookLink
          href={href}
          externalHint="visible"
          className="shrink-0 rounded-full bg-night px-7 py-3.5 text-base font-extrabold tracking-wide text-white hover:bg-night/85"
        >
          Check dates and book
        </BookLink>
      </div>
    </section>
  );
}

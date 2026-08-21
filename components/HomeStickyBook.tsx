import type { ReactNode } from "react";
import { BookLink } from "./BookLink";
import { site } from "@/lib/site";

export function StickyBook({
  href = site.bookingUrl,
  children = "See Gozo tours",
  externalHint = "sr-only",
}: {
  href?: string;
  children?: ReactNode;
  externalHint?: "sr-only" | "visible";
}) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-rule bg-sand/95 px-4 py-3 shadow-[0_-6px_24px_rgba(26,24,20,0.12)] backdrop-blur-sm print:hidden [padding-bottom:max(0.75rem,env(safe-area-inset-bottom))]">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <p className="text-[11px] leading-snug text-muted sm:max-w-xl">
          {site.affiliateDisclosure}
        </p>
        <BookLink
          href={href}
          externalHint={externalHint}
          className="w-full justify-center rounded-full bg-rust px-7 py-3.5 text-base font-extrabold tracking-wide text-white hover:bg-rust-2 sm:w-auto"
        >
          {children}
        </BookLink>
      </div>
    </div>
  );
}

export function HomeStickyBook() {
  return <StickyBook>Find your vehicle</StickyBook>;
}

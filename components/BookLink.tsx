import type { ReactNode } from "react";
import { site } from "@/lib/site";

type BookLinkProps = {
  href?: string;
  children?: ReactNode;
  className?: string;
  showDisclosure?: boolean;
  disclosureClassName?: string;
  externalHint?: "sr-only" | "visible";
};

function ExternalIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      aria-hidden="true"
      className="shrink-0 opacity-80"
    >
      <path
        d="M3.5 3h5.5v5.5M8.8 3.2 3 9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="square"
      />
    </svg>
  );
}

export function BookLink({
  href = site.bookingUrl,
  children = "See Gozo tours",
  className = "",
  showDisclosure = false,
  disclosureClassName = "text-muted",
  externalHint = "sr-only",
}: BookLinkProps) {
  const link = (
    <a
      href={href}
      target="_blank"
      rel={site.affiliateRel}
      className={`inline-flex items-center gap-1.5 ${className}`}
    >
      {children}
      <ExternalIcon />
      {externalHint === "visible" ? (
        <span className="text-[11px] font-bold tracking-wide opacity-90">
          (opens on Viator)
        </span>
      ) : (
        <span className="sr-only">(opens on Viator)</span>
      )}
    </a>
  );

  if (!showDisclosure) {
    return link;
  }

  return (
    <div className="w-full">
      <p className={`mb-2 text-[11px] leading-relaxed ${disclosureClassName}`}>
        {site.affiliateDisclosure}
      </p>
      {link}
    </div>
  );
}

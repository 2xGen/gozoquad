"use client";

import { useEffect, useId, useState } from "react";
import {
  CONSENT_OPEN_EVENT,
  getConsent,
  openCookieSettings,
  setConsent,
  type ConsentRecord,
} from "@/lib/consent";

export function CookieConsent() {
  const titleId = useId();
  const [ready, setReady] = useState(false);
  const [consent, setConsentState] = useState<ConsentRecord | null>(null);
  const [panelOpen, setPanelOpen] = useState(false);
  const [analyticsDraft, setAnalyticsDraft] = useState(false);

  useEffect(() => {
    const stored = getConsent();
    setConsentState(stored);
    setAnalyticsDraft(stored?.analytics ?? false);
    setReady(true);
  }, []);

  useEffect(() => {
    function onOpen() {
      setAnalyticsDraft(getConsent()?.analytics ?? false);
      setPanelOpen(true);
    }
    window.addEventListener(CONSENT_OPEN_EVENT, onOpen);
    return () => window.removeEventListener(CONSENT_OPEN_EVENT, onOpen);
  }, []);

  function save(analytics: boolean) {
    setConsentState(setConsent(analytics));
    setAnalyticsDraft(analytics);
    setPanelOpen(false);
  }

  const showBanner = ready && consent === null && !panelOpen;

  return (
    <>
      {showBanner ? (
        <div
          role="dialog"
          aria-modal="false"
          aria-labelledby={titleId}
          className="fixed inset-x-0 bottom-0 z-[70] border-t border-rule bg-sand px-4 py-4 shadow-[0_-8px_28px_rgba(26,24,20,0.14)] [padding-bottom:max(1rem,env(safe-area-inset-bottom))] sm:px-6"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p
                id={titleId}
                className="font-display text-lg font-extrabold tracking-tight"
              >
                Cookies and analytics
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                We use privacy-friendly Vercel Analytics for page views. It
                does not use ads cookies.{" "}
                <a
                  href="/cookies"
                  className="font-bold text-ink underline decoration-rule underline-offset-2 hover:text-rust"
                >
                  Cookie policy
                </a>
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => {
                  setAnalyticsDraft(false);
                  setPanelOpen(true);
                }}
                className="inline-flex items-center rounded-full border border-rule px-4 py-2.5 text-sm font-extrabold text-ink hover:bg-sand-2"
              >
                Manage cookies
              </button>
              <button
                type="button"
                onClick={() => save(false)}
                className="inline-flex items-center rounded-full border border-rule px-4 py-2.5 text-sm font-extrabold text-ink hover:bg-sand-2"
              >
                Reject
              </button>
              <button
                type="button"
                onClick={() => save(true)}
                className="inline-flex items-center rounded-full bg-rust px-4 py-2.5 text-sm font-extrabold tracking-wide text-white hover:bg-rust-2"
              >
                Accept analytics
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {panelOpen ? (
        <div
          className="fixed inset-0 z-[80] flex items-end justify-center bg-night/50 p-4 sm:items-center"
          role="presentation"
          onClick={() => setPanelOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={`${titleId}-panel`}
            className="w-full max-w-lg rounded-3xl border border-rule bg-sand p-5 shadow-lg sm:p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <p
              id={`${titleId}-panel`}
              className="font-display text-2xl font-extrabold tracking-tight"
            >
              Cookie settings
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Necessary storage keeps your choice. Vercel Analytics is
              cookieless and counts page views.
            </p>
            <ul className="mt-5 divide-y divide-rule border-y border-rule">
              <li className="py-4">
                <p className="text-sm font-extrabold text-ink">Necessary</p>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  Remembers whether you accepted or rejected analytics. Always
                  on.
                </p>
              </li>
              <li className="flex items-start justify-between gap-4 py-4">
                <div>
                  <p className="text-sm font-extrabold text-ink">Analytics</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    Vercel Web Analytics: page views and referrers. No ads
                    cookies.
                  </p>
                </div>
                <label className="mt-0.5 inline-flex cursor-pointer items-center gap-2 text-sm font-extrabold">
                  <span className="sr-only">Allow analytics</span>
                  <input
                    type="checkbox"
                    checked={analyticsDraft}
                    onChange={(event) =>
                      setAnalyticsDraft(event.target.checked)
                    }
                    className="h-4 w-4 accent-rust"
                  />
                </label>
              </li>
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setPanelOpen(false)}
                className="inline-flex items-center rounded-full border border-rule px-4 py-2.5 text-sm font-extrabold text-ink hover:bg-sand-2"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => save(analyticsDraft)}
                className="inline-flex items-center rounded-full bg-rust px-4 py-2.5 text-sm font-extrabold tracking-wide text-white hover:bg-rust-2"
              >
                Save choices
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export function CookieSettingsButton({
  className,
}: {
  className?: string;
}) {
  return (
    <button type="button" className={className} onClick={openCookieSettings}>
      Manage cookies
    </button>
  );
}

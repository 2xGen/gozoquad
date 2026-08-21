export const CONSENT_KEY = "gqt-cookie-consent";
export const CONSENT_OPEN_EVENT = "gqt-open-cookies";
export const CONSENT_CHANGE_EVENT = "gqt-consent-change";

export type ConsentRecord = {
  analytics: boolean;
  updatedAt: number;
};

export function getConsent(): ConsentRecord | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<ConsentRecord>;
    if (typeof parsed.analytics !== "boolean") return null;
    return {
      analytics: parsed.analytics,
      updatedAt:
        typeof parsed.updatedAt === "number" ? parsed.updatedAt : Date.now(),
    };
  } catch {
    return null;
  }
}

export function setConsent(analytics: boolean): ConsentRecord {
  const record: ConsentRecord = { analytics, updatedAt: Date.now() };
  window.localStorage.setItem(CONSENT_KEY, JSON.stringify(record));
  window.dispatchEvent(
    new CustomEvent(CONSENT_CHANGE_EVENT, { detail: record }),
  );
  return record;
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(CONSENT_OPEN_EVENT));
}

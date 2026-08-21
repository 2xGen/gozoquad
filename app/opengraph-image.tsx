import { ogContentType, ogSize, renderSiteOgImage } from "@/lib/og-image";
import { site } from "@/lib/site";

export const alt = site.ogImage.alt;
export const size = ogSize;
export const contentType = ogContentType;

export default async function OpenGraphImage() {
  return renderSiteOgImage();
}

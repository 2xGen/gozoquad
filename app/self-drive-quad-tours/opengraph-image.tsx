import { ogContentType, ogSize, renderCategoryOgImage } from "@/lib/og-image";
import { categoryBySlug } from "@/lib/tours";

const category = categoryBySlug("self-drive-quads")!;

export const runtime = "nodejs";
export const alt = category.heroAlt;
export const size = ogSize;
export const contentType = ogContentType;

export default async function OpenGraphImage() {
  return renderCategoryOgImage("self-drive-quads");
}

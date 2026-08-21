import { ogContentType, ogSize, renderOgImage } from "@/lib/og-image";

export const alt =
  "Do you drive a Gozo quad yourself, or ride as a passenger?";
export const size = ogSize;
export const contentType = ogContentType;

export default async function OpenGraphImage() {
  return renderOgImage({
    photo: "images/tours/74443P10-1.jpg",
    kicker: "Gozo · Malta",
    title: "Do you actually drive?",
    subtitle: "Self-drive quads, ride-along UTVs, jeeps, and tuk tuks",
  });
}

import { ogContentType, ogSize, renderOgImage } from "@/lib/og-image";

export const alt =
  "Gozo tour operators: Pride, Arrigo, Cominology, Barbarossa, and My Dream Malta.";
export const size = ogSize;
export const contentType = ogContentType;

export default async function OpenGraphImage() {
  return renderOgImage({
    photo: "images/tours/32057P1-1.jpg",
    kicker: "Gozo · Malta",
    title: "Gozo tour operators",
    subtitle: "Pride, Arrigo, Cominology, Barbarossa, and My Dream Malta",
  });
}

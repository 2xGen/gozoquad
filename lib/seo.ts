import type { Metadata } from "next";
import { site } from "./site";
import type { Category } from "./tours";

type SocialOpts = {
  title: string;
  description: string;
  path: string;
  imageAlt?: string;
  image?: string;
};

function imageUrl(path: string, image?: string) {
  if (image) return image;
  return path === "/" ? site.ogImage.url : `${path}/opengraph-image`;
}

export function socialMetadata({
  title,
  description,
  path,
  imageAlt,
  image,
}: SocialOpts): Pick<Metadata, "openGraph" | "twitter"> {
  const url = path === "/" ? site.url : `${site.url}${path}`;
  const imagePath = imageUrl(path, image);
  const alt = imageAlt ?? site.ogImage.alt;

  return {
    openGraph: {
      type: "website",
      locale: site.locale,
      siteName: site.name,
      url,
      title,
      description,
      images: [
        {
          url: imagePath,
          width: site.ogImage.width,
          height: site.ogImage.height,
          alt,
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imagePath],
    },
  };
}

export function categoryMetadata(category: Category): Metadata {
  return {
    title: {
      absolute: category.metaTitle,
    },
    description: category.description,
    alternates: { canonical: category.path },
    ...socialMetadata({
      title: category.metaTitle,
      description: category.description,
      path: category.path,
      imageAlt: category.heroAlt,
    }),
  };
}

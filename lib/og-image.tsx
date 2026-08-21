import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "./site";
import { categoryBySlug } from "./tours";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

type OgCard = {
  photo: string;
  kicker: string;
  title: string;
  subtitle: string;
};

function publicPath(photo: string) {
  return join(process.cwd(), "public", photo.replace(/^\//, ""));
}

export async function renderOgImage({
  photo,
  kicker,
  title,
  subtitle,
}: OgCard) {
  const file = await readFile(publicPath(photo));
  const ext = photo.toLowerCase().endsWith(".png") ? "png" : "jpeg";
  const src = `data:image/${ext};base64,${file.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          position: "relative",
          backgroundColor: "#241c14",
        }}
      >
        <img
          src={src}
          alt=""
          width={1200}
          height={630}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1200,
            height: 630,
            objectFit: "cover",
            objectPosition: "center 42%",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "absolute",
            top: 0,
            left: 0,
            width: 1200,
            height: 630,
            padding: "52px 60px",
            background:
              "linear-gradient(to top, rgba(36,28,20,0.92) 0%, rgba(36,28,20,0.45) 46%, rgba(36,28,20,0.18) 100%)",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: 4.5,
              textTransform: "uppercase",
              color: "#d4a017",
            }}
          >
            {kicker}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontSize: 62,
                fontWeight: 800,
                color: "#ffffff",
                lineHeight: 1.08,
                letterSpacing: -1,
                maxWidth: 980,
              }}
            >
              {title}
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 16,
                fontSize: 28,
                color: "#eadbc8",
                lineHeight: 1.3,
                maxWidth: 880,
              }}
            >
              {subtitle}
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 32,
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  backgroundColor: "#c45c26",
                  color: "#ffffff",
                  fontSize: 22,
                  fontWeight: 700,
                  letterSpacing: 0.3,
                  padding: "14px 26px",
                }}
              >
                Compare vehicles
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: 22,
                  fontWeight: 700,
                  color: "#eadbc8",
                }}
              >
                {site.domain}
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    { ...ogSize },
  );
}

export async function renderSiteOgImage() {
  return renderOgImage({
    photo: "images/utv-2.jpg",
    kicker: "Gozo · Malta",
    title: "The Best Gozo Off-Road Tours",
    subtitle: "Quad, UTV, buggy, jeep, or tuk tuk — five machines, one island",
  });
}

export async function renderCategoryOgImage(slug: string) {
  const category = categoryBySlug(slug);
  if (!category) return renderSiteOgImage();

  return renderOgImage({
    photo: category.heroImage,
    kicker: category.eyebrow ?? "Gozo · Malta",
    title: category.cardTitle,
    subtitle: category.driveLabel,
  });
}

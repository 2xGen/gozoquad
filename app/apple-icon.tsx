import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#241C14",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 40,
        }}
      >
        <div
          style={{
            display: "flex",
            width: 118,
            height: 52,
            background: "#C45C26",
            borderRadius: 12,
          }}
        />
      </div>
    ),
    size,
  );
}

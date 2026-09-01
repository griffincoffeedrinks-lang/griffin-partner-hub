import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Griffin Partner",
    short_name: "Griffin Partner",
    description: "Share Griffin Coffee. Create moments worth gathering for.",
    start_url: "/partners/don-drew",
    display: "standalone",
    background_color: "#111111",
    theme_color: "#111111",
    orientation: "portrait",
    icons: [
      {
        src: "/griffin-logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/griffin-logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
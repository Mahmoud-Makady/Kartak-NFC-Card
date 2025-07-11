import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import pwa192 from "./public/pwa-192x192.png";
import pwa512 from "./public/pwa-512x512.png";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: [
        "favicon.svg",
        "favicon.ico",
        "robots.txt",
        "apple-touch-icon.png",
      ],
      manifest: {
        name: "KARTAK NFC Card",
        short_name: "KARTAK",
        description: "Your digital business card powered by NFC",
        theme_color: "#000000",
        background_color: "#000000",
        display: "standalone",
        icons: [
          {
            src: pwa192,
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: pwa512,
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});

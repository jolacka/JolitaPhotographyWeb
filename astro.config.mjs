import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: "https://jolacka.github.io/JolitaPhotographyWeb/",
  base: "/JolitaPhotographyWeb/", // GitHub Pages repository name
});
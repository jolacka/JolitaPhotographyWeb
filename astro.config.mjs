import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  //site: "https://jolacka.github.io/JolitaPhotographyWeb/", - 1first attempt
  site: "https://jolacka.github.io/Jolita-s-PHOTOGRAPHY/",
  base: "/JolitaPhotographyWeb/", // GitHub Pages repository name
});
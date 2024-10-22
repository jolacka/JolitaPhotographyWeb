/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: "var(--sans-serif)",
      serif: "var(--font-serif)",
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        brightPink: "var(--brightPink)",
        darkGray: "var(--darkGray)",
        veryLightGray: "var(--veryLightGray)",
        navGray: "var(--navPurple)",
      },
    },
  },
  plugins: [],
};



import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        rajdhani: ["var(--font-rajdhani)", "sans-serif"],
      },
      padding: {
        30: "120px",
      },
      colors: {
        primary: "#009A08", // indian green
        secondary: "#FD8B0E", // indian orange
        scarpa: {
          50: "#F7F8F8",
          100: "#EEEEF0",
          200: "#D8DADF",
          300: "#b6b9c3",
          400: "#8E92A2",
          500: "#717686",
          600: "#535665",
          700: "#4a4c5a",
          800: "#40424c",
          900: "#383942",
          950: "#25262c",
        },
        anon: {
          DEFAULT: "#081224",
        },
        "anon-accent": {
          DEFAULT: "#071631",
        },
        black: "#131313",
        "black-pearl": "#134591",
        "baltic-sea": {
          100: "#F6EDF4",
          900: "#413941",
          950: "#231F23",
        },
        "west-side": {
          50: "#FFF9ED",
          200: "#FFE1A9",
          600: "#EE7108",
        },
        "forest-green": {
          50: "#EDFFED",
        },
        gray: {
          600: "#4B5563",
        },
      },
      boxShadow: {
        header:
          "0px 5px 14px 0px rgba(48, 49, 51, 0.05), 0px 0px 1px 0px rgba(48, 49, 51, 0.05)",
        "project-card":
          "0px 0px 1px 0px rgba(48, 49, 51, 0.05), 0px 6px 16px 0px rgba(48, 49, 51, 0.04)",
      },
    },
  },
  plugins: [],
};
export default config;

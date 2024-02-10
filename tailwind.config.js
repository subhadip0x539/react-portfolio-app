import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        "vite-dark": {
          extend: "dark",
          colors: {
            background: {
              DEFAULT: "#1B1B1F",
            },
            accent: {
              DEFAULT: "#202127",
            },
            foreground: {
              DEFAULT: "#FFFFFF",
              50: "rgba(255, 255, 255, 0.5)",
            },
            primary: {
              DEFAULT: "#646CFF",
            },
          },
        },
        "gemini-dark": {
          extend: "dark",
          colors: {
            background: {
              DEFAULT: "#060606",
            },
            accent: {
              DEFAULT: "#131313",
            },
            foreground: {
              DEFAULT: "#FFFFFF",
              50: "rgba(255, 255, 255, 0.5)",
            },
            primary: {
              DEFAULT: "#4B97F3",
            },
            secondary: {
              DEFAULT: "#ffddb7",
            },
          },
        },
      },
    }),
  ],
};

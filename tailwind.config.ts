import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: "#282828", // Background
          bg_soft: "#3c3836", // Softer background
          fg: "#ebdbb2", // Foreground
          red: "#fb4934", // Red
          green: "#b8bb26", // Green
          yellow: "#fabd2f", // Yellow
          blue: "#83a598", // Blue
          purple: "#d3869b", // Purple
          aqua: "#8ec07c", // Aqua/Cyan
          orange: "#fe8019", // Orange
          border: "#404040",
        },
        light: {
          bg: "#fbf1c7", // Background
          bg_soft: "#ebdbb2", // Softer background
          fg: "#282828", // Foreground
          red: "#cc241d", // Red
          green: "#98971a", // Green
          yellow: "#d79921", // Yellow
          blue: "#458588", // Blue
          purple: "#b16286", // Purple
          aqua: "#689d6a", // Aqua/Cyan
          orange: "#d65d0e", // Orange
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar"), require("tailwind-merge")],
};
export default config;

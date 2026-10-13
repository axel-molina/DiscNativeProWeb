import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: "#050608",
          900: "#08090C",
          850: "#0D0F14",
          800: "#12151D",
          700: "#1A1E29",
          600: "#242938",
        },
        acid: {
          400: "#D8FF33",
          500: "#CCFF00",
          600: "#A6D400",
        },
        cyanDeck: {
          400: "#33F3FF",
          500: "#00E5FF",
          600: "#00B4D8",
        },
        orangeDeck: {
          400: "#FF9E33",
          500: "#FF8400",
          600: "#E06D00",
        },
        liveRed: {
          500: "#FF3344",
        },
      },
      fontFamily: {
        saira: ["'Saira'", "sans-serif"],
      },
      animation: {
        "pulse-subtle": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 8s linear infinite",
        "marquee": "marquee 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

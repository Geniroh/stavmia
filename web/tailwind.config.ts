import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        "playfair": ["Playfair Display", "serif"],
        "open-sans": ["Open Sans", "sans-serif"]
      },
      colors: {
        "myblack": "#242424",
        "mygray": "#888888",
        "mypurple": "#9430E3",
        "myoffwhie": "#fafafa",
      }
    },
  },
  plugins: [],
};
export default config;

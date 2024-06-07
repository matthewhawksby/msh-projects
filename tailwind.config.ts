import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        customGray: "#F2F1F5",
        tetraRed: "#b70802",
        tetraGreen: "#57B702",
        tetraBlue: "#02B1B7",
        tetraPurple: "#6302B7",
      },

      fontFamily: {
        "dm-sans": ["DM Sans", "sans-serif"],
        sans: ["DM Sans", "Arial", "sans-serif"],
        serif: ["DM Serif", "Georgia", "serif"],
      },
      //    backgroundImage: {
      //      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //      "gradient-conic":
      //        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      //   },
    },
  },
  plugins: [],
};
export default config;

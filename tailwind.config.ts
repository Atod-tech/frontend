import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  safelist: [
    {
      pattern:
        /bg-(red|green|blue|yellow|indigo|purple|pink|gray)-(400|500|600)/
    }
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1d85fe",
        dark: "#0e0e0e"
      },
      fontSize: {
        xxs: "10px"
      }
    }
  },
  plugins: [require("@tailwindcss/forms")]
};
export default config;

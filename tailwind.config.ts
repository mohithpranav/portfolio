import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        350: "350px",
      },
      fontFamily: {
        sans: ["var(--font-family-Font-1, Poppins)", "sans-serif"],
        framer: [
          "var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))",
        ],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        gray: {
          500: "#353334",
          400: "#1C1A19",
          300: "#6A6B6E",
          250: "#998F8F",
          225: "#999999",
        },
      },
      animation: {
        slideDiagonal: "slideDiagonal 0.4s ease-out forwards",
      },
      keyframes: {
        slideDiagonal: {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(0.5rem, -0.5rem)" },
        },
      },
      transitionDuration: {
        4000: "4000ms",
      },
    },
  },
  plugins: [],
} satisfies Config;

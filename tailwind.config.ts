import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        satisfy: ["var(--font-satisfy)", "cursive"],
        abhaya: ["var(--font-abhaya)", "serif"],
        oldStandard: ["var(--font-oldStandard)", "serif"],
      },
    },
    animation: {
      slidein500: "slidein 1s ease 500ms forwards ",
      slidein1000: "slidein 1s ease 1000ms forwards ",
      slidein1200: "slidein 1s ease 1000ms forwards ",
      slidein1400: "ease 1000ms ",
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
    },
  },
} satisfies Config;

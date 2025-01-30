import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)'
      },
      fontFamily: {
        satisfy: ['var(--font-satisfy)', 'cursive'],
        abhaya: ['var(--font-abhaya)', 'serif'],
        oldStandard: ['var(--font-oldStandard)', 'serif']
      }
    }
  },
  plugins: []
} satisfies Config;

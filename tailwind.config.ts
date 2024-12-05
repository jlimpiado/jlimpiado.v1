import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "midnight": {
        "alpha-50": "hsl(var(--midnight-alpha-50))",
        "alpha-100": "hsl(var(--midnight-alpha-100))",
        50: "hsl(var(--midnight-50))",
        100: "hsl(var(--midnight-100))",
        200: "hsl(var(--midnight-200))",
        300: "hsl(var(--midnight-300))",
        400: "hsl(var(--midnight-400))",
        500: "hsl(var(--midnight-500))",
        600: "hsl(var(--midnight-600))",
        700: "hsl(var(--midnight-700))",
        800: "hsl(var(--midnight-800))",
        900: "hsl(var(--midnight-900))",
        950: "hsl(var(--midnight-950))"
      }
    },
    extend: {
      keyframes: {
        slide: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        }
      },
      animation: {
        'slide': 'slide 1s 2s ease-in forwards',
      },
      boxShadow: {
        "card": "inset 1px 1px 0 0 hsl(var(--midnight-alpha-50)), inset -1px -1px 0 0 hsl(var(--midnight-alpha-50))"
      }
    },
  },
  plugins: [],
} satisfies Config;

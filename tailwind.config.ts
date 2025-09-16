import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
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
        "matrix": "radial-gradient(circle at 1px 1px, var(--color-primary) 1px, transparent 0)",
      },
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        background: 'var(--color-background)',
        text: 'var(--color-text)',
        border: 'var(--color-border)',
        warning: 'var(--color-warning)',
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
        'terminal': ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'blink': 'blink 1s infinite',
        'glitch': 'glitch-skew 1s infinite linear alternate-reverse',
        'matrix-bg': 'matrix-bg 20s linear infinite',
        'border-glow': 'border-glow 2s ease-in-out infinite alternate',
      },
      boxShadow: {
        'neon': '0 0 20px var(--color-primary)',
        'neon-lg': '0 0 40px var(--color-primary)',
        'terminal': '0 0 20px var(--color-primary), inset 0 0 20px rgba(0, 255, 65, 0.1)',
      },
    },
  },
  plugins: [],
};
export default config;
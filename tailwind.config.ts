import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-fraunces)', 'serif'],
        sans: ['var(--font-geist)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      colors: {
        ink: '#0a0a0a',
        ash: '#111111',
        smoke: '#1a1a1a',
        bone: '#f5f3ee',
        silver: '#c8c8c8',
        muted: '#7a7a7a',
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#F8F6F1',
          elevated: '#FFFFFF',
          soft: '#EFECE4',
        },
        ink: {
          DEFAULT: '#14110F',
          soft: '#2D2723',
          muted: '#635952',
        },
        line: {
          DEFAULT: 'rgba(20, 17, 15, 0.09)',
          strong: 'rgba(20, 17, 15, 0.16)',
        },
        accent: {
          DEFAULT: '#8C5A3C',
          deep: '#6E4229',
          soft: 'rgba(140, 90, 60, 0.12)',
          glow: 'rgba(140, 90, 60, 0.25)',
        },
        cafe: {
          50: '#FBF9F6',
          100: '#F5F1EB',
          200: '#ECE4D8',
          300: '#DDD0BE',
          400: '#C7B198',
          500: '#A68C72',
          600: '#8C5A3C',
          700: '#6E4229',
          800: '#4D2C1A',
          900: '#2E190D',
        }
      },
      fontFamily: {
        sans: ['"Be Vietnam Pro"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Be Vietnam Pro"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Be Vietnam Pro"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'soft': '0 8px 30px rgba(20, 17, 15, 0.05)',
        'elevated': '0 16px 45px rgba(20, 17, 15, 0.08)',
        'button': '0 12px 30px rgba(20, 17, 15, 0.18)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      }
    },
  },
  plugins: [],
};
export default config;

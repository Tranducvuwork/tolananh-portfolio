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
        espresso: {
          DEFAULT: '#1E1611',
          light: '#2E221B',
          dark: '#140E0A',
        },
        warm: {
          50: '#FDFBF7',
          100: '#FAF6F0',
          200: '#F4EFE6',
          300: '#ECE4D8',
          400: '#DECFC0',
          500: '#C8B49F',
          600: '#A68C72',
          700: '#876D55',
          800: '#67513E',
          900: '#4A3A2C',
        },
        terracotta: {
          DEFAULT: '#A45D3D',
          hover: '#8E4D30',
          light: '#F8EDE7',
        },
        caramel: {
          DEFAULT: '#9E6B47',
          light: '#BA845D',
          dark: '#7D5133',
        },
        sand: {
          50: '#FDFCFA',
          100: '#FAF8F4',
          200: '#F3EFE7',
          300: '#EAE3D6',
          400: '#D8CEBE',
          500: '#C4B7A2',
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'Plus Jakarta Sans', 'Be Vietnam Pro', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
        script: ['var(--font-script)', 'Playfair Display', 'Georgia', 'serif'],
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(30, 22, 17, 0.07)',
        'luxury-hover': '0 28px 50px -15px rgba(30, 22, 17, 0.12)',
        'card': '0 4px 20px -2px rgba(30, 22, 17, 0.05), 0 2px 6px -1px rgba(30, 22, 17, 0.03)',
        'phone': '0 30px 60px -15px rgba(20, 14, 10, 0.35)',
        'badge': '0 2px 8px rgba(158, 107, 71, 0.12)',
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
        '4xl': '2.25rem',
      },
    },
  },
  plugins: [],
};
export default config;

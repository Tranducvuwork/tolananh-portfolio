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
        beige: {
          50: '#FDFBF7',
          100: '#F9F5EC',
          200: '#F2E8DC',
          300: '#E5D6C3',
          400: '#D5BEA4',
          500: '#BFA285',
          600: '#A38466',
          700: '#84674C',
          800: '#644D38',
          900: '#463526',
        },
        cream: {
          light: '#FFFDF9',
          DEFAULT: '#FBF7EE',
          dark: '#F3ECE0',
        },
        latte: {
          100: '#F5EBE1',
          200: '#E6D5C3',
          300: '#CFBAA1',
          500: '#9E7E62',
        },
        rosewood: {
          DEFAULT: '#A45D5D',
          light: '#C07D7D',
          dark: '#823D3D',
        },
        sage: {
          50: '#F4F6F4',
          100: '#E6EAE5',
          200: '#CAD4C8',
          500: '#7F937B',
        }
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'Be Vietnam Pro', '-apple-system', 'sans-serif'],
        script: ['var(--font-script)', 'Dancing Script', 'cursive'],
        handwriting: ['var(--font-handwriting)', 'Caveat', 'cursive'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(132, 103, 76, 0.08), 0 2px 6px -1px rgba(132, 103, 76, 0.04)',
        'card': '0 10px 30px -5px rgba(100, 77, 56, 0.1), 0 4px 10px -2px rgba(100, 77, 56, 0.05)',
        'phone': '0 25px 50px -12px rgba(70, 53, 38, 0.25)',
      },
      borderRadius: {
        '3xl': '1.75rem',
        '4xl': '2.25rem',
      }
    },
  },
  plugins: [],
};
export default config;

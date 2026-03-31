/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          primary: '#1a237e',
          900: '#0a1628',
          800: '#111d35',
          700: '#1a2942',
        },
        orange: {
          500: '#ff6600',
          600: '#f57c00',
          700: '#e65100',
        },
        blue: {
          500: '#2196f3',
          600: '#1976d2',
        },
      },
      fontFamily: {
        sans: ['system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
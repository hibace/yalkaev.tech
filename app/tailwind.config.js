/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#546fb3', dark: '#4B6A88' },
        secondary: { DEFAULT: '#4B5563', dark: '#B8C4D3' },
        accent: { light: '#D1D5DB', dark: '#A3BFFA' },
      },
      boxShadow: {
        'xl': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      fontFamily: {
        sans: ['Roboto', 'Inter', 'sans-serif'], // Roboto как основной
      },
    },
  },
  plugins: [],
};
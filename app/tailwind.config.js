/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4a6ac7',
          dark: '#c7e0fc',
        },
        secondary: {
          DEFAULT: '#64748B',
          dark: '#CBD5E1',
        },
        accent: {
          light: '#60A5FA', 
          dark: '#22D3EE', 
        },
      },
    },
  },
  plugins: [],
};
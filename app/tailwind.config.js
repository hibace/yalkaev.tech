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
          DEFAULT: '#5A8DEE',  // Мягкий синий для светлой темы
          dark: '#4B6A88',     // Темный серо-голубой для темной
        },
        secondary: {
          DEFAULT: '#7A8699',  // Средний серый с голубым для светлой
          dark: '#B8C4D3',     // Светлый серо-голубой для темной
        },
        accent: {
          light: '#E5EDFF',    // Очень светлый синий для светлой
          dark: '#A3BFFA',     // Светло-синий для темной
        },
      },
      boxShadow: {
        'xl': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
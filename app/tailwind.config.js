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
          DEFAULT: '#6B7280',  // Светло-синий с серым для светлой темы
          dark: '#4B6A88',     // Темный серо-голубой для темной (без изменений)
        },
        secondary: {
          DEFAULT: '#4B5563',  // Темный серо-синий для светлой
          dark: '#B8C4D3',     // Светлый серо-голубой для темной (без изменений)
        },
        accent: {
          light: '#D1D5DB',    // Светло-серый с голубым для светлой
          dark: '#A3BFFA',     // Светло-синий для темной (без изменений)
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
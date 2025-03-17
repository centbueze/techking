/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/*.{html,js}"], // Fixed: Removed the trailing comma
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto': 'repeat(auto-fit, minmax(200px, 1fr))', // Custom grid utility
      },
      fontFamily: {
        Outfit: ['Outfit', 'sans-serif'],
        Ovo: ['Ovo', 'serif']
      },
      colors: {
        blackTheme: '#121212', // Define your custom dark background color
      },
    },
  },
  plugins: [],
  screens: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  darkMode: 'selector'
};
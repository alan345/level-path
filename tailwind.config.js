const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': colors.white,
      'blue': colors.blue,
      'purple': colors.purple,
     
      'primary': '#193512',
    }
  },
  plugins: [],
}
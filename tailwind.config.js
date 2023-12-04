/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      width: {
        '1170': '1170px',
      },
      fontFamily: {
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
        inter: ['Inter', 'sans-serif']
      },
      colors:{
        'dark-indigo': '#170F49',
        'bluish-purple': '#6942FF',
        'rum': '#6F6C90',
        'monsoon': '#888888'
      }
    },
  },
  plugins: [],
}
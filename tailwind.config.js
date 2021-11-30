const colors = require('tailwindcss/colors');

module.exports = {
  mode: "jit",
  purge: ['./src/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
          ...colors,
          'green-lime': '#5AAA4E',
      }
    },
  },
  variants: {
    extend: {
      display: ['group-hover'],
    },
  },
  plugins: [],
}

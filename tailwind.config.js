const colors = require('tailwindcss/colors');

module.exports = {
  mode: "jit",
  purge: ['./src/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
          ...colors,
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

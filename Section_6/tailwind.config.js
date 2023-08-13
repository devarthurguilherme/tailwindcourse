/** @type {import('tailwindcss').Config} */
const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        'new-blue': '#243C5A',
        gray: {
          ...colors.gray,
          '900' : '#FF0000'
        }
      },
      spacing: {
        '50' : '20rem'
      }
    },
  },
  plugins: [],
}


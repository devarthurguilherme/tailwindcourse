/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'city': 'url(../img/bg_cidade.jpg)',
        'tailwind': 'url(../img/tailwind.png)'
      })
    },
  },
  plugins: [],
}


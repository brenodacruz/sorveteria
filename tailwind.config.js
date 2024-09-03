/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'grandstander': ['Grandstander', 'cursive'],
        'lobster': ['Lobster', 'cursive'],
        'raleway': ['Raleway', 'cursive'],
      }
    },
  },
  plugins: [],
}


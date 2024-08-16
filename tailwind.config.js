/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html","./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily:{
        Fasthand: ["Fasthand", "cursive"],
        Italiana: ["Italiana", "sans-serif"],
        Jacques: [ "Jacques Francois", "serif"],
        Passions: ["Passions Conflict", "cursive"],
        Great: ["Great Vibes", "cursive"],

      }
    },
  },
  plugins: [require('flowbite/plugin')],
}


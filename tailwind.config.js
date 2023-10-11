/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
  'node_modules/preline/dist/*.js',],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      adelia: [ "cursive"],
    },
    extend: {},
    
  },
  plugins: [
    require('preline/plugin'),
  ],
}


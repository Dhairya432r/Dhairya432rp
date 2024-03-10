const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}",
  'node_modules/preline/dist/*.js',],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      adelia: [ "cursive"],
    },
    colors: {
      'MainGray':'#515252'
    },
    extend: {},
    
  },
  plugins: [
    require('preline/plugin'),
  ],
});
  // "homepage": "https://Dhairya432r.github.io/Dhairya432rp",

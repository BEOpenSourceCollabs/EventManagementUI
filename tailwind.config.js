/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      
    },
  },
  plugins: [ 
   require("@tailwindcss/typography"), require("daisyui"), plugin(function({ addBase }) {
    addBase({
       'h1': { fontSize: "1.75rem" },
     })
   }),],
  daisyui: {
    themes: [{
      cupcake: {
        ...require("daisyui/src/theming/themes")['cupcake'],
      },
    }],
  },
};

/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      'white': '#ffffff',
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
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

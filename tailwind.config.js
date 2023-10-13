// /** @type {import('tailwindcss').Config} */
// export const content = [
//   "./src/**/*.{js,jsx,ts,tsx}",
// ];
// export const theme = {
//   extend: {
//     colors: {
//       amazonclone: {
//         background: "#EAEDED",
//         light_blue: "#232F3A",
//         yellow: "#FEBD69",
//         DEFAULT: "#131921"
//       }
//     }
//   }
// };
// export const plugins = [];

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
       amazonclone:{
        background:"#EAEDED",
        light_blue:"#232F3A",
        yellow:"#FEBD69",
        DEFAULT: "#131921"
       } 
      },
      screens: {
        '2xl': '1440px',
        '3xl': '1600px',
      },
    }
  },
  plugins: [],
}
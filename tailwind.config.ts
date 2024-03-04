import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
    theme: {
    extend: {

      fontFamily:{
        'playfair' : "var(--font-playfair)",
        'archivo' : "var(--font-archivo)",
      },

      colors: {
        special: "#FCE6A4",
        grass: {
          1:"#0E1512" ,
          2:"#121B17" ,
          3:"#132D21" ,
          4:"#113B29" ,
          5:"#25482D" ,
          6:"#20573E" ,
          7:"#28684A" ,
          8:"#2F7C57" ,
          9:"#30A46C" ,
          10:"#33B074" ,
          11:"#3DD68C" ,
          12:"#B1F1CB" 
        },
        amber:{
          1: "#16120C",
          2: "#1D180F",
          3: "#302008",
          4: "#3F2700",
          5: "#4D3000",
          6: "#5C3D05",
          7: "#714F19",
          8: "#8F6424",
          9: "#FFC53D",
          10: "#FFD60A",
          11: "#FFCA16",
          12: "#FFE7B3",
        },
      }
    },
  },
  plugins: [],
};
export default config;

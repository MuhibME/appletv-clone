import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors:{
      backgound: '#000',
      backgroundcontrast:'#111',
      textBlack:'#1d1d1f',
      white:'#fff'
    },
    fontFamily:{
      primary: 'var(--font-roboto)'
    },
    fontSize:{
      sx:'0.75rem',
      sm:'0.875rem',
      base:'1.0625rem',
      lg:['1.1875rem','1.21'],
      xl:'1.3125rem',
      '2xl':'1.5rem',
      '3xl':'1.75rem',
      '4xl':['2.5rem','1.1'],
      '5xl':['4.5rem', '1.05'],
    },
    keyframes:{
      "carousel-move": {
        "0%": { transform: "translateX(0)" },
        "100%": { transform: "translateX(-100%)" },
      },
    },
    animation: {
      "carousel-move": "carousel-move var(--duration,80s) infinite",
    },
    extend: {},
  },
  plugins: [],
};
export default config;

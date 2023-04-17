/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        peach:'hsl(6, 100%, 80%)',
        pink: 'hsl(335, 100%, 65%)',
        paleblue: 'hsl(243, 100%, 93%)',
        grayBlue:'hsl(229, 7%, 55%)',
        cardBG:'hsl(228, 56%, 26%)',
        bg:'hsl(229, 57%, 11%)',
      },
    },
  },
  plugins: [],
}


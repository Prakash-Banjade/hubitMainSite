/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./HOC/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: { max: "575.98px" },
      sm: { min: "576px", max: "767.98px" },
      md: { min: "768px", max: "991.98px" },
      lg: { min: "992px", max: "1199.98px" },
      xl: { min: "1200px", max: "1399.98px" },
      xxl: { min: "1400px" },
    },
    extend: {
      colors: {
        main: "rgba(160, 4, 125, 1)",
        hoverMain: "#c2259f",
      },
      height: {
        84: "21rem",
        94: "22rem",
        98: "27rem",
        100: "28rem",
        103: "32rem",
        104: "32.5rem",
        108: "34rem",
      },
      width: {
        84: "21rem",
        94: "22rem",
        98: "27rem",
        100: "28rem",
        104: "31rem",
        108: "36rem",
        110: "38rem",
      },
      top: {
        104: "28rem",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
};

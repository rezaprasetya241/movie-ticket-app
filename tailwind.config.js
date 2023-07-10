/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
      },
    },
    extend: {
      fontFamily: {
        basic: ["Nunito", "sans-serif"],
      },
      colors: {
        primary: "#009DAE",
        secondary: "#FE5D5D",
        backgroundPage: "#F6F8F9",
        gray: "#A8A8A8",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#021f1a",
        secondary: "#aaa6c3",
        tertiary: "#011411",
        "black-100": "#011411",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "green": "#04332b",
      },
      boxShadow: {
        card: "0px 20px 100px -10px #034338",
      },
      screens: {
        xs: "480px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg3.jpg')",
      },
    },
  },
  plugins: [],
};

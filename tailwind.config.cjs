/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        light_b: "#1d1836", 
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        "space-pattern": "url('/src/assets/space.jpg')",
        "cat-pattern": "url('/src/assets/cat.jpg')",
        "woods-pattern": "url('/src/assets/woods.jpg')",
        "spaceship-pattern": "url('/src/assets/spaceship.jpg')",
        "cosmos-pattern": "url('/src/assets/cosmos.jpg')",
        "earth-pattern": "url('/src/assets/earth.jpg')",
        "stars-pattern": "url('/src/assets/stars.jpg')",
        "alex-pattern": "url('/src/assets/alex.jpeg')",
        "alex2-pattern": "url('/src/assets/alex2.jpeg')",
      },
    },
  },
  plugins: [],
};
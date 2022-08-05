/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      body: ["R-Flex", "sans-serif"],
      title: ["Morganite", "sans-serif"],
      cursive: ["Autumn in November", "cursive"],
    },
    colors: {
      title: "#272E5D",
      primary: "#6D44FF",
    },
    extend: {
      opacity: {
        16: ".16",
      },
      backgroundImage: {
        "card-hover": "linear-gradient(#EFEBFF, #EFEBFF)",
      },
    },
  },
  plugins: [],
}

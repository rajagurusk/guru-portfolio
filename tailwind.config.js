/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        kelly: "#4CBB17",
      },
      fontFamily: {
        sans: ["Roboto Slab", "serif"], // this applies to whole website
      },
    },
  },
  plugins: [],
};

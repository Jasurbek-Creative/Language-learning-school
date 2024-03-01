/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        axiforma: ["Axiforma"],
      },
      colors: {
        primary: "#524FD5",
        gray: '#666680',
        myBlack: '#181B32',
      },
    },
  },
  plugins: [],
};

const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      desktop: { max: "1024px" },
      // => @media (max-width: 1024px) { ... }

      tablet: { max: "768px" },
      // => @media (max-width: 768px) { ... }

      smartphone: { max: "640px" },
      // => @media (max-width: 640px) { ... }
    },
    extend: {
      fontFamily: {
        primary: ["var(--Roboto-font)", ...fontFamily.sans],
        special: ["var(--Ubuntu-font)", ...fontFamily.serif],
      },
      colors: {
        primary: "#363636",
        orange: "#E4471B",
      },
    },
  },
  plugins: [],
};

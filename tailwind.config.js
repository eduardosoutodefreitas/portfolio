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
        primary: ["var(--poppins-font)", ...fontFamily.sans],
        serif: ["var(--philosopher-font)", ...fontFamily.serif],
      },
    },
  },
  plugins: [],
};

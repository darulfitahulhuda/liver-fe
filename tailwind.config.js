/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js", "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {

    extend: {},
    screens: {
      mobile: "414px",
      tablet: "834px",
      desktop: "1240px",
    },
  },
  plugins: [nextui()],
};

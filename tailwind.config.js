/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/html/*.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#d97706", // amber-600
        secondary: "#52525b", // zink-600
        thrid: "#dbeafe", // blue-100
        dark: "#111827", // grey-900
        fourth: "#4f46e5", // indigo-600
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};

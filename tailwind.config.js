/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mont: ["Montserrat Alternates", "sans-serif"],
      },
      colors: {
        primary: "#F7EDE8",
        reds: "#D74A52",
      },
    },
  },
  plugins: [],
};

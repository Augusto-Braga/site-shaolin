/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "Shikamaru",
      },
      colors: {
        shaolinRed: "#EC091D",
      },
      height: {
        header: "100px",
        content: "calc(100vh - 100px)",
      },
    },
  },
  plugins: [],
};

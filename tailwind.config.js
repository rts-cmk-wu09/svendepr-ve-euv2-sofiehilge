/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#F1C40E",
        secondaryColor: "#000000",
        secondaryPColor: "#9E9E9E",
        borderColor: "#D4D4D4",
        menuColor: "#898989",
        inputColor: "#FBFBFB"
      },
      fontFamily: {
        poppins: ["'Poppins', sans-serif;"],
      },
      fontSize: {
        hero: "56px",
        header: "24px",
        bold: "20px",
        semiBold: "16px",
        para: "16px",
        paraSm: "14px",
      },
    },
  },
  plugins: [],
};

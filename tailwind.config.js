/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        btn_color: "#febf00",
        primary: "#a63126",
        secondary: "#c52c1f",
        accent: "#febf00",
        bg_secondary: "#fbf7f2",
      },
    },
  },
  plugins: [require("daisyui")],
};

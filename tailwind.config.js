/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#3E4152",
        secondColor: "#2A2B30",
        buttonColor: "#F0491F",
      },
    },
  },
  plugins: [],
};

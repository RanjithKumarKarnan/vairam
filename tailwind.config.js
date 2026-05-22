/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Cormorant Garamond", "serif"],
        body: ["Poppins", "sans-serif"],
      },
      colors: {
        ivory: "#F9F6F0",
        gold: "#C9A84C",
        "gold-light": "#E8D5A3",
        "gold-dark": "#A07830",
        obsidian: "#0A0A0A",
        charcoal: "#1A1A1A",
        "warm-gray": "#6B6B6B",
        "light-gray": "#E8E8E8",
        cream: "#FDFBF7",
      },
    },
  },
  plugins: [],
};
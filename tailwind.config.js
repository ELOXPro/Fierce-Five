/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        toony: ["toony", "sans-serif"],
        stitch: ["stitch", "sans-serif"],
        jackpot: ["jackpot", "sans-serif"],
        extra: ["extra", "sans-serif"],
      },
      backgroundImage: {
        orangeback: "url('/assets/orange background.jpg')",
        button: ["url('/assets/back.png')"],
      },
    },
  },
  plugins: [],
};

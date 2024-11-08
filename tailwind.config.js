/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        toony: ["toony", "sans-serif"],
        stitch: ["stitch", "sans-serif"],
      },
      backgroundImage: {
        'orangeback': "url('/src/assets/orange background.jpg')",
      },
    },
  },
  plugins: [],
};

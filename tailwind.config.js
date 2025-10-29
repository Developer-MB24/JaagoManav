/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: { serif: ["Georgia", "serif"] },
      colors: {
        primary: { DEFAULT: "#FF671F", hover: "#e55c1c" },
        secondary: { DEFAULT: "#046A38", hover: "#03572f" }
      },
      boxShadow: { 'soft': '0 10px 25px rgba(0,0,0,0.08)' }
    },
  },
  plugins: [],
}

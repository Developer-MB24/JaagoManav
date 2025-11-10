/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // keep your serif default
        serif: ["Georgia", "serif"],

        // your existing sans stack (kept)
        sans: [
          "Figtree",
          "ui-sans-serif",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],

        // NEW: app-level roles
        title: ["Caveat", "cursive"], // for headings/titles
        paragraph: ["Nunito", "Figtree", "Arial", "sans-serif"], // for body copy

        // (optional) direct names if you want to use them explicitly
        nunito: ["Nunito", "Figtree", "Arial", "sans-serif"],
        caveat: ["Caveat", "cursive"],
      },
      colors: {
        primary: { DEFAULT: "#FF671F", hover: "#e55c1c" },
        secondary: { DEFAULT: "#046A38", hover: "#03572f" },
      },
      boxShadow: { soft: "0 10px 25px rgba(0,0,0,0.08)" },
    },
  },
  plugins: [],
};

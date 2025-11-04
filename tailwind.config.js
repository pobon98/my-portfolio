/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Enables dark mode using a class on <html>
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4f46e5", // Indigo-600
          light: "#6366f1",   // Indigo-500
          dark: "#3730a3",    // Indigo-800
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 15px rgba(99,102,241,0.3)",
      },
      animation: {
        "blob": "blobMove 10s infinite",
        "fade-in": "fadeIn 0.6s ease-in-out",
      },
      keyframes: {
        blobMove: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(20px, -20px) scale(1.05)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.98)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};

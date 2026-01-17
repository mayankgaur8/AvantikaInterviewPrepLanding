/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#6D28D9",
          DEFAULT: "#7C3AED",
          light: "#8B5CF6",
          soft: "#A78BFA",
          border: "#C4B5FD",
        },
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, #6D28D9 0%, #8B5CF6 100%)",
      },
   
 
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
};

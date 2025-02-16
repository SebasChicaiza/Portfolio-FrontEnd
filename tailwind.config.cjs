/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,cjs}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#64ffda", // Verde neón
        secondary: "#8892b0", // Gris azulado
        dark: "#0a192f", // Azul profundo (fondo)
        light: "#ccd6f6", // Blanco azulado (texto)
        accent: "#f8e71c", // Amarillo brillante (detalles)
      },
      animation: {
        "fade-in": "fadeIn 1s ease-in-out",
        "slide-up": "slideUp 1s ease-in-out",
        "slide-left": "slideLeft 1s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        slideLeft: {
          "0%": { transform: "translateX(100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
      },      
    },
  },
  plugins: [],
};
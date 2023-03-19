/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      'sm': {'max': '767px'},
      'md': {'min': '768px', 'max': '1365px'},
      'lg': {'min': '1366px'}
    },
    extend: {
      backgroundImage: {
        'sun': "url('/src/assets/sunnyclouds.png')",
        'theme': "url('/src/assets/cover.png')",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-9deg)" },
          "50%": { transform: "rotate(9deg)" }
        }
      },
      animation: {
        wiggle: "wiggle 200ms ease-in-out"
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'sun': "url('/src/assets/sunnyclouds.png')",
        'theme': "url('/src/assets/cover.png')",
      }  
    },
  },
  plugins: [],
}
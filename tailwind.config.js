/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // add this line
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    // if you have other folders, add their paths too, like this:
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#1F3C42",
        grey: "#8E8E8E"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
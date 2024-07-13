/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      'montserrat': ["Montserrat", "sans-serif"],
      'roboto': ["Roboto", "sans-serif"],
      },
      colors: {
        'purple': '#6558B1',
        'yellow': '#FFF323'
      }
    },
  },
  plugins: [],
}
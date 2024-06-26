/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        acme: ['Acme', 'sans-serif'],
        paci: ['Pacifico', 'sans-serif']
      }
    },
  },
  plugins: [
  ],
}


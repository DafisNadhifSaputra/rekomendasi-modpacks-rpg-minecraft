/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'minecraft': ['"Press Start 2P"', 'cursive'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        's-tier': '#ff79c6',
        'a-tier': '#50fa7b',
        'b-tier': '#f1fa8c',
        'c-tier': '#ffb86c',
        'd-tier': '#ff5555',
      }
    },
  },
  plugins: [],
}

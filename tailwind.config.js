/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontWeight: {
        'custom': 400, // Assigning a numeric value (e.g., 400 for normal)
        'semi-bold': 500
      },
    },
  },
  plugins: [],
}
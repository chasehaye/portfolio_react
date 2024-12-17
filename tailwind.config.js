/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",  // Ensures that Tailwind applies to your React files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


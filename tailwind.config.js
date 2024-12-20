/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",  // Ensures that Tailwind applies to your React files
  ],
  theme: {
    extend: {
      colors: {
        c1: '#C5C6C7',
        c2: '#66FCF1',
        c3: '#45A29E',
        c4: '#10191F',
        c5: '#0B0c10',
      },
      boxShadow: {
        c3: "var(--shadow-c3)", // Use the shadow defined in CSS variable
      },
    },
  },
  plugins: [],
}


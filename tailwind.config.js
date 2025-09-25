/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        secondary: '#fbbf24',
        accent: '#10b981',
        card: '#fff',
        background: '#f3f4f6',
        muted: '#e5e7eb',
      },
      boxShadow: {
        card: '0 2px 8px 0 rgba(0,0,0,0.07)',
      },
    },
  },
  plugins: [],
}

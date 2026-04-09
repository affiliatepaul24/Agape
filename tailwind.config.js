/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#FFD100',
        'gold-light': '#FFE14D',
        'gold-dark': '#E6BC00',
        dark: '#0A0A0A',
        surface: '#141414',
        'surface-2': '#1E1E1E',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Lato"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

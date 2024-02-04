/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  purge: {
    enabled: true,
    content: ['./src/**/*.{html,ts}'],
  },
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}

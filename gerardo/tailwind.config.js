/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"
  ],
  theme: {
    colors: {
      'primary': '#000',
      'primary_alt': '#FFF',
      'accent': '#666',
      'error_msg': 'rgb(185 28 28)'
    },
  },
  plugins: [],
}

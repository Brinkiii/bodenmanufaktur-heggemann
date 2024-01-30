/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: '8px',
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
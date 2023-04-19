/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'text-hover-color': '#cb8161',
        'green-color': '#24b256',
        'red-color': 'rgb(241,30,30)'
      },
    },
  },
  plugins: [],
}


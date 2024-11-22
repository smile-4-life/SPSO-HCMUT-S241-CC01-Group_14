/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: {
          DEFAULT: '#F40F0F',
          light: '#FD7D7D',
        },
        blue: {
          DEFAULT: '#0388B4',
          dark: '#044CD3',
        },
        green: {
          DEFAULT: '#07C656',
        },
        gray: {
          DEFAULT: '#D9D9D9',
          light: '#F2F2F2',
          dark: '#808080',
        },
      },
    },
  },
  plugins: [],
}


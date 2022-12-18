/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      yellow: '#fbcf0e',
      white: '#fff',
      grey: 'rgb(228, 224, 224)',
      darkGrey: 'rgb(89, 87, 87)',
      blue: 'rgb(44, 178, 196)',
    },
    fontSize: {
      small: ['13px', { lineHeight: '160%' }],
      medium: '16px',
      large: '20px',
    },
  },
  plugins: [],
};

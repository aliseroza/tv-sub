const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      mainColor: "#012e57",
      secondColor: "#f64953",
      whatsapp: "#25D366"
    },
    container: {
      center: true,
      default: '1rem',
      sm: '2rem',
      lg: '3rem',
      xl: '4rem',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

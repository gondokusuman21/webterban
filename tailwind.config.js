module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Inter'],
      'serif': ['Roboto Slab'],
    },
    extend: {
      colors: {
        'yellow': '#ffd900',
        'black': '#000000'
      },
      screens: {
        'xsm': '350px'
      }
    },
  },
  variants: {

  },
  plugins: [require('@tailwindcss/typography')],
};

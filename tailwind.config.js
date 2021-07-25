const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Inter'],
      'serif': ['Roboto Slab'],
    },
    extend: {
      fontSize: {
        'xxs': '0.625rem'
      },
      height: {
        '1/10-screen': '10vh',
        '9/10-screen': '90vh'
      },
      colors: {
        'yellow': '#ffd900',
        'black': '#000000',
        'amber': colors.amber
      },
      screens: {
        'xsm': '350px'
      },
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        '3/10': '30%',
        '2/5': '40%',
        '7/12': '58.3333%',
        '32': '8rem',
        '36': '9rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '28': '7rem'
      },
      minWidth: {
        '0': '0',
        '1/4': '25%',
        '2/5': '40%',
        '1/2': '50%',
        '3/10': '30%',
        '3/4': '75%',
        'full': '100%',
        '32': '8rem',
        '36': '9rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '28': '7rem'
      },
      minHeight: {
        '9/10-screen': '90vh'
      }
    },
  },
  variants: {

  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ],
};

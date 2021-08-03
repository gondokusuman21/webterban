const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Inter', 'Helvetica', 'Arial'],
      'serif': ['Roboto Slab'],
      'handwriting': ['Leckerli One'],
    },
    scale: {
      '0': '0',
      '25': '.25',
      '35': '.35',
      '50': '.5',
      '75': '.75',
      '90': '.9',
      '95': '.95',
      '100': '1',
      '105': '1.05',
      '110': '1.1',
      '125': '1.25',
      '150': '1.5',
      '200': '2',
    },
    extend: {
      fontSize: {
        'xxs': '0.625rem'
      },
      height: {
        '1/10-screen': '10vh',
        '9/10-screen': '90vh',
        '128': '32rem'
      },
      width: {
        '128': '32rem'
      },
      colors: {
        'light-gray': '#EFEFEF',
        'dark-green': '#006960',
        'dark-red': '#FF1E00',
        'yellow': '#FFB63A',
        'orange': '#FF5E00',
        'dark-blue': '#0064FF',
        'med-blue': '#4F93FC',
        'light-blue': '#B2D0FE',
        'hero-blue': '#578ae8',
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

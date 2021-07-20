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
      },
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        '3/10': '30%',
        '2/5': '40%',
        '7/12': '58.3333%',
        '32': '8rem',
        '36': '9rem'
      },
      minWidth: {
        '0': '0',
        '1/4': '25%',
        '2/5': '40%',
        '1/2': '50%',
        '3/10': '30%',
        '3/4': '75%',
        'full': '100%',
      },
    },
  },
  variants: {

  },
  plugins: [require('@tailwindcss/typography')],
};

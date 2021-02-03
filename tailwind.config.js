module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': { 'min': '576px', 'max': '768px' },
      'md': { 'min': '769px', 'max': '992px' },
      'lg': { 'min': '993px', 'max': '1200px' },
      'xl': { 'min': '1201px', 'max': '1400px' },
      '2xl': { 'min': '1401px' }
    },
    extend: {
      screens: {
        'xs': { 'max': '575px' }
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active']
    },
  },
  plugins: [],
}

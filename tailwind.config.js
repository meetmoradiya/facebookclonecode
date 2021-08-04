module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html',
  './src/**/*.{js,jsx,ts,tsx,vue}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors :{
        'btn-blue':'#1877f2',
        'btn-green':'#42b72a'
      }
    },
  },
  variants: {},
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
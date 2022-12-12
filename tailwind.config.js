/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,vue}'],
  theme: {
    extend: {
      keyframes: {
        twinkle: {
          '0%, 100%': {
            opacity: '1'
          },
          '50%': {
            opacity: '0'
          },
        }
      }
    }
  },
}

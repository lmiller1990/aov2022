/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*'],
  theme: {
    extend: {
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
}

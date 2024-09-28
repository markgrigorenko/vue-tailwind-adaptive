/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        marquee: 'marquee 15s linear infinite',
      },
      fontFamily: {
        'serif': ['Merriweather', 'serif'],
        'golos': ['Golos Text', 'sans-serif'],
      },
    },
  },
  plugins: [
      require('daisyui'),
  ],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-diagonal': 'linear-gradient(45deg, #6675f7, #57007b)',
      },
    },
  },
  plugins: [],
}

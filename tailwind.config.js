/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        offwhite: '#EDEDED',
      },
      borderColor: {
        'edge':'rgba(237, 237, 237, 0.15)',
      },
      backgroundImage: {
        'tf-hero': 'linear-gradient(180deg, rgba(255, 255, 255, 0.26) 0%, rgba(255, 255, 255, 0.00) 64.23%)',
      },
      fontFamily: {
        spacegrotesk: ['Space Grotesk', 'sans-serif'],
        geistmono: ['Geist Mono'],
        geist: ['Geist','sans-serif'], 
      },
    },
  },
  plugins: [],
}
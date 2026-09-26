/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      colors: {
        ink: '#181818',
        graphite: '#2d2a26',
        champagne: '#d7b46a',
        pearl: '#f7f2e8',
        porcelain: '#fbfaf7',
        forest: '#173f35',
        wine: '#7a2639',
      },
      boxShadow: {
        soft: '0 18px 60px rgba(24, 24, 24, 0.12)',
      },
    },
  },
  plugins: [],
};

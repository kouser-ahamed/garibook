/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-gb': '#0e52ff',
        'primary-gb-hover': '#0038c4',
        'warning-gb': '#fdd300',
        'warning-gb-hover': '#e6c003',
        'dark-gb': '#121212',
        'dark-gb-card': '#1a1a1a',
        'light-gray-gb': '#f1f6ff',
        'bg-card': '#f5f8ff',
        'border-color': '#dee7f2',
        'border-light': '#e9e9e9',
        'text-muted': '#888888',
        'text-light': '#9d9d9d',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        heading: ['Outfit', 'Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'gb-sm': '0 4px 12px rgba(0, 0, 0, 0.05)',
        'gb-md': '0 8px 24px rgba(14, 82, 255, 0.08)',
        'gb-lg': '0 16px 36px rgba(0, 0, 0, 0.12)',
        'gb-btn': '0 4px 18px rgba(14, 82, 255, 0.28)',
        'gb-btn-hover': '0 8px 24px rgba(14, 82, 255, 0.38)',
        'gb-warning': '0 4px 18px rgba(253, 211, 0, 0.32)',
        'gb-warning-hover': '0 8px 24px rgba(253, 211, 0, 0.45)',
      },
      keyframes: {
        moveCity: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '-1200px 0' },
        },
        driveCar: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-2px)' },
        },
        blinkCursor: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        navSlideDown: {
          'from': { transform: 'translateY(-100%)' },
          'to': { transform: 'translateY(0)' },
        },
        modalPop: {
          'from': { transform: 'scale(0.92)', opacity: '0' },
          'to': { transform: 'scale(1)', opacity: '1' },
        },
      },
      animation: {
        moveCity: 'moveCity 35s linear infinite',
        driveCar: 'driveCar 1.6s ease-in-out infinite',
        blinkCursor: 'blinkCursor 0.9s step-end infinite',
        navSlideDown: 'navSlideDown 0.4s ease forwards',
        modalPop: 'modalPop 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};

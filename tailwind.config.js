/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#0D0F12',
          card: '#151820',
          hover: '#1C2030',
        },
        violet: {
          DEFAULT: '#6366F1',
          light: '#818CF8',
          dark: '#4F46E5',
        },
        lime: {
          DEFAULT: '#10B981',
          light: '#34D399',
          bright: '#84CC16',
        },
        orange: {
          DEFAULT: '#F97316',
          light: '#FB923C',
        },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

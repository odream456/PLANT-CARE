  /** @type {import('tailwindcss').Config} */
  export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          eco: {
            50: '#f0f9f4',
            100: '#dcf2e3',
            200: '#bce5c9',
            300: '#8ed2a6',
            400: '#5ab87f',
            500: '#379963',
            600: '#287a4f',
            700: '#216241',
            800: '#1d4e35',
            900: '#18412d',
          }
        },
        fontFamily: {
          sans: ['Inter', 'system-ui', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }

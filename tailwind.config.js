/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          primary: {
            blue: '#1a237e', // Tono 500
            100: 'hsl(236, 100%, 96%)', // Tono 100 (más claro)
            200: 'hsl(236, 100%, 90%)', // Tono 200 (más claro)
            300: 'hsl(236, 100%, 80%)', // Tono 300 (más claro)
            400: 'hsl(236, 100%, 70%)', // Tono 400 (más claro)
            500: '#1a237e', // Tono 500 (color base)
            600: 'hsl(236, 100%, 40%)', // Tono 600 (más oscuro)
            700: 'hsl(236, 100%, 30%)', // Tono 700 (más oscuro)
            800: 'hsl(236, 100%, 20%)', // Tono 800 (más oscuro)
            900: 'hsl(236, 100%, 10%)', // Tono 900 (más oscuro)
          },
        }
      },
    }
  },
  plugins: [],
}


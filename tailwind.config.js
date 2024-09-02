/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins:  "Poppins"
      },
      colors:{
        primary: '#ffffff',
        secondary: '#ffed4a',
        danger: '#e3342f'
      }, 
      backgroundColor:{
        page: '#f8fafc',
        body: '#ffffff',
        footer: '#1a202c',
        nav: '#000000'
      }
    },
  },
  plugins: [],
}


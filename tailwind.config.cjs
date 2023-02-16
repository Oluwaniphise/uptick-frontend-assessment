/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: { 
      DEFAULT: '1.5rem',
    
     },
      
    },
    screens: {
      sm: { min: '640px' },
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      max_sm: { max: '640px' }
    },
    colors: {
      black: '#0A0F29',
      white:'#ffffff'
    

    },
    extend: {
      fontFamily: {
        Roboto: ['Roboto Mono', 'sans-serif'],
        
      }
    },
  },
  plugins: [],
}

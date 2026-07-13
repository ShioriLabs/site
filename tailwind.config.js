/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        branding: '#F55875',
        ink: '#2D2D2D',
        paper: '#FFFFFF',
        border: '#CBCBCB'
      },
      fontFamily: {
        sans: [
          'Quicksand',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Helvetica Neue',
          'sans-serif'
        ]
      }
    }
  },
  plugins: []
}

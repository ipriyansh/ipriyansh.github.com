module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': {
          900: '#121212',
          800: '#1E1E1E',
          700: '#2E2E2E'
        },
        'custom-red': {
          600: '#DC2626'
        }
      }
    },
  },
  plugins: [],
}

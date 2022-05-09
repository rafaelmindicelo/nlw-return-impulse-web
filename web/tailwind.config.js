module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        brand: {
          300: '#996DFF',
          500: '#8257E6'
        }
      },
      borderRadius: {
        md: '4px'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('@tailwindcss/forms')
  ],
}

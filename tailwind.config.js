/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './index.html',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          primary: "#1f2937",
          secondary: "#4b5563",
          // Add more dark mode colors here
        },
        light: {
          primary: "red",
          secondary: "#f3f4f6",
          // Add more light mode colors here
        },
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    // Any other PostCSS plugins you may need
  ],
}


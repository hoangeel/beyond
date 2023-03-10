/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'section': "url(/images/section.png)",
        'header': "linear-gradient(180deg, #EEFAFE 0%, rgba(238, 250, 254, 0) 97.92%, rgba(238, 250, 254, 0) 100%);",

      }
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },

  },
  plugins: [],
}

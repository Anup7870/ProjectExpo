/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'gardient-1': "linear-gradient(138deg, rgba(255,2,207,1) 34%, rgba(20,36,152,1) 100%)",
      }
    },
  },
  plugins: [],
}
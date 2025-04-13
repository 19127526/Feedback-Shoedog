/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'feedback_img': 'url("/images/bg-feedback.jpg")',
      },
      colors: {
        'feedback_color' : 'rgb(255, 136, 0)',
      }
    },
  },
  plugins: [],
}
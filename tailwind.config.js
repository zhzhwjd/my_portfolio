/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily : {
         nanum: ['"Nanum Gothic"', 'sans-serif'],
         Pretendard : ['"Pretendard"'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}


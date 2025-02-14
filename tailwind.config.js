///** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors:{
         /* blue */
    primaryColor: '#002366',
    secondaryColor: '#6699CC',
    thirdColor: '#FFFFFF',
    fourthColor: '#999999', 
    darkColor: '#000000',
    mutedColor: '#444444', 
      },
      fontFamily: {
        'mainFontFamily': ['Angel'],
        'headingFont': ['serif'],
        'paragraphFont': ['sans-serif'],
      },
    },
  },
  plugins: [],
}


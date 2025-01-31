/** @type {import('tailwindcss').Config} */
export default {
  content:  [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionDuration: {
        '1500': '1500ms', 
      },
      screens: {
        'xs': '480px', 
        'sm': '640px', 
        'md': '768px', 
        'lg': '1024px', 
        'xl': '1240px', 
        '2xl': '1536px', 
        'xxl': '1600px', 
        
      },
      backgroundImage:{
        
        'radial-gradient-l': 'radial-gradient(circle at left,var(--tw-gradient-stops))',
        'radial-gradient-b': 'radial-gradient(ellipse at bottom,var(--tw-gradient-stops))',
        'dual-gradient': 'radial-gradient(circle at top left, var(--tw-gradient-stops))',
        'radial-both': "radial-gradient(circle at bottom right, var(--tw-gradient-stops))",
      }, 
      letterSpacing: {
        'wider-than-wide': '0.4em', 
      },
      colors: {
          primary: "#38B73C",
          secondary: "#1C1C1C",
          accent: "#00FF08"
      },
      fontFamily: {
        ShareTech: ["Share Tech", "serif"],
        SourceCodePro: ["Source Code Pro", "serif"],
        SeaweedScript: ["Seaweed Script"],
        
      }
    },
  },
  plugins: [],
}


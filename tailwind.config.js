// tailwind.config.js
/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin")


module.exports = {
  content: ['./src/**/*.{js,jsx,jsx,ts,tsx,css}'],
  darkMode: 'media',
  mode: "jit",
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        jump: {
          "0%, 100%": { transform: "translateY(0)" },
          "30%, 70%": { transform: "translateY(-1rem)" },
        }
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        jump: "jump .5s ease forwards"
      },
      backgroundImage: {
      },
      fontFamily: {
        "figtree": ["Figtree", "sans-serif"]
      },
      colors: {
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function({ addVariant }) {
      addVariant("native", "&::part(native)")
      addVariant("scroll", "&::part(scroll)")
      addVariant("image", "&::part(image)")
      addVariant("background", "&::part(background)")
      addVariant("content", "&::part(content)")
      addVariant("content", "&::part(detail-icon)")
      addVariant("container", "&::part(container)")
      addVariant("label", "&::part(label)")
    })
  ],
}
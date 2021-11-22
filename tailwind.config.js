const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')
const selectorParser = require('postcss-selector-parser')


module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors,
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['dark'],
      textColor: ['dark'],
    },
  },
  plugins: [
    plugin(function ({ addVariant, prefix, e }) {
      addVariant('dark', ({ modifySelectors, separator }) => {
        modifySelectors(({ selector }) => {
          return selectorParser((selectors) => {
            selectors.walkClasses((sel) => {
              sel.value = `dark${separator}${sel.value}`
              sel.parent.insertBefore(sel, selectorParser().astSync(prefix('.dark-mode ')))
            })
          }).processSync(selector)
        })
      })
    })
  ],
}

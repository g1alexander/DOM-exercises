module.exports = {
  purge: ["./public/**/*.html"],
  darkMode: "class", //or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      xsm: "320px",
      md: "768px",
      lg: "1024px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

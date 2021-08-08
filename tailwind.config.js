module.exports = {
  darkMode: "class", // or 'media' or 'class'

  // @see https://tailwindcss.com/docs/upcoming-changes
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./src/components/**/*.js", "./pages/**/*.js"],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      textOpacity: ["dark"],
    },
  },
  plugins: [require("tailwindcss"), require("precss"), require("autoprefixer")],
};

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: "#4F3281",
        secondary: "#8251d6",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

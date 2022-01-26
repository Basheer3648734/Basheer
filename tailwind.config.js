module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      brand: "#9AE8F2",
      cyan: "#5ADEDE",
    },
    extend: {},
  },
  plugins: [],
};

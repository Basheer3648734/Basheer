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
      sky: "#87ceeb",
      error: "#FFD2D2",
      success: "#DFF2BF",
      errorText: "#D8000C",
      successText: "#4F8A10",
      warning: "#FEEFB3",
      warningText: "#9F6000",
      github: "#1d1a1a",
      twitter: "#00acee",
      facebook: "#4267B2",
      instagram: " #e95950",
    },
    extend: {},
  },
  plugins: [],
};

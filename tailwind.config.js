const { default: daisyui } = require("daisyui");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light", // Tema claro
      "dark", // Tema escuro
      "cupcake", // Tema Cupcake
      "synthwave", // Tema Synthwave
      "retro", // Tema Retro
      "valentine", // Tema Valentine
      "halloween", // Tema Halloween
    ],
  },
};

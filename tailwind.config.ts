/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#313550",
        secondary: "#8eaec6",
        tertiary: "#e9eaec",
        quaternary: "#fad02b",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        customlight: {
          primary: "#313550",
          "primary-content": "#e9eaec",
          secondary: "#8eaec6",
          "secondary-content": "#313550",
          tertiary: "#e9eaec",
          "tertiary-content": "#313550",
          quaternary: "#fad02b",
          "quaternary-content": "#313550",
          "base-content": "#313550",
          "base-100": "#e9eaec",
          "base-200": "#a2a4a5",
          "base-300": "#8eaec6",
        },
      },
    ],
  },
};

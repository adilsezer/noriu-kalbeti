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
        // Primary color shades
        primary: "#272727",
        "primary-light": "#3e3e3e", // Lighter shade of primary
        "primary-dark": "#1c1c1c", // Darker shade of primary
        "primary-focus": "#ebc9a9",

        // Secondary color shades
        secondary: "#f6f3ef",
        "secondary-light": "#fdfaf6", // Lighter shade of secondary
        "secondary-dark": "#ebe8e5", // Darker shade of secondary
        "secondary-focus": "#ebc9a9",

        // Tertiary color shades
        tertiary: "#9eb4cd",
        "tertiary-light": "#b7c7da", // Lighter shade of tertiary
        "tertiary-dark": "#8599b0", // Darker shade of tertiary
        "tertiary-focus": "#ebc9a9",

        // Quaternary color shades
        quaternary: "#ebc9a9",
        "quaternary-light": "#f2ddd1", // Lighter shade of quaternary
        "quaternary-dark": "#d3b490", // Darker shade of quaternary
        "quaternary-focus": "#9eb4cd",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        customlight: {
          primary: "#272727",
          "primary-content": "#f6f3ef",
          secondary: "#f6f3ef",
          "secondary-content": "#272727",
          tertiary: "#9eb4cd",
          "tertiary-content": "#272727",
          quaternary: "#ebc9a9",
          "quaternary-content": "#272727",
          "base-content": "#272727",
          "base-100": "#f6f3ef",
          "base-200": "#f6f3ef",
          "base-300": "#f6f3ef",
          "--rounded-box": "1rem",
          "--rounded-btn": ".5rem",
          "--rounded-badge": "1.9rem",
          "--animation-btn": ".25s",
          "--animation-input": ".2s",
          "--btn-text-case": "uppercase",
          "--navbar-padding": ".5rem",
          "--border-btn": "1px",
        },
      },
    ],
  },
};

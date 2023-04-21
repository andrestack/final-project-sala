/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        focus: {
          100: "#005b5d",
          200: "#0f3460",
          300: "#87a878",
          400: "#b4c7a8",
        },
        energy: {
          100: "#ff7f11",
          200: "#ffc20e",
          300: "#d65108",
          400: "#f1c232",
        },
      },

      plugins: [],
    },
  },
};

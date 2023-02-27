/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: [
      {
        mytheme: {
          primary: "#FF7F11",
          secondary: "#0077B6",
          accent: "#42273B",
          neutral: "#16262E",
          "base-100": "#F5F5F5",
          "base-200": "#EBEBEB",
          "base-300": "#E0E0E0",
          info: "#5A72D3",
          success: "#107538",
          warning: "#F3DB6D",
          error: "#FB5059",
        },
      },
    ],
    base: true,
  },
};

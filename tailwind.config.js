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
          primary: "#F6AE2D",
          secondary: "#33658A",
          accent: "#7A306C",
          neutral: "#F3F4F6",
          "base-100": "#E8E9ED",
          "base-200": "#D3D5DD",
          "base-300": "#D0D4DC",
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

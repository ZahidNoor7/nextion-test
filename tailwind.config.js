/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: "Oswald, ui-serif",
      },
      fontSize: {
        xs: "10px",
        sm: "14px",
        md: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "22px",
        "3xl": "24px",
        "4xl": "28px",
      },
      screens: {
        xs: "320px",
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
        "2xl": "1536px",
        "3xl": "1920px",
      },
      colors: {
        surface: "#eff5f8",
        disable: "#f0f5f7",
        purple: "#6036D8",
        purple_light: "#E7E1F9",
        red: "#d83636",
        red_light: "#f9e1e1", // Fixed missing hash symbol
        green: "#15847B",
        green_light: "#dcedeb",
        parrot_green: "#97BE50",
        white: "#FFFFFF",
        text: "#3C3D3E",
        text_light: "#828282",
        border: "#C4C4C4", // Fixed missing hash symbol
        linear_gradient: "linear-gradient(45deg, black, transparent)",
      },
      spacing: {
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        "2xl": "32px",
        "3xl": "40px",
        "4xl": "50px",
        "5xl": "60px",
      },
      borderRadius: {
        xs: "4px",
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        "4xl": "2rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

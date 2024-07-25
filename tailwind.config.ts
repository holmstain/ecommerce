import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        Primary: "#00346f",
        PrimaryVariant: "#A33c03",
        bgVariant: "#00000",
        buttonHover: "#DB6A33 ",
        buttonHoverVariant: "#6DBOEB",
        textColorPrimary: "#FFFFF",
        textColorVariant: "#00346f ",
        textColorSlider: "#A33c03 ",
        bg: "#8EACBB"
      }
    },
  },
  plugins: [],
};
export default config;
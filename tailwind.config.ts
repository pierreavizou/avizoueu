import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "blue-purple-radial":
          "radial-gradient(circle, rgb(var(--background-radial-start-rgb)) 0%, rgb(var(--background-end-rgb)) 100%)",
        "gradient-blue-purple":
          "linear-gradient(300deg, rgb(var(--background-start-rgb)) 0%, rgb(var(--background-end-rgb)) 100%)",
      },
      fontFamily: {
        russo: ["var(--font-russo)"],
        cyberpunk: "Cyberpunk",
      },
      boxShadow: {
        inset: "inset 0px 0px 7px 4px rgba(0,0,0,0.48)",
      },
      colors: {
        blue: {
          DEFAULT: "#275fe8",
          dark: "#16347b",
        },
        purple: {
          DEFAULT: "#591eff",
        },
        red: {
          DEFAULT: "#dd435f",
        },
        yellow: {
          cyber: "#fffd00",
        },
        bgColor: "#f6f8fa",
      },
    },
  },
  plugins: [],
};
export default config;

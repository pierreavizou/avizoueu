import type { Config } from "tailwindcss";
// import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
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
        russo: "var(--font-russo)",
        cyberpunk: "var(--font-cyberpunk)",
        // sans: ["var(--font-sans)", ...fontFamily.sans],
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
        green: {
          "50": "#edfcf4",
          "100": "#d2f9e2",
          "200": "#aaf0ca",
          "300": "#72e3ac",
          "400": "#3fcf8e",
          DEFAULT: "#3fcf8e",
          "500": "#16b371",
          "600": "#0a915b",
          "700": "#08744c",
          "800": "#095c3e",
          "900": "#084c34",
          "950": "#032b1e",
        },
        bgColor: "#f6f8fa",
        // Shadcn
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-animate")],
};
export default config;

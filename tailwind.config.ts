import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        secondary: "#1E293B",
        accent: "#06B6D4",
        ink: "#0F172A",
      },
      boxShadow: {
        premium: "0 24px 80px -32px rgba(15, 23, 42, 0.42)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

export default config;

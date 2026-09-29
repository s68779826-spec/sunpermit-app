import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        solar: {
          bg: "#070A12",
          card: "#0D1424",
          "card-hover": "#131C33",
          border: "#1E293B",
          emerald: "#10B981",
          cyan: "#06B6D4",
          amber: "#F59E0B",
          accent: "#3B82F6",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "glow-emerald": "radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, rgba(7, 10, 18, 0) 70%)",
        "glow-cyan": "radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, rgba(7, 10, 18, 0) 70%)",
        "grid-pattern": "linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2.5s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

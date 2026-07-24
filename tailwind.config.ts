import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                ust: {
                    gold: "#FDB913",
                    "gold-dark": "#E5A50E",
                    "gold-light": "#FEE89A",
                    black: "#1A1A1A",
                    "black-soft": "#2D2D2D",
                    white: "#FFFFFF",
                    gray: "#F5F5F5",
                    "gray-mid": "#E0E0E0",
                    "gray-dark": "#6B6B6B",
                    cream: "#FFFBF0",
                },
            },
            fontFamily: {
                sans: ["Inter", "system-ui", "sans-serif"],
            },
            boxShadow: {
                card: "0 2px 12px rgba(0,0,0,0.08)",
                "card-hover": "0 8px 24px rgba(0,0,0,0.14)",
            },
        },
    },
    plugins: [],
};
export default config;

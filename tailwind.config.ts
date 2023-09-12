import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                "bg-home": "url('/public/assets/images/bg-home.png')",
            },
            colors: {
                "primary-gray": "#282828",
                "dark-gray": "#1B1B1B",
                "secondary-gray": "#151515ED",
            },
        },
    },
    plugins: [],
};
export default config;

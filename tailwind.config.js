/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}", // scan all project files
    ],
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Inter', 'sans-serif'],
                'display': ['Playfair Display', 'serif'],
                'mono': ['JetBrains Mono', 'monospace'],
            },
        },
    },
    plugins: [],
}

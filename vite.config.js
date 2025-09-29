import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  plugins: [
    react(),       // correct plugin for JSX/React
    tailwindcss(), // Tailwind plugin
  ],
  base: '/deep-s_portfolio/',
})

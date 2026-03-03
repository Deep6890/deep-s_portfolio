import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command, mode }) => {
  const isGitHubPages = process.env.GITHUB_PAGES === 'true'
  
  return {
    plugins: [react()],
    base: isGitHubPages ? '/deep-s_portfolio/' : '/',
  }
})

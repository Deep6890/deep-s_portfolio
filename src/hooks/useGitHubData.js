import { useState, useEffect } from 'react'

const GITHUB_USERNAME = 'Deep6890'
const CACHE_KEY = 'github_repos_cache'
const CACHE_TTL = 24 * 60 * 60 * 1000 // 24 hours

export function useGitHubRepos() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchRepos() {
      try {
        // Check cache first
        const cached = localStorage.getItem(CACHE_KEY)
        if (cached) {
          const { data, timestamp } = JSON.parse(cached)
          if (Date.now() - timestamp < CACHE_TTL) {
            setRepos(data)
            setLoading(false)
            return
          }
        }

        const res = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`
        )
        if (!res.ok) throw new Error('GitHub API error')
        const data = await res.json()

        const filtered = data
          .filter(r => !r.fork && !r.private)
          .map(r => ({
            id: r.id,
            name: r.name,
            description: r.description || 'No description',
            stars: r.stargazers_count,
            forks: r.forks_count,
            language: r.language || 'Unknown',
            url: r.html_url,
            updatedAt: r.updated_at
          }))

        localStorage.setItem(CACHE_KEY, JSON.stringify({ data: filtered, timestamp: Date.now() }))
        setRepos(filtered)
      } catch (err) {
        setError(err.message)
        // Fall back to cached data even if stale
        const cached = localStorage.getItem(CACHE_KEY)
        if (cached) {
          const { data } = JSON.parse(cached)
          setRepos(data)
        }
      } finally {
        setLoading(false)
      }
    }

    fetchRepos()
  }, [])

  return { repos, loading, error }
}

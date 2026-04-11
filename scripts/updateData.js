import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const GITHUB_USERNAME = 'Deep6890';
const DATA_FILE = path.join(__dirname, '../src/data/projectsData.js');

async function fetchGitHubRepos() {
  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
      { headers: { 'User-Agent': 'portfolio-updater' } }
    );
    if (!response.ok) throw new Error(`GitHub API ${response.status}`);
    const repos = await response.json();

    return repos
      .filter(repo => !repo.fork && !repo.private)
      .map(repo => ({
        id: repo.id,
        name: repo.name,
        description: repo.description || 'No description',
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        language: repo.language || 'Unknown',
        url: repo.html_url,
        updatedAt: repo.updated_at
      }));
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return [];
  }
}

/**
 * Extract a named export block by finding its balanced brackets.
 * Works regardless of how many nested arrays/objects are inside.
 */
function extractExport(source, exportName) {
  const start = source.indexOf(`export const ${exportName} = [`);
  if (start === -1) return null;
  let depth = 0;
  let i = source.indexOf('[', start);
  const begin = start;
  for (; i < source.length; i++) {
    if (source[i] === '[') depth++;
    else if (source[i] === ']') {
      depth--;
      if (depth === 0) return source.slice(begin, i + 1);
    }
  }
  return null;
}

async function updateDataFile() {
  console.log('Fetching GitHub repositories...');
  const repos = await fetchGitHubRepos();

  if (repos.length === 0) {
    console.log('No repos fetched. Keeping existing data.');
    return;
  }

  const currentData = fs.readFileSync(DATA_FILE, 'utf8');

  const mainProjects = extractExport(currentData, 'mainProjects') || 'export const mainProjects = []';
  const kaggleNotebooks = extractExport(currentData, 'kaggleNotebooks') || 'export const kaggleNotebooks = []';

  const reposJson = JSON.stringify(repos, null, 2);
  const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

  const newContent =
`${mainProjects}

${kaggleNotebooks}

// GitHub Repositories (Auto-updated: ${timestamp} IST)
export const githubRepos = ${reposJson}
`;

  fs.writeFileSync(DATA_FILE, newContent);
  console.log(`✓ Updated ${repos.length} GitHub repositories`);
}

updateDataFile();

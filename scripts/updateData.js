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
    const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`);
    const repos = await response.json();
    
    return repos
      .filter(repo => !repo.fork && !repo.private)
      .map((repo, index) => ({
        id: index + 1,
        name: repo.name,
        description: repo.description || 'No description',
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        language: repo.language || 'Unknown',
        url: repo.html_url
      }));
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return [];
  }
}

async function updateDataFile() {
  console.log('Fetching GitHub repositories...');
  const repos = await fetchGitHubRepos();
  
  if (repos.length === 0) {
    console.log('No repos fetched. Keeping existing data.');
    return;
  }

  const currentData = fs.readFileSync(DATA_FILE, 'utf8');
  
  const mainProjectsMatch = currentData.match(/export const mainProjects = \[[\s\S]*?\n\]/);
  const kaggleMatch = currentData.match(/export const kaggleNotebooks = \[[\s\S]*?\n\]/);
  
  const mainProjects = mainProjectsMatch ? mainProjectsMatch[0] : 'export const mainProjects = []';
  const kaggleNotebooks = kaggleMatch ? kaggleMatch[0] : 'export const kaggleNotebooks = []';
  
  const newContent = `${mainProjects}\n\n${kaggleNotebooks}\n\n// GitHub Repositories (Auto-updated: ${new Date().toLocaleString()})\nexport const githubRepos = ${JSON.stringify(repos, null, 2)}\n`;

  fs.writeFileSync(DATA_FILE, newContent);
  console.log(`✓ Updated ${repos.length} GitHub repositories`);
}

updateDataFile();

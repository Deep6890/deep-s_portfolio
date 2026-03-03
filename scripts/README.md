# Data Update Script

## Setup
```bash
npm install
```

## Usage

### Update GitHub Repos
```bash
npm run update-data
```

This will:
- Fetch all your public GitHub repositories
- Update stars, forks, and language automatically
- Keep mainProjects and kaggleNotebooks unchanged

### For Kaggle Notebooks
Manually add your notebooks to `kaggleNotebooks` array in `src/data/projectsData.js`

## When to Run
- After creating new GitHub repos
- When you want to update stars/forks count
- Before deploying

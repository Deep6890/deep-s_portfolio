import React from 'react'
import { mainProjects, kaggleNotebooks, githubRepos } from '../data/projectsData'
import ProjectCard from '../components/cards/ProjectCard'
import KaggleCard from '../components/cards/KaggleCard'
import RepoCard from '../components/cards/RepoCard'
import GitHubCalendar from '../components/Projects/GitHubCalendar'
import PageHeader from '../components/PageHeader'

export default function Projects() {
  return (
    <section className="min-h-screen bg-white dark:bg-neutral-900">
      <PageHeader />
      <div className="px-4 sm:px-6 md:px-12 lg:px-24 pb-12 sm:pb-16 md:pb-20">
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER */}
        <p className="text-xs tracking-[0.3em] sm:tracking-[0.4em] text-neutral-400 dark:text-neutral-500 uppercase mb-2 sm:mb-3">
          Work
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-neutral-900 dark:text-white mb-4 sm:mb-6">
          Selected Projects
        </h1>
        <p className="text-sm sm:text-base text-neutral-500 dark:text-neutral-400 max-w-2xl mb-12 sm:mb-16">
          A collection of systems, experiments and applied intelligence work.
        </p>

        {/* Main Projects */}
        <div className="mb-12 sm:mb-16">
          <p className="text-xs tracking-[0.3em] text-neutral-400 dark:text-neutral-500 uppercase mb-4 sm:mb-6">Main Projects</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {mainProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* Kaggle Notebooks */}
        <div className="mb-12 sm:mb-16">
          <p className="text-xs tracking-[0.3em] text-neutral-400 dark:text-neutral-500 uppercase mb-4 sm:mb-6">Kaggle Notebooks</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {kaggleNotebooks.map((notebook) => (
              <KaggleCard key={notebook.id} notebook={notebook} />
            ))}
          </div>
        </div>

        {/* GitHub Repositories */}
        <div className="mb-12 sm:mb-16">
          <p className="text-xs tracking-[0.3em] text-neutral-400 dark:text-neutral-500 uppercase mb-4 sm:mb-6">GitHub Repositories</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {githubRepos.map((repo) => (
              <RepoCard key={repo.id} repo={repo} />
            ))}
          </div>
        </div>

        {/* GitHub Calendar */}
        <div className="mb-12">
          <GitHubCalendar />
        </div>

      </div>
      </div>
    </section>
  )
}
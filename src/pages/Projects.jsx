import React from 'react'
import { mainProjects, kaggleNotebooks, githubRepos } from '../data/projectsData'
import ProjectCard from '../components/cards/ProjectCard'
import KaggleCard from '../components/cards/KaggleCard'
import RepoCard from '../components/cards/RepoCard'
import GitHubCalendar from '../components/projects/GitHubCalendar'
import PageHeader from '../components/PageHeader'
import Footer from '../components/Footer'

export default function Projects() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 flex flex-col transition-colors duration-[2000ms] ease-in-out">
      <PageHeader />
      <div className="flex-grow px-2 xs:px-4 sm:px-6 md:px-12 lg:px-24 pb-8 xs:pb-12 sm:pb-16 md:pb-20">
        <div className="max-w-6xl mx-auto">

          {/* HEADER */}
          <p className="text-[9px] xs:text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] text-neutral-400 dark:text-neutral-500 uppercase mb-2 sm:mb-3">
            Work
          </p>
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-light text-neutral-900 dark:text-white mb-3 xs:mb-4 sm:mb-6">
            Selected Projects
          </h1>
          <p className="text-xs xs:text-sm sm:text-base text-neutral-500 dark:text-neutral-400 max-w-2xl mb-8 xs:mb-10 sm:mb-12 md:mb-16">
            Applied intelligence through systems and experimentation
          </p>

          {/* Main Projects */}
          <div className="mb-8 xs:mb-10 sm:mb-12 md:mb-16">
            <p className="text-[9px] xs:text-[10px] sm:text-xs tracking-[0.3em] text-neutral-400 dark:text-neutral-500 uppercase mb-3 xs:mb-4 sm:mb-6">Main Projects</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 xs:gap-4 sm:gap-6">
              {mainProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>

          {/* Kaggle Notebooks */}
          <div className="mb-8 xs:mb-10 sm:mb-12 md:mb-16">
            <p className="text-[9px] xs:text-[10px] sm:text-xs tracking-[0.3em] text-neutral-400 dark:text-neutral-500 uppercase mb-3 xs:mb-4 sm:mb-6">Kaggle Notebooks</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 xs:gap-4 sm:gap-6">
              {kaggleNotebooks.map((notebook) => (
                <KaggleCard key={notebook.id} notebook={notebook} />
              ))}
            </div>
          </div>

          {/* GitHub Repositories */}
          <div className="mb-8 xs:mb-10 sm:mb-12 md:mb-16">
            <p className="text-[9px] xs:text-[10px] sm:text-xs tracking-[0.3em] text-neutral-400 dark:text-neutral-500 uppercase mb-3 xs:mb-4 sm:mb-6">GitHub Repositories</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 xs:gap-4 sm:gap-6">
              {githubRepos.map((repo) => (
                <RepoCard key={repo.id} repo={repo} />
              ))}
            </div>
          </div>

          {/* GitHub Calendar */}
          <div className="mb-6 xs:mb-8">
            <GitHubCalendar />
          </div>

        </div>
      </div>
      <Footer />
    </div>
  )
}
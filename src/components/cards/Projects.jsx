import React from 'react'
import { Link } from 'react-router-dom'
import { mainProjects, kaggleNotebooks, githubRepos } from '../data/projectsData'
import ProjectCard from './ProjectCard'
import KaggleCard from './KaggleCard'
import RepoCard from './RepoCard'
import GitHubCalendar from './GitHubCalendar'

export default function Projects() {
  return (
    <section className="min-h-screen bg-white px-6 md:px-16 lg:px-24 py-20">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="mb-20">
          <p className="text-xs tracking-[0.4em] text-neutral-400 uppercase mb-3">
            Work
          </p>

          <h1 className="text-4xl md:text-6xl font-light text-neutral-900 mb-6">
            Systems I’ve Built
          </h1>

          <p className="text-neutral-500 max-w-2xl">
            A collection of applied intelligence work — from live platforms 
            to experimental data systems and open explorations.
          </p>
        </div>


        {/* MAIN PROJECTS */}
        <div className="mb-28">
          <h2 className="text-xl tracking-wide text-neutral-400 uppercase mb-8">
            Core Builds
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>


        {/* KAGGLE */}
        <div className="mb-28">
          <h2 className="text-xl tracking-wide text-neutral-400 uppercase mb-8">
            Kaggle Research
          </h2>

          <p className="text-neutral-500 mb-10 max-w-xl">
            Explorations around forecasting, behaviour modeling and pattern discovery.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {kaggleNotebooks.map((notebook) => (
              <KaggleCard key={notebook.id} notebook={notebook} />
            ))}
          </div>
        </div>


        {/* GITHUB */}
        <div className="mb-28">
          <h2 className="text-xl tracking-wide text-neutral-400 uppercase mb-8">
            Open Systems
          </h2>

          <p className="text-neutral-500 mb-10 max-w-xl">
            Modular tools, engines and experimental builds shared publicly.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {githubRepos.map((repo) => (
              <RepoCard key={repo.id} repo={repo} />
            ))}
          </div>
        </div>


        {/* ACTIVITY */}
        <div className="mb-28">
          <h2 className="text-xl tracking-wide text-neutral-400 uppercase mb-8">
            Activity
          </h2>

          <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-6">
            <GitHubCalendar />
          </div>
        </div>


        {/* FOOTER */}
        <div className="pt-20 border-t border-neutral-200">
          <Link 
            to="/"
            className="text-sm tracking-wide text-neutral-500 hover:text-neutral-900 transition"
          >
            ← Back to Home
          </Link>
        </div>

      </div>
    </section>
  )
}

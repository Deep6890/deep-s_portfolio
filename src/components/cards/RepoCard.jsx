import React from 'react'
import { Star, GitFork, Code2, ArrowUpRight } from 'lucide-react'

export default function RepoCard({ repo }) {
  return (
    <div className="group border border-neutral-200 dark:border-neutral-700 rounded-2xl p-6 hover:border-neutral-400 dark:hover:border-neutral-600 transition relative">

      {/* Language Label */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-light text-neutral-900 dark:text-white group-hover:tracking-wide transition-all">
          {repo.name}
        </h3>

        {repo.language && (
          <span className="text-[10px] tracking-widest uppercase text-neutral-400 dark:text-neutral-500 flex items-center gap-1">
            <Code2 size={12} />
            {repo.language}
          </span>
        )}
      </div>

      {/* Description */}
      <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-6 line-clamp-2">
        {repo.description}
      </p>

      {/* Stats */}
      <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">

        <div className="flex items-center gap-4">

          <span className="flex items-center gap-1">
            <Star size={14} />
            {repo.stars}
          </span>

          <span className="flex items-center gap-1">
            <GitFork size={14} />
            {repo.forks}
          </span>

        </div>

        <a
          href={repo.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition"
        >
          Open
          <ArrowUpRight size={14} />
        </a>

      </div>

    </div>
  )
}

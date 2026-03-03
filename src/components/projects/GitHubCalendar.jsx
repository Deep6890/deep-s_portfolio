import React from 'react'
import { GitCommit, Activity, ArrowUpRight } from 'lucide-react'

export default function GitHubCalendar() {
  return (
    <section className="mt-24">

      {/* Section Label */}
      <p className="text-xs tracking-[0.35em] text-neutral-400 uppercase mb-4">
        Dev Rhythm
      </p>

      <h2 className="text-2xl md:text-3xl font-light text-neutral-900 mb-6">
        Build Activity
      </h2>

      <p className="text-neutral-500 max-w-xl mb-12">
        A quiet log of consistency — systems evolve through small commits,
        iterations and invisible thinking.
      </p>

      {/* Activity Panel */}
      <div className="border border-neutral-200 rounded-2xl p-6 md:p-10">

        <div className="flex items-center gap-3 mb-6 text-neutral-600">
          <Activity size={18} />
          <span className="text-sm tracking-wide">
            GitHub contribution flow
          </span>
        </div>

        {/* Contribution Graph */}
        <div className="overflow-x-auto mb-10">
          <img
            src="https://ghchart.rshah.org/Deep6890"
            alt="GitHub Contribution Graph"
            className="w-full max-w-3xl"
          />
        </div>

        {/* Minimal Link */}
        <a
          href="https://github.com/Deep6890"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 transition"
        >
          <GitCommit size={16} />
          View Full Activity
          <ArrowUpRight size={14} />
        </a>

      </div>

    </section>
  )
}

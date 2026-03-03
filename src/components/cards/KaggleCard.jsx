import React from 'react'
import { Database, BarChart3, Brain, TrendingUp, Code2 } from 'lucide-react'

const techIcons = {
  'Python': Database,
  'Pandas': BarChart3,
  'Kaggle': TrendingUp,
  'ML': Brain,
  'TensorFlow': Brain,
  'Scikit-learn': BarChart3,
  'Matplotlib': BarChart3,
  'NumPy': Code2,
  'Seaborn': BarChart3
}

export default function KaggleCard({ notebook }) {
  return (
    <div className="group relative border border-neutral-200 dark:border-neutral-700 rounded-2xl overflow-hidden hover:border-neutral-400 dark:hover:border-neutral-600 transition">

      {/* CONTENT */}
      <div className="p-6">

        {/* Title */}
        <h3 className="text-xl font-light text-neutral-900 dark:text-white group-hover:tracking-wide transition-all">
          {notebook.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2 leading-relaxed">
          {notebook.description}
        </p>

        {/* Tags with Icons */}
        <div className="flex flex-wrap gap-2 mt-4">
          {notebook.tags.map((tag) => {
            const Icon = techIcons[tag]
            return (
              <span
                key={tag}
                className="text-xs flex items-center gap-1 px-2 py-1 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
              >
                {Icon && <Icon size={14} />}
                {tag}
              </span>
            )
          })}
        </div>

        {/* Link */}
        <div className="mt-6 text-xs tracking-wide">
          <a
            href={notebook.notebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition"
          >
            Open Notebook →
          </a>
        </div>

      </div>

    </div>
  )
}

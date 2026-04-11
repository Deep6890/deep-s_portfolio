import React, { useRef } from 'react'
import { milestones } from '../data/achievementsData'

const typeStyles = {
  win:       { dot: 'bg-neutral-900 dark:bg-white',          label: 'Win'       },
  build:     { dot: 'bg-neutral-500 dark:bg-neutral-400',    label: 'Build'     },
  education: { dot: 'bg-neutral-300 dark:bg-neutral-600',    label: 'Education' },
  learning:  { dot: 'bg-neutral-400 dark:bg-neutral-500',    label: 'Learning'  },
}

export default function MilestoneTimeline() {
  return (
    <div className="relative">

      {/* Vertical line */}
      <div className="absolute left-[7px] top-2 bottom-2 w-px bg-neutral-200 dark:bg-neutral-800" />

      <div className="space-y-10">
        {milestones.map((m, i) => {
          const style = typeStyles[m.type] || typeStyles.build
          const isWin = m.type === 'win'

          return (
            <div key={m.id} className="relative pl-8 group">

              {/* Dot */}
              <div className={`absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-white dark:border-neutral-900 ${style.dot} transition-transform duration-300 group-hover:scale-125`} />

              {/* Title */}
              <h3 className={`text-base font-light leading-snug mb-2 transition-all duration-300 group-hover:tracking-wide
                ${isWin
                  ? 'text-neutral-900 dark:text-white'
                  : 'text-neutral-700 dark:text-neutral-300'
                }`}>
                {isWin && (
                  <span className="inline-block mr-2 text-[10px] tracking-widest uppercase border border-neutral-300 dark:border-neutral-700 px-1.5 py-0.5 rounded text-neutral-500 dark:text-neutral-400 align-middle">
                    {style.label}
                  </span>
                )}
                {m.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-neutral-500 dark:text-neutral-500 leading-relaxed max-w-xl">
                {m.description}
              </p>

            </div>
          )
        })}
      </div>

    </div>
  )
}

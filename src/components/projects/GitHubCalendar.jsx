import React from 'react'
import { GitHubCalendar as GitHubCalendarLib } from 'react-github-calendar'
import { GitCommit, Activity, ArrowUpRight } from 'lucide-react'
import { useDarkMode } from '../../context/DarkModeContext'

export default function GitHubCalendar() {
  const { isDark } = useDarkMode()

  const lightTheme = {
    light: ['#f5f5f5', '#d4d4d4', '#a3a3a3', '#525252', '#171717'],
    dark:  ['#f5f5f5', '#d4d4d4', '#a3a3a3', '#525252', '#171717'],
  }

  const darkTheme = {
    light: ['#262626', '#404040', '#737373', '#d4d4d4', '#ffffff'],
    dark:  ['#262626', '#404040', '#737373', '#d4d4d4', '#ffffff'],
  }

  return (
    <section className="mt-10 xs:mt-14 sm:mt-20 md:mt-24">

      <p className="text-xs tracking-[0.35em] text-neutral-400 dark:text-neutral-500 uppercase mb-4">
        Dev Rhythm
      </p>

      <h2 className="text-xl xs:text-2xl md:text-3xl font-light text-neutral-900 dark:text-white mb-4 xs:mb-6">
        Build Activity
      </h2>

      <p className="text-sm xs:text-base text-neutral-500 dark:text-neutral-400 max-w-xl mb-8 xs:mb-12">
        A quiet log of consistency — systems evolve through small commits,
        iterations and invisible thinking.
      </p>

      <div className="rounded-2xl p-4 xs:p-6 md:p-10">

        <div className="flex items-center gap-3 mb-8 text-neutral-600 dark:text-neutral-400">
          <Activity size={18} />
          <span className="text-sm tracking-wide">GitHub contribution flow</span>
        </div>

        {/* Calendar */}
        <div className="overflow-x-auto mb-6 xs:mb-10 -mx-2 xs:mx-0">
          <GitHubCalendarLib
            username="Deep6890"
            theme={isDark ? darkTheme : lightTheme}
            colorScheme={isDark ? 'dark' : 'light'}
            blockSize={10}
            blockMargin={3}
            fontSize={11}
            hideColorLegend={false}
            hideMonthLabels={false}
            hideTotalCount={false}
            labels={{
              totalCount: '{{count}} contributions in the last year',
            }}
            style={{
              color: isDark ? '#a3a3a3' : '#737373',
              fontFamily: 'inherit',
            }}
          />
        </div>

        <a
          href="https://github.com/Deep6890"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition"
        >
          <GitCommit size={16} />
          View Full Activity
          <ArrowUpRight size={14} />
        </a>

      </div>

    </section>
  )
}

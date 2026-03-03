import React from 'react'
import { Link } from 'react-router-dom'
import { Moon, Sun, FolderGit2, Code, Award, User } from 'lucide-react'
import { useDarkMode } from '../context/DarkModeContext'
import { navItems } from '../data/centralData'
import GlowEffect from './ui/GlowEffect'

export default function MainNavbar() {
  const { isDark, toggleDarkMode } = useDarkMode()

  const navConfig = [
    { ...navItems[0], icon: User },
    { ...navItems[1], icon: FolderGit2 },
    { ...navItems[2], icon: Code },
    { ...navItems[3], icon: Award }
  ]

  return (
    <div className="w-full flex justify-center py-2 md:py-4 px-2 md:px-4">
      <GlowEffect>
        <nav className="relative flex items-center gap-0.5 xs:gap-1 sm:gap-2 md:gap-4 px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 bg-neutral-900 dark:bg-neutral-800 text-white rounded-full shadow-xl border border-neutral-700 dark:border-neutral-600 w-full max-w-full overflow-x-auto transition-colors duration-[2000ms] ease-in-out">

        <button
          onClick={(e) => toggleDarkMode(e)}
          className="flex-shrink-0 w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-neutral-800 dark:bg-neutral-700 hover:bg-neutral-700 dark:hover:bg-neutral-600 transition-colors duration-300"
        >
          {isDark ? <Sun size={12} className="xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" /> : <Moon size={12} className="xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />}
        </button>

        <div className="w-px h-3 xs:h-4 sm:h-5 md:h-6 bg-neutral-700 dark:bg-neutral-600 flex-shrink-0"></div>

        {navConfig.map((item) => {
          const Icon = item.icon
          return (
            <Link
              key={item.name}
              to={item.path}
              className="flex items-center gap-0.5 xs:gap-1 md:gap-2 px-1.5 xs:px-2 sm:px-3 md:px-4 py-1 xs:py-1.5 sm:py-2 md:py-2.5 rounded-full hover:bg-neutral-800 dark:hover:bg-neutral-700 transition-colors duration-300 text-[10px] xs:text-xs sm:text-sm md:text-base font-medium whitespace-nowrap flex-shrink-0"
            >
              <Icon size={12} className="xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
              <span className="hidden xs:inline">{item.name}</span>
            </Link>
          )
        })}
      </nav>
      </GlowEffect>
    </div>
  )
}
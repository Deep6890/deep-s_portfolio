import React from 'react'
import { Link } from 'react-router-dom'
import { Moon, Sun, FolderGit2, Code, Award, User } from 'lucide-react'
import { useDarkMode } from '../context/DarkModeContext'
import { navItems } from '../data/centralData'

export default function MainNavbar() {
  const { isDark, toggleDarkMode } = useDarkMode()

  const navConfig = [
    { ...navItems[0], icon: FolderGit2 },
    { ...navItems[1], icon: Code },
    { ...navItems[2], icon: Award },
    { ...navItems[3], icon: User }
  ]

  return (
    <div className="w-full flex justify-center py-4 px-2 md:px-4">
      <nav className="flex items-center gap-3 md:gap-4 px-3 md:px-5 py-2 md:py-3 bg-neutral-900 text-white rounded-full shadow-xl border border-neutral-700 overflow-x-auto scrollbar-hide max-w-full">

        {/* Toggle Button */}
        <button
          onClick={toggleDarkMode}
          className="flex-shrink-0 w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-neutral-800 hover:bg-neutral-700 transition"
        >
          {isDark ? <Sun size={16} className="md:w-[18px] md:h-[18px]" /> : <Moon size={16} className="md:w-[18px] md:h-[18px]" />}
        </button>

        {/* Divider */}
        <div className="w-px h-6 bg-neutral-700 flex-shrink-0"></div>

        {/* Navigation Items */}
        {navConfig.map((item) => {
          const Icon = item.icon
          return (
            <Link
              key={item.name}
              to={item.path}
              className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full hover:bg-neutral-800 transition text-xs md:text-sm font-medium whitespace-nowrap flex-shrink-0"
            >
              <Icon size={14} className="md:w-4 md:h-4" />
              <span>{item.name}</span>
            </Link>
          )
        })}
      </nav>
    </div>
  )
}

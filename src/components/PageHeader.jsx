import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Moon, Sun } from 'lucide-react'
import { useDarkMode } from '../context/DarkModeContext'

export default function PageHeader() {
  const navigate = useNavigate()
  const { isDark, toggleDarkMode } = useDarkMode()

  return (
    <div className="w-full px-4 sm:px-6 md:px-12 lg:px-24 py-4 flex justify-between items-center">
      <button
        onClick={() => navigate('/')}
        className="flex items-center gap-2 px-4 py-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition"
      >
        <ArrowLeft size={18} />
        <span className="text-sm">Back</span>
      </button>

      <button
        onClick={toggleDarkMode}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition"
      >
        {isDark ? <Sun size={18} className="text-neutral-900 dark:text-white" /> : <Moon size={18} className="text-neutral-900" />}
      </button>
    </div>
  )
}

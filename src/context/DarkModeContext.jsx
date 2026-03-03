import React, { createContext, useContext, useState, useEffect } from 'react'

const DarkModeContext = createContext()

export function useDarkMode() {
  return useContext(DarkModeContext)
}

export function DarkModeProvider({ children }) {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('darkMode')
    return saved !== null ? saved === 'true' : true
  })

  useEffect(() => {
    const root = document.documentElement
    root.style.transition = 'background-color 2s ease-in-out, color 2s ease-in-out'
    
    if (isDark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('darkMode', isDark)
  }, [isDark])

  const toggleDarkMode = () => {
    setIsDark(prev => !prev)
  }

  return (
    <DarkModeContext.Provider value={{ isDark, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}

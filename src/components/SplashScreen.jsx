import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function SplashScreen({ onComplete }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => onComplete(), 300)
          return 100
        }
        return prev + 2
      })
    }, 30)

    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-neutral-900 px-4"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center w-full max-w-md"
      >
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-light text-neutral-900 dark:text-white mb-6 sm:mb-8">
          Deep Kayastha
        </h1>
        
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto h-1 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-neutral-900 dark:bg-white"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
        
        <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
          Loading {progress}%
        </p>
      </motion.div>
    </motion.div>
  )
}

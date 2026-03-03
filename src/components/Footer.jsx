import React from 'react'
import { Github, Linkedin, Instagram, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
      <div className="max-w-6xl mx-auto px-2 xs:px-4 sm:px-6 md:px-12 lg:px-24 py-4 xs:py-6 sm:py-8">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 xs:gap-4">
          
          {/* Copyright */}
          <p className="text-[10px] xs:text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 text-center sm:text-left">
            © 2025 Deep Kayastha. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3 xs:gap-4">
            <a
              href="https://github.com/Deep6890"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition"
            >
              <Github size={16} className="xs:w-[18px] xs:h-[18px]" />
            </a>
            <a
              href="https://www.linkedin.com/in/deep-kayastha-763514319/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition"
            >
              <Linkedin size={16} className="xs:w-[18px] xs:h-[18px]" />
            </a>
            <a
              href="https://www.instagram.com/deep__kayastha/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition"
            >
              <Instagram size={16} className="xs:w-[18px] xs:h-[18px]" />
            </a>
          </div>

        </div>

      </div>
    </footer>
  )
}

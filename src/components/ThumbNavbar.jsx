import React from 'react'
import { Github, Linkedin } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="w-full pt-4 md:pt-6 pb-2 px-4 sm:px-6 md:px-12 lg:px-20">

      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 text-xs sm:text-sm text-neutral-500">

        {/* LEFT SIDE */}
        <div className="flex items-center gap-3 sm:gap-4 md:gap-6 flex-wrap">

          <a
            href="mailto:deepkayastha6890@gmail.com"
            className="hover:text-neutral-900 transition text-[10px] sm:text-xs md:text-sm break-all"
          >
            deepkayastha6890@gmail.com
          </a>

          <a
            href="https://github.com/Deep6890"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-900 transition flex-shrink-0"
          >
            <Github size={16} className="sm:w-[18px] sm:h-[18px]" />
          </a>

          <a
            href="https://www.linkedin.com/in/deep-kayastha-763514319/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-900 transition flex-shrink-0"
          >
            <Linkedin size={16} className="sm:w-[18px] sm:h-[18px]" />
          </a>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4 tracking-wide flex-wrap">

          <a href="#projects" className="hover:text-neutral-900 transition whitespace-nowrap text-[10px] sm:text-xs md:text-sm">
            Projects
          </a>

          <span className="text-neutral-300">/</span>

          <a href="#cv" className="hover:text-neutral-900 transition whitespace-nowrap text-[10px] sm:text-xs md:text-sm">
            CV
          </a>

          <span className="text-neutral-300">/</span>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-900 transition whitespace-nowrap text-[10px] sm:text-xs md:text-sm"
          >
            Instagram
          </a>

        </div>

      </div>

    </nav>
  )
}

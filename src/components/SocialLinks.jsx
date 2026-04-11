import React from 'react'
import TrueFocus from './ui/TrueFocus'
import { socialLinks } from '../data/centralData'
import {
  Linkedin,
  Github,
  Instagram,
  Code,
  BarChart3
} from 'lucide-react'

export default function SocialLinks() {

  const iconMap = {
    LinkedIn: <Linkedin size={22} strokeWidth={1.5} />,
    GitHub: <Github size={22} strokeWidth={1.5} />,
    LeetCode: <Code size={22} strokeWidth={1.5} />,
    Kaggle: <BarChart3 size={22} strokeWidth={1.5} />,
    Instagram: <Instagram size={22} strokeWidth={1.5} />
  }

  const links = socialLinks.filter(link =>
    ['LinkedIn', 'GitHub', 'LeetCode', 'Kaggle', 'Instagram'].includes(link.name)
  )

  return (
    <section className="w-full py-6 xs:py-8 sm:py-10 md:py-16 lg:py-20">

      <div className="w-full px-2 xs:px-4 sm:px-6 md:px-16 lg:px-24">

        {/* SECTION LABEL */}
        <p className="text-[9px] xs:text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] uppercase text-neutral-400 mb-4 xs:mb-6 sm:mb-8 md:mb-10">
          Connect
        </p>

        {/* MAIN HEADING */}
        <div className="mb-6 xs:mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <TrueFocus
            sentence="Professional Platforms"
            manualMode={false}
            blurAmount={2}
            borderColor="currentColor"
            animationDuration={0.4}
            pauseBetweenAnimations={1}
          />
        </div>

        {/* PREMIUM GRID */}
        <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 lg:grid-cols-5">

          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group py-4 xs:py-6 sm:py-8 md:py-10 px-2 xs:px-3 sm:px-4 md:px-6 border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition"
            >

              <div className="flex flex-col sm:flex-row items-center sm:items-center gap-1.5 xs:gap-2 sm:gap-4">

                <div className="text-neutral-900 dark:text-white group-hover:translate-x-1 transition">
                  {iconMap[link.name]}
                </div>

                <span className="text-[10px] xs:text-xs sm:text-sm md:text-base font-medium text-neutral-700 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-white transition text-center sm:text-left">
                  {link.name}
                </span>

              </div>

            </a>
          ))}

        </div>

        {/* FOOTNOTE */}
        <div className="mt-6 xs:mt-8 sm:mt-10 md:mt-12 lg:mt-16 max-w-xl">
          <p className="text-neutral-400 dark:text-neutral-500 text-[10px] xs:text-xs sm:text-sm leading-relaxed">
            Repositories, coding platforms, data science arenas, and professional networks — documenting structured work and research.
          </p>
        </div>

      </div>

    </section>
  )
}

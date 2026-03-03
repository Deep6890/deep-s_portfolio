import React from 'react'
import LinkedInImg from '../assets/LinkedIn.svg'
import GitHubImg from '../assets/GitHub.png'
import TrueFocus from './ui/TrueFocus'
import { socialLinks } from '../data/centralData'

export default function SocialLinks() {

  const links = socialLinks.filter(link => 
    ['LinkedIn', 'GitHub', 'LeetCode', 'Kaggle'].includes(link.name)
  ).map(link => ({
    ...link,
    image: link.name === 'LinkedIn' ? LinkedInImg : 
           link.name === 'GitHub' ? GitHubImg :
           link.icon === 'leetcode' ? 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/leetcode/leetcode-original.svg' :
           'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kaggle/kaggle-original.svg'
  }))

  return (
    <section className="w-full px-4 sm:px-6 md:px-12 lg:px-20 mt-12 md:mt-32">

      <div className="max-w-5xl mx-auto text-center space-y-8 md:space-y-16">

        {/* HERO */}
        <TrueFocus
          sentence="Connect on"
          manualMode={false}
          blurAmount={2}
          borderColor="#000000"
          animationDuration={0.4}
          pauseBetweenAnimations={1}
        />

        {/* ICON ROW */}
        <div className="flex justify-center flex-wrap gap-6 md:gap-10">

          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center"
            >

              <div className="w-10 h-10 md:w-12 md:h-12">
                <img
                  src={link.image}
                  alt={link.name}
                  className="w-full h-full object-contain opacity-60 group-hover:opacity-100 transition"
                />
              </div>

              <span className="mt-2 md:mt-3 text-xs md:text-sm text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-white transition">
                {link.name}
              </span>

            </a>
          ))}

        </div>

        {/* SUBTEXT */}
        <p className="text-neutral-400 dark:text-neutral-500 text-xs md:text-sm max-w-md mx-auto px-4">
          Platforms where I build, share and solve.
        </p>

      </div>

    </section>
  )
}

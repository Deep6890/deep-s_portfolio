import React from 'react'
import LinkedInImg from '../assets/LinkedIn.svg'
import GitHubImg from '../assets/GitHub.png'
import TrueFocus from './ui/TrueFocus'

export default function SocialLinks() {

  const links = [
    {
      name: 'LinkedIn',
      image: LinkedInImg,
      url: 'https://www.linkedin.com/in/deep-kayastha-763514319/'
    },
    {
      name: 'GitHub',
      image: GitHubImg,
      url: 'https://github.com/Deep6890'
    },
    {
      name: 'LeetCode',
      image: '/src/assets/icons8-leetcode-96.png',
      url: 'https://leetcode.com/'
    },
    {
      name: 'Kaggle',
      image: '/src/assets/icons8-leetcode-96.png',
      url: 'https://www.kaggle.com/'
    }
  ]

  return (
    <section className="w-full px-4 sm:px-6 md:px-12 lg:px-20 mt-12 md:mt-32">

      <div className="max-w-5xl mx-auto text-center space-y-8 md:space-y-16">

        {/* HERO */}
        <TrueFocus
          sentence="We Connect"
          manualMode={false}
          blurAmount={4}
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

              <span className="mt-2 md:mt-3 text-xs md:text-sm text-neutral-400 group-hover:text-neutral-900 transition">
                {link.name}
              </span>

            </a>
          ))}

        </div>

        {/* SUBTEXT */}
        <p className="text-neutral-400 text-xs md:text-sm max-w-md mx-auto px-4">
          Platforms where I build, share and solve.
        </p>

      </div>

    </section>
  )
}

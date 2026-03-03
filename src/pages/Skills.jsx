import React from 'react'
import { Code } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Footer from '../components/Footer'
import { skillsData } from '../data/skillsData'

export default function Skills() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 flex flex-col transition-colors duration-[2000ms] ease-in-out">
      <section className="relative flex-grow overflow-hidden">

      {/* Subtle Radial Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-neutral-200/40 via-neutral-300/20 to-transparent dark:from-neutral-800/40 dark:via-neutral-700/20 blur-3xl rounded-full" />
      </div>

      <PageHeader />

      <div className="relative px-6 md:px-20 lg:px-32 pb-32 pt-12">
        <div className="max-w-5xl mx-auto">

          {/* Label */}
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-xl bg-neutral-100 dark:bg-neutral-800">
              <Code size={18} className="text-neutral-700 dark:text-neutral-300" />
            </div>
            <p className="text-xs tracking-[0.45em] uppercase text-neutral-400">
              Expertise
            </p>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-light text-neutral-900 dark:text-white leading-[1.1] mb-10">
            {skillsData.heading}
          </h1>

          {/* Elegant Divider */}
          <div className="w-16 h-[1px] bg-neutral-300 dark:bg-neutral-700 mb-10" />

          {/* Explanation */}
          <div className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-7 mb-20 max-w-3xl">
            {skillsData.description.map((text, idx) => (
              <p key={idx}>{text}</p>
            ))}
          </div>

          {/* Skills Section */}
          <div className="flex flex-wrap gap-5">

            {skillsData.skills.map((skill) => {
              const Icon = skill.icon
              return (
                <div
                  key={skill.name}
                  className="
                    group relative
                    flex items-center gap-3
                    px-6 py-3
                    rounded-full
                    bg-white/70 dark:bg-neutral-900/60
                    backdrop-blur-xl
                    border border-neutral-200 dark:border-neutral-800
                    text-neutral-700 dark:text-neutral-300
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:shadow-xl
                  "
                >
                  {/* Glow on Hover */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neutral-200/0 via-neutral-200/40 to-neutral-200/0 dark:via-neutral-700/30 opacity-0 group-hover:opacity-100 transition duration-300 blur-xl" />

                  <Icon size={18} className="relative z-10" />
                  <span className="text-sm relative z-10 tracking-wide">
                    {skill.name}
                  </span>
                </div>
              )
            })}

          </div>

        </div>
      </div>
      </section>
      <Footer />
    </div>
  )
}

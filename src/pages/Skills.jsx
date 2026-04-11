import React from 'react'
import { Code } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Footer from '../components/Footer'
import { skillsData } from '../data/skillsData'

export default function Skills() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 flex flex-col transition-colors duration-[2000ms] ease-in-out">
      <section className="relative flex-grow overflow-hidden">

        {/* Subtle background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-neutral-200/40 via-neutral-300/20 to-transparent dark:from-neutral-800/40 dark:via-neutral-700/20 blur-3xl rounded-full" />
        </div>

        <PageHeader />

        <div className="relative px-4 xs:px-6 sm:px-8 md:px-20 lg:px-32 pb-16 xs:pb-20 sm:pb-24 md:pb-32 pt-6 xs:pt-8 sm:pt-12">
          <div className="max-w-5xl mx-auto">

            {/* Label */}
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-xl bg-neutral-100 dark:bg-neutral-800">
                <Code size={18} className="text-neutral-700 dark:text-neutral-300" />
              </div>
              <p className="text-xs tracking-[0.45em] uppercase text-neutral-400">Expertise</p>
            </div>

            {/* Heading */}
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-light text-neutral-900 dark:text-white leading-[1.1] mb-6 xs:mb-8 sm:mb-10">
              {skillsData.heading}
            </h1>

            <div className="w-16 h-[1px] bg-neutral-300 dark:bg-neutral-700 mb-10" />

            {/* Description */}
            <div className="text-base xs:text-lg sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-4 xs:space-y-5 sm:space-y-7 mb-12 xs:mb-16 sm:mb-20 max-w-3xl">
              {skillsData.description.map((text, idx) => (
                <p key={idx}>{text}</p>
              ))}
            </div>

            {/* ── TECHNICAL SKILLS ── */}
            <div className="mb-12 xs:mb-16 sm:mb-24">
              <p className="text-xs tracking-[0.4em] uppercase text-neutral-400 dark:text-neutral-500 mb-8 xs:mb-10 sm:mb-12">
                Technical
              </p>

              <div className="space-y-12">
                {skillsData.techGroups.map((group) => (
                  <div key={group.label}>
                    {/* Group label */}
                    <p className="text-[10px] tracking-[0.3em] uppercase text-neutral-300 dark:text-neutral-700 mb-4">
                      {group.label}
                    </p>

                    {/* Pills */}
                    <div className="flex flex-wrap gap-3">
                      {group.skills.map((skill) => {
                        const Icon = skill.icon
                        return (
                          <div
                            key={skill.name}
                            className="group relative flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-neutral-400 dark:hover:border-neutral-600 hover:shadow-md"
                          >
                            <Icon size={15} className="shrink-0" />
                            <span className="text-sm tracking-wide">{skill.name}</span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── SOFT SKILLS ── */}
            <div>
              <p className="text-xs tracking-[0.4em] uppercase text-neutral-400 dark:text-neutral-500 mb-4">
                How I Work
              </p>
              <p className="text-neutral-500 dark:text-neutral-400 max-w-xl mb-12 text-sm leading-relaxed">
                The habits and instincts that shape how I approach problems, teams and deadlines.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-100 dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-800 rounded-2xl overflow-hidden">
                {skillsData.softSkills.map((s, i) => (
                  <div
                    key={s.title}
                    className="group bg-white dark:bg-neutral-900 p-6 hover:bg-neutral-50 dark:hover:bg-neutral-800/60 transition-colors duration-300"
                  >
                    {/* Number */}
                    <p className="text-[10px] tracking-widest text-neutral-300 dark:text-neutral-700 mb-3">
                      {String(i + 1).padStart(2, '0')}
                    </p>

                    {/* Title */}
                    <h3 className="text-sm font-medium text-neutral-900 dark:text-white mb-2 group-hover:tracking-wide transition-all duration-300">
                      {s.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-neutral-500 dark:text-neutral-500 leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

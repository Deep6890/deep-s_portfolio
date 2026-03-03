import React from 'react'
import { Code } from 'lucide-react'
import { Link } from 'react-router-dom'
import SkillsGraph from '../components/SkillsGraph'
import PageHeader from '../components/PageHeader'

export default function Skills() {
  return (
    <section className="min-h-screen bg-white dark:bg-neutral-900">
      <PageHeader />
      <div className="px-4 sm:px-6 md:px-12 lg:px-24 pb-12 sm:pb-16 md:pb-24">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <Code size={20} className="text-neutral-900 dark:text-white" />
          <p className="text-xs tracking-[0.3em] sm:tracking-[0.4em] text-neutral-400 dark:text-neutral-500 uppercase">
            Skills
          </p>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-neutral-900 dark:text-white mb-4 sm:mb-6">
          Technical Skills
        </h1>

        <p className="text-sm sm:text-base text-neutral-500 dark:text-neutral-400 max-w-2xl mb-12 sm:mb-16">
          A growing ecosystem of tools and technologies I use to design, build and deploy intelligent systems.
        </p>

        {/* GRAPH */}
        <div className="mb-16 sm:mb-20">
          <SkillsGraph />
        </div>

        {/* CAPABILITY SECTIONS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">

          <div className="space-y-3 sm:space-y-4">
            <p className="text-xs tracking-[0.3em] uppercase text-neutral-400 dark:text-neutral-500">
              Frontend
            </p>
            <h3 className="text-lg sm:text-xl font-medium text-neutral-900 dark:text-white">
              Interface Engineering
            </h3>
            <p className="text-sm sm:text-base text-neutral-500 dark:text-neutral-400 leading-relaxed">
              React, Tailwind, modern JavaScript — crafting responsive,
              performance-driven digital interfaces.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <p className="text-xs tracking-[0.3em] uppercase text-neutral-400 dark:text-neutral-500">
              Intelligence
            </p>
            <h3 className="text-lg sm:text-xl font-medium text-neutral-900 dark:text-white">
              Data & Machine Learning
            </h3>
            <p className="text-sm sm:text-base text-neutral-500 dark:text-neutral-400 leading-relaxed">
              Python ecosystem — transforming raw data into models,
              insights and predictive systems.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <p className="text-xs tracking-[0.3em] uppercase text-neutral-400 dark:text-neutral-500">
              Systems
            </p>
            <h3 className="text-lg sm:text-xl font-medium text-neutral-900 dark:text-white">
              Backend & Infrastructure
            </h3>
            <p className="text-sm sm:text-base text-neutral-500 dark:text-neutral-400 leading-relaxed">
              Databases, APIs and deployment layers — ensuring
              scalability and reliability.
            </p>
          </div>

        </div>

      </div>
      </div>
    </section>
  )
}

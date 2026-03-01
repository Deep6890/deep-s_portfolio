import React from 'react'
import { Code } from 'lucide-react'
import SkillsGraph from '../components/SkillsGraph'

export default function Skills() {
  return (
    <section className="min-h-screen bg-white px-6 md:px-16 lg:px-24 py-20">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="flex items-center gap-4 mb-6">
          <Code size={26} className="text-neutral-900 opacity-80" />
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-neutral-900">
            Skills
          </h1>
        </div>

        {/* SUBTEXT */}
        <p className="text-neutral-500 text-base md:text-lg max-w-2xl mb-16 leading-relaxed">
          A growing ecosystem of tools and technologies I use to design, build and deploy intelligent systems.
        </p>

        {/* GRAPH */}
        <div className="mb-24">
          <SkillsGraph />
        </div>

        {/* CAPABILITY SECTIONS */}
        <div className="grid md:grid-cols-3 gap-12">

          <div className="space-y-3">
            <p className="text-xs tracking-[0.3em] uppercase text-neutral-400">
              Frontend
            </p>
            <h3 className="text-xl font-medium text-neutral-900">
              Interface Engineering
            </h3>
            <p className="text-neutral-500 leading-relaxed">
              React, Tailwind, modern JavaScript — crafting responsive,
              performance-driven digital interfaces.
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-xs tracking-[0.3em] uppercase text-neutral-400">
              Intelligence
            </p>
            <h3 className="text-xl font-medium text-neutral-900">
              Data & Machine Learning
            </h3>
            <p className="text-neutral-500 leading-relaxed">
              Python ecosystem — transforming raw data into models,
              insights and predictive systems.
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-xs tracking-[0.3em] uppercase text-neutral-400">
              Systems
            </p>
            <h3 className="text-xl font-medium text-neutral-900">
              Backend & Infrastructure
            </h3>
            <p className="text-neutral-500 leading-relaxed">
              Databases, APIs and deployment layers — ensuring
              scalability and reliability.
            </p>
          </div>

        </div>

      </div>

    </section>
  )
}

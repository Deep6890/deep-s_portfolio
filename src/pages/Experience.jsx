import React from 'react'
import { Briefcase } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Experience() {
  return (
    <section className="min-h-screen bg-white px-4 sm:px-6 md:px-12 lg:px-24 py-12 sm:py-16 md:py-24">
      <div className="max-w-5xl mx-auto">
        
        {/* HEADER */}
        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <Briefcase className="text-neutral-900" size={20} />
          <p className="text-xs tracking-[0.3em] sm:tracking-[0.4em] text-neutral-400 uppercase">
            Experience
          </p>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-neutral-900 mb-4 sm:mb-6">
          Professional Journey
        </h1>

        <p className="text-sm sm:text-base text-neutral-500 max-w-2xl mb-12 sm:mb-16">
          Building systems and solving problems across different domains.
        </p>

        {/* PLACEHOLDER CONTENT */}
        <div className="border border-dashed border-neutral-300 rounded-xl p-6 sm:p-10 text-center">
          <p className="text-neutral-400 text-sm sm:text-base">
            Experience section coming soon...
          </p>
        </div>

        {/* HOME LINK */}
        <div className="mt-16 sm:mt-20 md:mt-28 pt-8 sm:pt-10 border-t border-neutral-200">
          <Link 
            to="/"
            className="text-xs sm:text-sm tracking-wide text-neutral-500 hover:text-neutral-900 transition"
          >
            ← Back to Home
          </Link>
        </div>

      </div>
    </section>
  )
}

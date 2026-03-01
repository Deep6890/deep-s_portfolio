import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {

  return (
    <section className="min-h-screen bg-white px-4 sm:px-6 md:px-12 lg:px-24 py-12 sm:py-16 md:py-24 relative overflow-hidden">

      {/* SMALL NAME */}
      <div className="absolute top-6 sm:top-8 md:top-10 right-4 sm:right-6 md:right-10 text-[8px] sm:text-[10px] md:text-xs tracking-[0.4em] sm:tracking-[0.5em] text-neutral-300">
        DEEP KAYASTHA
      </div>

      <div className="max-w-4xl mx-auto space-y-16 sm:space-y-20 md:space-y-28">

        {/* TITLE */}
        <div>
          <p className="text-xs tracking-[0.3em] sm:tracking-[0.4em] text-neutral-400 uppercase mb-2 sm:mb-3">
            Contact
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-neutral-900 leading-tight">
            Let's build
            <br/>
            something meaningful.
          </h1>
        </div>

        {/* CONTEXT */}
        <div className="text-base sm:text-lg text-neutral-500 max-w-2xl">
          I'm always open to conversations around systems, intelligence, 
          data-driven decision layers, or experimental builds.
        </div>

        {/* WHEN TO REACH */}
        <div className="space-y-4 sm:space-y-6">

          <h2 className="text-xl sm:text-2xl font-light text-neutral-900">
            Reach out if —
          </h2>

          <div className="space-y-2 sm:space-y-3 text-sm sm:text-base text-neutral-500">
            <p>• You're building something ambitious</p>
            <p>• You need intelligence over automation</p>
            <p>• You want to rethink a problem from scratch</p>
            <p>• You enjoy structured chaos</p>
          </div>

        </div>

        {/* EMAIL */}
        <div className="pt-8 sm:pt-10 md:pt-12 border-t border-neutral-200">

          <p className="text-xs sm:text-sm text-neutral-400 mb-2">
            Primary Channel
          </p>

          <a 
            href="mailto:deepkayastha6890@gmail.com"
            className="text-2xl sm:text-3xl md:text-4xl font-light text-neutral-900 hover:tracking-wide transition break-all"
          >
            deepkayastha6890@gmail.com
          </a>

        </div>

        {/* SOCIAL */}
        <div className="space-y-4 sm:space-y-6">

          <p className="text-xs sm:text-sm text-neutral-400">
            Or connect via networks
          </p>

          <div className="flex flex-wrap gap-6 sm:gap-8 md:gap-10 text-neutral-500 text-base sm:text-lg">

            <a href="https://www.linkedin.com/in/deep-kayastha-763514319/" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900 transition">
              LinkedIn
            </a>

            <a href="https://github.com/Deep6890" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900 transition">
              GitHub
            </a>

            <a href="https://www.instagram.com/deep__kayastha/" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900 transition">
              Instagram
            </a>

          </div>

        </div>

        {/* FUN LINE */}
        <div className="text-neutral-400 text-xs sm:text-sm max-w-md">
          Prefer meaningful discussions over long introductions.
        </div>

        {/* FOOTER */}
        <div className="pt-12 sm:pt-16 md:pt-20 border-t border-neutral-200">
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

import React from 'react'
import { Link } from 'react-router-dom'

export default function Profile() {

  return (
    <section className="min-h-screen bg-white px-4 sm:px-6 md:px-12 lg:px-24 py-12 sm:py-16 md:py-24 relative overflow-hidden">

      {/* NAME */}
      <div className="absolute top-6 sm:top-8 md:top-10 left-4 sm:left-6 md:left-10 text-[8px] sm:text-[10px] md:text-xs tracking-[0.4em] sm:tracking-[0.5em] text-neutral-300">
        DEEP KAYASTHA
      </div>

      {/* MAIN FLOW */}
      <div className="max-w-5xl mx-auto space-y-16 sm:space-y-20 md:space-y-28">

        {/* BIG INTRO */}
        <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-neutral-900 leading-tight">
          I build things <br/>
          that <span className="italic">think.</span>
        </div>

        {/* TANGY LINE */}
        <div className="text-base sm:text-lg text-neutral-500 max-w-xl tracking-wide">
          Not just apps. Not just models.  
          Systems that understand patterns before people notice them.
        </div>

        {/* HALLARIOUS SHIFT */}
        <div className="text-2xl sm:text-3xl md:text-4xl font-light text-neutral-900">
          Sometimes I code.  
          Sometimes I redesign the entire logic of the problem instead.
        </div>

        {/* CALM LINE */}
        <div className="text-xs sm:text-sm text-neutral-400 max-w-md">
          I like understanding why things behave the way they do —  
          markets, systems, users, data, decisions.
        </div>

        {/* BOLD STATEMENT */}
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-neutral-900">
          Tools don't excite me.
          <br/>
          <span className="tracking-wide">Patterns do.</span>
        </div>

        {/* FUN LINE */}
        <div className="text-base sm:text-lg text-neutral-500">
          Which is why I often spend more time thinking than typing 🙂
        </div>

        {/* MINI SHARP */}
        <div className="text-xl sm:text-2xl text-neutral-900">
          Intelligence &gt; Automation
        </div>

        {/* SHIFT */}
        <div className="text-base sm:text-lg text-neutral-500 max-w-lg">
          I'm interested in how systems evolve —  
          from raw data to real decision-making.
        </div>

        {/* HALLARIOUS END */}
        <div className="text-2xl sm:text-3xl md:text-4xl font-light text-neutral-900">
          Also yes,
          <br/>
          I enjoy breaking things
          <br/>
          just to understand them.
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

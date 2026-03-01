import React from 'react'
import ThumbNavbar from "./ThumbNavbar"

export default function ProfileCard() {
  return (
    <section className="w-full">

      {/* HEADER NAV */}
      <ThumbNavbar />

      {/* MAIN PROFILE */}
      <div className="w-full px-4 sm:px-6 md:px-12 lg:px-20 mt-12 md:mt-20">

        <div className="max-w-6xl mx-auto relative min-h-[500px] sm:min-h-[550px] md:min-h-[480px] pb-32 md:pb-0">

          {/* SMALL LABEL */}
          <p className="text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.5em] text-neutral-400 uppercase mb-8 md:mb-0 md:absolute md:top-0 md:left-0">
            Portfolio
          </p>

          {/* VERTICAL SIGNATURE - Hidden on mobile */}
          <p className="hidden lg:block absolute right-0 top-1/4 rotate-90 origin-right text-xs tracking-[0.4em] text-neutral-300 uppercase">
            DK
          </p>

          {/* NAME */}
          <div className="pt-0 md:pt-20">

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-neutral-900 leading-[0.9]">
              Deep
            </h1>

            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-neutral-900 leading-[0.9]">
              Kayastha
            </h2>

          </div>

          {/* SECONDARY LINE */}
          <p className="mt-6 md:mt-6 text-neutral-400 text-xs sm:text-sm tracking-wide max-w-full md:max-w-md pr-0 md:pr-4">
            Building logic-driven experiences through design & systems thinking.
          </p>

          {/* TAGLINE - Hidden on mobile */}
          <p className="hidden lg:block absolute top-1/2 right-0 -translate-y-1/2 max-w-xs text-neutral-500 text-base lg:text-lg font-light text-right">
            Crafting intelligent systems through thoughtful design & logic.
          </p>

          {/* ROLE */}
          <div className="mt-10 md:mt-0 md:absolute md:bottom-0 md:left-0 px-4 md:px-5 py-2 border border-neutral-300 text-xs md:text-sm font-light inline-block">
            AI Engineer • Creative Developer
          </div>

          {/* BUTTON */}
          <button className="mt-6 md:mt-0 md:absolute md:bottom-0 md:right-0 px-6 md:px-8 py-2.5 md:py-3 bg-neutral-900 text-white rounded-full text-xs md:text-sm tracking-wide hover:scale-105 transition-all shadow-md w-full sm:w-auto">
            Get in Touch
          </button>

        </div>

      </div>

    </section>
  )
}

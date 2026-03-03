import React from 'react'
import ThumbNavbar from "./ThumbNavbar"
import { profileData } from '../data/centralData'

export default function ProfileCard() {
  return (
    <section className="w-full">

      {/* Thumbnai nav bar */}
      <ThumbNavbar />

      {/* */}
      <div className="w-full px-2 sm:px-4 md:px-12 lg:px-20 mt-8 md:mt-10">

        <div className="max-w-6xl mx-auto relative min-h-[500px] sm:min-h-[550px] md:min-h-[480px] pb-32 md:pb-0">
          {/* VERTICAL SIGNATURE - Hidden on mobile */}
          <p className="hidden lg:block absolute right-0 top-1/4 rotate-90 origin-right text-xs tracking-[0.4em] text-neutral-300 uppercase">
            DK
          </p>

          {/* NAME */}
          <div className="pt-0 md:pt-14">

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-neutral-900 dark:text-white leading-[0.9]">
              {profileData.name.split(' ')[0]}
            </h1>

            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-neutral-900 dark:text-white leading-[0.9]">
              {profileData.name.split(' ')[1]}
            </h2>

          </div>

          {/* SECONDARY LINE */}
          <p className="mt-6 md:mt-6 text-neutral-400 dark:text-neutral-500 text-xs sm:text-sm tracking-wide max-w-full md:max-w-md pr-0 md:pr-4">
            {profileData.description}
          </p>

          {/* TAGLINE - Hidden on mobile */}
          <p className="hidden lg:block absolute top-1/2 right-0 -translate-y-1/2 max-w-xs text-neutral-500 dark:text-neutral-400 text-base lg:text-lg font-light text-right">
            {profileData.tagline}
          </p>

          {/* ROLE */}
          <div className="mt-6 md:mt-0 md:absolute md:bottom-0 md:left-0 px-4 md:px-5 py-2 border border-neutral-300 dark:border-neutral-600 text-neutral-900 dark:text-white text-xs md:text-sm font-light inline-block">
            {profileData.title} + Developer
          </div>

          {/* BUTTON */}
          <button className="mt-6 md:mt-0 md:absolute md:bottom-0 md:right-0 px-6 md:px-8 py-2.5 md:py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-full text-xs md:text-sm tracking-wide hover:scale-105 transition-all shadow-md w-full sm:w-auto">
            Hire me !
          </button>

        </div>

      </div>

    </section>
  )
}

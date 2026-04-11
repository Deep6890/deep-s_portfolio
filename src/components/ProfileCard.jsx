import React from 'react'
import ThumbNavbar from "./ThumbNavbar"
import { profileData } from '../data/centralData'

export default function ProfileCard() {
  return (
    <section className="w-full">

      <ThumbNavbar />

      <div className="w-full px-2 xs:px-4 sm:px-6 md:px-12 lg:px-20 mt-3 sm:mt-4 md:mt-10">

        <div className="max-w-6xl mx-auto text-center md:text-left relative">

          <p className="hidden lg:block absolute right-0 top-1/4 rotate-90 origin-right text-xs tracking-[0.4em] text-neutral-300 dark:text-neutral-600 uppercase">
            DK
          </p>

          <div className="pt-0 md:pt-14">
            <h1 className="text-4xl xs:text-5xl sm:text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-neutral-900 dark:text-white leading-[0.9]">
              {profileData.name?.split(' ')[0]}
            </h1>
            <h2 className="text-4xl xs:text-5xl sm:text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-neutral-900 dark:text-white leading-[0.9]">
              {profileData.name?.split(' ')[1]}
            </h2>
          </div>

          <p className="mt-3 sm:mt-4 md:mt-6 text-neutral-400 dark:text-neutral-500 text-[9px] xs:text-[10px] sm:text-xs tracking-wide mx-auto md:mx-0 max-w-full md:max-w-md px-2 xs:px-0">
            {profileData.description}
          </p>

          <p className="hidden lg:block absolute top-1/2 right-0 -translate-y-1/2 max-w-xs text-neutral-500 dark:text-neutral-400 text-base lg:text-lg font-light text-right">
            {profileData.tagline}
          </p>

          <div className="mt-6 sm:mt-8 md:mt-12 flex flex-col md:flex-row items-center md:items-end md:justify-between gap-3 md:gap-0">
            
            <div className="px-2 xs:px-3 sm:px-4 md:px-5 py-1 xs:py-1.5 sm:py-2 border border-neutral-300 dark:border-neutral-600 text-neutral-900 dark:text-white text-[9px] xs:text-[10px] sm:text-xs md:text-sm font-light">
              {profileData.title}
            </div>

            <a href="/profile" className="px-3 xs:px-4 sm:px-5 md:px-8 py-1.5 xs:py-2 sm:py-2.5 md:py-3 bg-white/10 dark:bg-white/10 backdrop-blur-md border border-neutral-300 dark:border-neutral-600 text-neutral-900 dark:text-white rounded-full text-[9px] xs:text-[10px] sm:text-xs md:text-sm tracking-wide hover:bg-white/20 dark:hover:bg-white/20 transition-all shadow-lg">
              Hire me !
            </a>

          </div>

        </div>

      </div>

    </section>
  )
}

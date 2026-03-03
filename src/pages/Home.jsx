import React from 'react'
import ProfileCard from '../components/ProfileCard'
import MainNavbar from '../components/MainNavbar'
import SocialLinks from '../components/SocialLinks'
import Footer from '../components/Footer'
import { aboutText } from '../data/centralData'

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 flex flex-col transition-colors duration-[2000ms] ease-in-out">

      {/* Profile card section */}
      <section className="w-full pt-2 sm:pt-3 md:pt-5">
        <ProfileCard />
      </section>

      {/* Nav bar section */}
      <section className="w-full mt-3 sm:mt-4 md:mt-6">
        <div className="px-4 sm:px-6 md:px-8">
          <MainNavbar />
        </div>
      </section>

      {/* Main content section */}
      <main className="flex-grow w-full mt-4 xs:mt-6 sm:mt-8">
        <div className="w-full px-2 xs:px-4 sm:px-6 md:px-8 py-4 xs:py-6 md:py-10">

          {/* About Section */}
          <div className="max-w-3xl mx-auto mb-8 xs:mb-12 sm:mb-16">
            <div className="space-y-3 xs:space-y-4 sm:space-y-6">
              {aboutText.map((text, idx) => (
                <p key={idx} className="text-base xs:text-lg sm:text-xl md:text-2xl font-light text-neutral-700 dark:text-neutral-300 leading-relaxed px-2 xs:px-0">
                  {text}
                </p>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="max-w-4xl mx-auto">
            <SocialLinks />
          </div>

        </div>
      </main>

      {/* Common footer */}
      <Footer />

    </div>
  )
}

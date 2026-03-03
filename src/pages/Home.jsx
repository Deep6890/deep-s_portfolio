import React from 'react'
import ProfileCard from '../components/ProfileCard'
import MainNavbar from '../components/MainNavbar'
import Carousel from '../components/ui/Carousel'
import SocialLinks from '../components/SocialLinks'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 flex flex-col">

      {/* ================= HERO ================= */}
      <section className="w-full pt-3 sm:pt-4 md:pt-5">
        <ProfileCard />
      </section>

      {/* ================= NAVBAR ================= */}
      <section className="w-full mt-6">
        <div className="px-4 sm:px-6 md:px-8">
          <MainNavbar />
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <main className="flex-grow w-full mt-8">
        <div className="w-full px-4 sm:px-6 md:px-8 py-6 md:py-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Carousel */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md sm:max-w-lg">
                <Carousel
                  baseWidth={500}
                  autoplay={true}
                  autoplayDelay={3000}
                  pauseOnHover={true}
                  loop={true}
                  round={false}
                />
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center lg:justify-start">
              <div className="w-full">
                <SocialLinks />
              </div>
            </div>

          </div>

        </div>
      </main>

      {/* ================= FOOTER ================= */}
      <Footer />

    </div>
  )
}

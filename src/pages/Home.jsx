import React from 'react'
import ProfileCard from '../components/ProfileCard'
import MainNavbar from '../components/MainNavbar'
import Carousel from '../components/ui/Carousel'
import SocialLinks from '../components/SocialLinks'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <ProfileCard />

      <div className="px-2 md:px-8 py-12 md:py-16 w-full">
        <MainNavbar />
      </div>

      <div className="w-full px-4 md:px-8 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Carousel Column */}
          <div className="flex justify-center">
            <div className="w-full" style={{ maxWidth: '500px', height: 'auto', minHeight: '500px', position: 'relative' }}>
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

          {/* Social Links Column */}
          <div className="flex items-center">
            <div className="w-full" style={{ minHeight: '500px' }}>
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

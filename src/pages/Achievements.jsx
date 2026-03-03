import React from 'react'
import { Sparkles } from 'lucide-react'
import { certificates, events, importantCourses } from '../data/achievementsData'
import CertificateCard from '../components/cards/CertificateCard'
import EventCard from '../components/cards/EventCard'
import CourseCard from '../components/cards/CourseCard'
import PageHeader from '../components/PageHeader'
import Footer from '../components/Footer'

export default function Achievements() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 flex flex-col transition-colors duration-[2000ms] ease-in-out">
      <PageHeader />
      <div className="flex-grow px-6 md:px-16 lg:px-24 pb-24">
        <div className="max-w-6xl mx-auto">

          {/* HEADER */}
          <div className="mb-20">

            <div className="flex items-center gap-3 mb-4">
              <Sparkles size={18} className="text-neutral-900 dark:text-white" />
              <p className="text-xs tracking-[0.4em] text-neutral-400 dark:text-neutral-500 uppercase">
                Record
              </p>
            </div>

            <h1 className="text-4xl md:text-5xl font-light text-neutral-900 dark:text-white mb-6">
              Certifications & Milestones
            </h1>

            <p className="text-neutral-500 dark:text-neutral-400 max-w-2xl">
              A documented journey of structured learning, institutional validation,
              and applied growth across systems, intelligence and data disciplines.
            </p>

          </div>


          {/* CERTIFICATES */}
          <Section
            label="Institutional Certifications"
            description="Formal recognitions and validated credentials."
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certificates.map((certificate) => (
                <CertificateCard key={certificate.id} certificate={certificate} />
              ))}
            </div>
          </Section>


          {/* EVENTS */}
          <Section
            label="Academic & Technical Events"
            description="Participation in seminars, workshops and competitive environments."
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </Section>


          {/* IMPORTANT COURSES */}
          <Section
            label="Advanced Coursework"
            description="Focused learning modules contributing to deeper technical understanding."
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {importantCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </Section>

        </div>
      </div>
      <Footer />
    </div>
  )
}


/* Reusable Section Layout */
function Section({ label, description, children }) {
  return (
    <div className="mb-28">

      <div className="mb-10">
        <p className="text-xs tracking-[0.35em] text-neutral-400 dark:text-neutral-500 uppercase mb-3">
          {label}
        </p>

        <p className="text-neutral-500 dark:text-neutral-400 max-w-xl">
          {description}
        </p>
      </div>

      {children}

    </div>
  )
}

import React from 'react'
import { Sparkles } from 'lucide-react'
import { certificates, events, importantCourses, highlights } from '../data/achievementsData'
import CertificateCard from '../components/cards/CertificateCard'
import EventCard from '../components/cards/EventCard'
import CourseCard from '../components/cards/CourseCard'
import HighlightCard from '../components/cards/HighlightCard'
import MilestoneTimeline from '../components/MilestoneTimeline'
import PageHeader from '../components/PageHeader'
import Footer from '../components/Footer'

export default function Achievements() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 flex flex-col transition-colors duration-[2000ms] ease-in-out">
      <PageHeader />
      <div className="flex-grow px-4 xs:px-6 sm:px-8 md:px-16 lg:px-24 pt-4 xs:pt-6 sm:pt-8 pb-12 xs:pb-16 sm:pb-24">
        <div className="max-w-6xl mx-auto">

          {/* PAGE HEADER */}
          <div className="mb-10 xs:mb-14 sm:mb-20">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles size={18} className="text-neutral-900 dark:text-white" />
              <p className="text-xs tracking-[0.4em] text-neutral-400 dark:text-neutral-500 uppercase">
                Record
              </p>
            </div>
            <h1 className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl font-light text-neutral-900 dark:text-white mb-4 xs:mb-6">
              Certifications & Milestones
            </h1>
            <p className="text-sm xs:text-base text-neutral-500 dark:text-neutral-400 max-w-2xl">
              A documented journey of structured learning, institutional validation,
              and applied growth across systems, intelligence and data disciplines.
            </p>
          </div>

          {/* HIGHLIGHTS — presentation & event photos */}
          <Section
            label="Highlights"
            description="On-stage moments, presentations and field presence."
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-6">
              {highlights.map((h) => (
                <HighlightCard key={h.id} highlight={h} />
              ))}
            </div>
          </Section>

          {/* MILESTONES */}
          <Section
            label="Milestones"
            description="A chronological record — from first commit to first stage."
          >
            <MilestoneTimeline />
          </Section>

          {/* CERTIFICATES */}
          <Section
            label="Institutional Certifications"
            description="Formal recognitions and validated credentials."
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 sm:gap-8">
              {certificates.map((certificate) => (
                <CertificateCard key={certificate.id} certificate={certificate} />
              ))}
            </div>
          </Section>

          {/* ACADEMIC & TECHNICAL EVENTS */}
          <Section
            label="Academic & Technical Events"
            description="Participation in hackathons, competitions and workshops."
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 sm:gap-8">
              {events.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </Section>

          {/* ADVANCED COURSEWORK */}
          <Section
            label="Advanced Coursework"
            description="Focused learning modules contributing to deeper technical understanding."
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 sm:gap-8">
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

function Section({ label, description, children }) {
  return (
    <div className="mb-14 xs:mb-20 sm:mb-28">
      <div className="mb-6 xs:mb-8 sm:mb-10">
        <p className="text-xs tracking-[0.35em] text-neutral-400 dark:text-neutral-500 uppercase mb-3">
          {label}
        </p>
        <p className="text-sm xs:text-base text-neutral-500 dark:text-neutral-400 max-w-xl">
          {description}
        </p>
      </div>
      {children}
    </div>
  )
}

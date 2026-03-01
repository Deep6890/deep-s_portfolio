import React from 'react'
import { Briefcase } from 'lucide-react'

export default function Experience() {
  return (
    <div className="min-h-screen bg-white p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Briefcase size={32} className="text-neutral-900" />
          <h1 className="text-4xl font-bold text-neutral-900">Experience</h1>
        </div>
        <p className="text-neutral-600">Coming soon...</p>
      </div>
    </div>
  )
}

import React from 'react'
import MainGraphics from '../src/sections/mainGraphics'
import Line from '../src/sections/TimeLine'
import Skills from '../src/sections/skills'

import Projects from '../src/sections/projects'
import WorkExperience from '../src/sections/workExperience'
import Ending from '../src/sections/ending'

export default function Index() {
    return (
        <>
            <div className="w-full flex flex-col font-sans">
                {/* Hero Section */}
                <section className="relative w-full h-screen">
                    <MainGraphics />
                </section>

                {/* Timeline Section */}
                <section className="relative w-full min-h-screen flex flex-col items-center justify-start pt-20 pb-32">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-6xl font-bold mb-6 text-gray-800">Journey & Achievements</h2>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            A chronological view of my learning, projects, hackathons, and growth as an AIML student and developer.
                        </p>
                    </div>
                    <div className="w-full">
                        <Line />
                    </div>
                </section>

                {/* Skills Section */}
                <section className="relative w-full min-h-screen flex flex-col items-center pt-20">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-6xl font-bold mb-6 text-gray-800">Skills & Expertise</h2>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            Technologies and tools I work with to bring ideas to life.
                        </p>
                    </div>
                    <Skills />
                </section>

                {/* Projects Section */}
                <section className="relative w-full min-h-screen flex flex-col items-center pt-20">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-6xl font-bold mb-6 text-gray-800">Featured Projects</h2>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            A showcase of my recent work and creative solutions.
                        </p>
                    </div>
                    <Projects />
                </section>

                {/* Work Experience Section */}
                <section className="relative w-full min-h-screen flex flex-col items-center pt-20">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-6xl font-bold mb-6 text-gray-800">Work Experience</h2>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            Professional journey and key contributions.
                        </p>
                    </div>
                    <WorkExperience />
                </section>

                {/* Contact Section */}
                <section className="relative w-full min-h-screen flex flex-col items-center pt-20">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-6xl font-bold mb-6 text-gray-800">Let's Connect</h2>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            Ready to collaborate? Let's build something amazing together.
                        </p>
                    </div>
                    <Ending />
                </section>
            </div>
        </>
    )
}

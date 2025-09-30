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
            <div className="w-full flex flex-col">
                <div className='w-full flex flex-col gap-52'>
                    <div className="relative w-full h-screen">
                        <MainGraphics />
                    </div>
                    <div className="relative w-full h-screen flex flex-col items-center justify-start pt-20">
                        {/* <h1 className="text-4xl font-bold mb-4">Journey & Achievements</h1>
                        <p className="text-lg text-center mb-10 max-w-5xl">
                            A chronological view of my learning, projects, hackathons, and growth as an AIML student and developer.
                        </p> */}
                        <div className="w-full mb-10">
                            <Line />
                        </div>
                        <div className="relative w-full h-screen mt-10 mb-10">
                            <Skills />
                        </div>
                        <div className="relative w-full h-screen mt-10 mb-20">
                            <Projects />
                        </div>
                        <div className="relative w-full h-screen mt-10 mb-10">
                            <WorkExperience />
                        </div>
                        <div className="relative w-full h-screen">
                            <Ending />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

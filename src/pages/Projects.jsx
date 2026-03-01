import React from 'react'
import projectImg from '../assets/Untitled design (4).png'

export default function Projects() {

  const featured = [
    {
      title: "CmDZeN",
      desc: "AI productivity ecosystem for workflow intelligence",
      tag: "Live Project",
      link: "#",
      image: projectImg
    },
    {
      title: "Stock Intelligence Engine",
      desc: "Market behavior analysis using structured signals",
      tag: "Research Build",
      link: "#",
      image: projectImg
    }
  ]

  const builds = [
    {
      title: "Resume Intelligence Parser",
      desc: "ML-powered resume understanding engine",
      image: projectImg
    },
    {
      title: "Transaction Flow Predictor",
      desc: "Predictive system for financial behaviour",
      image: projectImg
    },
    {
      title: "ER Visual Intelligence",
      desc: "Entity relationship system explorer",
      image: projectImg
    }
  ]

  const kaggle = [
    {
      title: "EDA System",
      desc: "Pattern extraction through data profiling",
      image: projectImg
    },
    {
      title: "Time Series Lab",
      desc: "Forecast experimentation",
      image: projectImg
    }
  ]

  const ongoing = [
    {
      title: "AI Decision Layer",
      desc: "Building intelligence over rule engines",
      image: projectImg
    },
    {
      title: "Creative ML Interface",
      desc: "Human-first ML interaction layer",
      image: projectImg
    }
  ]

  return (
    <section className="min-h-screen bg-white px-4 sm:px-6 md:px-12 lg:px-24 py-12 sm:py-16 md:py-20 relative overflow-hidden">

      {/* SIDE NAME */}
      <div className="hidden lg:block absolute left-6 xl:left-10 top-1/2 -translate-y-1/2 rotate-[-90deg] text-xs tracking-[0.6em] text-neutral-300">
        PROJECT ARCHIVE
      </div>

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <p className="text-xs tracking-[0.3em] sm:tracking-[0.4em] text-neutral-400 uppercase mb-2 sm:mb-3">
          Work
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-neutral-900 mb-4 sm:mb-6">
          Selected Projects
        </h1>

        <p className="text-sm sm:text-base text-neutral-500 max-w-2xl mb-12 sm:mb-16 md:mb-20">
          A collection of systems, experiments and applied intelligence work —
          from production-ready platforms to exploratory builds.
        </p>

        {/* FEATURED */}
        <div className="mb-16 sm:mb-20 md:mb-28">
          <p className="text-xs tracking-[0.3em] text-neutral-400 uppercase mb-4 sm:mb-6">
            Featured
          </p>

          <div className="space-y-12 sm:space-y-16 md:space-y-20 border-l border-neutral-200 pl-4 sm:pl-6">
            {featured.map((p, i) => (
              <div key={i} className="group relative">

                <span className="absolute -left-[9px] sm:-left-[13px] top-2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-neutral-400 rounded-full group-hover:scale-125 transition"></span>

                {/* Image Container */}
                <div className="mb-4 sm:mb-6 overflow-hidden rounded-xl sm:rounded-2xl bg-neutral-100 aspect-video border border-neutral-200 group-hover:border-neutral-400 transition-all">
                  <img 
                    src={p.image} 
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <p className="text-xs text-neutral-400 mb-2">{p.tag}</p>

                <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-neutral-900 group-hover:tracking-wide transition-all">
                  {p.title}
                </h2>

                <p className="text-sm sm:text-base text-neutral-500 mt-2">
                  {p.desc}
                </p>

              </div>
            ))}
          </div>
        </div>

        {/* BUILDS */}
        <Section title="Systems Built" data={builds} />

        {/* KAGGLE */}
        <Section title="Kaggle Work" data={kaggle} />

        {/* ONGOING */}
        <Section title="Ongoing" data={ongoing} />

        {/* ADD YOUR FUTURE PROJECT SPACE */}
        <div className="mt-16 sm:mt-20 md:mt-28 border-t pt-12 sm:pt-16">
          <p className="text-xs tracking-[0.3em] text-neutral-400 uppercase mb-4">
            Future Space
          </p>

          <div className="border border-dashed border-neutral-300 rounded-xl sm:rounded-2xl p-6 sm:p-10 text-center text-sm sm:text-base text-neutral-400">
            You can place upcoming launches, experiments or private builds here.
          </div>
        </div>

        {/* HOME LINK */}
        <div className="mt-16 sm:mt-20 md:mt-24 text-center sm:text-right">
          <a
            href="/"
            className="text-xs sm:text-sm tracking-[0.3em] text-neutral-400 hover:text-neutral-900 transition"
          >
            BACK TO HOME
          </a>
        </div>

      </div>
    </section>
  )
}

function Section({ title, data }) {
  return (
    <div className="mb-16 sm:mb-20 md:mb-28">
      <p className="text-xs tracking-[0.3em] text-neutral-400 uppercase mb-4 sm:mb-6">
        {title}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 sm:gap-y-10 md:gap-y-12 gap-x-4 sm:gap-x-6 md:gap-x-8">
        {data.map((p, i) => (
          <div key={i} className="group">
            {/* Image Container */}
            <div className="mb-3 sm:mb-4 overflow-hidden rounded-lg sm:rounded-xl bg-neutral-100 aspect-video border border-neutral-200 group-hover:border-neutral-400 transition-all">
              <img 
                src={p.image} 
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <h3 className="text-lg sm:text-xl font-light text-neutral-900 group-hover:tracking-wide transition-all">
              {p.title}
            </h3>
            <p className="text-sm sm:text-base text-neutral-500 mt-1">
              {p.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
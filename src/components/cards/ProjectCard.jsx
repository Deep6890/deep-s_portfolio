import React from 'react'

export default function ProjectCard({ project }) {
  return (
    <div className="group relative border border-neutral-200 rounded-2xl overflow-hidden transition hover:border-neutral-400">

      {/* IMAGE */}
      <div className="relative h-40 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500 group-hover:scale-[1.03]"
        />

        {/* Overlay Tag */}
        {project.status && (
          <span className="absolute top-3 left-3 text-[10px] tracking-widest uppercase bg-white/80 backdrop-blur px-2 py-1 rounded">
            {project.status}
          </span>
        )}
      </div>


      {/* CONTENT */}
      <div className="p-6">

        {/* Title */}
        <h3 className="text-xl font-light text-neutral-900 group-hover:tracking-wide transition-all">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-neutral-500 mt-2 leading-relaxed">
          {project.description}
        </p>


        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] tracking-widest uppercase text-neutral-400"
            >
              {tag}
            </span>
          ))}
        </div>


        {/* Links */}
        <div className="flex gap-6 mt-6 text-xs tracking-wide">

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-neutral-900 transition"
            >
              Live →
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-neutral-900 transition"
            >
              Code →
            </a>
          )}

        </div>

      </div>

    </div>
  )
}

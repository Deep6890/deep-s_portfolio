import React from 'react'

export default function KaggleCard({ notebook }) {
  return (
    <div className="group relative border border-neutral-200 rounded-2xl overflow-hidden hover:border-neutral-400 transition">

      {/* IMAGE */}
      <div className="relative h-44 overflow-hidden">
        <img
          src={notebook.image}
          alt={notebook.title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500 group-hover:scale-[1.02]"
        />

        {/* Label */}
        {notebook.type && (
          <span className="absolute top-3 left-3 text-[10px] tracking-widest uppercase bg-white/80 backdrop-blur px-2 py-1 rounded">
            {notebook.type}
          </span>
        )}
      </div>

      {/* CONTENT */}
      <div className="p-6">

        {/* Title */}
        <h3 className="text-xl font-light text-neutral-900 group-hover:tracking-wide transition-all">
          {notebook.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-neutral-500 mt-2 leading-relaxed">
          {notebook.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {notebook.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] tracking-widest uppercase text-neutral-400"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Link */}
        <div className="mt-6 text-xs tracking-wide">
          <a
            href={notebook.notebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-600 hover:text-neutral-900 transition"
          >
            Open Notebook →
          </a>
        </div>

      </div>

    </div>
  )
}

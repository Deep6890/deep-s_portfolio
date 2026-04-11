import React, { useState } from 'react'

export default function HighlightCard({ highlight }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="group relative rounded-2xl overflow-hidden cursor-default"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Full-bleed photo */}
      <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900">
        <img
          src={highlight.image}
          alt={highlight.title}
          className={`w-full h-full object-cover transition-all duration-700 ${hovered ? 'scale-105 brightness-50' : 'scale-100 brightness-75'}`}
        />

        {/* Tag — always visible top-left */}
        <span className="absolute top-4 left-4 text-[9px] tracking-[0.25em] uppercase bg-white/10 backdrop-blur-sm border border-white/20 text-white px-2.5 py-1 rounded-full">
          {highlight.tag}
        </span>

        {/* Date — always visible top-right */}
        <span className="absolute top-4 right-4 text-[9px] tracking-widest text-white/60">
          {highlight.date}
        </span>

        {/* Bottom overlay — slides up on hover */}
        <div className={`absolute bottom-0 left-0 right-0 p-5 transition-all duration-500 ${hovered ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'}`}>
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/60 mb-1">
            {highlight.subtitle}
          </p>
          <h3 className="text-base font-light text-white leading-snug mb-2">
            {highlight.title}
          </h3>
          <p className="text-xs text-white/70 leading-relaxed">
            {highlight.description}
          </p>
        </div>

        {/* Static bottom title — visible when not hovered */}
        <div className={`absolute bottom-0 left-0 right-0 p-5 transition-all duration-300 ${hovered ? 'opacity-0' : 'opacity-100'}`}>
          <div className="bg-gradient-to-t from-black/70 to-transparent absolute inset-0 pointer-events-none" />
          <p className="relative text-[10px] uppercase tracking-[0.2em] text-white/60 mb-1">
            {highlight.subtitle}
          </p>
          <h3 className="relative text-base font-light text-white leading-snug">
            {highlight.title}
          </h3>
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import { Calendar, Flag, Github, ExternalLink } from 'lucide-react'

export default function EventCard({ event }) {
  return (
    <div className="group border border-neutral-200 dark:border-neutral-700 rounded-2xl overflow-hidden hover:border-neutral-400 dark:hover:border-neutral-500 transition">

      {/* Image */}
      <div className="relative h-44 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6">

        {/* Event Type */}
        <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500 mb-3">
          {event.type}
        </p>

        {/* Title */}
        <h3 className="text-lg font-light text-neutral-900 dark:text-white leading-snug mb-3 group-hover:tracking-wide transition-all">
          {event.title}
        </h3>

        {/* Achievement */}
        <div className="flex items-start gap-2 mb-4">
          <Flag size={14} className="text-neutral-400 dark:text-neutral-500 mt-1" />
          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {event.achievement}
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-100 dark:border-neutral-800 my-6"></div>

        {/* Footer Section */}
        <div className="flex items-center justify-between">

          {/* Date */}
          <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 tracking-wide">
            <Calendar size={14} />
            {event.date}
          </div>

          {/* Links */}
          <div className="flex items-center gap-4">

            {event.githubUrl && (
              <a
                href={event.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition"
              >
                <Github size={14} />
                Code
              </a>
            )}

            {event.projectUrl && (
              <a
                href={event.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition"
              >
                <ExternalLink size={14} />
                Live
              </a>
            )}

          </div>
        </div>

      </div>
    </div>
  )
}

import React from 'react'
import { BookOpen, Award, Calendar } from 'lucide-react'

export default function CourseCard({ course }) {
  return (
    <div className="group border border-neutral-200 dark:border-neutral-700 rounded-2xl overflow-hidden hover:border-neutral-400 dark:hover:border-neutral-500 transition">

      {/* Image */}
      <div className="relative h-44 overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6">

        {/* Provider */}
        <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500 mb-3">
          {course.provider}
        </p>

        {/* Title */}
        <h3 className="text-lg font-light text-neutral-900 dark:text-white leading-snug mb-3 group-hover:tracking-wide transition-all">
          {course.title}
        </h3>

        {/* Description */}
        {course.description && (
          <div className="flex items-start gap-2 mb-5">
            <BookOpen size={14} className="text-neutral-400 dark:text-neutral-500 mt-1" />
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {course.description}
            </p>
          </div>
        )}

        {/* Skills */}
        {course.skills && course.skills.length > 0 && (
          <div className="mb-6">
            <p className="text-[10px] uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-3">
              Skills
            </p>

            <div className="flex flex-wrap gap-4">
              {course.skills.map((skill, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition">

                  {skill.icon && (
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-4 h-4 object-contain"
                    />
                  )}

                  <span className="border-b border-neutral-300 dark:border-neutral-600 pb-1">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Divider */}
        <div className="border-t border-neutral-100 dark:border-neutral-800 my-6"></div>

        {/* Footer */}
        <div className="flex items-center justify-between">

          {/* Date */}
          <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 tracking-wide">
            <Calendar size={14} />
            {course.date}
          </div>

          {/* Certificate */}
          {course.certificateUrl && (
            <a
              href={course.certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition"
            >
              <Award size={14} />
              Certificate
            </a>
          )}
        </div>

      </div>
    </div>
  )
}

import React, { useState } from 'react'
import { BookOpen, Award, FileText, ExternalLink } from 'lucide-react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import 'react-pdf/dist/esm/Page/TextLayer.css'

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

export default function CourseCard({ course }) {
  const [numPages, setNumPages] = useState(null)
  const isPDF = course.image?.endsWith('.pdf')

  return (
    <div className="group border border-neutral-200 dark:border-neutral-700 rounded-2xl overflow-hidden hover:border-neutral-400 dark:hover:border-neutral-500 transition">

      {/* Image/PDF */}
      <div className="relative h-44 overflow-hidden bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
        {isPDF ? (
          <Document
            file={course.image}
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            className="flex items-center justify-center"
          >
            <Page
              pageNumber={1}
              height={176}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              className="mx-auto"
            />
          </Document>
        ) : (
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-contain transition duration-500"
          />
        )}
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
        <div className="border-t border-neutral-100 dark:border-neutral-800 my-4"></div>

        {/* Footer */}
        <div className="flex items-center gap-3">
          {course.certificateUrl && (
            <a
              href={course.certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition"
            >
              <ExternalLink size={14} />
              View
            </a>
          )}

          {course.image && (
            <a
              href={course.image}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition"
            >
              <FileText size={14} />
              PDF
            </a>
          )}
        </div>

      </div>
    </div>
  )
}

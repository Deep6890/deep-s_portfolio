import React, { useState } from 'react'
import { Calendar, Flag, FileText, ExternalLink } from 'lucide-react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import 'react-pdf/dist/esm/Page/TextLayer.css'

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

export default function EventCard({ event }) {
  const [numPages, setNumPages] = useState(null)
  const isPDF = event.image?.endsWith('.pdf')

  return (
    <div className="group border border-neutral-200 dark:border-neutral-700 rounded-2xl overflow-hidden hover:border-neutral-400 dark:hover:border-neutral-500 transition">

      {/* Image/PDF */}
      <div className="relative h-44 overflow-hidden bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
        {isPDF ? (
          <Document
            file={event.image}
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
            src={event.image}
            alt={event.title}
            className="w-full h-full object-contain transition duration-500"
          />
        )}
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
        <div className="border-t border-neutral-100 dark:border-neutral-800 my-4"></div>

        {/* Footer Section */}
        <div className="flex items-center gap-3">
          {event.image && (
            <a
              href={event.image}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition"
            >
              <FileText size={14} />
              View
            </a>
          )}
        </div>

      </div>
    </div>
  )
}

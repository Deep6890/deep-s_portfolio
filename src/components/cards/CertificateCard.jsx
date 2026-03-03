import React, { useState } from 'react'
import { Award, ExternalLink, Linkedin, FileText } from 'lucide-react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import 'react-pdf/dist/esm/Page/TextLayer.css'

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

export default function CertificateCard({ certificate }) {
  const [numPages, setNumPages] = useState(null)
  const isPDF = certificate.image?.endsWith('.pdf')

  const shareOnLinkedIn = () => {
    const url = `https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME&name=${encodeURIComponent(certificate.title)}&organizationName=${encodeURIComponent(certificate.issuer)}`
    window.open(url, '_blank')
  }

  return (
    <div className="group border border-neutral-200 dark:border-neutral-700 rounded-2xl overflow-hidden hover:border-neutral-400 dark:hover:border-neutral-500 transition">

      {/* Image/PDF */}
      <div className="relative h-44 overflow-hidden bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
        {isPDF ? (
          <Document
            file={certificate.image}
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
            src={certificate.image}
            alt={certificate.title}
            className="w-full h-full object-contain transition duration-500"
          />
        )}
      </div>

      {/* Content */}
      <div className="p-6">

        {/* Title + Icon */}
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-light text-neutral-900 dark:text-white leading-snug group-hover:tracking-wide transition-all">
            {certificate.title}
          </h3>

          <Award size={16} className="text-neutral-400 dark:text-neutral-500 mt-1" />
        </div>

        {/* Issuer */}
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {certificate.issuer}
        </p>

        {/* Divider */}
        <div className="border-t border-neutral-100 dark:border-neutral-800 my-4"></div>

        {/* Links */}
        <div className="flex items-center gap-3">
          {certificate.credentialUrl && (
            <a
              href={certificate.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition"
            >
              <ExternalLink size={14} />
              View
            </a>
          )}
          
          {certificate.image && (
            <a
              href={certificate.image}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition"
            >
              <FileText size={14} />
              PDF
            </a>
          )}

          <button
            onClick={shareOnLinkedIn}
            className="inline-flex items-center gap-1 text-xs text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <Linkedin size={14} />
            Share
          </button>
        </div>

      </div>
    </div>
  )
}

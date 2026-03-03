import React from 'react'
import { Award, ArrowUpRight } from 'lucide-react'

export default function CertificateCard({ certificate }) {
  return (
    <div className="group border border-neutral-200 dark:border-neutral-700 rounded-2xl overflow-hidden hover:border-neutral-400 dark:hover:border-neutral-500 transition">

      {/* Image */}
      <div className="relative h-44 overflow-hidden">
        <img
          src={certificate.image}
          alt={certificate.title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500"
        />
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

        {/* Date */}
        <p className="text-[10px] tracking-widest uppercase text-neutral-400 dark:text-neutral-500 mt-2">
          {certificate.date}
        </p>

        {/* Divider */}
        <div className="border-t border-neutral-100 dark:border-neutral-800 my-6"></div>

        {/* Credential Link */}
        {certificate.credentialUrl && (
          <a
            href={certificate.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs tracking-wide text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition"
          >
            View Credential
            <ArrowUpRight size={14} />
          </a>
        )}

      </div>
    </div>
  )
}

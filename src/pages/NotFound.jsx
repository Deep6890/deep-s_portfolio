import React from 'react'
import { AlertCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="text-center">
        <AlertCircle size={64} className="text-neutral-400 mx-auto mb-4" />
        <h1 className="text-6xl font-bold text-neutral-900 mb-2">404</h1>
        <p className="text-xl text-neutral-600 mb-6">Page not found</p>
        <Link 
          to="/" 
          className="inline-block px-6 py-3 bg-neutral-900 text-white rounded-full hover:bg-neutral-800 transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  )
}

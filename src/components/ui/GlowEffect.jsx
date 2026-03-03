import { useState } from 'react'

export default function GlowEffect({ children, className = '' }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }

  return (
    <div 
      className={`relative group ${className}`}
      onMouseMove={handleMouseMove}
    >
      {/* Cursor-following Glow */}
      <div 
        className="absolute w-40 h-40 rounded-full pointer-events-none opacity-0 group-hover:opacity-70 z-0"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%)',
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          transform: 'translate(-50%, -50%)',
          filter: 'blur(30px)',
          transition: 'left 0.1s ease-out, top 0.1s ease-out'
        }}
      />
      {children}
    </div>
  )
}

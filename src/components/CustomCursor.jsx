import { useEffect, useState, useRef } from 'react'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    // Hide cursor on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true)
      return
    }
    let mouseX = 0
    let mouseY = 0
    let dotX = 0
    let dotY = 0
    let ringX = 0
    let ringY = 0

    const updatePosition = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const animate = () => {
      // Smooth follow with different speeds
      dotX += (mouseX - dotX) * 1 // Instant for dot
      dotY += (mouseY - dotY) * 1
      ringX += (mouseX - ringX) * 0.15 // Slower for ring
      ringY += (mouseY - ringY) * 0.15

      if (dotRef.current) {
        dotRef.current.style.left = `${dotX}px`
        dotRef.current.style.top = `${dotY}px`
      }
      if (ringRef.current) {
        ringRef.current.style.left = `${ringX}px`
        ringRef.current.style.top = `${ringY}px`
      }

      requestAnimationFrame(animate)
    }

    const handleMouseOver = (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', updatePosition)
    document.addEventListener('mouseover', handleMouseOver)
    animate()

    return () => {
      window.removeEventListener('mousemove', updatePosition)
      document.removeEventListener('mouseover', handleMouseOver)
    }
  }, [isTouchDevice])

  if (isTouchDevice) return null

  return (
    <>
      {/* Inner dot */}
      <div
        ref={dotRef}
        className="fixed w-2 h-2 bg-neutral-900 dark:bg-white rounded-full pointer-events-none z-[9999] transition-transform duration-150"
        style={{
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`
        }}
      />
      {/* Outer ring */}
      <div
        ref={ringRef}
        className="fixed w-8 h-8 border-2 border-neutral-900 dark:border-white rounded-full pointer-events-none z-[9999] transition-transform duration-300"
        style={{
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`,
          opacity: 0.6
        }}
      />
    </>
  )
}

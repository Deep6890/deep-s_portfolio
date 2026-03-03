import React, { useEffect, useRef, useState } from 'react'
import { useDrag } from '@use-gesture/react'

// This component creates an interactive bubble graph of skills with physics-based movement and drag functionality.
export default function SkillsGraph() {
  const containerRef = useRef(null)
  const [bubbles, setBubbles] = useState([])

  const skills = [
    { name: 'HTML', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', size: 100, color: '#E34F26' },
    { name: 'CSS', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', size: 95, color: '#1572B6' },
    { name: 'Tailwind', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', size: 105, color: '#06B6D4' },
    { name: 'JavaScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', size: 110, color: '#F7DF1E' },
    { name: 'React', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', size: 115, color: '#61DAFB' },
    { name: 'Python', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', size: 120, color: '#3776AB' },
    { name: 'NumPy', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg', size: 90, color: '#013243' },
    { name: 'Pandas', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg', size: 100, color: '#150458' },
    { name: 'GitHub', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', size: 95, color: '#181717' },
    { name: 'MongoDB', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', size: 90, color: '#47A248' },
    { name: 'Supabase', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg', size: 85, color: '#3ECF8E' },
    { name: 'MySQL', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', size: 95, color: '#4479A1' },
    { name: 'Scikit-learn', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg', size: 100, color: '#F7931E' },
    { name: 'SciPy', img: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/SCIPY_2.svg', size: 90, color: '#8CAAE6' },
    { name: 'Node.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', size: 105, color: '#339933' },
    { name: 'Git', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', size: 90, color: '#F05032' },
    { name: 'VS Code', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', size: 85, color: '#007ACC' },
    { name: 'TypeScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', size: 95, color: '#3178C6' },
    { name: 'Bootstrap', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', size: 90, color: '#7952B3' },
    { name: 'Figma', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', size: 85, color: '#F24E1E' },
  ]

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const containerRect = container.getBoundingClientRect()
    const initialBubbles = skills.map((skill, index) => {
      const angle = (index / skills.length) * 2 * Math.PI
      const radius = Math.min(containerRect.width, containerRect.height) * 0.3
      return {
        ...skill,
        x: containerRect.width / 2 + Math.cos(angle) * radius - skill.size / 2,
        y: containerRect.height / 2 + Math.sin(angle) * radius - skill.size / 2,
        vx: (Math.random() - 0.5) * 0.02,
        vy: (Math.random() - 0.5) * 0.02,
        isDragging: false,
      }
    })
    setBubbles(initialBubbles)

    let animationId
    const animate = () => {
      setBubbles(prev => {
        const updated = prev.map(bubble => {
          if (bubble.isDragging) return bubble

          let { x, y, vx, vy, size } = bubble

          x += vx
          y += vy

          if (x <= 0 || x >= containerRect.width - size) {
            vx *= -0.9
            x = Math.max(0, Math.min(x, containerRect.width - size))
          }
          if (y <= 0 || y >= containerRect.height - size) {
            vy *= -0.9
            y = Math.max(0, Math.min(y, containerRect.height - size))
          }

          return { ...bubble, x, y, vx, vy }
        })

        // Collision detection
        for (let i = 0; i < updated.length; i++) {
          for (let j = i + 1; j < updated.length; j++) {
            const dx = updated[j].x - updated[i].x
            const dy = updated[j].y - updated[i].y
            const distance = Math.sqrt(dx * dx + dy * dy)
            const minDist = (updated[i].size + updated[j].size) / 2

            if (distance < minDist) {
              const angle = Math.atan2(dy, dx)
              const targetX = updated[i].x + Math.cos(angle) * minDist
              const targetY = updated[i].y + Math.sin(angle) * minDist
              const ax = (targetX - updated[j].x) * 0.02
              const ay = (targetY - updated[j].y) * 0.02
              updated[i].vx -= ax
              updated[i].vy -= ay
              updated[j].vx += ax
              updated[j].vy += ay
            }
          }
        }

        return updated
      })
      animationId = requestAnimationFrame(animate)
    }
    animate()

    return () => cancelAnimationFrame(animationId)
  }, [])

  const Bubble = ({ bubble, index }) => {
    const bind = useDrag(({ offset: [x, y], dragging }) => {
      setBubbles(prev => {
        const updated = [...prev]
        updated[index] = { ...updated[index], x, y, vx: 0, vy: 0, isDragging: dragging }
        return updated
      })
    }, {
      from: () => [bubble.x, bubble.y],
      bounds: () => ({
        left: 0,
        right: containerRef.current.offsetWidth - bubble.size,
        top: 0,
        bottom: containerRef.current.offsetHeight - bubble.size,
      })
    })

    return (
      <div
        {...bind()}
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          transform: `translate(${bubble.x}px, ${bubble.y}px)`,
          width: `${bubble.size}px`,
          height: `${bubble.size}px`,
          cursor: 'grab',
          touchAction: 'none',
          borderColor: bubble.color,
        }}
        className="rounded-full bg-white border-4 flex items-center justify-center transition-shadow duration-300"
      >
        <div className="flex flex-col items-center justify-center p-2">
          <img
            src={bubble.img}
            alt={bubble.name}
            className="w-4/5 h-4/5 object-contain"
            draggable={false}
          />
        </div>
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-800 rounded-3xl border border-neutral-200 dark:border-neutral-700 overflow-hidden"
    >
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {bubbles.map((bubble, i) =>
          bubbles.slice(i + 1).map((otherBubble, j) => {
            const dx = (otherBubble.x + otherBubble.size / 2) - (bubble.x + bubble.size / 2)
            const dy = (otherBubble.y + otherBubble.size / 2) - (bubble.y + bubble.size / 2)
            const distance = Math.sqrt(dx * dx + dy * dy)
            const maxDistance = 200

            if (distance < maxDistance) {
              const opacity = 1 - (distance / maxDistance)
              return (
                <line
                  key={`${i}-${j}`}
                  x1={bubble.x + bubble.size / 2}
                  y1={bubble.y + bubble.size / 2}
                  x2={otherBubble.x + otherBubble.size / 2}
                  y2={otherBubble.y + otherBubble.size / 2}
                  stroke="#000000"
                  strokeWidth="3"
                  opacity={opacity * 0.4}
                />
              )
            }
            return null
          })
        )}
      </svg>
      {bubbles.map((bubble, index) => (
        <Bubble key={bubble.name} bubble={bubble} index={index} />
      ))}
    </div>
  )
}

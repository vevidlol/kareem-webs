'use client'

import { useEffect } from 'react'

const SpotlightCursor = () => {
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      const { clientX, clientY } = e
      document.documentElement.style.setProperty('--mouse-x', `${clientX}px`)
      document.documentElement.style.setProperty('--mouse-y', `${clientY}px`)
    }

    document.addEventListener('mousemove', updateMousePosition)

    return () => {
      document.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-30">
      <div className="absolute inset-0 spotlight-bg opacity-80"></div>
    </div>
  )
}

export default SpotlightCursor

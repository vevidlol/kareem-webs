'use client'

import { useEffect } from 'react'
import anime from 'animejs'

const Loading = () => {
  useEffect(() => {
    // Animate loading dots
    anime({
      targets: '.loading-dot',
      scale: [1, 1.5, 1],
      opacity: [0.5, 1, 0.5],
      duration: 1000,
      delay: anime.stagger(200),
      loop: true,
      easing: 'easeInOutSine'
    })
  }, [])

  return (
    <div className="fixed inset-0 bg-dark-950 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="text-4xl font-bold gradient-text mb-8">KA</div>
        <div className="flex space-x-2 justify-center">
          <div className="loading-dot w-3 h-3 bg-primary-500 rounded-full"></div>
          <div className="loading-dot w-3 h-3 bg-primary-500 rounded-full"></div>
          <div className="loading-dot w-3 h-3 bg-primary-500 rounded-full"></div>
        </div>
      </div>
    </div>
  )
}

export default Loading

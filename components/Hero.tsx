'use client'

import { useEffect, useRef } from 'react'
import { ChevronDown } from 'lucide-react'
import anime from 'animejs'

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const nameRef = useRef<HTMLHeadingElement>(null)
  const taglineRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Animate hero elements on mount
    const tl = anime.timeline({
      easing: 'easeOutExpo',
      duration: 1000,
    })

    tl.add({
      targets: nameRef.current,
      translateY: [100, 0],
      opacity: [0, 1],
      duration: 1200,
    })
    .add({
      targets: taglineRef.current,
      translateY: [50, 0],
      opacity: [0, 1],
      duration: 800,
    }, '-=600')
    .add({
      targets: ctaRef.current,
      translateY: [30, 0],
      opacity: [0, 1],
      duration: 600,
    }, '-=400')

    // Floating animation for the scroll indicator
    anime({
      targets: '.scroll-indicator',
      translateY: [0, 10, 0],
      duration: 2000,
      loop: true,
      easing: 'easeInOutSine',
    })
  }, [])

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-950 to-dark-900"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 
          ref={nameRef}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 opacity-0"
        >
          <span className="gradient-text">Kareem</span>
          <br />
          <span className="text-dark-100">Ashraf</span>
        </h1>
        
        <p 
          ref={taglineRef}
          className="text-xl sm:text-2xl md:text-3xl text-dark-300 mb-8 font-light opacity-0"
        >
          Web Developer | 
          <span className="text-primary-400 font-medium"> Modern & Mobile-Friendly Websites</span>
        </p>
        
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0">
          <button className="group relative px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 glow-on-hover">
            <span className="relative z-10">View My Work</span>
          </button>
          
          <button className="px-8 py-4 border border-dark-600 hover:border-primary-400 text-dark-300 hover:text-primary-400 font-medium rounded-lg transition-all duration-300 transform hover:scale-105">
            Get In Touch
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer scroll-indicator"
        onClick={scrollToAbout}
      >
        <div className="flex flex-col items-center text-dark-400 hover:text-primary-400 transition-colors duration-300">
          <span className="text-sm mb-2 font-medium">Scroll Down</span>
          <ChevronDown size={24} className="animate-bounce" />
        </div>
      </div>
    </section>
  )
}

export default Hero

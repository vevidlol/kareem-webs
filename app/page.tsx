'use client'

import { useEffect } from 'react'
import Navigation from '@/components/Navigation'
import SpotlightCursor from '@/components/SpotlightCursor'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Portfolio from '@/components/Portfolio'
import Contact from '@/components/Contact'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Home() {
  useEffect(() => {
    // GSAP scroll animations
    const ctx = gsap.context(() => {
      // Smooth scroll reveal animations
      gsap.utils.toArray('section').forEach((section: any) => {
        gsap.fromTo(section, 
          {
            opacity: 0,
            y: 50
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        )
      })

      // Parallax effect for background elements
      gsap.utils.toArray('.parallax').forEach((element: any) => {
        gsap.to(element, {
          yPercent: -50,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        })
      })

      // Text reveal animations
      gsap.utils.toArray('.text-reveal').forEach((text: any) => {
        gsap.fromTo(text,
          {
            opacity: 0,
            y: 30,
            skewY: 7
          },
          {
            opacity: 1,
            y: 0,
            skewY: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: text,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        )
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <main className="relative">
      {/* Spotlight cursor effect */}
      <SpotlightCursor />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Page sections */}
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-dark-900 border-t border-dark-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-dark-400">
            © 2024 Kareem Ashraf. All rights reserved. Built with Next.js & TailwindCSS
          </p>
        </div>
      </footer>
    </main>
  )
}

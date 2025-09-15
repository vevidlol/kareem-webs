'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Code, Smartphone, Zap, Users } from 'lucide-react'
import anime from 'animejs'

const About = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate image
            anime({
              targets: imageRef.current,
              translateX: [-100, 0],
              opacity: [0, 1],
              duration: 1000,
              easing: 'easeOutExpo',
            })

            // Animate content
            anime({
              targets: contentRef.current?.children,
              translateY: [50, 0],
              opacity: [0, 1],
              duration: 800,
              delay: anime.stagger(200),
              easing: 'easeOutExpo',
            })
          }
        })
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile-First",
      description: "Responsive designs that work perfectly on all devices"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance",
      description: "Optimized websites with lightning-fast load times"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "User-Centric",
      description: "Intuitive interfaces focused on user experience"
    }
  ]

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-900/50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div ref={imageRef} className="relative opacity-0">
            <div className="relative w-full max-w-md mx-auto">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary-500/20 to-purple-500/20 p-1">
                <div className="w-full h-full rounded-xl overflow-hidden bg-dark-800">
                  <Image
                    src="/WhatsApp Image 2025-09-15 at 3.42.07 PM.jpeg"
                    alt="Kareem Ashraf"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary-500 rounded-full animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-blue-500 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="space-y-8">
            <div className="opacity-0">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="gradient-text">Me</span>
              </h2>
              <p className="text-lg text-dark-300 leading-relaxed mb-6">
                I'm a passionate web developer with a keen eye for modern design and clean code. 
                I specialize in creating beautiful, responsive websites that not only look great 
                but also provide exceptional user experiences across all devices.
              </p>
              <p className="text-lg text-dark-300 leading-relaxed">
                With expertise in the latest technologies and frameworks, I bring ideas to life 
                through innovative web solutions. My focus is on delivering high-quality, 
                performance-optimized websites that help businesses grow and succeed online.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 opacity-0">
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-xl bg-dark-800/50 border border-dark-700 hover:border-primary-500/50 transition-all duration-300 card-hover"
                >
                  <div className="flex items-center mb-3">
                    <div className="p-2 bg-primary-500/20 rounded-lg text-primary-400 mr-3">
                      {item.icon}
                    </div>
                    <h3 className="font-semibold text-dark-100">{item.title}</h3>
                  </div>
                  <p className="text-dark-400 text-sm">{item.description}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About

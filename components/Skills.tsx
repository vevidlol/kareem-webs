'use client'

import { useEffect, useRef } from 'react'
import anime from 'animejs'

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 95, icon: "⚛️" },
        { name: "Next.js", level: 90, icon: "🔷" },
        { name: "TypeScript", level: 88, icon: "📘" },
        { name: "Tailwind CSS", level: 92, icon: "🎨" },
        { name: "JavaScript", level: 94, icon: "💛" },
        { name: "HTML5/CSS3", level: 96, icon: "🌐" }
      ]
    },
    {
      title: "Backend & Tools",
      skills: [
        { name: "Node.js", level: 85, icon: "💚" },
        { name: "MongoDB", level: 80, icon: "🍃" },
        { name: "Git", level: 90, icon: "🔀" },
        { name: "Figma", level: 88, icon: "🎯" },
        { name: "Vercel", level: 92, icon: "▲" },
        { name: "API Development", level: 82, icon: "🔌" }
      ]
    },
    {
      title: "Design & Animation",
      skills: [
        { name: "GSAP", level: 85, icon: "⚡" },
        { name: "Framer Motion", level: 88, icon: "🎭" },
        { name: "Anime.js", level: 90, icon: "✨" },
        { name: "UI/UX Design", level: 86, icon: "🎨" },
        { name: "Responsive Design", level: 94, icon: "📱" },
        { name: "Web Performance", level: 89, icon: "🚀" }
      ]
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate skill cards
            anime({
              targets: '.skill-card',
              translateY: [50, 0],
              opacity: [0, 1],
              duration: 800,
              delay: anime.stagger(100),
              easing: 'easeOutExpo',
            })

            // Animate skill bars
            setTimeout(() => {
              anime({
                targets: '.skill-bar',
                width: (el) => `${el.dataset.level}%`,
                duration: 1500,
                delay: anime.stagger(50),
                easing: 'easeOutExpo',
              })
            }, 500)
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

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-dark-300 max-w-2xl mx-auto">
            Constantly learning and evolving with the latest technologies 
            to deliver cutting-edge web solutions.
          </p>
        </div>

        <div ref={skillsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="skill-card opacity-0 p-8 rounded-2xl bg-dark-800/50 border border-dark-700 hover:border-primary-500/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-8 text-center gradient-text">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="font-medium text-dark-100">{skill.name}</span>
                      </div>
                      <span className="text-sm text-dark-400">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-dark-700 rounded-full h-2 overflow-hidden">
                      <div 
                        className="skill-bar h-full bg-gradient-to-r from-primary-500 to-blue-500 rounded-full transition-all duration-300"
                        data-level={skill.level}
                        style={{ width: '0%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "50+", label: "Projects Completed" },
            { number: "3+", label: "Years Experience" },
            { number: "100%", label: "Client Satisfaction" },
            { number: "24/7", label: "Support Available" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-xl bg-dark-800/30 border border-dark-700 hover:border-primary-500/50 transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-dark-400 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

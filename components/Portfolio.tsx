'use client'

import { useEffect, useRef } from 'react'
import { ExternalLink, Github, Eye } from 'lucide-react'
import anime from 'animejs'

const Portfolio = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)

  const projects = [
    {
      id: 1,
      title: "Maison de Café",
      description: "Premium French coffee experience website featuring elegant design, coffee collections, and gallery showcase. Built with modern web technologies for a sophisticated coffee brand.",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop",
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      liveUrl: "https://vevidlol.github.io/maisondecaf/",
      githubUrl: "https://github.com/vevidlol/maisondecaf",
      featured: true
    },
    {
      id: 2,
      title: "TaskWise",
      description: "Intelligent task management application built with modern frameworks. Features smart organization, collaboration tools, and productivity analytics for efficient workflow management.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      tags: ["React", "Node.js", "AI Integration", "Task Management"],
      liveUrl: "https://taskwise-dark-bloom.lovable.app/",
      githubUrl: "https://github.com/vevidlol/taskwise",
      featured: true
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: '.project-card',
              translateY: [50, 0],
              opacity: [0, 1],
              duration: 800,
              delay: anime.stagger(150),
              easing: 'easeOutExpo',
            })
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      id="portfolio" 
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-900/50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-lg text-dark-300 max-w-2xl mx-auto">
            A collection of projects that showcase my skills in modern web development, 
            from concept to deployment.
          </p>
        </div>

        <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="project-card opacity-0 group relative rounded-2xl overflow-hidden bg-dark-800 border border-dark-700 hover:border-primary-500/50 transition-all duration-500 card-hover"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <div 
                  className="w-full h-full bg-gradient-to-br from-primary-500/20 to-purple-500/20 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ 
                    backgroundImage: `url(${project.image})`,
                    backgroundBlendMode: 'overlay'
                  }}
                ></div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                    <div className="flex space-x-3">
                      <a
                        href={project.liveUrl}
                        className="p-2 bg-primary-500 hover:bg-primary-600 rounded-lg transition-colors duration-200"
                        title="View Live"
                      >
                        <ExternalLink size={16} />
                      </a>
                      <a
                        href={project.githubUrl}
                        className="p-2 bg-dark-700 hover:bg-dark-600 rounded-lg transition-colors duration-200"
                        title="View Code"
                      >
                        <Github size={16} />
                      </a>
                    </div>
                    <div className="p-2 bg-dark-700/80 rounded-lg">
                      <Eye size={16} />
                    </div>
                  </div>
                </div>

                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-primary-500 text-white text-xs font-medium rounded-full">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-dark-100 group-hover:text-primary-400 transition-colors duration-200">
                  {project.title}
                </h3>
                
                <p className="text-dark-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-dark-700 text-dark-300 text-xs font-medium rounded-full border border-dark-600 hover:border-primary-500/50 transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex space-x-3">
                  <a
                    href={project.liveUrl}
                    className="flex-1 py-2 px-4 bg-primary-500 hover:bg-primary-600 text-white text-sm font-medium rounded-lg transition-colors duration-200 text-center"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex-1 py-2 px-4 border border-dark-600 hover:border-primary-400 text-dark-300 hover:text-primary-400 text-sm font-medium rounded-lg transition-colors duration-200 text-center"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Portfolio

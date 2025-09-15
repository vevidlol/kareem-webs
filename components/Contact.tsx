'use client'

import { useEffect, useRef, useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'
import anime from 'animejs'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: '.contact-item',
              translateY: [50, 0],
              opacity: [0, 1],
              duration: 800,
              delay: anime.stagger(150),
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // EmailJS configuration
      const serviceID = 'service_portfolio' // You'll need to set this up
      const templateID = 'template_contact' // You'll need to set this up
      const publicKey = 'your_public_key' // You'll need to set this up

      // For now, we'll use a simple mailto fallback
      const subject = encodeURIComponent(formData.subject || 'Portfolio Contact')
      const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}
      `)
      
      // Open default email client
      window.open(`mailto:kareemashrafalt@gmail.com?subject=${subject}&body=${body}`)
      
      setSubmitStatus('success')
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' })
        setSubmitStatus('idle')
      }, 3000)
      
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
      
      // Reset error status after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }

    // Show success animation
    anime({
      targets: formRef.current,
      scale: [1, 1.02, 1],
      duration: 600,
      easing: 'easeInOutQuad'
    })
  }

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "kareemashrafalt@gmail.com",
      link: "mailto:kareemashrafalt@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+20 11 4122 1797",
      link: "tel:+201141221797"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Cairo, Egypt",
      link: "#"
    }
  ]


  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-dark-300 max-w-2xl mx-auto">
            Ready to start your next project? Let&apos;s work together to create something amazing.
            I&apos;m always excited to discuss new opportunities and ideas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="contact-item opacity-0">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Let&apos;s Connect</h3>
              <p className="text-dark-300 mb-8">
                 I&apos;m currently available for freelance work and full-time opportunities. 
                 Whether you have a project in mind or just want to chat about web development, 
                 I&apos;d love to hear from you.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className="contact-item opacity-0 p-6 rounded-xl bg-dark-800/50 border border-dark-700 hover:border-primary-500/50 transition-all duration-300 card-hover"
                >
                  <a href={info.link} className="flex items-center space-x-4">
                    <div className="p-3 bg-primary-500/20 rounded-lg text-primary-400">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-100">{info.title}</h4>
                      <p className="text-dark-400">{info.value}</p>
                    </div>
                  </a>
                </div>
              ))}
            </div>

          </div>

          {/* Contact Form */}
          <div className="contact-item opacity-0">
            <form 
              ref={formRef}
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl bg-dark-800/50 border border-dark-700 space-y-6"
            >
              <h3 className="text-2xl font-bold mb-6">Send Message</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-dark-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-dark-100 placeholder-dark-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors duration-200"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-dark-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-dark-100 placeholder-dark-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-dark-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-dark-100 placeholder-dark-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors duration-200"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dark-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-dark-100 placeholder-dark-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors duration-200 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

               <button
                 type="submit"
                 disabled={isSubmitting}
                 className={`w-full group relative px-8 py-4 font-medium rounded-lg transition-all duration-300 transform hover:scale-105 disabled:transform-none glow-on-hover flex items-center justify-center space-x-2 ${
                   submitStatus === 'success' 
                     ? 'bg-green-500 hover:bg-green-600 text-white' 
                     : submitStatus === 'error'
                     ? 'bg-red-500 hover:bg-red-600 text-white'
                     : 'bg-gradient-to-r from-primary-500 to-blue-500 hover:from-primary-600 hover:to-blue-600 disabled:from-dark-600 disabled:to-dark-600 text-white'
                 }`}
               >
                 {isSubmitting ? (
                   <>
                     <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                     <span>Opening Email...</span>
                   </>
                 ) : submitStatus === 'success' ? (
                   <>
                     <CheckCircle size={20} />
                     <span>Email Client Opened!</span>
                   </>
                 ) : submitStatus === 'error' ? (
                   <>
                     <AlertCircle size={20} />
                     <span>Try Again</span>
                   </>
                 ) : (
                   <>
                     <Send size={20} />
                     <span>Send Message</span>
                   </>
                 )}
               </button>

               {/* Status Messages */}
               {submitStatus === 'success' && (
                 <div className="mt-4 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-sm">
                   <div className="flex items-center space-x-2">
                     <CheckCircle size={16} />
                     <span>Your default email client should open with the message pre-filled. Just hit send!</span>
                   </div>
                 </div>
               )}

               {submitStatus === 'error' && (
                 <div className="mt-4 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-sm">
                   <div className="flex items-center space-x-2">
                     <AlertCircle size={16} />
                     <span>Unable to open email client. Please contact me directly at kareemashrafalt@gmail.com</span>
                   </div>
                 </div>
               )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

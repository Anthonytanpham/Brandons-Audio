'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Volume2, Monitor, Camera, Settings } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: <Volume2 size={48} />,
      title: 'SPEAKER & SUBWOOFER INSTALLATION',
      description: 'Professional installation of premium speakers and subwoofers for crystal-clear sound and powerful bass.'
    },
    {
      icon: <Monitor size={48} />,  
      title: 'CUSTOM HEAD UNITS & TOUCHSCREENS',
      description: 'Upgrade your dashboard with modern touchscreen displays and advanced head unit systems.'
    },
    {
      icon: <Camera size={48} />,
      title: 'BACKUP CAMERAS & DASH CAMS',
      description: 'Enhance safety with professional backup camera and dash cam installations for peace of mind.'
    },
    {
      icon: <Settings size={48} />,
      title: 'SOUNDPROOFING & TUNING',
      description: 'Optimize your audio experience with professional soundproofing and system tuning services.'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="services" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-4 tracking-tight">
            OUR <span className="text-primary-red">SERVICES</span>
          </h2>
          <p className="text-xl text-primary-silver max-w-3xl mx-auto">
            Professional car audio and video installation services designed to elevate your driving experience
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(204, 0, 0, 0.3)"
              }}
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800 hover:border-primary-red/50 transition-all duration-300 group"
            >
              {/* Icon */}
              <motion.div 
                className="text-primary-red mb-6 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 5 }}
              >
                {service.icon}
              </motion.div>

              {/* Title */}
              <h3 className="text-xl font-display font-bold text-white mb-4 group-hover:text-primary-red transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-primary-silver leading-relaxed">
                {service.description}
              </p>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary-red/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-primary-silver mb-6">
            Ready to upgrade your car's audio and video system?
          </p>
          <motion.button
            onClick={() => {
              const element = document.querySelector('#contact')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="inline-flex items-center px-8 py-3 text-lg font-display font-bold text-white bg-primary-red hover:bg-red-600 rounded-lg transition-all duration-300 glow-red"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 25px rgba(204, 0, 0, 0.6)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            GET A QUOTE TODAY
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Services 
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Volume2, Zap } from 'lucide-react'

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-black bg-audio-wave relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80"></div>
      
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 left-10 text-primary-red opacity-20"
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <Volume2 size={120} />
      </motion.div>
      
      <motion.div
        className="absolute bottom-20 right-10 text-primary-red opacity-20"
        animate={{ 
          rotate: [360, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <Zap size={100} />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* Main Headline */}
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-white mb-6 tracking-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            SOUND THAT{' '}
            <span className="text-primary-red bg-gradient-to-r from-primary-red to-red-600 bg-clip-text text-transparent">
              MOVES YOU
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            className="text-xl md:text-2xl lg:text-3xl text-primary-silver mb-8 font-light tracking-wide max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Expert Car Audio & Video Installation in Utah
          </motion.p>

          {/* CTA Button */}
          <motion.button
            onClick={scrollToContact}
            className="inline-flex items-center px-8 py-4 text-lg font-display font-bold text-white bg-primary-red hover:bg-red-600 rounded-lg transition-all duration-300 transform hover:scale-105 glow-red group"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            whileHover={{ 
              boxShadow: "0 0 30px rgba(204, 0, 0, 0.8)",
              scale: 1.05 
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="mr-2">SCHEDULE AN INSTALL</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.div>
          </motion.button>

          {/* Features */}
          <motion.div 
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            {[
              { title: 'PROFESSIONAL', desc: 'Expert Installation' },
              { title: 'QUALITY', desc: 'Premium Equipment' },
              { title: 'WARRANTY', desc: 'Guaranteed Work' }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-primary-red font-display font-bold text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-primary-silver">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary-red rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-primary-red rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero 
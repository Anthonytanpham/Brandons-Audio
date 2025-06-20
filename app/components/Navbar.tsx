'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'HOME', href: '#home' },
    { name: 'SERVICES', href: '#services' },
    { name: 'GALLERY', href: '#gallery' },
    { name: 'TESTIMONIALS', href: '#testimonials' },
    { name: 'CONTACT', href: '#contact' }
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/95 backdrop-blur-sm' : 'bg-black'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
          >
            {/* Audio Visualizer Bars */}
            <div className="flex items-end space-x-1">
              {[1, 2, 3, 4, 5, 4, 3, 2, 1].map((height, index) => (
                <motion.div
                  key={index}
                  className="bg-primary-red rounded-sm"
                  style={{ width: '2px', height: `${height * 3}px` }}
                  animate={{ 
                    height: [`${height * 3}px`, `${height * 5}px`, `${height * 3}px`]
                  }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    delay: index * 0.1
                  }}
                />
              ))}
            </div>
            {/* Your Logo */}
            <Image
              src="/brandons-logo.png"
              alt="Brandon's Auto Sound Logo"
              width={280}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-white font-display font-medium tracking-wide hover:text-primary-red transition-colors duration-300 relative group"
                whileHover={{ scale: 1.05 }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-red transition-all duration-300 group-hover:w-full"></span>
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-primary-red transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-sm border-t border-primary-red/20"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 py-2 text-white font-display font-medium tracking-wide hover:text-primary-red hover:bg-primary-red/10 transition-all duration-300"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar 
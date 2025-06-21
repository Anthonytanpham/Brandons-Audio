'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <Facebook size={24} />, href: '#', label: 'Facebook' },
    { icon: <Instagram size={24} />, href: '#', label: 'Instagram' },
    { icon: <Twitter size={24} />, href: '#', label: 'Twitter' },
    { icon: <Youtube size={24} />, href: '#', label: 'YouTube' }
  ]

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ]

  const services = [
    'Speaker Installation',
    'Subwoofer Systems',
    'Head Unit Upgrades',
    'Backup Cameras',
    'Dash Cam Installation',
    'Soundproofing'
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="mb-4">
              <Image
                src="/transparent.png"
                alt="Brandon's Auto Sound Logo"
                width={240}
                height={50}
                className="h-8 w-auto"
              />
            </div>
            <p className="text-primary-silver mb-6 leading-relaxed">
              Utah's premier car audio and video installation specialists. 
              Driven by passion, powered by expertise.
            </p>
            <div className="text-primary-silver">
                              <p className="mb-2">📞 (385) 209-4391</p>
              <p className="mb-2">✉️ info@brandonsautosound.com</p>
              <p>📍 Salt Lake City, UT</p>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-display font-bold text-white mb-4">QUICK LINKS</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-silver hover:text-primary-red transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-display font-bold text-white mb-4">SERVICES</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-primary-silver">
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-display font-bold text-white mb-4">FOLLOW US</h4>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-primary-silver hover:bg-primary-red hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            <p className="text-sm text-primary-silver mb-4">
              Stay updated with our latest installations and promotions!
            </p>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-primary-silver text-sm mb-4 md:mb-0"
            >
              © {currentYear} Brandon's Auto Sound. All rights reserved.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex space-x-6 text-sm"
            >
              <a href="#" className="text-primary-silver hover:text-primary-red transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-silver hover:text-primary-red transition-colors duration-300">
                Terms of Service
              </a>
            </motion.div>
          </div>
          
          {/* Slogan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-4"
          >
            <p className="text-primary-red font-display font-bold italic">
              "Driven by Sound."
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 
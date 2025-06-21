'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Send } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

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
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    })
    
    setIsSubmitting(false)
    alert('Thank you for your message! We\'ll get back to you soon.')
  }

  const contactInfo = [
    {
                  icon: <Phone size={24} />,
            title: 'PHONE',
            details: '(385) 209-4391',
            link: 'tel:+13852094391'
    },
    {
      icon: <Mail size={24} />,
      title: 'EMAIL',
      details: 'info@brandonsautosound.com',
      link: 'mailto:info@brandonsautosound.com'
    },
    {
      icon: <MapPin size={24} />,
      title: 'LOCATION',
      details: 'Salt Lake City, UT',
      link: 'https://maps.google.com'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gray-900">
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
            GET IN <span className="text-primary-red">TOUCH</span>
          </h2>
          <p className="text-xl text-primary-silver max-w-3xl mx-auto">
            Ready to upgrade your car's audio system? Contact us today for a free consultation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-black/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800"
          >
            <h3 className="text-2xl font-display font-bold text-white mb-6">
              SEND US A MESSAGE
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-primary-red focus:outline-none focus:ring-1 focus:ring-primary-red transition-all duration-300"
                  placeholder="Your Name"
                />
                <div className="absolute inset-0 border border-primary-red rounded-lg opacity-0 focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>

              {/* Email Field */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-primary-red focus:outline-none focus:ring-1 focus:ring-primary-red transition-all duration-300"
                  placeholder="Your Email"
                />
                <div className="absolute inset-0 border border-primary-red rounded-lg opacity-0 focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>

              {/* Phone Field */}
              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-primary-red focus:outline-none focus:ring-1 focus:ring-primary-red transition-all duration-300"
                  placeholder="Your Phone (Optional)"
                />
                <div className="absolute inset-0 border border-primary-red rounded-lg opacity-0 focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>

              {/* Message Field */}
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-primary-red focus:outline-none focus:ring-1 focus:ring-primary-red transition-all duration-300 resize-vertical"
                  placeholder="Tell us about your project..."
                ></textarea>
                <div className="absolute inset-0 border border-primary-red rounded-lg opacity-0 focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary-red hover:bg-red-600 disabled:bg-gray-600 text-white font-display font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  <>
                    <Send size={20} />
                    <span>SEND MESSAGE</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-display font-bold text-white mb-6">
                CONTACT INFORMATION
              </h3>
              <p className="text-primary-silver mb-8">
                Have questions about our services? Want to schedule an installation? 
                We're here to help make your car audio dreams a reality.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.title}
                  href={item.link}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center space-x-4 p-4 bg-black/30 rounded-lg border border-gray-800 hover:border-primary-red/50 transition-all duration-300 group"
                >
                  <div className="text-primary-red group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-white group-hover:text-primary-red transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-primary-silver">
                      {item.details}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-black/30 p-6 rounded-lg border border-gray-800"
            >
              <h4 className="font-display font-bold text-white mb-4">BUSINESS HOURS</h4>
              <div className="space-y-2 text-primary-silver">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-primary-red">Closed</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact 
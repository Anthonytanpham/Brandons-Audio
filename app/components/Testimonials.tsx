'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: 'Mike Johnson',
      location: 'Salt Lake City, UT',
      rating: 5,
      text: 'Brandon did an amazing job installing my new sound system. The quality is incredible and the installation was flawless. Highly recommend!'
    },
    {
      name: 'Sarah Williams',
      location: 'Provo, UT',
      rating: 5,
      text: 'Professional service from start to finish. My backup camera installation was done perfectly and now I feel so much safer driving.'
    },
    {
      name: 'David Chen',
      location: 'Ogden, UT',
      rating: 5,
      text: 'The custom head unit installation exceeded my expectations. Brandon knows his stuff and the attention to detail is outstanding.'
    },
    {
      name: 'Lisa Rodriguez',
      location: 'West Valley, UT',
      rating: 5,
      text: 'Great experience! The subwoofer installation was done quickly and professionally. The sound quality is phenomenal.'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [testimonials.length])

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={20}
        className={i < rating ? 'fill-primary-red text-primary-red' : 'text-gray-400'}
      />
    ))
  }

  return (
    <section id="testimonials" className="py-20 bg-black">
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
            WHAT OUR <span className="text-primary-red">CLIENTS SAY</span>
          </h2>
          <p className="text-xl text-primary-silver max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              {/* Quote Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="flex justify-center mb-8"
              >
                <div className="w-16 h-16 bg-primary-red/20 rounded-full flex items-center justify-center">
                  <Quote className="text-primary-red" size={32} />
                </div>
              </motion.div>

              {/* Testimonial Text */}
              <motion.blockquote
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl md:text-3xl text-white font-light leading-relaxed mb-8 italic"
              >
                "{testimonials[currentTestimonial].text}"
              </motion.blockquote>

              {/* Rating */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex justify-center mb-6"
              >
                {renderStars(testimonials[currentTestimonial].rating)}
              </motion.div>

              {/* Customer Info */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-center"
              >
                <h4 className="text-xl font-display font-bold text-primary-red mb-1">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-primary-silver">
                  {testimonials[currentTestimonial].location}
                </p>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-12 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-primary-red scale-125'
                    : 'bg-gray-600 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
        >
          {[
            { number: '500+', label: 'Satisfied Customers' },
            { number: '5★', label: 'Average Rating' },
            { number: '10+', label: 'Years Experience' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-gray-900/50 rounded-lg border border-gray-800"
            >
              <div className="text-4xl md:text-5xl font-display font-black text-primary-red mb-2">
                {stat.number}
              </div>
              <div className="text-primary-silver font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials 
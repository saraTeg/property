import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import AnimatedSection from '../../Utils/AnimatedSection';

const testimonials = [
  {
    id: 1,
    name: "Jennifer Smith",
    role: "Property Manager",
    company: "Urban Living Properties",
    quote: "PropEase has completely transformed how I manage our rental properties. The automated payment tracking and maintenance request system has saved me countless hours every month.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Johnson",
    role: "Real Estate Investor",
    company: "MJ Holdings",
    quote: "As someone with multiple properties across different locations, I needed a centralized system to keep track of everything. PropEase delivers exactly what I need with an intuitive interface.",
    rating: 5
  },
  {
    id: 3,
    name: "Sarah Williams",
    role: "Property Owner",
    company: "Williams Family Properties",
    quote: "The tenant communication feature alone is worth the investment. I've seen dramatic improvements in response times and tenant satisfaction since implementing PropEase.",
    rating: 4
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-secondary-50">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection direction="down" className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-secondary-600">
            Hear from property managers who have transformed their business with PropEase
          </p>
        </AnimatedSection>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl p-8 md:p-10 shadow-md"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="md:w-1/4 flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary-600">
                      {testimonials[currentIndex].name.charAt(0)}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-heading font-semibold text-secondary-900">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-sm text-secondary-600">
                      {testimonials[currentIndex].role}
                    </p>
                    <p className="text-xs text-secondary-500">
                      {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
                
                <div className="md:w-3/4">
                  <div className="flex mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                    {[...Array(5 - testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i + testimonials[currentIndex].rating} className="h-5 w-5 text-secondary-200" />
                    ))}
                  </div>
                  <blockquote className="text-lg italic text-secondary-700 mb-6">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 gap-4">
            <motion.button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-white shadow-sm border border-secondary-100 flex items-center justify-center text-secondary-600 hover:bg-primary-50 hover:text-primary-600 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="h-5 w-5" />
            </motion.button>
            <motion.button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-white shadow-sm border border-secondary-100 flex items-center justify-center text-secondary-600 hover:bg-primary-50 hover:text-primary-600 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="h-5 w-5" />
            </motion.button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-4 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-6 bg-primary-600' : 'bg-secondary-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
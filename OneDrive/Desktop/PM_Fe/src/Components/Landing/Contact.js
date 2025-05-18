import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import AnimatedSection from '../../Utils/AnimatedSection';
import { Facebook, Linkedin, Instagram } from 'lucide-react';
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection direction="down" className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-secondary-600">
            Have questions about PropEase? Our team is here to help you
          </p>
        </AnimatedSection>

        <div className="flex flex-col md:flex-row gap-8">
          <AnimatedSection direction="left" className="md:w-1/2">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-secondary-100 h-full">
              <h3 className="text-xl font-heading font-semibold text-secondary-900 mb-6">Send Us a Message</h3>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-secondary-200 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-secondary-200 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-secondary-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-secondary-200 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="How can we help?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-secondary-200 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-6 rounded-md transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </AnimatedSection>
          
          <AnimatedSection direction="right" className="md:w-1/2">
            <div className="bg-primary-600 rounded-xl p-8 text-white h-full">
              <h3 className="text-xl font-heading font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <Mail className="h-5 w-5 text-primary-200" />
                  </div>
                  <div>
                    <h4 className="font-medium text-primary-100">Email</h4>
                    <p className="mt-1">info@propease.com</p>
                    <p>support@propease.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <Phone className="h-5 w-5 text-primary-200" />
                  </div>
                  <div>
                    <h4 className="font-medium text-primary-100">Phone</h4>
                    <p className="mt-1">+1 (555) 123-4567</p>
                    <p>+1 (555) 765-4321</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <MapPin className="h-5 w-5 text-primary-200" />
                  </div>
                  <div>
                    <h4 className="font-medium text-primary-100">Address</h4>
                    <p className="mt-1">123 Property Lane</p>
                    <p>Addis Abeba, CA 94107</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                    <h4 className="font-medium text-primary-100 mb-4">Follow Us</h4>
                    <div className="flex gap-4">
                      {[
                        { 
                          name: 'Facebook',
                          icon: <Facebook className="w-5 h-5 text-white" />,
                          url: 'https://facebook.com/yourpage'
                        },
                        { 
                          name: 'Twitter',
                          icon: <FaXTwitter className="w-5 h-5 text-white" />,
                          url: 'https://twitter.com/yourhandle'
                        },
                        { 
                          name: 'LinkedIn',
                          icon: <Linkedin className="w-5 h-5 text-white" />,
                          url: 'https://linkedin.com/company/yourcompany'
                        },
                        { 
                          name: 'Instagram',
                          icon: <Instagram className="w-5 h-5 text-white" />,
                          url: 'https://instagram.com/yourprofile'
                        }
                      ].map((social) => (
                        <motion.a
                          key={social.name}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-primary-700 flex items-center justify-center hover:bg-primary-800 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          aria-label={`Follow us on ${social.name}`}
                        >
                          {social.icon}
                        </motion.a>
                      ))}
                    </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
import React from 'react';
import { motion } from 'framer-motion';
import {  CheckCircle, ArrowRight, MapPin, Home, DollarSign } from 'lucide-react';
import AnimatedSection from '../../Utils/AnimatedSection';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Hero = () => {
  const history = useHistory();
  const featuredProperties = [
    {
      address: "123 Palm Villa Road",
      district: "Downtown",
      type: "Residential Apartment",
      rooms: 2,
      rent: 1500,
      status: "Available"
    }
  ];

  return (
    <section id="home" className="relative min-h-screen pt-20 flex items-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white -z-10"></div>
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <motion.div 
          className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-primary-100 -z-10"
          animate={{ 
            scale: [1, 1.1, 1],
            x: [0, 10, 0],
            y: [0, -10, 0]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-[5%] w-80 h-80 rounded-full bg-accent-50 -z-10"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, -20, 0],
            y: [0, 20, 0]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left column with text content */}
          <div className="w-full md:w-1/2 space-y-6">
            <AnimatedSection direction="down" delay={0.1}>
              <div className="bg-primary-50 text-primary-600 px-4 py-2 rounded-full inline-flex items-center space-x-2 mb-4">
                <span className="text-sm font-medium">Simplify Property Management</span>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.3}>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 leading-tight">
                All-in-One <span className="text-primary-600">Property Management</span> Solution
              </h1>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.5}>
              <p className="text-lg text-secondary-600 max-w-xl">
                Streamline property listings, tenant management, rental agreements, payments, and maintenance requests in one powerful platform.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.7}>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <motion.button
                  className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-md transition-colors inline-flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => history.push('/pm/v1/signup')}
                >
                  <span>Get Started Free</span>
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.9}>
              <div className="pt-6">
                <p className="text-sm text-secondary-500 mb-4">Trusted by property managers worldwide</p>
                <div className="flex flex-wrap items-center gap-8">
                  {['100+', '24/7', '90%', /*'10k+'*/].map((stat, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary-600" />
                      <span className="text-sm font-medium text-secondary-700">
                        {index === 0 && `${stat} Properties`}
                        {index === 1 && `${stat} Support`}
                        {index === 2 && `${stat} Satisfaction`}
                        {/* {index === 3 && `${stat} Users`} */}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right column with property showcase */}
          <div className="w-full md:w-1/2 space-y-6">
            <AnimatedSection delay={0.5}>
              <motion.div 
                className="relative rounded-2xl overflow-hidden shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <img 
                  src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg"
                  alt="Featured Property" 
                  className="w-full h-[300px] object-cover rounded-t-2xl"
                />
                <div className="bg-white p-6 rounded-b-2xl space-y-4">
                  <div className="grid grid-cols-1 gap-4">
                    {featuredProperties.map((property, index) => (
                      <motion.div
                        key={index}
                        className="bg-secondary-50 p-4 rounded-lg"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`p-2 rounded-lg ${property.status === "Available" ? "bg-green-100" : "bg-yellow-100"}`}>
                            <Home className={`h-5 w-5 ${property.status === "Available" ? "text-green-600" : "text-yellow-600"}`} />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium text-secondary-900 mb-1">{property.address}</h3>
                            <div className="flex items-center text-sm text-secondary-600 mb-2">
                              <MapPin className="h-4 w-4 mr-1" />
                              {property.district}
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-xs bg-white px-2 py-1 rounded">
                                {property.type}
                              </span>
                              <div className="flex items-center text-primary-600 font-medium">
                                <DollarSign className="h-4 w-4" />
                                {property.rent}
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Floating elements animation */}
                <motion.div 
                  className="absolute top-2 -right-0 bg-primary-600 text-white p-3 rounded-lg shadow-lg"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <div className="text-xs font-semibold">New Property Added</div>
                  <div className="text-xs opacity-90">📬 Check It Out</div>
                </motion.div>
                
                <motion.div 
                  className="absolute -bottom-4 -left-4 bg-white p-2 rounded-lg shadow-lg border border-secondary-100"
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 rounded-full bg-accent-100"></div>
                    <div className="w-16 h-3 bg-secondary-200 rounded"></div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;

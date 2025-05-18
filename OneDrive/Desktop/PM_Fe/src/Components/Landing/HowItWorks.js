import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../../Utils/AnimatedSection';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
const steps = [
  {
    number: '01',
    title: 'Create Your Account',
    description: 'Sign up and set up your profile to start exploring available properties.'
  },
  {
    number: '02',
    title: 'Browse & Choose Properties',
    description: 'Explore listings and select the property that best fits your needs.'
  },
  {
    number: '03',
    title: 'Complete Tenant Application',
    description: 'Provide your personal and financial information to apply for the property.'
  },
  {
    number: '04',
    title: 'Finalize Deal & Manage',
    description: 'Review terms, sign agreements, and manage your tenancy all in one place.'
  }
];

const HowItWorks = () => {
  const history = useHistory();
  return (
    <section id="how-it-works" className="py-20 bg-accent-50">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection direction="down" className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-900 mb-4">
            How PropEase Works
          </h2>
          <p className="text-lg text-secondary-600">
            Getting started is easy with our streamlined setup process
          </p>
        </AnimatedSection>

        <div className="relative mt-20">
          {/* Progress line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary-100 -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <AnimatedSection 
                  direction={index % 2 === 0 ? 'left' : 'right'} 
                  delay={0.2 * index}
                  className={`flex flex-col md:flex-row items-center md:items-start ${
                    index % 2 === 0 ? '' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`md:w-1/2 flex ${
                    index % 2 === 0 
                      ? 'md:justify-end md:pr-16' 
                      : 'md:justify-start md:pl-16'
                  }`}>
                    <div className="w-full max-w-sm p-6">
                      <div className="font-heading font-bold text-6xl text-primary-200 mb-4">{step.number}</div>
                      <h3 className="text-xl font-heading font-semibold text-secondary-900 mb-2">{step.title}</h3>
                      <p className="text-secondary-600">{step.description}</p>
                    </div>
                  </div>
                  <div className="relative hidden md:block">
                    <motion.div 
                      className="w-10 h-10 rounded-full bg-primary-600 border-4 border-white shadow-md absolute top-8 -translate-x-1/2 z-10"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 * index, duration: 0.5 }}
                    />
                  </div>
                </AnimatedSection>
              </div>
            ))}
          </div>
        </div>

        <AnimatedSection delay={0.8} className="mt-20 text-center">
          <motion.button
            className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-8 rounded-md transition-colors inline-flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => history.push('/pm/v1/signup')}
          >
            <span>Get Started Today</span>
          </motion.button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default HowItWorks;


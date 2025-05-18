import React from 'react';
import { motion } from 'framer-motion';
import { Home,FileText,PenTool as Tool, DollarSign,MessageSquare, Calendar} from 'lucide-react';
import AnimatedSection from '../../Utils/AnimatedSection';

const FeatureCard = ({ icon, title, description, delay }) => (
  <AnimatedSection delay={delay} className="w-full md:w-1/2 lg:w-1/3 p-4">
    <motion.div 
      className="h-full bg-white rounded-xl p-6 shadow-sm border border-secondary-100 hover:shadow-md transition-shadow"
      whileHover={{ y: -5 }}
    >
      <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-heading font-semibold text-secondary-900 mb-2">{title}</h3>
      <p className="text-secondary-600">{description}</p>
    </motion.div>
  </AnimatedSection>
);

const Features = () => {
  const features = [
    {
      icon: <Home className="h-6 w-6" />,
      title: "Property Listings",
      description: "Create and manage detailed property listings with photos, floor plans, and amenities all in one place."
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Rental Agreements",
      description: "Generate, sign, and store digital rental agreements with automated renewal reminders."
    },
    {
      icon: <Tool className="h-6 w-6" />,
      title: "Maintenance Tracking",
      description: "Log and track maintenance requests with status updates and communication history."
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Payment Processing",
      description: "Accept and track rent payments with automated receipts and financial reporting."
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Notification Hub",
      description: "Centralized messaging system for owner-tenant communication with notification alerts."
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Scheduling Tools",
      description: "Schedule viewings, inspections, and maintenance with calendar integration."
    }
  ];

  return (
    <section id="features" className="py-20 bg-primary-50">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection direction="down" className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-900 mb-4">
            Feature-Rich Property Management
          </h2>
          <p className="text-lg text-secondary-600">
            Everything you need to manage your properties efficiently in one platform
          </p>
        </AnimatedSection>

        <div className="flex flex-wrap -mx-4">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={0.2 + index * 0.1}
            />
          ))}
        </div>


      </div>
    </section>
  );
};
export default Features;

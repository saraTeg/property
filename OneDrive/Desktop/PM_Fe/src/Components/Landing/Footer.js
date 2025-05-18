import React from 'react';
import { Home, ChevronRight } from 'lucide-react';
import { Facebook,  Linkedin, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const footerLinks = [
    {
      title: "Product",
      links: ["Features", "How It Works", "Pricing", "FAQ", "Download"]
    },
    {
      title: "Company",
      links: ["About Us", "Careers", "Blog", "Press", "Contact"]
    },
    {
      title: "Resources",
      links: ["Documentation", "Help Center", "API", "Partners", "Terms of Service"]
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Use", "Cookie Policy", "GDPR", "Security"]
    }
  ];

  return (
    <footer className="bg-secondary-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 text-white mb-4">
              <Home className="h-6 w-6" />
              <span className="font-heading font-bold text-xl">PropEase</span>
            </div>
            <p className="text-secondary-300 mb-6 max-w-md">
              PropEase is the all-in-one property management solution that simplifies the way property owners and tenants interact, making property management effortless.
            </p>
            <div className="flex space-x-4">
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

          {footerLinks.map((column, columnIndex) => (
            <div key={columnIndex}>
              <h4 className="font-heading font-semibold text-lg mb-4">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#de" className="text-secondary-300 hover:text-white transition-colors inline-flex items-center">
                      <ChevronRight className="h-3 w-3 mr-1" />
                      <span>{link}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-secondary-800 text-center md:flex md:justify-between md:items-center">
          <p className="text-secondary-400 text-sm">
            &copy; {new Date().getFullYear()} PropEase. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <a href="#de" className="text-secondary-400 hover:text-white text-sm mr-4 transition-colors">
              Privacy Policy
            </a>
            <a href="#de" className="text-secondary-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

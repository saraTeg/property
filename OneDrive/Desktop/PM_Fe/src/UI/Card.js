import React from 'react';
import { motion } from 'framer-motion';

const Card = ({
  children,
  className = '',
  onClick,
  hoverable = false,
}) => {
  const baseStyles = 'bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100';
  const hoverStyles = hoverable ? 'cursor-pointer transition-all duration-200' : '';
  const cardStyles = `${baseStyles} ${hoverStyles} ${className}`;

  const cardVariants = {
    hover: {
      y: -4,
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    },
  };

  return (
    <motion.div
      className={cardStyles}
      onClick={onClick}
      whileHover={hoverable ? 'hover' : undefined}
      variants={cardVariants}
    >
      {children}
    </motion.div>
  );
};

export default Card;

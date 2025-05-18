import React from 'react';
import { motion } from 'framer-motion';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  type = 'button',
  onClick,
  disabled = false,
  fullWidth = false,
  icon,
  className = '',
}) => {
  const baseStyles = 'rounded-md font-medium transition-all flex items-center justify-center gap-2';

  const variantStyles = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white shadow-sm',
    secondary: 'bg-gray-100 hover:bg-gray-200 text-gray-800',
    danger: 'bg-red-500 hover:bg-red-600 text-white shadow-sm',
    success: 'bg-green-500 hover:bg-green-600 text-white shadow-sm',
    outline: 'bg-transparent hover:bg-gray-100 border border-gray-300 text-gray-700',
  };

  const sizeStyles = {
    sm: 'py-1 px-3 text-sm',
    md: 'py-2 px-4 text-base',
    lg: 'py-3 px-6 text-lg',
  };

  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  const widthStyles = fullWidth ? 'w-full' : '';

  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${widthStyles} ${className}`;

  return (
    <motion.button
      type={type}
      className={buttonStyles}
      onClick={onClick}
      disabled={disabled}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
    >
      {icon && <span>{icon}</span>}
      {children}
    </motion.button>
  );
};

export default Button;

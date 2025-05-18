import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Button from './Button';
import ReactDOM from 'react-dom';

const Modal = ({ isOpen, onClose, title, children, footer, size = 'md' }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    '5xl': 'max-w-5xl',
    custom: 'max-w-[60rem]'
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: 'spring', 
        damping: 25, 
        stiffness: 300 
      } 
    },
    exit: { y: 50, opacity: 0 },
  };

  return ReactDOM.createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9999]"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={backdropVariants}
        >
          {/* Separate backdrop layer */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />
          
          {/* Modal content */}
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <motion.div
              className={`${sizeClasses[size]} w-full bg-white rounded-lg shadow-xl overflow-hidden`}
              variants={modalVariants}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 border-b">
                <h3 className="text-lg font-medium text-gray-900">{title}</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onClose}
                  className="!p-1"
                  icon={<X size={18} />}
                />
              </div>

              <div className="p-4 max-h-[calc(100vh-12rem)] overflow-y-auto">
                {children}
              </div>

              {footer && (
                <div className="flex justify-end gap-2 p-4 border-t">
                  {footer}
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default Modal;
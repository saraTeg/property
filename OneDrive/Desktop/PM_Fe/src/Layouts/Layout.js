import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Sidebar from './Sidebar';
import TopBar from './TopBar';

const Layout = ({ children }) => {  // Receive children prop
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsCollapsed(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar isCollapsed={isCollapsed} toggleSidebar={() => setIsCollapsed(!isCollapsed)} />
      
      <motion.div
        className="flex-1 flex flex-col overflow-hidden"
        initial={{ marginLeft: 0 }}
        animate={{ marginLeft: 0 }}
      >
        <TopBar />
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {children}  
        </main>
      </motion.div>
    </div>
  );
};

export default Layout;
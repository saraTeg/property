import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  Home,
  // FileText,
  History,
  Activity,
  Users,
  ChevronLeft,
  ChevronRight,
  Bell,
  DollarSign
} from 'lucide-react';

const Sidebar = ({ isCollapsed, toggleSidebar }) => {
  const location = useLocation();
  
  const navItems = [
    { 
      title: 'Dashboard', 
      path: '/pm/v1/propease', 
      icon: <LayoutDashboard size={20} />,
      exact: true
    },
    { 
      title: 'Properties', 
      path: '/pm/v1/propease/properties', 
      icon: <Home size={20} /> 
    },
    {
      title : 'Tenants', 
      path : '/pm/v1/propease/tenants' ,
      icon : <Users size={20} /> 
    } ,
    // { 
    //   title: 'Leases', 
    //   path: '/pm/v1/propease/leases', 
    //   icon: <FileText size={20} /> 
    // },
    {
       title: 'Rental History',
       path: '/pm/v1/propease/rental-history',
        icon: <History size={20} />
   },
   {
       title: 'Notifications',
        path: '/pm/v1/propease/notifications',
         icon: <Bell size={20} />
   },
   {
     title: 'Payments',
     path: '/pm/v1/propease/payments',
     icon: <DollarSign size={20} />
   },
    { 
      title: 'Audit Logs', 
      path: '/pm/v1/propease/audit-logs', 
      icon: <Activity size={20} /> 
    },
    { 
      title: 'Users', 
      path: '/pm/v1/propease/users', 
      icon: <Users size={20} /> 
    },
  ];

  const sidebarVariants = {
    expanded: { width: '240px' },
    collapsed: { width: '72px' },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { delay: 0.1 } },
  };

  const isActiveLink = (item) => {
    if (item.exact) {
      return location.pathname === item.path;
    }
    return location.pathname.startsWith(item.path);
  };

  return (
    <motion.aside
      className="h-screen sticky top-0 bg-white border-r border-gray-200 z-30 flex flex-col"
      variants={sidebarVariants}
      initial={isCollapsed ? 'collapsed' : 'expanded'}
      animate={isCollapsed ? 'collapsed' : 'expanded'}
      transition={{ type: 'spring', damping: 25, stiffness: 300 }}
    >
      {/* Logo and app name */}
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center">
          <Home className="text-blue-600" size={24} />
          <AnimatePresence>
            {!isCollapsed && (
              <motion.h1
                className="ml-2 font-semibold text-gray-800"
                variants={textVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                PropManage
              </motion.h1>
            )}
          </AnimatePresence>
        </div>
        <button
          onClick={toggleSidebar}
          className="p-1 rounded-full hover:bg-gray-100 transition-colors"
        >
          {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
      </div>

      {/* Navigation items */}
      <nav className="flex-1 pt-4">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end={item.exact}
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 mx-2 rounded-md transition-colors ${
                    isActive || isActiveLink(item)
                      ? 'bg-blue-100 text-blue-700 font-medium'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`
                }
              >
                <span>{item.icon}</span>
                <AnimatePresence>
                  {!isCollapsed && (
                    <motion.span
                      className="ml-3"
                      variants={textVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                    >
                      {item.title}
                    </motion.span>
                  )}
                </AnimatePresence>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center">
          <div className="bg-gray-200 p-1 rounded">
            <Home size={20} className="text-gray-600" />
          </div>
          <AnimatePresence>
            {!isCollapsed && (
              <motion.div
                className="ml-3"
                variants={textVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <p className="text-sm font-medium text-gray-700">v1.0.0</p>
                <p className="text-xs text-gray-500">Admin Dashboard</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
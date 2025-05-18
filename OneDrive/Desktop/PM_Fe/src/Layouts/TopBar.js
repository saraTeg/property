import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, LogOut, Settings } from 'lucide-react';
import { currentUser } from '../Data/MockData';
import Modal from '../UI/Modal';
import EditProfileForm from '../Components/User/EditProfileForm';
import ChangePasswordForm from '../Components/User/ChangePasswordForm';


const TopBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleEditProfile = (data) => {
    console.log('Update profile:', data);
    // Here you would typically make an API call to update the user profile
  };

  const handleChangePassword = (data) => {
    console.log('Change password:', data);
    // Here you would typically make an API call to change the password
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -5, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring', damping: 20, stiffness: 300 },
    },
    exit: {
      opacity: 0,
      y: -5,
      scale: 0.95,
      transition: { duration: 0.15 },
    },
  };

  return (
    <header className="sticky top-0 z-20 bg-white border-b border-gray-200 shadow-sm">
      <div className="flex items-center justify-between px-4 py-3">
        <h1 className="text-xl font-semibold text-gray-800">Welcome to Admin Dashboard</h1>

        <div className="relative" ref={dropdownRef}>
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <div className="text-right hidden sm:block">
              <p className="text-sm font-medium text-gray-700">{currentUser.name}</p>
              <p className="text-xs text-gray-500">{currentUser.role}</p>
            </div>

            <div className="relative">
              <img
                src={currentUser.avatar}
                alt="User avatar"
                className="w-10 h-10 rounded-full object-cover border-2 border-white"
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
            </div>
          </div>

          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 overflow-hidden z-30"
                variants={dropdownVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="px-4 py-3 border-b border-gray-200">
                  <p className="text-sm font-medium text-gray-700 truncate">{currentUser.name}</p>
                  <p className="text-xs text-gray-500 truncate">{currentUser.email}</p>
                </div>

                <div className="py-1">
                  <button
                    className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => {
                      setIsDropdownOpen(false);
                      setIsEditProfileOpen(true);
                    }}
                  >
                    <User size={16} className="mr-2" />
                    Edit Profile
                  </button>
                  <button
                    className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => {
                      setIsDropdownOpen(false);
                      setIsChangePasswordOpen(true);
                    }}
                  >
                    <Settings size={16} className="mr-2" />
                    Change Password
                  </button>
                  <button className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                    <LogOut size={16} className="mr-2" />
                    Sign Out
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Edit Profile Modal */}
      <Modal
        isOpen={isEditProfileOpen}
        onClose={() => setIsEditProfileOpen(false)}
        title="Edit Profile"
        size="sm"
      >
        <EditProfileForm
          user={currentUser}
          onClose={() => setIsEditProfileOpen(false)}
          onSubmit={handleEditProfile}
        />
      </Modal>

      {/* Change Password Modal */}
      <Modal
        isOpen={isChangePasswordOpen}
        onClose={() => setIsChangePasswordOpen(false)}
        title="Change Password"
        size="sm"
      >
        <ChangePasswordForm
          onClose={() => setIsChangePasswordOpen(false)}
          onSubmit={handleChangePassword}
        />
      </Modal>
    </header>
  );
};
export default TopBar;
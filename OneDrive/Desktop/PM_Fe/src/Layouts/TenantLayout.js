import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Settings, LogOut } from 'lucide-react';

const TenantLayout = ({ children }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Left Side */}
            <div className="flex items-center">
              <span className="text-xl font-bold text-blue-600">Propease</span>
              <div className="hidden md:flex space-x-8 ml-10">
                <Link to="/pm/v1/tenants" className="text-gray-700 hover:text-blue-600">Property</Link>
                <Link to="#" className="text-gray-700 hover:text-blue-600">Payment</Link>
                <Link to="#" className="text-gray-700 hover:text-blue-600">Archived</Link>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center relative">
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-2 focus:outline-none"
              >
                <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-600">TU</span>
                </div>
                <span className="text-gray-400">▾</span>
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 top-12 mt-2 w-48 bg-white rounded-md shadow-lg py-1 border border-gray-200 z-50">
                  <div className="py-1">
                    <button
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <User size={16} className="mr-2" />
                      Edit Profile
                    </button>
                    <button
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <Settings size={16} className="mr-2" />
                      Change Password
                    </button>
                    <button className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                      <LogOut size={16} className="mr-2" />
                      Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
};

export default TenantLayout;
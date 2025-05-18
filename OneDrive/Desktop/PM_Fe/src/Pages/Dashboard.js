import React from 'react';
import { motion } from 'framer-motion';
import { Home, FileText, History, DollarSign } from 'lucide-react';
import Card from '../UI/Card';
import { properties, leases, rentalHistory } from '../Data/MockData';

const Dashboard = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', damping: 15, stiffness: 200 }
    }
  };

  const availableProperties = properties.filter(p => p.status === 'available').length;
  const activeLeases = leases.filter(l => l.status === 'active').length;
  const completedRentals = rentalHistory.filter(h => h.status === 'completed').length;

  const totalMonthlyRevenue = leases
    .filter(lease => lease.status === 'active')
    .reduce((total, lease) => total + lease.monthlyRent, 0);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <div className="text-sm font-medium text-gray-500">
          {new Date().toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </div>
      </div>

      {/* Summary Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <Card className="p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Available Properties</p>
                <p className="text-2xl font-bold text-gray-800 mt-1">{availableProperties}</p>
              </div>
              <div className="p-2 bg-blue-50 rounded-lg">
                <Home className="text-blue-500" size={24} />
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              {availableProperties} properties ready for rent
            </p>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Active Leases</p>
                <p className="text-2xl font-bold text-gray-800 mt-1">{activeLeases}</p>
              </div>
              <div className="p-2 bg-green-50 rounded-lg">
                <FileText className="text-green-500" size={24} />
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              {activeLeases} active rental agreements
            </p>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Monthly Revenue</p>
                <p className="text-2xl font-bold text-gray-800 mt-1">
                  ${totalMonthlyRevenue.toLocaleString()}
                </p>
              </div>
              <div className="p-2 bg-purple-50 rounded-lg">
                <DollarSign className="text-purple-500" size={24} />
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              From {activeLeases} active leases
            </p>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Completed Rentals</p>
                <p className="text-2xl font-bold text-gray-800 mt-1">{completedRentals}</p>
              </div>
              <div className="p-2 bg-yellow-50 rounded-lg">
                <History className="text-yellow-500" size={24} />
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              {completedRentals} successfully completed rentals
            </p>
          </Card>
        </motion.div>
      </motion.div>

      {/* Recent Activities Section */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Properties</h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {properties.slice(0, 3).map((property) => (
            <motion.div key={property.id} variants={itemVariants}>
              <Card className="overflow-hidden" hoverable>
                <img
                  src={property.imageUrl}
                  alt={property.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800">{property.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{property.address}, {property.city}</p>
                  <div className="flex justify-between items-center mt-3">
                    <p className="text-sm font-medium text-gray-700">${property.rentAmount}/month</p>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      property.status === 'available' ? 'bg-green-100 text-green-800' :
                      property.status === 'rented' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {property.status.charAt(0).toUpperCase() + property.status.slice(1)}
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;

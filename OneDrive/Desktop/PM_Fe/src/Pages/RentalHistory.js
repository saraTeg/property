import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, SlidersHorizontal, Calendar } from 'lucide-react';
import Card from '../UI/Card';
import Badge from '../UI/Badge';
import Button from '../UI/Button';
import { rentalHistory } from '../Data/MockData';

const RentalHistory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredHistory = rentalHistory.filter(history => 
    history.tenantName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    history.propertyTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Rental History</h1>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search by tenant or property name..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
        <Button 
          variant="outline"
          className="md:w-auto"
          icon={<SlidersHorizontal size={18} />}
        >
          Filters
        </Button>
      </div>

      <div className="hidden lg:block overflow-hidden rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Property
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tenant
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Period
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total Amount
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredHistory.map((history) => (
              <motion.tr 
                key={history.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                whileHover={{ backgroundColor: 'rgba(249, 250, 251, 0.5)' }}
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{history.propertyTitle}</div>
                  <div className="text-xs text-gray-500">ID: {history.propertyId}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{history.tenantName}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {new Date(history.startDate).toLocaleDateString()} - {new Date(history.endDate).toLocaleDateString()}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">${history.totalAmount.toLocaleString()}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Badge status={history.status} />
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="lg:hidden space-y-4">
        {filteredHistory.map((history) => (
          <motion.div
            key={history.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card>
              <div className="p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-800">{history.propertyTitle}</h3>
                    <p className="text-sm text-gray-500">{history.tenantName}</p>
                  </div>
                  <Badge status={history.status} />
                </div>
                
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar size={16} className="mr-1" />
                  {new Date(history.startDate).toLocaleDateString()} - {new Date(history.endDate).toLocaleDateString()}
                </div>
                
                <div className="border-t pt-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Total Amount</span>
                    <span className="text-sm font-medium text-gray-900">${history.totalAmount.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {filteredHistory.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500">No rental history found. Try adjusting your search.</p>
        </div>
      )}
    </div>
  );
};

export default RentalHistory;
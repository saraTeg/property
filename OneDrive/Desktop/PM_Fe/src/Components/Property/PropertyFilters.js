import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../../UI/Button';

const propertyTypeEnums = {
  Residential: ["Apartment", "Villa", "Condo"],
  Commercial: ["Office Space", "Co-working Space", "Warehouse"],
  Shop: ["Retail Store", "Supermarket", "Boutique"],
  "Service Center": ["Bank", "Clinic", "Salon", "Repair Center"]
};

const PropertyFilters = ({ onApplyFilters , onClose}) => {
  const [filters, setFilters] = useState({
    usage_type: '',
    property_type: '',
    status: '',
    district: '',
    min_width: '',
    max_width: '',
    min_rooms: '',
    max_rooms: '',
    min_rent: '',
    max_rent: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value,
      ...(name === 'usage_type' ? { property_type: '' } : {})
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Convert values if needed (e.g., Number(filters.min_width))
    onApplyFilters(filters);
    onClose();
  };

  const resetFilters = () => {
    setFilters({
      usage_type: '',
      property_type: '',
      status: '',
      min_width: '',
      max_width: '',
      min_rooms: '',
      max_rooms: '',
      min_rent: '',
      max_rent: '',
    });
  };

  return ( <motion.div
      className="bg-white rounded-lg shadow-lg p-4 border border-gray-200 mb-4"
      initial={{ y: -20 }}
      animate={{ y: 0 }}
      exit={{ y: -20 }}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-gray-900">Property Filters</h3>
        <Button variant="outline" size="sm" onClick={onClose}>Close</Button>
      </div>

      <form 
        onSubmit={handleSubmit} 
        className="space-y-4"
        style={{ maxHeight: '10rem', overflowY: 'auto' }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Usage Type */}
          <div>
            <label htmlFor="usage_type" className="block text-sm font-medium text-gray-700 mb-1">
              Usage Type
            </label>
            <select
              id="usage_type"
              name="usage_type"
              value={filters.usage_type}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
            <option value="">All Usage Types</option>
              {Object.keys(propertyTypeEnums).map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          {/* Property Type */}
          <div>
            <label htmlFor="property_type" className="block text-sm font-medium text-gray-700 mb-1">
              Property Type
            </label>
            <select
              id="property_type"
              name="property_type"
              value={filters.property_type}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Property Types</option>
                {filters.usage_type &&
                    propertyTypeEnums[filters.usage_type].map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
            </select>
          </div>

          {/* Status */}
          <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            <select
              id="status"
              name="status"
              value={filters.status}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                  <option value="">All Statuses</option>
                  <option value="Available">Available</option>
                  <option value="Sold">Sold</option>
                  <option value="Rented">Rented</option>
                  <option value="Reserved">Reserved</option>
            </select>
          </div>

          {/* District */}
          <div>
            <label htmlFor="district" className="block text-sm font-medium text-gray-700 mb-1">
              District
            </label>
            <input
              id="district"
              name="district"
              type="text"
              value={filters.district}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex justify-end gap-2">
          <Button type="button" variant="outline" onClick={resetFilters}>
            Reset
          </Button>
          <Button type="submit">
            Apply Filters
          </Button>
        </div>
      </form>
  </motion.div>
  );
};

export default PropertyFilters;

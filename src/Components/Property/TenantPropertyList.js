import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, SlidersHorizontal } from 'lucide-react';
import Button from '../../UI/Button';
import TenantPropertyCard from './TenantPropertyCard';
import PropertyDetail from './PropertyDetail';
import PropertyFilters from './PropertyFilters';
import LeaseAgreementList from '../Leases/LeaseDraftList';
import { properties } from "../../Data/MockData";

const TenantPropertyList = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({});

  const handleOpenDetail = (id) => {
    const property = properties.find(p => p.id === id) || null;
    setSelectedProperty(property);
    setIsDetailOpen(true);
  };

  const handleCloseModal = () => {
    setIsDetailOpen(false);
    setSelectedProperty(null);
  };

  const handleApplyFilters = (newFilters) => {
    setFilters(newFilters);
    console.log('Applied filters:', newFilters);
  };
  
  const filteredProperties = properties.filter(property => 
    property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    property.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
    property.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search properties..."
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
          onClick={() => setIsFiltersOpen(!isFiltersOpen)}
        >
          {isFiltersOpen ? 'Hide Filters' : 'Filters'}
        </Button>
      </div>

      <AnimatePresence>
        {isFiltersOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-[60rem] mx-auto"
          >
            <PropertyFilters
              onApplyFilters={handleApplyFilters}
              onClose={() => setIsFiltersOpen(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
      >
        {filteredProperties.map(property => (
          <TenantPropertyCard
            key={property.id}
            property={property}
            onView={handleOpenDetail}
          />
        ))}
      </motion.div>

      {selectedProperty && (
        <>
          <PropertyDetail
            property={selectedProperty}
            isOpen={isDetailOpen}
            onClose={handleCloseModal}
          />
          <LeaseAgreementList
            property={selectedProperty}
            isOpen={!!selectedProperty}
            onClose={handleCloseModal}
          />
        </>
      )}

      {filteredProperties.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500">No properties found. Try adjusting your search or filters.</p>
        </div>
      )}
    </div>
  );
};

export default TenantPropertyList;
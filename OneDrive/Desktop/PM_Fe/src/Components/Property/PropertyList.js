import React, { useState } from 'react';
import { motion , AnimatePresence  } from 'framer-motion';
import { Plus, Search, SlidersHorizontal } from 'lucide-react';
import Button from '../../UI/Button';
import PropertyCard from './PropertyCard';
import PropertyDetail from './PropertyDetail';
import PropertyForm from './PropertyForm';
import { properties } from '../../Data/MockData';
import LeaseDraftList from "../../Components/Leases/LeaseDraftList";
import PropertyFilters from './PropertyFilters';

const PropertyList = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [isLeaseDraftOpen, setIsLeaseDraftOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({});
  
  const handleOpenDetail = (id) => {
    const property = properties.find(p => p.id === id) || null;
    setSelectedProperty(property);
    setIsDetailOpen(true);
  };
  
  const handleOpenForm = (id) => {
    if (id) {
      const property = properties.find(p => p.id === id) || null;
      setSelectedProperty(property);
      setIsEditing(true);
    } else {
      setSelectedProperty(null);
      setIsEditing(false);
    }
    setIsFormOpen(true);
  };

  const handleOpenLeaseDraft = (id) => {
    const property = properties.find(p => p.id === id) || null;
    setSelectedProperty(property);
    setIsLeaseDraftOpen(true);
  };
  
  const handleCloseModal = () => {
    setIsDetailOpen(false);
    setIsFormOpen(false);
    setIsFiltersOpen(false);
    setIsLeaseDraftOpen(false);
    setTimeout(() => {
      setSelectedProperty(null);
      setIsEditing(false);
    }, 300);
  };
  
  const handleDelete = (id) => {
    console.log(`Delete property with ID: ${id}`);
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
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Properties</h1>
        <Button 
          onClick={() => handleOpenForm()}
          icon={<Plus size={18} />}
        >
          Add Property
        </Button>
      </div>
      
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
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
      </div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
      >
        {filteredProperties.map(property => (
          <PropertyCard
            key={property.id}
            property={property}
            onView={handleOpenDetail}
            onEdit={(id) => handleOpenForm(id)}
            onDelete={handleDelete}
            onDraftLease={handleOpenLeaseDraft}
          />
        ))}
      </motion.div>
      
      {filteredProperties.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500">No properties found. Try adjusting your search or filters.</p>
        </div>
      )}
      
      {selectedProperty && (
        <>
          <PropertyDetail
            property={selectedProperty}
            isOpen={isDetailOpen}
            onClose={handleCloseModal}
            onEdit={() => {
              setIsDetailOpen(false);
              setTimeout(() => {
                handleOpenForm(selectedProperty.id);
              }, 300);
            }}
          />

          <LeaseDraftList
            propertyId={selectedProperty.id}
            propertyTitle={selectedProperty.title}
            rentAmount={selectedProperty.rentAmount}
            isOpen={isLeaseDraftOpen}
            onClose={handleCloseModal}
          />
        </>
      )}
      
      <PropertyForm
        property={isEditing ? selectedProperty : null}
        isOpen={isFormOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default PropertyList;

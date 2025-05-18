import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import TenantCard from './TenantCard';
import TenantDetail from './TenantDetail';
import { tenants } from '../../Data/MockData';

const TenantList = () => {
  const [selectedTenant, setSelectedTenant] = useState(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTenants = tenants.filter(tenant => 
    tenant.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tenant.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewTenant = (id) => {
    const tenant = tenants.find(t => t.id === id);
    if (tenant) {
      setSelectedTenant(tenant);
      setIsDetailOpen(true);
    }
  };

  const handleDeleteTenant = (id) => {
    console.log('Deleting tenant:', id);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Tenants</h1>
      </div>

      <div className="relative">
        <input
          type="text"
          placeholder="Search tenant by name or email"
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
      </div>

      <motion.div
        className="flex flex-col gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
      >
        <AnimatePresence>
          {filteredTenants.map(tenant => (
            <TenantCard
              key={tenant.id}
              tenant={tenant}
              onView={handleViewTenant}
              onDelete={handleDeleteTenant}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredTenants.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500">No tenants found matching your search</p>
        </div>
      )}

      <TenantDetail
        tenant={selectedTenant}
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
      />
    </div>
  );
};

export default TenantList;
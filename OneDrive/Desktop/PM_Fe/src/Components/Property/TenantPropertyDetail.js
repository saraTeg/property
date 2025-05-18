// Modified PropertyDetail.jsx for Tenant
import React from 'react';
import { MapPin, Home, Calendar, DollarSign } from 'lucide-react';
import Modal from '../../UI/Modal';
import Badge from '../../UI/Badge';

const TenantPropertyDetail = ({ property, isOpen, onClose }) => {
  const propertyDetails = [
    { label: 'Address', value: `${property.address}, ${property.city}, ${property.state} ${property.zipCode}`, icon: <MapPin size={18} /> },
    { label: 'Bedrooms', value: property.bedrooms, icon: <Home size={18} /> },
    { label: 'Bathrooms', value: property.bathrooms, icon: <Home size={18} /> },
    { label: 'Square Feet', value: `${property.squareFeet} sq ft`, icon: <Home size={18} /> },
    { label: 'Monthly Rent', value: `$${property.rentAmount.toLocaleString()}`, icon: <DollarSign size={18} /> },
    { label: 'Status', value: <Badge status={property.status} />, icon: <Calendar size={18} /> },
  ];

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Property Details"
      size="3xl"
      footer={
        <Button variant="outline" onClick={onClose}>Close</Button>
      }
    >
            <div className="space-y-6">
        <div className="aspect-video overflow-hidden rounded-lg">
          <img
            src={property.imageUrl}
            alt={property.title}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div>
          <h2 className="text-xl font-bold text-gray-800">{property.title}</h2>
          <p className="text-gray-500 mt-1">{property.address}, {property.city}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {propertyDetails.map((detail, index) => (
            <div key={index} className="flex items-center p-3 bg-gray-50 rounded-md">
              <div className="mr-3 text-gray-400">
                {detail.icon}
              </div>
              <div>
                <p className="text-xs text-gray-500">{detail.label}</p>
                <div className="font-medium text-gray-800">
                  {detail.value}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div>
          <h3 className="font-medium text-gray-800 mb-2">Description</h3>
          <p className="text-gray-600">
            This {property.bedrooms} bedroom, {property.bathrooms} bathroom property offers {property.squareFeet} square feet of modern living space. 
            Located in the heart of {property.city}, it provides easy access to local amenities and transportation.
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default TenantPropertyDetail ;
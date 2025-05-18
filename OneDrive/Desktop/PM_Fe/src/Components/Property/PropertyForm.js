
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Modal from '../../UI/Modal';
import Button from '../../UI/Button';
import {Property} from "../../Types/indexes"

const propertyTypeEnums = {
  Residential: ["Apartment", "Villa", "Condo"],
  Commercial: ["Office Space", "Co-working Space", "Warehouse"],
  Shop: ["Retail Store", "Supermarket", "Boutique"],
  "Service Center": ["Bank", "Clinic", "Salon", "Repair Center"]
};

const PropertyForm = ({ property, isOpen, onClose }) => {
  const isEditing = Boolean(property);
  const [formData, setFormData] = useState({ ...Property });
  const [imagePreview, setImagePreview] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [contentType, setContentType] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmittable, setIsSubmittable] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    const requiredFields = ['title', 'address', 'usage_type', 'width', 'rent_estimation'];

    // Check required fields
    requiredFields.forEach(field => {
      if (!formData[field]?.toString().trim()) {
        newErrors[field] = 'This field is required';
      }
    });

    // Validate property_type if usage_type is selected
    if (formData.usage_type && !formData.property_type?.trim()) {
      newErrors.property_type = 'Property type is required';
    }

    // Validate title length
    if (formData.title.length < 5) {
      newErrors.title = 'Title must be at least 5 characters';
    } else if (formData.title.length > 100) {
      newErrors.title = 'Title cannot exceed 100 characters';
    }

    // Validate image for new properties
    if (!isEditing && !imageFile) {
      newErrors.image = 'Image is required';
    }

    setErrors(newErrors);
    setIsSubmittable(Object.keys(newErrors).length === 0);
    return Object.keys(newErrors).length === 0;
  };

useEffect(() => {
    if (property) {
      const initialData = { ...Property, ...property };
      setFormData(initialData);
      
      if (property.image_Cover) {
        const base64String = btoa(
          String.fromCharCode(...new Uint8Array(property.image_Cover.data))
        );
        setImagePreview(`data:${property.image_Cover.contentType};base64,${base64String}`);
      }
    } else {
      setFormData({ ...Property });
      setImagePreview('');
    }
  }, [property]);


  useEffect(() => {
    validateForm();
  }, [formData, imageFile]);

    const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result;
        const matches = result.match(/^data:(.+);base64,(.+)$/);
        setContentType(matches[1]);
        setImageFile(matches[2]);
        setImagePreview(result);
        setErrors(prev => ({ ...prev, image: null }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData(prev => {
      const newData = { ...prev, [name]: value };
      // Reset property_type when usage_type changes
      if (name === 'usage_type') {
        newData.property_type = '';
      }
      return newData;
    });
    
    setErrors(prev => ({ ...prev, [name]: null }));
  };


  useEffect(() => {
    if (property) {
      setFormData(property);
    } else {
      setFormData(Property);
    }
  }, [property]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const formPayload = {
      ...formData,
      image_Cover: imageFile ? {
        data: Buffer.from(imageFile, "base64"),
        contentType
      } : property?.image_Cover
    };

    try {
      console.log('Submitting:', formPayload);
      onClose();
    } catch (error) {
      console.error('Submission error:', error);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={isEditing ? 'Edit Property' : 'Add New Property'}
      size="custom"
      footer={
        <>
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button onClick={handleSubmit} disabled={!isSubmittable}>
            {isEditing ? 'Update' : 'Create'} Property
          </Button>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Property Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">   
                 
        <div>
            <label htmlFor="usage_type" className="block text-sm font-medium text-gray-700 mb-1">
              Usage type 
            </label>
            <select
              id="usage_type"
              name="usage_type"
              value={formData.usage_type}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              {Object.keys(propertyTypeEnums).map((usage) => (
                <option key={usage} value={usage}>
                  {usage}
                </option>
              ))}
            </select>
        </div>
          
          <div>
            <label htmlFor="property_type" className="block text-sm font-medium text-gray-700 mb-1">
              Property type 
            </label>
            <select
              id="property_type"
              name="property_type"
              value={formData.property_type}
              onChange={handleChange}
              required={!!formData.usage_type}
              disabled={!formData.usage_type}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select property type</option>
              {formData.usage_type && 
                propertyTypeEnums[formData.usage_type]?.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))
              }
            </select>
            {errors.property_type && (
              <p className="text-red-500 text-sm mt-1">{errors.property_type}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="Available">Available</option>
              <option value="Sold">Sold</option>
              <option value="Rented">Rented</option>
              <option value="Reserved">Reserved</option>
            </select>
          </div>
           
          <div>
            <label htmlFor="width" className="block text-sm font-medium text-gray-700 mb-1">
              width(m)
            </label>
            <input
              type="number"
              id="width"
              name="width"
              value={formData.width}
              onChange={handleChange}
              min = "0"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>   

        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <label htmlFor="number_of_rooms" className="block text-sm font-medium text-gray-700 mb-1">
              Number of rooms
            </label>
            <input
              type="number"
              id="number_of_rooms"
              name="number_of_rooms"
              value={formData.number_of_rooms}
              onChange={handleChange}
              min="0"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
            <label htmlFor="rent_estimation" className="block text-sm font-medium text-gray-700 mb-1">
              Rent estimation($)
            </label>
            <input
              type="number"
              id="rent_estimation"
              name="rent_estimation"
              value={formData.rent_estimation}
              onChange={handleChange}
              min="0"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
           <div>
            <label htmlFor="district" className="block text-sm font-medium text-gray-700 mb-1">
              District
            </label>
            <input
              type="text"
              id="district"
              name="district"
              value={formData.district}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">
            Property Image {!property && '*'}
          </label>
          <div className="flex items-center gap-4">
            <label className="flex flex-col items-center px-4 py-6 bg-white text-blue-500 rounded-lg border-2 border-dashed border-blue-200 cursor-pointer hover:border-blue-500 transition-colors">
              <svg
                className="w-8 h-8 mb-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="text-sm">Choose image</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                required={!property}
              />
            </label>
            {imagePreview && (
              <div className="relative group">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-24 h-24 object-cover rounded-lg border"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 hidden group-hover:flex items-center justify-center rounded-lg">
                  <span className="text-white text-sm">Replace</span>
                </div>
              </div>
            )}
          </div>
          {errors.image && (
            <p className="text-red-500 text-sm mt-1">{errors.image}</p>
          )}
        </div>
        
      </form>
    </Modal>
  );
};

export default PropertyForm;
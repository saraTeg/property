import React, { useState, useRef } from 'react';
import { Upload } from 'lucide-react';
import Button from '../../UI/Button';

const EditProfileForm = ({ user, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    avatar: user.avatar,
  });
  
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          avatar: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex items-center justify-center mb-6">
          <div className="relative">
            <img
              src={formData.avatar}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
            />
            <button
              type="button"
              className="absolute bottom-0 right-0 p-2 bg-blue-500 rounded-full text-white hover:bg-blue-600 transition-colors"
              onClick={() => fileInputRef.current.click()}
            >
              <Upload size={16} />
            </button>
            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              className="hidden"
              onChange={handleAvatarChange}
            />
          </div>
        </div>

        {/* Rest of the form remains the same */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="flex justify-end gap-2 pt-4">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit">
            Save Changes
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditProfileForm;
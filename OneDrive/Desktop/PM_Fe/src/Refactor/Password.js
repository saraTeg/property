import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const PasswordInput = ({
  id,
  value,
  onChange,
  placeholder = 'Enter your password',
  error,
  label,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="mb-4">
      <label 
        htmlFor={id} 
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          name={id}
          type={showPassword ? 'text' : 'password'}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ${
            error ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        <button
          type="button"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
          onClick={togglePasswordVisibility}
          aria-label={showPassword ? 'Hide password' : 'Show password'}
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default PasswordInput;

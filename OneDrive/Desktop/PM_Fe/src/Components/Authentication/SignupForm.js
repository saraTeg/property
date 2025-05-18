import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Upload } from 'lucide-react';
import AuthLayout from '../../Layouts/AuthLayout';
import PasswordInput from '../../Refactor/Password';
import { useForm } from '../../UseHooks/UseForm'
import { emailRegex } from '../../Utils/Validators';

const SignupForm = () => {
  const [photoPreview, setPhotoPreview] = useState(null);

  const initialValues = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    photo: null,
  };

  const validationRules = {
    fullName: {
      required: { value: true, message: 'Full name is required' },
      minLength: { value: 4, message: 'Full name must be at least 4 characters' },
      maxLength: { value: 30, message: 'Full name must be less than 30 characters' },
    },
    email: {
      required: { value: true, message: 'Email is required' },
      pattern: { value: emailRegex, message: 'Please enter a valid email address' },
    },
    password: {
      required: { value: true, message: 'Password is required' },
      minLength: { value: 8, message: 'Password must be at least 8 characters' },
    },
    confirmPassword: {
      required: { value: true, message: 'Please confirm your password' },
      validate: {
        matchesPassword: (value, formValues) =>
          value === formValues.password || 'Passwords do not match',
      },
    },
  };

  const {
    values,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialValues, validationRules, onSubmit , '/pm/v1/login');

  function onSubmit(data) {
    console.log('Form submitted with:', data);
    alert('Signup successful! Check console for details.');
  }

  const handlePhotoChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        setPhotoPreview(reader.result);
      };

      reader.readAsDataURL(file);

      const event = {
        target: {
          name: 'photo',
          value: '',
          type: 'file',
          files: e.target.files,
        },
      };

      handleChange(event);
    }
  };

  return (
    <AuthLayout title="Create Account">
      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            value={values.fullName}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="John Doe"
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ${
              errors.fullName ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.fullName && <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="johndoe@example.com"
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Profile Photo (Optional)
          </label>
          <div className="flex items-center space-x-4">
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center border-2 border-dashed overflow-hidden ${
                photoPreview ? 'border-transparent' : 'border-gray-300'
              }`}
            >
              {photoPreview ? (
                <img
                  src={photoPreview}
                  alt="Profile preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <Upload size={24} className="text-gray-400" />
              )}
            </div>
            <div className="flex-1">
              <input
                id="photo"
                name="photo"
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                className="hidden"
              />
              <label
                htmlFor="photo"
                className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-lg cursor-pointer hover:bg-blue-100 transition-colors duration-200"
              >
                {photoPreview ? 'Change Photo' : 'Upload Photo'}
              </label>
            </div>
          </div>
        </div>

        <PasswordInput
          id="password"
          value={values.password}
          onChange={handleChange}
          error={errors.password}
          label="Password"
        />

        <PasswordInput
          id="confirmPassword"
          value={values.confirmPassword}
          onChange={handleChange}
          error={errors.confirmPassword}
          label="Confirm Password"
          placeholder="Re-enter your password"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white rounded-lg py-2 px-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transform transition-all duration-200 hover:scale-[1.01]"
        >
          Sign Up
        </button>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{' '}
          <Link to="/pm/v1/login" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
            Log In
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
};

export default SignupForm;

import React from 'react';
import { useForm } from '../../../UseHooks/UseForm';
import { emailRegex } from '../../../Utils/Validators';

const EnterEmail = ({ onNext }) => {
  const initialValues = {
    email: ''
  };

  const validationRules = {
    email: {
      required: { value: true, message: 'Email is required' },
      pattern: { value: emailRegex, message: 'Please enter a valid email address' }
    }
  };

  const {
    values,
    errors,
    handleChange,
    handleBlur,
    handleSubmit
  } = useForm(initialValues, validationRules, onSubmit);

  function onSubmit(data) {
    console.log('Sending OTP to:', data.email);
    onNext(data.email);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <p className="text-gray-600 mb-4">
        Enter your email address and we'll send you a 6-digit code to reset your password.
      </p>

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

      <button
        type="submit"
        className="w-full bg-blue-600 text-white rounded-lg py-2 px-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transform transition-all duration-200 hover:scale-[1.01]"
      >
        Send OTP
      </button>
    </form>
  );
};

export default EnterEmail;

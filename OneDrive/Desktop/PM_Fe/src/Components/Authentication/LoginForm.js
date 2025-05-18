import React from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../../Layouts/AuthLayout';
import PasswordInput from '../../Refactor/Password';
import { useForm } from '../../UseHooks/UseForm'
import { emailRegex } from '../../Utils/Validators';

const LoginForm = () => {
  const initialValues = {
    email: '',
    password: ''
  };

  const validationRules = {
    email: {
      required: { value: true, message: 'Email is required' },
      pattern: { value: emailRegex, message: 'Please enter a valid email address' }
    },
    password: {
      required: { value: true, message: 'Password is required' }
    }
  };

  const {
    values,
    errors,
    handleChange,
    handleBlur,
    handleSubmit
  } = useForm(initialValues, validationRules, onSubmit , '/pm/v1/property');

  function onSubmit(data) {
    console.log('Login form submitted with:', data);
    alert('Login successful! Check console for details.');
  }

  return (
    <AuthLayout title="Welcome Back">
      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
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

        <PasswordInput
          id="password"
          value={values.password}
          onChange={handleChange}
          error={errors.password}
          label="Password"
        />

        <div className="flex justify-end">
          <Link to="/pm/v1/forgot-password" className="text-sm text-blue-600 hover:text-blue-800 transition-colors duration-200">
            Forgot password?
          </Link>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white rounded-lg py-2 px-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transform transition-all duration-200 hover:scale-[1.01]"
        >
          Log In
        </button>

        <p className="text-center text-sm text-gray-600 mt-4">
          Don't have an account?{' '}
          <Link to="/pm/v1/signup" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
            Create new account
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
};

export default LoginForm;

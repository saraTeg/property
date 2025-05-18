import React from 'react';
import { useForm } from '../../../UseHooks/UseForm';
import PasswordInput from '../../../Refactor/Password';

const ResetPassword = ({ email, onComplete, onBack }) => {
  const initialValues = {
    newPassword: '',
    confirmNewPassword: ''
  };

  const validationRules = {
    newPassword: {
      required: { value: true, message: 'New password is required' },
      minLength: { value: 8, message: 'Password must be at least 8 characters' }
    },
    confirmNewPassword: {
      required: { value: true, message: 'Please confirm your password' },
      validate: {
        matchesPassword: (value, formValues) =>
          value === formValues.newPassword || 'Passwords do not match'
      }
    }
  };

  const {
    values,
    errors,
    handleChange,
    handleSubmit
  } = useForm(initialValues, validationRules, onSubmit , "/pm/v1/login" );
  function onSubmit(data) {
    console.log('Resetting password for:', email, 'with new password');
    onComplete();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <p className="text-gray-600 mb-4">
        Create a new password for your account.
      </p>

      <PasswordInput
        id="newPassword"
        value={values.newPassword}
        onChange={handleChange}
        error={errors.newPassword}
        label="New Password"
      />

      <PasswordInput
        id="confirmNewPassword"
        value={values.confirmNewPassword}
        onChange={handleChange}
        error={errors.confirmNewPassword}
        label="Confirm New Password"
        placeholder="Re-enter your new password"
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white rounded-lg py-2 px-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transform transition-all duration-200 hover:scale-[1.01]"
      >
        Reset Password
      </button>

      <button
        type="button"
        onClick={onBack}
        className="w-full mt-2 bg-transparent text-gray-600 border border-gray-300 rounded-lg py-2 px-4 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50 transition-all duration-200"
      >
        Back
      </button>
    </form>
  );
};

export default ResetPassword ;

import React from 'react';
import { useForm } from '../../../UseHooks/UseForm';
import { otpRegex } from '../../../Utils/Validators';

const EnterOTP = ({ email, onNext, onBack }) => {
  const initialValues = {
    otp: ''
  };

  const validationRules = {
    otp: {
      required: { value: true, message: 'OTP is required' },
      pattern: { value: otpRegex, message: 'OTP must be a 6-digit number' }
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
    console.log('Verifying OTP:', data.otp, 'for email:', email);
    onNext();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <p className="text-gray-600 mb-4">
        We've sent a 6-digit code to <strong>{email}</strong>. 
        Please enter it below to verify your identity.
      </p>

      <div className="mb-4">
        <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-1">
          6-Digit Code
        </label>
        <input
          id="otp"
          name="otp"
          type="text"
          value={values.otp}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="123456"
          maxLength={6}
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ${
            errors.otp ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.otp && <p className="mt-1 text-sm text-red-500">{errors.otp}</p>}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white rounded-lg py-2 px-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transform transition-all duration-200 hover:scale-[1.01]"
      >
        Verify
      </button>

      <button
        type="button"
        onClick={onBack}
        className="w-full mt-2 bg-transparent text-gray-600 border border-gray-300 rounded-lg py-2 px-4 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50 transition-all duration-200"
      >
        Back to Email
      </button>

      <p className="text-center text-sm text-gray-600 mt-4">
        Didn't receive the code?{' '}
        <button 
          type="button"
          className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
          onClick={() => alert('Resending OTP...')}
        >
          Resend
        </button>
      </p>
    </form>
  );
};

export default EnterOTP;

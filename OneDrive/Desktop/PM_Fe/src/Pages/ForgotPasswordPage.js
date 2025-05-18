import React, { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import AuthLayout from '../Layouts/AuthLayout';
import EnterEmail from '../Components/Authentication/ForgotPassword/EnterEmail';
import EnterOTP from '../Components/Authentication/ForgotPassword/EnterOTP';
import ResetPassword from '../Components/Authentication/ForgotPassword/ResetPassword';

const ForgotPasswordPage = () => {
  const ForgotPasswordStep = {
    ENTER_EMAIL: 0,
    ENTER_OTP: 1,
    RESET_PASSWORD: 2
  };

  const [currentStep, setCurrentStep] = useState(ForgotPasswordStep.ENTER_EMAIL);
  const [email, setEmail] = useState('');
  const history = useHistory();

  const handleEmailSubmit = (submittedEmail) => {
    setEmail(submittedEmail);
    setCurrentStep(ForgotPasswordStep.ENTER_OTP);
  };

  const handleOTPSubmit = () => {
    setCurrentStep(ForgotPasswordStep.RESET_PASSWORD);
  };

  const handlePasswordReset = () => {
    alert('Password reset successful! You can now log in with your new password.');
    history.push('/login');
  };

  const goToEmailStep = () => {
    setCurrentStep(ForgotPasswordStep.ENTER_EMAIL);
  };

  const goToOTPStep = () => {
    setCurrentStep(ForgotPasswordStep.ENTER_OTP);
  };

  const getStepTitle = () => {
    switch (currentStep) {
      case ForgotPasswordStep.ENTER_EMAIL:
        return 'Forgot Password';
      case ForgotPasswordStep.ENTER_OTP:
        return 'Verify OTP';
      case ForgotPasswordStep.RESET_PASSWORD:
        return 'Reset Password';
      default:
        return 'Forgot Password';
    }
  };

  return (
    <AuthLayout title={getStepTitle()}>
      <div className="animate-fadeIn ">
        {currentStep === ForgotPasswordStep.ENTER_EMAIL && (
          <EnterEmail onNext={handleEmailSubmit} />
        )}

        {currentStep === ForgotPasswordStep.ENTER_OTP && (
          <EnterOTP
            email={email}
            onNext={handleOTPSubmit}
            onBack={goToEmailStep}
          />
        )}

        {currentStep === ForgotPasswordStep.RESET_PASSWORD && (
          <ResetPassword
            email={email}
            onComplete={handlePasswordReset}
            onBack={goToOTPStep}
          />
        )}
      </div>
    </AuthLayout>
  );
};

export default ForgotPasswordPage;

import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const AuthLayout = ({ 
  title, 
  children,
  showBackButton = true
}) => {
  const history = useHistory();

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <div className="min-h-screen bg-custom-gradient-top flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl">
          <div className="relative p-6">
            {showBackButton && (
              <button 
                className="absolute top-6 left-6 text-gray-500 hover:text-gray-700 transition-colors duration-200 focus:outline-none"
                onClick={handleGoBack}
                aria-label="Go back"
              >
                <ArrowLeft size={20} />
              </button>
            )}
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">{title}</h1>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;

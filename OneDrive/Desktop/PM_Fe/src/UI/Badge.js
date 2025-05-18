import React from 'react';

const Badge = ({ status = 'unknown', className = '' }) => {
  const baseStyles = 'px-2 py-1 text-xs font-medium rounded-full';

  const statusStyles = {
    // Property statuses
    available: 'bg-green-100 text-green-800',
    rented: 'bg-blue-100 text-blue-800',
    maintenance: 'bg-yellow-100 text-yellow-800',

    // Lease statuses
    active: 'bg-green-100 text-green-800',
    pending: 'bg-blue-100 text-blue-800',
    terminated: 'bg-red-100 text-red-800',
    expired: 'bg-gray-100 text-gray-800',

    // Rental history statuses
    completed: 'bg-green-100 text-green-800',
    defaulted: 'bg-red-100 text-red-800',

    // Default for unknown status
    unknown: 'bg-gray-100 text-gray-800'
  };

  // Safe status text formatting
  const statusText = status?.length > 0 
    ? `${status[0].toUpperCase()}${status.slice(1)}`
    : 'Unknown';

  return (
    <span className={`${baseStyles} ${statusStyles[status.toLowerCase()] || statusStyles.unknown} ${className}`}>
      {statusText}
    </span>
  );
};

export default Badge;
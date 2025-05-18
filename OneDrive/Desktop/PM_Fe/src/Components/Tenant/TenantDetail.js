import React from 'react';
import { Calendar, DollarSign, FileText } from 'lucide-react';
import Modal from '../../UI/Modal';
import Button from '../../UI/Button';
import Badge from '../../UI/Badge';

const TenantDetail = ({ tenant, isOpen, onClose }) => {
  if (!tenant) return null;

  const getStatusColor = (status) => {
    switch(status?.toLowerCase()) {
      case 'active': return 'green';
      case 'pending': return 'yellow';
      case 'terminated': return 'red';
      default: return 'gray';
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Tenant Details"
      size="3xl"
      footer={<Button variant="outline" onClick={onClose}>Close</Button>}
    >
      <div className="space-y-6">
        <div className="flex items-start gap-6 p-4 bg-gray-50 rounded-lg">
          <div className="w-48 h-48 border rounded-md overflow-hidden">
            <img
              src={tenant.idVerification}
              alt="ID Verification"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold text-gray-800">{tenant.fullName}</h2>
            <div className="mt-2 space-y-1">
              <p className="text-gray-600"><strong>Email:</strong> {tenant.email}</p>
              <p className="text-gray-600"><strong>Phone:</strong> {tenant.phone}</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Rental Agreements</h3>
          <div className="space-y-4">
            {tenant.agreements?.map((agreement, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                        <Badge color={getStatusColor(agreement.status)}>
                            {agreement.status || 'Unknown Status'}
                        </Badge>
                    <span className="text-sm text-gray-600">
                      {agreement.startDate} - {agreement.endDate}
                    </span>
                  </div>
                  <Button variant="outline" size="sm" icon={<FileText size={16} />}>
                    View Agreement
                  </Button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <DollarSign size={16} className="text-gray-400" />
                    <span>${agreement.rentAmount}/month</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-gray-400" />
                    <span>Signed: {agreement.signDate}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-gray-600">{agreement.propertyTitle}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default TenantDetail;
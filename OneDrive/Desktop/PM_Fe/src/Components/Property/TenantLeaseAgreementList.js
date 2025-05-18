// LeaseAgreementList.jsx
import React from 'react';
import Modal from '../UI/Modal';
import Button from '../UI/Button';
import LeaseAgreementItem from '../Leases/LeaseDraftList';

const LeaseAgreementList = ({ property, isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Lease Agreements"
      size="xl"
    >
      <div className="space-y-4">
        {property?.leases?.map(lease => (
          <LeaseAgreementItem 
            key={lease.id}
            lease={lease}
            onViewDetails={() => {/* Open detail modal */}}
          />
        ))}

        <div className="mt-6">
          <Button
            variant="primary"
            onClick={() => {/* Handle new agreement */}}
            fullWidth
          >
            Create New Agreement
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default LeaseAgreementList ;
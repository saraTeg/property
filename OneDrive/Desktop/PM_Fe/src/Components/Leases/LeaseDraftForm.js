import React, { useState, useEffect } from 'react';
import Modal from '../../UI/Modal';
import Button from '../../UI/Button';

const LeaseDraftForm = ({
  propertyId,
  propertyTitle,
  rentAmount,
  draft,
  isEditing,
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [formData, setFormData] = useState({
    property_id: propertyId,
    start_date: '',
    end_date: '',
    rent_amount: rentAmount,
    due_date: '',
    status: 'Active',
    termination_reason: '',
  });

  useEffect(() => {
    if (draft) {
      setFormData({
        property_id: draft.propertyId,
        start_date: draft.startDate,
        end_date: draft.endDate,
        rent_amount: draft.rentAmount,
        due_date: draft.dueDate,
        status: draft.status,
        termination_reason: draft.terminationReason || '',
      });
    }
  }, [draft]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`${isEditing ? 'Edit' : 'Create'} Lease Draft - ${propertyTitle}`}
      size="3xl"
    >
      <form onSubmit={handleSubmit} className="space-y-4 p-4">
        {isEditing && (
          <div className="bg-blue-50 text-blue-800 p-3 rounded-md">
            Editing existing lease draft - Created on {new Date(draft.createdAt).toLocaleDateString()}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Start Date
            </label>
            <input
              type="date"
              name="start_date"
              value={formData.start_date}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              End Date
            </label>
            <input
              type="date"
              name="end_date"
              value={formData.end_date}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Due Date
            </label>
            <input
              type="date"
              name="due_date"
              value={formData.due_date}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Monthly Rent
            </label>
            <input
              type="number"
              name="rent_amount"
              value={formData.rent_amount}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Active">Active</option>
              <option value="Expired">Expired</option>
              <option value="Terminated">Terminated</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Termination Reason
            </label>
            <select
              name="termination_reason"
              value={formData.termination_reason}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">None</option>
              <option value="Mutual Agreement">Mutual Agreement</option>
              <option value="Non-Payment">Non-Payment</option>
              <option value="Violation of Terms">Violation of Terms</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="font-medium text-gray-900 mb-4">Legal Terms and Conditions</h3>
          <div className="bg-gray-50 p-4 rounded-md text-sm text-gray-600">
           <p>This lease agreement is made between the landlord and tenant for the property located at {propertyTitle}.</p>
            <ul className="list-disc ml-4 mt-2 space-y-1">
              <li>The tenant agrees to pay ${rentAmount} monthly rent on the specified due date</li>
              <li>The lease term begins on {formData.start_date} and ends on {formData.end_date}</li>
              <li>Rent payments are due on the {formData.due_date} of each month</li>
              <li>Late payments may incur additional fees</li>
              <li>The tenant must maintain the property in good condition</li>
              <li>Any modifications to the property require landlord approval</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-end gap-2 pt-4">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit">
            {isEditing ? 'Save Changes' : 'Create Lease Draft'}
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default LeaseDraftForm;

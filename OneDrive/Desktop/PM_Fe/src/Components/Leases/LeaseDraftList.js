import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, FileText, Edit, Trash2 } from 'lucide-react';
import Modal from '../../UI/Modal';
import Button from '../../UI/Button';
import Card from '../../UI/Card';
import LeaseDraftForm from './LeaseDraftForm';
import { leaseDrafts } from '../../Data/MockData';

const LeaseDraftList = ({
  propertyId,
  propertyTitle,
  rentAmount,
  isOpen,
  onClose,
}) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedDraft, setSelectedDraft] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const propertyDrafts = leaseDrafts.filter(draft => draft.propertyId === propertyId);

  const handleCreateDraft = (data) => {
    console.log('Create draft:', data);
    setIsFormOpen(false);
  };

  const handleEditDraft = (data) => {
    console.log('Edit draft:', data);
    setIsFormOpen(false);
    setSelectedDraft(null);
  };

  const handleDeleteDraft = (draftId) => {
    console.log('Delete draft:', draftId);
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title={`Lease Drafts - ${propertyTitle}`}
        size="3xl"
      >
        <div className="p-4">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-medium text-gray-900">Available Drafts</h3>
            <Button
              onClick={() => {
                setIsEditing(false);
                setIsFormOpen(true);
              }}
              icon={<Plus size={18} />}
            >
              Create Draft
            </Button>
          </div>

          <div className="space-y-4">
            {propertyDrafts.map((draft) => (
              <motion.div
                key={draft.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Card className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-50 rounded-lg">
                        <FileText className="text-blue-500" size={20} />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          Draft created on {new Date(draft.createdAt).toLocaleDateString()}
                        </p>
                        <p className="text-sm text-gray-500">
                          {new Date(draft.startDate).toLocaleDateString()} - {new Date(draft.endDate).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setSelectedDraft(draft);
                          setIsEditing(true);
                          setIsFormOpen(true);
                        }}
                        icon={<Edit size={16} />}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleDeleteDraft(draft.id)}
                        icon={<Trash2 size={16} />}
                      >
                        Delete
                      </Button>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Due Date</p>
                      <p className="font-medium">{new Date(draft.dueDate).toLocaleDateString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Rent Amount</p>
                      <p className="font-medium">${draft.rentAmount}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Status</p>
                      <p className="font-medium">{draft.status}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}

            {propertyDrafts.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-500">No lease drafts available for this property.</p>
              </div>
            )}
          </div>
        </div>
      </Modal>

      <LeaseDraftForm
        propertyId={propertyId}
        propertyTitle={propertyTitle}
        rentAmount={rentAmount}
        draft={selectedDraft}
        isEditing={isEditing}
        isOpen={isFormOpen}
        onClose={() => {
          setIsFormOpen(false);
          setSelectedDraft(null);
          setIsEditing(false);
        }}
        onSubmit={isEditing ? handleEditDraft : handleCreateDraft}
      />
    </>
  );
};

export default LeaseDraftList;
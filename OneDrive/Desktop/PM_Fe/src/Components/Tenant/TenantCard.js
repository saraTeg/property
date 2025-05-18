import React from 'react';
import { motion } from 'framer-motion';
import { Trash2, Eye } from 'lucide-react';
import Card from '../../UI/Card';
import Button from '../../UI/Button';

const TenantCard = ({ tenant, onView, onDelete }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      <Card className="overflow-hidden">
        <div className="p-4 flex items-center justify-between">
          <div className="flex-1">
            <h3 className="font-semibold text-gray-800">{tenant.fullName}</h3>
            <p className="text-sm text-gray-500 mt-1">{tenant.email}</p>
            <p className="text-sm text-gray-500">{tenant.phone}</p>
          </div>
          
          <div className="flex items-center gap-4 ml-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onView(tenant.id)}
              icon={<Eye size={16} />}
            >
              Details
            </Button>
            <Button
              variant="danger"
              size="sm"
              onClick={() => onDelete(tenant.id)}
              icon={<Trash2 size={16} />}
            >
              Delete
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default TenantCard;
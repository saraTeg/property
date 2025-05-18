// Modified PropertyCard.jsx for Tenant
import React from 'react';
import { motion } from 'framer-motion';
import { Eye, FileText } from 'lucide-react';
import Card from '../../UI/Card';
import Badge from '../../UI/Badge';
import Button from '../../UI/Button';

const TenantPropertyCard = ({ property, onView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="overflow-hidden">
        {/* ... (same image and basic info) */}

        <div className="grid grid-cols-2 gap-2 mt-4">
          <div className="col-span-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onView(property.id)}
              icon={<Eye size={16} />}
              fullWidth
            >
              View Details
            </Button>
          </div>
          <Button
            variant="primary"
            size="sm"
            onClick={() => {/* Handle lease request */}}
            icon={<FileText size={16} />}
            fullWidth
            className="col-span-2"
          >
            Request Lease
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};

export default TenantPropertyCard; 
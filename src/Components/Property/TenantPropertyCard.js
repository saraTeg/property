import React from 'react';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';
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
        <div className="relative">
          <img
            src={property.imageUrl}
            alt={property.title}
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-2 right-2">
            <Badge status={property.status} />
          </div>
        </div>

        <div className="p-4">
          <h3 className="font-semibold text-gray-800 mb-1">{property.title}</h3>
          <p className="text-sm text-gray-500 mb-2">
            {property.address}, {property.city}
          </p>
          <p className="text-lg font-medium text-blue-600 mb-4">
            ${property.rentAmount}/month
          </p>

          <Button
            variant="primary"
            size="sm"
            onClick={() => onView(property.id)}
            icon={<Eye size={16} />}
            fullWidth
          >
            View Details
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};

export default TenantPropertyCard;
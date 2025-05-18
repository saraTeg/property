import React from 'react';
import { motion } from 'framer-motion';
import { Edit, Trash2, Eye , FileText} from 'lucide-react';
import Card from '../../UI/Card';
import Badge from '../../UI/Badge';
import Button from '../../UI/Button';

const PropertyCard = ({
  property,
  onView,
  onEdit,
  onDelete,
  onDraftLease,
}) => {
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
          <h3 className="font-semibold text-gray-800">{property.title}</h3>
          <p className="text-sm text-gray-500 mt-1">
            {property.address}, {property.city}
          </p>

          <div className="flex justify-between items-center mt-3">
            <p className="text-sm font-medium text-gray-700">
              ${property.rentAmount}/month
            </p>
            <div className="flex">
              <span className="text-xs text-gray-500">{property.bedrooms} bd</span>
              <span className="mx-1 text-gray-300">|</span>
              <span className="text-xs text-gray-500">{property.bathrooms} ba</span>
              <span className="mx-1 text-gray-300">|</span>
              <span className="text-xs text-gray-500">{property.squareFeet} sqft</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 mt-4">
            <div className="col-span-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => onDraftLease(property.id)}
                icon={<FileText size={16} />}
                fullWidth
              >
                Draft Lease
              </Button>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onView(property.id)}
              icon={<Eye size={16} />}
            >
              View
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onEdit(property.id)}
              icon={<Edit size={16} />}
            >
              Edit
            </Button>
            <Button
              variant="danger"
              size="sm"
              onClick={() => onDelete(property.id)}
              icon={<Trash2 size={16} />}
              fullWidth
              className="col-span-2"
            >
              Delete
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default PropertyCard;
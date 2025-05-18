import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, DollarSign } from 'lucide-react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import { payments } from '../Data/MockData';

const Payments = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [updatedPayments, setUpdatedPayments] = useState(payments);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredPayments = updatedPayments.filter(payment =>
    payment.rentalAgreement_Id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleMarkAsPaid = (paymentId) => {
    setUpdatedPayments(prevPayments =>
      prevPayments.map(payment =>
        payment.id === paymentId
          ? { ...payment, payment_status: 'Paid' }
          : payment
      )
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Payment Records</h1>
      </div>

      <div className="relative">
        <input
          type="text"
          placeholder="Search by Tenant Agreement ID..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={searchTerm}
          onChange={handleSearch}
        />
        <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
      </div>

      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tenant</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Property Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredPayments.map((payment) => (
                <motion.tr
                  key={payment.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="hover:bg-gray-50"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{payment.tenant.full_name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{payment.tenant.email}</div>
                    <div className="text-sm text-gray-500">{payment.tenant.phone_Number}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{payment.property_type}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm font-medium text-gray-900">
                      <DollarSign size={16} className="text-green-500 mr-1" />
                      {payment.rent_amount}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {new Date(payment.due_date).toLocaleDateString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      payment.payment_status === 'Paid'
                        ? 'bg-green-100 text-green-800'
                        : payment.payment_status === 'Pending'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {payment.payment_status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {payment.payment_status !== 'Paid' && (
                      <Button
                        variant="success"
                        size="sm"
                        onClick={() => handleMarkAsPaid(payment.id)}
                      >
                        Mark as Paid
                      </Button>
                    )}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default Payments;

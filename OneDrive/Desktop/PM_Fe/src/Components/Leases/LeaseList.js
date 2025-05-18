// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Plus, Search, SlidersHorizontal, FileText, Eye, Edit, Trash2 } from 'lucide-react';
// import Button from '../../UI/Button';
// import Card from '../../UI/Card';
// import Badge from '../../UI/Badge';
// import { leases, properties } from '../../Data/MockData';

// const LeaseList = () => {
//   const [searchTerm, setSearchTerm] = useState('');
  
//   const filteredLeases = leases.filter(lease => 
//     lease.tenantName.toLowerCase().includes(searchTerm.toLowerCase())
//   );
  
//   const getPropertyTitle = (propertyId) => {
//     const property = properties.find(p => p.id === propertyId);
//     return property ? property.title : 'Unknown Property';
//   };

//   return (
//     <div className="space-y-6">
//       <div className="flex items-center justify-between mb-6">
//         <h1 className="text-2xl font-bold text-gray-800">Rental Agreements</h1>
//         <Button 
//           onClick={() => console.log('Add lease')}
//           icon={<Plus size={18} />}
//         >
//           Add Lease
//         </Button>
//       </div>

//       <div className="flex flex-col md:flex-row gap-4">
//         <div className="relative flex-1">
//           <input
//             type="text"
//             placeholder="Search by tenant name..."
//             className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
//         </div>
//         <Button 
//           variant="outline"
//           className="md:w-auto"
//           icon={<SlidersHorizontal size={18} />}
//         >
//           Filters
//         </Button>
//       </div>

//       <motion.div 
//         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ staggerChildren: 0.1 }}
//       >
//         {filteredLeases.map(lease => (
//           <LeaseCard 
//             key={lease.id} 
//             lease={lease} 
//             propertyTitle={getPropertyTitle(lease.propertyId)}
//           />
//         ))}
//       </motion.div>

//       {filteredLeases.length === 0 && (
//         <div className="text-center py-8">
//           <p className="text-gray-500">No leases found. Try adjusting your search.</p>
//         </div>
//       )}
//     </div>
//   );
// };

// const LeaseCard = ({ lease, propertyTitle }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.3 }}
//     >
//       <Card className="overflow-hidden">
//         <div className="bg-blue-50 p-4 border-b border-blue-100 flex items-center gap-3">
//           <div className="bg-blue-100 p-2 rounded-full">
//             <FileText className="text-blue-500" size={20} />
//           </div>
//           <div>
//             <h3 className="font-semibold text-gray-800">{lease.tenantName}</h3>
//             <p className="text-sm text-gray-500">{propertyTitle}</p>
//           </div>
//         </div>
        
//         <div className="p-4">
//           <div className="flex justify-between mb-3">
//             <span className="text-sm text-gray-500">Status</span>
//             <Badge status={lease.status} />
//           </div>
          
//           <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4">
//             <div>
//               <span className="text-xs text-gray-500">Start Date</span>
//               <p className="text-sm font-medium">{new Date(lease.startDate).toLocaleDateString()}</p>
//             </div>
//             <div>
//               <span className="text-xs text-gray-500">End Date</span>
//               <p className="text-sm font-medium">{new Date(lease.endDate).toLocaleDateString()}</p>
//             </div>
//             <div>
//               <span className="text-xs text-gray-500">Monthly Rent</span>
//               <p className="text-sm font-medium">${lease.monthlyRent}</p>
//             </div>
//             <div>
//               <span className="text-xs text-gray-500">Security Deposit</span>
//               <p className="text-sm font-medium">${lease.securityDeposit}</p>
//             </div>
//           </div>
          
//           <div className="flex justify-between gap-2 mt-4">
//             <Button 
//               variant="outline"
//               size="sm"
//               onClick={() => console.log('View lease', lease.id)}
//               icon={<Eye size={16} />}
//             >
//               View
//             </Button>
//             <Button 
//               variant="outline"
//               size="sm"
//               onClick={() => console.log('Edit lease', lease.id)}
//               icon={<Edit size={16} />}
//             >
//               Edit
//             </Button>
//             <Button 
//               variant="danger"
//               size="sm"
//               onClick={() => console.log('Delete lease', lease.id)}
//               icon={<Trash2 size={16} />}
//             >
//               Delete
//             </Button>
//           </div>
//         </div>
//       </Card>
//     </motion.div>
//   );
// };

// export default LeaseList;
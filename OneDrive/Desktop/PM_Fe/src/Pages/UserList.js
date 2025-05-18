import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Ban, UserCog, Check } from 'lucide-react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import { users } from '../Data/MockData';

const UserList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = roleFilter ? user.role === roleFilter : true;
    return matchesSearch && matchesRole;
  });

  const handleRoleUpdate = (userId, newRole) => {
    console.log(`Update user ${userId} role to ${newRole}`);
    // API call to update user role would go here
  };

  const handleStatusToggle = (userId, currentStatus) => {
    const newStatus = currentStatus === 'active' ? 'inactive' : 'active';
    console.log(`Toggle user ${userId} status to ${newStatus}`);
    // API call to toggle user status would go here
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">User Management</h1>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search users by name or email..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
        <select
          className="px-4 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
        >
          <option value="">All Roles</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
          <option value="tenant">Tenant</option>

        </select>
      </div>

      <div className="grid gap-4">
        {filteredUsers.map((user) => (
          <motion.div
            key={user.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="p-4">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-lg font-medium text-gray-600">
                      {user.fullName.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{user.fullName}</h3>
                    <p className="text-sm text-gray-500">{user.email}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        user.role === 'admin' ? 'bg-purple-100 text-purple-800' :
                        user.role === 'tenant' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                      </span>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        user.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <div className="relative">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedUser(selectedUser === user.id ? null : user.id)}
                      icon={<UserCog size={16} />}
                      className="z-20"
                    >
                      Update Role
                    </Button>
                    
                    {selectedUser === user.id && (
                      <>
                        <div 
                          className="fixed inset-0 z-10" 
                          onClick={() => setSelectedUser(null)}
                        />
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute left-0 mt-[2px] text-xs flex w-60 bg-white rounded-md shadow-lg z-50 border border-gray-200"
                        >
                          {['admin', 'user', 'tenant'].map((role) => (
                            <button
                              key={role}
                              className={`w-full  text-left px-4 py-2 text-sm hover:bg-gray-50 ${
                                role === user.role ? 'bg-gray-100' : ''
                              }`}
                              onClick={() => {
                                handleRoleUpdate(user.id, role);
                                setSelectedUser(null);
                              }}
                            >
                              {role.charAt(0).toUpperCase() + role.slice(1)}
                            </button>
                          ))}
                        </motion.div>
                      </>
                    )}
                  </div>

                  <Button
                    variant={user.status === 'active' ? 'danger' : 'success'}
                    size="sm"
                    onClick={() => handleStatusToggle(user.id, user.status)}
                    icon={user.status === 'active' ? <Ban size={16} /> : <Check size={16} />}
                  >
                    {user.status === 'active' ? 'Ban User' : 'Activate User'}
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}

        {filteredUsers.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">No users found. Try adjusting your search or filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserList;
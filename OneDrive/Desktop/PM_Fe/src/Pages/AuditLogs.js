import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Clock, User, Activity } from 'lucide-react';
import Card from '../UI/Card';
import { auditLogs } from '../Data/MockData';

const AuditLogs = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredLogs = auditLogs.filter(log =>
    log.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    log.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
    log.resource.toLowerCase().includes(searchTerm.toLowerCase()) ||
    log.details.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getActionColor = (action) => {
    
    switch (action) {
      case 'create': return 'text-green-500';
      case 'update': return 'text-blue-500';
      case 'delete': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  const getActionBg = (action) => {
    switch (action) {
      case 'create': return 'bg-green-100';
      case 'update': return 'bg-blue-100';
      case 'delete': return 'bg-red-100';
      default: return 'bg-gray-100';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Audit Logs</h1>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search logs..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>

      <motion.div
        className="space-y-4 relative before:absolute before:inset-0 before:left-[19px] before:ml-0.5 before:w-0.5 before:bg-gray-200 before:h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {filteredLogs.map((log, index) => (
          <motion.div
            key={log.id}
            className="relative pl-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <div className={`absolute top-5 left-0 w-10 h-10 flex items-center justify-center rounded-full z-10 ${getActionBg(log.action)}`}>
              <Activity className={getActionColor(log.action)} size={18} />
            </div>

            <div className="w-full">
              <Card className="relative ml-2">
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${getActionBg(log.action)} ${getActionColor(log.action)}`}>
                        {log.action.toUpperCase()}
                      </span>
                      <span className="ml-2 text-sm font-medium text-gray-500">
                        {log.resource.charAt(0).toUpperCase() + log.resource.slice(1)}
                      </span>
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <Clock size={14} className="mr-1" />
                      {new Date(log.timestamp).toLocaleString()}
                    </div>
                  </div>

                  <p className="text-sm text-gray-700 mb-2">{log.details}</p>

                  <div className="flex items-center text-xs text-gray-500">
                    <User size={14} className="mr-1" />
                    {log.userName}
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {filteredLogs.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500">No audit logs found. Try adjusting your search.</p>
        </div>
      )}
    </div>
  );
};

export default AuditLogs;

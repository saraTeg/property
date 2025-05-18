export const Property = {
    title: '',
    address: '',
    district: '',
    usage_type: 'Residential',
    property_type: '',
    width: '',
    status: 'Available',
    number_of_rooms: '',
    rent_estimation: '',
};

export const Lease = {
  id: '',
  propertyId: '',
  tenantName: '',
  tenantEmail: '',
  tenantPhone: '',
  startDate: '',
  endDate: '',
  monthlyRent: 0,
  securityDeposit: 0,
  status: 'active' // 'active' | 'pending' | 'terminated' | 'expired'
};

export const LeaseDraft = {
  id: '',
  propertyId: '',
  startDate: '',
  endDate: '',
  dueDate: '',
  rentAmount: 0,
  status: 'Active', // 'Active' | 'Expired' | 'Terminated'
  terminationReason: '', // optional: 'Mutual Agreement' | 'Non-Payment' | 'Violation of Terms' | 'Other'
  createdAt: '',
  updatedAt: ''
};

export const RentalHistory = {
  id: '',
  propertyId: '',
  propertyTitle: '',
  tenantName: '',
  startDate: '',
  endDate: '',
  totalAmount: 0,
  status: 'completed' // 'completed' | 'terminated' | 'defaulted'
};

export const AuditLog = {
  id: '',
  timestamp: '',
  userId: '',
  userName: '',
  action: 'create', // 'create' | 'update' | 'delete' | 'view'
  resource: 'property', // 'property' | 'lease' | 'user'
  resourceId: '',
  details: ''
};

export const User = {
  id: '',
  fullName: '',
  email: '',
  role: 'admin', // 'admin' | 'user' | 'tenant'
  status: 'active', // 'active' | 'inactive'
  passwordChangedAt: '',
  avatar: ''
};

export const NavItem = {
  title: '',
  path: '',
  icon: null // ReactNode
};

export const Notification = {
  id: '',
  recipient: '',
  message: '',
  status: 'Sent', // 'Sent' | 'Pending' | 'Failed'
  notification_type: '',
  created_at: ''
};

export const Payment = {
  id: '',
  tenant: {
    full_name: '',
    email: '',
    phone_Number: 0
  },
  property_type: '',
  rent_amount: 0,
  due_date: '',
  payment_status: 'Pending', // 'Pending' | 'Paid' | 'Overdue'
  rentalAgreement_Id: ''
};

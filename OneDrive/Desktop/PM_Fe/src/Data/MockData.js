// mockData.js

export const currentUser = {
    id: 'user-1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'admin',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600'
  };
  
  export const properties = [
    {
      id: 'prop-1',
      title: 'Modern Downtown Apartment',
      address: '123 Main Street',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94105',
      bedrooms: 2,
      bathrooms: 2,
      squareFeet: 1200,
      rentAmount: 3200,
      status: 'available',
      imageUrl: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 'prop-2',
      title: 'Luxurious Beach House',
      address: '456 Ocean Drive',
      city: 'Miami',
      state: 'FL',
      zipCode: '33139',
      bedrooms: 4,
      bathrooms: 3,
      squareFeet: 2800,
      rentAmount: 5500,
      status: 'rented',
      imageUrl: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 'prop-3',
      title: 'Cozy Suburban Home',
      address: '789 Maple Avenue',
      city: 'Austin',
      state: 'TX',
      zipCode: '78704',
      bedrooms: 3,
      bathrooms: 2,
      squareFeet: 1800,
      rentAmount: 2800,
      status: 'maintenance',
      imageUrl: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 'prop-4',
      title: 'Downtown Studio Loft',
      address: '101 Market Street',
      city: 'Seattle',
      state: 'WA',
      zipCode: '98101',
      bedrooms: 1,
      bathrooms: 1,
      squareFeet: 750,
      rentAmount: 1950,
      status: 'available',
      imageUrl: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];
  
  export const leases = [
    {
      id: 'lease-1',
      propertyId: 'prop-2',
      tenantName: 'Alice Johnson',
      tenantEmail: 'alice.j@example.com',
      tenantPhone: '555-123-4567',
      startDate: '2023-01-01',
      endDate: '2024-01-01',
      monthlyRent: 5500,
      securityDeposit: 5500,
      status: 'active'
    },
    {
      id: 'lease-2',
      propertyId: 'prop-3',
      tenantName: 'Bob Smith',
      tenantEmail: 'bob.smith@example.com',
      tenantPhone: '555-987-6543',
      startDate: '2023-03-15',
      endDate: '2024-03-15',
      monthlyRent: 2800,
      securityDeposit: 2800,
      status: 'active'
    },
    {
      id: 'lease-3',
      propertyId: 'prop-1',
      tenantName: 'Charlie Davis',
      tenantEmail: 'charlie.d@example.com',
      tenantPhone: '555-456-7890',
      startDate: '2022-07-01',
      endDate: '2023-07-01',
      monthlyRent: 3000,
      securityDeposit: 3000,
      status: 'terminated'
    }
  ];

  export const leaseDrafts = [
  {
    id: 'draft-1',
    propertyId: 'prop-1',
    startDate: '2024-03-01',
    endDate: '2025-03-01',
    dueDate: '2024-03-01',
    rentAmount: 3200,
    status: 'Active',
    createdAt: '2024-02-15T10:00:00Z'
  },
  {
    id: 'draft-2',
    propertyId: 'prop-1',
    startDate: '2024-04-01',
    endDate: '2025-04-01',
    dueDate: '2024-04-01',
    rentAmount: 3400,
    status: 'Active',
    createdAt: '2024-02-16T14:30:00Z'
  },
  {
    id: 'draft-3',
    propertyId: 'prop-2',
    startDate: '2024-05-01',
    endDate: '2025-05-01',
    dueDate: '2024-05-01',
    rentAmount: 5500,
    status: 'Active',
    createdAt: '2024-02-17T09:15:00Z'
  }
];

  export const rentalHistory = [
    {
      id: 'history-1',
      propertyId: 'prop-1',
      propertyTitle: 'Modern Downtown Apartment',
      tenantName: 'David Wilson',
      startDate: '2021-01-01',
      endDate: '2022-01-01',
      totalAmount: 36000,
      status: 'completed'
    },
    {
      id: 'history-2',
      propertyId: 'prop-2',
      propertyTitle: 'Luxurious Beach House',
      tenantName: 'Emma Brown',
      startDate: '2021-06-15',
      endDate: '2022-12-15',
      totalAmount: 99000,
      status: 'completed'
    },
    {
      id: 'history-3',
      propertyId: 'prop-3',
      propertyTitle: 'Cozy Suburban Home',
      tenantName: 'Frank White',
      startDate: '2022-01-01',
      endDate: '2022-09-01',
      totalAmount: 22400,
      status: 'terminated'
    }
  ];
  
export const tenants = [
  {
    id: 'tenant-1',
    fullName: 'Alice Johnson',
    email: 'alice.j@example.com',
    phone: '555-123-4567',
    idVerification: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
    agreements: [
      {
        id: 'agreement-1',
        propertyId: 'prop-2',
        status: 'Active',
        startDate: '2023-01-01',
        endDate: '2024-01-01',
        signDate: '2023-01-01',
        rentAmount: 5500,
        propertyTitle: 'Luxurious Beach House'
      }
    ]
  },
  {
    id: 'tenant-2',
    fullName: 'Bob Smith',
    email: 'bob.smith@example.com',
    phone: '555-987-6543',
    idVerification: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600',
    agreements: [
      {
        id: 'agreement-2',
        propertyId: 'prop-3',
        status: 'Active',
        startDate: '2023-03-15',
        endDate: '2024-03-15',
        signDate: '2023-03-10',
        rentAmount: 2800,
        propertyTitle: 'Cozy Suburban Home'
      }
    ]
  },
  {
    id: 'tenant-3',
    fullName: 'Charlie Davis',
    email: 'charlie.d@example.com',
    phone: '555-456-7890',
    idVerification: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600',
    agreements: [
      {
        id: 'agreement-3',
        propertyId: 'prop-1',
        status: 'Terminated',
        startDate: '2022-07-01',
        endDate: '2023-07-01',
        signDate: '2022-06-20',
        rentAmount: 3000,
        propertyTitle: 'Modern Downtown Apartment'
      }
    ]
  },
  {
    id: 'tenant-4',
    fullName: 'Emma Brown',
    email: 'emma.b@example.com',
    phone: '555-321-6547',
    idVerification: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=600',
    agreements: [
      {
        id: 'agreement-4',
        propertyId: 'prop-4',
        status: 'Pending',
        startDate: '2024-03-01',
        endDate: '2025-03-01',
        signDate: '2024-02-25',
        rentAmount: 1950,
        propertyTitle: 'Downtown Studio Loft'
      }
    ]
  }
];

  export const auditLogs = [
    {
      id: 'log-1',
      timestamp: '2023-06-15T14:30:00Z',
      userId: 'user-1',
      userName: 'John Doe',
      action: 'create',
      resource: 'property',
      resourceId: 'prop-4',
      details: 'Created new property: Downtown Studio Loft'
    },
    {
      id: 'log-2',
      timestamp: '2023-06-14T10:15:00Z',
      userId: 'user-1',
      userName: 'John Doe',
      action: 'update',
      resource: 'lease',
      resourceId: 'lease-2',
      details: 'Updated lease terms for Bob Smith'
    },
    {
      id: 'log-3',
      timestamp: '2023-06-12T09:45:00Z',
      userId: 'user-1',
      userName: 'John Doe',
      action: 'delete',
      resource: 'lease',
      resourceId: 'lease-3',
      details: 'Terminated lease for Charlie Davis'
    },
    {
      id: 'log-4',
      timestamp: '2023-06-10T16:20:00Z',
      userId: 'user-1',
      userName: 'John Doe',
      action: 'update',
      resource: 'property',
      resourceId: 'prop-3',
      details: 'Changed property status to maintenance'
    }
  ];
  
  export const users = [
  {
    id: '681475a38028395831bd9444',
    fullName: 'hizikyas',
    email: 'hizikyas@gmail.com',
    role: 'tenant',
    status: 'active',
    passwordChangedAt: '2025-05-06T14:38:14.768Z'
  },
  {
    id: '6814825e8b6cf375991ddc2f',
    fullName: 'admin',
    email: 'admin@gmail.com',
    role: 'admin',
    status: 'active'
  },
  {
    id: '681b20ef172988f508368d9a',
    fullName: 'PropEase',
    email: 'propeasepropertymanagement@gmail.com',
    role: 'user',
    status: 'active',
    passwordChangedAt: '2025-05-07T09:23:05.007Z'
  },
  {
    id: '681f5f7bcc5e8661f5b07e6e',
    fullName: 'melody',
    email: 'melody@gmail.com',
    role: 'user',
    status: 'active'
  }
];

export const notifications = [
  {
    id: "682441d0823f5fcbc2622f61",
    recipient: "bdu140454512345564565f@bdu.edu.et",
    message: "Lease agreement for 321 Main Street is expiring in 16 days.",
    status: "Sent",
    notification_type: "Lease Expiring",
    created_at: "2025-05-14T07:10:08.819Z"
  },
  {
    id: "682441d0823f5fcbc2622f62",
    recipient: "tenant@example.com",
    message: "Your rent payment is due in 5 days.",
    status: "Sent",
    notification_type: "Payment Reminder",
    created_at: "2025-05-13T15:30:00.000Z"
  },
  {
    id: "682441d0823f5fcbc2622f63",
    recipient: "maintenance@example.com",
    message: "New maintenance request submitted for 456 Oak Street.",
    status: "Pending",
    notification_type: "Maintenance Request",
    created_at: "2025-05-13T10:15:00.000Z"
  }
];

export const payments = [
  {
    id: "68243c7ef10f3b76a59fadb2",
    tenant: {
      full_name: "adugna",
      phone_Number: 1918781911,
      email: "bdu140454512345564565f@bdu.edu.et"
    },
    property_type: "Retail Store",
    rent_amount: 2500,
    due_date: "2025-05-14T00:00:00.000Z",
    payment_status: "Pending",
    rentalAgreement_Id: "682256d8664e5d939d84cc96"
  },
  {
    id: "68243c7ef10f3b76a59fadb3",
    tenant: {
      full_name: "John Doe",
      phone_Number: 1234567890,
      email: "john@example.com"
    },
    property_type: "Apartment",
    rent_amount: 1800,
    due_date: "2025-05-15T00:00:00.000Z",
    payment_status: "Paid",
    rentalAgreement_Id: "682256d8664e5d939d84cc97"
  },
  {
    id: "68243c7ef10f3b76a59fadb4",
    tenant: {
      full_name: "Jane Smith",
      phone_Number: 9876543210,
      email: "jane@example.com"
    },
    property_type: "Office Space",
    rent_amount: 3500,
    due_date: "2025-05-10T00:00:00.000Z",
    payment_status: "Overdue",
    rentalAgreement_Id: "682256d8664e5d939d84cc98"
  }
];
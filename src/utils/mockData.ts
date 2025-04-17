
// Mock user data
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'citizen' | 'authority';
  avatar?: string;
}

export interface Comment {
  id: string;
  issueId: string;
  userId: string;
  userName: string;
  userRole: 'citizen' | 'authority';
  content: string;
  createdAt: string;
}

export interface StatusUpdate {
  status: 'open' | 'in-progress' | 'resolved';
  timestamp: string;
  updatedBy: string;
  updatedByName: string;
  updatedByRole: 'citizen' | 'authority';
  note?: string;
}

export interface Issue {
  id: string;
  title: string;
  description: string;
  category: string;
  location: string;
  coordinates?: { lat: number; lng: number };
  status: 'open' | 'in-progress' | 'resolved';
  priority: 'low' | 'medium' | 'high' | 'emergency';
  upvotes: number;
  reportedBy: string;
  reportedByName: string;
  images: string[];
  createdAt: string;
  updatedAt: string;
  comments: Comment[];
  statusTimeline: StatusUpdate[];
  views: number;
  shares: number;
  isVerified: boolean;
  tags: string[];
  estimatedCompletionDate?: string;
  actualCompletionDate?: string;
  language?: string;
}

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Jane Doe',
    email: 'jane@example.com',
    role: 'citizen',
  },
  {
    id: '2',
    name: 'John Smith',
    email: 'john@example.com',
    role: 'citizen',
  },
  {
    id: '3',
    name: 'Admin User',
    email: 'admin@cityworks.gov',
    role: 'authority',
  },
];

export const mockIssues: Issue[] = [
  {
    id: '1',
    title: 'Pothole on Main Street',
    description: 'Large pothole near the intersection of Main and Oak. It\'s been growing for weeks and is now a hazard for vehicles.',
    category: 'Roads & Potholes',
    location: '123 Main Street',
    coordinates: { lat: 40.7128, lng: -74.006 },
    status: 'open',
    priority: 'high',
    upvotes: 15,
    reportedBy: '1',
    reportedByName: 'Jane Doe',
    images: ['https://images.unsplash.com/photo-1584715642381-6f1c4b452b1c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'],
    createdAt: '2025-04-10T08:30:00Z',
    updatedAt: '2025-04-10T08:30:00Z',
    comments: [
      {
        id: 'c1',
        issueId: '1',
        userId: '2',
        userName: 'John Smith',
        userRole: 'citizen',
        content: 'I hit this pothole yesterday and it damaged my tire. Please fix ASAP!',
        createdAt: '2025-04-11T10:20:00Z',
      },
      {
        id: 'c2',
        issueId: '1',
        userId: '3',
        userName: 'Admin User',
        userRole: 'authority',
        content: 'We have scheduled a repair for next week. Thank you for reporting.',
        createdAt: '2025-04-12T14:15:00Z',
      },
    ],
    statusTimeline: [
      {
        status: 'open',
        timestamp: '2025-04-10T08:30:00Z',
        updatedBy: '1',
        updatedByName: 'Jane Doe',
        updatedByRole: 'citizen',
        note: 'Issue reported'
      }
    ],
    views: 45,
    shares: 8,
    isVerified: true,
    tags: ['pothole', 'road damage', 'hazard'],
    estimatedCompletionDate: '2025-04-20T00:00:00Z',
    language: 'en'
  },
  {
    id: '2',
    title: 'Broken Street Light',
    description: 'Street light at the corner of Elm and Pine has been out for over a week, creating a safety hazard at night.',
    category: 'Street Lighting',
    location: 'Corner of Elm and Pine',
    coordinates: { lat: 40.7218, lng: -74.0134 },
    status: 'in-progress',
    priority: 'medium',
    upvotes: 8,
    reportedBy: '2',
    reportedByName: 'John Smith',
    images: ['https://images.unsplash.com/photo-1543674892-7d64d45abd30?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'],
    createdAt: '2025-04-08T15:45:00Z',
    updatedAt: '2025-04-13T09:20:00Z',
    comments: [
      {
        id: 'c3',
        issueId: '2',
        userId: '3',
        userName: 'Admin User',
        userRole: 'authority',
        content: 'Our maintenance team has been dispatched to assess the situation.',
        createdAt: '2025-04-13T09:20:00Z',
      },
    ],
    statusTimeline: [
      {
        status: 'open',
        timestamp: '2025-04-08T15:45:00Z',
        updatedBy: '2',
        updatedByName: 'John Smith',
        updatedByRole: 'citizen',
        note: 'Issue reported'
      },
      {
        status: 'in-progress',
        timestamp: '2025-04-13T09:20:00Z',
        updatedBy: '3',
        updatedByName: 'Admin User',
        updatedByRole: 'authority',
        note: 'Dispatched maintenance team'
      }
    ],
    views: 22,
    shares: 3,
    isVerified: true,
    tags: ['streetlight', 'safety', 'night'],
    estimatedCompletionDate: '2025-04-15T00:00:00Z',
    language: 'en'
  },
  {
    id: '3',
    title: 'Overflowing Trash Bin',
    description: 'Public trash bin at Central Park entrance is overflowing and attracting pests.',
    category: 'Sanitation & Garbage',
    location: 'Central Park East Entrance',
    coordinates: { lat: 40.7648, lng: -73.9724 },
    status: 'resolved',
    priority: 'medium',
    upvotes: 12,
    reportedBy: '1',
    reportedByName: 'Jane Doe',
    images: ['https://images.unsplash.com/photo-1595278069441-2cf29f8005a4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'],
    createdAt: '2025-04-05T11:20:00Z',
    updatedAt: '2025-04-07T13:10:00Z',
    comments: [
      {
        id: 'c4',
        issueId: '3',
        userId: '1',
        userName: 'Jane Doe',
        userRole: 'citizen',
        content: 'This has been a problem for weeks now. The bin is always full!',
        createdAt: '2025-04-05T12:30:00Z',
      },
      {
        id: 'c5',
        issueId: '3',
        userId: '3',
        userName: 'Admin User',
        userRole: 'authority',
        content: 'We have emptied the bin and increased collection frequency for this location.',
        createdAt: '2025-04-07T13:10:00Z',
      },
      {
        id: 'c6',
        issueId: '3',
        userId: '1',
        userName: 'Jane Doe',
        userRole: 'citizen',
        content: 'Thank you for the quick response! The area looks much better now.',
        createdAt: '2025-04-08T09:45:00Z',
      },
    ],
    statusTimeline: [
      {
        status: 'open',
        timestamp: '2025-04-05T11:20:00Z',
        updatedBy: '1',
        updatedByName: 'Jane Doe',
        updatedByRole: 'citizen',
        note: 'Issue reported'
      },
      {
        status: 'in-progress',
        timestamp: '2025-04-06T10:30:00Z',
        updatedBy: '3',
        updatedByName: 'Admin User',
        updatedByRole: 'authority',
        note: 'Scheduled for cleanup'
      },
      {
        status: 'resolved',
        timestamp: '2025-04-07T13:10:00Z',
        updatedBy: '3',
        updatedByName: 'Admin User',
        updatedByRole: 'authority',
        note: 'Cleaned up and increased collection frequency'
      }
    ],
    views: 38,
    shares: 5,
    isVerified: true,
    tags: ['garbage', 'sanitation', 'public space'],
    actualCompletionDate: '2025-04-07T13:10:00Z',
    language: 'en'
  },
  {
    id: '4',
    title: 'Fallen Tree Blocking Sidewalk',
    description: 'A large tree has fallen and is completely blocking the sidewalk on Washington Avenue.',
    category: 'Parks & Trees',
    location: '456 Washington Ave',
    coordinates: { lat: 40.7328, lng: -74.0228 },
    status: 'open',
    priority: 'emergency',
    upvotes: 20,
    reportedBy: '2',
    reportedByName: 'John Smith',
    images: ['https://images.unsplash.com/photo-1517660029921-0cbea2f15f8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'],
    createdAt: '2025-04-15T07:50:00Z',
    updatedAt: '2025-04-15T07:50:00Z',
    comments: [],
    statusTimeline: [
      {
        status: 'open',
        timestamp: '2025-04-15T07:50:00Z',
        updatedBy: '2',
        updatedByName: 'John Smith',
        updatedByRole: 'citizen',
        note: 'Issue reported as emergency'
      }
    ],
    views: 65,
    shares: 12,
    isVerified: true,
    tags: ['fallen tree', 'obstruction', 'emergency', 'safety'],
    language: 'en'
  },
  {
    id: '5',
    title: 'Graffiti on Public Library',
    description: 'The west wall of the public library has been vandalized with graffiti.',
    category: 'Vandalism & Graffiti',
    location: 'City Public Library, 789 Jefferson St',
    coordinates: { lat: 40.7412, lng: -74.0101 },
    status: 'in-progress',
    priority: 'low',
    upvotes: 5,
    reportedBy: '1',
    reportedByName: 'Jane Doe',
    images: ['https://images.unsplash.com/photo-1584483766114-2cea6facdf57?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'],
    createdAt: '2025-04-14T14:30:00Z',
    updatedAt: '2025-04-16T10:15:00Z',
    comments: [
      {
        id: 'c7',
        issueId: '5',
        userId: '3',
        userName: 'Admin User',
        userRole: 'authority',
        content: 'Cleaning crew has been scheduled for tomorrow morning.',
        createdAt: '2025-04-16T10:15:00Z',
      },
    ],
    statusTimeline: [
      {
        status: 'open',
        timestamp: '2025-04-14T14:30:00Z',
        updatedBy: '1',
        updatedByName: 'Jane Doe',
        updatedByRole: 'citizen',
        note: 'Issue reported'
      },
      {
        status: 'in-progress',
        timestamp: '2025-04-16T10:15:00Z',
        updatedBy: '3',
        updatedByName: 'Admin User',
        updatedByRole: 'authority',
        note: 'Scheduled for cleanup'
      }
    ],
    views: 18,
    shares: 2,
    isVerified: true,
    tags: ['graffiti', 'vandalism', 'public property'],
    estimatedCompletionDate: '2025-04-17T00:00:00Z',
    language: 'en'
  }
];

// Mock categories
export const categories = [
  'Roads & Potholes',
  'Street Lighting',
  'Sanitation & Garbage',
  'Parks & Trees',
  'Vandalism & Graffiti',
  'Public Safety',
  'Water & Sewage',
  'Electricity Issues',
  'Public Transport',
  'Noise Complaints',
  'Air Pollution',
  'Stray Animals',
  'Illegal Construction',
  'Illegal Parking',
  'Footpath Issues',
  'Public Property Damage',
  'Digital Infrastructure',
  'Traffic Signals',
  'Other'
];

// Mock active user
export let currentUser: User | null = null;

// Helper function to simulate login
export const login = (email: string, password: string): User | null => {
  const user = mockUsers.find(u => u.email === email);
  if (user) {
    currentUser = user;
    return user;
  }
  return null;
};

// Helper function to simulate logout
export const logout = () => {
  currentUser = null;
};

// Helper function to get issues
export const getIssues = (filter?: {
  status?: 'open' | 'in-progress' | 'resolved',
  category?: string,
  reportedBy?: string
}) => {
  let filtered = [...mockIssues];
  
  if (filter?.status) {
    filtered = filtered.filter(issue => issue.status === filter.status);
  }
  
  if (filter?.category) {
    filtered = filtered.filter(issue => issue.category === filter.category);
  }
  
  if (filter?.reportedBy) {
    filtered = filtered.filter(issue => issue.reportedBy === filter.reportedBy);
  }
  
  return filtered;
};

// Helper function to get a single issue by ID
export const getIssueById = (id: string): Issue | undefined => {
  return mockIssues.find(issue => issue.id === id);
};

// Helper to update issue status
export const updateIssueStatus = (issueId: string, status: 'open' | 'in-progress' | 'resolved', note?: string) => {
  const issueIndex = mockIssues.findIndex(i => i.id === issueId);
  if (issueIndex !== -1) {
    const timestamp = new Date().toISOString();
    // Default to admin user for demo purposes
    const updatedBy = '3';
    const updater = mockUsers.find(u => u.id === updatedBy);
    
    if (!updater) return null;
    
    // Create status update for timeline
    const statusUpdate: StatusUpdate = {
      status,
      timestamp,
      updatedBy,
      updatedByName: updater.name,
      updatedByRole: updater.role,
      note: note || `Status changed to ${status}`
    };
    
    // Update the issue
    mockIssues[issueIndex].status = status;
    mockIssues[issueIndex].updatedAt = timestamp;
    mockIssues[issueIndex].statusTimeline.push(statusUpdate);
    
    // If marked as resolved, set actual completion date
    if (status === 'resolved') {
      mockIssues[issueIndex].actualCompletionDate = timestamp;
    }
    
    return mockIssues[issueIndex];
  }
  return null;
};

// Helper to add comment
export const addComment = (issueId: string, userId: string, content: string) => {
  const user = mockUsers.find(u => u.id === userId);
  if (!user) return null;
  
  const issueIndex = mockIssues.findIndex(i => i.id === issueId);
  if (issueIndex === -1) return null;
  
  const timestamp = new Date().toISOString();
  
  const newComment: Comment = {
    id: `c${Date.now()}`,
    issueId,
    userId,
    userName: user.name,
    userRole: user.role,
    content,
    createdAt: timestamp
  };
  
  mockIssues[issueIndex].comments.push(newComment);
  mockIssues[issueIndex].updatedAt = timestamp;
  mockIssues[issueIndex].views += 1;
  return newComment;
};

// Helper to upvote an issue
export const upvoteIssue = (issueId: string) => {
  const issueIndex = mockIssues.findIndex(i => i.id === issueId);
  if (issueIndex !== -1) {
    mockIssues[issueIndex].upvotes += 1;
    // Increment views when upvoting
    mockIssues[issueIndex].views += 1;
    return mockIssues[issueIndex];
  }
  return null;
};

// Helper to view an issue - increments view count
export const viewIssue = (issueId: string) => {
  const issueIndex = mockIssues.findIndex(i => i.id === issueId);
  if (issueIndex !== -1) {
    mockIssues[issueIndex].views += 1;
    return mockIssues[issueIndex];
  }
  return null;
};

// Helper to share an issue - increments share count
export const shareIssue = (issueId: string) => {
  const issueIndex = mockIssues.findIndex(i => i.id === issueId);
  if (issueIndex !== -1) {
    mockIssues[issueIndex].shares += 1;
    return mockIssues[issueIndex];
  }
  return null;
};

// Helper to report an emergency issue
export const reportEmergencyIssue = (issueData: Partial<Issue>) => {
  // Generate a new ID
  const id = `${mockIssues.length + 1}`;
  const timestamp = new Date().toISOString();
  
  // Default to first user for demo purposes
  const reportedBy = issueData.reportedBy || '1';
  const reporter = mockUsers.find(u => u.id === reportedBy);
  
  if (!reporter) return null;
  
  const newIssue: Issue = {
    id,
    title: issueData.title || 'Emergency Issue',
    description: issueData.description || 'Emergency issue reported',
    category: issueData.category || 'Public Safety',
    location: issueData.location || 'Unknown location',
    coordinates: issueData.coordinates,
    status: 'open',
    priority: 'emergency',
    upvotes: 1, // Start with one upvote
    reportedBy,
    reportedByName: reporter.name,
    images: issueData.images || [],
    createdAt: timestamp,
    updatedAt: timestamp,
    comments: [],
    statusTimeline: [
      {
        status: 'open',
        timestamp,
        updatedBy: reportedBy,
        updatedByName: reporter.name,
        updatedByRole: reporter.role,
        note: 'Emergency issue reported'
      }
    ],
    views: 1, // Start with one view
    shares: 0,
    isVerified: false,
    tags: issueData.tags || ['emergency'],
    language: issueData.language || 'en'
  };
  
  mockIssues.push(newIssue);
  return newIssue;
};
